/**
 * Sidebar Filters Module
 * Extracted from navigation.js for modularity
 * Handles: search, chapter, region, status, missable, reward filters
 */

import { CHECKLIST_SECTIONS } from '../../data/index.js';

// DOM helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/**
 * Active filter state
 */
export const activeFilters = {
  searchTerm: '',
  chapter: null,
  region: null,
  status: 'all', // 'all' | 'incomplete' | 'complete'
  missableOnly: false,
  hasReward: false
};

/**
 * Region data for filter chips
 */
export const REGIONS = [
  { id: 'new-hanover', name: 'New Hanover' },
  { id: 'lemoyne', name: 'Lemoyne' },
  { id: 'west-elizabeth', name: 'West Elizabeth' },
  { id: 'new-austin', name: 'New Austin' },
  { id: 'ambarino', name: 'Ambarino' }
];

/**
 * Check if an item matches current filters
 * @param {Object} item
 * @returns {boolean}
 */
export function itemMatchesFilters(item) {
  // Search term
  if (activeFilters.searchTerm) {
    const term = activeFilters.searchTerm.toLowerCase();
    const inTitle = item.title?.toLowerCase().includes(term);
    const inDesc = item.description?.toLowerCase().includes(term);
    const inTags = item.tags?.some(t => t.toLowerCase().includes(term));
    if (!inTitle && !inDesc && !inTags) return false;
  }
  
  // Chapter filter
  if (activeFilters.chapter) {
    const itemChapter = String(item.chapter || '').toLowerCase();
    if (itemChapter !== activeFilters.chapter) return false;
  }
  
  // Region filter
  if (activeFilters.region) {
    if (item.region !== activeFilters.region) return false;
  }
  
  // Missable only
  if (activeFilters.missableOnly) {
    if (!item.missable) return false;
  }
  
  // Has reward
  if (activeFilters.hasReward) {
    if (!item.reward) return false;
  }
  
  return true;
}

/**
 * Check if an item is completed
 * @param {string} itemId
 * @param {Object} completedItems - from store
 * @returns {boolean}
 */
export function isItemCompleted(itemId, completedItems) {
  return completedItems[itemId] === true;
}

/**
 * Filter by status (all/incomplete/complete)
 * @param {boolean} isCompleted
 * @returns {boolean}
 */
export function statusMatches(isCompleted) {
  if (activeFilters.status === 'all') return true;
  if (activeFilters.status === 'complete') return isCompleted;
  if (activeFilters.status === 'incomplete') return !isCompleted;
  return true;
}

/**
 * Scan data to find available filter options
 * @returns {{ chapters: string[], regions: string[] }}
 */
export function scanAvailableFilters() {
  const chapters = new Set();
  const regions = new Set();
  
  CHECKLIST_SECTIONS.forEach(section => {
    section.items?.forEach(item => {
      if (item.chapter) chapters.add(String(item.chapter).toLowerCase());
      if (item.region) regions.add(item.region);
      
      item.subItems?.forEach(sub => {
        if (sub.chapter) chapters.add(String(sub.chapter).toLowerCase());
        if (sub.region) regions.add(sub.region);
      });
    });
  });
  
  return {
    chapters: Array.from(chapters).sort((a, b) => {
      if (a === 'epilogue') return 1;
      if (b === 'epilogue') return -1;
      return parseInt(a) - parseInt(b);
    }),
    regions: Array.from(regions).sort()
  };
}

/**
 * Set search term filter
 * @param {string} term
 */
export function setSearchFilter(term) {
  activeFilters.searchTerm = term.trim();
}

/**
 * Set chapter filter
 * @param {string|null} chapter
 */
export function setChapterFilter(chapter) {
  activeFilters.chapter = chapter;
}

/**
 * Set region filter
 * @param {string|null} region
 */
export function setRegionFilter(region) {
  activeFilters.region = region;
}

/**
 * Set status filter
 * @param {'all'|'incomplete'|'complete'} status
 */
export function setStatusFilter(status) {
  activeFilters.status = status;
}

/**
 * Toggle missable filter
 */
export function toggleMissableFilter() {
  activeFilters.missableOnly = !activeFilters.missableOnly;
}

/**
 * Toggle reward filter
 */
export function toggleRewardFilter() {
  activeFilters.hasReward = !activeFilters.hasReward;
}

/**
 * Clear a specific filter type
 * @param {string} type - 'search' | 'chapter' | 'region' | 'status' | 'missable' | 'reward'
 */
export function clearFilter(type) {
  switch (type) {
    case 'search': activeFilters.searchTerm = ''; break;
    case 'chapter': activeFilters.chapter = null; break;
    case 'region': activeFilters.region = null; break;
    case 'status': activeFilters.status = 'all'; break;
    case 'missable': activeFilters.missableOnly = false; break;
    case 'reward': activeFilters.hasReward = false; break;
  }
}

/**
 * Reset all filters
 */
export function resetAllFilters() {
  activeFilters.searchTerm = '';
  activeFilters.chapter = null;
  activeFilters.region = null;
  activeFilters.status = 'all';
  activeFilters.missableOnly = false;
  activeFilters.hasReward = false;
}

/**
 * Get count of active filters
 * @returns {number}
 */
export function getActiveFilterCount() {
  let count = 0;
  if (activeFilters.searchTerm) count++;
  if (activeFilters.chapter) count++;
  if (activeFilters.region) count++;
  if (activeFilters.status !== 'all') count++;
  if (activeFilters.missableOnly) count++;
  if (activeFilters.hasReward) count++;
  return count;
}

/**
 * Render filter panel HTML
 * @returns {string}
 */
export function renderFilterPanel() {
  const { chapters, regions } = scanAvailableFilters();
  
  return `
    <div class="filter-panel" id="filter-panel">
      <!-- Status Radio -->
      <div class="filter-group">
        <div class="filter-label">Status</div>
        <div class="filter-radios">
          <button class="filter-radio ${activeFilters.status === 'all' ? 'active' : ''}" data-status="all">All</button>
          <button class="filter-radio ${activeFilters.status === 'incomplete' ? 'active' : ''}" data-status="incomplete">Todo</button>
          <button class="filter-radio ${activeFilters.status === 'complete' ? 'active' : ''}" data-status="complete">Done</button>
        </div>
      </div>
      
      <!-- Chapter Chips -->
      <div class="filter-group">
        <div class="filter-label">Chapter</div>
        <div class="filter-chips" id="filter-chips-chapter">
          ${chapters.length === 0 ? '<span class="filter-empty">No chapter data</span>' : 
            chapters.map(ch => {
              const label = ch === 'epilogue' ? 'Epilogue' : `CH ${ch}`;
              return `<button class="filter-chip chapter-chip ${activeFilters.chapter === ch ? 'active' : ''}" data-chapter="${ch}">${label}</button>`;
            }).join('')}
        </div>
      </div>
      
      <!-- Region Chips -->
      <div class="filter-group">
        <div class="filter-label">Region</div>
        <div class="filter-chips" id="filter-chips-region">
          ${regions.length === 0 ? '<span class="filter-empty">No region data</span>' :
            regions.map(reg => {
              const region = REGIONS.find(r => r.id === reg);
              const label = region ? region.name : reg;
              return `<button class="filter-chip region-chip ${activeFilters.region === reg ? 'active' : ''}" data-region="${reg}">${label}</button>`;
            }).join('')}
        </div>
      </div>
      
      <!-- Toggle Filters -->
      <div class="filter-group filter-toggles">
        <button class="filter-toggle ${activeFilters.missableOnly ? 'active' : ''}" id="filter-missable">
          <i class="fa-solid fa-triangle-exclamation"></i> Missable
        </button>
        <button class="filter-toggle ${activeFilters.hasReward ? 'active' : ''}" id="filter-reward">
          <i class="fa-solid fa-gift"></i> Has Reward
        </button>
      </div>
      
      <!-- Active Filters Display -->
      <div class="active-filters" id="active-filters"></div>
    </div>
  `;
}

/**
 * Render active filter badges
 * @returns {string}
 */
export function renderActiveFilterBadges() {
  const badges = [];
  
  if (activeFilters.searchTerm) {
    badges.push(`<span class="filter-badge" data-clear="search"><i class="fa-solid fa-xmark"></i> "${activeFilters.searchTerm}"</span>`);
  }
  if (activeFilters.chapter) {
    const label = activeFilters.chapter === 'epilogue' ? 'Epilogue' : `CH ${activeFilters.chapter}`;
    badges.push(`<span class="filter-badge" data-clear="chapter"><i class="fa-solid fa-xmark"></i> ${label}</span>`);
  }
  if (activeFilters.region) {
    const region = REGIONS.find(r => r.id === activeFilters.region);
    badges.push(`<span class="filter-badge" data-clear="region"><i class="fa-solid fa-xmark"></i> ${region?.name || activeFilters.region}</span>`);
  }
  if (activeFilters.missableOnly) {
    badges.push(`<span class="filter-badge" data-clear="missable"><i class="fa-solid fa-xmark"></i> Missable</span>`);
  }
  if (activeFilters.hasReward) {
    badges.push(`<span class="filter-badge" data-clear="reward"><i class="fa-solid fa-xmark"></i> Has Reward</span>`);
  }
  
  if (badges.length === 0) return '';
  
  return `
    <div class="filter-badges">
      ${badges.join('')}
      <button class="filter-reset" id="filter-reset">Clear All</button>
    </div>
  `;
}
