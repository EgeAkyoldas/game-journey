/**
 * Talismans & Trinkets Section
 * Complete crafting recipes from Fence - verified against wiki
 */

export const talismansSection = {
  id: 'talismans',
  title: 'XXII. Talismans & Trinkets',
  icon: '🔮',
  defaultOpen: false,
  items: [
    // ========================================
    // TALISMANS (3 ingredients each, stronger bonuses)
    // ========================================
    {
      id: 'talisman-group',
      text: 'Talismans (3 ingredients, stronger effects)',
      tip: 'Crafted at Fence. Require legendary animal parts + jewelry + unique items.',
      subItems: [
        { 
          id: 'talisman-alligator', 
          text: 'Alligator Tooth Talisman', 
          tip: '📦 Legendary Alligator Tooth + Gold Jointed Bracelet + Vintage Civil War Handcuffs. EFFECT: -10% Dead Eye drain.',
          reward: '-10% Dead Eye drain'
        },
        { 
          id: 'talisman-bear', 
          text: 'Bear Claw Talisman', 
          tip: '📦 Legendary Bear Claw + Silver Chain Bracelet + Quartz Chunk (Dino Bones reward). EFFECT: -10% Health Core drain.',
          reward: '-10% Health Core drain'
        },
        { 
          id: 'talisman-bison', 
          text: 'Bison Horn Talisman', 
          tip: '📦 Legendary White Bison Horn + Abalone Shell Fragment (N of Rhodes) + Silver Earring. EFFECT: -10% Stamina Core drain.',
          reward: '-10% Stamina Core drain'
        },
        { 
          id: 'talisman-boar', 
          text: 'Boar Tusk Talisman', 
          tip: '📦 Legendary Boar Tusk + Gold Earring + Cobalt Petrified Wood (Lake Isabella cave). EFFECT: -10% Horse Core drain.',
          reward: '-10% Horse Core drain'
        },
        { 
          id: 'talisman-raven', 
          text: 'Raven Claw Talisman', 
          tip: '📦 Old Brass Compass ONLY (Rock Carvings reward from Francis Sinclair). EFFECT: -20% Weapon degradation!',
          reward: '-20% Weapon degradation',
          priority: true
        }
      ]
    },
    // ========================================
    // TRINKETS (1 ingredient each, simpler bonuses)
    // ========================================
    {
      id: 'trinket-group-hunt-first',
      text: 'Priority Trinkets (Hunt First!)',
      tip: '⭐ These legendary animals should be hunted ASAP for best benefits.',
      subItems: [
        { 
          id: 'trinket-buck', 
          text: 'Buck Antler Trinket ⭐', 
          tip: '📦 Legendary Buck Antler. EFFECT: Higher quality pelts when skinning! HUNT FIRST!',
          reward: 'Better pelts always',
          priority: true
        },
        { 
          id: 'trinket-fox', 
          text: 'Fox Claw Trinket', 
          tip: '📦 Legendary Fox Claw. EFFECT: +5 seconds Eagle Eye duration.',
          reward: '+5s Eagle Eye'
        }
      ]
    },
    {
      id: 'trinket-group-xp',
      text: 'XP Boost Trinkets',
      tip: 'Increase experience gain for core stats.',
      subItems: [
        { 
          id: 'trinket-moose', 
          text: 'Moose Antler Trinket', 
          tip: '📦 Legendary Moose Antler. EFFECT: +10% Health XP gain.',
          reward: '+10% Health XP'
        },
        { 
          id: 'trinket-cougar', 
          text: 'Cougar Fang Trinket', 
          tip: '📦 Legendary Cougar Fang. ⚠️ EPILOGUE ONLY. EFFECT: +10% Stamina XP gain.',
          reward: '+10% Stamina XP',
          chapter: 'epilogue'
        },
        { 
          id: 'trinket-coyote', 
          text: 'Coyote Fang Trinket', 
          tip: '📦 Legendary Coyote Fang. EFFECT: +10% Dead Eye XP gain.',
          reward: '+10% Dead Eye XP'
        }
      ]
    },
    {
      id: 'trinket-group-utility',
      text: 'Utility Trinkets',
      tip: 'Various quality of life improvements.',
      subItems: [
        { 
          id: 'trinket-beaver', 
          text: 'Beaver Tooth Trinket', 
          tip: '📦 Legendary Beaver Tooth. EFFECT: -10% Weapon degradation speed.',
          reward: '-10% Weapon wear'
        },
        { 
          id: 'trinket-elk', 
          text: 'Elk Antler Trinket', 
          tip: '📦 Legendary Elk Antler. EFFECT: +10% looted cash value!',
          reward: '+10% looted cash'
        },
        { 
          id: 'trinket-ram', 
          text: 'Ram Horn Trinket', 
          tip: '📦 Legendary Bighorn Ram Horn. EFFECT: 2x yield from thyme, oregano, wild mint!',
          reward: '2x herb yield'
        },
        { 
          id: 'trinket-wolf', 
          text: 'Wolf Heart Trinket', 
          tip: '📦 Legendary Wolf Heart. EFFECT: 2x alcohol resistance.',
          reward: '2x alcohol tolerance'
        },
        { 
          id: 'trinket-lion', 
          text: "Lion's Paw Trinket", 
          tip: '📦 Lion\'s Paw (from "He\'s British, Of Course" mission). EFFECT: +10% Stamina XP.',
          reward: '+10% Stamina XP'
        }
      ]
    },
    {
      id: 'trinket-group-combat',
      text: 'Combat Trinkets',
      tip: 'Combat-focused bonuses.',
      subItems: [
        { 
          id: 'trinket-panther', 
          text: "Panther's Eye Trinket", 
          tip: '📦 Legendary Panther Eye. ⚠️ Requires Master Hunter Rank 9! EFFECT: -10% Dead Eye drain for 3s after kill.',
          reward: 'Dead Eye extension',
          priority: true
        },
        { 
          id: 'trinket-bison-tatanka', 
          text: 'Tatanka Bison Horn Trinket', 
          tip: '📦 Legendary Tatanka Bison Horn. ⚠️ EPILOGUE ONLY. EFFECT: +10% Melee damage resistance.',
          reward: '+10% Melee resist',
          chapter: 'epilogue'
        }
      ]
    },
    {
      id: 'trinket-group-epilogue',
      text: 'Epilogue-Only Trinkets',
      tip: '⚠️ New Austin access required (Epilogue only).',
      subItems: [
        { 
          id: 'trinket-pronghorn', 
          text: 'Pronghorn Horn Trinket', 
          tip: '📦 Legendary Pronghorn Horn. EFFECT: Carcasses on horse never rot!',
          reward: 'No carcass rot',
          chapter: 'epilogue'
        }
      ]
    },
    // ========================================
    // UNIQUE ITEMS NEEDED (Checklist)
    // ========================================
    {
      id: 'unique-items',
      text: 'Unique Crafting Items (Locations)',
      tip: 'These rare items are needed for talisman crafting.',
      subItems: [
        { 
          id: 'item-quartz', 
          text: 'Quartz Chunk', 
          tip: 'Mail ANY dinosaur bone location to Deborah MacGuinness (A Test of Faith mission).'
        },
        { 
          id: 'item-abalone', 
          text: 'Abalone Shell Fragment', 
          tip: 'Abandoned house north of Rhodes. On a shelf inside.'
        },
        { 
          id: 'item-cobalt', 
          text: 'Cobalt Petrified Wood', 
          tip: 'Cave near Lake Isabella. Chest inside the cave.'
        },
        { 
          id: 'item-handcuffs', 
          text: 'Vintage Civil War Handcuffs', 
          tip: 'Complete ANY cigarette card set and mail to Phineas T. Ramsbottom.'
        },
        { 
          id: 'item-compass', 
          text: 'Old Brass Compass', 
          tip: 'Complete ALL 10 rock carvings, then visit Francis Sinclair cabin (Geology for Beginners).'
        }
      ]
    }
  ]
};
