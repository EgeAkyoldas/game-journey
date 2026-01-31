/**
 * Main Sidebar Component
 * Assembles theme selector, nav items, and handles sidebar state
 */

import { renderThemeSelector, initUITheme, attachThemeListeners } from './theme-selector.js';
import { renderNavItem, renderSubItems, renderProgressBar } from './nav-item.js';
import { $ } from '../../utils/dom.js';

/**
 * Render the complete sidebar
 * @param {Array} categories - Array of category data
 * @returns {string} HTML string
 */
export function renderSidebar(categories) {
  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        ${renderThemeSelector()}
      </div>
      <nav class="sidebar-nav">
        ${categories.map(cat => renderCategory(cat)).join('')}
      </nav>
    </aside>
  `;
}

/**
 * Render a category section
 */
function renderCategory(category) {
  const items = category.items || [];
  const completed = items.filter(i => i.isCompleted).length;
  
  return `
    <div class="sidebar-category" data-category="${category.id}">
      <div class="category-header" data-category-toggle="${category.id}">
        <i class="fa-solid ${category.icon || 'fa-list'}"></i>
        <span class="category-name">${category.name}</span>
        <span class="category-count">${completed}/${items.length}</span>
        <i class="fa-solid fa-chevron-down category-arrow"></i>
      </div>
      <div class="category-items">
        ${items.map(item => renderNavItem(item, category.id)).join('')}
      </div>
    </div>
  `;
}

/**
 * Initialize sidebar functionality
 */
export function initSidebar() {
  initUITheme();
  attachThemeListeners();
  attachSidebarListeners();
}

/**
 * Attach sidebar event listeners
 */
function attachSidebarListeners() {
  // Category toggle
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('[data-category-toggle]');
    if (toggle) {
      const catId = toggle.dataset.categoryToggle;
      const category = document.querySelector(`[data-category="${catId}"]`);
      category?.classList.toggle('collapsed');
    }
    
    // Accordion toggle
    const infoBtn = e.target.closest('[data-accordion-toggle]');
    if (infoBtn) {
      const item = infoBtn.closest('.nav-item');
      const accordion = item?.querySelector('.accordion-content');
      accordion?.classList.toggle('open');
    }
  });
  
  // Checkbox change
  document.addEventListener('change', (e) => {
    if (e.target.matches('.rdr-checkbox')) {
      handleCheckboxChange(e.target);
    }
  });
}

/**
 * Handle checkbox state change
 */
function handleCheckboxChange(checkbox) {
  const item = checkbox.closest('.nav-item') || checkbox.closest('.sub-item');
  const title = item?.querySelector('.nav-item-title, .sub-item-text');
  
  if (title) {
    title.classList.toggle('completed', checkbox.checked);
  }
  
  // Update progress if sub-item
  if (checkbox.classList.contains('sub-checkbox')) {
    updateParentProgress(checkbox);
  }
}

/**
 * Update parent progress when sub-item changes
 */
function updateParentProgress(subCheckbox) {
  const container = subCheckbox.closest('.sub-items-container');
  if (!container) return;
  
  const subs = container.querySelectorAll('.sub-checkbox');
  const checked = Array.from(subs).filter(cb => cb.checked).length;
  const total = subs.length;
  
  // Update progress bar
  const progress = container.querySelector('.progress-bar');
  if (progress) {
    progress.style.width = `${(checked / total) * 100}%`;
  }
  
  // Update parent checkbox
  const navItem = container.closest('.nav-item');
  const parentCheckbox = navItem?.querySelector('.rdr-checkbox:not(.sub-checkbox)');
  if (parentCheckbox) {
    parentCheckbox.checked = checked === total;
  }
}
