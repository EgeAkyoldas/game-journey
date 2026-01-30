/**
 * Journal Component
 * Personal notes textarea with auto-save
 */

import { $ } from '../utils/dom.js';
import { Storage } from '../utils/storage.js';

const JOURNAL_KEY = 'journal';

export function initJournal() {
  const container = $('#journal-container');
  if (!container) return;

  container.innerHTML = `
    <div class="journal-section">
      <textarea 
        id="journal-input" 
        placeholder="October 1899. Found a good spot near the river. The gang's spirits seem higher today..."
      ></textarea>
    </div>
  `;

  const textarea = $('#journal-input');
  if (!textarea) return;

  // Load saved journal
  const savedJournal = Storage.load(JOURNAL_KEY, '');
  textarea.value = savedJournal;

  // Auto-save on input
  let saveTimeout;
  textarea.addEventListener('input', () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      Storage.save(JOURNAL_KEY, textarea.value);
    }, 500);
  });
}

/**
 * Get journal content
 */
export function getJournalContent() {
  const textarea = $('#journal-input');
  return textarea ? textarea.value : '';
}

/**
 * Set journal content
 */
export function setJournalContent(content) {
  const textarea = $('#journal-input');
  if (textarea) {
    textarea.value = content;
    Storage.save(JOURNAL_KEY, content);
  }
}
