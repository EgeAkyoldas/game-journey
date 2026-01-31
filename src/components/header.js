/**
 * Header Component - V2 Redesign
 * Western ledger style with WANTED stamp
 */

import { $, createElement } from '../utils/dom.js';

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
        <a href="https://open.spotify.com/search/dust%20to%20dust%20red%20dead" target="_blank" rel="noopener">
          <i class="fa-solid fa-music"></i> Dust to Dust
        </a>
        <span class="link-divider">|</span>
        <a href="https://www.youtube.com/results?search_query=red+dead+redemption+2+ambience" target="_blank" rel="noopener">
          <i class="fa-solid fa-fire"></i> Campfire
        </a>
        <span class="link-divider">|</span>
        <a href="https://www.youtube.com/watch?v=AUXGW6sWYDY" target="_blank" rel="noopener">
          <i class="fa-solid fa-guitar"></i> Unshaken
        </a>
      </nav>
    </div>
  `;
}

/**
 * Update overall progress display (kept for compatibility)
 */
export function updateOverallProgress(completed, total) {
  // Removed from header - progress now shows in sidebar
}

