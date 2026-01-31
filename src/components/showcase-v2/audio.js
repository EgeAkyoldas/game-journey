/**
 * Showcase V2 - Audio Integration
 * Extended sound system with RDR-themed completion sounds
 * Color scheme matches audio categories for visual feedback
 */

// Sound categories with associated colors
export const AUDIO_CATEGORIES = {
  // Combat/hunting - red theme
  gun: {
    sections: ['legendary-animals', 'hunter', 'weapons', 'weapons-expert', 'bounties',
               'cig-gunslingers', 'sharpshooter', 'bandit'],
    color: '#dc2626',  // Red
    colorName: 'red',
    sound: '/gun.mp3'
  },
  
  // Exploration/story - green theme  
  done: {
    sections: ['strangers', 'treasures', 'collectibles', 'missable', 'companion-activities', 
               'camp-requests', 'talismans', 'graves', 'cig-stage', 'cig-travel', 'cig-fauna', 
               'cig-horses', 'cig-prominent', 'cig-flora', 'cig-beauty', 'cig-champions', 
               'cig-vistas', 'cig-artists', 'cig-inventions'],
    color: '#22c55e',  // Green
    colorName: 'green',
    sound: '/done.mp3'
  },
  
  // Progress/upgrades - gold theme
  done2: {
    sections: ['quickstart', 'satchel', 'camp', 'explorer', 'herbalist', 'horseman', 
               'survivalist', 'gambler', 'journal', 'trapper', 'unique-hats', 'pamphlets',
               'gang-hideouts', 'mysteries'],
    color: '#eab308',  // Gold
    colorName: 'gold',
    sound: '/done-2.mp3'
  }
};

// Pre-load audio
const sounds = {};
let completeSound = null;
let initialized = false;

/**
 * Initialize audio system
 */
export function initAudio() {
  if (initialized) return;
  
  Object.entries(AUDIO_CATEGORIES).forEach(([key, config]) => {
    sounds[key] = new Audio(config.sound);
    sounds[key].volume = 0.3;
    sounds[key].load();
  });
  
  // Special completion sound (when all sub-items done)
  completeSound = new Audio('/complete.mp3');
  completeSound.volume = 0.4;
  completeSound.load();
  
  initialized = true;
  console.log('🔊 Audio initialized with', Object.keys(sounds).length + 1, 'sounds');
}

/**
 * Get audio category for a section
 */
export function getAudioCategory(sectionId) {
  for (const [category, config] of Object.entries(AUDIO_CATEGORIES)) {
    if (config.sections.includes(sectionId)) {
      return category;
    }
  }
  return 'done2'; // Default
}

/**
 * Get color for a section (matches audio category)
 */
export function getSectionColor(sectionId) {
  const category = getAudioCategory(sectionId);
  return AUDIO_CATEGORIES[category].color;
}

/**
 * Get color name for CSS class
 */
export function getSectionColorName(sectionId) {
  const category = getAudioCategory(sectionId);
  return AUDIO_CATEGORIES[category].colorName;
}

/**
 * Play sound for a section
 */
export function playSound(sectionId) {
  if (!initialized) initAudio();
  
  const category = getAudioCategory(sectionId);
  const sound = sounds[category];
  
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }
}

/**
 * Play complete sound (when all sub-items done)
 */
export function playCompleteSound() {
  if (!initialized) initAudio();
  
  if (completeSound) {
    completeSound.currentTime = 0;
    completeSound.play().catch(() => {});
  }
}

/**
 * Set volume (0-1)
 */
export function setVolume(vol) {
  Object.values(sounds).forEach(s => {
    s.volume = Math.max(0, Math.min(1, vol));
  });
  if (completeSound) completeSound.volume = vol;
}
