# Data Integrity & Honest Filters Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Raise `chapter`/`region` coverage across all 886 checklist items, mark derived data as derived, and stop filters from silently hiding items that lack the field being filtered on.

**Architecture:** Curated section data under `src/data/sections/` is never mutated. A build-time script reads the CSVs in `research/data/`, applies ordered derivation rules, and emits a single generated overlay module keyed by item id. `src/data/index.js` merges that overlay over the raw sections at load, so a field is verified unless the overlay says otherwise. The filter layer then reads provenance to label derived values and to count — rather than silently drop — items with no value.

**Tech Stack:** Vanilla ES modules, Vite 6, Node 26 built-in `node:test` runner (no new dependencies).

## Global Constraints

- No new npm dependencies. `node:test` and `node:assert/strict` are built into Node 26.
- Never mutate files under `src/data/sections/`. All backfill output goes to `src/data/generated/backfill.js`.
- A field is **verified** if and only if the overlay's `provenance` does not mention it. Values: `'derived' | 'unknown'`.
- Item total must remain exactly **886**, with 886 unique ids, across 40 sections.
- `chapter` values are `1..6` (number) or `'epilogue'` (string). Never a string like `"Chapter 2"`.
- Every `region` must normalize to an id in `REGIONS` via `normalizeRegion()`.
- Run `npm run build` before any commit that touches `src/`.
- Do not deploy to Vercel. Deployment is explicitly out of scope for this plan.

## Deviation from the spec

The spec's Section 2 says the backfill script "rewrites the section data files". This plan does **not** do that. It emits `src/data/generated/backfill.js` and merges at load instead, because:

- rewriting 40 curated files in place produces an unreviewable diff, while an overlay is a one-file diff;
- in-place rewriting is the mechanism that could silently lose items — the exact risk the spec's validation section exists to catch;
- the overlay is idempotent and re-runnable without a dirty working tree.

Everything else in the spec is implemented as written.

## File Structure

**Created:**
- `src/data/regions.js` — region ids, sub-region map, `normalizeRegion`. Dependency-free so build scripts can import it without pulling in the whole data graph.
- `scripts/lib/csv.js` — CSV parsing. One responsibility: text → array of row objects.
- `scripts/lib/load-items.mjs` — flattens `CHECKLIST_SECTIONS` into a flat item array. Shared by the check and backfill scripts.
- `scripts/lib/derive-rules.mjs` — ordered chapter rules and region normalization rules. Pure functions, no I/O.
- `scripts/check-data.mjs` — integrity assertions. Exits non-zero on failure.
- `scripts/backfill-data.mjs` — orchestrator: CSV merge → conflict report → derivation → writes overlay + report.
- `src/data/provenance.js` — runtime helpers for reading provenance.
- `src/data/generated/backfill.js` — generated. Do not hand-edit.
- `research/data/backfill-report.md` — generated review artifact.
- `tests/csv.test.mjs`, `tests/derive-rules.test.mjs`, `tests/provenance.test.mjs`, `tests/filters.test.mjs`

**Modified:**
- `src/data/index.js` — merge the overlay into sections at load.
- `src/components/sidebar-v2/filters.js` — cumulative chapter, unknown counting, reward fix; region constants move to `src/data/regions.js`.
- `src/data/sections/mysteries.js` (or wherever the `region: 'all'` item lives) — replace the unfilterable `'all'` region.
- `src/components/checklist-v2/checklist.js:512-614` — pass real items to the filter, surface hidden counts.
- `src/components/checklist-v2/item-renderer.js:137-172` — derived badge rendering.
- `src/components/checklist-v2/styles/checklist.css` — derived badge + hidden-notice styles.
- `src/data/sections/companion-activities.js` — verify remaining 14 items.
- `package.json` — add `test`, `check-data`, `backfill` scripts.

---

### Task 1: Region module, data integrity check, and the two bad regions

Foundation. Every later task runs `check-data` to prove it broke nothing, so the two known-invalid region values must be fixed here — otherwise every later task inherits a failing check.

Region constants move out of `filters.js` first. `filters.js` imports `CHECKLIST_SECTIONS`, so a build script importing `normalizeRegion` from it would drag in the whole data graph — including, after Task 5, a generated file that does not exist on a fresh clone.

**Files:**
- Create: `src/data/regions.js`
- Create: `scripts/lib/load-items.mjs`
- Create: `scripts/check-data.mjs`
- Modify: `src/components/sidebar-v2/filters.js:29-64`
- Modify: the section file containing the `region: 'all'` item
- Modify: `package.json`

**Interfaces:**
- Produces:
  - `REGIONS: Array<{id: string, name: string}>` and `normalizeRegion(region: string) → string|null`, both from `src/data/regions.js`
  - `loadItems()` → `{ items: Array<Item & {_section: string}>, sectionCounts: Record<string, number> }`
  - `checkData(items, sectionCounts)` → `{ ok: boolean, errors: string[] }`

- [ ] **Step 1: Extract regions into a dependency-free module**

Create `src/data/regions.js`, moving the constants out of `filters.js` and adding Guarma:

```js
/**
 * Region ids and normalization.
 * Deliberately dependency-free: build scripts import this without pulling in
 * the checklist data graph.
 */

export const REGIONS = [
  { id: 'new-hanover', name: 'New Hanover' },
  { id: 'lemoyne', name: 'Lemoyne' },
  { id: 'west-elizabeth', name: 'West Elizabeth' },
  { id: 'new-austin', name: 'New Austin' },
  { id: 'ambarino', name: 'Ambarino' },
  { id: 'guarma', name: 'Guarma' }
];

const SUB_REGION_MAP = {
  // New Hanover
  'heartlands': 'new-hanover',
  'cumberland': 'new-hanover',
  'roanoke': 'new-hanover',
  'roanoke-ridge': 'new-hanover',
  // Ambarino
  'grizzlies': 'ambarino',
  'grizzlies-east': 'ambarino',
  'grizzlies-west': 'ambarino',
  // West Elizabeth
  'big-valley': 'west-elizabeth',
  'tall-trees': 'west-elizabeth',
  'great-plains': 'west-elizabeth',
  // Lemoyne
  'bayou': 'lemoyne',
  'saint-denis': 'lemoyne',
  'scarlett-meadows': 'lemoyne',
  'bluewater': 'lemoyne',
  // New Austin
  'gaptooth': 'new-austin',
  'rio-bravo': 'new-austin',
  'cholla': 'new-austin',
  'hennigans-stead': 'new-austin'
};

/**
 * @param {string} region
 * @returns {string|null} a main region id, or null
 */
export function normalizeRegion(region) {
  if (!region) return null;
  const lower = region.toLowerCase();
  if (REGIONS.some(r => r.id === lower)) return lower;
  return SUB_REGION_MAP[lower] || lower;
}
```

- [ ] **Step 2: Re-export from filters.js**

In `src/components/sidebar-v2/filters.js`, delete the `REGIONS` array, the `SUB_REGION_MAP` object, and the `normalizeRegion` function (lines 29–78), and replace them with a re-export so existing importers keep working unchanged:

```js
export { REGIONS, normalizeRegion } from '../../data/regions.js';
```

`filters.js` uses `normalizeRegion` internally too, so also add it to that file's own imports:

```js
import { normalizeRegion } from '../../data/regions.js';
```

- [ ] **Step 3: Create the item loader**

`scripts/lib/load-items.mjs`:

```js
/**
 * Flatten CHECKLIST_SECTIONS into a single array of items.
 * Sub-items are included as first-class items, matching how the app counts.
 */
import { CHECKLIST_SECTIONS } from '../../src/data/index.js';

export function loadItems() {
  const items = [];
  const sectionCounts = {};

  for (const section of CHECKLIST_SECTIONS) {
    let count = 0;
    for (const item of section.items || []) {
      items.push({ ...item, _section: section.id });
      count++;
      for (const sub of item.subItems || []) {
        items.push({ ...sub, _section: section.id });
        count++;
      }
    }
    if (count > 0) sectionCounts[section.id] = count;
  }

  return { items, sectionCounts };
}
```

- [ ] **Step 4: Write the check script**

`scripts/check-data.mjs`:

```js
#!/usr/bin/env node
/**
 * Data integrity assertions. Exits 1 on any violation.
 * Run before and after any backfill.
 */
import { loadItems } from './lib/load-items.mjs';
import { REGIONS, normalizeRegion } from '../src/data/regions.js';

const EXPECTED_TOTAL = 886;
const EXPECTED_SECTIONS = 40;
const VALID_CHAPTERS = new Set([1, 2, 3, 4, 5, 6, 'epilogue']);

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

const { items, sectionCounts } = loadItems();
const { ok, errors } = checkData(items, sectionCounts);

if (ok) {
  console.log(`✓ data OK — ${items.length} items across ${Object.keys(sectionCounts).length} sections`);
  process.exit(0);
}

console.error(`✗ ${errors.length} data integrity error(s):`);
errors.slice(0, 50).forEach(e => console.error('  ' + e));
if (errors.length > 50) console.error(`  …and ${errors.length - 50} more`);
process.exit(1);
```

- [ ] **Step 5: Add npm scripts**

In `package.json`, replace the `"scripts"` block with:

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "node --test tests/",
    "check-data": "node scripts/check-data.mjs",
    "backfill": "node scripts/backfill-data.mjs"
  },
```

- [ ] **Step 6: Run it — expect exactly one failure**

Run: `npm run check-data`
Expected: exits 1 with a single error, because Guarma is now a valid region but `all` is not:

```
✗ 1 data integrity error(s):
  <item-id>: region "all" does not normalize to a known region
```

Record the reported item id. If more than one error appears, stop and investigate — do not loosen the check to make it pass.

- [ ] **Step 7: Fix the `all` region item**

Locate it:

```bash
grep -rn "region: 'all'" src/data/sections/
```

Open that item and read its `text` and `tip`. Replace `'all'` with the specific region the tip describes. If the tip genuinely describes something map-wide with no single region, delete the `region` key entirely — the backfill will mark it `unknown`, which is honest, whereas `'all'` is a value that silently matches no filter.

- [ ] **Step 8: Verify the check now passes**

Run: `npm run check-data`
Expected: `✓ data OK — 886 items across 40 sections`

- [ ] **Step 9: Build and commit**

```bash
npm run build
git add src/data/regions.js src/components/sidebar-v2/filters.js src/data/sections/ scripts/lib/load-items.mjs scripts/check-data.mjs package.json
git commit -m "Extract region module, add data integrity check, fix unfilterable regions"
```

---

### Task 2: CSV parser

**Files:**
- Create: `scripts/lib/csv.js`
- Test: `tests/csv.test.mjs`

**Interfaces:**
- Produces: `parseCSV(text: string) → Array<Record<string, string>>`. Handles quoted fields, escaped `""`, embedded commas and newlines, and a leading UTF-8 BOM. Values are trimmed. Rows with a single empty column are dropped.

- [ ] **Step 1: Write the failing test**

`tests/csv.test.mjs`:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCSV } from '../scripts/lib/csv.js';

test('parses a simple row', () => {
  const rows = parseCSV('id,chapter\nfoo,2\n');
  assert.deepEqual(rows, [{ id: 'foo', chapter: '2' }]);
});

test('handles quoted fields containing commas', () => {
  const rows = parseCSV('id,text\n"a","Hello, partner"\n');
  assert.equal(rows[0].text, 'Hello, partner');
});

test('handles escaped double quotes', () => {
  const rows = parseCSV('id,text\n"a","He said ""howdy"""\n');
  assert.equal(rows[0].text, 'He said "howdy"');
});

test('handles newlines inside quoted fields', () => {
  const rows = parseCSV('id,text\n"a","line1\nline2"\n');
  assert.equal(rows[0].text, 'line1\nline2');
  assert.equal(rows.length, 1);
});

test('strips a UTF-8 BOM from the header', () => {
  const rows = parseCSV('﻿id,chapter\nfoo,2\n');
  assert.equal(rows[0].id, 'foo');
});

test('trims whitespace around values', () => {
  const rows = parseCSV('id,chapter\n  foo  ,  2  \n');
  assert.deepEqual(rows, [{ id: 'foo', chapter: '2' }]);
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module '../scripts/lib/csv.js'`

- [ ] **Step 3: Implement the parser**

`scripts/lib/csv.js`:

```js
/**
 * Minimal RFC-4180 CSV parser.
 * Supports quoted fields, "" escapes, embedded commas/newlines, and a BOM.
 */
export function parseCSV(text) {
  const rows = [];
  let row = [];
  let cur = '';
  let inQuotes = false;

  const src = text.replace(/^﻿/, '');

  for (let i = 0; i < src.length; i++) {
    const c = src[i];

    if (inQuotes) {
      if (c === '"') {
        if (src[i + 1] === '"') { cur += '"'; i++; }
        else inQuotes = false;
      } else {
        cur += c;
      }
      continue;
    }

    if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(cur); cur = ''; }
    else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
    else if (c !== '\r') cur += c;
  }

  if (cur !== '' || row.length) { row.push(cur); rows.push(row); }

  const header = rows.shift();
  if (!header) return [];

  return rows
    .filter(r => r.length > 1)
    .map(r => Object.fromEntries(
      header.map((h, i) => [h.trim(), (r[i] || '').trim()])
    ));
}
```

- [ ] **Step 4: Run tests**

Run: `npm test`
Expected: PASS, 6 tests

- [ ] **Step 5: Commit**

```bash
git add scripts/lib/csv.js tests/csv.test.mjs
git commit -m "Add CSV parser for data backfill"
```

---

### Task 3: Derivation rules

**Files:**
- Create: `scripts/lib/derive-rules.mjs`
- Test: `tests/derive-rules.test.mjs`

**Interfaces:**
- Consumes: nothing from earlier tasks.
- Produces:
  - `CHAPTER_RULES: Array<{ name: string, apply(item) → (number | 'epilogue' | null) }>` — evaluated in array order, first non-null wins.
  - `deriveChapter(item) → { value: number|'epilogue'|null, rule: string|null }`
  - `parseChapterFromText(text) → number | 'epilogue' | null`

- [ ] **Step 1: Write the failing test**

`tests/derive-rules.test.mjs`:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { deriveChapter, parseChapterFromText } from '../scripts/lib/derive-rules.mjs';

test('parses an explicit chapter mention', () => {
  assert.equal(parseChapterFromText('Available after Chapter 3'), 3);
  assert.equal(parseChapterFromText('Chapter 4 only'), 4);
  assert.equal(parseChapterFromText('Epilogue only'), 'epilogue');
});

test('ignores text with no chapter mention', () => {
  assert.equal(parseChapterFromText('West of Strawberry'), null);
  assert.equal(parseChapterFromText(''), null);
  assert.equal(parseChapterFromText(undefined), null);
});

test('explicit mention beats section rules', () => {
  const item = { _section: 'cig-fauna', tip: 'Only in Chapter 4' };
  assert.deepEqual(deriveChapter(item), { value: 4, rule: 'explicit-mention' });
});

test('New Austin content derives to epilogue', () => {
  const item = { _section: 'collectibles', region: 'new-austin', tip: 'Near Tumbleweed' };
  assert.deepEqual(deriveChapter(item), { value: 'epilogue', rule: 'new-austin' });
});

test('Guarma content derives to chapter 5', () => {
  const item = { _section: 'collectibles', region: 'guarma', tip: 'On the island' };
  assert.deepEqual(deriveChapter(item), { value: 5, rule: 'guarma' });
});

test('camp sections derive to chapter 2', () => {
  const item = { _section: 'camp', tip: 'Donate to the ledger' };
  assert.deepEqual(deriveChapter(item), { value: 2, rule: 'camp' });
});

test('open-world collectible sections derive to chapter 2', () => {
  const item = { _section: 'cig-fauna', tip: 'Behind the saloon' };
  assert.deepEqual(deriveChapter(item), { value: 2, rule: 'open-world' });
});

test('unmatched items derive to null', () => {
  const item = { _section: 'strangers', tip: 'Somewhere out there' };
  assert.deepEqual(deriveChapter(item), { value: null, rule: null });
});

test('rules are applied in precedence order, not data order', () => {
  // New Austin AND an explicit mention: the mention wins
  const item = { _section: 'collectibles', region: 'new-austin', tip: 'From Chapter 2' };
  assert.deepEqual(deriveChapter(item), { value: 2, rule: 'explicit-mention' });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module '../scripts/lib/derive-rules.mjs'`

- [ ] **Step 3: Implement the rules**

`scripts/lib/derive-rules.mjs`:

```js
/**
 * Chapter derivation rules, in precedence order. First non-null wins.
 * `chapter` means "earliest chapter this becomes reachable".
 */

const CAMP_SECTIONS = new Set(['camp', 'camp-requests', 'companion-activities']);

const OPEN_WORLD_SECTIONS = new Set([
  'collectibles', 'trapper', 'unique-hats', 'pamphlets', 'talismans',
  'bandit', 'explorer', 'hunter', 'herbalist', 'sharpshooter',
  'horseman', 'survivalist', 'gambler', 'weapons-expert',
  'cig-gunslingers', 'cig-stage', 'cig-travel', 'cig-fauna', 'cig-horses',
  'cig-prominent', 'cig-flora', 'cig-beauty', 'cig-champions', 'cig-vistas',
  'cig-artists', 'cig-inventions'
]);

const NEW_AUSTIN_REGIONS = new Set(['new-austin', 'gaptooth', 'rio-bravo', 'cholla', 'hennigans-stead']);

/**
 * Find an explicit chapter reference in free text.
 * @param {string} [text]
 * @returns {number|'epilogue'|null}
 */
export function parseChapterFromText(text) {
  if (!text) return null;
  if (/\bepilogue\b/i.test(text)) return 'epilogue';
  const match = text.match(/\bchapter\s*([1-6])\b/i);
  return match ? Number(match[1]) : null;
}

export const CHAPTER_RULES = [
  {
    name: 'explicit-mention',
    apply: item => parseChapterFromText(item.tip) ?? parseChapterFromText(item.tip_detailed)
  },
  {
    name: 'new-austin',
    apply: item => (item.region && NEW_AUSTIN_REGIONS.has(item.region.toLowerCase()) ? 'epilogue' : null)
  },
  {
    name: 'guarma',
    apply: item => (item.region && item.region.toLowerCase() === 'guarma' ? 5 : null)
  },
  {
    name: 'camp',
    apply: item => (CAMP_SECTIONS.has(item._section) ? 2 : null)
  },
  {
    name: 'open-world',
    apply: item => (OPEN_WORLD_SECTIONS.has(item._section) ? 2 : null)
  }
];

/**
 * @param {object} item - must carry `_section`
 * @returns {{ value: number|'epilogue'|null, rule: string|null }}
 */
export function deriveChapter(item) {
  for (const rule of CHAPTER_RULES) {
    const value = rule.apply(item);
    if (value !== null && value !== undefined) {
      return { value, rule: rule.name };
    }
  }
  return { value: null, rule: null };
}
```

- [ ] **Step 4: Run tests**

Run: `npm test`
Expected: PASS, 15 tests total (6 CSV + 9 rules)

- [ ] **Step 5: Commit**

```bash
git add scripts/lib/derive-rules.mjs tests/derive-rules.test.mjs
git commit -m "Add chapter derivation rules with precedence order"
```

---

### Task 4: Backfill script and report

**Files:**
- Create: `scripts/backfill-data.mjs`
- Generates: `src/data/generated/backfill.js`, `research/data/backfill-report.md`

**Interfaces:**
- Consumes: `parseCSV` (Task 2), `deriveChapter` (Task 3), `loadItems` (Task 1)
- Produces: `src/data/generated/backfill.js` with a default export shaped `{ [itemId]: { chapter?, region?, provenance: { [field]: 'derived'|'unknown' } } }`

- [ ] **Step 1: Write the backfill script**

`scripts/backfill-data.mjs`:

```js
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
const CSV_FILES = ['data-verified.csv', 'data-review.csv', 'region-data.csv'];

const VALID_CHAPTERS = new Set(['1', '2', '3', '4', '5', '6', 'epilogue']);

function coerceChapter(raw) {
  const v = String(raw).trim().toLowerCase();
  if (!VALID_CHAPTERS.has(v)) return null;
  return v === 'epilogue' ? 'epilogue' : Number(v);
}

const { items } = loadItems();
const byId = new Map(items.map(i => [i.id, i]));

// ---- Pass 1 + 2: CSV merge and conflict detection
const csvValues = new Map();   // id -> { chapter?, region? }
const conflicts = [];

for (const file of CSV_FILES) {
  const rows = parseCSV(fs.readFileSync(path.join(CSV_DIR, file), 'utf8'));
  for (const row of rows) {
    const item = byId.get(row.id);
    if (!item) continue;

    const entry = csvValues.get(row.id) || {};

    const csvChapter = row.chapter ? coerceChapter(row.chapter) : null;
    if (csvChapter !== null) {
      if (item.chapter !== undefined && item.chapter !== csvChapter) {
        conflicts.push({ id: row.id, field: 'chapter', app: item.chapter, csv: csvChapter, file });
      } else if (item.chapter === undefined && entry.chapter === undefined) {
        entry.chapter = csvChapter;
      }
    }

    if (row.region) {
      const csvRegion = row.region.trim().toLowerCase();
      if (item.region && normalizeRegion(item.region) !== normalizeRegion(csvRegion)) {
        conflicts.push({ id: row.id, field: 'region', app: item.region, csv: csvRegion, file });
      } else if (!item.region && entry.region === undefined) {
        entry.region = csvRegion;
      }
    }

    csvValues.set(row.id, entry);
  }
}

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
| 2 — conflicts | ${conflicts.length} unresolved, app value kept |
| 3 — derivation | ${totalDerived} chapters derived |
| remaining | ${unknownChapter} chapter unknown, ${unknownRegion} region unknown |

Final coverage: chapter ${items.length - unknownChapter}/${items.length}, region ${items.length - unknownRegion}/${items.length}.

## Conflicts — need a human decision

The app value was kept in every case below.

| id | field | app value | CSV value | source |
|---|---|---|---|---|
`;
for (const c of conflicts) {
  report += `| \`${c.id}\` | ${c.field} | \`${c.app}\` | \`${c.csv}\` | ${c.file} |\n`;
}
if (!conflicts.length) report += '| — | — | — | — | — |\n';

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
console.log(`  conflicts:  ${conflicts.length} (see research/data/backfill-report.md)`);
```

- [ ] **Step 2: Run the backfill**

Run: `npm run backfill`
Expected: reports a non-zero overlay count, roughly 170 CSV chapters, several hundred derived, 25 + 21 conflicts.

- [ ] **Step 3: Read the report before trusting it**

Run: `head -60 research/data/backfill-report.md`

Confirm each derived block's premise is defensible. If one rule produced an implausible block (for example `open-world` covering a section that is clearly story-gated), fix the rule in `scripts/lib/derive-rules.mjs`, add a test for it in `tests/derive-rules.test.mjs`, and re-run. Do not hand-edit the generated overlay.

- [ ] **Step 4: Commit**

```bash
git add scripts/backfill-data.mjs src/data/generated/backfill.js research/data/backfill-report.md
git commit -m "Add three-pass chapter/region backfill with review report"
```

---

### Task 5: Merge the overlay at load, expose provenance

**Files:**
- Create: `src/data/provenance.js`
- Modify: `src/data/index.js`
- Test: `tests/provenance.test.mjs`

**Interfaces:**
- Consumes: `BACKFILL` from `src/data/generated/backfill.js`
- Produces:
  - `applyBackfill(sections, overlay) → sections` — pure, returns new section objects.
  - `provenanceOf(item, field) → 'verified' | 'derived' | 'unknown'`
  - `isDerived(item, field) → boolean`
  - `hasValue(item, field) → boolean` — true when the field holds a usable value (not unknown/absent).

- [ ] **Step 1: Write the failing test**

`tests/provenance.test.mjs`:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { provenanceOf, isDerived, hasValue, applyBackfill } from '../src/data/provenance.js';

test('a field absent from provenance is verified', () => {
  const item = { id: 'a', chapter: 2 };
  assert.equal(provenanceOf(item, 'chapter'), 'verified');
  assert.equal(isDerived(item, 'chapter'), false);
  assert.equal(hasValue(item, 'chapter'), true);
});

test('a field named derived reports derived', () => {
  const item = { id: 'a', chapter: 2, provenance: { chapter: 'derived' } };
  assert.equal(provenanceOf(item, 'chapter'), 'derived');
  assert.equal(isDerived(item, 'chapter'), true);
  assert.equal(hasValue(item, 'chapter'), true);
});

test('a field named unknown has no usable value', () => {
  const item = { id: 'a', provenance: { chapter: 'unknown' } };
  assert.equal(provenanceOf(item, 'chapter'), 'unknown');
  assert.equal(hasValue(item, 'chapter'), false);
});

test('a missing field with no provenance is unknown', () => {
  const item = { id: 'a' };
  assert.equal(provenanceOf(item, 'chapter'), 'unknown');
  assert.equal(hasValue(item, 'chapter'), false);
});

test('applyBackfill merges into items and sub-items without mutating input', () => {
  const sections = [{
    id: 's', items: [
      { id: 'a', text: 'A', subItems: [{ id: 'a1', text: 'A1' }] }
    ]
  }];
  const overlay = {
    a: { chapter: 2, provenance: { chapter: 'derived' } },
    a1: { region: 'lemoyne' }
  };

  const merged = applyBackfill(sections, overlay);

  assert.equal(merged[0].items[0].chapter, 2);
  assert.equal(merged[0].items[0].provenance.chapter, 'derived');
  assert.equal(merged[0].items[0].subItems[0].region, 'lemoyne');
  assert.equal(sections[0].items[0].chapter, undefined, 'input must not be mutated');
});

test('curated values win over the overlay', () => {
  const sections = [{ id: 's', items: [{ id: 'a', text: 'A', chapter: 4 }] }];
  const overlay = { a: { chapter: 2, provenance: { chapter: 'derived' } } };
  const merged = applyBackfill(sections, overlay);
  assert.equal(merged[0].items[0].chapter, 4);
  assert.equal(provenanceOf(merged[0].items[0], 'chapter'), 'verified');
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module '../src/data/provenance.js'`

- [ ] **Step 3: Implement provenance helpers**

`src/data/provenance.js`:

```js
/**
 * Per-field provenance.
 * A field is verified unless `provenance` names it.
 */

export function provenanceOf(item, field) {
  const state = item?.provenance?.[field];
  if (state === 'derived' || state === 'unknown') return state;
  return item?.[field] === undefined ? 'unknown' : 'verified';
}

export function isDerived(item, field) {
  return provenanceOf(item, field) === 'derived';
}

export function hasValue(item, field) {
  return provenanceOf(item, field) !== 'unknown';
}

/**
 * Merge a generated overlay over curated sections.
 * Curated values always win; the overlay only fills gaps.
 * Pure — returns new objects, never mutates the input.
 */
export function applyBackfill(sections, overlay) {
  const merge = item => {
    const patch = overlay[item.id];
    const merged = { ...item };

    if (patch) {
      for (const [key, value] of Object.entries(patch)) {
        if (key === 'provenance') continue;
        if (merged[key] === undefined) merged[key] = value;
      }
      if (patch.provenance) {
        const provenance = {};
        for (const [field, state] of Object.entries(patch.provenance)) {
          // A curated value overrides any recorded provenance for that field.
          if (item[field] === undefined) provenance[field] = state;
        }
        if (Object.keys(provenance).length) merged.provenance = provenance;
      }
    }

    if (item.subItems) merged.subItems = item.subItems.map(merge);
    return merged;
  };

  return sections.map(section => ({
    ...section,
    items: (section.items || []).map(merge)
  }));
}
```

- [ ] **Step 4: Run tests**

Run: `npm test`
Expected: PASS, 21 tests total

- [ ] **Step 5: Wire the overlay into the data index**

`src/data/index.js` does not define the section array — it re-exports one imported from `./sections/index.js`. So the overlay is applied at that boundary.

Change line 7 from:

```js
import { CHECKLIST_SECTIONS } from './sections/index.js';
```

to:

```js
import { CHECKLIST_SECTIONS as RAW_SECTIONS } from './sections/index.js';
import { BACKFILL } from './generated/backfill.js';
import { applyBackfill } from './provenance.js';

/** Curated sections with the generated backfill overlay merged in. */
export const CHECKLIST_SECTIONS = applyBackfill(RAW_SECTIONS, BACKFILL);
```

Then change line 12 to drop `CHECKLIST_SECTIONS` from the re-export list, since it is now exported directly above — leaving it in place is a duplicate-export syntax error:

```js
export { NAV_CATEGORIES, store };
```

Every other function in this file (`getSectionById`, `getAllSectionIds`, `getSectionItemCount`) already reads the module-level `CHECKLIST_SECTIONS` binding and needs no change.

- [ ] **Step 6: Verify integrity and coverage**

Run: `npm run check-data`
Expected: `✓ data OK — 886 items across 40 sections`

Then confirm coverage actually moved:

```bash
node -e "
import('./src/data/index.js').then(async ({CHECKLIST_SECTIONS}) => {
  const {hasValue} = await import('./src/data/provenance.js');
  const all=[]; for(const s of CHECKLIST_SECTIONS) for(const i of (s.items||[])){all.push(i); for(const x of (i.subItems||[]))all.push(x);}
  const ch=all.filter(i=>hasValue(i,'chapter')).length, rg=all.filter(i=>hasValue(i,'region')).length;
  console.log('total',all.length,'chapter',ch,Math.round(ch/all.length*100)+'%','region',rg,Math.round(rg/all.length*100)+'%');
});"
```

Expected: total 886, chapter well above the starting 180, region at or above 554.

- [ ] **Step 7: Build and commit**

```bash
npm run build
git add src/data/provenance.js src/data/index.js tests/provenance.test.mjs
git commit -m "Merge backfill overlay into checklist data at load"
```

---

### Task 6: Honest filters

**Files:**
- Modify: `src/components/sidebar-v2/filters.js`
- Test: `tests/filters.test.mjs`

**Interfaces:**
- Consumes: `hasValue` (Task 5)
- Produces:
  - `itemMatchesFilters(item) → boolean` — takes a **real** item, no shim.
  - `chapterRank(chapter) → number` — 1–6 map to themselves, `'epilogue'` maps to 7.
  - `isHiddenForMissingField(item) → 'chapter' | 'region' | null` — which active filter excluded this item for lack of data.
  - `activeFilters.showUnknown: boolean` — new field, default `false`.

- [ ] **Step 1: Write the failing test**

`tests/filters.test.mjs`:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  activeFilters, itemMatchesFilters, chapterRank,
  isHiddenForMissingField, normalizeRegion, REGIONS, resetAllFilters
} from '../src/components/sidebar-v2/filters.js';

test('chapterRank orders epilogue after chapter 6', () => {
  assert.equal(chapterRank(1), 1);
  assert.equal(chapterRank(6), 6);
  assert.equal(chapterRank('epilogue'), 7);
});

test('chapter filter is cumulative', () => {
  resetAllFilters();
  activeFilters.chapter = '3';
  assert.equal(itemMatchesFilters({ id: 'a', chapter: 2 }), true, 'ch2 is doable in ch3');
  assert.equal(itemMatchesFilters({ id: 'b', chapter: 3 }), true);
  assert.equal(itemMatchesFilters({ id: 'c', chapter: 4 }), false, 'ch4 not yet reachable');
  assert.equal(itemMatchesFilters({ id: 'd', chapter: 'epilogue' }), false);
  resetAllFilters();
});

test('epilogue filter includes everything', () => {
  resetAllFilters();
  activeFilters.chapter = 'epilogue';
  assert.equal(itemMatchesFilters({ id: 'a', chapter: 2 }), true);
  assert.equal(itemMatchesFilters({ id: 'b', chapter: 'epilogue' }), true);
  resetAllFilters();
});

test('items with unknown chapter are excluded but identifiable', () => {
  resetAllFilters();
  activeFilters.chapter = '3';
  const item = { id: 'a', provenance: { chapter: 'unknown' } };
  assert.equal(itemMatchesFilters(item), false);
  assert.equal(isHiddenForMissingField(item), 'chapter');
  resetAllFilters();
});

test('showUnknown includes items with no chapter', () => {
  resetAllFilters();
  activeFilters.chapter = '3';
  activeFilters.showUnknown = true;
  assert.equal(itemMatchesFilters({ id: 'a', provenance: { chapter: 'unknown' } }), true);
  resetAllFilters();
});

test('reward filter matches both reward and rewards[]', () => {
  resetAllFilters();
  activeFilters.hasReward = true;
  assert.equal(itemMatchesFilters({ id: 'a', reward: '$500' }), true);
  assert.equal(itemMatchesFilters({ id: 'b', rewards: ['Gold Bar'] }), true);
  assert.equal(itemMatchesFilters({ id: 'c' }), false);
  resetAllFilters();
});

test('guarma normalizes to a known region', () => {
  assert.ok(REGIONS.some(r => r.id === normalizeRegion('guarma')));
});

test('resetAllFilters clears showUnknown', () => {
  activeFilters.showUnknown = true;
  resetAllFilters();
  assert.equal(activeFilters.showUnknown, false);
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npm test`
Expected: FAIL — `chapterRank is not a function`

- [ ] **Step 3: Add `showUnknown` to filter state**

Replace the `activeFilters` object:

```js
export const activeFilters = {
  searchTerm: '',
  chapter: null,
  region: null,
  status: 'all', // 'all' | 'incomplete' | 'complete'
  missableOnly: false,
  hasReward: false,
  showUnknown: false
};
```

- [ ] **Step 4: Replace the filter predicate**

Add the import at the top of `filters.js`, below the existing `CHECKLIST_SECTIONS` import:

```js
import { hasValue } from '../../data/provenance.js';
```

Replace `itemMatchesFilters` entirely, and add the two new exports beside it:

```js
/**
 * Numeric ordering for chapters. Epilogue comes after chapter 6.
 * @param {number|'epilogue'} chapter
 * @returns {number}
 */
export function chapterRank(chapter) {
  return String(chapter).toLowerCase() === 'epilogue' ? 7 : Number(chapter);
}

/**
 * Which active filter excluded this item purely for missing data.
 * @param {object} item
 * @returns {'chapter'|'region'|null}
 */
export function isHiddenForMissingField(item) {
  if (activeFilters.chapter && !hasValue(item, 'chapter')) return 'chapter';
  if (activeFilters.region && !hasValue(item, 'region')) return 'region';
  return null;
}

/**
 * Does this item pass the active structured filters?
 * Takes a real checklist item — no shim object.
 * @param {object} item
 * @returns {boolean}
 */
export function itemMatchesFilters(item) {
  // Items missing the filtered field are excluded unless the user opted in.
  const missingField = isHiddenForMissingField(item);
  if (missingField) return activeFilters.showUnknown;

  // Chapter is cumulative: "what can I do by chapter N".
  if (activeFilters.chapter) {
    if (chapterRank(item.chapter) > chapterRank(activeFilters.chapter)) return false;
  }

  if (activeFilters.region) {
    if (normalizeRegion(item.region) !== activeFilters.region) return false;
  }

  if (activeFilters.missableOnly && !item.missable) return false;

  if (activeFilters.hasReward) {
    const hasAnyReward = Boolean(item.reward) || (Array.isArray(item.rewards) && item.rewards.length > 0);
    if (!hasAnyReward) return false;
  }

  return true;
}
```

The search branch is deliberately gone: `applyFiltersToChecklist` already matches `text` / `tip` / `tip_detailed` before calling this, so keeping a second implementation here means two places to fix when search changes.

- [ ] **Step 5: Clear `showUnknown` on reset**

In `resetAllFilters`, add the new field alongside the existing resets:

```js
  activeFilters.showUnknown = false;
```

- [ ] **Step 6: Relabel chapter chips**

In `renderFilterPanel`, replace the chapter chip label expression:

```js
              const label = ch === 'epilogue' ? 'Epilogue' : `By Ch ${ch}`;
```

- [ ] **Step 7: Run tests**

Run: `npm test`
Expected: PASS, 29 tests total

- [ ] **Step 8: Build and commit**

```bash
npm run build
git add src/components/sidebar-v2/filters.js tests/filters.test.mjs
git commit -m "Make filters cumulative and honest about missing data"
```

---

### Task 7: Surface hidden counts in the checklist

**Files:**
- Modify: `src/components/checklist-v2/checklist.js:512-614`
- Modify: `src/components/checklist-v2/styles/checklist.css`

**Interfaces:**
- Consumes: `itemMatchesFilters`, `isHiddenForMissingField`, `activeFilters` (Task 6)
- Produces: a `#filter-unknown-notice` element appended after the checklist container when a chapter/region filter hides items for missing data.

- [ ] **Step 1: Pass real items to the filter**

In `applyFiltersToChecklist`, delete the `filterItem` shim block:

```js
      // Build item object for filter matching
      const filterItem = {
        title: item.text,
        description: item.tip || item.tip_detailed || '',
        tags: item.tags || [],
        chapter: item.chapter,
        region: item.region,
        missable: item.missable || item.isMissable,
        reward: item.reward
      };

      // Check structured filters (chapter, region, missable, reward)
      const matchesStructuredFilters = itemMatchesFilters(filterItem);
```

Replace it with:

```js
      // Check structured filters against the real item — the shim dropped
      // rewards[] and provenance, which the filter now needs.
      const matchesStructuredFilters = itemMatchesFilters(item);
```

- [ ] **Step 2: Count items hidden for missing data**

Add the import at the top of `checklist.js`, inside the existing import block from `../sidebar-v2/filters.js`:

```js
  isHiddenForMissingField,
```

Inside `applyFiltersToChecklist`, declare a counter immediately after the `sections` lookup:

```js
  let hiddenForMissingData = 0;
  let missingFieldName = null;
```

Inside the `itemCards.forEach` callback, immediately before `const shouldShow = ...`, add:

```js
      const missingField = isHiddenForMissingField(item);
      if (missingField && !activeFilters.showUnknown) {
        hiddenForMissingData++;
        missingFieldName = missingField;
      }
```

At the very end of `applyFiltersToChecklist`, after the `sections.forEach` loop closes, add:

```js
  renderUnknownNotice(container, hiddenForMissingData, missingFieldName);
```

And in the early-return branch for no active filters, add the same call before `return;`:

```js
    renderUnknownNotice(container, 0, null);
    return;
```

- [ ] **Step 3: Render the notice**

Add this function to `checklist.js`, directly below `applyFiltersToChecklist`:

```js
/**
 * Tell the user when a filter hid items because they lack the filtered field,
 * rather than letting them read an empty list as "there is nothing here".
 */
function renderUnknownNotice(container, count, field) {
  const existing = document.getElementById('filter-unknown-notice');

  if (!count || !field) {
    existing?.remove();
    return;
  }

  const label = `${count} item${count === 1 ? '' : 's'} hidden — no ${field} recorded.`;
  const notice = existing || document.createElement('div');
  notice.id = 'filter-unknown-notice';
  notice.className = 'filter-unknown-notice';
  notice.innerHTML = `
    <span>${label}</span>
    <button type="button" id="filter-show-unknown">Show them</button>
  `;

  if (!existing) container.appendChild(notice);

  document.getElementById('filter-show-unknown').onclick = () => {
    activeFilters.showUnknown = true;
    window.dispatchEvent(new CustomEvent('filters-changed'));
  };
}
```

- [ ] **Step 4: Style the notice**

Append to `src/components/checklist-v2/styles/checklist.css`:

```css
/* ============================================
   FILTER UNKNOWN NOTICE
   ============================================ */
.filter-unknown-notice {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 1rem auto 2rem;
  padding: 10px 14px;
  max-width: 640px;
  border: 1px dashed rgba(255, 215, 0, 0.45);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.25);
  color: rgba(232, 220, 200, 0.8);
  font-family: 'Special Elite', Georgia, serif;
  font-size: 0.82rem;
  text-align: center;
}

.filter-unknown-notice button {
  padding: 5px 12px;
  border: 1px solid rgba(255, 215, 0, 0.5);
  border-radius: 5px;
  background: transparent;
  color: #d4a53c;
  font-family: inherit;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-unknown-notice button:hover {
  background: rgba(255, 215, 0, 0.12);
  border-color: #ffd700;
  color: #ffd700;
}

[data-mode="day"] .filter-unknown-notice {
  background: rgba(255, 255, 255, 0.55);
  border-color: rgba(139, 69, 19, 0.4);
  color: rgba(62, 39, 35, 0.8);
}

[data-mode="day"] .filter-unknown-notice button {
  border-color: rgba(139, 69, 19, 0.45);
  color: #8b4513;
}

[data-mode="day"] .filter-unknown-notice button:hover {
  background: rgba(139, 69, 19, 0.1);
  border-color: #8b4513;
}
```

- [ ] **Step 5: Verify in the browser**

```bash
npm run build && npx vite preview --port 4173
```

Open `http://localhost:4173`, open the sidebar filters, select chapter `By Ch 1`. Expected:
- more than one item is visible (the pre-fix behaviour showed exactly 1 of 405);
- the notice appears with a non-zero hidden count, if any items still lack a chapter;
- clicking **Show them** reveals them and the notice disappears.

Stop the preview server when done.

- [ ] **Step 6: Commit**

```bash
git add src/components/checklist-v2/checklist.js src/components/checklist-v2/styles/checklist.css
git commit -m "Surface items hidden by filters for missing data"
```

---

### Task 8: Mark derived values in the UI

**Files:**
- Modify: `src/components/checklist-v2/item-renderer.js:137-172`
- Modify: `src/components/checklist-v2/styles/checklist.css`

**Interfaces:**
- Consumes: `isDerived` (Task 5)

- [ ] **Step 1: Render derived badges differently**

Add the import at the top of `item-renderer.js`, below the existing `store` import:

```js
import { isDerived } from '../../data/provenance.js';
```

In `renderTags`, replace the chapter and region blocks:

```js
  // Chapter first
  if (item.chapter) {
    const derived = isDerived(item, 'chapter');
    tags += `<span class="tag tag-chapter${derived ? ' tag-derived' : ''}"${
      derived ? ' title="Estimated from section and location, not confirmed"' : ''
    }><i class="fa-solid fa-book"></i> ${derived ? '~' : ''}CH ${item.chapter}</span>`;
  }

  // Region
  if (item.region) {
    const derived = isDerived(item, 'region');
    tags += `<span class="tag tag-region${derived ? ' tag-derived' : ''}"${
      derived ? ' title="Estimated from section and location, not confirmed"' : ''
    }><i class="fa-solid fa-map-pin"></i> ${derived ? '~' : ''}${formatRegion(item.region)}</span>`;
  }
```

- [ ] **Step 2: Style the derived marker**

Append to `src/components/checklist-v2/styles/checklist.css`:

```css
/* Derived (estimated) tag values — quiet, but never mistakable for a fact */
.tag.tag-derived {
  border-style: dashed;
  opacity: 0.75;
}
```

- [ ] **Step 3: Verify in the browser**

```bash
npm run build && npx vite preview --port 4173
```

Open `http://localhost:4173` and confirm:
- items whose chapter came from a rule show `~CH 2` with a dashed border;
- items with a curated chapter show `CH 2` with the original solid border;
- hovering a derived badge shows the "Estimated…" tooltip.

Stop the preview server when done.

- [ ] **Step 4: Commit**

```bash
git add src/components/checklist-v2/item-renderer.js src/components/checklist-v2/styles/checklist.css
git commit -m "Mark derived chapter and region values in item badges"
```

---

### Task 9: Finish Companion Activities verification

**Files:**
- Modify: `src/data/sections/companion-activities.js`

- [ ] **Step 1: List the unverified items**

```bash
node -e "
import('./src/data/sections/companion-activities.js').then(m => {
  const s = Object.values(m)[0];
  const out = [];
  for (const i of s.items) { out.push(i); for (const x of (i.subItems||[])) out.push(x); }
  out.filter(i => i.verified !== true).forEach(i => console.log(i.id, '|', i.text, '|', i.tip));
});"
```

Expected: 14 rows.

- [ ] **Step 2: Verify each against the source data**

For each id from Step 1, search the CSVs for a matching row:

```bash
grep -i "<item-id>" research/data/data-verified.csv research/data/data-review.csv
```

Where a CSV row confirms the item's `text` and `tip`, add `verified: true` to that item in `src/data/sections/companion-activities.js`. Where no source confirms it, leave `verified` absent and add `source: 'unconfirmed'` so the gap stays visible rather than being quietly upgraded.

Do not set `verified: true` on an item you could not confirm.

- [ ] **Step 3: Confirm the count moved**

```bash
npm run check-data && node -e "
import('./src/data/index.js').then(({CHECKLIST_SECTIONS}) => {
  const s = CHECKLIST_SECTIONS.find(x => x.id === 'companion-activities');
  const out = []; for (const i of s.items) { out.push(i); for (const x of (i.subItems||[])) out.push(x); }
  console.log('verified', out.filter(i => i.verified === true).length, '/', out.length);
});"
```

Expected: `✓ data OK — 886 items across 40 sections`, then a verified count higher than 5. It need not reach 19 — unconfirmed items staying unverified is the correct outcome.

- [ ] **Step 4: Full check and commit**

```bash
npm test && npm run check-data && npm run build
git add src/data/sections/companion-activities.js
git commit -m "Verify Companion Activities items against source data"
```

---

## Done criteria

- [ ] `npm test` passes — 29 tests
- [ ] `npm run check-data` reports 886 items across 40 sections, no errors
- [ ] `npm run build` succeeds
- [ ] `research/data/backfill-report.md` reviewed, and every derived block's premise accepted
- [ ] `By Ch 1` shows substantially more than 1 item, and any remainder is reported by the notice
- [ ] Derived badges render as `~CH n` with a dashed border; curated badges are unchanged
- [ ] No files under `src/data/sections/` were rewritten by a script
- [ ] Nothing deployed to Vercel
