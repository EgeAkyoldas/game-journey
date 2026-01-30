/**
 * Camp Upgrades Section
 * All camp upgrade options + Pearson Crafting
 */

export const campSection = {
  id: 'camp',
  title: 'VII. Camp Upgrades',
  icon: '⛺',
  defaultOpen: false,
  items: [
    // ========================================
    // LEDGER UPGRADES (Money Only)
    // ========================================
    {
      id: 'camp-ledger',
      text: 'Ledger Upgrades ($ Only)',
      tip: 'Purchase from camp ledger near donation box. No materials needed.',
      subItems: [
        { 
          id: 'camp-lodging-arthur', 
          text: "Arthur's Lodging ($325) ⭐", 
          tip: 'Unlocks FAST TRAVEL from map near bed. ESSENTIAL!',
          priority: true
        },
        { 
          id: 'camp-leather-tools', 
          text: 'Leather Working Tools ($225) ⭐', 
          tip: 'Allows Pearson to craft satchels. REQUIRED for Legend of the East Satchel!',
          priority: true
        },
        { 
          id: 'camp-horse-station', 
          text: 'Horse Station ($300)', 
          tip: 'Hitching post for horse management. Access stabled horses from camp.'
        },
        { 
          id: 'camp-lodging-dutch', 
          text: "Dutch's Lodging ($175)", 
          tip: "Upgrades Dutch's tent. Morale boost."
        },
        { 
          id: 'camp-chicken-coop', 
          text: 'Chicken Coop ($175)', 
          tip: 'Provides eggs for camp provisions.'
        },
        { 
          id: 'camp-boat', 
          text: 'Camp Boat/Canoe ($400)', 
          tip: 'Available at Clemens Point only. Small fishing boat.'
        }
      ]
    },
    // ========================================
    // PEARSON SATCHELS (Leather Tools Required)
    // ========================================
    {
      id: 'camp-satchels',
      text: 'Pearson Satchels (Requires Leather Tools)',
      tip: '⭐ Craft all 7 satchels to unlock Legend of the East Satchel - holds 99 of EVERYTHING!',
      reward: 'Legend of the East Satchel',
      subItems: [
        { 
          id: 'satchel-tonics', 
          text: 'Tonics Satchel', 
          tip: '📦 Perfect Deer Pelt + Perfect Buck Pelt. Holds more tonics.'
        },
        { 
          id: 'satchel-ingredients', 
          text: 'Ingredients Satchel', 
          tip: '📦 Perfect Deer Pelt + Perfect Badger Pelt + Perfect Squirrel Pelt. Holds more cooking ingredients.'
        },
        { 
          id: 'satchel-kit', 
          text: 'Kit Satchel', 
          tip: '📦 Perfect Elk Pelt + Perfect Panther Pelt. Holds more kits/pamphlets.'
        },
        { 
          id: 'satchel-provisions', 
          text: 'Provisions Satchel', 
          tip: '📦 Perfect Deer Pelt + Perfect Bison Pelt + Perfect Raccoon Pelt. Holds more provisions.'
        },
        { 
          id: 'satchel-materials', 
          text: 'Materials Satchel', 
          tip: '📦 Perfect Boar Pelt + Perfect Iguana Skin. Holds more crafting materials.'
        },
        { 
          id: 'satchel-valuables', 
          text: 'Valuables Satchel', 
          tip: '📦 Perfect Deer Pelt + Perfect Beaver Pelt + Perfect Rabbit Pelt. Holds more valuables.'
        },
        { 
          id: 'satchel-legend', 
          text: 'Legend of the East Satchel ⭐', 
          tip: 'CRAFT ALL 7 ABOVE! Then Pearson can make this. Holds 99 of EVERYTHING!',
          priority: true
        }
      ]
    },
    // ========================================
    // PEARSON CAMP ITEMS
    // ========================================
    {
      id: 'camp-pearson-items',
      text: 'Pearson Camp Crafting Items',
      tip: 'Decorative and functional items made from animal parts.',
      subItems: [
        { 
          id: 'pearson-sit-blanket', 
          text: 'Cow Hide Covered Chest', 
          tip: '📦 Perfect Cow Hide. Decorative storage.'
        },
        { 
          id: 'pearson-scout-fire', 
          text: 'Bear Skin Rug', 
          tip: '📦 Perfect Bear Pelt. Near main fire.'
        },
        { 
          id: 'pearson-pronghorn-skull', 
          text: 'Pronghorn Skull', 
          tip: '📦 Perfect Pronghorn Carcass. Hanging decoration.'
        },
        { 
          id: 'pearson-boar-skin', 
          text: 'Boar Skin Table Cover', 
          tip: '📦 Perfect Boar Pelt. For Pearson area.'
        },
        { 
          id: 'pearson-ox-skin', 
          text: 'Ox Hide Floor Cover', 
          tip: '📦 Perfect Ox Hide. Ground cover.'
        },
        { 
          id: 'pearson-cougar', 
          text: 'Cougar Skin Rug', 
          tip: '📦 Perfect Cougar Pelt. Arthur tent area.'
        },
        { 
          id: 'pearson-wolf', 
          text: 'Wolf Skin Rug', 
          tip: '📦 Perfect Wolf Pelt. Dutch tent area.'
        },
        { 
          id: 'pearson-alligator', 
          text: 'Alligator Skin Item', 
          tip: '📦 Perfect Alligator Skin. Various decorations.'
        }
      ]
    },
    // ========================================
    // DONATION REWARDS
    // ========================================
    {
      id: 'camp-donations',
      text: 'Donation Wagon Rewards',
      tip: 'Unlocked by donating money/items to camp box over time.',
      subItems: [
        { 
          id: 'camp-ammo', 
          text: 'Ammunition Wagon', 
          tip: 'Donate consistently over time. Provides free ammo at camp.'
        },
        { 
          id: 'camp-medical', 
          text: 'Medical Wagon', 
          tip: 'Donate consistently over time. Provides medical supplies.'
        }
      ]
    }
  ]
};
