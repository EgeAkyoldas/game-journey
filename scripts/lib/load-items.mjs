/**
 * Flatten CHECKLIST_SECTIONS into a single array of items.
 * Sub-items are included as first-class items, matching how the app counts.
 */
// This MUST read the curated sections, not src/data/index.js — the latter
// applies the very overlay this backfill script generates. Reading through
// src/data/index.js would feed the backfill's own previous output back into
// itself as if it were curated source data, collapsing coverage on every re-run.
import { CHECKLIST_SECTIONS } from '../../src/data/sections/index.js';

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
