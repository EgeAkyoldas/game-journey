/**
 * Challenges Index
 * Combines all challenge sections
 */

export { banditChallenge } from './bandit.js';
export { explorerChallenge } from './explorer.js';
export { hunterChallenge } from './hunter.js';
export { herbalistChallenge } from './herbalist.js';
export { sharpshooterChallenge } from './sharpshooter.js';
export { horsemanChallenge } from './horseman.js';
export { survivalistChallenge } from './survivalist.js';
export { gamblerChallenge } from './gambler.js';
export { weaponsExpertChallenge } from './weapons-expert.js';

// Combined array for convenience
import { banditChallenge } from './bandit.js';
import { explorerChallenge } from './explorer.js';
import { hunterChallenge } from './hunter.js';
import { herbalistChallenge } from './herbalist.js';
import { sharpshooterChallenge } from './sharpshooter.js';
import { horsemanChallenge } from './horseman.js';
import { survivalistChallenge } from './survivalist.js';
import { gamblerChallenge } from './gambler.js';
import { weaponsExpertChallenge } from './weapons-expert.js';

export const allChallenges = [
  banditChallenge,
  explorerChallenge,
  hunterChallenge,
  herbalistChallenge,
  sharpshooterChallenge,
  horsemanChallenge,
  survivalistChallenge,
  gamblerChallenge,
  weaponsExpertChallenge
];
