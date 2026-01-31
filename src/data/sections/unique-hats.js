/**
 * Unique Hats & Masks Section
 * Special headwear found around the world
 */

export const uniqueHatsSection = {
  id: 'unique-hats',
  title: 'Unique Hats & Masks',
  icon: '🎩',
  defaultOpen: false,
  items: [
    // ========================================
    // UNIQUE HATS (World Locations)
    // ========================================
    {
      id: 'hats-world',
      text: 'World Location Hats',
      tip: 'Found at specific locations. Permanently saved to wardrobe.',
      subItems: [
        { 
          id: 'hat-tricorn', 
          text: 'Tricorn Hat', 
          tip: '📍 Wrecked ship on island west of Rhodes (Flat Iron Lake). Need boat to reach.',
          region: 'lemoyne'
        },
        { 
          id: 'hat-civil-war', 
          text: 'Civil War Hardee Hat', 
          tip: '📍 Fort Brennand, SE of O\'Creagh\'s Run. Basement corner on skeleton.',
          region: 'new-hanover'
        },
        { 
          id: 'hat-nevada', 
          text: 'Nevada Hat', 
          tip: '📍 Behind waterfall at Granite Pass. Climb down from top to rocky walkway.',
          region: 'ambarino'
        },
        { 
          id: 'hat-miner', 
          text: "Miner's Hat", 
          tip: '📍 Beryl\'s Dream mine. Use plunger to blast rocks, crawl through. On corpse deep inside.',
          region: 'new-hanover'
        },
        { 
          id: 'hat-morion', 
          text: 'Morion Helmet', 
          tip: '📍 Top of Mount Hagen. On frozen settler corpse at the peak.',
          region: 'ambarino'
        },
        { 
          id: 'hat-pirate', 
          text: 'Pirate Hat', 
          tip: '📍 Shipwreck island south of Saint Denis. Same location as Pirate Sword.',
          region: 'lemoyne'
        }
      ]
    },

    // ========================================
    // SCARECROW HATS
    // ========================================
    {
      id: 'hats-scarecrow',
      text: 'Scarecrow Hats',
      tip: 'Shoot these off scarecrows to collect them.',
      subItems: [
        { 
          id: 'hat-scarecrow-straw', 
          text: 'Scarecrow Hat', 
          tip: '📍 Scarecrow SW of Heartland Overflow. Shoot hat off to collect.',
          region: 'new-hanover'
        },
        { 
          id: 'hat-scarecrow-derby', 
          text: 'Scarecrow Derby Hat', 
          tip: '📍 Braithwaite Manor cornfield. Shoot off scarecrow.',
          region: 'lemoyne'
        },
        { 
          id: 'hat-scarecrow-top', 
          text: 'Scarecrow Top Hat', 
          tip: '📍 Behind MacFarlane\'s Ranch. ⚠️ Epilogue only!',
          region: 'new-austin',
          chapter: 'epilogue'
        }
      ]
    },

    // ========================================
    // MASKS & HELMETS
    // ========================================
    {
      id: 'hats-masks',
      text: 'Masks & Helmets',
      tip: 'Unique headwear including masks and ancient helmets.',
      subItems: [
        { 
          id: 'mask-cat-skull', 
          text: 'Cat Skull Mask', 
          tip: '📍 Lakay settlement (Lemoyne swamp). Sunken building, crouch through hole. Mounted on wall.',
          region: 'lemoyne'
        },
        { 
          id: 'mask-pig', 
          text: 'Pig Mask', 
          tip: '📍 Butcher\'s Creek slaughtering area. Hanging in center of the creepy settlement.',
          region: 'new-hanover'
        },
        { 
          id: 'helmet-viking', 
          text: 'Viking Helmet', 
          tip: '📍 Old Tomb, west of Roanoke Valley river, N of Beaver Hollow. Viking Hatchet + Comb here too.',
          region: 'new-hanover'
        },
        { 
          id: 'mask-pagan', 
          text: 'Pagan Skull Mask', 
          tip: '📍 Pagan ritual site, NW of Lake Owanjila. On corpse in disturbing scene.',
          region: 'west-elizabeth'
        },
        { 
          id: 'mask-ram', 
          text: 'Ram Skull Mask', 
          tip: '📍 Rathskeller Fork, east corner. Hanging from wooden pole. ⚠️ Epilogue only!',
          region: 'new-austin',
          chapter: 'epilogue'
        }
      ]
    },

    // ========================================
    // NPC ENCOUNTER HATS
    // ========================================
    {
      id: 'hats-npc',
      text: 'NPC Encounter Hats',
      tip: 'Obtained from specific NPCs through encounters or combat.',
      subItems: [
        { 
          id: 'hat-raccoon', 
          text: 'Classic Raccoon Hat', 
          tip: '📍 Valentine saloon "crazy man" in back. Encounter multiple times → fistfight → grab hat.',
          region: 'new-hanover',
          chapter: 2
        },
        { 
          id: 'hat-lemoyne-riders', 
          text: 'Lemoyne Raiders Hat', 
          tip: '📍 Kill Lemoyne Raiders (Scarlett Meadows). Distinctive gray army cap.',
          region: 'lemoyne'
        },
        { 
          id: 'hat-murfree', 
          text: 'Murfree Brood Hat', 
          tip: '📍 Kill Murfree Brood (Roanoke Ridge). Unique dirty cap.',
          region: 'new-hanover'
        },
        { 
          id: 'hat-del-lobo', 
          text: 'Del Lobo Sombrero', 
          tip: '📍 Kill Del Lobos gang (New Austin). ⚠️ Epilogue only!',
          region: 'new-austin',
          chapter: 'epilogue'
        }
      ]
    },

    // ========================================
    // MISSABLE HATS (Story-Locked)
    // ========================================
    {
      id: 'hats-missable',
      text: '⚠️ Missable Hats',
      tip: 'Can only be obtained during specific story missions!',
      missable: true,
      subItems: [
        { 
          id: 'hat-guarma', 
          text: 'Guarma Hat', 
          tip: '⚠️ GUARMA ONLY (Ch5)! Kill soldiers wearing unique hat. Cannot return!',
          missable: true,
          chapter: 5
        },
        { 
          id: 'hat-police', 
          text: 'Saint Denis Police Cap', 
          tip: '⚠️ "Angelo Bronte" mission (Ch4). Loot from killed police. One chance!',
          missable: true,
          chapter: 4
        },
        { 
          id: 'hat-miners-mission', 
          text: "Miner's Hat (Mission)", 
          tip: '⚠️ "The Bridge to Nowhere" mission. Loot from miner during Chapter 6.',
          missable: true,
          chapter: 6
        },
        { 
          id: 'hat-military', 
          text: 'Military Mountie Hat', 
          tip: '⚠️ Fort Wallace missions (Ch6). Loot from army officer.',
          missable: true,
          chapter: 6
        },
        { 
          id: 'hat-braithwaite', 
          text: 'Braithwaite Manor Hat', 
          tip: '⚠️ Manor raid mission. Loot unique hats from estate guards.',
          missable: true,
          chapter: 3
        }
      ]
    },

    // ========================================
    // COLLECTION TIP
    // ========================================
    {
      id: 'hats-tips',
      text: 'Hat Collection Tips',
      tip: 'Helpful advice for collecting unique headwear.',
      subItems: [
        { id: 'hat-tip-save', text: 'Saving Hats', tip: 'If hat name appears on screen when picked up, it\'s saved permanently to wardrobe.' },
        { id: 'hat-tip-horse', text: 'Horse Storage', tip: 'Store up to 3 hats on your horse saddle. Additional saved in wardrobe at camp/hotel.' },
        { id: 'hat-tip-lost', text: 'Lost Hats', tip: 'Unique hats respawn at original location if lost. Check back!' }
      ]
    }
  ]
};
