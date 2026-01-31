/**
 * Navigation Categories
 * Groups sections into hierarchical menu structure
 * Uses Font Awesome icons (no emojis)
 */

export const NAV_CATEGORIES = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: 'fa-star',
    sections: ['quickstart']
  },
  {
    id: 'money-gear',
    title: 'Money & Gear',
    icon: 'fa-coins',
    sections: ['treasures', 'weapons', 'satchel', 'camp', 'trapper', 'unique-hats', 'pamphlets', 'talismans']
  },
  {
    id: 'world',
    title: 'World & Story',
    icon: 'fa-map',
    sections: ['strangers', 'legendary-animals', 'bounties', 'gang-hideouts', 'companion-activities', 'camp-requests', 'mysteries', 'missable', 'graves']
  },
  {
    id: 'challenges',
    title: 'Challenges',
    icon: 'fa-trophy',
    sections: ['bandit', 'explorer', 'hunter', 'herbalist', 'sharpshooter', 'horseman', 'survivalist', 'gambler', 'weapons-expert']
  },
  {
    id: 'collectibles',
    title: 'Collectibles',
    icon: 'fa-image',
    sections: [
      'collectibles',
      'cig-gunslingers',
      'cig-stage',
      'cig-travel',
      'cig-fauna',
      'cig-horses',
      'cig-prominent',
      'cig-flora',
      'cig-beauty',
      'cig-champions',
      'cig-vistas',
      'cig-artists',
      'cig-inventions'
    ]
  },
  {
    id: 'personal',
    title: 'Personal',
    icon: 'fa-book',
    sections: ['journal']
  }
];

/**
 * Section icon mapping (Font Awesome)
 */
export const SECTION_ICONS = {
  // Getting Started
  'quickstart': 'fa-play-circle',
  
  // Money & Gear
  'treasures': 'fa-gem',
  'weapons': 'fa-gun',
  'satchel': 'fa-briefcase',
  'camp': 'fa-campground',
  'trapper': 'fa-paw',
  'unique-hats': 'fa-hat-cowboy',
  'pamphlets': 'fa-scroll',
  'talismans': 'fa-hand-sparkles',
  
  // World & Story
  'strangers': 'fa-user-secret',
  'legendary-animals': 'fa-deer',
  'bounties': 'fa-crosshairs',
  'gang-hideouts': 'fa-skull-crossbones',
  'companion-activities': 'fa-users',
  'camp-requests': 'fa-box',
  'mysteries': 'fa-magnifying-glass',
  'missable': 'fa-triangle-exclamation',
  'graves': 'fa-cross',
  
  // Challenges
  'bandit': 'fa-mask',
  'explorer': 'fa-compass',
  'hunter': 'fa-bullseye',
  'herbalist': 'fa-leaf',
  'sharpshooter': 'fa-crosshairs',
  'horseman': 'fa-horse',
  'survivalist': 'fa-fire',
  'gambler': 'fa-dice',
  'weapons-expert': 'fa-gun',
  
  // Collectibles
  'collectibles': 'fa-box-archive',
  'cig-gunslingers': 'fa-person-rifle',
  'cig-stage': 'fa-masks-theater',
  'cig-travel': 'fa-train',
  'cig-fauna': 'fa-paw',
  'cig-horses': 'fa-horse-head',
  'cig-prominent': 'fa-user-tie',
  'cig-flora': 'fa-seedling',
  'cig-beauty': 'fa-crown',
  'cig-champions': 'fa-medal',
  'cig-vistas': 'fa-mountain-sun',
  'cig-artists': 'fa-palette',
  'cig-inventions': 'fa-gears',
  
  // Personal
  'journal': 'fa-book-open'
};
