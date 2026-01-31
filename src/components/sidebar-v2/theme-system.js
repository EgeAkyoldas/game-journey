/**
 * Theme System V2
 * - Day/Night mode toggle (separate)
 * - 4 UI themes with localStorage persistence
 */

import { Storage } from '../../utils/storage.js';

const MODE_KEY = 'rdr-mode';
const THEME_KEY = 'rdr-ui-theme';

/**
 * Available UI themes
 */
export const UI_THEMES = [
  { id: 'wood', name: 'Wood Block', icon: 'fa-tree' },
  { id: 'ledger', name: 'Ledger', icon: 'fa-book' },
  { id: 'wanted', name: 'Wanted', icon: 'fa-scroll' },
  { id: 'saloon', name: 'Saloon', icon: 'fa-whiskey-glass' }
];

/**
 * Initialize theme system from localStorage
 */
export function initThemeSystem() {
  const savedMode = Storage.load(MODE_KEY, 'day');
  const savedTheme = Storage.load(THEME_KEY, 'wood');
  
  setMode(savedMode, false);
  setUITheme(savedTheme, false);
}

/**
 * Set Day/Night mode
 * @param {string} mode - 'day' or 'night'
 * @param {boolean} save - persist to localStorage
 */
export function setMode(mode, save = true) {
  document.body.setAttribute('data-mode', mode);
  
  // Update toggle button icon
  const toggleBtn = document.getElementById('mode-toggle');
  if (toggleBtn) {
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.className = mode === 'night' 
        ? 'fa-solid fa-sun' 
        : 'fa-solid fa-moon';
    }
    toggleBtn.title = mode === 'night' ? 'Switch to Day Mode' : 'Switch to Night Mode';
  }
  
  if (save) {
    Storage.save(MODE_KEY, mode);
  }
}

/**
 * Toggle between Day and Night
 */
export function toggleMode() {
  const current = document.body.getAttribute('data-mode') || 'day';
  setMode(current === 'day' ? 'night' : 'day');
}

/**
 * Set UI theme
 * @param {string} themeId - wood, ledger, wanted, saloon
 * @param {boolean} save - persist to localStorage
 */
export function setUITheme(themeId, save = true) {
  document.body.setAttribute('data-ui-theme', themeId);
  
  // Update theme button states
  document.querySelectorAll('[data-theme-id]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.themeId === themeId);
  });
  
  // Update sidebar title
  const navTitle = document.querySelector('.nav-title');
  if (navTitle) {
    navTitle.textContent = UI_THEMES.find(t => t.id === themeId)?.name || 'Ledger';
  }
  
  if (save) {
    Storage.save(THEME_KEY, themeId);
  }
}

/**
 * Render theme selector buttons
 * @returns {string} HTML
 */
export function renderThemeSelector() {
  const currentTheme = document.body.getAttribute('data-ui-theme') || 'wood';
  
  const buttons = UI_THEMES.map(theme => `
    <button 
      class="theme-btn theme-btn--${theme.id} ${theme.id === currentTheme ? 'active' : ''}" 
      data-theme-id="${theme.id}"
      title="${theme.name}"
    >
      <i class="fa-solid ${theme.icon}"></i>
    </button>
  `).join('');
  
  return `<div class="theme-selector">${buttons}</div>`;
}

/**
 * Render day/night mode toggle (goes in top-right)
 * @returns {string} HTML
 */
export function renderModeToggle() {
  const isNight = document.body.getAttribute('data-mode') === 'night';
  
  return `
    <button class="mode-toggle" id="mode-toggle" title="${isNight ? 'Switch to Day Mode' : 'Switch to Night Mode'}">
      <i class="fa-solid ${isNight ? 'fa-sun' : 'fa-moon'}"></i>
    </button>
  `;
}

/**
 * Attach event listeners
 */
export function attachThemeListeners() {
  document.addEventListener('click', (e) => {
    // Theme buttons
    const themeBtn = e.target.closest('[data-theme-id]');
    if (themeBtn) {
      setUITheme(themeBtn.dataset.themeId);
      return;
    }
    
    // Mode toggle
    if (e.target.closest('#mode-toggle')) {
      toggleMode();
    }
  });
}

// Export for global access (inline handlers)
if (typeof window !== 'undefined') {
  window.toggleMode = toggleMode;
  window.setUITheme = setUITheme;
}
