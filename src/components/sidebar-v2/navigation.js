/**
 * Sidebar Navigation V2
 * Complete navigation sidebar with themes, filters, and dynamic content
 * Ported from navigation.js with Font Awesome icons and modular structure
 */

import { CHECKLIST_SECTIONS } from '../../data/index.js';
import { NAV_CATEGORIES, SECTION_ICONS } from '../../data/nav-categories.js';
import { store } from '../../data/state.js';
import { 
  renderThemeSelector, 
  renderModeToggle,
  initThemeSystem,
  attachThemeListeners
} from './theme-system.js';
import { 
  activeFilters,
  setSearchFilter,
  setChapterFilter,
  setRegionFilter,
  setStatusFilter,
  toggleMissableFilter,
  toggleRewardFilter,
  clearFilter,
  resetAllFilters,
  getActiveFilterCount,
  itemMatchesFilters,
  isItemCompleted,
  statusMatches,
  renderFilterPanel,
  renderActiveFilterBadges
} from './filters.js';

// DOM helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// State
let filterPanelOpen = false;
let activeSection = null;

/**
 * Main render function - creates sidebar
 */
export function renderNavigation() {
  console.log('🧭 renderNavigation() called');
  // Initialize theme system
  initThemeSystem();
  
  // Create sidebar element
  const sidebar = document.createElement('nav');
  sidebar.className = 'nav-sidebar';
  sidebar.id = 'nav-sidebar';
  sidebar.innerHTML = renderSidebarContent();
  
  document.body.appendChild(sidebar);
  
  // Create mobile FAB
  renderMobileFab();
  
  // Create mode toggle (top-right)
  const modeToggle = document.createElement('div');
  modeToggle.innerHTML = renderModeToggle();
  document.body.appendChild(modeToggle.firstElementChild);
  
  // Attach all listeners
  attachNavListeners();
  attachThemeListeners();
  
  // Initial update
  updateSectionCounts();
  updateTotalProgress();
}

/**
 * Render sidebar inner content
 * @returns {string}
 */
function renderSidebarContent() {
  return `
    <!-- Header -->
    <div class="nav-header">
      <span class="nav-title">Ledger</span>
      <button class="nav-close" id="nav-close">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    
    <!-- Theme Selector -->
    ${renderThemeSelector()}
    
    <!-- Search Row -->
    <div class="nav-search-row">
      <input 
        type="text" 
        class="nav-search-input" 
        id="nav-search"
        placeholder="Search..."
      >
      <button class="filter-toggle-btn" id="filter-toggle-btn" title="Filters">
        <i class="fa-solid fa-sliders"></i>
        <span class="filter-count" id="filter-count" style="display:none">0</span>
      </button>
    </div>
    
    <!-- Filter Panel (collapsible) -->
    ${renderFilterPanel()}
    
    <!-- Categories -->
    <div class="nav-categories" id="nav-categories">
      ${renderCategories()}
    </div>
    
    <!-- Fixed Bottom Stats -->
    <div class="nav-stats" id="nav-stats">
      <div class="nav-stats-bar">
        <div class="nav-stats-fill" id="nav-stats-fill" style="width: 0%"></div>
      </div>
      <span class="nav-stats-text" id="nav-stats-text">0 / 0 (0%)</span>
    </div>
  `;
}

/**
 * Render all categories
 * @returns {string}
 */
function renderCategories() {
  return NAV_CATEGORIES.map(cat => {
    const sections = cat.sections
      .map(sectionId => CHECKLIST_SECTIONS.find(s => s.id === sectionId))
      .filter(Boolean);
    
    if (sections.length === 0) return '';
    
    return `
      <div class="nav-category expanded" data-category="${cat.id}">
        <div class="nav-category-header" data-category-toggle="${cat.id}">
          <i class="nav-category-icon fa-solid ${cat.icon}"></i>
          <span class="nav-category-title">${cat.title}</span>
          <i class="nav-category-arrow fa-solid fa-chevron-down"></i>
        </div>
        <div class="nav-category-items">
          ${sections.map(section => renderNavSection(section)).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render a single section link
 * @param {Object} section
 * @returns {string}
 */
function renderNavSection(section) {
  if (section.isJournal) {
    return `
      <a href="#journal" class="nav-section-link" data-section="journal">
        <i class="nav-section-icon fa-solid fa-book-open"></i>
        <span class="nav-section-title">Journal</span>
      </a>
    `;
  }
  
  const icon = SECTION_ICONS[section.id] || 'fa-circle';
  const itemCount = section.items?.length || 0;
  
  return `
    <a href="#${section.id}" class="nav-section-link" data-section="${section.id}">
      <i class="nav-section-icon fa-solid ${icon}"></i>
      <span class="nav-section-title">${section.title}</span>
      <span class="nav-section-count" data-count-section="${section.id}">0/${itemCount}</span>
    </a>
  `;
}

/**
 * Render mobile FAB button and overlay
 */
function renderMobileFab() {
  // Create overlay backdrop
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebar-overlay';
  document.body.appendChild(overlay);
  
  // Create FAB button
  const fab = document.createElement('button');
  fab.className = 'nav-fab';
  fab.id = 'nav-fab';
  fab.innerHTML = '<i class="fa-solid fa-bars"></i>';
  document.body.appendChild(fab);
}

/**
 * Attach all navigation event listeners
 */
export function attachNavListeners() {
  // Event delegation
  document.addEventListener('click', (e) => {
    // Category toggle
    const catToggle = e.target.closest('[data-category-toggle]');
    if (catToggle) {
      const category = catToggle.closest('.nav-category');
      category.classList.toggle('expanded');
      const items = category.querySelector('.nav-category-items');
      items.classList.toggle('collapsed');
      const arrow = catToggle.querySelector('.nav-category-arrow');
      arrow.style.transform = category.classList.contains('expanded') ? 'rotate(0deg)' : 'rotate(-90deg)';
      return;
    }
    
    // Section link
    const sectionLink = e.target.closest('.nav-section-link');
    if (sectionLink) {
      const sectionId = sectionLink.dataset.section;
      setActiveSection(sectionId);
      
      // Dispatch event for checklist to scroll to section
      document.dispatchEvent(new CustomEvent('nav:sectionClick', { 
        detail: { sectionId } 
      }));
      
      closeMobileSidebar();
      return;
    }
    
    // Filter toggle
    if (e.target.closest('#filter-toggle-btn')) {
      toggleFilterPanel();
      return;
    }
    
    // Filter radio (status)
    const statusBtn = e.target.closest('.filter-radio');
    if (statusBtn) {
      setStatusFilter(statusBtn.dataset.status);
      $$('.filter-radio').forEach(r => r.classList.remove('active'));
      statusBtn.classList.add('active');
      applyFilters();
      return;
    }
    
    // Chapter chip
    const chapterChip = e.target.closest('.chapter-chip');
    if (chapterChip) {
      const wasActive = chapterChip.classList.contains('active');
      $$('.chapter-chip').forEach(c => c.classList.remove('active'));
      if (!wasActive) {
        chapterChip.classList.add('active');
        setChapterFilter(chapterChip.dataset.chapter);
      } else {
        setChapterFilter(null);
      }
      applyFilters();
      return;
    }
    
    // Region chip
    const regionChip = e.target.closest('.region-chip');
    if (regionChip) {
      const wasActive = regionChip.classList.contains('active');
      $$('.region-chip').forEach(c => c.classList.remove('active'));
      if (!wasActive) {
        regionChip.classList.add('active');
        setRegionFilter(regionChip.dataset.region);
      } else {
        setRegionFilter(null);
      }
      applyFilters();
      return;
    }
    
    // Missable toggle
    if (e.target.closest('#filter-missable')) {
      toggleMissableFilter();
      $('#filter-missable').classList.toggle('active');
      applyFilters();
      return;
    }
    
    // Reward toggle
    if (e.target.closest('#filter-reward')) {
      toggleRewardFilter();
      $('#filter-reward').classList.toggle('active');
      applyFilters();
      return;
    }
    
    // Clear filter badge
    const clearBadge = e.target.closest('[data-clear]');
    if (clearBadge) {
      clearFilter(clearBadge.dataset.clear);
      applyFilters();
      return;
    }
    
    // Reset all filters
    if (e.target.closest('#filter-reset')) {
      resetAllFilters();
      applyFilters();
      return;
    }
    
    // Mobile FAB - open sidebar and show overlay
    if (e.target.closest('#nav-fab')) {
      $('#nav-sidebar').classList.add('open');
      $('#sidebar-overlay')?.classList.add('active');
      return;
    }
    
    // Sidebar overlay - close sidebar when clicking overlay
    if (e.target.closest('#sidebar-overlay')) {
      closeMobileSidebar();
      return;
    }
    
    // Close button
    if (e.target.closest('#nav-close')) {
      closeMobileSidebar();
      return;
    }
  });
  
  // Search input
  const searchInput = $('#nav-search');
  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        setSearchFilter(e.target.value);
        applyFilters();
      }, 200);
    });
  }
  
  // Scroll spy
  window.addEventListener('scroll', () => {
    const sections = $$('[data-section-id]');
    let current = null;
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150) {
        current = section.dataset.sectionId;
      }
    });
    
    if (current && current !== activeSection) {
      setActiveSection(current);
    }
  });
  
  // Subscribe to store changes
  store.subscribe(() => {
    updateSectionCounts();
    updateTotalProgress();
  });
}

/**
 * Toggle filter panel visibility
 */
function toggleFilterPanel() {
  filterPanelOpen = !filterPanelOpen;
  const panel = $('#filter-panel');
  const btn = $('#filter-toggle-btn');
  
  if (panel) {
    panel.classList.toggle('open', filterPanelOpen);
  }
  if (btn) {
    btn.classList.toggle('active', filterPanelOpen);
  }
}

/**
 * Set active section and update UI
 * @param {string} sectionId
 */
function setActiveSection(sectionId) {
  activeSection = sectionId;
  
  $$('.nav-section-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === sectionId);
  });
  
  // Expand parent category if collapsed
  const activeLink = $(`.nav-section-link[data-section="${sectionId}"]`);
  if (activeLink) {
    const category = activeLink.closest('.nav-category');
    if (category && !category.classList.contains('expanded')) {
      category.classList.add('expanded');
      category.querySelector('.nav-category-items').classList.remove('collapsed');
    }
  }
}

/**
 * Close mobile sidebar
 */
function closeMobileSidebar() {
  $('#nav-sidebar')?.classList.remove('open');
}

/**
 * Apply filters and refresh UI
 */
function applyFilters() {
  console.log('🔍 applyFilters called, activeFilters:', activeFilters);
  updateFilterCountBadge();
  updateActiveFilterBadges();
  
  // Emit event for checklist to respond
  window.dispatchEvent(new CustomEvent('filters-changed', { 
    detail: { ...activeFilters }
  }));
}

/**
 * Update filter count badge
 */
function updateFilterCountBadge() {
  const count = getActiveFilterCount();
  const badge = $('#filter-count');
  
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

/**
 * Update active filter badges display
 */
function updateActiveFilterBadges() {
  const container = $('#active-filters');
  if (container) {
    container.innerHTML = renderActiveFilterBadges();
  }
}

/**
 * Update section completion counts with progress colors
 * 0% = gray, 30%+ = yellow, 60%+ = orange, 100% = green
 */
function updateSectionCounts() {
  CHECKLIST_SECTIONS.forEach(section => {
    if (section.isJournal || !section.items) return;
    
    const countEl = $(`[data-count-section="${section.id}"]`);
    if (!countEl) return;
    
    const completed = section.items.filter(item => 
      store.get(item.id)
    ).length;
    const total = section.items.length;
    const percent = total > 0 ? (completed / total) * 100 : 0;
    
    countEl.textContent = `${completed}/${total}`;
    
    // Remove all progress classes first
    countEl.classList.remove('progress-none', 'progress-low', 'progress-mid', 'progress-full');
    
    // Add appropriate progress color class
    if (percent === 0) {
      countEl.classList.add('progress-none');
    } else if (percent < 30) {
      countEl.classList.add('progress-low');
    } else if (percent < 60) {
      countEl.classList.add('progress-mid');
    } else if (percent < 100) {
      countEl.classList.add('progress-high');
    } else {
      countEl.classList.add('progress-full');
    }
    
    const link = countEl.closest('.nav-section-link');
    if (link) {
      link.classList.toggle('section-complete', completed === total && total > 0);
    }
  });
}

/**
 * Update total progress bar
 */
function updateTotalProgress() {
  let totalItems = 0;
  let completedItems = 0;
  
  CHECKLIST_SECTIONS.forEach(section => {
    if (section.isJournal || !section.items) return;
    totalItems += section.items.length;
    completedItems += section.items.filter(item => store.get(item.id)).length;
  });
  
  const percent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  
  const fill = $('#nav-stats-fill');
  const text = $('#nav-stats-text');
  
  if (fill) fill.style.width = `${percent}%`;
  if (text) text.textContent = `${completedItems} / ${totalItems} (${percent}%)`;
}

/**
 * Refresh navigation (call after data changes)
 */
export function refreshNavigation() {
  const container = $('#nav-categories');
  if (container) {
    container.innerHTML = renderCategories();
  }
  updateSectionCounts();
  updateTotalProgress();
}
