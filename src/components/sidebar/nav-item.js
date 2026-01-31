/**
 * Navigation Item Component
 * Renders individual checklist items with category-specific styling
 */

/**
 * Create a checklist item HTML
 * @param {Object} item - Item data
 * @param {string} category - Category ID for styling
 * @returns {string} HTML string
 */
export function renderNavItem(item, category) {
  const categoryClass = getCategoryClass(category);
  const tags = renderTags(item);
  
  return `
    <div class="nav-item ${categoryClass}" data-item-id="${item.id}">
      <div class="nav-item-row">
        <input 
          type="checkbox" 
          class="rdr-checkbox checkbox-${category}" 
          data-checkbox-id="${item.id}"
        >
        <div class="nav-item-content">
          <span class="nav-item-title">${item.name}</span>
          ${tags}
        </div>
        ${item.tip ? `<button class="info-btn" data-accordion-toggle><i class="fa-solid fa-info"></i></button>` : ''}
      </div>
      ${item.tip ? `<div class="accordion-content">${item.tip}</div>` : ''}
    </div>
  `;
}

/**
 * Get the CSS class for a category
 */
function getCategoryClass(category) {
  const mapping = {
    bounties: 'wood-bounty',
    treasures: 'wood-treasure',
    'cigarette-cards': 'wood-cards',
    challenges: 'wood-challenge',
    strangers: 'wood-stranger',
    camp: 'wood-camp',
    quickstart: 'wood-quickstart'
  };
  return mapping[category] || 'wood-base';
}

/**
 * Render item tags
 */
function renderTags(item) {
  const tags = [];
  
  if (item.isMissable) {
    tags.push(`<span class="tag-base tag-missable"><i class="fa-solid fa-exclamation-triangle"></i> Missable</span>`);
  }
  
  if (item.chapter) {
    tags.push(`<span class="tag-base tag-chapter"><i class="fa-solid fa-book"></i> CH ${item.chapter}</span>`);
  }
  
  if (item.reward) {
    tags.push(`<span class="tag-base tag-reward"><i class="fa-solid fa-coins"></i> ${item.reward}</span>`);
  }
  
  if (item.location) {
    tags.push(`<span class="tag-base tag-location"><i class="fa-solid fa-location-dot"></i> ${item.location}</span>`);
  }
  
  return tags.length ? `<div class="nav-item-tags">${tags.join('')}</div>` : '';
}

/**
 * Render sub-items for a parent item
 */
export function renderSubItems(subItems, category) {
  if (!subItems || !subItems.length) return '';
  
  return `
    <div class="sub-items-container">
      ${subItems.map((sub, i) => `
        <div class="sub-item">
          <input type="checkbox" class="rdr-checkbox sub-checkbox checkbox-${category}" data-sub-id="${i}">
          <span class="sub-item-text">${sub}</span>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Render progress bar for sub-items
 */
export function renderProgressBar(current, total, category) {
  const percent = total > 0 ? (current / total) * 100 : 0;
  
  return `
    <div class="progress-container progress-${category}">
      <div class="progress-bar" style="width: ${percent}%"></div>
      <span class="progress-text">${current}/${total}</span>
    </div>
  `;
}
