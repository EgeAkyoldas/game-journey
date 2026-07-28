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
