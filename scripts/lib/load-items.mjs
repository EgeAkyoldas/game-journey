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
