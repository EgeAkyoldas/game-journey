/**
 * Audio Utility
 * Gun sound effects for checkbox interactions
 */

// Pre-load audio files
const gunSounds = [
  new Audio('/gun1.mp3'),
  new Audio('/gun2.mp3')
];

// Pre-load to avoid delay
gunSounds.forEach(audio => {
  audio.volume = 0.3;
  audio.load();
});

/**
 * Play a random gun sound
 */
export function playGunSound() {
  const randomIndex = Math.floor(Math.random() * gunSounds.length);
  const sound = gunSounds[randomIndex];
  
  // Reset and play
  sound.currentTime = 0;
  sound.play().catch(() => {
    // Ignore autoplay errors - user hasn't interacted yet
  });
}

/**
 * Set volume for gun sounds
 * @param {number} vol - Volume 0-1
 */
export function setGunVolume(vol) {
  gunSounds.forEach(audio => {
    audio.volume = Math.max(0, Math.min(1, vol));
  });
}
