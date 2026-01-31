/**
 * Showcase V2 - Item Renderer
 * Renders checklist items with:
 * - Done icon (X with colored ring)
 * - Collapsible sub-items (separate accordion)
 * - Collapsible tip_detailed (separate info accordion)
 * - Progress bars
 * - Audio integration
 * - Auto-complete parent when all sub-items done
 */

import { store } from '../../data/state.js';
import { getSectionColor, getSectionColorName, playSound, playCompleteSound } from './audio.js';

/**
 * Render a single item card
 */
export function renderItemCard(item, sectionId) {
  const isCompleted = store.get(item.id);
  const hasSubItems = item.subItems?.length > 0;
  const hasDetailedTip = item.tip_detailed?.length > 0;
  const colorName = getSectionColorName(sectionId);
  const color = getSectionColor(sectionId);
  
  // Sub-item progress
  let subProgress = { completed: 0, total: 0, percent: 0 };
  if (hasSubItems) {
    subProgress.total = item.subItems.length;
    subProgress.completed = item.subItems.filter(sub => store.get(sub.id)).length;
    subProgress.percent = Math.round((subProgress.completed / subProgress.total) * 100);
  }
  
  return `
    <div class="showcase-card" data-item-id="${item.id}" data-section="${sectionId}">
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
 * Money rewards separate from item rewards
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
 * Render sub-items
 */
function renderSubItems(subItems, sectionId) {
  const color = getSectionColor(sectionId);
  
  return `
    <div class="sub-items-list">
      ${subItems.map(sub => {
        const isChecked = store.get(sub.id);
        const rewards = sub.rewards || (sub.reward ? [sub.reward] : []);
        
        return `
          <div class="sub-item">
            <button class="done-icon small ${isChecked ? 'checked' : ''}" 
                    data-id="${sub.id}" 
                    data-section="${sectionId}"
                    style="--ring-color: ${color}">
              <span class="icon-inner">${isChecked ? '✖' : ''}</span>
            </button>
            <span class="sub-text ${isChecked ? 'completed' : ''}">${sub.text}</span>
            <div class="sub-tags">
              ${rewards.map(r => isMoneyReward(r) 
                ? `<span class="tag tag-money small"><i class="fa-solid fa-coins"></i> ${r}</span>`
                : `<span class="tag tag-item small"><i class="fa-solid fa-trophy"></i> ${r}</span>`
              ).join('')}
            </div>
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
 * Attach event listeners to showcase cards
 */
export function attachCardListeners(container) {
  // Done icon clicks
  container.querySelectorAll('.done-icon').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      const sectionId = btn.dataset.section;
      const isSubItem = btn.closest('.sub-item') !== null;
      
      // Toggle state
      const newState = store.toggle(id);
      
      // Update UI
      btn.classList.toggle('checked', newState);
      btn.querySelector('.icon-inner').textContent = newState ? '✖' : '';
      
      // Update title
      const card = btn.closest('.showcase-card') || btn.closest('.sub-item');
      const title = card?.querySelector('.card-title') || card?.querySelector('.sub-text');
      if (title) title.classList.toggle('completed', newState);
      
      // If sub-item was checked, check if all sub-items are done
      if (isSubItem && newState) {
        const parentCard = btn.closest('.showcase-card');
        if (parentCard) {
          checkAutoCompleteParent(parentCard, sectionId);
        }
      }
      
      // Play regular sound (not if auto-complete played complete.mp3)
      if (newState && !isSubItem) {
        playSound(sectionId);
      } else if (newState && isSubItem) {
        // Check if all done BEFORE playing regular sound
        const parentCard = btn.closest('.showcase-card');
        const allSubsDone = parentCard && checkAllSubItemsDone(parentCard);
        if (!allSubsDone) {
          playSound(sectionId);
        }
      }
      
      // Update progress bars
      updateAllProgress(container);
    });
  });
  
  // Sub-items toggle (separate from info toggle)
  container.querySelectorAll('.sub-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.dataset.toggleSubs;
      const panel = document.getElementById(`subs-${itemId}`);
      if (panel) {
        panel.classList.toggle('open');
        btn.classList.toggle('active');
      }
    });
  });
  
  // Info toggle (tip_detailed - separate from sub-items)
  container.querySelectorAll('.info-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.dataset.toggleInfo;
      const panel = document.getElementById(`info-${itemId}`);
      if (panel) {
        panel.classList.toggle('open');
        btn.classList.toggle('active');
      }
    });
  });
}

/**
 * Check if all sub-items are done (helper)
 */
function checkAllSubItemsDone(card) {
  const subItems = card.querySelectorAll('.sub-item');
  if (subItems.length === 0) return false;
  
  const checkedSubs = card.querySelectorAll('.sub-item .done-icon.checked');
  return checkedSubs.length === subItems.length;
}

/**
 * Auto-complete parent when all sub-items are done
 */
function checkAutoCompleteParent(card, sectionId) {
  const subItems = card.querySelectorAll('.sub-item');
  if (subItems.length === 0) return;
  
  const checkedSubs = card.querySelectorAll('.sub-item .done-icon.checked');
  
  if (checkedSubs.length === subItems.length) {
    // All sub-items done! Auto-complete parent
    const parentId = card.dataset.itemId;
    const parentIcon = card.querySelector('.card-row > .done-icon');
    const parentTitle = card.querySelector('.card-title');
    
    if (parentIcon && !parentIcon.classList.contains('checked')) {
      // Mark parent as done
      store.set(parentId, true);
      parentIcon.classList.add('checked');
      parentIcon.querySelector('.icon-inner').textContent = '✖';
      if (parentTitle) parentTitle.classList.add('completed');
      
      // Play complete sound! 🎉
      playCompleteSound();
    }
  }
}

/**
 * Update all progress bars in container
 */
function updateAllProgress(container) {
  container.querySelectorAll('.showcase-card').forEach(card => {
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

