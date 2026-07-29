#!/usr/bin/env node
/**
 * Three-pass backfill.
 *   Pass 1: fill empty chapter/region from the CSVs        -> verified
 *   Pass 2: record CSV-vs-app conflicts, app value wins    -> report only
 *   Pass 3: derive remaining chapters from ordered rules   -> derived
 *   Anything still empty                                   -> unknown
 *
 * Writes an overlay module. Never mutates src/data/sections/.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCSV } from './lib/csv.js';
import { loadItems } from './lib/load-items.mjs';
import { deriveChapter } from './lib/derive-rules.mjs';
import { normalizeRegion } from '../src/data/regions.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CSV_DIR = path.join(ROOT, 'research/data');
// Only independently-curated sources belong here. Anything generated FROM the
// app's own section files is circular evidence: merging it as "verified" would
// launder the app's own guesses back in as facts. That mistake previously gave
// 11 items a confidently-wrong `epilogue` chapter.
const CSV_FILES = ['data-verified.csv'];

// Files known to be produced by our own extract scripts. Kept as an explicit
// denylist so re-adding one to CSV_FILES fails loudly instead of silently
// re-introducing the circularity.
const GENERATED_CSVS = new Set(['data-review.csv', 'region-data.csv', 'app-export.csv']);

for (const file of CSV_FILES) {
  if (GENERATED_CSVS.has(path.basename(file)) || file.includes('generated/')) {
    console.error(
      `✗ ${file} is generated from the app's own data (see scripts/extract-items-csv.mjs).\n` +
      `  Using it as a backfill source is circular — it would re-import our own\n` +
      `  guesses as verified facts. Remove it from CSV_FILES.`
    );
    process.exit(1);
  }
}

const VALID_CHAPTERS = new Set(['1', '2', '3', '4', '5', '6', 'epilogue']);

function coerceChapter(raw) {
  const v = String(raw).trim().toLowerCase();
  if (!VALID_CHAPTERS.has(v)) return null;
  return v === 'epilogue' ? 'epilogue' : Number(v);
}

const { items } = loadItems();
const byId = new Map(items.map(i => [i.id, i]));

// ---- Pass 1 + 2: CSV merge and conflict detection
const csvValues = new Map();   // id -> { chapter?, region?, chapterFile?, regionFile? }
const conflicts = [];          // kind: 'app-vs-csv' | 'csv-vs-csv'

for (const file of CSV_FILES) {
  const rows = parseCSV(fs.readFileSync(path.join(CSV_DIR, file), 'utf8'));
  for (const row of rows) {
    const item = byId.get(row.id);
    if (!item) continue;

    const entry = csvValues.get(row.id) || {};

    const csvChapter = row.chapter ? coerceChapter(row.chapter) : null;
    if (csvChapter !== null) {
      if (item.chapter !== undefined) {
        if (item.chapter !== csvChapter) {
          conflicts.push({ kind: 'app-vs-csv', id: row.id, field: 'chapter', app: item.chapter, csv: csvChapter, file });
        }
      } else if (entry.chapter === undefined) {
        entry.chapter = csvChapter;
        entry.chapterFile = file;
      } else if (entry.chapter !== csvChapter) {
        conflicts.push({
          kind: 'csv-vs-csv',
          id: row.id,
          field: 'chapter',
          kept: entry.chapter,
          keptFile: entry.chapterFile,
          rejected: csvChapter,
          rejectedFile: file
        });
      }
    }

    if (row.region) {
      const csvRegion = row.region.trim().toLowerCase();
      if (item.region) {
        if (normalizeRegion(item.region) !== normalizeRegion(csvRegion)) {
          conflicts.push({ kind: 'app-vs-csv', id: row.id, field: 'region', app: item.region, csv: csvRegion, file });
        }
      } else if (entry.region === undefined) {
        entry.region = csvRegion;
        entry.regionFile = file;
      } else if (normalizeRegion(entry.region) !== normalizeRegion(csvRegion)) {
        conflicts.push({
          kind: 'csv-vs-csv',
          id: row.id,
          field: 'region',
          kept: entry.region,
          keptFile: entry.regionFile,
          rejected: csvRegion,
          rejectedFile: file
        });
      }
    }

    csvValues.set(row.id, entry);
  }
}

const appVsCsvConflicts = conflicts.filter(c => c.kind === 'app-vs-csv');
const csvVsCsvConflicts = conflicts.filter(c => c.kind === 'csv-vs-csv');

// ---- Pass 3: derivation, then unknown
const overlay = {};
const derivedByRule = {};
let unknownChapter = 0;
let unknownRegion = 0;

for (const item of items) {
  const fromCsv = csvValues.get(item.id) || {};
  const entry = {};
  const provenance = {};

  // chapter
  if (item.chapter !== undefined) {
    // already verified in curated data — nothing to record
  } else if (fromCsv.chapter !== undefined) {
    entry.chapter = fromCsv.chapter;          // verified: from source CSV
  } else {
    const merged = { ...item, region: item.region || fromCsv.region };
    const { value, rule } = deriveChapter(merged);
    if (value !== null) {
      entry.chapter = value;
      provenance.chapter = 'derived';
      derivedByRule[rule] = derivedByRule[rule] || [];
      derivedByRule[rule].push({ id: item.id, section: item._section, value });
    } else {
      provenance.chapter = 'unknown';
      unknownChapter++;
    }
  }

  // region
  if (item.region !== undefined) {
    // verified
  } else if (fromCsv.region !== undefined) {
    entry.region = fromCsv.region;
  } else {
    provenance.region = 'unknown';
    unknownRegion++;
  }

  if (Object.keys(provenance).length) entry.provenance = provenance;
  if (Object.keys(entry).length) overlay[item.id] = entry;
}

// ---- Write the overlay
const outDir = path.join(ROOT, 'src/data/generated');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'backfill.js'),
  `/**
 * GENERATED FILE — do not edit by hand.
 * Regenerate with: npm run backfill
 *
 * Keyed by item id. A field is verified unless \`provenance\` names it.
 */
export const BACKFILL = ${JSON.stringify(overlay, null, 2)};

export default BACKFILL;
`
);

// ---- Write the report
const chapterFromCsv = [...csvValues.values()].filter(v => v.chapter !== undefined).length;
const regionFromCsv = [...csvValues.values()].filter(v => v.region !== undefined).length;
const totalDerived = Object.values(derivedByRule).reduce((a, r) => a + r.length, 0);

let report = `# Backfill Report

Generated by \`npm run backfill\`. Review this instead of the data diff.

## Summary

| Pass | Result |
|---|---|
| 1 — CSV merge | ${chapterFromCsv} chapters, ${regionFromCsv} regions filled (verified) |
| 2 — conflicts | ${appVsCsvConflicts.length} app-vs-csv, ${csvVsCsvConflicts.length} csv-vs-csv unresolved |
| 3 — derivation | ${totalDerived} chapters derived |
| remaining | ${unknownChapter} chapter unknown, ${unknownRegion} region unknown |

Final coverage: chapter ${items.length - unknownChapter}/${items.length}, region ${items.length - unknownRegion}/${items.length}.

## Conflicts: app vs CSV — need a human decision

The app value was kept in every case below.

| id | field | app value | CSV value | source |
|---|---|---|---|---|
`;
for (const c of appVsCsvConflicts) {
  report += `| \`${c.id}\` | ${c.field} | \`${c.app}\` | \`${c.csv}\` | ${c.file} |\n`;
}
if (!appVsCsvConflicts.length) report += '| — | — | — | — | — |\n';

report += `\n## Conflicts: CSV vs CSV — need a human decision

The app had no value for these. Two CSV rows disagreed; the first-seen value was kept in the overlay, but the loser may be the correct one — review before trusting the overlay value.

| id | field | kept value | kept source | rejected value | rejected source |
|---|---|---|---|---|---|
`;
for (const c of csvVsCsvConflicts) {
  report += `| \`${c.id}\` | ${c.field} | \`${c.kept}\` | ${c.keptFile} | \`${c.rejected}\` | ${c.rejectedFile} |\n`;
}
if (!csvVsCsvConflicts.length) report += '| — | — | — | — | — | — |\n';

report += `\n## Derived values, grouped by rule\n
A wrong rule shows up as a wrong block, not scattered noise. Scan each block's premise before trusting it.\n`;
for (const [rule, entries] of Object.entries(derivedByRule)) {
  report += `\n### \`${rule}\` — ${entries.length} items\n\n`;
  const bySection = {};
  for (const e of entries) (bySection[e.section] ||= []).push(e);
  for (const [section, list] of Object.entries(bySection)) {
    report += `- **${section}** (${list.length}): set to \`${list[0].value}\`\n`;
  }
}

fs.writeFileSync(path.join(CSV_DIR, 'backfill-report.md'), report);

console.log(`✓ overlay written for ${Object.keys(overlay).length} items`);
console.log(`  CSV filled: ${chapterFromCsv} chapters, ${regionFromCsv} regions`);
console.log(`  derived:    ${totalDerived} chapters`);
console.log(`  unknown:    ${unknownChapter} chapter, ${unknownRegion} region`);
console.log(`  conflicts:  ${appVsCsvConflicts.length} app-vs-csv, ${csvVsCsvConflicts.length} csv-vs-csv (see research/data/backfill-report.md)`);
