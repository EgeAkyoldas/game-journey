/**
 * Centralized State Store
 * Reactive state management with pub/sub pattern for checklist data
 */

const STORAGE_PREFIX = 'rdr_';

// Internal state
const state = {
  checked: {},      // { itemId: boolean }
  listeners: new Set()
};

/**
 * State Store - Single source of truth for checkbox states
 */
export const store = {
  /**
   * Initialize store from localStorage
   */
  init() {
    // Load all existing checkbox states from localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(`${STORAGE_PREFIX}check_`)) {
        const id = key.replace(`${STORAGE_PREFIX}check_`, '');
        try {
          state.checked[id] = JSON.parse(localStorage.getItem(key)) || false;
        } catch {
          state.checked[id] = false;
        }
      }
    }
    console.log(`📦 State initialized: ${Object.keys(state.checked).length} items loaded`);
  },

  /**
   * Get item checked state
   * @param {string} id - Item ID
   * @returns {boolean}
   */
  get(id) {
    return state.checked[id] || false;
  },

  /**
   * Set item checked state
   * @param {string} id - Item ID
   * @param {boolean} value - Checked state
   */
  set(id, value) {
    const oldValue = state.checked[id];
    state.checked[id] = value;
    
    // Persist to localStorage
    try {
      localStorage.setItem(`${STORAGE_PREFIX}check_${id}`, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
    
    // Notify listeners only if value changed
    if (oldValue !== value) {
      this._notifyListeners({ id, value, type: 'change' });
    }
  },

  /**
   * Toggle item checked state
   * @param {string} id - Item ID
   * @returns {boolean} New state
   */
  toggle(id) {
    const newValue = !this.get(id);
    this.set(id, newValue);
    return newValue;
  },

  /**
   * Subscribe to state changes
   * @param {Function} fn - Callback function
   * @returns {Function} Unsubscribe function
   */
  subscribe(fn) {
    state.listeners.add(fn);
    return () => state.listeners.delete(fn);
  },

  /**
   * Notify all listeners
   * @private
   */
  _notifyListeners(event) {
    state.listeners.forEach(fn => {
      try {
        fn(event);
      } catch (e) {
        console.warn('Listener error:', e);
      }
    });
  },

  /**
   * Get overall progress
   * @param {Array} sections - All checklist sections
   * @returns {{ completed: number, total: number, percentage: number }}
   */
  getProgress(sections) {
    let total = 0;
    let completed = 0;
    
    sections.forEach(section => {
      if (section.isJournal || !section.items) return;
      section.items.forEach(item => {
        total++;
        if (this.get(item.id)) completed++;
      });
    });
    
    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  },

  /**
   * Get progress for a specific section
   * @param {Object} section - Section object with items array
   * @returns {{ completed: number, total: number }}
   */
  getSectionProgress(section) {
    if (!section.items) return { completed: 0, total: 0 };
    
    const total = section.items.length;
    const completed = section.items.filter(item => this.get(item.id)).length;
    
    return { completed, total };
  },

  /**
   * Reset all checked states
   */
  reset() {
    Object.keys(state.checked).forEach(id => {
      this.set(id, false);
    });
  },

  /**
   * Get all checked item IDs
   * @returns {string[]}
   */
  getCheckedIds() {
    return Object.entries(state.checked)
      .filter(([, checked]) => checked)
      .map(([id]) => id);
  },

  /**
   * Bulk set from imported data
   * @param {Object} checkboxData - { itemId: boolean }
   */
  bulkSet(checkboxData) {
    Object.entries(checkboxData).forEach(([id, value]) => {
      this.set(id, value);
    });
  }
};
