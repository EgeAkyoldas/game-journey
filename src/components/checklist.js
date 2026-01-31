/**
 * Checklist Component
 * Renders and manages checklist sections with persistence
 */

import { $, $$, toggleVisibility } from '../utils/dom.js';
import { Storage } from '../utils/storage.js';
import { playCheckSound } from '../utils/audio.js';
import { updateOverallProgress } from './header.js';
import { refreshNavStats } from './navigation.js';
import { getTotalItemCount } from '../data/index.js';

// State
let checklistData = [];

/**
 * Format reward tag with appropriate icon and styling
 * Money rewards: 💰 green, Item rewards: 🏆 gold
 */
function formatRewardTag(reward) {
  const isMoney = /^\$[\d,]+/.test(reward) || /\$[\d,]+/.test(reward) || reward.toLowerCase().includes('gold bar');
  
  if (isMoney) {
    return `<span class="reward-tag reward-money">💰 ${reward}</span>`;
  } else {
    return `<span class="reward-tag reward-item">🏆 ${reward}</span>`;
  }
}

/**
 * Format detailed tip with markdown-style inline formatting
 * Supports: **bold**, *italic*
 */
function formatDetailedTip(text) {
  if (!text) return '';
  
  return text
    // Bold: **text** -> <strong>text</strong>
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic: *text* -> <em>text</em>
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
}



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

  // Section-level reward badge (for cigarette cards, etc.)
  let sectionReward = '';
  if (section.reward) {
    sectionReward = `<span class="section-reward-tag">🏆 ${section.reward}</span>`;
  }

  // Section-level tip_detailed (shows below header when expanded)
  let sectionDetailedHtml = '';
  if (section.tip_detailed) {
    const isDetailExpanded = Storage.load(`section_detail_${section.id}`, false);
    const formattedDetail = formatDetailedTip(section.tip_detailed.trim());
    sectionDetailedHtml = `
      <div class="section-info-bar ${hiddenClass}">
        <button class="section-info-btn ${isDetailExpanded ? 'expanded' : ''}" data-section-detail="${section.id}">
          <span class="more-info-icon">${isDetailExpanded ? '▼' : '▶'}</span> Set Info
        </button>
        <div class="section-tip-detailed ${isDetailExpanded ? '' : 'hidden'}" id="section-detail-${section.id}">
          <div class="tip-detailed-content">${formattedDetail}</div>
        </div>
      </div>
    `;
  }

  return `
    <h2 class="section-header ${collapsedClass}" data-section="${section.id}">
      <span class="section-title-group">
        <span class="section-title-text">${section.icon || ''} ${section.title}</span>
        ${sectionReward}
      </span>
      <span class="progress-badge">${progress.completed}/${progress.total}</span>
    </h2>
    <div id="${section.id}" class="checklist-group ${hiddenClass}">
      ${sectionDetailedHtml}
      ${itemsHtml}
    </div>
  `;
}

/**
 * Render a single checklist item (with optional nested subItems)
 */
function renderItem(item, isChecked) {
  const checkedAttr = isChecked ? 'checked' : '';
  const completedClass = isChecked ? 'completed' : '';
  
  // Build tags HTML
  let tagsHtml = '';
  if (item.priority) {
    tagsHtml += '<span class="missable-tag">PRIORITY</span>';
  }
  if (item.missable) {
    tagsHtml += '<span class="missable-tag">MISSABLE</span>';
  }
  if (item.chapter && item.chapter !== 'epilogue') {
    tagsHtml += `<span class="chapter-tag">CH ${item.chapter}</span>`;
  }
  if (item.chapter === 'epilogue') {
    tagsHtml += '<span class="chapter-tag">EPILOGUE</span>';
  }
  
  // Support both single reward and rewards array
  if (item.rewards && item.rewards.length > 0) {
    tagsHtml += item.rewards.map(r => formatRewardTag(r)).join('');
  } else if (item.reward) {
    tagsHtml += formatRewardTag(item.reward);
  }

  const hasSubItems = item.subItems && item.subItems.length > 0;
  const isExpanded = hasSubItems ? Storage.load(`expanded_${item.id}`, false) : false;
  const isDetailExpanded = item.tip_detailed ? Storage.load(`detail_${item.id}`, false) : false;
  
  let subItemsHtml = '';
  if (hasSubItems) {
    const subProgress = getSubItemsProgress(item.subItems);
    const progressPercent = subProgress.total > 0 ? (subProgress.completed / subProgress.total) * 100 : 0;
    const isAllComplete = subProgress.completed === subProgress.total && subProgress.total > 0;
    
    subItemsHtml = `
      <div class="sub-items-container ${isExpanded ? '' : 'collapsed'} ${isAllComplete ? 'all-complete' : ''}" data-parent="${item.id}" data-total="${subProgress.total}">
        <div class="sub-items-header" data-toggle="${item.id}">
          <span class="sub-toggle-icon">${isExpanded ? '▼' : '▶'}</span>
          <span class="sub-progress">${subProgress.completed}/${subProgress.total} steps</span>
          <div class="sub-progress-bar">
            <div class="sub-progress-fill ${isAllComplete ? 'complete' : ''}" style="width: ${progressPercent}%"></div>
          </div>
        </div>
        <div class="sub-items-list ${isExpanded ? '' : 'hidden'}">
          ${item.subItems.map(subItem => renderSubItem(subItem)).join('')}
        </div>
      </div>
    `;
  }
  
  // More Info button (inline at end of row for items with tip_detailed)
  let moreInfoBtn = '';
  if (item.tip_detailed) {
    moreInfoBtn = `
      <button class="more-info-btn-inline ${isDetailExpanded ? 'expanded' : ''}" data-detail="${item.id}" title="More Info">
        ℹ️
      </button>
    `;
  }
  
  // Detailed content (below the item row)
  let detailedHtml = '';
  if (item.tip_detailed) {
    const formattedDetail = formatDetailedTip(item.tip_detailed.trim());
    detailedHtml = `
      <div class="tip-detailed ${isDetailExpanded ? '' : 'hidden'}" id="detail-${item.id}">
        <div class="tip-detailed-content">${formattedDetail}</div>
      </div>
    `;
  }

  return `
    <div class="item-wrapper">
      <div class="item-row">
        <label class="checklist-item ${hasSubItems ? 'has-subitems' : ''}">
          <input type="checkbox" id="${item.id}" ${checkedAttr}>
          <span class="item-text ${completedClass}">${item.text}</span>
        </label>
        <div class="item-tags">${tagsHtml}</div>
        ${moreInfoBtn}
      </div>
      ${item.tip ? `<span class="tip">${item.tip}</span>` : ''}
      ${detailedHtml}
      ${subItemsHtml}
    </div>
  `;
}

/**
 * Render a sub-item (nested checkbox)
 */
function renderSubItem(subItem) {
  const isChecked = Storage.load(`check_${subItem.id}`, false);
  const checkedAttr = isChecked ? 'checked' : '';
  const completedClass = isChecked ? 'completed' : '';
  const isDetailExpanded = subItem.tip_detailed ? Storage.load(`detail_${subItem.id}`, false) : false;
  
  // Build tags HTML
  let tagsHtml = '';
  if (subItem.missable) {
    tagsHtml += '<span class="missable-tag">MISSABLE</span>';
  }
  // Support both single reward and rewards array for sub-items too
  if (subItem.rewards && subItem.rewards.length > 0) {
    tagsHtml += subItem.rewards.map(r => formatRewardTag(r)).join('');
  } else if (subItem.reward) {
    tagsHtml += formatRewardTag(subItem.reward);
  }
  
  // More Info button (inline at end of row for sub-items with tip_detailed)
  let moreInfoBtn = '';
  if (subItem.tip_detailed) {
    moreInfoBtn = `
      <button class="more-info-btn-inline ${isDetailExpanded ? 'expanded' : ''}" data-detail="${subItem.id}" title="More Info">
        ℹ️
      </button>
    `;
  }
  
  // Detailed content (below the sub-item row)
  let detailedHtml = '';
  if (subItem.tip_detailed) {
    const formattedDetail = formatDetailedTip(subItem.tip_detailed.trim());
    detailedHtml = `
      <div class="tip-detailed sub-tip-detailed ${isDetailExpanded ? '' : 'hidden'}" id="detail-${subItem.id}">
        <div class="tip-detailed-content">${formattedDetail}</div>
      </div>
    `;
  }
  
  return `
    <div class="sub-item-wrapper">
      <div class="item-row">
        <label class="checklist-item sub-item">
          <input type="checkbox" id="${subItem.id}" ${checkedAttr}>
          <span class="item-text ${completedClass}">${subItem.text}</span>
        </label>
        <div class="item-tags">${tagsHtml}</div>
        ${moreInfoBtn}
      </div>
      ${subItem.tip ? `<span class="tip sub-tip">${subItem.tip}</span>` : ''}
      ${detailedHtml}
    </div>
  `;
}

/**
 * Get progress for subItems
 */
function getSubItemsProgress(subItems) {
  const total = subItems.length;
  const completed = subItems.filter(item => 
    Storage.load(`check_${item.id}`, false)
  ).length;
  return { completed, total };
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

  // SubItems toggle
  $$('.sub-items-header').forEach(header => {
    header.addEventListener('click', () => {
      const parentId = header.dataset.toggle;
      toggleSubItems(parentId, header);
    });
  });

  // More Info toggle (tip_detailed - cowboy storyteller narrative)
  $$('.more-info-btn, .more-info-btn-inline').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const itemId = btn.dataset.detail;
      toggleMoreInfo(itemId, btn);
    });
  });

  // Section Info toggle (section-level tip_detailed)
  $$('.section-info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const sectionId = btn.dataset.sectionDetail;
      toggleSectionInfo(sectionId, btn);
    });
  });
}

/**
 * Toggle subItems visibility
 */
function toggleSubItems(parentId, header) {
  const container = header.closest('.sub-items-container');
  if (!container) return;

  const list = container.querySelector('.sub-items-list');
  const icon = header.querySelector('.sub-toggle-icon');
  if (!list || !icon) return;

  const isHidden = list.classList.contains('hidden');
  
  list.classList.toggle('hidden', !isHidden);
  container.classList.toggle('collapsed', !isHidden);
  icon.textContent = isHidden ? '▼' : '▶';
  
  Storage.save(`expanded_${parentId}`, isHidden);
}

/**
 * Toggle More Info (tip_detailed) visibility
 * Shows the cowboy storyteller narrative for items
 */
function toggleMoreInfo(itemId, btn) {
  const detailDiv = $(`#detail-${itemId}`);
  const icon = btn.querySelector('.more-info-icon');
  if (!detailDiv) return;

  const isHidden = detailDiv.classList.contains('hidden');
  
  detailDiv.classList.toggle('hidden', !isHidden);
  btn.classList.toggle('expanded', isHidden);
  if (icon) {
    icon.textContent = isHidden ? '▼' : '▶';
  }
  
  Storage.save(`detail_${itemId}`, isHidden);
}

/**
 * Toggle Section Info (section-level tip_detailed) visibility
 */
function toggleSectionInfo(sectionId, btn) {
  const detailDiv = $(`#section-detail-${sectionId}`);
  const icon = btn.querySelector('.more-info-icon');
  if (!detailDiv) return;

  const isHidden = detailDiv.classList.contains('hidden');
  
  detailDiv.classList.toggle('hidden', !isHidden);
  btn.classList.toggle('expanded', isHidden);
  if (icon) {
    icon.textContent = isHidden ? '▼' : '▶';
  }
  
  Storage.save(`section_detail_${sectionId}`, isHidden);
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
  const isSubItem = checkbox.closest('.sub-item') !== null;
  
  // Save state
  Storage.save(`check_${id}`, isChecked);
  
  // Sync linked items (same ID in different categories)
  syncLinkedItems(id, isChecked, checkbox);
  
  // Update text styling
  const span = checkbox.nextElementSibling;
  if (span) {
    span.classList.toggle('completed', isChecked);
  }
  
  // Handle subItem specific logic
  if (isSubItem && isChecked) {
    handleSubItemComplete(checkbox);
  } else if (isChecked) {
    // Regular item check - play section sound
    const group = checkbox.closest('.checklist-group');
    const sectionId = group?.id || '';
    playCheckSound(sectionId);
  }
  
  // Update section progress badge
  updateSectionProgress(checkbox);
  
  // Update overall progress
  updateProgress();
}

/**
 * Sync linked items - same ID appearing in multiple categories
 */
function syncLinkedItems(id, isChecked, sourceCheckbox) {
  // Find all checkboxes with the same ID (shouldn't happen with proper IDs, but for linked content)
  const allWithSameId = document.querySelectorAll(`input[type="checkbox"][id="${id}"]`);
  
  allWithSameId.forEach(cb => {
    if (cb !== sourceCheckbox && cb.checked !== isChecked) {
      cb.checked = isChecked;
      const span = cb.nextElementSibling;
      if (span) {
        span.classList.toggle('completed', isChecked);
      }
      // Update that section's progress too
      updateSectionProgress(cb);
    }
  });
}

/**
 * Handle subItem completion - update progress bar and auto-complete parent
 */
function handleSubItemComplete(checkbox) {
  const container = checkbox.closest('.sub-items-container');
  if (!container) return;
  
  const parentId = container.dataset.parent;
  const list = container.querySelector('.sub-items-list');
  if (!list) return;
  
  // Count progress
  const allSubCheckboxes = list.querySelectorAll('input[type="checkbox"]');
  const total = allSubCheckboxes.length;
  const completed = Array.from(allSubCheckboxes).filter(cb => cb.checked).length;
  
  // Update progress text
  const progressText = container.querySelector('.sub-progress');
  if (progressText) {
    progressText.textContent = `${completed}/${total} steps`;
  }
  
  // Update progress bar
  const progressFill = container.querySelector('.sub-progress-fill');
  if (progressFill) {
    const percent = total > 0 ? (completed / total) * 100 : 0;
    progressFill.style.width = `${percent}%`;
    
    // Add complete class when all done
    if (completed === total) {
      progressFill.classList.add('complete');
    } else {
      progressFill.classList.remove('complete');
    }
  }
  
  // Check if ALL subItems are complete
  if (completed === total && total > 0) {
    // Play special completion sound (done2)
    import('../utils/audio.js').then(({ playCheckSound }) => {
      // Use special sound for subItems completion
      const sound = new Audio('/done-2.mp3');
      sound.volume = 0.4;
      sound.play().catch(() => {});
    });
    
    // Auto-check the parent item
    const parentCheckbox = document.getElementById(parentId);
    if (parentCheckbox && !parentCheckbox.checked) {
      parentCheckbox.checked = true;
      Storage.save(`check_${parentId}`, true);
      
      // Update parent styling
      const parentSpan = parentCheckbox.nextElementSibling;
      if (parentSpan) {
        parentSpan.classList.add('completed');
      }
      
      // Add all-complete class to container
      container.classList.add('all-complete');
    }
  } else {
    // Remove all-complete if unchecking
    container.classList.remove('all-complete');
    
    // Play regular check sound
    const group = checkbox.closest('.checklist-group');
    const sectionId = group?.id || '';
    playCheckSound(sectionId);
  }
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
