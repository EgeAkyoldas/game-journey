/**
 * Sidebar Component - Module Exports
 * Import this to get all sidebar functionality
 */

// Core sidebar
export { renderSidebar, initSidebar } from './sidebar.js';

// Theme selector
export { 
  renderThemeSelector, 
  initUITheme, 
  setUITheme, 
  attachThemeListeners,
  THEMES 
} from './theme-selector.js';

// Nav items
export { 
  renderNavItem, 
  renderSubItems, 
  renderProgressBar 
} from './nav-item.js';

// CSS import helper - call this in main.js
export function importSidebarStyles() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/src/components/sidebar/sidebar.css';
  document.head.appendChild(link);
}
