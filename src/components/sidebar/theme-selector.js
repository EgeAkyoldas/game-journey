/**
 * Theme Selector Component V2
 * - 4 UI Themes (Wood, Ledger, Wanted, Saloon)
 * - Day/Night mode toggle
 * Both are separate and can be combined
 */

import { Storage } from '../../utils/storage.js';

const THEME_KEY = 'rdr-ui-theme';
const MODE_KEY = 'rdr-mode';

// Available themes
const THEMES = [
  { id: 'wood', name: 'Wood Block', icon: 'fa-tree' },
  { id: 'ledger', name: 'Ledger', icon: 'fa-book' },
  { id: 'wanted', name: 'Wanted', icon: 'fa-scroll' },
  { id: 'saloon', name: 'Saloon', icon: 'fa-whiskey-glass' }
];

/**
 * Initialize theme and mode from localStorage
 */
export function initThemeSystem() {
  const savedTheme = Storage.load(THEME_KEY, 'wood');
  const savedMode = Storage.load(MODE_KEY, 'day');
  
  setUITheme(savedTheme, false);
  setMode(savedMode, false);
}

/**
 * Set the UI theme
 */
export function setUITheme(themeId, save = true) {
  document.body.setAttribute('data-ui-theme', themeId);
  
  // Update button states
  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.themeBtn === themeId);
  });
  
  if (save) {
    Storage.save(THEME_KEY, themeId);
  }
}

/**
 * Set Day/Night mode
 */
export function setMode(mode, save = true) {
  document.body.setAttribute('data-mode', mode);
  
  // Update toggle button
  const modeBtn = document.getElementById('mode-toggle');
  if (modeBtn) {
    modeBtn.innerHTML = mode === 'night' 
      ? '<i class="fa-solid fa-sun"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
    modeBtn.title = mode === 'night' ? 'Switch to Day Mode' : 'Switch to Night Mode';
  }
  
  if (save) {
    Storage.save(MODE_KEY, mode);
  }
}

/**
 * Toggle between day and night
 */
export function toggleMode() {
  const current = document.body.getAttribute('data-mode') || 'day';
  setMode(current === 'day' ? 'night' : 'day');
}

/**
 * Render theme selector buttons
 */
export function renderThemeSelector() {
  const buttons = THEMES.map(theme => `
    <button 
      class="theme-btn theme-btn-${theme.id}" 
      data-theme-btn="${theme.id}"
      title="${theme.name}"
    >
      <i class="fa-solid ${theme.icon}"></i>
    </button>
  `).join('');
  
  return `
    <div class="theme-selector">
      ${buttons}
    </div>
  `;
}

/**
 * Render day/night mode toggle
 */
export function renderModeToggle() {
  const isNight = document.body.getAttribute('data-mode') === 'night';
  
  return `
    <button 
      class="mode-toggle-btn" 
      id="mode-toggle"
      title="${isNight ? 'Switch to Day Mode' : 'Switch to Night Mode'}"
    >
      <i class="fa-solid ${isNight ? 'fa-sun' : 'fa-moon'}"></i>
    </button>
  `;
}

/**
 * Attach all theme/mode listeners
 */
export function attachThemeListeners() {
  // Expose to window for inline handlers
  window.setUITheme = setUITheme;
  window.toggleMode = toggleMode;
  
  // Theme buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-theme-btn]');
    if (btn) {
      setUITheme(btn.dataset.themeBtn);
    }
    
    // Mode toggle
    if (e.target.closest('#mode-toggle')) {
      toggleMode();
    }
  });
}

export { THEMES };
