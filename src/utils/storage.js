/**
 * Storage Utility Module
 * Handles localStorage persistence with prefixed keys
 * Includes auto-backup functionality
 */

const STORAGE_PREFIX = 'rdr_';
let backupTimeout = null;
const BACKUP_DEBOUNCE_MS = 5000; // Wait 5 seconds after last change

export const Storage = {
  /**
   * Save a value to localStorage
   */
  save(key, value) {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value));
      // Trigger debounced auto-backup
      this.scheduleAutoBackup();
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  },

  /**
   * Load a value from localStorage
   */
  load(key, fallback = null) {
    try {
      const item = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
      return item ? JSON.parse(item) : fallback;
    } catch (e) {
      console.warn('Storage load failed:', e);
      return fallback;
    }
  },

  /**
   * Remove a specific key
   */
  remove(key) {
    localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
  },

  /**
   * Clear all RDR-related storage
   */
  clearAll() {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
  },

  /**
   * Get all checkbox states
   */
  getCheckboxStates() {
    const states = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(`${STORAGE_PREFIX}check_`)) {
        const id = key.replace(`${STORAGE_PREFIX}check_`, '');
        states[id] = this.load(`check_${id}`, false);
      }
    }
    return states;
  },

  /**
   * Export all progress as JSON
   */
  exportProgress() {
    const checkboxes = this.getCheckboxStates();
    const completedCount = Object.values(checkboxes).filter(Boolean).length;
    const totalCount = Object.keys(checkboxes).length;
    
    const data = {
      version: 1,
      appName: "The Drifter's Ledger",
      exportDate: new Date().toISOString(),
      stats: {
        completed: completedCount,
        total: totalCount,
        percentage: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
      },
      preferences: {
        theme: this.load('theme_mode', 'light'),
        collapsedSections: this.load('collapsed_sections', []),
        navCollapsedCategories: this.load('nav_collapsed_categories', [])
      },
      checkboxes: checkboxes,
      journal: this.load('journal', '')
    };
    return JSON.stringify(data, null, 2);
  },

  /**
   * Import progress from JSON
   */
  importProgress(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.checkboxes) {
        Object.entries(data.checkboxes).forEach(([id, checked]) => {
          this.save(`check_${id}`, checked);
        });
      }
      if (data.journal) {
        this.save('journal', data.journal);
      }
      if (data.preferences) {
        if (data.preferences.collapsedSections) {
          this.save('collapsed_sections', data.preferences.collapsedSections);
        }
        if (data.preferences.theme) {
          this.save('theme_mode', data.preferences.theme);
        }
      }
      // Legacy support
      if (data.collapsedSections) {
        this.save('collapsed_sections', data.collapsedSections);
      }
      return true;
    } catch (e) {
      console.error('Import failed:', e);
      return false;
    }
  },

  /**
   * Schedule an auto-backup (debounced)
   */
  scheduleAutoBackup() {
    if (backupTimeout) {
      clearTimeout(backupTimeout);
    }
    backupTimeout = setTimeout(() => {
      this.saveToLocalBackup();
    }, BACKUP_DEBOUNCE_MS);
  },

  /**
   * Save backup to localStorage (for session recovery)
   */
  saveToLocalBackup() {
    const backupData = this.exportProgress();
    try {
      localStorage.setItem(`${STORAGE_PREFIX}auto_backup`, backupData);
      localStorage.setItem(`${STORAGE_PREFIX}last_backup`, new Date().toISOString());
      console.log('📦 Auto-backup saved');
    } catch (e) {
      console.warn('Auto-backup failed:', e);
    }
  },

  /**
   * Get last backup info
   */
  getLastBackupInfo() {
    return {
      data: this.load('auto_backup', null),
      timestamp: this.load('last_backup', null)
    };
  },

  /**
   * Download progress as JSON file
   */
  downloadBackup() {
    const data = this.exportProgress();
    const date = new Date().toISOString().split('T')[0];
    const filename = `drifters-ledger-${date}.json`;
    
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    
    URL.revokeObjectURL(url);
    console.log(`📥 Downloaded: ${filename}`);
  }
};
