/**
 * Navigation Component - Enhanced with Hierarchical Structure & Search
 * Sticky sidebar with collapsible categories and search functionality
 */

import { $, $$ } from '../utils/dom.js';
import { CHECKLIST_SECTIONS, NAV_CATEGORIES } from '../data/index.js';

// Navigation category structure (grouped sections)
const DEFAULT_NAV_CATEGORIES = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: '🌟',
    sections: ['quickstart']
  },
  {
    id: 'money-gear',
    title: 'Money & Gear',
    icon: '💰',
    sections: ['treasures', 'weapons', 'satchel', 'camp']
  },
  {
    id: 'world',
    title: 'World & Story',
    icon: '🗺️',
    sections: ['strangers', 'legendary-animals', 'collectibles', 'missable']
  },
  {
    id: 'challenges',
    title: 'Challenges',
    icon: '🏆',
    sections: ['bandit', 'explorer', 'hunter', 'herbalist', 'sharpshooter', 'horseman', 'survivalist', 'gambler']
  },
  {
    id: 'personal',
    title: 'Personal',
    icon: '📓',
    sections: ['journal']
  }
];

let searchQuery = '';
let expandedCategories = new Set(['getting-started', 'money-gear', 'world']);

// Smart Filter State
const activeFilters = {
  chapter: null,         // null, 1-6, or 'epilogue'
  region: null,          // null or one of REGIONS
  status: 'all',         // 'all', 'completed', 'uncompleted'
  missableOnly: false,   // Show only missable/priority items
  hasReward: false       // Show only items with rewards
};

// Region constants for filtering
const REGIONS = [
  { id: 'ambarino', name: 'Ambarino', patterns: ['ambarino', 'grizzlies', 'colter', 'lake isabella', 'mount hagen', 'cattail pond', 'cotorra'] },
  { id: 'new-hanover', name: 'New Hanover', patterns: ['new hanover', 'heartlands', 'valentine', 'emerald', 'cumberland', 'elysian', 'dewberry', 'annesburg', 'van horn', 'roanoke'] },
  { id: 'lemoyne', name: 'Lemoyne', patterns: ['lemoyne', 'saint denis', 'rhodes', 'scarlett', 'bayou', 'bluewater', 'braithwaite', 'caliga', 'shady belle', 'lakay', 'lagras'] },
  { id: 'west-elizabeth', name: 'West Elizabeth', patterns: ['west elizabeth', 'blackwater', 'strawberry', 'big valley', 'tall trees', 'owanjila', 'aurora', 'great plains', 'manzanita'] },
  { id: 'new-austin', name: 'New Austin', patterns: ['new austin', 'armadillo', 'tumbleweed', 'macfarlane', 'gaptooth', 'rio bravo', 'fort mercer', 'cholla'] }
];

const CHAPTERS = [
  { id: '1', name: 'Chapter 1' },
  { id: '2', name: 'Chapter 2' },
  { id: '3', name: 'Chapter 3' },
  { id: '4', name: 'Chapter 4' },
  { id: '5', name: 'Chapter 5' },
  { id: '6', name: 'Chapter 6' },
  { id: 'epilogue', name: 'Epilogue' }
];

export function renderNavigation() {
  const navCategories = NAV_CATEGORIES || DEFAULT_NAV_CATEGORIES;
  
  const navHTML = `
    <nav class="nav-sidebar" id="nav-sidebar">
      <div class="nav-header">
        <span class="nav-title">📜 Ledger</span>
        <button class="nav-close" id="nav-close">✕</button>
      </div>
      
      <!-- Search Bar with Filter Toggle -->
      <div class="nav-search-row">
        <input 
          type="text" 
          id="nav-search-input" 
          placeholder="🔍 Search..." 
          class="nav-search-input"
        >
        <button class="filter-toggle-btn" id="filter-toggle" title="Toggle Filters">
          ⚙️
        </button>
      </div>
      
      <!-- Smart Filters Panel (Collapsible) -->
      <div class="nav-filters-panel hidden" id="nav-filters-panel">
        <div class="filter-section">
          <div class="filter-section-label">📖 CHAPTER</div>
          <div class="filter-chips" id="filter-chips-chapter"></div>
        </div>
        <div class="filter-section">
          <div class="filter-section-label">🗺️ REGION</div>
          <div class="filter-chips" id="filter-chips-region"></div>
        </div>
        <div class="filter-section">
          <div class="filter-section-label">📊 STATUS</div>
          <div class="filter-radio-group">
            <label class="filter-radio active" data-status="all">
              <span>All</span>
            </label>
            <label class="filter-radio" data-status="uncompleted">
              <span>Todo</span>
            </label>
            <label class="filter-radio" data-status="completed">
              <span>Done</span>
            </label>
          </div>
        </div>
        <div class="filter-section">
          <div class="filter-section-label">⚡ SPECIAL</div>
          <div class="filter-chips">
            <button class="filter-chip" id="filter-missable" data-filter="missable">⚠️ Missable</button>
            <button class="filter-chip" id="filter-reward" data-filter="reward">🎁 Rewards</button>
          </div>
        </div>
        <div class="filter-active-row" id="filter-active"></div>
      </div>
      
      <!-- Category List -->
      <div class="nav-categories" id="nav-categories">
        ${renderCategories(navCategories)}
      </div>
      
      <!-- Quick Stats -->
      <div class="nav-stats" id="nav-stats"></div>
    </nav>
    <button class="nav-fab" id="nav-fab" title="Quick Navigation">☰</button>
  `;
  
  const container = $('.container');
  if (container) {
    container.insertAdjacentHTML('afterbegin', navHTML);
  }
  
  attachNavListeners();
  updateNavStats();
}

function renderCategories(categories) {
  return categories.map(cat => {
    const isExpanded = expandedCategories.has(cat.id);
    const sections = cat.sections
      .map(sId => CHECKLIST_SECTIONS.find(s => s.id === sId))
      .filter(Boolean);
    
    return `
      <div class="nav-category ${isExpanded ? 'expanded' : ''}" data-category="${cat.id}">
        <div class="nav-category-header" data-category="${cat.id}">
          <span class="nav-category-icon">${cat.icon}</span>
          <span class="nav-category-title">${cat.title}</span>
          <span class="nav-category-arrow">${isExpanded ? '▼' : '▶'}</span>
        </div>
        <div class="nav-category-items ${isExpanded ? '' : 'collapsed'}">
          ${sections.map(section => renderNavSection(section)).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderNavSection(section) {
  if (!section) return '';
  
  // Clean title (remove roman numerals)
  const cleanTitle = section.title.replace(/^[IVXLCDM]+\.\s*/, '');
  
  // Count all items including subItems
  let total = 0;
  let completed = 0;
  
  section.items?.forEach(item => {
    if (item.subItems && item.subItems.length > 0) {
      // Count subItems instead of parent
      total += item.subItems.length;
      item.subItems.forEach(sub => {
        const key = `rdr_check_${sub.id}`;
        if (localStorage.getItem(key) === 'true') completed++;
      });
    } else {
      // Count regular item
      total++;
      const key = `rdr_check_${item.id}`;
      if (localStorage.getItem(key) === 'true') completed++;
    }
  });
  
  const isComplete = total > 0 && completed === total;
  const hasProgress = completed > 0;
  
  return `
    <a href="#${section.id}" class="nav-section-link ${isComplete ? 'section-complete' : ''}" data-section="${section.id}">
      <span class="nav-section-icon">${section.icon || '•'}</span>
      <span class="nav-section-title">${cleanTitle}</span>
      <span class="nav-section-count ${hasProgress ? 'has-progress' : ''}">${completed}/${total}</span>
    </a>
  `;
}

function attachNavListeners() {
  const navSidebar = $('#nav-sidebar');
  const fabBtn = $('#nav-fab');
  const closeBtn = $('#nav-close');
  const searchInput = $('#nav-search-input');
  
  // FAB toggles sidebar
  fabBtn?.addEventListener('click', () => {
    navSidebar?.classList.toggle('open');
  });
  
  // Close button
  closeBtn?.addEventListener('click', () => {
    navSidebar?.classList.remove('open');
  });
  
  // Category toggle
  $$('.nav-category-header').forEach(header => {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      const catId = header.dataset.category;
      toggleCategory(catId);
    });
  });
  
  // Section links
  $$('.nav-section-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      navigateToSection(sectionId);
    });
  });
  
  // Search input
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    applyAllFilters();
  });
  
  // Filter Toggle Button - open/close panel
  $('#filter-toggle')?.addEventListener('click', () => {
    const panel = $('#nav-filters-panel');
    const btn = $('#filter-toggle');
    panel?.classList.toggle('hidden');
    btn?.classList.toggle('active', !panel?.classList.contains('hidden'));
    
    // Populate chips on first open
    if (!panel?.classList.contains('hidden') && !panel?.dataset.initialized) {
      populateFilterChips();
      panel.dataset.initialized = 'true';
    }
  });
  
  // Status radio buttons
  $$('.filter-radio').forEach(radio => {
    radio.addEventListener('click', () => {
      $$('.filter-radio').forEach(r => r.classList.remove('active'));
      radio.classList.add('active');
      activeFilters.status = radio.dataset.status;
      applyAllFilters();
      updateActiveFiltersDisplay();
    });
  });
  
  // Missable chip toggle
  $('#filter-missable')?.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    activeFilters.missableOnly = !activeFilters.missableOnly;
    chip?.classList.toggle('active', activeFilters.missableOnly);
    applyAllFilters();
    updateActiveFiltersDisplay();
  });
  
  // Reward chip toggle
  $('#filter-reward')?.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    activeFilters.hasReward = !activeFilters.hasReward;
    chip?.classList.toggle('active', activeFilters.hasReward);
    applyAllFilters();
    updateActiveFiltersDisplay();
  });
  
  // Close nav on outside click (mobile)
  document.addEventListener('click', (e) => {
    if (navSidebar?.classList.contains('open')) {
      if (!navSidebar.contains(e.target) && e.target !== fabBtn) {
        navSidebar.classList.remove('open');
      }
    }
  });
  
  // Active section tracking on scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveNavItem();
        ticking = false;
      });
      ticking = true;
    }
  });
}

function toggleCategory(catId) {
  const category = $(`.nav-category[data-category="${catId}"]`);
  const items = category?.querySelector('.nav-category-items');
  const arrow = category?.querySelector('.nav-category-arrow');
  
  if (expandedCategories.has(catId)) {
    expandedCategories.delete(catId);
    category?.classList.remove('expanded');
    items?.classList.add('collapsed');
    if (arrow) arrow.textContent = '▶';
  } else {
    expandedCategories.add(catId);
    category?.classList.add('expanded');
    items?.classList.remove('collapsed');
    if (arrow) arrow.textContent = '▼';
  }
}

function navigateToSection(sectionId) {
  const section = $(`#${sectionId}`);
  const header = section?.previousElementSibling;
  
  if (header) {
    header.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Expand if collapsed
    if (section?.classList.contains('hidden')) {
      header.click();
    }
    
    // Highlight briefly
    header.classList.add('nav-highlight');
    setTimeout(() => header.classList.remove('nav-highlight'), 1500);
  }
  
  // Close mobile nav
  $('#nav-sidebar')?.classList.remove('open');
}

function filterSections(query) {
  if (!query) {
    // Reset - show all categories and sections
    $$('.nav-category').forEach(cat => cat.classList.remove('hidden'));
    $$('.nav-section-link').forEach(link => link.classList.remove('hidden'));
    $$('.nav-category-items').forEach(items => {
      if (items.closest('.nav-category.expanded')) {
        items.classList.remove('collapsed');
      }
    });
    return;
  }
  
  // Filter based on query
  CHECKLIST_SECTIONS.forEach(section => {
    const link = $(`.nav-section-link[data-section="${section.id}"]`);
    if (!link) return;
    
    // Check if section title or any item matches
    const titleMatch = section.title.toLowerCase().includes(query);
    const itemMatch = section.items?.some(item => 
      item.text.toLowerCase().includes(query) ||
      item.tip?.toLowerCase().includes(query)
    );
    
    if (titleMatch || itemMatch) {
      link.classList.remove('hidden');
      // Expand parent category
      const category = link.closest('.nav-category');
      category?.classList.remove('hidden');
      category?.querySelector('.nav-category-items')?.classList.remove('collapsed');
    } else {
      link.classList.add('hidden');
    }
  });
  
  // Hide empty categories
  $$('.nav-category').forEach(cat => {
    const visibleLinks = cat.querySelectorAll('.nav-section-link:not(.hidden)');
    if (visibleLinks.length === 0) {
      cat.classList.add('hidden');
    }
  });
  
  // Also filter main content
  filterMainContent(query);
}

function filterMainContent(query) {
  if (!query) {
    // Reset - show all items and restore normal view
    $$('.checklist-item').forEach(item => item.classList.remove('search-hidden'));
    $$('.tip').forEach(tip => tip.classList.remove('search-hidden'));
    $$('.sub-items-panel').forEach(panel => panel.classList.remove('search-hidden'));
    $$('.sub-item').forEach(sub => sub.classList.remove('search-hidden'));
    
    // Restore checklist-group visibility based on their header's collapsed state
    $$('.checklist-group').forEach(group => {
      group.classList.remove('search-expanded'); // Remove search expand flag
      const sectionId = group.id;
      const header = document.querySelector(`.section-header[data-section="${sectionId}"]`);
      if (header) {
        if (header.classList.contains('collapsed')) {
          group.classList.add('hidden');
        } else {
          group.classList.remove('hidden');
        }
      }
    });
    return;
  }
  
  // During search: show ALL sections (override collapsed state)
  $$('.checklist-group').forEach(group => {
    group.classList.remove('hidden');
    group.classList.add('search-expanded');
  });
  
  // Search through all items including subItems
  $$('.checklist-item').forEach(item => {
    const text = item.textContent?.toLowerCase() || '';
    const tip = item.nextElementSibling;
    const tipText = tip?.classList.contains('tip') ? tip.textContent?.toLowerCase() || '' : '';
    
    // Also check subItems within this item's panel
    const subPanel = item.closest('.item-wrapper')?.querySelector('.sub-items-panel');
    let subMatch = false;
    if (subPanel) {
      const subItems = subPanel.querySelectorAll('.sub-item');
      subItems.forEach(sub => {
        const subText = sub.textContent?.toLowerCase() || '';
        if (subText.includes(query)) {
          subMatch = true;
          sub.classList.remove('search-hidden');
        } else {
          sub.classList.add('search-hidden');
        }
      });
    }
    
    if (text.includes(query) || tipText.includes(query) || subMatch) {
      item.classList.remove('search-hidden');
      if (tip?.classList.contains('tip')) tip.classList.remove('search-hidden');
      if (subPanel) subPanel.classList.remove('search-hidden');
    } else {
      item.classList.add('search-hidden');
      if (tip?.classList.contains('tip')) tip.classList.add('search-hidden');
      if (subPanel && !subMatch) subPanel.classList.add('search-hidden');
    }
  });
}

function updateActiveNavItem() {
  const sections = $$('.section-header');
  let currentSection = null;
  
  sections.forEach(header => {
    const rect = header.getBoundingClientRect();
    if (rect.top <= 150) {
      currentSection = header.dataset.section;
    }
  });
  
  $$('.nav-section-link').forEach(link => {
    if (link.dataset.section === currentSection) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function updateNavStats() {
  const statsContainer = $('#nav-stats');
  if (!statsContainer) return;
  
  const allCheckboxes = $$('input[type="checkbox"]');
  const total = allCheckboxes.length;
  const completed = Array.from(allCheckboxes).filter(cb => cb.checked).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  statsContainer.innerHTML = `
    <div class="nav-stats-bar">
      <div class="nav-stats-fill" style="width: ${percentage}%"></div>
    </div>
    <span class="nav-stats-text">${completed}/${total} (${percentage}%)</span>
  `;
  
  // Also refresh individual section counts in sidebar
  refreshSectionCounts();
}

/**
 * Refresh all section counts in sidebar based on current checkbox states
 */
function refreshSectionCounts() {
  CHECKLIST_SECTIONS.forEach(section => {
    if (!section.items) return;
    
    const navLink = $(`.nav-section-link[data-section="${section.id}"]`);
    if (!navLink) return;
    
    // Count items including subItems
    let total = 0;
    let completed = 0;
    
    section.items.forEach(item => {
      if (item.subItems && item.subItems.length > 0) {
        // Count subItems instead of parent
        total += item.subItems.length;
        item.subItems.forEach(sub => {
          const key = `rdr_check_${sub.id}`;
          if (localStorage.getItem(key) === 'true') completed++;
        });
      } else {
        // Count regular item
        total++;
        const key = `rdr_check_${item.id}`;
        if (localStorage.getItem(key) === 'true') completed++;
      }
    });
    
    // Update count display
    const countEl = navLink.querySelector('.nav-section-count');
    if (countEl) {
      countEl.textContent = `${completed}/${total}`;
      
      // Update styling classes
      const isComplete = total > 0 && completed === total;
      const hasProgress = completed > 0;
      
      countEl.classList.toggle('has-progress', hasProgress);
      navLink.classList.toggle('section-complete', isComplete);
    }
  });
}

// Export for external updates
export function refreshNavStats() {
  updateNavStats();
}

/**
 * Apply all active filters + search query to checklist items
 */
function applyAllFilters() {
  const hasActiveFilters = activeFilters.chapter || activeFilters.region || 
    activeFilters.status !== 'all' || activeFilters.missableOnly || activeFilters.hasReward;
  const hasSearch = searchQuery.length > 0;
  
  if (!hasActiveFilters && !hasSearch) {
    // Reset - show all items and restore normal view
    $$('.checklist-item').forEach(item => item.classList.remove('filter-hidden', 'search-hidden'));
    $$('.tip').forEach(tip => tip.classList.remove('filter-hidden', 'search-hidden'));
    $$('.sub-items-panel').forEach(panel => panel.classList.remove('filter-hidden', 'search-hidden'));
    $$('.sub-item').forEach(sub => sub.classList.remove('filter-hidden', 'search-hidden'));
    
    // Restore checklist-group visibility based on their header's collapsed state
    $$('.checklist-group').forEach(group => {
      group.classList.remove('search-expanded');
      const sectionId = group.id;
      const header = document.querySelector(`.section-header[data-section="${sectionId}"]`);
      if (header) {
        if (header.classList.contains('collapsed')) {
          group.classList.add('hidden');
        } else {
          group.classList.remove('hidden');
        }
      }
    });
    return;
  }
  
  // During filter/search: show ALL sections (override collapsed state)
  $$('.checklist-group').forEach(group => {
    group.classList.remove('hidden');
    group.classList.add('search-expanded');
  });
  
  // Process each checklist item
  $$('.checklist-item').forEach(item => {
    const wrapper = item.closest('.item-wrapper');
    const itemId = item.querySelector('input[type="checkbox"]')?.id;
    const text = item.textContent?.toLowerCase() || '';
    const tip = item.nextElementSibling;
    const tipText = tip?.classList.contains('tip') ? tip.textContent?.toLowerCase() || '' : '';
    const subPanel = wrapper?.querySelector('.sub-items-panel');
    
    // Get item data for structured filtering
    const itemData = getItemDataFromDOM(item, tipText);
    
    // Check if item matches all active filters
    const matchesFilters = itemMatchesFilters(itemData, itemId);
    
    // Check text search
    let matchesSearch = true;
    let subMatch = false;
    
    if (hasSearch) {
      matchesSearch = text.includes(searchQuery) || tipText.includes(searchQuery);
      
      // Check subItems
      if (subPanel) {
        subPanel.querySelectorAll('.sub-item').forEach(sub => {
          const subText = sub.textContent?.toLowerCase() || '';
          if (subText.includes(searchQuery)) {
            subMatch = true;
            sub.classList.remove('search-hidden', 'filter-hidden');
          } else {
            sub.classList.add('search-hidden');
          }
        });
      }
    }
    
    const showItem = matchesFilters && (matchesSearch || subMatch);
    
    if (showItem) {
      item.classList.remove('filter-hidden', 'search-hidden');
      if (tip?.classList.contains('tip')) tip.classList.remove('filter-hidden', 'search-hidden');
      if (subPanel) subPanel.classList.remove('filter-hidden', 'search-hidden');
    } else {
      item.classList.add('filter-hidden');
      if (tip?.classList.contains('tip')) tip.classList.add('filter-hidden');
      if (subPanel && !subMatch) subPanel.classList.add('filter-hidden');
    }
  });
}

/**
 * Get item data from DOM for filter matching
 */
function getItemDataFromDOM(itemElement, tipText) {
  const chapterTag = itemElement.querySelector('.chapter-tag');
  const missableTag = itemElement.querySelector('.missable-tag');
  const rewardTag = itemElement.querySelector('.reward-tag');
  
  let chapter = null;
  if (chapterTag) {
    const chText = chapterTag.textContent.toLowerCase();
    if (chText.includes('epilogue')) {
      chapter = 'epilogue';
    } else {
      const match = chText.match(/ch\s*(\d+)/i);
      if (match) chapter = match[1];
    }
  }
  
  return {
    chapter,
    region: detectRegion(tipText),
    isMissable: !!missableTag && missableTag.textContent.includes('MISSABLE'),
    isPriority: !!missableTag && missableTag.textContent.includes('PRIORITY'),
    hasReward: !!rewardTag
  };
}

/**
 * Detect region from tip text using pattern matching
 */
function detectRegion(tipText) {
  if (!tipText) return null;
  const tip = tipText.toLowerCase();
  
  for (const region of REGIONS) {
    for (const pattern of region.patterns) {
      if (tip.includes(pattern)) {
        return region.id;
      }
    }
  }
  return null;
}

/**
 * Check if item matches all active filters
 */
function itemMatchesFilters(itemData, itemId) {
  // Chapter filter
  if (activeFilters.chapter) {
    if (itemData.chapter !== activeFilters.chapter) {
      return false;
    }
  }
  
  // Region filter
  if (activeFilters.region) {
    if (itemData.region !== activeFilters.region) {
      return false;
    }
  }
  
  // Status filter
  if (activeFilters.status !== 'all') {
    const isChecked = localStorage.getItem(`rdr_check_${itemId}`) === 'true';
    if (activeFilters.status === 'completed' && !isChecked) return false;
    if (activeFilters.status === 'uncompleted' && isChecked) return false;
  }
  
  // Missable filter
  if (activeFilters.missableOnly) {
    if (!itemData.isMissable && !itemData.isPriority) {
      return false;
    }
  }
  
  // Reward filter
  if (activeFilters.hasReward) {
    if (!itemData.hasReward) {
      return false;
    }
  }
  
  return true;
}

/**
 * Update active filters display badge
 */
function updateActiveFiltersDisplay() {
  const container = $('#filter-active');
  if (!container) return;
  
  const badges = [];
  
  if (activeFilters.chapter) {
    const ch = CHAPTERS.find(c => c.id === activeFilters.chapter);
    badges.push(`<span class="filter-badge" data-filter="chapter">${ch?.name || activeFilters.chapter} ×</span>`);
  }
  
  if (activeFilters.region) {
    const reg = REGIONS.find(r => r.id === activeFilters.region);
    badges.push(`<span class="filter-badge" data-filter="region">${reg?.name || activeFilters.region} ×</span>`);
  }
  
  if (activeFilters.status !== 'all') {
    const label = activeFilters.status === 'completed' ? 'Done' : 'Todo';
    badges.push(`<span class="filter-badge" data-filter="status">${label} ×</span>`);
  }
  
  if (activeFilters.missableOnly) {
    badges.push(`<span class="filter-badge" data-filter="missable">Missable ×</span>`);
  }
  
  if (activeFilters.hasReward) {
    badges.push(`<span class="filter-badge" data-filter="reward">Rewards ×</span>`);
  }
  
  if (badges.length > 0) {
    badges.push(`<button class="filter-clear-all" id="filter-clear-all">Clear All</button>`);
  }
  
  container.innerHTML = badges.join('');
  
  // Attach click handlers for removing filters
  container.querySelectorAll('.filter-badge').forEach(badge => {
    badge.addEventListener('click', () => {
      const filterType = badge.dataset.filter;
      removeFilter(filterType);
    });
  });
  
  $('#filter-clear-all')?.addEventListener('click', resetAllFilters);
}

/**
 * Remove a specific filter
 */
function removeFilter(filterType) {
  switch (filterType) {
    case 'chapter':
      activeFilters.chapter = null;
      $('#filter-chapter').value = '';
      break;
    case 'region':
      activeFilters.region = null;
      $('#filter-region').value = '';
      break;
    case 'status':
      activeFilters.status = 'all';
      const statusBtn = $('#filter-status');
      if (statusBtn) {
        statusBtn.textContent = '✓ All';
        statusBtn.classList.remove('active');
      }
      break;
    case 'missable':
      activeFilters.missableOnly = false;
      $('#filter-missable')?.classList.remove('active');
      break;
    case 'reward':
      activeFilters.hasReward = false;
      $('#filter-reward')?.classList.remove('active');
      break;
  }
  
  applyAllFilters();
  updateActiveFiltersDisplay();
}

/**
 * Reset all filters
 */
function resetAllFilters() {
  activeFilters.chapter = null;
  activeFilters.region = null;
  activeFilters.status = 'all';
  activeFilters.missableOnly = false;
  activeFilters.hasReward = false;
  
  // Reset UI - chips
  $$('.filter-chip.chapter-chip').forEach(chip => chip.classList.remove('active'));
  $$('.filter-chip.region-chip').forEach(chip => chip.classList.remove('active'));
  $$('.filter-radio').forEach(r => r.classList.remove('active'));
  $('.filter-radio[data-status="all"]')?.classList.add('active');
  $('#filter-missable')?.classList.remove('active');
  $('#filter-reward')?.classList.remove('active');
  
  applyAllFilters();
  updateActiveFiltersDisplay();
}

/**
 * Scan all data to find available filter values
 */
function scanAvailableFilters() {
  const chapters = new Set();
  const regions = new Set();
  
  // Scan all checklist sections
  CHECKLIST_SECTIONS.forEach(section => {
    section.items?.forEach(item => {
      // Check chapter
      if (item.chapter) {
        chapters.add(String(item.chapter).toLowerCase());
      }
      // Check region
      if (item.region) {
        regions.add(item.region);
      }
      // Check subItems
      item.subItems?.forEach(sub => {
        if (sub.chapter) {
          chapters.add(String(sub.chapter).toLowerCase());
        }
        if (sub.region) {
          regions.add(sub.region);
        }
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
 * Populate filter chips dynamically based on available data
 */
function populateFilterChips() {
  const available = scanAvailableFilters();
  
  // Populate chapter chips
  const chapterContainer = $('#filter-chips-chapter');
  if (chapterContainer) {
    if (available.chapters.length === 0) {
      chapterContainer.innerHTML = '<span class="filter-empty">No chapter data</span>';
    } else {
      chapterContainer.innerHTML = available.chapters.map(ch => {
        const label = ch === 'epilogue' ? 'Epilogue' : `CH ${ch}`;
        return `<button class="filter-chip chapter-chip" data-chapter="${ch}">${label}</button>`;
      }).join('');
      
      // Attach click handlers
      chapterContainer.querySelectorAll('.chapter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const wasActive = chip.classList.contains('active');
          // Remove active from all chapter chips
          $$('.chapter-chip').forEach(c => c.classList.remove('active'));
          
          if (wasActive) {
            activeFilters.chapter = null;
          } else {
            chip.classList.add('active');
            activeFilters.chapter = chip.dataset.chapter;
          }
          applyAllFilters();
          updateActiveFiltersDisplay();
        });
      });
    }
  }
  
  // Populate region chips
  const regionContainer = $('#filter-chips-region');
  if (regionContainer) {
    if (available.regions.length === 0) {
      regionContainer.innerHTML = '<span class="filter-empty">No region data</span>';
    } else {
      regionContainer.innerHTML = available.regions.map(reg => {
        const region = REGIONS.find(r => r.id === reg);
        const label = region ? region.name : reg;
        return `<button class="filter-chip region-chip" data-region="${reg}">${label}</button>`;
      }).join('');
      
      // Attach click handlers
      regionContainer.querySelectorAll('.region-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const wasActive = chip.classList.contains('active');
          // Remove active from all region chips
          $$('.region-chip').forEach(c => c.classList.remove('active'));
          
          if (wasActive) {
            activeFilters.region = null;
          } else {
            chip.classList.add('active');
            activeFilters.region = chip.dataset.region;
          }
          applyAllFilters();
          updateActiveFiltersDisplay();
        });
      });
    }
  }
}
