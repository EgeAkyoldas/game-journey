/**
 * Sidebar V2 - Module Index
 * Export all components for external use
 */

// Core navigation
export { 
  renderNavigation, 
  refreshNavigation 
} from './navigation.js';

// Theme system
export { 
  initThemeSystem,
  setMode,
  toggleMode,
  setUITheme,
  renderThemeSelector,
  renderModeToggle,
  attachThemeListeners,
  UI_THEMES
} from './theme-system.js';

// Filters
export {
  activeFilters,
  setSearchFilter,
  setChapterFilter,
  setRegionFilter,
  setStatusFilter,
  toggleMissableFilter,
  toggleRewardFilter,
  clearFilter,
  resetAllFilters,
  getActiveFilterCount,
  itemMatchesFilters,
  isItemCompleted,
  statusMatches,
  scanAvailableFilters,
  renderFilterPanel,
  renderActiveFilterBadges,
  REGIONS
} from './filters.js';

// CSS imports (for bundlers)
// import './styles/sidebar.css';
// import './styles/themes.css';
// import './styles/components.css';
