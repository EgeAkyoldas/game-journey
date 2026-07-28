/**
 * Settings Panel V2
 * Floating settings panel with:
 * - Theme selector (wood/ledger/wanted/saloon)
 * - Day/Night mode toggle
 * - Audio volume control (placeholder for future)
 * - Video background toggle
 */

import { setUITheme as applyUITheme, setMode as applyThemeMode } from '../sidebar-v2/theme-system.js';
import { setVolume } from '../showcase-v2/audio.js';
import { setSoundVolume } from '../../utils/audio.js';
import { handleExport, handleImport, handleBurn } from '../actions.js';

// State
let isOpen = false;
let currentTheme = 'wood';
let currentMode = 'night';
let audioEnabled = true;
let videoEnabled = true;

const STORAGE_KEYS = {
  theme: 'rdr_ui_theme',
  mode: 'rdr_mode',
  audio: 'rdr_audio_enabled',
  volume: 'rdr_audio_volume',
  video: 'rdr_video_enabled'
};

/**
 * Initialize settings panel
 */
export function initSettingsPanel(containerId = 'settings-panel') {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Settings panel container not found');
    return;
  }
  
  // Load saved preferences
  loadPreferences();
  
  // Render panel
  renderSettingsPanel(container);
  
  // Attach listeners
  attachSettingsListeners(container);
  
  // Apply saved preferences
  applyPreferences();
  
  console.log('⚙️ Settings Panel initialized');
}

/**
 * Load preferences from localStorage
 */
function loadPreferences() {
  try {
    currentTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'wood';
    currentMode = localStorage.getItem(STORAGE_KEYS.mode) || 'night';
    audioEnabled = localStorage.getItem(STORAGE_KEYS.audio) !== 'false';
    videoEnabled = localStorage.getItem(STORAGE_KEYS.video) !== 'false';
  } catch {
    // Ignore storage errors
  }
}

/**
 * Apply preferences to DOM
 */
function applyPreferences() {
  document.body.dataset.mode = currentMode;
  document.body.dataset.uiTheme = currentTheme;
  
  // Apply volume
  const vol = audioEnabled ? 0.3 : 0;
  setVolume(vol);
  setSoundVolume(vol);
  
  // Apply video background
  const video = document.querySelector('.video-background');
  if (video) {
    video.style.display = videoEnabled ? 'block' : 'none';
  }
}

/**
 * Render settings panel HTML
 */
function renderSettingsPanel(container) {
  container.innerHTML = `
    <button class="settings-fab" id="settings-fab" title="Settings">
      <i class="fa-solid fa-gear"></i>
    </button>
    
    <div class="settings-panel" id="settings-panel-content">
      <div class="settings-header">
        <i class="fa-solid fa-gear"></i>
        <span>Settings</span>
        <button class="settings-close" id="settings-close">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      
      <div class="settings-body">
        <!-- Day/Night Mode -->
        <div class="settings-section">
          <div class="settings-label">
            <i class="fa-solid fa-circle-half-stroke"></i>
            Mode
          </div>
          <div class="settings-toggle-group">
            <button class="mode-btn ${currentMode === 'day' ? 'active' : ''}" data-mode="day">
              <i class="fa-solid fa-sun"></i> Day
            </button>
            <button class="mode-btn ${currentMode === 'night' ? 'active' : ''}" data-mode="night">
              <i class="fa-solid fa-moon"></i> Night
            </button>
          </div>
        </div>
        
        <!-- Theme Selector -->
        <div class="settings-section">
          <div class="settings-label">
            <i class="fa-solid fa-palette"></i>
            Theme
          </div>
          <div class="theme-grid">
            <button class="theme-option ${currentTheme === 'wood' ? 'active' : ''}" 
                    data-theme="wood" title="Wood">
              <i class="fa-solid fa-tree"></i>
              <span>Wood</span>
            </button>
            <button class="theme-option ${currentTheme === 'ledger' ? 'active' : ''}" 
                    data-theme="ledger" title="Ledger">
              <i class="fa-solid fa-book"></i>
              <span>Ledger</span>
            </button>
            <button class="theme-option ${currentTheme === 'wanted' ? 'active' : ''}" 
                    data-theme="wanted" title="Wanted">
              <i class="fa-solid fa-scroll"></i>
              <span>Wanted</span>
            </button>
            <button class="theme-option ${currentTheme === 'saloon' ? 'active' : ''}" 
                    data-theme="saloon" title="Saloon">
              <i class="fa-solid fa-whiskey-glass"></i>
              <span>Saloon</span>
            </button>
          </div>
        </div>
        
        <!-- Audio Toggle -->
        <div class="settings-section">
          <div class="settings-label">
            <i class="fa-solid fa-volume-high"></i>
            Sound Effects
          </div>
          <label class="settings-switch">
            <input type="checkbox" id="audio-toggle" ${audioEnabled ? 'checked' : ''}>
            <span class="switch-slider"></span>
          </label>
        </div>
        
        <!-- Video Background Toggle -->
        <div class="settings-section">
          <div class="settings-label">
            <i class="fa-solid fa-film"></i>
            Video Background
          </div>
          <label class="settings-switch">
            <input type="checkbox" id="video-toggle" ${videoEnabled ? 'checked' : ''}>
            <span class="switch-slider"></span>
          </label>
        </div>

        <!-- Progress backup -->
        <div class="settings-section settings-section--stack">
          <div class="settings-label">
            <i class="fa-solid fa-floppy-disk"></i>
            Progress
          </div>
          <p class="settings-hint">
            Your progress is stored in this browser only. Export a save file to
            keep it, or to move it to another device.
          </p>
          <div class="settings-actions">
            <button class="settings-action" id="settings-export">
              <i class="fa-solid fa-file-export"></i> Export
            </button>
            <input type="file" id="settings-import-file" accept=".json,application/json" hidden>
            <button class="settings-action" id="settings-import">
              <i class="fa-solid fa-file-import"></i> Import
            </button>
            <button class="settings-action settings-action--danger" id="settings-reset">
              <i class="fa-solid fa-fire"></i> Reset
            </button>
          </div>
          <p class="settings-status" id="settings-progress-status" role="status"></p>
        </div>
      </div>

      <div class="settings-footer">
        <span class="settings-version">The Drifter's Ledger V2</span>
      </div>
    </div>
  `;
}

/**
 * Attach event listeners
 */
function attachSettingsListeners(container) {
  // FAB button
  container.querySelector('#settings-fab').addEventListener('click', () => {
    togglePanel();
  });
  
  // Close button
  container.querySelector('#settings-close').addEventListener('click', () => {
    closePanel();
  });
  
  // Mode buttons
  container.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      setModeHandler(mode);
      
      // Update UI
      container.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  // Theme buttons
  container.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      setTheme(theme);
      
      // Update UI
      container.querySelectorAll('.theme-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  // Audio toggle
  container.querySelector('#audio-toggle').addEventListener('change', (e) => {
    audioEnabled = e.target.checked;
    localStorage.setItem(STORAGE_KEYS.audio, audioEnabled);
    
    const vol = audioEnabled ? 0.3 : 0;
    setVolume(vol);
    setSoundVolume(vol);
  });
  
  // Video toggle
  container.querySelector('#video-toggle').addEventListener('change', (e) => {
    videoEnabled = e.target.checked;
    localStorage.setItem(STORAGE_KEYS.video, videoEnabled);

    const video = document.querySelector('.video-background');
    if (video) {
      video.style.display = videoEnabled ? 'block' : 'none';
    }
  });

  // Progress: export / import / reset
  const statusEl = container.querySelector('#settings-progress-status');
  const report = (message, ok = true) => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.classList.toggle('error', !ok);
  };

  container.querySelector('#settings-export').addEventListener('click', () => {
    const summary = handleExport();
    report(`Save file downloaded — ${summary}.`);
  });

  const fileInput = container.querySelector('#settings-import-file');
  container.querySelector('#settings-import').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => handleImport(e, report));

  container.querySelector('#settings-reset').addEventListener('click', handleBurn);

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !container.contains(e.target)) {
      closePanel();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closePanel();
    }
  });
}

/**
 * Toggle panel visibility
 */
function togglePanel() {
  const panel = document.getElementById('settings-panel-content');
  isOpen = !isOpen;
  panel.classList.toggle('open', isOpen);
}

/**
 * Close panel
 */
function closePanel() {
  const panel = document.getElementById('settings-panel-content');
  isOpen = false;
  panel.classList.remove('open');
}

/**
 * Set mode (day/night)
 */
function setModeHandler(mode) {
  currentMode = mode;
  document.body.dataset.mode = mode;
  localStorage.setItem(STORAGE_KEYS.mode, mode);
  
  // Use sidebar theme system
  applyThemeMode(mode);
  
  // Dispatch event for other components
  document.dispatchEvent(new CustomEvent('settings:modeChange', { detail: { mode } }));
}

/**
 * Set theme
 */
function setTheme(theme) {
  currentTheme = theme;
  document.body.dataset.uiTheme = theme;
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  
  // Use sidebar theme system
  applyUITheme(theme);
  
  // Dispatch event for other components
  document.dispatchEvent(new CustomEvent('settings:themeChange', { detail: { theme } }));
}

/**
 * Get current settings
 */
export function getSettings() {
  return {
    theme: currentTheme,
    mode: currentMode,
    audioEnabled,
    videoEnabled
  };
}
