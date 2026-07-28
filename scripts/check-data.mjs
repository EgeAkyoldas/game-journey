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
