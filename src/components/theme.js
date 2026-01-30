/**
 * Theme Toggle Component
 * Dark mode / Light mode switch with persistence
 */

import { Storage } from '../utils/storage.js';
import { $ } from '../utils/dom.js';

const THEME_KEY = 'theme_mode';

/**
 * Initialize theme based on saved preference or system
 */
export function initTheme() {
  const savedTheme = Storage.load(THEME_KEY, null);
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
  } else {
    // Use system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
    }
  }
}

/**
 * Toggle between light and dark mode
 */
export function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  Storage.save(THEME_KEY, isDark ? 'dark' : 'light');
  updateToggleIcon();
}

/**
 * Update the toggle button icon
 */
function updateToggleIcon() {
  const btn = $('#theme-toggle');
  if (!btn) return;
  
  const isDark = document.body.classList.contains('dark-mode');
  btn.innerHTML = isDark ? '☀️' : '🌙';
  btn.title = isDark ? 'Switch to Day Mode' : 'Switch to Night Mode';
}

/**
 * Render the theme toggle button
 */
export function renderThemeToggle() {
  const isDark = document.body.classList.contains('dark-mode');
  
  const toggleHTML = `
    <button class="theme-toggle" id="theme-toggle" title="${isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}">
      ${isDark ? '☀️' : '🌙'}
    </button>
  `;
  
  // Insert after the stamp in header or at the end of container
  const container = $('.container');
  if (container) {
    container.insertAdjacentHTML('afterbegin', toggleHTML);
    
    // Attach event listener
    const btn = $('#theme-toggle');
    btn?.addEventListener('click', toggleTheme);
  }
}

/**
 * Listen for system theme changes
 */
export function watchSystemTheme() {
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only apply if user hasn't set a preference
      if (!Storage.load(THEME_KEY, null)) {
        if (e.matches) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
        updateToggleIcon();
      }
    });
  }
}
