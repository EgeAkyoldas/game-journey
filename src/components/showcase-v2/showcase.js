/**
 * Showcase V2 - Main Entry Point
 * Feature-focused showcase with real data
 */

import { CHECKLIST_SECTIONS } from '../../data/index.js';
import { store } from '../../data/state.js';
import { initAudio, AUDIO_CATEGORIES } from './audio.js';
import { renderItemCard, attachCardListeners } from './item-renderer.js';

// Feature demo configurations
const FEATURE_DEMOS = [
  {
    id: 'progress-bars',
    title: 'Progress Bars & Sub-Items',
    icon: 'fa-tasks',
    description: 'Items with step-by-step sub-tasks and visual progress tracking',
    sectionId: 'treasures',
    filter: item => item.subItems?.length > 2,
    maxItems: 2
  },
  {
    id: 'priority-badges',
    title: 'Priority Badges',
    icon: 'fa-star',
    description: 'Essential early-game items marked with priority tags',
    sectionId: 'quickstart',
    filter: item => item.priority,
    maxItems: 2
  },
  {
    id: 'missable-warnings',
    title: 'Missable Content',
    icon: 'fa-triangle-exclamation',
    description: 'Story-locked content that can be permanently missed',
    sectionId: 'missable',
    filter: () => true,
    maxItems: 2
  },
  {
    id: 'bounty-rewards',
    title: 'Bounty Rewards',
    icon: 'fa-crosshairs',
    description: 'Bounties with money rewards and chapter availability',
    sectionId: 'bounties',
    filter: item => item.rewards || item.chapter,
    maxItems: 2
  },
  {
    id: 'challenge-tiers',
    title: 'Challenge Tiers',
    icon: 'fa-trophy',
    description: 'Multi-level challenges with tiered progression',
    sectionId: 'bandit',
    filter: () => true,
    maxItems: 2
  },
  {
    id: 'detailed-stories',
    title: 'Detailed Stories',
    icon: 'fa-book-open',
    description: 'Rich narrative descriptions with tips and strategies',
    sectionId: 'strangers',
    filter: item => item.tip_detailed?.length > 100,
    maxItems: 2
  }
];

/**
 * Initialize showcase
 */
export function initShowcase(containerId = 'showcase-content') {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Showcase container not found');
    return;
  }
  
  // Initialize audio and store (theme is done in HTML)
  initAudio();
  store.init();
  
  // Render content
  renderShowcase(container);
  
  console.log('🤠 Showcase V2 initialized');
}

/**
 * Render all feature sections
 */
function renderShowcase(container) {
  container.innerHTML = FEATURE_DEMOS.map(demo => {
    const section = CHECKLIST_SECTIONS.find(s => s.id === demo.sectionId);
    if (!section?.items) return '';
    
    const items = section.items.filter(demo.filter).slice(0, demo.maxItems);
    if (items.length === 0) return '';
    
    return `
      <section class="feature-section" data-feature="${demo.id}">
        <div class="feature-header">
          <i class="fa-solid ${demo.icon}"></i>
          <h2>${demo.title}</h2>
          <span class="feature-badge">${items.length} examples</span>
        </div>
        <p class="feature-desc">${demo.description}</p>
        <div class="feature-items">
          ${items.map(item => renderItemCard(item, demo.sectionId)).join('')}
        </div>
      </section>
    `;
  }).join('');
  
  // Attach listeners
  attachCardListeners(container);
}

/**
 * Refresh showcase (after theme change, etc.)
 */
export function refreshShowcase(containerId = 'showcase-content') {
  const container = document.getElementById(containerId);
  if (container) {
    renderShowcase(container);
  }
}

// Export for external use
export { AUDIO_CATEGORIES } from './audio.js';
export { renderItemCard, attachCardListeners } from './item-renderer.js';
