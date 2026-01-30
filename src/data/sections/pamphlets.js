/**
 * Pamphlets & Recipes Section
 * Crafting pamphlet locations and recipes
 */

export const pamphletsSection = {
  id: 'pamphlets',
  title: 'VIII. Pamphlets & Recipes',
  icon: '📜',
  defaultOpen: false,
  items: [
    // ========================================
    // EXPLOSIVE & SPECIAL AMMO
    // ========================================
    {
      id: 'pamph-explosive',
      text: 'Explosive & Incendiary Ammo',
      tip: 'Most powerful ammo types. Animal Fat is key ingredient!',
      subItems: [
        { 
          id: 'pamph-explosive-slug', 
          text: 'Explosive Slug Pamphlet', 
          tip: '📍 Burned house near train tracks between Gaptooth Ridge & Cholla Springs. OR Fence ($90) after "A Short Walk in a Pretty Town".',
          reward: '1 Slug Shell + 1 Animal Fat'
        },
        { 
          id: 'pamph-express-explosive', 
          text: 'Express Explosive Pamphlet', 
          tip: '📍 Available from start of Chapter 2.',
          reward: '1 Express Cartridge + 1 Animal Fat'
        },
        { 
          id: 'pamph-incendiary-buckshot', 
          text: 'Incendiary Buckshot Pamphlet', 
          tip: '📍 Under floorboard at Copperhead Landing cabin. OR Fence ($80) after "Pouring Forth Oil I".',
          reward: '1 Shotgun Shell + 1 Moonshine'
        },
        { 
          id: 'pamph-fire-arrow', 
          text: 'Fire Arrow Pamphlet', 
          tip: '📍 Fence ($75). Requires Animal Fat.',
          reward: '1 Arrow + 1 Animal Fat + 1 Flight Feather'
        }
      ]
    },
    // ========================================
    // SPECIAL ARROWS
    // ========================================
    {
      id: 'pamph-arrows',
      text: 'Special Arrow Pamphlets',
      tip: 'Arrows for hunting and combat. Flight Feathers from birds!',
      subItems: [
        { 
          id: 'pamph-poison-arrow', 
          text: 'Poison Arrow Pamphlet', 
          tip: '📍 Lockbox outside Mysterious Hill Home (NE of Bacchus Station). OR Charles bison hunt. OR Fence.',
          reward: '1 Arrow + 1 Oleander Sage + 1 Flight Feather'
        },
        { 
          id: 'pamph-dynamite-arrow', 
          text: 'Dynamite Arrow Pamphlet', 
          tip: '📍 Lockbox under small wooden bridge S of Wapiti Indian Reservation. OR Fence after quest.',
          reward: '1 Arrow + 1 Dynamite + 1 Flight Feather'
        },
        { 
          id: 'pamph-improved-arrow', 
          text: 'Improved Arrow Pamphlet', 
          tip: '📍 Fence ($350). Better penetration for large game.',
          reward: '1 Arrow + 1 Flight Feather'
        },
        { 
          id: 'pamph-small-game-arrow', 
          text: 'Small Game Arrow Pamphlet', 
          tip: '📍 Fence. Essential for perfect small pelts!',
          reward: '1 Arrow + 1 Shotgun Shell + 1 Flight Feather'
        },
        { 
          id: 'pamph-tracking-arrow', 
          text: 'Tracking Arrow Pamphlet', 
          tip: '📍 Complete "Hunting for Sport" with Charles.',
          reward: '1 Arrow + 1 Indian Tobacco + 1 Flight Feather'
        }
      ]
    },
    // ========================================
    // THROWN WEAPONS
    // ========================================
    {
      id: 'pamph-thrown',
      text: 'Thrown Weapon Pamphlets',
      tip: 'Tomahawks and Throwing Knives upgrades.',
      subItems: [
        { 
          id: 'pamph-poison-knife', 
          text: 'Poison Throwing Knife Pamphlet', 
          tip: '📍 Under floorboard in shack N of Saint Denis (near train tracks). OR Charles quest. OR Fence.',
          reward: '1 Throwing Knife + 1 Oleander Sage'
        },
        { 
          id: 'pamph-improved-knife', 
          text: 'Improved Throwing Knife Pamphlet', 
          tip: '📍 Fence ($45). Better range and damage.',
          reward: '1 Throwing Knife + 1 Owl Feather'
        },
        { 
          id: 'pamph-homing-tomahawk', 
          text: 'Homing Tomahawk Pamphlet', 
          tip: '📍 Fence. Slightly homing capabilities.',
          reward: '1 Tomahawk + 1 Owl Feather'
        }
      ]
    },
    // ========================================
    // EXPLOSIVES
    // ========================================
    {
      id: 'pamph-explosives',
      text: 'Explosive Pamphlets',
      tip: 'Throwable explosive upgrades.',
      subItems: [
        { 
          id: 'pamph-volatile-dynamite', 
          text: 'Volatile Dynamite Pamphlet', 
          tip: "📍 Lockbox under broken wagon at Hani's Bethel. OR Fence after 'American Distillation'.",
          reward: '1 Dynamite + 1 Animal Fat + 1 High-Velocity Cartridge'
        },
        { 
          id: 'pamph-volatile-fire-bottle', 
          text: 'Volatile Fire Bottle Pamphlet', 
          tip: '📍 Fence ($95). Bigger explosion.',
          reward: '1 Fire Bottle + 1 Animal Fat'
        }
      ]
    },
    // ========================================
    // TONICS & MEDICINE
    // ========================================
    {
      id: 'pamph-tonics',
      text: 'Tonic Pamphlets',
      tip: 'Health, Stamina, Dead Eye restoration crafting.',
      subItems: [
        { 
          id: 'pamph-potent-health', 
          text: 'Potent Health Cure Pamphlet', 
          tip: '📍 Near Annesburg mining area. OR Fence.',
          reward: '1 Ginseng + 1 Yarrow'
        },
        { 
          id: 'pamph-potent-bitters', 
          text: 'Potent Snake Oil Pamphlet', 
          tip: '📍 Fence. Dead eye restoration.',
          reward: '1 Indian Tobacco + 1 Sage'
        },
        { 
          id: 'pamph-horse-reviver', 
          text: 'Horse Reviver Pamphlet', 
          tip: '📍 Fence. Bring back downed horse!',
          reward: '1 Sage + 1 Health Cure'
        },
        { 
          id: 'pamph-horse-stimulant', 
          text: 'Horse Stimulant Pamphlet', 
          tip: '📍 Fence. Restore horse stamina.',
          reward: '1 Burdock Root + 1 Oleander Sage'
        },
        { 
          id: 'pamph-special-miracles', 
          text: 'Special Miracle Tonic Pamphlet', 
          tip: '📍 Fence after Chapter 3. Full core restore!',
          reward: '1 Valerian Root + 1 Yarrow + 1 Ginseng'
        }
      ]
    },
    // ========================================
    // HUNTING BAITS & COVER SCENTS
    // ========================================
    {
      id: 'pamph-hunting',
      text: 'Hunting & Bait Pamphlets',
      tip: 'Lures and scent covers for hunting.',
      subItems: [
        { 
          id: 'pamph-cover-scent', 
          text: 'Cover Scent Lotion Pamphlet', 
          tip: '📍 Early game Fence. Mask your scent from animals.',
          reward: '1 Sage + 1 Oregano'
        },
        { 
          id: 'pamph-potent-predator-bait', 
          text: 'Potent Predator Bait Pamphlet', 
          tip: '📍 Fence. Attracts predators faster.',
          reward: '2 Meat + 1 Blackberry'
        },
        { 
          id: 'pamph-potent-herbivore-bait', 
          text: 'Potent Herbivore Bait Pamphlet', 
          tip: '📍 Fence. Attracts herbivores faster.',
          reward: '2 Berries + 1 Vanilla Flower'
        },
        { 
          id: 'pamph-special-horse-food', 
          text: 'Special Horse Food Pamphlet', 
          tip: '📍 Fence. Best horse core restoration.',
          reward: '1 Big Game Meat + 1 Apple + 1 Hay'
        }
      ]
    }
  ]
};
