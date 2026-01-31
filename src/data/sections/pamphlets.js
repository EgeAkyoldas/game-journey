/**
 * Pamphlets & Recipes Section
 * Crafting pamphlet locations and recipes
 * Enhanced with cowboy storyteller narrative
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
      tip: '💥 Most powerful ammo types. Animal Fat is key ingredient!',
      tip_detailed: `**Explosive and incendiary ammunition** - the most devastating rounds you can craft. Learn these recipes and you'll clear rooms in seconds.

🔑 **Key Ingredient:** **Animal Fat** - harvest from ducks, geese, pigs, and boars.

💥 *When regular bullets just won't do.*`,
      verified: true,
      subItems: [
        { 
          id: 'pamph-explosive-slug', 
          text: 'Explosive Slug Pamphlet', 
          tip: '📍 Burned house near Gaptooth Ridge. OR Fence ($90) after "A Short Walk in a Pretty Town".',
          tip_detailed: `**Explosive Slug** - turns your shotgun into a cannon.

📍 **Free location:** Burned house near train tracks between Gaptooth Ridge & Cholla Springs (Epilogue area)

💰 **OR** Fence sells for $90 after mission "A Short Walk in a Pretty Town"

📦 **Recipe:** 1 Slug Shell + 1 Animal Fat`,
          reward: '1 Slug Shell + 1 Animal Fat',
          region: 'new-austin',
          verified: true
        },
        { 
          id: 'pamph-express-explosive', 
          text: 'Express Explosive Pamphlet', 
          tip: '📍 Available from start of Chapter 2.',
          tip_detailed: `**Express Explosive** - explosive rifle rounds. Devastating against enemies and large animals.

📍 **Availability:** Fence from Chapter 2 start

📦 **Recipe:** 1 Express Cartridge + 1 Animal Fat`,
          reward: '1 Express Cartridge + 1 Animal Fat',
          verified: true
        },
        { 
          id: 'pamph-incendiary-buckshot', 
          text: 'Incendiary Buckshot Pamphlet', 
          tip: '📍 Copperhead Landing cabin floorboard. OR Fence ($80) after "Pouring Forth Oil I".',
          tip_detailed: `**Incendiary Buckshot** - sets everything on fire. Terrifying up close.

📍 **Free location:** Under floorboard at Copperhead Landing cabin

💰 **OR** Fence sells for $80 after "Pouring Forth Oil I"

📦 **Recipe:** 1 Shotgun Shell + 1 Moonshine`,
          reward: '1 Shotgun Shell + 1 Moonshine',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'pamph-fire-arrow', 
          text: 'Fire Arrow Pamphlet', 
          tip: '📍 Fence ($75). Requires Animal Fat.',
          tip_detailed: `**Fire Arrow** - silent and deadly with a burning payload.

📍 **Available:** Fence for $75

📦 **Recipe:** 1 Arrow + 1 Animal Fat + 1 Flight Feather`,
          reward: '1 Arrow + 1 Animal Fat + 1 Flight Feather',
          verified: true
        }
      ]
    },
    // ========================================
    // SPECIAL ARROWS
    // ========================================
    {
      id: 'pamph-arrows',
      text: 'Special Arrow Pamphlets',
      tip: '🏹 Arrows for hunting and combat. Flight Feathers from birds!',
      tip_detailed: `**Special arrows** expand your bow's versatility. Essential for hunters and stealth players.

🪶 **Flight Feathers** come from birds—eagles, hawks, crows. Keep 'em stocked.`,
      verified: true,
      subItems: [
        { 
          id: 'pamph-poison-arrow', 
          text: 'Poison Arrow Pamphlet', 
          tip: '📍 Lockbox NE of Bacchus Station. OR Charles bison hunt. OR Fence.',
          tip_detailed: `**Poison Arrow** - slow death for your target. Good for large game.

📍 **Free location:** Lockbox outside Mysterious Hill Home (NE of Bacchus Station)
📍 **OR** Complete Charles bison hunting mission
📍 **OR** Buy at Fence

📦 **Recipe:** 1 Arrow + 1 Oleander Sage + 1 Flight Feather

⚠️ *Oleander Sage is poisonous. Found in Lemoyne.*`,
          reward: '1 Arrow + 1 Oleander Sage + 1 Flight Feather',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'pamph-dynamite-arrow', 
          text: 'Dynamite Arrow Pamphlet', 
          tip: '📍 Lockbox S of Wapiti Reservation. OR Fence after quest.',
          tip_detailed: `**Dynamite Arrow** - explosive death from a distance. Overkill for hunting, perfect for chaos.

📍 **Free location:** Lockbox under small wooden bridge south of Wapiti Indian Reservation

📦 **Recipe:** 1 Arrow + 1 Dynamite + 1 Flight Feather

💥 *Not recommended for pelt preservation.*`,
          reward: '1 Arrow + 1 Dynamite + 1 Flight Feather',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'pamph-improved-arrow', 
          text: 'Improved Arrow Pamphlet', 
          tip: '📍 Fence ($350). Better penetration for large game.',
          tip_detailed: `**Improved Arrow** - deeper penetration, more damage. Essential for large game hunting.

📍 **Available:** Fence for $350

📦 **Recipe:** 1 Arrow + 1 Flight Feather`,
          reward: '1 Arrow + 1 Flight Feather',
          verified: true
        },
        { 
          id: 'pamph-small-game-arrow', 
          text: 'Small Game Arrow Pamphlet', 
          tip: '📍 Fence. Essential for perfect small pelts!',
          tip_detailed: `**Small Game Arrow** - kills small animals without destroying the pelt.

📍 **Available:** Fence

📦 **Recipe:** 1 Arrow + 1 Shotgun Shell + 1 Flight Feather

⭐ **ESSENTIAL** for squirrels, rabbits, and birds if you want perfect pelts.`,
          reward: '1 Arrow + 1 Shotgun Shell + 1 Flight Feather',
          priority: true,
          verified: true
        },
        { 
          id: 'pamph-tracking-arrow', 
          text: 'Tracking Arrow Pamphlet', 
          tip: '📍 Complete "Hunting for Sport" with Charles.',
          tip_detailed: `**Tracking Arrow** - hit an animal and track it easily. Useful for wounded prey that runs.

📍 **Obtained:** Complete "Hunting for Sport" mission with Charles

📦 **Recipe:** 1 Arrow + 1 Indian Tobacco + 1 Flight Feather`,
          reward: '1 Arrow + 1 Indian Tobacco + 1 Flight Feather',
          verified: true
        }
      ]
    },
    // ========================================
    // THROWN WEAPONS
    // ========================================
    {
      id: 'pamph-thrown',
      text: 'Thrown Weapon Pamphlets',
      tip: '🔪 Tomahawks and Throwing Knives upgrades.',
      tip_detailed: `**Thrown weapon pamphlets** upgrade your knives and tomahawks. Silent and reusable (if you retrieve them).`,
      verified: true,
      subItems: [
        { 
          id: 'pamph-poison-knife', 
          text: 'Poison Throwing Knife Pamphlet', 
          tip: '📍 Shack N of Saint Denis. OR Charles quest. OR Fence.',
          tip_detailed: `**Poison Throwing Knife** - guaranteed kill even if you miss vitals.

📍 **Free location:** Under floorboard in shack north of Saint Denis (near train tracks)
📍 **OR** Complete Charles quest
📍 **OR** Buy at Fence

📦 **Recipe:** 1 Throwing Knife + 1 Oleander Sage`,
          reward: '1 Throwing Knife + 1 Oleander Sage',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'pamph-improved-knife', 
          text: 'Improved Throwing Knife Pamphlet', 
          tip: '📍 Fence ($45). Better range and damage.',
          tip_detailed: `**Improved Throwing Knife** - flies farther, hits harder.

📍 **Available:** Fence for $45

📦 **Recipe:** 1 Throwing Knife + 1 Owl Feather`,
          reward: '1 Throwing Knife + 1 Owl Feather',
          verified: true
        },
        { 
          id: 'pamph-homing-tomahawk', 
          text: 'Homing Tomahawk Pamphlet', 
          tip: '📍 Fence. Slight homing capability.',
          tip_detailed: `**Homing Tomahawk** - slight tracking when thrown. Makes hitting moving targets easier.

📍 **Available:** Fence

📦 **Recipe:** 1 Tomahawk + 1 Owl Feather`,
          reward: '1 Tomahawk + 1 Owl Feather',
          verified: true
        }
      ]
    },
    // ========================================
    // EXPLOSIVES
    // ========================================
    {
      id: 'pamph-explosives',
      text: 'Explosive Pamphlets',
      tip: '💣 Throwable explosive upgrades.',
      tip_detailed: `**Volatile explosives** pack more punch than standard dynamite and fire bottles.`,
      verified: true,
      subItems: [
        { 
          id: 'pamph-volatile-dynamite', 
          text: 'Volatile Dynamite Pamphlet', 
          tip: "📍 Lockbox at Hani's Bethel. OR Fence after 'American Distillation'.",
          tip_detailed: `**Volatile Dynamite** - bigger boom, more shrapnel.

📍 **Free location:** Lockbox under broken wagon at Hani's Bethel

💰 **OR** Fence sells after "American Distillation"

📦 **Recipe:** 1 Dynamite + 1 Animal Fat + 1 High-Velocity Cartridge`,
          reward: '1 Dynamite + 1 Animal Fat + 1 High-Velocity Cartridge',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'pamph-volatile-fire-bottle', 
          text: 'Volatile Fire Bottle Pamphlet', 
          tip: '📍 Fence ($95). Bigger explosion.',
          tip_detailed: `**Volatile Fire Bottle** - more fire, more chaos.

📍 **Available:** Fence for $95

📦 **Recipe:** 1 Fire Bottle + 1 Animal Fat`,
          reward: '1 Fire Bottle + 1 Animal Fat',
          verified: true
        }
      ]
    },
    // ========================================
    // TONICS & MEDICINE
    // ========================================
    {
      id: 'pamph-tonics',
      text: 'Tonic Pamphlets',
      tip: '💊 Health, Stamina, Dead Eye restoration crafting.',
      tip_detailed: `**Tonic recipes** let you craft restoratives in the field. Essential for long hunts and extended combat.`,
      verified: true,
      subItems: [
        { 
          id: 'pamph-potent-health', 
          text: 'Potent Health Cure Pamphlet', 
          tip: '📍 Near Annesburg mining area. OR Fence.',
          tip_detailed: `**Potent Health Cure** - full health core restoration.

📍 **Free location:** Near Annesburg mining area

📦 **Recipe:** 1 Ginseng + 1 Yarrow`,
          reward: '1 Ginseng + 1 Yarrow',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'pamph-potent-bitters', 
          text: 'Potent Snake Oil Pamphlet', 
          tip: '📍 Fence. Dead Eye restoration.',
          tip_detailed: `**Potent Snake Oil** - restore your Dead Eye when it matters most.

📍 **Available:** Fence

📦 **Recipe:** 1 Indian Tobacco + 1 Sage`,
          reward: '1 Indian Tobacco + 1 Sage',
          verified: true
        },
        { 
          id: 'pamph-horse-reviver', 
          text: 'Horse Reviver Pamphlet', 
          tip: '📍 Fence. Bring back downed horse!',
          tip_detailed: `**Horse Reviver** - save your horse from the brink of death.

📍 **Available:** Fence

📦 **Recipe:** 1 Sage + 1 Health Cure

🐴 *Always carry a few. Losing a bonded horse is heartbreaking.*`,
          reward: '1 Sage + 1 Health Cure',
          priority: true,
          verified: true
        },
        { 
          id: 'pamph-horse-stimulant', 
          text: 'Horse Stimulant Pamphlet', 
          tip: '📍 Fence. Restore horse stamina.',
          tip_detailed: `**Horse Stimulant** - refills horse stamina for long rides.

📍 **Available:** Fence

📦 **Recipe:** 1 Burdock Root + 1 Oleander Sage`,
          reward: '1 Burdock Root + 1 Oleander Sage',
          verified: true
        },
        { 
          id: 'pamph-special-miracles', 
          text: 'Special Miracle Tonic Pamphlet', 
          tip: '📍 Fence after Chapter 3. Full core restore!',
          tip_detailed: `**Special Miracle Tonic** - restores ALL cores to full. The best tonic in the game.

📍 **Available:** Fence after Chapter 3

📦 **Recipe:** 1 Valerian Root + 1 Yarrow + 1 Ginseng`,
          reward: '1 Valerian Root + 1 Yarrow + 1 Ginseng',
          chapter: 3,
          verified: true
        }
      ]
    },
    // ========================================
    // HUNTING BAITS & COVER SCENTS
    // ========================================
    {
      id: 'pamph-hunting',
      text: 'Hunting & Bait Pamphlets',
      tip: '🦌 Lures and scent covers for hunting.',
      tip_detailed: `**Hunting pamphlets** give you tools to attract prey and mask your presence. Essential for legendary animal hunts.`,
      verified: true,
      subItems: [
        { 
          id: 'pamph-cover-scent', 
          text: 'Cover Scent Lotion Pamphlet', 
          tip: '📍 Early game Fence. Mask your scent from animals.',
          tip_detailed: `**Cover Scent Lotion** - animals can't smell you coming.

📍 **Available:** Fence (early game)

📦 **Recipe:** 1 Sage + 1 Oregano

🎯 *Essential for hunting skittish animals like deer and elk.*`,
          reward: '1 Sage + 1 Oregano',
          priority: true,
          verified: true
        },
        { 
          id: 'pamph-potent-predator-bait', 
          text: 'Potent Predator Bait Pamphlet', 
          tip: '📍 Fence. Attracts predators faster.',
          tip_detailed: `**Potent Predator Bait** - draw in cougars, wolves, and bears.

📍 **Available:** Fence

📦 **Recipe:** 2 Meat + 1 Blackberry`,
          reward: '2 Meat + 1 Blackberry',
          verified: true
        },
        { 
          id: 'pamph-potent-herbivore-bait', 
          text: 'Potent Herbivore Bait Pamphlet', 
          tip: '📍 Fence. Attracts herbivores faster.',
          tip_detailed: `**Potent Herbivore Bait** - draw in deer, elk, and bison.

📍 **Available:** Fence

📦 **Recipe:** 2 Berries + 1 Vanilla Flower`,
          reward: '2 Berries + 1 Vanilla Flower',
          verified: true
        },
        { 
          id: 'pamph-special-horse-food', 
          text: 'Special Horse Food Pamphlet', 
          tip: '📍 Fence. Best horse core restoration.',
          tip_detailed: `**Special Horse Food** - the best food for your horse. Full core restoration.

📍 **Available:** Fence

📦 **Recipe:** 1 Big Game Meat + 1 Apple + 1 Hay`,
          reward: '1 Big Game Meat + 1 Apple + 1 Hay',
          verified: true
        }
      ]
    }
  ]
};
