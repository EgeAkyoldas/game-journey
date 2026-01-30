/**
 * Checklist Component
 * Renders and manages checklist sections with persistence
 */

import { $, $$, toggleVisibility } from '../utils/dom.js';
import { Storage } from '../utils/storage.js';
import { playCheckSound } from '../utils/audio.js';
import { updateOverallProgress } from './header.js';
import { refreshNavStats } from './navigation.js';
import { getTotalItemCount } from '../data/checklist-data.js';

// State
let checklistData = [];

/**
 * Render all checklist sections
 */
export function renderChecklist(sections) {
  checklistData = sections;
  const container = $('#checklist');
  if (!container) return;

  const collapsedSections = Storage.load('collapsed_sections', []);

  let html = '';
  
  sections.forEach(section => {
    if (section.isJournal) return; // Skip journal, handled separately
    
    const isCollapsed = collapsedSections.includes(section.id);
    const sectionProgress = getSectionProgress(section);
    
    html += renderSection(section, isCollapsed, sectionProgress);
  });

  container.innerHTML = html;

  // Attach event listeners
  attachEventListeners();
  
  // Initial progress update
  updateProgress();
}

/**
 * Render a single section
 */
function renderSection(section, isCollapsed, progress) {
  const collapsedClass = isCollapsed ? 'collapsed' : '';
  const hiddenClass = section.defaultOpen && !isCollapsed ? '' : (isCollapsed ? 'hidden' : '');
  
  let itemsHtml = '';
  
  if (section.items) {
    section.items.forEach(item => {
      const isChecked = Storage.load(`check_${item.id}`, false);
      itemsHtml += renderItem(item, isChecked);
    });
  }

  return `
    <h2 class="section-header ${collapsedClass}" data-section="${section.id}">
      <span>${section.icon || ''} ${section.title}</span>
      <span class="progress-badge">${progress.completed}/${progress.total}</span>
    </h2>
    <div id="${section.id}" class="checklist-group ${hiddenClass}">
      ${itemsHtml}
    </div>
  `;
}

/**
 * Render a single checklist item
 */
function renderItem(item, isChecked) {
  const checkedAttr = isChecked ? 'checked' : '';
  const completedClass = isChecked ? 'completed' : '';
  
  let tags = '';
  if (item.missable) {
    tags += '<span class="missable-tag">MISSABLE</span>';
  }
  if (item.chapter && item.chapter !== 'epilogue') {
    tags += `<span class="chapter-tag">CH ${item.chapter}</span>`;
  }
  if (item.chapter === 'epilogue') {
    tags += '<span class="chapter-tag">EPILOGUE</span>';
  }
  if (item.priority) {
    tags = '<span class="missable-tag">PRIORITY</span>' + tags;
  }

  return `
    <label class="checklist-item">
      <input type="checkbox" id="${item.id}" ${checkedAttr}>
      <span class="item-text ${completedClass}">${item.text}${tags}</span>
    </label>
    ${item.tip ? `<span class="tip">${item.tip}</span>` : ''}
  `;
}

/**
 * Get progress for a section
 */
function getSectionProgress(section) {
  if (!section.items) return { completed: 0, total: 0 };
  
  const total = section.items.length;
  const completed = section.items.filter(item => 
    Storage.load(`check_${item.id}`, false)
  ).length;
  
  return { completed, total };
}

/**
 * Attach event listeners
 */
function attachEventListeners() {
  // Section toggle
  $$('.section-header').forEach(header => {
    header.addEventListener('click', () => {
      const sectionId = header.dataset.section;
      toggleSection(sectionId, header);
    });
  });

  // Checkbox changes
  $$('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      handleCheckboxChange(checkbox);
    });
  });
}

/**
 * Toggle section visibility
 */
function toggleSection(sectionId, header) {
  const section = $(`#${sectionId}`);
  if (!section) return;

  const isHidden = section.classList.contains('hidden');
  
  // Toggle visibility
  toggleVisibility(section, isHidden);
  
  // Toggle header arrow
  header.classList.toggle('collapsed', !isHidden);
  
  // Save collapsed state
  let collapsedSections = Storage.load('collapsed_sections', []);
  
  if (isHidden) {
    // Opening - remove from collapsed list
    collapsedSections = collapsedSections.filter(id => id !== sectionId);
  } else {
    // Closing - add to collapsed list
    if (!collapsedSections.includes(sectionId)) {
      collapsedSections.push(sectionId);
    }
  }
  
  Storage.save('collapsed_sections', collapsedSections);
}

/**
 * Handle checkbox change
 */
function handleCheckboxChange(checkbox) {
  const id = checkbox.id;
  const isChecked = checkbox.checked;
  
  // Play appropriate sound when CHECKING (completing) an item
  if (isChecked) {
    // Get section ID from parent checklist-group
    const group = checkbox.closest('.checklist-group');
    const sectionId = group?.id || '';
    playCheckSound(sectionId);
  }
  
  // Save state
  Storage.save(`check_${id}`, isChecked);
  
  // Update text styling
  const span = checkbox.nextElementSibling;
  if (span) {
    span.classList.toggle('completed', isChecked);
  }
  
  // Update section progress badge
  updateSectionProgress(checkbox);
  
  // Update overall progress
  updateProgress();
}

/**
 * Update section progress badge
 */
function updateSectionProgress(checkbox) {
  const group = checkbox.closest('.checklist-group');
  if (!group) return;
  
  const header = group.previousElementSibling;
  if (!header) return;
  
  const badge = header.querySelector('.progress-badge');
  if (!badge) return;
  
  const checkboxes = group.querySelectorAll('input[type="checkbox"]');
  const total = checkboxes.length;
  const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
  
  badge.textContent = `${completed}/${total}`;
}

/**
 * Update overall progress
 */
function updateProgress() {
  const allCheckboxes = $$('input[type="checkbox"]');
  const total = allCheckboxes.length;
  const completed = Array.from(allCheckboxes).filter(cb => cb.checked).length;
  
  updateOverallProgress(completed, total);
  
  // Also update nav stats
  try {
    refreshNavStats();
  } catch (e) {
    // Nav may not be initialized yet
  }
}

/**
 * Get all checked item IDs
 */
export function getCheckedItems() {
  return Array.from($$('input[type="checkbox"]:checked')).map(cb => cb.id);
}

/**
 * Reset all checkboxes
 */
export function resetAllCheckboxes() {
  $$('input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
    Storage.save(`check_${cb.id}`, false);
    const span = cb.nextElementSibling;
    if (span) span.classList.remove('completed');
  });
  
  // Reset progress badges
  $$('.progress-badge').forEach(badge => {
    const [, total] = badge.textContent.split('/');
    badge.textContent = `0/${total}`;
  });
  
  updateProgress();
}
