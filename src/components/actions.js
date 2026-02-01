/**
 * Actions Component
 * Burn/Reset buttons and export functionality
 */

import { $ } from '../utils/dom.js';
import { Storage } from '../utils/storage.js';
import { resetAllCheckboxes } from './checklist.js';

export function renderActions() {
  const container = $('#actions');
  if (!container) return;

  container.innerHTML = `
    <div class="actions-bar">
      <button class="action-btn action-btn--danger" id="btn-burn" title="Reset all progress">
        <i class="fa-solid fa-fire"></i>
        <span>Burn the Ledger</span>
      </button>
      <button class="action-btn action-btn--gold" id="btn-export" title="Export progress to file">
        <i class="fa-solid fa-file-export"></i>
        <span>Export</span>
      </button>
      <input type="file" id="import-file" accept=".json" style="display: none;">
      <button class="action-btn action-btn--gold" id="btn-import" title="Import progress from file">
        <i class="fa-solid fa-file-import"></i>
        <span>Import</span>
      </button>
    </div>
  `;

  // Attach event listeners
  $('#btn-burn')?.addEventListener('click', handleBurn);
  $('#btn-export')?.addEventListener('click', handleExport);
  $('#btn-import')?.addEventListener('click', () => $('#import-file')?.click());
  $('#import-file')?.addEventListener('change', handleImport);
}

/**
 * Handle burn/reset action
 */
function handleBurn() {
  const confirmed = confirm(
    "🔥 Burn the history?\n\nThis will reset ALL checkboxes and clear your journal.\n\nThis action cannot be undone."
  );
  
  if (confirmed) {
    Storage.clearAll();
    location.reload();
  }
}

/**
 * Handle export action
 */
function handleExport() {
  const data = Storage.exportProgress();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `drifters-ledger-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  
  URL.revokeObjectURL(url);
}

/**
 * Handle import action
 */
function handleImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const content = e.target?.result;
    if (typeof content === 'string') {
      const success = Storage.importProgress(content);
      if (success) {
        alert('✅ Progress imported successfully! Reloading...');
        location.reload();
      } else {
        alert('❌ Failed to import progress. Invalid file format.');
      }
    }
  };
  reader.readAsText(file);
  
  // Reset file input
  event.target.value = '';
}
