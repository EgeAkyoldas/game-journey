/**
 * Main V2 - Entry Point
 * Unified initialization for V2 components
 */

// Styles
import './components/sidebar-v2/styles/sidebar.css';
import './components/sidebar-v2/styles/themes.css';
import './components/sidebar-v2/styles/components.css';
import './components/showcase-v2/styles/showcase.css';  // Theme variables for content area
import './components/checklist-v2/styles/checklist.css';
import './components/settings-panel/styles/settings-panel.css';
import './components/journal-modal.css';

// Components
import { initThemeSystem, attachThemeListeners } from './components/sidebar-v2/theme-system.js';
import { renderNavigation, attachNavListeners, refreshNavigation } from './components/sidebar-v2/navigation.js';
import { initChecklist, scrollToSection, refreshChecklist } from './components/checklist-v2/index.js';
import { initSettingsPanel } from './components/settings-panel/index.js';
import { initParticles } from './components/particles.js';
import { initJournalModal } from './components/journal-modal.js';
import { renderActions } from './components/actions.js';
import { renderHeader, updateOverallProgress } from './components/header.js';
import { store } from './data/state.js';
import { CHECKLIST_SECTIONS } from './data/index.js';

/**
 * Initialize V2 Application
 */
async function initApp() {
  console.log('🤠 Initializing The Drifter\'s Ledger V2...');
  
  // 1. Initialize theme system FIRST (sets data attributes)
  initThemeSystem();
  attachThemeListeners();
  
  // 2. Initialize state store
  store.init();
  
  // 3. Render particles (background)
  initParticles();
  
  // 4. Render header
  const headerContainer = document.getElementById('header');
  if (headerContainer) {
    renderHeader(headerContainer);
  }
  
  // 5. Render sidebar navigation
  const sidebarContainer = document.getElementById('sidebar');
  if (sidebarContainer) {
    renderNavigation();
    // Note: attachNavListeners is also called inside renderNavigation, but we call again to be safe
  }
  
  // 6. Render checklist (main content)
  initChecklist('checklist');
  
  // 7. Initialize journal modal (floating FAB + popup)
  initJournalModal();
  
  // 8. Render action buttons (export/import)
  const actionsContainer = document.getElementById('actions');
  if (actionsContainer) {
    renderActions();
  }
  
  // 9. Initialize settings panel (floating)
  initSettingsPanel('settings-panel');
  
  // 10. Setup event listeners for component communication
  setupEventListeners();
  
  // 11. Update initial progress
  updateOverallProgress();
  
  console.log('✅ V2 initialized successfully!');
}

/**
 * Setup cross-component event listeners
 */
function setupEventListeners() {
  // Sidebar section click → scroll to section in checklist
  document.addEventListener('nav:sectionClick', (e) => {
    const { sectionId } = e.detail;
    scrollToSection(sectionId);
  });
  
  // Checklist change → update sidebar stats
  document.addEventListener('checklist:change', () => {
    refreshNavigation();
    updateOverallProgress();
  });
  
  // Settings theme/mode change → refresh components
  document.addEventListener('settings:themeChange', () => {
    // Theme already applied via data attribute, just refresh if needed
  });
  
  document.addEventListener('settings:modeChange', () => {
    // Mode already applied via data attribute
  });
  
  // Store state changes → update progress
  store.subscribe(() => {
    updateOverallProgress();
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export for external use if needed
export { initApp };
