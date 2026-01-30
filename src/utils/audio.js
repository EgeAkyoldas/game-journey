/**
 * Audio Utility
 * Category-based sound effects for checkbox interactions
 */

// Sound categories
const SOUND_CATEGORIES = {
  // Hunting/killing related sections use gun sound
  gun: ['legendary-animals', 'hunter', 'weapons', 'weapons-expert', 'bounties'],
  
  // Stranger missions, treasures, collectibles, companion activities use done sound
  done: ['strangers', 'treasures', 'collectibles', 'missable', 'companion-activities', 
         'camp-requests', 'talismans', 'graves',
         'cig-gunslingers', 'cig-stage', 'cig-travel', 'cig-fauna', 'cig-horses', 
         'cig-fight', 'cig-aquatic', 'cig-views', 'cig-engineering', 'cig-prominent', 
         'cig-baseball', 'cig-sports'],
  
  // Everything else uses done2 sound
  done2: ['quickstart', 'satchel', 'camp', 'bandit', 'explorer', 
          'herbalist', 'sharpshooter', 'horseman', 'survivalist', 'gambler', 'journal']
};

// Pre-load audio files
const sounds = {
  gun: new Audio('/gun.mp3'),
  done: new Audio('/done.mp3'),
  done2: new Audio('/done-2.mp3')
};

// Pre-load to avoid delay
Object.values(sounds).forEach(audio => {
  audio.volume = 0.3;
  audio.load();
});

/**
 * Get the appropriate sound type for a section
 * @param {string} sectionId - The section ID
 * @returns {string} Sound type: 'gun', 'done', or 'done2'
 */
function getSoundType(sectionId) {
  if (SOUND_CATEGORIES.gun.includes(sectionId)) return 'gun';
  if (SOUND_CATEGORIES.done.includes(sectionId)) return 'done';
  return 'done2';
}

/**
 * Play the appropriate sound for a section
 * @param {string} sectionId - The section ID to determine sound type
 */
export function playCheckSound(sectionId = '') {
  const soundType = getSoundType(sectionId);
  const sound = sounds[soundType];
  
  // Reset and play
  sound.currentTime = 0;
  sound.play().catch(() => {
    // Ignore autoplay errors - user hasn't interacted yet
  });
}

/**
 * Play gun sound (legacy function for backward compatibility)
 */
export function playGunSound() {
  playCheckSound('legendary-animals');
}

/**
 * Set volume for all sounds
 * @param {number} vol - Volume 0-1
 */
export function setSoundVolume(vol) {
  Object.values(sounds).forEach(audio => {
    audio.volume = Math.max(0, Math.min(1, vol));
  });
}
