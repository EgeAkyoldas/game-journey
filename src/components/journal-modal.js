/**
 * Journal Modal Component
 * Personal notes popup with auto-save
 */

import { $ } from '../utils/dom.js';
import { Storage } from '../utils/storage.js';

const JOURNAL_KEY = 'journal';

/**
 * Initialize Journal Modal
 * Creates FAB button and modal overlay
 */
export function initJournalModal() {
  // Create FAB button
  const fab = document.createElement('button');
  fab.className = 'journal-fab';
  fab.id = 'journal-fab';
  fab.title = 'Personal Journal';
  fab.innerHTML = '<i class="fa-solid fa-book"></i>';
  document.body.appendChild(fab);
  
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'journal-modal';
  modal.id = 'journal-modal';
  modal.innerHTML = renderModalContent();
  document.body.appendChild(modal);
  
  // Attach listeners
  attachJournalListeners();
  
  // Load saved content
  loadJournalContent();
}

/**
 * Render modal inner HTML
 */
function renderModalContent() {
  return `
    <div class="journal-modal-backdrop" data-close-modal></div>
    <div class="journal-modal-content">
      <div class="journal-modal-header">
        <h2 class="journal-modal-title">
          <i class="fa-solid fa-feather-pointed"></i>
          Personal Journal
        </h2>
        <button class="journal-modal-close" data-close-modal>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="journal-modal-body">
        <textarea 
          class="journal-textarea" 
          id="journal-textarea"
          placeholder="October 1899. Found a good spot near the river. The gang's spirits seem higher today..."
        ></textarea>
      </div>
      <div class="journal-modal-footer">
        <span class="journal-char-count" id="journal-char-count">0 characters</span>
        <span class="journal-save-status" id="journal-save-status">Saved</span>
      </div>
    </div>
  `;
}

/**
 * Attach event listeners
 */
function attachJournalListeners() {
  // FAB click - open modal
  $('#journal-fab')?.addEventListener('click', openModal);
  
  // Close modal on backdrop/button click
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-close-modal]')) {
      closeModal();
    }
  });
  
  // ESC to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen()) {
      closeModal();
    }
  });
  
  // Auto-save on input
  const textarea = $('#journal-textarea');
  if (textarea) {
    let saveTimeout;
    textarea.addEventListener('input', () => {
      updateCharCount();
      setSaveStatus('Saving...');
      
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        Storage.save(JOURNAL_KEY, textarea.value);
        setSaveStatus('Saved');
      }, 500);
    });
  }
}

/**
 * Open modal
 */
function openModal() {
  const modal = $('#journal-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Focus textarea
    setTimeout(() => {
      $('#journal-textarea')?.focus();
    }, 100);
  }
}

/**
 * Close modal
 */
function closeModal() {
  const modal = $('#journal-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/**
 * Check if modal is open
 */
function isModalOpen() {
  return $('#journal-modal')?.classList.contains('open');
}

/**
 * Load saved journal content
 */
function loadJournalContent() {
  const saved = Storage.load(JOURNAL_KEY, '');
  const textarea = $('#journal-textarea');
  if (textarea) {
    textarea.value = saved;
    updateCharCount();
  }
}

/**
 * Update character count
 */
function updateCharCount() {
  const textarea = $('#journal-textarea');
  const counter = $('#journal-char-count');
  if (textarea && counter) {
    const count = textarea.value.length;
    counter.textContent = `${count} character${count !== 1 ? 's' : ''}`;
  }
}

/**
 * Set save status text
 */
function setSaveStatus(status) {
  const el = $('#journal-save-status');
  if (el) {
    el.textContent = status;
    el.classList.toggle('saving', status === 'Saving...');
  }
}

/**
 * Get journal content (for export)
 */
export function getJournalContent() {
  return $('#journal-textarea')?.value || '';
}

/**
 * Set journal content (for import)
 */
export function setJournalContent(content) {
  const textarea = $('#journal-textarea');
  if (textarea) {
    textarea.value = content;
    Storage.save(JOURNAL_KEY, content);
    updateCharCount();
  }
}
