/**
 * Header Component - V2 Redesign
 * Western ledger style with WANTED stamp and progress bar
 */

import { $ } from '../utils/dom.js';
import { renderHeaderProgress, updateHeaderProgress } from './header-progress.js';

export function renderHeader() {
  const container = $('#header');
  if (!container) return;

  container.innerHTML = `
    <div class="header-wrapper">
      <!-- WANTED Stamp -->
      <div class="wanted-stamp">
        <span class="wanted-text">WANTED</span>
        <span class="wanted-subtext">DEAD OR ALIVE</span>
      </div>
      
      <!-- Main Title -->
      <h1 class="ledger-title">Journal</h1>
      
      <!-- Divider -->
      <div class="header-divider"></div>
      
      <!-- Subtitle -->
      <p class="ledger-subtitle">Property of A. Morgan <em>(and associates)</em></p>
      
      <!-- Music Links -->
      <nav class="music-links">
        <a href="https://open.spotify.com/playlist/6o0eJl3jfFDxdJgSTIF9nL?si=67eae1f0dea84362" target="_blank" rel="noopener">
          <i class="fa-brands fa-spotify"></i> Dust to Dust
        </a>
        <span class="link-divider">|</span>
        <a href="https://www.youtube.com/results?search_query=red+dead+redemption+2+ambience" target="_blank" rel="noopener">
          <i class="fa-solid fa-fire"></i> Campfire
        </a>
      </nav>
      
      <!-- Overall Progress Bar -->
      ${renderHeaderProgress()}
    </div>
  `;
}

/**
 * Update overall progress display
 * Re-exports the modular function for compatibility
 */
export { updateHeaderProgress as updateOverallProgress };
