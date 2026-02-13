/**
 * Cigarette Cards Index
 * Combines all 12 cigarette card sets
 * Total: 144 cards across 12 sets
 */

// Export individual sets
export { gunslingersCards } from './gunslingers.js';
export { stageCards } from './stage.js';
export { travelCards } from './travel.js';
export { faunaCards } from './fauna.js';
export { horsesCards } from './horses.js';
export { prominentCards } from './prominent.js';
export { floraCards } from './flora.js';
export { beautyCards } from './beauty.js';
export { championsCards } from './champions.js';
export { vistasCards } from './vistas.js';
export { artistsCards } from './artists.js';
export { inventionsCards } from './inventions.js';

// Import for combined array
import { gunslingersCards } from './gunslingers.js';
import { stageCards } from './stage.js';
import { travelCards } from './travel.js';
import { faunaCards } from './fauna.js';
import { horsesCards } from './horses.js';
import { prominentCards } from './prominent.js';
import { floraCards } from './flora.js';
import { beautyCards } from './beauty.js';
import { championsCards } from './champions.js';
import { vistasCards } from './vistas.js';
import { artistsCards } from './artists.js';
import { inventionsCards } from './inventions.js';

/**
 * All cigarette card sets in display order
 * 12 sets × 12 cards = 144 total cards
 * 
 * ============================================
 * 💡 FAST COLLECTION STRATEGY (BUY & DISCARD)
 * ============================================
 * You can get ALL 144 cards in ~5 minutes:
 * 1. Go to any General Store
 * 2. Buy Premium Cigarettes ($2.50 each) — you get a random card each time
 * 3. Discard the cigarettes from your satchel
 * 4. Repeat until you have all cards (duplicates are skipped)
 * 5. Mail complete sets to Phineas Ramsbottom
 * 6. You'll get MOST of your money back from the set rewards!
 * 
 * Total cost: ~$360 in cigarettes
 * Total reward: $800 + valuable items = NET PROFIT!
 * 
 * Set Rewards (when complete set delivered to Phineas Ramsbottom):
 * - Famous Gunslingers: Special Snake Oil + $50
 * - Stars of the Stage: Small Jewelry Bag + $50
 * - Marvels of Travel: Aged Pirate Rum + $50
 * - Fauna of North America: Perfect Rabbit Pelt + $50
 * - Horses: Special Horse Medicine + $50
 * - Prominent Americans: 3 Eagle Feathers + $50
 * - Flora of North America: Special Miracle Tonic + $50
 * - Gems of Beauty: Platinum Chain Necklace + $100
 * - World's Champions: Valerian Root + $50
 * - Vistas of America: Gold Nugget + $100
 * - Artists, Writers & Poets: Ginseng Elixir + $100
 * - Amazing Inventions: Volatile Dynamite + $100
 * - FIRST SET BONUS: Vintage Civil War Handcuffs
 * - ALL SETS COMPLETE: Additional $200
 */
export const allCigaretteCards = [
  gunslingersCards,
  stageCards,
  travelCards,
  faunaCards,
  horsesCards,
  prominentCards,
  floraCards,
  beautyCards,
  championsCards,
  vistasCards,
  artistsCards,
  inventionsCards
];
