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
 * Calculate overall progress across all sections.
 * Sums store.getSectionProgress(), so this total always equals the sum of the
 * per-section counts shown in the sidebar and the section headers.
 *
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
      const sectionProgress = store.getSectionProgress(section);
      completed += sectionProgress.completed;
      total += sectionProgress.total;
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
