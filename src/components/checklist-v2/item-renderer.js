/**
 * Checklist V2 - Item Renderer
 * Adapted from showcase-v2/item-renderer.js for full checklist usage
 * Features:
 * - Done icon with colored ring (section-based)
 * - Collapsible sub-items accordion
 * - Collapsible tip_detailed info panel
 * - Progress bars for sub-items
 * - Auto-complete parent when all sub-items done
 */

import { store } from '../../data/state.js';

// Section color mapping (matches sidebar-v2 theme system)
const SECTION_COLORS = {
  // Gold - Treasures, Exploration
  treasures: { color: '#eab308', name: 'gold' },
  explorer: { color: '#eab308', name: 'gold' },
  collectibles: { color: '#eab308', name: 'gold' },
  
  // Green - Quick start, Progress
  quickstart: { color: '#22c55e', name: 'green' },
  satchel: { color: '#22c55e', name: 'green' },
  camp: { color: '#22c55e', name: 'green' },
  
  // Red - Missable, Combat
  missable: { color: '#dc2626', name: 'red' },
  'legendary-animals': { color: '#dc2626', name: 'red' },
  hunter: { color: '#dc2626', name: 'red' },
  
  // Orange - Bounties
  bounties: { color: '#f97316', name: 'orange' },
  
  // Amber - Challenges
  bandit: { color: '#f59e0b', name: 'amber' },
  gambler: { color: '#f59e0b', name: 'amber' },
  herbalist: { color: '#f59e0b', name: 'amber' },
  horseman: { color: '#f59e0b', name: 'amber' },
  sharpshooter: { color: '#f59e0b', name: 'amber' },
  survivalist: { color: '#f59e0b', name: 'amber' },
  'weapons-expert': { color: '#f59e0b', name: 'amber' },
  
  // Blue - Strangers, Story
  strangers: { color: '#3b82f6', name: 'blue' },
  'companion-activities': { color: '#3b82f6', name: 'blue' },
  'camp-requests': { color: '#3b82f6', name: 'blue' },
  graves: { color: '#3b82f6', name: 'blue' },
  mysteries: { color: '#3b82f6', name: 'blue' }
};

// Default color for sections not in mapping
const DEFAULT_COLOR = { color: '#9ca3af', name: 'gray' };

/**
 * Get section color
 */
export function getSectionColor(sectionId) {
  // Handle cigarette card prefixes
  if (sectionId.startsWith('cig-')) {
    return { color: '#22c55e', name: 'green' };
  }
  return SECTION_COLORS[sectionId] || DEFAULT_COLOR;
}

/**
 * Render a single item card
 */
export function renderItemCard(item, sectionId) {
  const isCompleted = store.get(item.id);
  const hasSubItems = item.subItems?.length > 0;
  const hasDetailedTip = item.tip_detailed?.length > 0;
  const { color, name: colorName } = getSectionColor(sectionId);
  
  // Sub-item progress
  let subProgress = { completed: 0, total: 0, percent: 0 };
  if (hasSubItems) {
    subProgress.total = item.subItems.length;
    subProgress.completed = item.subItems.filter(sub => store.get(sub.id)).length;
    subProgress.percent = Math.round((subProgress.completed / subProgress.total) * 100);
  }
  
  return `
    <div class="checklist-card" data-item-id="${item.id}" data-section="${sectionId}">
      <div class="card-row">
        <!-- Done Icon -->
        <button class="done-icon ${isCompleted ? 'checked' : ''}" 
                data-id="${item.id}" 
                data-section="${sectionId}"
                style="--ring-color: ${color}">
          <span class="icon-inner">${isCompleted ? '✖' : ''}</span>
        </button>
        
        <!-- Content -->
        <div class="card-content">
          <div class="card-tags">
            ${renderTags(item)}
          </div>
          <div class="card-title ${isCompleted ? 'completed' : ''}">${item.text}</div>
          ${item.tip ? `<p class="card-tip"><i class="fa-solid fa-location-dot"></i> ${item.tip}</p>` : ''}
          ${item.narrative ? `<p class="card-narrative"><i class="fa-solid fa-quote-left"></i> ${item.narrative}</p>` : ''}
          ${hasSubItems ? renderProgressBar(subProgress, colorName) : ''}
        </div>
        
        <!-- Action Buttons -->
        <div class="card-actions">
          ${hasSubItems ? `
            <button class="action-btn sub-toggle" data-toggle-subs="${item.id}" title="Steps">
              <i class="fa-solid fa-list-check"></i>
            </button>
          ` : ''}
          ${hasDetailedTip ? `
            <button class="action-btn info-toggle" data-toggle-info="${item.id}" title="More Info">
              <i class="fa-solid fa-circle-info"></i>
            </button>
          ` : ''}
        </div>
      </div>
      
      <!-- Sub-Items Accordion -->
      ${hasSubItems ? `
        <div class="accordion-panel subs-panel" id="subs-${item.id}">
          ${renderSubItems(item.subItems, sectionId)}
        </div>
      ` : ''}
      
      <!-- Info Accordion (tip_detailed) -->
      ${hasDetailedTip ? `
        <div class="accordion-panel info-panel" id="info-${item.id}">
          <div class="detail-content">${formatMarkdown(item.tip_detailed)}</div>
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Render tags (priority, missable, chapter, region, rewards)
 */
function renderTags(item) {
  let tags = '';
  
  // Chapter first
  if (item.chapter) {
    tags += `<span class="tag tag-chapter"><i class="fa-solid fa-book"></i> CH ${item.chapter}</span>`;
  }
  
  // Region
  if (item.region) {
    tags += `<span class="tag tag-region"><i class="fa-solid fa-map-pin"></i> ${formatRegion(item.region)}</span>`;
  }
  
  // Process rewards - separate money from items
  const rewards = item.rewards || (item.reward ? [item.reward] : []);
  rewards.forEach(r => {
    if (isMoneyReward(r)) {
      tags += `<span class="tag tag-money"><i class="fa-solid fa-coins"></i> ${r}</span>`;
    } else {
      tags += `<span class="tag tag-item"><i class="fa-solid fa-trophy"></i> ${r}</span>`;
    }
  });
  
  // Priority badge
  if (item.priority) {
    tags += '<span class="tag tag-priority"><i class="fa-solid fa-exclamation"></i> Priority</span>';
  }
  
  // Missable warning
  if (item.missable) {
    tags += '<span class="tag tag-missable"><i class="fa-solid fa-triangle-exclamation"></i> Missable</span>';
  }
  
  return tags;
}

/**
 * Check if reward is money-related
 */
function isMoneyReward(reward) {
  const lower = reward.toLowerCase();
  return /^\$[\d,]+/.test(reward) || 
         /\$[\d,]+/.test(reward) || 
         lower.includes('gold bar') ||
         lower.includes('per bounty') ||
         lower.includes('money') ||
         /\d+\s*(gold|dollars?)/.test(lower);
}

/**
 * Render progress bar
 */
function renderProgressBar(progress, colorName) {
  return `
    <div class="progress-inline">
      <div class="progress-track">
        <div class="progress-fill progress-${colorName}" style="width: ${progress.percent}%"></div>
      </div>
      <span class="progress-label">${progress.completed}/${progress.total}</span>
    </div>
  `;
}

/**
 * Render sub-items with redesigned layout:
 * Row 1: Checkbox + Text + Info button (right aligned)
 * Row 2: Tip (left) + Reward tags (right) on same row
 */
function renderSubItems(subItems, sectionId) {
  const { color } = getSectionColor(sectionId);
  
  return `
    <div class="sub-items-list">
      ${subItems.map(sub => {
        const isChecked = store.get(sub.id);
        const rewards = sub.rewards || (sub.reward ? [sub.reward] : []);
        const hasTip = sub.tip?.length > 0;
        const hasDetailedTip = sub.tip_detailed?.length > 0;
        const hasRewards = rewards.length > 0;
        const hasMetaRow = hasTip || hasRewards;
        
        return `
          <div class="sub-item ${isChecked ? 'completed' : ''}" data-sub-id="${sub.id}">
            <div class="sub-item-header">
              <button class="done-icon small ${isChecked ? 'checked' : ''}" 
                      data-id="${sub.id}" 
                      data-section="${sectionId}"
                      data-parent-id="${sub.id.split('_')[0]}"
                      style="--ring-color: ${color}">
                <span class="icon-inner">${isChecked ? '✖' : ''}</span>
              </button>
              <span class="sub-text ${isChecked ? 'completed' : ''}">${sub.text}</span>
              ${hasDetailedTip ? `
                <button class="sub-info-toggle" data-toggle-sub-info="${sub.id}" title="More Info">
                  <i class="fa-solid fa-circle-info"></i>
                </button>
              ` : ''}
            </div>
            ${hasMetaRow ? `
              <div class="sub-meta-row">
                ${hasTip ? `
                  <div class="sub-tip">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${sub.tip}</span>
                  </div>
                ` : '<div class="sub-tip-spacer"></div>'}

                ${hasRewards ? `
                  <div class="sub-tags">
                    ${rewards.map(r => isMoneyReward(r) 
                      ? `<span class="tag tag-money"><i class="fa-solid fa-coins"></i> ${r}</span>`
                      : `<span class="tag tag-item"><i class="fa-solid fa-trophy"></i> ${r}</span>`
                    ).join('')}
                  </div>
                ` : ''}
              </div>
            ` : ''}
            ${hasDetailedTip ? `
              <div class="sub-info-panel" id="sub-info-${sub.id}">
                <div class="sub-detail-content">${formatMarkdown(sub.tip_detailed)}</div>
              </div>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}



/**
 * Format region name
 */
function formatRegion(region) {
  return region.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/**
 * Simple markdown formatter
 */
function formatMarkdown(md) {
  if (!md) return '';
  return md
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

/**
 * Update all progress bars in a container
 */
export function updateProgressBars(container) {
  container.querySelectorAll('.checklist-card').forEach(card => {
    const subs = card.querySelectorAll('.sub-item .done-icon.checked');
    const total = card.querySelectorAll('.sub-item').length;
    if (total === 0) return;
    
    const completed = subs.length;
    const percent = (completed / total) * 100;
    
    const fill = card.querySelector('.progress-fill');
    const label = card.querySelector('.progress-label');
    
    if (fill) fill.style.width = percent + '%';
    if (label) label.textContent = `${completed}/${total}`;
  });
}

/**
 * Check if all sub-items are done
 */
export function checkAllSubItemsDone(card) {
  const subItems = card.querySelectorAll('.sub-item');
  if (subItems.length === 0) return false;
  
  const checkedSubs = card.querySelectorAll('.sub-item .done-icon.checked');
  return checkedSubs.length === subItems.length;
}

/**
 * Auto-complete parent when all sub-items are done
 * @returns {boolean} Whether parent was auto-completed
 */
export function autoCompleteParent(card) {
  if (!checkAllSubItemsDone(card)) return false;
  
  const parentId = card.dataset.itemId;
  const parentIcon = card.querySelector('.card-row > .done-icon');
  const parentTitle = card.querySelector('.card-title');
  
  if (parentIcon && !parentIcon.classList.contains('checked')) {
    // Mark parent as done
    store.set(parentId, true);
    parentIcon.classList.add('checked');
    parentIcon.querySelector('.icon-inner').textContent = '✖';
    if (parentTitle) parentTitle.classList.add('completed');
    return true; // Parent was auto-completed
  }
  return false;
}
