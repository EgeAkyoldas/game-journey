/**
 * Treasure Hunts Section
 * Restructured with subItems for step-by-step tracking
 */

export const treasuresSection = {
  id: 'treasures',
  title: 'II. Treasure Hunts',
  icon: '💎',
  defaultOpen: true,
  items: [
    // ========================================
    // JACK HALL GANG TREASURE
    // ========================================
    {
      id: 'treasure-jack-hall',
      text: 'Jack Hall Gang Treasure',
      tip: 'Reward: 2 Gold Bars ($1000). Required for 100% completion.',
      reward: '2 Gold Bars ($1000)',
      subItems: [
        { 
          id: 'jack-hall-1', 
          text: 'Map 1: Buy from Maximo', 
          tip: 'Treasure hunter NW of Flatneck Station, on ridge overlooking river. Sells for $10 (or $5 if haggle). Can also rob him.'
        },
        { 
          id: 'jack-hall-2', 
          text: "Map 2: Caliban's Seat", 
          tip: "Rock formation south of Valentine. Climb from SE side, follow path along cliff. Map in hollow rock (hole in white granite)."
        },
        { 
          id: 'jack-hall-3', 
          text: 'Map 3: Cotorra Springs', 
          tip: 'West end of springs, circle of rock formations. Search central rock pile. Pearl Necklace bonus.'
        },
        { 
          id: 'jack-hall-final', 
          text: "TREASURE: O'Creagh's Run Island", 
          tip: "Small island in lake. Search rock on SE side of island. 2 GOLD BARS!",
          priority: true
        }
      ]
    },
    // ========================================
    // HIGH STAKES TREASURE
    // ========================================
    {
      id: 'treasure-high-stakes',
      text: 'High Stakes Treasure',
      tip: 'Reward: 3 Gold Bars ($1500). Required for 100% completion.',
      reward: '3 Gold Bars ($1500)',
      subItems: [
        { 
          id: 'high-stakes-1', 
          text: 'Map 1: Save/Rob Stranger', 
          tip: 'Random encounter after Chapter 3 "The New South". Treasure hunter hanging from cliff near Cumberland Falls. Save or loot body.'
        },
        { 
          id: 'high-stakes-2', 
          text: 'Map 2: Cumberland Falls', 
          tip: 'Behind the waterfall! Climb rocks on LEFT side, enter cave behind falls. Chest against wall.'
        },
        { 
          id: 'high-stakes-3', 
          text: 'Map 3: Barrow Lagoon', 
          tip: 'Frozen pond in Ambarino. NE of Mount Hagen. Search under fallen tree on east shore.'
        },
        { 
          id: 'high-stakes-final', 
          text: 'TREASURE: Above Fort Wallace', 
          tip: 'DO NOT enter fort! Cliff ABOVE fort on east side. Jump down carefully. 3 GOLD BARS!',
          priority: true
        }
      ]
    },
    // ========================================
    // POISONOUS TRAIL TREASURE
    // ========================================
    {
      id: 'treasure-poisonous-trail',
      text: 'Poisonous Trail Treasure',
      tip: 'Reward: 4 Gold Bars ($2000). Highest payout! Required for 100% completion.',
      reward: '4 Gold Bars ($2000)',
      subItems: [
        { 
          id: 'poison-1', 
          text: 'Map 1: Cairn Lake Cabin', 
          tip: 'Small frozen lake cabin in Ambarino. Map pinned to wall inside.'
        },
        { 
          id: 'poison-2', 
          text: 'Map 2: Face Rock (Facu Rock)', 
          tip: 'West of Ringneck Creek. Giant face carved in rock. Map in the "mouth" hole at base.'
        },
        { 
          id: 'poison-3', 
          text: 'Map 3: Elysian Pool Cave', 
          tip: 'Cave behind Elysian Pool waterfall! BRING LANTERN. Deep in cave system. Dangerous bats.'
        },
        { 
          id: 'poison-final', 
          text: 'TREASURE: Lighthouse Area', 
          tip: 'North of lighthouse, south of Van Horn. Stone pile near coast. 4 GOLD BARS!',
          priority: true
        }
      ]
    },
    // ========================================
    // LE TRESOR DES MORTS (Special/Ultimate Edition)
    // ========================================
    {
      id: 'treasure-le-tresor',
      text: 'Le Tresor Des Morts',
      tip: '⚠️ Special/Ultimate Edition ONLY. Reward: 6 Gold Bars ($3000)!',
      reward: '6 Gold Bars ($3000)',
      subItems: [
        { 
          id: 'le-tresor-1', 
          text: 'Map 1: Burned Settlement', 
          tip: 'Limpany ruins SW of Horseshoe Overlook. Jailhouse still standing - corpse inside has map.'
        },
        { 
          id: 'le-tresor-2', 
          text: 'Map 2: Saint Denis Docks', 
          tip: 'Cornwall Freight Station underground passage connecting yard to harbor. Check wall near wooden crate.'
        },
        { 
          id: 'le-tresor-final', 
          text: 'TREASURE: Saint Denis Cemetery', 
          tip: 'Mausoleum with stained glass window, west of central dome. Inspect left wall. 6 GOLD BARS!',
          priority: true
        }
      ]
    },
    // ========================================
    // ELEMENTAL TRAIL TREASURE
    // ========================================
    {
      id: 'treasure-elemental',
      text: 'Elemental Trail Treasure',
      tip: 'Tree carvings lead to treasure. Reward: 2 Gold Bars ($1000).',
      reward: '2 Gold Bars ($1000)',
      subItems: [
        { 
          id: 'elemental-1', 
          text: 'Tree 1: Window Rock Area', 
          tip: 'Near Window Rock, look for tree with carved symbol (Earth). Leads to next clue.'
        },
        { 
          id: 'elemental-2', 
          text: 'Tree 2: Elysian Pool Area', 
          tip: 'Another carved tree (Water symbol). Follow the pattern.'
        },
        { 
          id: 'elemental-3', 
          text: 'Tree 3: Fort Brennand Area', 
          tip: 'Third carved tree (Fire symbol). Combines all elements.'
        },
        { 
          id: 'elemental-final', 
          text: 'TREASURE: Mount Shann Sundial', 
          tip: 'Summit of Mount Shann. Behind the sundial stone structure. 2 GOLD BARS!',
          priority: true
        }
      ]
    },
    // ========================================
    // MENDED TREASURE MAP
    // ========================================
    {
      id: 'treasure-mended',
      text: 'Torn (Mended) Treasure Map',
      tip: 'Two hermits have map halves. Reward: Otis Miller Revolver!',
      reward: "Otis Miller's Revolver",
      subItems: [
        { 
          id: 'mended-1', 
          text: 'Map Half 1: Hermit Cabin (Manito Glade)', 
          tip: 'North of Annesburg. Aggressive hermit with shotgun! Check drawer inside cabin.'
        },
        { 
          id: 'mended-2', 
          text: 'Map Half 2: Hermit Woman Cabin', 
          tip: 'NW West Elizabeth, follow Little Creek River. Another hostile hermit. Check inside.'
        },
        { 
          id: 'mended-final', 
          text: 'TREASURE: New Austin (Epilogue)', 
          tip: "⚠️ EPILOGUE ONLY. Cholla Springs area. Otis Miller's Revolver + 5 erotic photos!",
          priority: true,
          chapter: 'epilogue'
        }
      ]
    },
    // ========================================
    // STANDALONE TREASURES
    // ========================================
    {
      id: 'treasure-statues',
      text: 'Strange Statues Puzzle',
      tip: "Cave behind Window Rock. 7 statues with buttons. Press ONLY prime numbers (2, 3, 5, 7). 3 Gold Bars!",
      reward: '3 Gold Bars ($1500)',
      priority: true
    },
    {
      id: 'treasure-train-wreck',
      text: 'Train Wreck Gold Bar',
      tip: 'North of Cotorra Springs, wrecked train in gorge ravine. Lockbox in baggage car.',
      reward: '1 Gold Bar ($500)'
    },
    {
      id: 'treasure-limpany',
      text: 'Limpany Sheriff Office Gold Bar',
      tip: 'Burned town Limpany, SW of Horseshoe Overlook. Sheriff desk lockbox. May respawn!',
      reward: '1 Gold Bar ($500)'
    },
    {
      id: 'treasure-braithwaite',
      text: 'Braithwaite Manor Gold Bar',
      tip: 'After manor burns in Chapter 4. Search ruins carefully. Lockbox in rubble.',
      reward: '1 Gold Bar ($500)',
      chapter: 4
    }
  ]
};
