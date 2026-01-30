/**
 * Header Component
 * Renders title, stamp, and links
 */

import { $, createElement } from '../utils/dom.js';

export function renderHeader() {
  const container = $('#header');
  if (!container) return;

  container.innerHTML = `
    <div class="stamp">WANTED<br>DEAD OR ALIVE</div>
    
    <h1 class="title-main">The Drifter's Ledger</h1>
    <p class="subtitle">Property of A. Morgan (and associates)</p>
    
    <div class="playlist-links">
      <a href="https://open.spotify.com/search/dust%20to%20dust%20red%20dead" target="_blank" rel="noopener">
        ♫ Dust to Dust Playlist
      </a>
      |
      <a href="https://www.youtube.com/results?search_query=red+dead+redemption+2+ambience" target="_blank" rel="noopener">
        🔥 Campfire Sounds
      </a>
      |
      <a href="https://www.youtube.com/watch?v=AUXGW6sWYDY" target="_blank" rel="noopener">
        🎶 Unshaken
      </a>
    </div>
    
    <div id="overall-progress"></div>
  `;
}

/**
 * Update overall progress display
 */
export function updateOverallProgress(completed, total) {
  const container = $('#overall-progress');
  if (!container) return;

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  container.innerHTML = `
    <p class="progress-text">${completed} / ${total} completed (${percentage}%)</p>
    <div class="progress-container">
      <div class="progress-bar" style="width: ${percentage}%"></div>
    </div>
  `;
}
