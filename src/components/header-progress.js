/**
 * Header Progress Component
 * Displays overall completion percentage in header area
 */

import { store } from '../data/state.js';
import { CHECKLIST_SECTIONS } from '../data/index.js';

/**
 * Render progress bar HTML
 * @returns {string}
 */
export function renderHeaderProgress() {
  const { completed, total, percent } = calculateOverallProgress();
  
  return `
    <div class="header-progress">
      <div class="header-progress-bar">
        <div class="header-progress-fill" id="header-progress-fill" style="width: ${percent}%"></div>
      </div>
      <span class="header-progress-text" id="header-progress-text">${completed} / ${total} (${percent}%)</span>
    </div>
  `;
}

/**
 * Calculate overall progress across all sections
 * @returns {{ completed: number, total: number, percent: number }}
 */
export function calculateOverallProgress() {
  let completed = 0;
  let total = 0;
  
  try {
    // Defensive: check if CHECKLIST_SECTIONS exists and is array
    if (!CHECKLIST_SECTIONS || !Array.isArray(CHECKLIST_SECTIONS)) {
      return { completed: 0, total: 0, percent: 0 };
    }
    
    for (const section of CHECKLIST_SECTIONS) {
      // Defensive: check if section has items array
      if (!section?.items || !Array.isArray(section.items)) continue;
      
      for (const item of section.items) {
        if (!item?.id) continue;
        
        // Count main item
        total++;
        if (store.get(item.id)) completed++;
        
        // Count sub-items
        if (item.subItems && Array.isArray(item.subItems)) {
          for (const sub of item.subItems) {
            if (!sub?.id) continue;
            total++;
            if (store.get(sub.id)) completed++;
          }
        }
      }
    }
  } catch (err) {
    console.error('Error calculating progress:', err);
    return { completed: 0, total: 0, percent: 0 };
  }
  
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percent };
}

/**
 * Update the progress bar display
 */
export function updateHeaderProgress() {
  const { completed, total, percent } = calculateOverallProgress();
  
  const fill = document.getElementById('header-progress-fill');
  const text = document.getElementById('header-progress-text');
  
  if (fill) {
    fill.style.width = `${percent}%`;
  }
  
  if (text) {
    text.textContent = `${completed} / ${total} (${percent}%)`;
  }
}
