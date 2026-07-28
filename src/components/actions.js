/**
 * Progress Actions
 * Export / import / reset of a player's saved progress.
 *
 * The handlers live here; the Settings panel renders the buttons that call
 * them, so backup lives next to the other preferences instead of at the
 * bottom of an 886-item page where nobody ever scrolled to it.
 */

import { Storage } from '../utils/storage.js';
import { calculateOverallProgress } from './header-progress.js';

/**
 * Reset everything after an explicit confirmation
 */
export function handleBurn() {
  const confirmed = confirm(
    "🔥 Burn the ledger?\n\nThis resets ALL checkboxes and clears your journal.\n\nThis cannot be undone — export a backup first if you want to keep it."
  );

  if (confirmed) {
    Storage.clearAll();
    location.reload();
  }
}

/**
 * Download the current progress as a JSON save file
 */
export function handleExport() {
  const { completed, total } = calculateOverallProgress();
  const data = Storage.exportProgress({ completed, total });
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `drifters-ledger-${new Date().toISOString().split('T')[0]}.json`;
  link.click();

  URL.revokeObjectURL(url);
  return summarize(data);
}

/**
 * Restore progress from a save file chosen in a file input
 * @param {Event} event - change event from the file input
 * @param {(message: string, ok: boolean) => void} [report] - status callback
 */
export function handleImport(event, report) {
  const file = event.target.files?.[0];
  if (!file) return;

  const say = report || ((message, ok) => alert(`${ok ? '✅' : '❌'} ${message}`));

  const reader = new FileReader();

  reader.onerror = () => {
    say("Couldn't read that file.", false);
    event.target.value = '';
  };

  reader.onload = (e) => {
    const content = e.target?.result;
    event.target.value = '';

    if (typeof content !== 'string') {
      say("Couldn't read that file.", false);
      return;
    }

    // Reject anything that isn't one of our save files before overwriting
    // the player's current progress.
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      say('That file is not valid JSON.', false);
      return;
    }

    if (!parsed || typeof parsed !== 'object' || !parsed.checkboxes) {
      say("That doesn't look like a Drifter's Ledger save file.", false);
      return;
    }

    const incoming = Object.values(parsed.checkboxes).filter(Boolean).length;
    const current = Object.values(Storage.getCheckboxStates()).filter(Boolean).length;

    if (current > 0 && !confirm(
      `Import ${incoming} completed item${incoming === 1 ? '' : 's'}?\n\n` +
      `This merges into your current progress (${current} completed) and cannot be undone.`
    )) {
      return;
    }

    if (Storage.importProgress(content)) {
      say(`Imported ${incoming} completed item${incoming === 1 ? '' : 's'}. Reloading…`, true);
      setTimeout(() => location.reload(), 600);
    } else {
      say('Import failed — the file could not be read.', false);
    }
  };

  reader.readAsText(file);
}

/**
 * Short "N of M complete" line for a save payload
 */
function summarize(json) {
  try {
    const { stats } = JSON.parse(json);
    return stats ? `${stats.completed} of ${stats.total} saved` : 'Saved';
  } catch {
    return 'Saved';
  }
}
