/**
 * Navigation Component - Enhanced with Hierarchical Structure & Search
 * Sticky sidebar with collapsible categories and search functionality
 */

import { $, $$ } from '../utils/dom.js';
import { CHECKLIST_SECTIONS, NAV_CATEGORIES } from '../data/checklist-data.js';

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

export function renderNavigation() {
  const navCategories = NAV_CATEGORIES || DEFAULT_NAV_CATEGORIES;
  
  const navHTML = `
    <nav class="nav-sidebar" id="nav-sidebar">
      <div class="nav-header">
        <span class="nav-title">📜 Ledger</span>
        <button class="nav-close" id="nav-close">✕</button>
      </div>
      
      <!-- Search Bar -->
      <div class="nav-search">
        <input 
          type="text" 
          id="nav-search-input" 
          placeholder="🔍 Search..." 
          class="nav-search-input"
        >
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
  const itemCount = section.items?.length || 0;
  
  return `
    <a href="#${section.id}" class="nav-section-link" data-section="${section.id}">
      <span class="nav-section-icon">${section.icon || '•'}</span>
      <span class="nav-section-title">${cleanTitle}</span>
      <span class="nav-section-count">${itemCount}</span>
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
    filterSections(searchQuery);
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
    
    // Restore checklist-group visibility based on their header's collapsed state
    $$('.checklist-group').forEach(group => {
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
  
  $$('.checklist-item').forEach(item => {
    const text = item.textContent?.toLowerCase() || '';
    const tip = item.nextElementSibling;
    const tipText = tip?.classList.contains('tip') ? tip.textContent?.toLowerCase() || '' : '';
    
    if (text.includes(query) || tipText.includes(query)) {
      item.classList.remove('search-hidden');
      if (tip?.classList.contains('tip')) tip.classList.remove('search-hidden');
    } else {
      item.classList.add('search-hidden');
      if (tip?.classList.contains('tip')) tip.classList.add('search-hidden');
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
}

// Export for external updates
export function refreshNavStats() {
  updateNavStats();
}
