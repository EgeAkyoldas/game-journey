/**
 * Showcase V2 - Barrel Exports
 */

export { 
  initShowcase, 
  refreshShowcase,
  AUDIO_CATEGORIES 
} from './showcase.js';

export { 
  renderItemCard, 
  attachCardListeners 
} from './item-renderer.js';

export { 
  initAudio, 
  playSound,
  playCompleteSound,
  getSectionColor, 
  getSectionColorName,
  getAudioCategory,
  setVolume 
} from './audio.js';
