/**
 * Navigation Categories
 * Groups sections into hierarchical menu structure
 */

export const NAV_CATEGORIES = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: '🌟',
    sections: ['quickstart']
  },
  {
    id: 'money-gear',
    title: 'Money & Gear',
    icon: '💰',
    sections: ['treasures', 'weapons', 'satchel', 'camp', 'pamphlets', 'talismans']
  },
  {
    id: 'world',
    title: 'World & Story',
    icon: '🗺️',
    sections: ['strangers', 'legendary-animals', 'bounties', 'gang-hideouts', 'companion-activities', 'camp-requests', 'mysteries', 'missable', 'graves']
  },
  {
    id: 'challenges',
    title: 'Challenges',
    icon: '🏆',
    sections: ['bandit', 'explorer', 'hunter', 'herbalist', 'sharpshooter', 'horseman', 'survivalist', 'gambler', 'weapons-expert']
  },
  {
    id: 'collectibles',
    title: 'Collectibles',
    icon: '🎴',
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
    icon: '📓',
    sections: ['journal']
  }
];
