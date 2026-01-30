/**
 * Data Module Index
 * Main export point for all checklist data
 */

// Core data exports
import { CHECKLIST_SECTIONS } from './sections/index.js';
import { NAV_CATEGORIES } from './nav-categories.js';
import { store } from './state.js';

// Re-export for consumers
export { CHECKLIST_SECTIONS, NAV_CATEGORIES, store };

// Re-export individual sections for convenience
export * from './sections/index.js';

/**
 * Get total count of all checklist items
 * @returns {number}
 */
export function getTotalItemCount() {
  return CHECKLIST_SECTIONS.reduce((total, section) => {
    if (section.isJournal || !section.items) return total;
    return total + section.items.length;
  }, 0);
}

/**
 * Get a section by its ID
 * @param {string} sectionId 
 * @returns {Object|undefined}
 */
export function getSectionById(sectionId) {
  return CHECKLIST_SECTIONS.find(s => s.id === sectionId);
}

/**
 * Get all section IDs
 * @returns {string[]}
 */
export function getAllSectionIds() {
  return CHECKLIST_SECTIONS.map(s => s.id);
}

/**
 * Get total items for a specific section
 * @param {string} sectionId 
 * @returns {number}
 */
export function getSectionItemCount(sectionId) {
  const section = getSectionById(sectionId);
  if (!section || section.isJournal || !section.items) return 0;
  return section.items.length;
}
