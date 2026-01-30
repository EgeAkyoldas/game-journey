/**
 * The Drifter's Ledger - Main Entry Point
 * A comprehensive Red Dead Redemption checklist
 */

import './styles/main.css';
import { initParticles } from './components/particles.js';
import { renderHeader } from './components/header.js';
import { renderNavigation } from './components/navigation.js';
import { renderChecklist } from './components/checklist.js';
import { initJournal } from './components/journal.js';
import { renderActions } from './components/actions.js';
import { initTheme, renderThemeToggle, watchSystemTheme } from './components/theme.js';
import { renderMapButton } from './components/map.js';
import { CHECKLIST_SECTIONS } from './data/index.js';

/**
 * Initialize the application
 */
function init() {
  // Initialize theme FIRST (prevents flash)
  initTheme();
  
  // Create ambient particles
  initParticles();
  
  // Render header with title and progress
  renderHeader();
  
  // Render theme toggle button
  renderThemeToggle();
  
  // Watch system theme changes
  watchSystemTheme();
  
  // Render navigation sidebar
  renderNavigation();
  
  // Render all checklist sections
  renderChecklist(CHECKLIST_SECTIONS);
  
  // Initialize journal with auto-save
  initJournal();
  
  // Render action buttons
  renderActions();
  
  // Render map button (bottom-right)
  renderMapButton();
  
  console.log('🤠 The Drifter\'s Ledger initialized');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
