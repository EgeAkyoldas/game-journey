#!/usr/bin/env node
/**
 * Data integrity assertions. Exits 1 on any violation.
 * Run before and after any backfill.
 */
import { pathToFileURL } from 'node:url';
import { loadItems } from './lib/load-items.mjs';
import { CHECKLIST_SECTIONS as MERGED_SECTIONS } from '../src/data/index.js';
import { REGIONS, normalizeRegion } from '../src/data/regions.js';

const EXPECTED_TOTAL = 886;
const EXPECTED_SECTIONS = 40;
const VALID_CHAPTERS = new Set([1, 2, 3, 4, 5, 6, 'epilogue']);

// Regression floors, not targets: these are the coverage levels observed
// after backfill was fixed to stop laundering circular CSV sources back in
// as verified facts. If coverage falls below these floors, something broke
// the backfill (e.g. it started reading its own merged output again, or a
// CSV source regressed) — treat it as a failure, not a target to chase.
const MIN_CHAPTER_COVERAGE = 700;
const MIN_REGION_COVERAGE = 500;

/**
 * Flatten a CHECKLIST_SECTIONS-shaped array into a flat item list, matching
 * the item/subItem expansion in lib/load-items.mjs.
 */
function flattenSections(sections) {
  const items = [];
  for (const section of sections) {
    for (const item of section.items || []) {
      items.push(item);
      for (const sub of item.subItems || []) {
        items.push(sub);
      }
    }
  }
  return items;
}

/**
 * Coverage must be checked against the MERGED data (curated sections with
 * the generated backfill overlay applied via src/data/index.js), not the
 * raw curated data that loadItems() now returns. The raw curated data only
 * has partial chapter/region coverage by design — the backfill overlay is
 * what fills it in — so asserting coverage against loadItems() output would
 * always fail regardless of whether the backfill actually ran correctly.
 */
export function checkCoverage(mergedItems) {
  const errors = [];

  const chapterCoverage = mergedItems.filter(item => item.chapter !== undefined && item.chapter !== null).length;
  const regionCoverage = mergedItems.filter(item => item.region !== undefined && item.region !== null).length;

  if (chapterCoverage < MIN_CHAPTER_COVERAGE) {
    errors.push(`chapter coverage: ${chapterCoverage} is below the regression floor of ${MIN_CHAPTER_COVERAGE}`);
  }
  if (regionCoverage < MIN_REGION_COVERAGE) {
    errors.push(`region coverage: ${regionCoverage} is below the regression floor of ${MIN_REGION_COVERAGE}`);
  }

  return { ok: errors.length === 0, errors, chapterCoverage, regionCoverage };
}

export function checkData(items, sectionCounts) {
  const errors = [];

  if (items.length !== EXPECTED_TOTAL) {
    errors.push(`total items: expected ${EXPECTED_TOTAL}, got ${items.length}`);
  }

  const sectionCount = Object.keys(sectionCounts).length;
  if (sectionCount !== EXPECTED_SECTIONS) {
    errors.push(`sections: expected ${EXPECTED_SECTIONS}, got ${sectionCount}`);
  }

  const seen = new Set();
  for (const item of items) {
    if (seen.has(item.id)) errors.push(`duplicate id: ${item.id}`);
    seen.add(item.id);

    for (const field of ['id', 'text', 'tip']) {
      if (!item[field]) errors.push(`${item.id || '(no id)'}: missing ${field}`);
    }

    if (item.chapter !== undefined && !VALID_CHAPTERS.has(item.chapter)) {
      errors.push(`${item.id}: invalid chapter ${JSON.stringify(item.chapter)}`);
    }

    if (item.region) {
      const normalized = normalizeRegion(item.region);
      if (!REGIONS.some(r => r.id === normalized)) {
        errors.push(`${item.id}: region "${item.region}" does not normalize to a known region`);
      }
    }

    if (item.provenance) {
      for (const field of Object.keys(item.provenance)) {
        const state = item.provenance[field];
        if (state !== 'derived' && state !== 'unknown') {
          errors.push(`${item.id}: provenance.${field} has invalid state "${state}"`);
        }
        if (state === 'derived' && item[field] === undefined) {
          errors.push(`${item.id}: provenance marks ${field} derived but the field is absent`);
        }
      }
    }
  }

  return { ok: errors.length === 0, errors };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { items, sectionCounts } = loadItems();
  const { ok: shapeOk, errors: shapeErrors } = checkData(items, sectionCounts);

  const mergedItems = flattenSections(MERGED_SECTIONS);
  const { ok: coverageOk, errors: coverageErrors, chapterCoverage, regionCoverage } = checkCoverage(mergedItems);

  const errors = [...shapeErrors, ...coverageErrors];
  const ok = shapeOk && coverageOk;

  if (ok) {
    console.log(`✓ data OK — ${items.length} items across ${Object.keys(sectionCounts).length} sections`);
    console.log(`✓ coverage OK — chapter ${chapterCoverage}/${mergedItems.length} (floor ${MIN_CHAPTER_COVERAGE}), region ${regionCoverage}/${mergedItems.length} (floor ${MIN_REGION_COVERAGE})`);
    process.exit(0);
  }

  console.error(`✗ ${errors.length} data integrity error(s):`);
  errors.slice(0, 50).forEach(e => console.error('  ' + e));
  if (errors.length > 50) console.error(`  …and ${errors.length - 50} more`);
  process.exit(1);
}
