/**
 * Checklist V2 - Main Component
 * Renders full checklist with V1 logic + V2 visual style
 * Features:
 * - Section-based grouping
 * - Collapsible sections
 * - Theme-aware rendering
 * - Dual audio system support (V1 + V2)
 * - Sidebar navigation sync
 * - Advanced filtering
 */

import { CHECKLIST_SECTIONS } from '../../data/index.js';
import { store } from '../../data/state.js';
import { 
  renderItemCard, 
  updateProgressBars, 
  autoCompleteParent,
  getSectionColor 
} from './item-renderer.js';
import {
  activeFilters,
  itemMatchesFilters,
  isItemCompleted,
  statusMatches
} from '../sidebar-v2/filters.js';

// Audio imports - both V1 and V2 systems
import { playCheckSound } from '../../utils/audio.js';
import { playCompleteSound, initAudio as initV2Audio } from '../showcase-v2/audio.js';

// State
let collapsedSections = new Set();
const STORAGE_KEY = 'rdr_collapsed_sections';

/**
 * Initialize checklist
 */
export function initChecklist(containerId = 'checklist') {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Checklist container not found');
    return;
  }
  
  // Initialize state and audio
  store.init();
  initV2Audio();
  loadCollapsedState();
  
  // Render
  renderChecklist(container);
  attachChecklistListeners(container);
  
  // Subscribe to state changes for real-time updates
  store.subscribe(() => {
    updateAllProgress();
  });
  
  // Listen for filter changes
  window.addEventListener('filters-changed', () => {
    // Get fresh container reference (in case DOM was replaced by HMR)
    const freshContainer = document.getElementById(containerId);
    if (freshContainer) {
      applyFiltersToChecklist(freshContainer);
    }
  });
  
  console.log('📋 Checklist V2 initialized');
}

/**
 * Load collapsed sections from localStorage
 */
function loadCollapsedState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      collapsedSections = new Set(JSON.parse(saved));
    }
  } catch {
    collapsedSections = new Set();
  }
}

/**
 * Save collapsed sections to localStorage
 */
function saveCollapsedState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...collapsedSections]));
  } catch {
    // Ignore storage errors
  }
}

/**
 * Render full checklist
 */
export function renderChecklist(container) {
  const sections = CHECKLIST_SECTIONS
    .filter(section => !section.isJournal && section.items?.length > 0);
  
  let html = '';
  let cigHeaderInserted = false;
  
  sections.forEach(section => {
    // Insert Cigarette Cards group header before the first cig- section
    if (section.id.startsWith('cig-') && !cigHeaderInserted) {
      cigHeaderInserted = true;
      html += renderCigaretteCardsGroupHeader();
    }
    html += renderSection(section);
  });
  
  container.innerHTML = html;
}

/**
 * Render Cigarette Cards group header with buy/discard strategy
 */
function renderCigaretteCardsGroupHeader() {
  return `
    <div class="checklist-group-header" style="
      margin: 2rem 0 1rem 0;
      padding: 1.2rem 1.5rem;
      background: linear-gradient(135deg, rgba(78,52,28,0.6), rgba(45,30,15,0.8));
      border: 1px solid rgba(244,228,188,0.15);
      border-radius: 8px;
      font-family: var(--font-western);
    ">
      <h2 style="
        margin: 0 0 0.5rem 0;
        font-size: 1.4rem;
        color: var(--color-paper);
        letter-spacing: 0.05em;
        display: flex;
        align-items: center;
        gap: 10px;
      ">
        <i class="fa-solid fa-smoking" style="font-size:1rem;opacity:0.7;"></i>
        Cigarette Cards
        <span style="font-size:0.75rem;opacity:0.5;font-family:var(--font-typewriter);font-weight:400;">12 Sets · 144 Cards</span>
      </h2>
      <p style="
        margin: 0;
        font-size: 0.82rem;
        color: rgba(244,228,188,0.7);
        font-family: var(--font-typewriter);
        line-height: 1.5;
      ">
        💡 <strong style="color:rgba(244,228,188,0.9);">Fast Method:</strong> Buy <strong>Premium Cigarettes</strong> ($2.50) at any General Store → open them → discard the cigarettes → repeat. 
        Collect all 144 cards in ~5 minutes! Mail complete sets to <strong>Phineas Ramsbottom</strong> for rewards totaling <strong>$800+</strong> — 
        you'll earn back more than you spent.
      </p>
    </div>
  `;
}

/**
 * Get progress bar color class based on percentage
 * 0% = gray, 1-30% = yellow, 31-60% = orange, 61-100% = green
 */
function getProgressColorClass(percent) {
  if (percent === 0) return 'progress-gray';
  if (percent <= 30) return 'progress-yellow';
  if (percent <= 60) return 'progress-orange';
  return 'progress-green';
}

/**
 * Render a single section
 */
function renderSection(section) {
  const isCollapsed = collapsedSections.has(section.id);
  const progress = store.getSectionProgress(section);
  const { color, name: colorName } = getSectionColor(section.id);
  const progressPercent = progress.total > 0 
    ? Math.round((progress.completed / progress.total) * 100) 
    : 0;
  
  // Get progress bar color based on percentage
  const progressColorClass = getProgressColorClass(progressPercent);
  
  // Section-specific FontAwesome icons
  const SECTION_ICON_MAP = {
    'quickstart': 'fa-star',
    'treasures': 'fa-gem',
    'weapons': 'fa-gun',
    'satchel': 'fa-bag-shopping',
    'camp': 'fa-campground', 
    'trapper': 'fa-paw',
    'unique-hats': 'fa-hat-cowboy',
    'pamphlets': 'fa-scroll',
    'talismans': 'fa-hand-sparkles',
    'strangers': 'fa-person-circle-question',
    'legendary-animals': 'fa-hippo',
    'bounties': 'fa-handcuffs',
    'gang-hideouts': 'fa-skull-crossbones',
    'companion-activities': 'fa-users',
    'camp-requests': 'fa-hand-holding-heart',
    'mysteries': 'fa-book-skull',
    'missable': 'fa-triangle-exclamation',
    'graves': 'fa-cross',
    'collectibles': 'fa-image',
    // Challenges (using actual section IDs)
    'bandit': 'fa-mask',
    'explorer': 'fa-compass',
    'gambler': 'fa-dice',
    'herbalist': 'fa-leaf',
    'horseman': 'fa-horse',
    'hunter': 'fa-bullseye',
    'sharpshooter': 'fa-crosshairs',
    'survivalist': 'fa-fire',
    'weapons-expert': 'fa-gun',
    // Cigarette cards
    'cig-gunslingers': 'fa-person-rifle',
    'cig-stage': 'fa-masks-theater',
    'cig-travel': 'fa-train',
    'cig-fauna': 'fa-paw',
    'cig-horses': 'fa-horse-head',
    'cig-prominent': 'fa-user-tie',
    'cig-flora': 'fa-seedling',
    'cig-beauty': 'fa-crown',
    'cig-champions': 'fa-medal',
    'cig-vistas': 'fa-mountain-sun',
    'cig-artists': 'fa-palette',
    'cig-inventions': 'fa-gears',
    // Journal
    'journal': 'fa-book'
  };
  
  // Get FontAwesome icon from map or fallback to fa-list
  const iconClass = SECTION_ICON_MAP[section.id] || 'fa-list';
  
  return `
    <section class="checklist-section" id="section-${section.id}" data-section="${section.id}">
      <header class="section-header ${isCollapsed ? 'collapsed' : ''}" data-section-id="${section.id}">
        <div class="section-header-left">
          <i class="fa-solid ${iconClass} section-icon" style="color: ${color}"></i>
          <h2 class="section-title">${section.title}</h2>
          <span class="section-count">${progress.completed}/${progress.total}</span>
        </div>
        <div class="section-header-right">
          <div class="section-progress-bar">
            <div class="section-progress-fill ${progressColorClass}" style="width: ${progressPercent}%" data-percent="${progressPercent}"></div>
          </div>
          <i class="fa-solid fa-chevron-down section-chevron"></i>
        </div>
      </header>
      
      ${section.tip_detailed ? `
        <div class="section-info-toggle" data-section-info="${section.id}">
          <i class="fa-solid fa-scroll"></i> About this section
        </div>
        <div class="section-info-panel" id="section-info-${section.id}">
          <div class="section-info-content">${formatSectionTip(section.tip_detailed)}</div>
        </div>
      ` : ''}
      
      <div class="section-items ${isCollapsed ? 'hidden' : ''}">
        ${section.items.map(item => renderItemCard(item, section.id)).join('')}
      </div>
    </section>
  `;
}

/**
 * Format section tip with markdown
 */
function formatSectionTip(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

/**
 * Attach event listeners
 */
export function attachChecklistListeners(container) {
  // Section header collapse/expand
  container.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
      const sectionId = header.dataset.sectionId;
      toggleSection(sectionId, header);
    });
  });
  
  // Section info toggle
  container.querySelectorAll('.section-info-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const sectionId = toggle.dataset.sectionInfo;
      const panel = document.getElementById(`section-info-${sectionId}`);
      if (panel) {
        panel.classList.toggle('open');
        toggle.classList.toggle('active');
      }
    });
  });
  
  // Done icon clicks
  container.querySelectorAll('.done-icon').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleDoneClick(btn, container);
    });
  });
  
  // Sub-items toggle
  container.querySelectorAll('.sub-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = btn.dataset.toggleSubs;
      const panel = document.getElementById(`subs-${itemId}`);
      if (panel) {
        panel.classList.toggle('open');
        btn.classList.toggle('active');
      }
    });
  });
  
  // Info toggle (tip_detailed)
  container.querySelectorAll('.info-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = btn.dataset.toggleInfo;
      const panel = document.getElementById(`info-${itemId}`);
      if (panel) {
        panel.classList.toggle('open');
        btn.classList.toggle('active');
      }
    });
  });
  
  // Sub-item info toggle (sub-item tip_detailed)
  container.querySelectorAll('.sub-info-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const subId = btn.dataset.toggleSubInfo;
      const panel = document.getElementById(`sub-info-${subId}`);
      if (panel) {
        panel.classList.toggle('open');
        btn.classList.toggle('active');
      }
    });
  });
}

/**
 * Handle done icon click
 */
function handleDoneClick(btn, container) {
  const id = btn.dataset.id;
  const sectionId = btn.dataset.section;
  const isSubItem = btn.closest('.sub-item') !== null;
  
  // Toggle state
  const newState = store.toggle(id);
  
  // Update UI
  btn.classList.toggle('checked', newState);
  btn.querySelector('.icon-inner').textContent = newState ? '✖' : '';
  
  // Update associated text - IMPORTANT: check sub-item FIRST before checklist-card
  const card = isSubItem ? btn.closest('.sub-item') : btn.closest('.checklist-card');
  const title = isSubItem ? card?.querySelector('.sub-text') : card?.querySelector('.card-title');
  if (title) {
    title.classList.toggle('completed', newState);
    // Inline style fallback for strikethrough
    title.style.textDecoration = newState ? 'line-through' : 'none';
  }
  
  // Also update sub-item container for completed state styling
  if (isSubItem) {
    const subItem = btn.closest('.sub-item');
    if (subItem) subItem.classList.toggle('completed', newState);
  }
  
  // Handle sub-item completion
  if (isSubItem && newState) {
    const parentCard = btn.closest('.checklist-card');
    if (parentCard) {
      const wasAutoCompleted = autoCompleteParent(parentCard);
      if (wasAutoCompleted) {
        // Play complete sound for auto-complete
        playCompleteSound();
      } else {
        // Regular sub-item check sound
        playCheckSound(sectionId);
      }
    }
  } else if (newState) {
    // Regular item check sound
    playCheckSound(sectionId);
  }
  
  // Update progress bars
  updateProgressBars(container);
  updateSectionProgress(sectionId);
  
  // Dispatch event for sidebar sync
  document.dispatchEvent(new CustomEvent('checklist:change', {
    detail: { id, sectionId, checked: newState }
  }));
}

/**
 * Toggle section collapse/expand
 */
function toggleSection(sectionId, header) {
  const section = document.getElementById(`section-${sectionId}`);
  const items = section?.querySelector('.section-items');
  if (!items) return;
  
  const isCollapsed = items.classList.contains('hidden');
  
  if (isCollapsed) {
    items.classList.remove('hidden');
    header.classList.remove('collapsed');
    collapsedSections.delete(sectionId);
  } else {
    items.classList.add('hidden');
    header.classList.add('collapsed');
    collapsedSections.add(sectionId);
  }
  
  saveCollapsedState();
}

/**
 * Update section progress bar
 */
function updateSectionProgress(sectionId) {
  const section = CHECKLIST_SECTIONS.find(s => s.id === sectionId);
  if (!section) return;
  
  const progress = store.getSectionProgress(section);
  const progressPercent = progress.total > 0 
    ? Math.round((progress.completed / progress.total) * 100) 
    : 0;
  
  const sectionEl = document.getElementById(`section-${sectionId}`);
  if (sectionEl) {
    const count = sectionEl.querySelector('.section-count');
    const fill = sectionEl.querySelector('.section-progress-fill');
    
    if (count) count.textContent = `${progress.completed}/${progress.total}`;
    if (fill) {
      fill.style.width = `${progressPercent}%`;
      // Update color class based on new percentage
      fill.classList.remove('progress-gray', 'progress-yellow', 'progress-orange', 'progress-green');
      fill.classList.add(getProgressColorClass(progressPercent));
    }
  }
}

/**
 * Update all section progress bars
 */
function updateAllProgress() {
  CHECKLIST_SECTIONS.forEach(section => {
    if (!section.isJournal && section.items) {
      updateSectionProgress(section.id);
    }
  });
}

/**
 * Scroll to a specific section
 */
export function scrollToSection(sectionId) {
  const section = document.getElementById(`section-${sectionId}`);
  if (section) {
    // Expand if collapsed
    const header = section.querySelector('.section-header');
    const items = section.querySelector('.section-items');
    if (items?.classList.contains('hidden')) {
      items.classList.remove('hidden');
      header?.classList.remove('collapsed');
      collapsedSections.delete(sectionId);
      saveCollapsedState();
    }
    
    // Scroll into view
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Highlight briefly
    section.classList.add('highlight');
    setTimeout(() => section.classList.remove('highlight'), 1500);
  }
}

/**
 * Refresh checklist (after import, reset, etc.)
 */
export function refreshChecklist(containerId = 'checklist') {
  const container = document.getElementById(containerId);
  if (container) {
    renderChecklist(container);
    attachChecklistListeners(container);
  }
}

/**
 * Apply filters to checklist items (V1-style behavior)
 */
function applyFiltersToChecklist(container) {
  // Check if any filter is active
  const hasActiveFilters = activeFilters.searchTerm || 
    activeFilters.chapter || 
    activeFilters.region || 
    activeFilters.status !== 'all' ||
    activeFilters.missableOnly ||
    activeFilters.hasReward;
  
  // Get all sections
  const sections = container.querySelectorAll('.checklist-section');
  
  // If no filters, restore normal state
  if (!hasActiveFilters) {
    sections.forEach(sectionEl => {
      sectionEl.style.display = '';
      sectionEl.classList.remove('filter-expanded');
      
      // Restore collapsed state
      const sectionId = sectionEl.dataset.section;
      const isCollapsed = collapsedSections.has(sectionId);
      const header = sectionEl.querySelector('.section-header');
      const itemsContainer = sectionEl.querySelector('.section-items');
      
      if (isCollapsed) {
        header?.classList.add('collapsed');
        itemsContainer?.classList.add('hidden');
      }
      
      // Show all items
      sectionEl.querySelectorAll('.checklist-card').forEach(card => {
        card.style.display = '';
      });
    });
    return;
  }
  
  // With active filters: expand all sections and filter items
  sections.forEach(sectionEl => {
    const sectionId = sectionEl.dataset.section;
    const section = CHECKLIST_SECTIONS.find(s => s.id === sectionId);
    if (!section || !section.items) return;
    
    // Force expand section during filtering
    const header = sectionEl.querySelector('.section-header');
    const itemsContainer = sectionEl.querySelector('.section-items');
    header?.classList.remove('collapsed');
    itemsContainer?.classList.remove('hidden');
    sectionEl.classList.add('filter-expanded');
    
    let visibleItems = 0;
    const itemCards = sectionEl.querySelectorAll('.checklist-card');
    
    itemCards.forEach((card) => {
      const itemId = card.dataset.itemId;
      const item = section.items.find(i => i.id === itemId);
      if (!item) {
        card.style.display = 'none';
        return;
      }
      
      // Text search matching (title, tip, tags)
      let matchesSearch = true;
      if (activeFilters.searchTerm) {
        const searchTerm = activeFilters.searchTerm.toLowerCase();
        const titleMatch = item.text?.toLowerCase().includes(searchTerm);
        const tipMatch = item.tip?.toLowerCase().includes(searchTerm);
        const tipDetailedMatch = item.tip_detailed?.toLowerCase().includes(searchTerm);
        const tagMatch = item.tags?.some(t => t.toLowerCase().includes(searchTerm));
        
        matchesSearch = titleMatch || tipMatch || tipDetailedMatch || tagMatch;
      }
      
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
      
      // Status filter
      const isCompleted = store.get(item.id);
      const matchesStatus = statusMatches(isCompleted);
      
      // Show/hide item
      const shouldShow = matchesSearch && matchesStructuredFilters && matchesStatus;
      card.style.display = shouldShow ? '' : 'none';
      
      if (shouldShow) visibleItems++;
    });
    
    // Hide section if no items match
    if (visibleItems === 0) {
      sectionEl.style.display = 'none';
    } else {
      sectionEl.style.display = '';
    }
  });
}
