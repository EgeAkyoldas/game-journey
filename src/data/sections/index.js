/**
 * Sections Index
 * Combines all checklist sections into a single array
 */

// Core sections
import { quickstartSection } from './quickstart.js';
import { treasuresSection } from './treasures.js';
import { strangersSection } from './strangers.js';
import { legendaryAnimalsSection } from './legendary-animals.js';
import { weaponsSection } from './weapons.js';
import { satchelSection } from './satchel.js';
import { campSection } from './camp.js';
import { pamphletsSection } from './pamphlets.js';
import { mysteriesSection } from './mysteries.js';
import { gangHideoutsSection } from './gang-hideouts.js';
import { trapperSection } from './trapper.js';
import { uniqueHatsSection } from './unique-hats.js';

// Challenge sections
import { allChallenges } from './challenges/index.js';

// Content sections
import { missableSection } from './missable.js';
import { collectiblesSection } from './collectibles.js';
import { companionActivitiesSection } from './companion-activities.js';
import { campRequestsSection } from './camp-requests.js';
import { bountiesSection } from './bounties.js';
import { talismansSection } from './talismans.js';

// Cigarette card sections
import { allCigaretteCards } from './cigarette-cards/index.js';

// End-game sections
import { gravesSection } from './graves.js';
import { journalSection } from './journal.js';

/**
 * All checklist sections in display order
 */
export const CHECKLIST_SECTIONS = [
  // Getting Started
  quickstartSection,
  
  // Money & Gear
  treasuresSection,
  weaponsSection,
  satchelSection,
  campSection,
  trapperSection,
  uniqueHatsSection,
  pamphletsSection,
  talismansSection,
  
  // World & Story
  strangersSection,
  legendaryAnimalsSection,
  bountiesSection,
  gangHideoutsSection,
  companionActivitiesSection,
  campRequestsSection,
  mysteriesSection,
  missableSection,
  gravesSection,
  
  // Challenges (9 sections)
  ...allChallenges,
  
  // Collectibles (includes 12 cigarette card sets)
  collectiblesSection,
  ...allCigaretteCards,
  
  // Personal
  journalSection
];

// Re-export individual sections for direct access
export { quickstartSection } from './quickstart.js';
export { treasuresSection } from './treasures.js';
export { strangersSection } from './strangers.js';
export { legendaryAnimalsSection } from './legendary-animals.js';
export { weaponsSection } from './weapons.js';
export { satchelSection } from './satchel.js';
export { campSection } from './camp.js';
export { pamphletsSection } from './pamphlets.js';
export { mysteriesSection } from './mysteries.js';
export { gangHideoutsSection } from './gang-hideouts.js';
export { missableSection } from './missable.js';
export { collectiblesSection } from './collectibles.js';
export { companionActivitiesSection } from './companion-activities.js';
export { campRequestsSection } from './camp-requests.js';
export { bountiesSection } from './bounties.js';
export { talismansSection } from './talismans.js';
export { gravesSection } from './graves.js';
export { trapperSection } from './trapper.js';
export { uniqueHatsSection } from './unique-hats.js';
export { journalSection } from './journal.js';

// Re-export challenge and cigarette card collections
export { allChallenges } from './challenges/index.js';
export { allCigaretteCards } from './cigarette-cards/index.js';
