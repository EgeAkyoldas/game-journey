/**
 * Interactive Map Component
 * RDR2 map with location markers using Leaflet
 */

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { $ } from '../utils/dom.js';
import { CHECKLIST_SECTIONS } from '../data/index.js';
import { Storage } from '../utils/storage.js';

let mapInstance = null;
let isMapOpen = false;

// RDR2 Map bounds (approximate game world coordinates)
const MAP_CONFIG = {
  // Using a custom RDR2 map tile or image overlay
  center: [0, 0],
  zoom: 2,
  minZoom: 1,
  maxZoom: 5,
  // Map image bounds
  imageBounds: [[-90, -180], [90, 180]]
};

// Location categories with colors
const LOCATION_COLORS = {
  treasures: '#f4b942',
  weapons: '#8b4513',
  strangers: '#6a5acd',
  'legendary-animals': '#228b22',
  collectibles: '#ff69b4',
  missable: '#dc143c',
  camp: '#d2691e',
  default: '#4a90d9'
};

// Custom marker icons
function createMarkerIcon(color, completed = false) {
  const size = completed ? 20 : 24;
  const opacity = completed ? 0.5 : 1;
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border: 2px solid #fff;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        opacity: ${opacity};
        ${completed ? 'filter: grayscale(50%);' : ''}
      "></div>
    `,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2]
  });
}

/**
 * Render the map FAB button
 */
export function renderMapButton() {
  const fabHTML = `
    <button class="map-fab" id="map-fab" title="Open Interactive Map">
      🗺️
    </button>
  `;
  
  const container = $('.container');
  if (container) {
    container.insertAdjacentHTML('beforeend', fabHTML);
    
    $('#map-fab')?.addEventListener('click', openMap);
  }
}

/**
 * Render map modal structure
 */
function renderMapModal() {
  const modalHTML = `
    <div class="map-modal" id="map-modal">
      <div class="map-header">
        <h2 class="map-title">🗺️ The Frontier</h2>
        <div class="map-controls">
          <button class="map-filter-btn active" data-filter="all">All</button>
          <button class="map-filter-btn" data-filter="treasures">💎 Treasures</button>
          <button class="map-filter-btn" data-filter="strangers">❓ Strangers</button>
          <button class="map-filter-btn" data-filter="legendary-animals">🦌 Animals</button>
          <button class="map-filter-btn" data-filter="uncompleted"> Remaining</button>
        </div>
        <button class="map-close" id="map-close">✕</button>
      </div>
      <div class="map-container" id="map-container"></div>
      <div class="map-legend" id="map-legend"></div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Attach close handler
  $('#map-close')?.addEventListener('click', closeMap);
  
  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMapOpen) {
      closeMap();
    }
  });
  
  // Filter buttons
  document.querySelectorAll('.map-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.map-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterMarkers(btn.dataset.filter);
    });
  });
}

/**
 * Open the map modal
 */
function openMap() {
  if (!$('#map-modal')) {
    renderMapModal();
  }
  
  const modal = $('#map-modal');
  modal?.classList.add('open');
  isMapOpen = true;
  document.body.style.overflow = 'hidden';
  
  // Initialize map if not already
  setTimeout(() => {
    if (!mapInstance) {
      initializeMap();
    } else {
      mapInstance.invalidateSize();
    }
  }, 100);
}

/**
 * Close the map modal
 */
function closeMap() {
  const modal = $('#map-modal');
  modal?.classList.remove('open');
  isMapOpen = false;
  document.body.style.overflow = '';
}

/**
 * Initialize Leaflet map
 */
function initializeMap() {
  const container = $('#map-container');
  if (!container) return;
  
  // Create map with simple CRS for image overlay
  mapInstance = L.map(container, {
    crs: L.CRS.Simple,
    minZoom: MAP_CONFIG.minZoom,
    maxZoom: MAP_CONFIG.maxZoom,
    zoomControl: true,
    attributionControl: false
  });
  
  // Use a placeholder map image (you can replace with actual RDR2 map)
  // For now using a styled background
  const bounds = MAP_CONFIG.imageBounds;
  
  // Add a styled tile layer or image
  // Option 1: Colored background styled as old map
  L.rectangle(bounds, {
    color: '#8b7355',
    fillColor: '#d4c4a8',
    fillOpacity: 1,
    weight: 2
  }).addTo(mapInstance);
  
  // Add grid lines for old map feel
  for (let lat = -80; lat <= 80; lat += 20) {
    L.polyline([[lat, -180], [lat, 180]], {
      color: '#b8a888',
      weight: 1,
      opacity: 0.5,
      dashArray: '5,5'
    }).addTo(mapInstance);
  }
  
  for (let lng = -180; lng <= 180; lng += 20) {
    L.polyline([[-90, lng], [90, lng]], {
      color: '#b8a888',
      weight: 1,
      opacity: 0.5,
      dashArray: '5,5'
    }).addTo(mapInstance);
  }
  
  // Set initial view
  mapInstance.fitBounds(bounds);
  mapInstance.setZoom(2);
  
  // Add location markers
  addLocationMarkers();
  
  // Render legend
  renderLegend();
}

/**
 * Add markers for all checklist locations
 */
function addLocationMarkers() {
  if (!mapInstance) return;
  
  // Generate pseudo-random positions for items based on their ID
  // In a real app, you'd have actual coordinates
  CHECKLIST_SECTIONS.forEach(section => {
    if (!section.items) return;
    
    const color = LOCATION_COLORS[section.id] || LOCATION_COLORS.default;
    
    section.items.forEach((item, index) => {
      // Generate position based on hash of item id
      const hash = hashCode(item.id);
      const lat = ((hash % 160) - 80) + (index % 10);
      const lng = (((hash >> 8) % 320) - 160) + (index % 15);
      
      // Check if completed
      const isCompleted = Storage.load(`check_${item.id}`, false);
      
      const marker = L.marker([lat, lng], {
        icon: createMarkerIcon(color, isCompleted)
      });
      
      // Add popup with item info
      const popupContent = `
        <div class="map-popup">
          <strong>${item.text}</strong>
          ${item.tip ? `<p>${item.tip}</p>` : ''}
          <span class="popup-category">${section.icon} ${section.title}</span>
          ${isCompleted ? '<span class="popup-completed">✓ Completed</span>' : ''}
        </div>
      `;
      
      marker.bindPopup(popupContent, {
        className: 'rdr-popup',
        maxWidth: 300
      });
      
      // Store metadata for filtering
      marker._rdrData = {
        sectionId: section.id,
        itemId: item.id,
        completed: isCompleted
      };
      
      marker.addTo(mapInstance);
    });
  });
}

/**
 * Filter markers by category
 */
function filterMarkers(filter) {
  if (!mapInstance) return;
  
  mapInstance.eachLayer(layer => {
    if (layer instanceof L.Marker && layer._rdrData) {
      const data = layer._rdrData;
      let show = true;
      
      if (filter === 'uncompleted') {
        show = !data.completed;
      } else if (filter !== 'all') {
        show = data.sectionId === filter;
      }
      
      if (show) {
        layer.setOpacity(1);
        layer.getElement()?.classList.remove('filtered-out');
      } else {
        layer.setOpacity(0.15);
        layer.getElement()?.classList.add('filtered-out');
      }
    }
  });
}

/**
 * Render map legend
 */
function renderLegend() {
  const legend = $('#map-legend');
  if (!legend) return;
  
  const categories = [
    { id: 'treasures', label: 'Treasures', icon: '💎' },
    { id: 'strangers', label: 'Strangers', icon: '❓' },
    { id: 'legendary-animals', label: 'Legendary Animals', icon: '🦌' },
    { id: 'collectibles', label: 'Collectibles', icon: '🌿' },
    { id: 'missable', label: 'Missable', icon: '⚠️' },
    { id: 'weapons', label: 'Weapons', icon: '🔫' }
  ];
  
  legend.innerHTML = categories.map(cat => `
    <div class="legend-item" data-category="${cat.id}">
      <span class="legend-color" style="background: ${LOCATION_COLORS[cat.id]}"></span>
      <span class="legend-icon">${cat.icon}</span>
      <span class="legend-label">${cat.label}</span>
    </div>
  `).join('');
}

/**
 * Simple hash function for generating pseudo-random positions
 */
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/**
 * Refresh map markers when checkbox state changes
 */
export function refreshMapMarkers() {
  if (mapInstance && isMapOpen) {
    // Clear existing markers and re-add
    mapInstance.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        mapInstance.removeLayer(layer);
      }
    });
    addLocationMarkers();
  }
}
