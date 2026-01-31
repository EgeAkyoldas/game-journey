/**
 * RDR Checklist Data - COMPREHENSIVE Red Dead Redemption 2 Guide
 * All checklist sections organized by category
 * 
 * CONTENT INCLUDES:
 * - All Treasure Hunts (with full solutions)
 * - All Stranger Missions  
 * - All Challenges (10 tiers each)
 * - All Legendary Animals
 * - Camp Upgrades
 * - Collectibles
 * - Missable Content
 * - Weapons & Equipment
 */

export const CHECKLIST_SECTIONS = [
  // ============================================
  // SECTION I: QUICK START (Early Game Essentials)
  // ============================================
  {
    id: 'quickstart',
    title: 'I. Quick Start Guide',
    icon: '⭐',
    defaultOpen: true,
    items: [
      {
        id: 'qs-legendary-buck',
        text: 'Hunt Legendary Buck FIRST',
        tip: 'West of Strawberry. The Buck Antler Trinket increases perfect pelt chances by one star. This changes everything.',
        priority: true
      },
      {
        id: 'qs-limpany-gold',
        text: 'Grab Limpany Gold Bar ($500)',
        tip: "Burned town south of Valentine. Sheriff's desk has a lockbox with gold bar."
      },
      {
        id: 'qs-leather-working',
        text: 'Donate $225 for Leather Working Tools',
        tip: 'Camp ledger. Required to craft satchels at Pearson. Do this ASAP.'
      },
      {
        id: 'qs-varmint-rifle',
        text: 'Buy Varmint Rifle ($72)',
        tip: 'Essential for perfect small animal pelts. Available at any Gunsmith.'
      },
      {
        id: 'qs-arthur-lodgings',
        text: 'Upgrade Arthur\'s Lodgings ($325)',
        tip: 'Unlocks Fast Travel from camp. Huge quality of life improvement.'
      },
      {
        id: 'qs-horse-station',
        text: 'Unlock Horse Station ($300)',
        tip: 'Access all your stabled horses from camp.'
      },
      {
        id: 'qs-schofield',
        text: 'Steal Schofield Revolver (Free)',
        tip: 'Valentine Doctor side business. Best early revolver.'
      },
      {
        id: 'qs-lancaster',
        text: 'Steal Lancaster Repeater (Free)',
        tip: 'Rhodes Gunsmith basement. Free the prisoner for this excellent repeater.'
      }
    ]
  },

  // ============================================
  // SECTION II: ALL TREASURE HUNTS
  // ============================================
  {
    id: 'treasures',
    title: 'II. Treasure Hunts',
    icon: '💎',
    defaultOpen: true,
    items: [
      // JACK HALL GANG
      {
        id: 'treasure-jack-hall-start',
        text: 'Jack Hall Gang: Get Map from Maximo',
        tip: 'Random encounter west of Flatneck Station. He sells it for $10.'
      },
      {
        id: 'treasure-jack-hall-1',
        text: 'Jack Hall Gang Map 1: Caliban\'s Seat',
        tip: 'Tall rock formation east of Valentine. Climb up, find hollow rock on north side. Map 2 inside.'
      },
      {
        id: 'treasure-jack-hall-2',
        text: 'Jack Hall Gang Map 2: Cotorra Springs',
        tip: 'Geyser area. Look at the map drawing - find matching rock formation. Hollow rock near geyser. Map 3 inside.'
      },
      {
        id: 'treasure-jack-hall-3',
        text: 'Jack Hall Gang Map 3: O\'Creagh\'s Run',
        tip: 'Small island in the lake. DIVE UNDERWATER near the big rock. 2 Gold Bars ($1000).',
        priority: true
      },
      // HIGH STAKES
      {
        id: 'treasure-high-stakes-start',
        text: 'High Stakes: Find the Stranger',
        tip: 'Random encounter on a cliff edge. Save him or loot his body for Map 1.'
      },
      {
        id: 'treasure-high-stakes-1',
        text: 'High Stakes Map 1: Cumberland Falls',
        tip: 'Behind the waterfall. Climb rocks to the left of the falls, drop down behind. Map 2 in a chest.'
      },
      {
        id: 'treasure-high-stakes-2',
        text: 'High Stakes Map 2: Barrow Lagoon',
        tip: 'Frozen pond in Ambarino. Stand on ice, look at east shore. Treasure under a fallen tree.'
      },
      {
        id: 'treasure-high-stakes-3',
        text: 'High Stakes Map 3: Fort Wallace',
        tip: 'DO NOT enter the fort. Treasure is on the cliff ABOVE it, east side. 3 Gold Bars ($1500).',
        priority: true
      },
      // POISONOUS TRAIL
      {
        id: 'treasure-poison-start',
        text: 'Poisonous Trail: Cairn Lake Drawing',
        tip: 'Cairn Lodge (frozen lake in Ambarino). Map 1 is pinned to the wall inside.'
      },
      {
        id: 'treasure-poison-1',
        text: 'Poisonous Trail Map 1: Face in Rock',
        tip: 'Northwest of Van Horn. Giant face carved in rock. Map is in the mouth hole.'
      },
      {
        id: 'treasure-poison-2',
        text: 'Poisonous Trail Map 2: Elysian Pool Cave',
        tip: 'Enter the cave behind Elysian Pool waterfall. Bring a lantern. Go deep. Map in the cave system.'
      },
      {
        id: 'treasure-poison-3',
        text: 'Poisonous Trail Map 3: Beneath Van Horn',
        tip: 'Lighthouse area. Look for stone pile near the coast south of Van Horn. 4 Gold Bars ($2000).',
        priority: true
      },
      // LE TRESOR DES MORTS
      {
        id: 'treasure-le-tresor-start',
        text: 'Le Tresor Des Morts: Graveyard Clue',
        tip: 'Random encounter at any graveyard. Find crying old woman, look at grave she visits.'
      },
      {
        id: 'treasure-le-tresor-1',
        text: 'Le Tresor Map 1: Bolger Glade Cemetery',
        tip: 'Graveyard south of Rhodes. Match grave symbols on the map. Dig at highlighted grave.'
      },
      {
        id: 'treasure-le-tresor-2',
        text: 'Le Tresor Map 2: Old Saint Denis Cemetery',
        tip: 'Massive graveyard in Saint Denis. Match the cross pattern. Hard to find, bring patience.'
      },
      {
        id: 'treasure-le-tresor-3',
        text: 'Le Tresor Final: Secret Island',
        tip: 'Tiny island offshore near Saint Denis. Row a boat. 2 Gold Bars ($1000).'
      },
      // ELEMENTAL TRAIL (from trees)
      {
        id: 'treasure-elemental-start',
        text: 'Elemental Trail: Find Tree Maps',
        tip: 'Look for special tree markings: Window Rock, Elysian Pool, Fort Brennand areas.'
      },
      {
        id: 'treasure-elemental-1',
        text: 'Elemental Trail: Complete All 3 Tree Clues',
        tip: 'Earth, Wind, Fire symbols carved in trees. Each leads to next.'
      },
      {
        id: 'treasure-elemental-final',
        text: 'Elemental Trail: Final Treasure',
        tip: 'Mount Shann summit. Behind the sundial. 2 Gold Bars ($1000).'
      },
      // STRANGE STATUES PUZZLE
      {
        id: 'treasure-statues',
        text: 'Strange Statues Puzzle',
        tip: 'Cave behind Window Rock. 7 statues, buttons = prime numbers (2,3,5,7). Press those statues\' buttons. 3 Gold Bars ($1500)!',
        priority: true
      },
      // TRAIN WRECK
      {
        id: 'treasure-train-wreck',
        text: 'Train Wreck Gold Bar',
        tip: 'North of Cotorra Springs, wrecked train in the gorge ravine. Lockbox in baggage car. 1 Gold Bar ($500).'
      }
    ]
  },

  // ============================================
  // SECTION III: STRANGER MISSIONS (All of them)
  // ============================================
  {
    id: 'strangers',
    title: 'III. Stranger Missions',
    icon: '❓',
    defaultOpen: false,
    items: [
      // CHAPTER 2 STRANGERS
      {
        id: 'stranger-gunslingers',
        text: 'The Noblest of Men, and a Woman (Gunslingers)',
        tip: 'Valentine Saloon. 5-part chain: Find all 4 gunslingers for Jim "Boy" Calloway. Get unique revolvers!',
        chapter: 2
      },
      {
        id: 'stranger-gunslinger-billy',
        text: '→ Kill Billy Midnight (Train)',
        tip: 'Boards train at Rhodes station. Duel him. Get Midnight\'s Pistol.'
      },
      {
        id: 'stranger-gunslinger-emmet',
        text: '→ Kill Emmet Granger (Pig Farm)',
        tip: 'South Scarlett Meadows. Works at his farm. Duel him. Get Granger\'s Revolver.'
      },
      {
        id: 'stranger-gunslinger-flaco',
        text: '→ Kill Flaco Hernandez (Mountains)',
        tip: 'Cairn Lake cabin in Ambarino. Fight through his gang. Duel him. Get Flaco\'s Revolver.'
      },
      {
        id: 'stranger-gunslinger-black-belle',
        text: '→ Help Black Belle (Bluewater Marsh)',
        tip: 'Only gunslinger who doesn\'t want to fight. Help her defeat bounty hunters instead.'
      },
      {
        id: 'stranger-gunslinger-final',
        text: '→ Return to Jim Boy Calloway (Final)',
        tip: 'Back in Valentine. Duel him if you want, or spare him. Get Calloway\'s Revolver if you kill him.',
        missable: true
      },
      {
        id: 'stranger-dinosaur-bones',
        text: 'A Test of Faith (Dinosaur Bones)',
        tip: 'Deborah MacGuiness near Horseshoe Overlook. Find all 30 dinosaur bones across the map.',
        chapter: 2
      },
      {
        id: 'stranger-dreamcatchers',
        text: 'Duchesses and Other Animals',
        tip: 'Algernon Wasp in Saint Denis. Collect orchids and exotic items. 5 parts, very grindy.',
        chapter: 4
      },
      {
        id: 'stranger-rock-carvings',
        text: 'Geology for Beginners (Rock Carvings)',
        tip: 'Find Francis Sinclair. Collect 10 rock carvings. Strange time travel mystery.',
        chapter: 2
      },
      {
        id: 'stranger-hunting-requests',
        text: 'Hunting Requests (5 Parts)',
        tip: 'Train station clerk. Hunt specific perfect small game. Very tedious but completionist.',
        chapter: 2
      },
      {
        id: 'stranger-exotics',
        text: 'Exotics Collector',
        tip: 'Find plumes and orchids for Algernon. Pair with Dreamcatchers mission.',
        chapter: 4
      },
      {
        id: 'stranger-veteran',
        text: 'The Veteran (4 Parts)',
        tip: 'Hamish Sinclair at O\'Creagh\'s Run. Beautiful friendship storyline. Get Buell the horse.',
        chapter: 6,
        missable: true
      },
      {
        id: 'stranger-widow',
        text: 'The Widow (Charlotte Balfour)',
        tip: 'North of Annesburg. Teach her to survive. 3 parts. One of the best side stories.',
        chapter: 6,
        missable: true
      },
      {
        id: 'stranger-albert-mason',
        text: 'Photographer (Albert Mason)',
        tip: 'Find him photographing wildlife. Help him 4 times. Wolves, horses, gators, etc.',
        chapter: 2
      },
      {
        id: 'stranger-mary-linton',
        text: 'Mary Linton (3 Parts)',
        tip: 'Arthur\'s ex-love. Chapters 2, 4, 6. Emotional storyline.',
        chapter: 2,
        missable: true
      },
      {
        id: 'stranger-brother-dorkins',
        text: 'Brother Dorkins (Monks)',
        tip: 'Help monks near Rhodes. Honor rewards. 2 parts.',
        chapter: 4
      },
      {
        id: 'stranger-debt-collection',
        text: 'Money Lending (Strauss Debts)',
        tip: 'Leopold Strauss at camp. Unlocks over chapters. Some are important to the story.',
        chapter: 2
      },
      {
        id: 'stranger-circus-animals',
        text: 'He\'s British, Of Course',
        tip: 'Find escaped circus animals (lion, zebra, tiger). Fun encounters around Emerald Ranch.',
        chapter: 2
      },
      {
        id: 'stranger-penelope-beau',
        text: 'The Course of True Love',
        tip: 'Beau and Penelope star-crossed lovers. Rhodes area. 5 parts across chapters.',
        chapter: 3
      },
      {
        id: 'stranger-gavin',
        text: 'Where is Gavin?',
        tip: 'Nigel keeps asking for his lost friend Gavin. He appears throughout the map. Mystery never solved.',
        chapter: 2
      },
      {
        id: 'stranger-timberland',
        text: 'The Ties That Bind Us',
        tip: 'Free chain gang prisoners twice. Near Rhodes initially.',
        chapter: 3
      },
      {
        id: 'stranger-arcadia',
        text: 'Arcadia for Amateurs',
        tip: 'Help photographer Albert Mason. 3 encounters photographing wildlife.',
        chapter: 2
      },
      {
        id: 'stranger-civil-war',
        text: 'The Iniquities of History',
        tip: 'Help former slave Jeremiah Compson. Dark story about a Confederate officer.',
        chapter: 6
      },
      {
        id: 'stranger-charles-chatenay',
        text: 'A Bright Bouncing Boy',
        tip: 'Charles Châtenay, eccentric French artist in Saint Denis. Very funny missions.',
        chapter: 4
      },
      {
        id: 'stranger-evelyn-miller',
        text: 'The American Inferno, Burnt Out',
        tip: 'Famous author Evelyn Miller. Start with Marko Dragic questline (robot).',
        chapter: 4
      },
      {
        id: 'stranger-marko-dragic',
        text: 'A Bright Bouncing Boy (Robot)',
        tip: 'Marko Dragic, mad scientist. Help build a robot! Saint Denis and Doverhill.',
        chapter: 4
      },
      {
        id: 'stranger-prison-break',
        text: 'A Fine Night for It',
        tip: 'Rhodes area after dark. Help a sheriff or criminals. Random encounter.',
        chapter: 3
      }
    ]
  },

  // ============================================
  // SECTION IV: LEGENDARY ANIMALS (Full Guide)
  // ============================================
  {
    id: 'legendary-animals',
    title: 'IV. Legendary Animals',
    icon: '🦌',
    defaultOpen: false,
    items: [
      {
        id: 'legendary-buck',
        text: 'Legendary Buck',
        tip: 'HUNT FIRST! West of Strawberry. Creates Buck Antler Trinket at Fence = better pelts.',
        priority: true
      },
      {
        id: 'legendary-bear',
        text: 'Legendary Grizzly Bear',
        tip: 'Story mission with Hosea ("Exit Pursued by a Bruised Ego"). Automatic encounter.'
      },
      {
        id: 'legendary-wolf',
        text: 'Legendary Wolf',
        tip: 'Cotorra Springs geyser area. Best approached at dawn. Very aggressive.'
      },
      {
        id: 'legendary-white-bison',
        text: 'Legendary White Bison',
        tip: 'Lake Isabella, northwest corner of the map near Mount Hagen. Snowy terrain - dress warm!',
        priority: true
      },
      {
        id: 'legendary-boar',
        text: 'Legendary Boar',
        tip: 'Bluewater Marsh, northwest of Saint Denis. Watch for gators too.'
      },
      {
        id: 'legendary-fox',
        text: 'Legendary Fox',
        tip: 'North of Strawberry in the forest. Small and fast. Use Dead Eye.'
      },
      {
        id: 'legendary-beaver',
        text: 'Legendary Beaver',
        tip: 'Elysian Pool area, southwest of Van Horn. Near the water.'
      },
      {
        id: 'legendary-ram',
        text: 'Legendary Ram',
        tip: 'Cattail Pond area, northwest of Valentine. Mountain terrain.'
      },
      {
        id: 'legendary-elk',
        text: 'Legendary Elk',
        tip: 'East of Bacchus Station, Cumberland Forest. Near Fort Wallace.'
      },
      {
        id: 'legendary-coyote',
        text: 'Legendary Coyote',
        tip: 'Scarlett Meadows, northwest of Rhodes. Grassland area.'
      },
      {
        id: 'legendary-moose',
        text: 'Legendary Moose',
        tip: 'Roanoke Ridge, northeast corner near Brandywine Drop. RARE SPAWN. Camp nearby and sleep.'
      },
      {
        id: 'legendary-alligator',
        text: 'Legendary Alligator (Bullgator)',
        tip: 'Lakay, Bayou Nwa. ONLY appears after Chapter 4. Very tough fight.',
        chapter: 4
      },
      {
        id: 'legendary-panther',
        text: 'Legendary Panther (Giaguaro)',
        tip: 'Bolger Glade, south of Braithwaite Manor. REQUIRES 5 Master Hunter challenges completed first.',
        priority: true
      },
      // NEW AUSTIN (Epilogue Only)
      {
        id: 'legendary-cougar',
        text: 'Legendary Cougar',
        tip: 'Gaptooth Ridge, New Austin. EPILOGUE ONLY. Very dangerous.',
        chapter: 'epilogue'
      },
      {
        id: 'legendary-pronghorn',
        text: 'Legendary Pronghorn',
        tip: 'Rio Bravo, New Austin. EPILOGUE ONLY.',
        chapter: 'epilogue'
      },
      {
        id: 'legendary-bison',
        text: 'Legendary Tatanka Bison',
        tip: 'Hennigan\'s Stead, New Austin. EPILOGUE ONLY.',
        chapter: 'epilogue'
      },
      // LEGENDARY FISH
      {
        id: 'legendary-fish-start',
        text: '🐟 Get Special Lures First',
        tip: 'Complete "A Fisher of Fish" stranger mission (Jeremy Gill). Buy Special Lake/River/Swamp Lures.'
      },
      {
        id: 'legendary-bluegill',
        text: '🐟 Legendary Bluegill',
        tip: 'Flat Iron Lake, near Rhodes. Use Special Lake Lure.'
      },
      {
        id: 'legendary-largemouth',
        text: '🐟 Legendary Largemouth Bass',
        tip: 'San Luis River. Special Lake Lure.'
      },
      {
        id: 'legendary-perch',
        text: '🐟 Legendary Perch',
        tip: 'Elysian Pool. Special Lake Lure.'
      },
      {
        id: 'legendary-chain-pickerel',
        text: '🐟 Legendary Chain Pickerel',
        tip: 'Dakota River (Valentine area). Special River Lure.'
      },
      {
        id: 'legendary-muskie',
        text: '🐟 Legendary Muskie',
        tip: 'O\'Creagh\'s Run. Same lake as the gold bar treasure. Special Lake Lure.'
      },
      {
        id: 'legendary-channel-catfish',
        text: '🐟 Legendary Channel Catfish',
        tip: 'Sisika Penitentiary area. Special River Lure. Epilogue easier.'
      }
    ]
  },

  // ============================================
  // SECTION V: FREE WEAPONS (No Purchase Required)
  // ============================================
  {
    id: 'weapons',
    title: 'V. Free Weapons & Equipment',
    icon: '🔫',
    defaultOpen: false,
    items: [
      {
        id: 'weapon-schofield',
        text: 'Schofield Revolver',
        tip: 'Valentine Doctor. Rob the back room (O\'Driscoll side business). In the chest.'
      },
      {
        id: 'weapon-lancaster',
        text: 'Lancaster Repeater',
        tip: 'Rhodes Gunsmith. Look in window, see prisoner. Rob the shop, rescue him, take the repeater.'
      },
      {
        id: 'weapon-semi-auto',
        text: 'Semi-Auto Shotgun',
        tip: 'Watson\'s Cabin (north of Strawberry). Kill the old woman, basement is unlocked. Shotgun inside.'
      },
      {
        id: 'weapon-pump-shotgun',
        text: 'Pump Shotgun',
        tip: 'Story mission "Paying a Social Call" (Chapter 2). Automatically obtained.'
      },
      {
        id: 'weapon-bolt-action',
        text: 'Bolt Action Rifle',
        tip: 'Mission "The First Shall Be Last". Kill the LEFT bounty hunter fast to loot his rifle.',
        missable: true,
        chapter: 2
      },
      {
        id: 'weapon-rare-shotgun',
        text: 'Rare Shotgun (Unique)',
        tip: 'Hermit at Manito Glade (north of Annesburg). He\'ll shoot on sight. Kill him, take it.'
      },
      {
        id: 'weapon-midnight-pistol',
        text: 'Midnight\'s Pistol (Unique)',
        tip: 'Kill Billy Midnight in Gunslinger quest. Train duel. Beautiful engraved pistol.'
      },
      {
        id: 'weapon-granger-revolver',
        text: 'Granger\'s Revolver (Unique)',
        tip: 'Kill Emmet Granger in Gunslinger quest. Pig farm south of Scarlett Meadows.'
      },
      {
        id: 'weapon-flaco-revolver',
        text: 'Flaco\'s Revolver (Unique)',
        tip: 'Kill Flaco Hernandez in Gunslinger quest. Mountain cabin near Cairn Lake.'
      },
      {
        id: 'weapon-otis-miller',
        text: 'Otis Miller\'s Revolver (Unique)',
        tip: 'Rattlesnake Hollow cave, New Austin. Find his body. EPILOGUE ONLY.',
        chapter: 'epilogue'
      },
      {
        id: 'weapon-viking-hatchet',
        text: 'Viking Hatchet (Unique)',
        tip: 'Old Tomb north of Annesburg. Enter, find skeleton holding it. Cool design.'
      },
      {
        id: 'weapon-ancient-tomahawk',
        text: 'Ancient Tomahawk',
        tip: 'Calumet Ravine. Stuck in a target on a tree. Near Wapiti Reservation.'
      },
      {
        id: 'weapon-rusted-hunter',
        text: 'Rusted Hunter Hatchet',
        tip: 'West of Window Rock. Near some ruined structures.'
      },
      {
        id: 'weapon-broken-pirate-sword',
        text: 'Broken Pirate Sword',
        tip: 'Saint Denis. Pirate hidden in a shipwreck on an island east of the city.'
      },
      {
        id: 'weapon-civil-war-knife',
        text: 'Civil War Knife',
        tip: 'Fort Brennand ruins, east of Van Horn. Inside the fort on a body.'
      },
      {
        id: 'weapon-jawbone-knife',
        text: 'Jawbone Knife (Unique)',
        tip: 'Reward for finding all dinosaur bones. Given by Deborah MacGuiness.'
      }
    ]
  },

  // ============================================
  // SECTION VI: LEGEND OF THE EAST SATCHEL
  // ============================================
  {
    id: 'satchel',
    title: 'VI. Satchel Upgrades',
    icon: '🎒',
    defaultOpen: false,
    items: [
      {
        id: 'satchel-prerequisite',
        text: 'PREREQUISITE: Donate for Leather Working Tools',
        tip: 'Camp ledger, $225. Without this, Pearson cannot craft satchels.'
      },
      {
        id: 'satchel-trinket',
        text: 'RECOMMENDED: Buck Antler Trinket',
        tip: 'Hunt Legendary Buck first. Sell antlers to Fence. Increases pelt quality.'
      },
      {
        id: 'satchel-tonics',
        text: 'Tonics Satchel',
        tip: '1x Perfect Deer Pelt, 1x Perfect Buck Pelt, 1x Perfect Elk Pelt. Holds 99 tonics.'
      },
      {
        id: 'satchel-ingredients',
        text: 'Ingredients Satchel',
        tip: '1x Perfect Deer, 1x Perfect Badger, 1x Perfect Squirrel. Varmint Rifle for small animals.'
      },
      {
        id: 'satchel-kit',
        text: 'Kit Satchel',
        tip: '1x Perfect Deer, 1x Perfect Elk, 1x Perfect Panther. Panthers = night, Braithwaite Manor area.'
      },
      {
        id: 'satchel-provisions',
        text: 'Provisions Satchel',
        tip: '1x Perfect Deer, 1x Perfect Bison, 1x Perfect Raccoon. Raccoons near rivers at night.'
      },
      {
        id: 'satchel-materials',
        text: 'Materials Satchel',
        tip: '1x Perfect Deer, 1x Perfect Boar, 1x Perfect Iguana. Iguanas on Guarma... or Flat Iron Lake islands.'
      },
      {
        id: 'satchel-valuables',
        text: 'Valuables Satchel',
        tip: '1x Perfect Deer, 1x Perfect Beaver, 1x Perfect Rabbit. Easy pelts.'
      },
      {
        id: 'satchel-legend',
        text: 'Legend of the East Satchel',
        tip: 'CRAFT ALL ABOVE + 1x Perfect Cougar + 1x Perfect Wolf. 99 slots for EVERYTHING.',
        priority: true
      }
    ]
  },

  // ============================================
  // SECTION VII: CAMP UPGRADES (Full List)
  // ============================================
  {
    id: 'camp',
    title: 'VII. Camp Upgrades',
    icon: '⛺',
    defaultOpen: false,
    items: [
      {
        id: 'camp-lodging-arthur',
        text: 'Arthur\'s Lodging ($325)',
        tip: 'Unlocks FAST TRAVEL from map near bed. Must-have quality of life.'
      },
      {
        id: 'camp-leather-tools',
        text: 'Leather Working Tools ($225)',
        tip: 'Allows Pearson to craft satchels. Essential for Legend of the East.'
      },
      {
        id: 'camp-horse-station',
        text: 'Horse Station ($300)',
        tip: 'Hitching post near scout fire. Access all stabled horses from camp.'
      },
      {
        id: 'camp-lodging-dutch',
        text: 'Dutch\'s Lodging ($175)',
        tip: 'Upgrades Dutch\'s tent. He appreciates it. Small morale boost.'
      },
      {
        id: 'camp-provisions',
        text: 'First Camp Upgrade ($45)',
        tip: 'Basic provisions. Auto-purchased early.'
      },
      {
        id: 'camp-chicken-coop',
        text: 'Chicken Coop ($175)',
        tip: 'Provides eggs. Minor food contribution.'
      },
      {
        id: 'camp-boat',
        text: 'Camp Boat/Canoe ($400)',
        tip: 'Small boat for fishing. Clemens Point camp only.'
      },
      {
        id: 'camp-ammo',
        text: 'Ammunition Wagon',
        tip: 'Requires large donations. Provides free ammo at camp.'
      },
      {
        id: 'camp-medical',
        text: 'Medical Wagon',
        tip: 'Requires large donations. Provides medical supplies at camp.'
      }
    ]
  },

  // ============================================
  // SECTION VIII: BANDIT CHALLENGES
  // ============================================
  {
    id: 'bandit',
    title: 'VIII. Bandit Challenges',
    icon: '🏴‍☠️',
    defaultOpen: false,
    items: [
      { id: 'bandit-1', text: 'Rank 1: Hold up 5 Townsfolk', tip: 'Aim weapon at civilians in town, demand money.' },
      { id: 'bandit-2', text: 'Rank 2: Rob 2 Coaches or Coach Missions', tip: 'Road coaches or coach robbery missions from Alden/Hector.' },
      { id: 'bandit-3', text: 'Rank 3: Rob 4 Registers in 1 Day', tip: 'Valentine, Strawberry, Rhodes, Saint Denis. Ride fast between them.' },
      { id: 'bandit-4', text: 'Rank 4: Rob 3 Coaches in 1 Day', tip: 'Camp near roads with coach spawns. Fast horse helps.' },
      { id: 'bandit-5', text: 'Rank 5: Amass $250 Bounty (Any State)', tip: 'Kill lawmen in one state. Pay it off after.' },
      { id: 'bandit-6', text: 'Rank 6: Steal 5 Horses, Sell to Fence', tip: 'Clemens Cove horse fence (Ch3+). Steal good horses.' },
      { id: 'bandit-7', text: 'Rank 7: Rob $50 From Townsfolk', tip: 'Hold up wealthy NPCs in Saint Denis. They carry more.' },
      { id: 'bandit-8', text: 'Rank 8: Steal 7 Wagons, Sell to Fence', tip: 'Sell to Emerald Ranch wagon fence. Any covered wagon works.' },
      { id: 'bandit-9', text: 'Rank 9: Hogtie 3 People to Train Tracks', tip: 'Hogtie, place on tracks, wait for train. Very dishonorable.' },
      { id: 'bandit-10', text: 'Rank 10: Complete 5 Train Robberies', tip: 'Without dying or being caught. Stop trains in tunnels.' }
    ]
  },

  // ============================================
  // SECTION IX: EXPLORER CHALLENGES
  // ============================================
  {
    id: 'explorer',
    title: 'IX. Explorer Challenges',
    icon: '🗺️',
    defaultOpen: false,
    items: [
      { id: 'explorer-1', text: 'Rank 1: Find Any Treasure Map', tip: 'Buy from Maximo, get from gang hideout, etc.' },
      { id: 'explorer-2', text: 'Rank 2: Find 1 Treasure Stash', tip: 'Complete any treasure hunt chain.' },
      { id: 'explorer-3', text: 'Rank 3: Find 2 Treasure Stashes', tip: 'Jack Hall Gang + High Stakes recommended.' },
      { id: 'explorer-4', text: 'Rank 4: Find 3 Treasure Stashes', tip: 'Add Poisonous Trail.' },
      { id: 'explorer-5', text: 'Rank 5: Find 4 Treasure Stashes', tip: 'Add Le Tresor Des Morts.' },
      { id: 'explorer-6', text: 'Rank 6: Find 5 Treasure Stashes', tip: 'All major treasure hunts complete.' },
      { id: 'explorer-7', text: 'Rank 7: Discover 10 Points of Interest', tip: 'Unique locations shown in journal when found.' },
      { id: 'explorer-8', text: 'Rank 8: Discover 15 Points of Interest', tip: 'Explore Ambarino and Lemoyne thoroughly.' },
      { id: 'explorer-9', text: 'Rank 9: Discover 20 Points of Interest', tip: 'Use online map guides for remaining ones.' },
      { id: 'explorer-10', text: 'Rank 10: Discover 25+ Points of Interest', tip: 'Full world exploration required.' }
    ]
  },

  // ============================================
  // SECTION X: MASTER HUNTER CHALLENGES
  // ============================================
  {
    id: 'hunter',
    title: 'X. Master Hunter Challenges',
    icon: '🏹',
    defaultOpen: false,
    items: [
      { id: 'hunter-1', text: 'Rank 1: Skin 3 Deer', tip: 'Very easy. Heartlands is full of deer.' },
      { id: 'hunter-2', text: 'Rank 2: 3 Perfect Rabbit Pelts', tip: 'VARMINT RIFLE headshots only. Small game arrows work too.' },
      { id: 'hunter-3', text: 'Rank 3: Track 10 Animal Species', tip: 'Study with binoculars, then follow tracks. Various biomes.' },
      { id: 'hunter-4', text: 'Rank 4: Call Animal and Kill It (5x)', tip: 'Aim, press R1/RB to call, wait, headshot when it looks.' },
      { id: 'hunter-5', text: 'Rank 5: Skin 3 Bears', tip: 'Black Bears (common) or Grizzlies. North of Strawberry.' },
      { id: 'hunter-6', text: 'Rank 6: Kill 5 Cougars with Bow', tip: 'Poison arrows recommended. West of Owanjila, night. Save often.' },
      { id: 'hunter-7', text: 'Rank 7: Use Bait to Kill Predator AND Herbivore', tip: 'Potent bait types. Place, hide, wait, shoot.' },
      { id: 'hunter-8', text: 'Rank 8: Catch 3 Fish Without Fishing Rod', tip: 'Dynamite, poison arrows, or bow in shallow water.' },
      { id: 'hunter-9', text: 'Rank 9: Kill Opossum Playing Dead', tip: 'They fake death when you approach. Wait for it, then shoot.' },
      { id: 'hunter-10', text: 'Rank 10: Hunt Legendary Panther (Giaguaro)', tip: 'This challenge UNLOCKS the Legendary Panther. Bolger Glade, dangerous.' }
    ]
  },

  // ============================================
  // SECTION XI: HERBALIST CHALLENGES
  // ============================================
  {
    id: 'herbalist',
    title: 'XI. Herbalist Challenges',
    icon: '🌿',
    defaultOpen: false,
    items: [
      { id: 'herbalist-1', text: 'Rank 1: Pick 6 Yarrow', tip: 'Yellow flowers. Heartlands grasslands, very common.' },
      { id: 'herbalist-2', text: 'Rank 2: Eat 4 Berry Types', tip: 'Raspberry, Blackberry, Wintergreen, Evergreen. Just eat them.' },
      { id: 'herbalist-3', text: 'Rank 3: Craft 7 Sage-Based Items', tip: 'Potent Bitters or Seasoned Meat. Sage is common.' },
      { id: 'herbalist-4', text: 'Rank 4: Feed Horse 5 Mushrooms', tip: 'Any mushroom type. Open satchel, select mushroom, feed option.' },
      { id: 'herbalist-5', text: 'Rank 5: Craft 9 Indian Tobacco Items', tip: 'Snake Oil ingredients. Indian Tobacco near rivers.' },
      { id: 'herbalist-6', text: 'Rank 6: Collect 15 Plant Species', tip: 'Explore different biomes. Desert plants in New Austin later.' },
      { id: 'herbalist-7', text: 'Rank 7: Craft 5 Special Miracle Tonics', tip: 'High-tier recipes. Buy pamphlets from Fence.' },
      { id: 'herbalist-8', text: 'Rank 8: Craft 6 Poison Weapons (Oleander)', tip: 'Poison arrows/throwing knives. Oleander grows in Bayou.' },
      { id: 'herbalist-9', text: 'Rank 9: Pick All 43 Plant Species', tip: 'REQUIRES NEW AUSTIN! Epilogue normally. Desert cactus etc.', chapter: 'epilogue' },
      { id: 'herbalist-10', text: 'Rank 10: Season and Cook 11 Meat Types', tip: 'All meat types with oregano/thyme/mint. SEASONED versions count.' }
    ]
  },

  // ============================================
  // SECTION XII: SHARPSHOOTER CHALLENGES
  // ============================================
  {
    id: 'sharpshooter',
    title: 'XII. Sharpshooter Challenges',
    icon: '🎯',
    defaultOpen: false,
    items: [
      { id: 'sharp-1', text: 'Rank 1: Kill 3 Flying Birds', tip: 'Shotgun makes this easy. Ducks, crows, any birds.' },
      { id: 'sharp-2', text: 'Rank 2: Kill 2 Species in 1 Dead Eye', tip: 'Deer + coyote or bird + rabbit. Tag both, execute.' },
      { id: 'sharp-3', text: 'Rank 3: Kill 5 Birds from Moving Train', tip: 'Ride on roof. Shotgun or repeater. Plenty of birds fly by.' },
      { id: 'sharp-4', text: 'Rank 4: Kill Enemy from 80ft (Tomahawk)', tip: 'Homing Tomahawk on stationary target. Gang hideout.' },
      { id: 'sharp-5', text: 'Rank 5: Kill 6 Animals (No Reload/Switch)', tip: 'Varmint rifle, field of rabbits. Or bow in deer area.' },
      { id: 'sharp-6', text: 'Rank 6: Kill Enemy from 660ft+', tip: 'Carcano Rifle + long scope. Find long sightline, any camp.' },
      { id: 'sharp-7', text: 'Rank 7: Get 7 Headshots in a Row', tip: 'Dead Eye + gang hideout. Easy with practice.' },
      { id: 'sharp-8', text: 'Rank 8: Disarm 3 Enemies (No Reload)', tip: 'Aim for gun hand in Dead Eye. Need precise aim.' },
      { id: 'sharp-9', text: 'Rank 9: Shoot 3 Hats Off (Same Dead Eye)', tip: 'Tag 3 heads high, don\'t kill. Town works well.' },
      { id: 'sharp-10', text: 'Rank 10: 3 Birds with 3 Consecutive Rifle Shots', tip: 'Long scoped rifle. Wait for birds to bunch up in air.' }
    ]
  },

  // ============================================
  // SECTION XIII: HORSEMAN CHALLENGES
  // ============================================
  {
    id: 'horseman',
    title: 'XIII. Horseman Challenges',
    icon: '🐎',
    defaultOpen: false,
    items: [
      { id: 'horseman-1', text: 'Rank 1: Kill 5 Rabbits from Horseback', tip: 'Trample them or shoot. Fields near Valentine.' },
      { id: 'horseman-2', text: 'Rank 2: Jump 3 Obstacles in 15 Seconds', tip: 'Find fence line, jump three times quickly.' },
      { id: 'horseman-3', text: 'Rank 3: Valentine to Rhodes Under 5 Min', tip: 'Horse Stimulants. Take direct road. Fast horse.' },
      { id: 'horseman-4', text: 'Rank 4: Drag Victim 3300 Feet', tip: 'Lasso someone, drag them while riding in big circles.' },
      { id: 'horseman-5', text: 'Rank 5: Trample 5 Animals', tip: 'Gallop through rabbit/squirrel fields.' },
      { id: 'horseman-6', text: 'Rank 6: Strawberry to Saint Denis (No Water)', tip: 'Under 9 minutes. Long detour around rivers. Use bridges.' },
      { id: 'horseman-7', text: 'Rank 7: Kill 7 Enemies from Horseback', tip: 'Don\'t dismount. Gang hideout. Any weapon works.' },
      { id: 'horseman-8', text: 'Rank 8: Kill 9 Predators from Horseback', tip: 'Wolves, cougars, bears. Use rifle from saddle.' },
      { id: 'horseman-9', text: 'Rank 9: Van Horn to Blackwater (No Water)', tip: 'Under 17 min. REQUIRES EPILOGUE. Long detour.', chapter: 'epilogue' },
      { id: 'horseman-10', text: 'Rank 10: Break Every Wild Horse Breed', tip: 'Mustang, Nokota, American Paint, Hungarian, Morgan.' }
    ]
  },

  // ============================================
  // SECTION XIV: SURVIVALIST CHALLENGES
  // ============================================
  {
    id: 'survivalist',
    title: 'XIV. Survivalist Challenges',
    icon: '⛺',
    defaultOpen: false,
    items: [
      { id: 'survivalist-1', text: 'Rank 1: Catch 3 Bluegill', tip: 'Common fish. Any lake with bread/cheese bait.' },
      { id: 'survivalist-2', text: 'Rank 2: Donate 5 Animals to Camp/Trapper', tip: 'Hand in carcasses or pelts at camp or Trapper.' },
      { id: 'survivalist-3', text: 'Rank 3: Kill 5 Animals with Varmint Rifle', tip: 'Rabbits, squirrels, birds. Easy headshots.' },
      { id: 'survivalist-4', text: 'Rank 4: Craft All Arrow Types', tip: 'Dynamite, Fire, Poison, Improved, Small Game. Buy pamphlets.' },
      { id: 'survivalist-5', text: 'Rank 5: Catch Fish from Boat + Railroad Tracks', tip: 'Bayou riverboat, then stand on railroad over water. Unique locations.' },
      { id: 'survivalist-6', text: 'Rank 6: Kill Scavenging Animal 5 Times', tip: 'Kill coyote/vulture while it\'s eating a corpse.' },
      { id: 'survivalist-7', text: 'Rank 7: 8 Small Game Kills (Small Game Arrows)', tip: 'Consecutive kills. Rabbits/squirrels. Don\'t miss!' },
      { id: 'survivalist-8', text: 'Rank 8: Craft Special Throwables', tip: 'Homing Tomahawk, Improved Tomahawk, Volatile Dynamite, Volatile Fire Bottle.' },
      { id: 'survivalist-9', text: 'Rank 9: Catch Fish Over 19 Pounds', tip: 'Legendary fish or big Muskie/Pike. Special lures.' },
      { id: 'survivalist-10', text: 'Rank 10: Catch All Fish Species', tip: 'All 13 fish types. Different lures for different fish.' }
    ]
  },

  // ============================================
  // SECTION XV: GAMBLER CHALLENGES (The Grind)
  // ============================================
  {
    id: 'gambler',
    title: 'XV. Gambler Challenges',
    icon: '🎰',
    defaultOpen: false,
    items: [
      { id: 'gambler-1', text: 'Rank 1: Win 5 Poker Hands', tip: 'Flatneck Station or Valentine. Play conservatively.' },
      { id: 'gambler-2', text: 'Rank 2: Double Down (Blackjack) 5x', tip: 'Only double on 10-11. Shows confidence.' },
      { id: 'gambler-3', text: 'Rank 3: Win 3 Dominoes Games', tip: 'Emerald Station is easiest. Block opponent\'s high numbers.' },
      { id: 'gambler-4', text: 'Rank 4: Bust Poker Player (Each Location)', tip: 'Keep playing until opponent leaves broke.' },
      { id: 'gambler-5', text: 'Rank 5: Win 3 Dominoes in a Row', tip: 'All Threes mode. Patience and defensive play.' },
      { id: 'gambler-6', text: 'Rank 6: Blackjack with 3+ Hits (5x)', tip: 'Hit on low cards (12-16). RNG heavy but doable.' },
      { id: 'gambler-7', text: 'Rank 7: Five Finger Fillet All Locations', tip: 'Beat the player at Strawberry, Valentine, and Van Horn.' },
      { id: 'gambler-8', text: 'Rank 8: Win 3 Blackjack Hands (3+ Hits Each)', tip: 'Must hit 3+ times AND win. SAVE CONSTANTLY. Most frustrating challenge.' },
      { id: 'gambler-9', text: 'Rank 9: Win 3 Dominoes in a Row (Again)', tip: 'All Fives this time. Very grindy.' },
      { id: 'gambler-10', text: 'Rank 10: Win 3 Poker Hands in a Row', tip: 'Play at low stakes. Fold when weak.' }
    ]
  },

  // ============================================
  // SECTION XVI: MISSABLE CONTENT
  // ============================================
  {
    id: 'missable',
    title: 'XVI. Missable Content',
    icon: '⚠️',
    defaultOpen: true,
    items: [
      {
        id: 'missable-bolt-action',
        text: 'Bolt Action Rifle (Free)',
        tip: '"The First Shall Be Last" mission. Kill LEFT bounty hunter fast.',
        missable: true,
        chapter: 2
      },
      {
        id: 'missable-mary-missions',
        text: 'Mary Linton Missions (3 Parts)',
        tip: 'Complete all before Chapter 6 ends. Emotional storyline.',
        missable: true,
        chapter: 6
      },
      {
        id: 'missable-edith-downes',
        text: 'Edith Downes Missions (2 Parts)',
        tip: 'Saint Denis slums. After debt collection missions. Redemption arc.',
        missable: true,
        chapter: 6
      },
      {
        id: 'missable-veteran',
        text: 'The Veteran (Hamish Sinclair)',
        tip: 'O\'Creagh\'s Run. 4 Parts. Final part gives Buell the horse.',
        missable: true,
        chapter: 6
      },
      {
        id: 'missable-widow',
        text: 'The Widow (Charlotte Balfour)',
        tip: 'North of Annesburg. 3 Parts. Teaching survival.',
        missable: true,
        chapter: 6
      },
      {
        id: 'missable-pearson-jacket',
        text: 'Pearson\'s Scout Jacket',
        tip: 'Donate a rabbit carcass to Pearson. Chapters 2-3 only.',
        missable: true,
        chapter: 3
      },
      {
        id: 'missable-kieran',
        text: 'Fishing with Kieran',
        tip: 'Chapter 3 only. Before Kieran\'s fate.',
        missable: true,
        chapter: 3
      },
      {
        id: 'missable-chicks-treasure',
        text: 'Chick\'s Treasure Map',
        tip: 'Painting in Shady Belle. Inspect BEFORE leaving in Chapter 4.',
        missable: true,
        chapter: 4
      },
      {
        id: 'missable-lenny',
        text: 'A Quiet Time (Lenny Night)',
        tip: 'Valentine bar. Automatic story mission. YNNEL!',
        missable: true,
        chapter: 2
      },
      {
        id: 'missable-camp-requests',
        text: 'Camp Companion Requests',
        tip: 'Gang members ask for items (pipe, book, etc.). Check "scouting" icon at camp.',
        missable: true
      },
      {
        id: 'missable-high-honor',
        text: 'High Honor Missions',
        tip: 'Some stranger encounters require high honor to access.',
        missable: true
      },
      {
        id: 'missable-do-not-seek',
        text: 'Do Not Seek Absolution I & II',
        tip: 'Brother Dorkins. High honor required. Saint Denis church.',
        missable: true,
        chapter: 6
      }
    ]
  },

  // ============================================
  // SECTION XVII: COLLECTIBLES
  // ============================================
  {
    id: 'collectibles',
    title: 'XVII. Collectibles',
    icon: '🏆',
    defaultOpen: false,
    items: [
      {
        id: 'collect-dino-bones',
        text: 'Dinosaur Bones (30 Total)',
        tip: 'Find all 30 for Bone Knife reward. Use online maps. Start: Deborah MacGuiness.'
      },
      {
        id: 'collect-rock-carvings',
        text: 'Rock Carvings (10 Total)',
        tip: 'Francis Sinclair quest. Ancient symbols on rocks. Time travel mystery.'
      },
      {
        id: 'collect-dreamcatchers',
        text: 'Dreamcatchers (20 Total)',
        tip: 'Hanging in trees. Find all 20 for map reward.'
      },
      {
        id: 'collect-cig-cards',
        text: 'Cigarette Cards (144 Total)',
        tip: 'Buy premium cigarettes, find in world. 12 sets of 12. Mail to Phineas for bonus.'
      },
      {
        id: 'collect-graves',
        text: 'Graves (9 Total)',
        tip: 'Marked graves of fallen gang members. Only accessible after story.'
      },
      {
        id: 'collect-hunting-requests',
        text: 'Hunting Requests (5 Total)',
        tip: 'Post office. Perfect carcasses of specific animals. Very tedious.'
      },
      {
        id: 'collect-exotics',
        text: 'Exotic Quest Items',
        tip: 'Orchids and plumes for Algernon Wasp. Saint Denis. Grindy.'
      }
    ]
  },

  // ============================================
  // SECTION XVIII: WEAPONS EXPERT CHALLENGES
  // ============================================
  {
    id: 'weapons-expert',
    title: 'XVIII. Weapons Expert',
    icon: '🎯',
    defaultOpen: false,
    items: [
      { id: 'weapons-expert-1', text: 'Rank 1: Kill 3 Enemies with a Knife', tip: 'Use melee knife attacks. Any enemies work.' },
      { id: 'weapons-expert-2', text: 'Rank 2: Kill 3 Enemies in 10 Seconds (Throwing Knives Only)', tip: 'Dead Eye helps. Camp raids work well.' },
      { id: 'weapons-expert-3', text: 'Rank 3: Kill 3 Birds of Prey Using a Tomahawk', tip: 'Hawks/eagles. Use Homing Tomahawk. Very difficult!' },
      { id: 'weapons-expert-4', text: 'Rank 4: Kill 10 Enemies with Shotgun (Crafted Ammo)', tip: 'Use Slug, Incendiary, or Explosive shells.' },
      { id: 'weapons-expert-5', text: 'Rank 5: Kill 5 Mounted Enemies (1 Throwing Knife Each)', tip: 'One knife per kill. Target riders, not horses.' },
      { id: 'weapons-expert-6', text: 'Rank 6: Kill 4 Enemies with Single Dynamite Stick', tip: 'Lure enemies together. Gang hideouts work best.' },
      { id: 'weapons-expert-7', text: 'Rank 7: Kill 4 Consecutive Enemies (Same Tomahawk)', tip: 'Throw, retrieve, repeat 4 times. Don\'t miss!' },
      { id: 'weapons-expert-8', text: 'Rank 8: Kill 15 Enemies (Long-Barreled Sidearm)', tip: 'Mauser, Semi-Auto, or Volcanic Pistol with long barrel.' },
      { id: 'weapons-expert-9', text: 'Rank 9: Kill 9 Unaware Enemies from Behind (Bow)', tip: 'Stealth kills. Sneak up at camps.' },
      { id: 'weapons-expert-10', text: 'Rank 10: Kill Grizzly Bear (Throwing Knives, No Damage)', tip: 'Very hard! Use cover, Dead Eye, and patience.' }
    ]
  },

  // ============================================
  // SECTION XIX: COMPANION ACTIVITIES
  // ============================================
  {
    id: 'companion-activities',
    title: 'XIX. Companion Activities',
    icon: '🤝',
    defaultOpen: false,
    items: [
      // Chapter 2
      { id: 'comp-charles-hunt', text: 'Ch2: Hunt with Charles Smith', tip: 'White icon at camp. Go hunting together. Teaches bow hunting.', chapter: 2, missable: true },
      { id: 'comp-javier-robbery', text: 'Ch2: Rob Homestead with Javier (Chez Porter)', tip: 'White icon at camp. O\'Driscoll hideout north of Valentine.', chapter: 2, missable: true },
      { id: 'comp-lenny-filet', text: 'Ch2: Five Finger Fillet with Lenny', tip: 'Camp activity. Beat him to win money.', chapter: 2, missable: true },
      
      // Chapter 3
      { id: 'comp-sean-robbery', text: 'Ch3: Rob Homestead with Sean (Lonnie\'s Shack)', tip: 'White icon at camp. Drunken robbery mission.', chapter: 3, missable: true },
      { id: 'comp-javier-fish', text: 'Ch3: Go Fishing with Javier', tip: 'Available after fishing unlocks. Relaxing trip.', chapter: 3, missable: true },
      { id: 'comp-kieran-fish', text: 'Ch3: Go Fishing with Kieran', tip: 'He\'s nervous but friendly. Short before his fate...', chapter: 3, missable: true },
      { id: 'comp-bill-coach', text: 'Ch3: Rob Stagecoach with Bill', tip: 'Alden at Rhodes train station gives tip. Bill is chaotic.', chapter: 3, missable: true },
      { id: 'comp-sean-coach', text: 'Ch3: Rob Stagecoach with Sean', tip: 'Fun drunken heist. Sean is hilarious.', chapter: 3, missable: true },
      { id: 'comp-micah-filet', text: 'Ch3: Five Finger Fillet with Micah', tip: 'He\'s aggressive. Beat him anyway.', chapter: 3, missable: true },
      { id: 'comp-tilly-dominoes', text: 'Ch3: Play Dominoes with Tilly', tip: 'Camp activity. She\'s good at it.', chapter: 3, missable: true },
      
      // Chapter 4
      { id: 'comp-pearson-hunt', text: 'Ch4: Hunt with Pearson', tip: 'Rare activity. Pearson leaves camp to hunt.', chapter: 4, missable: true },
      { id: 'comp-lenny-coach', text: 'Ch4: Rob Stagecoach with Lenny', tip: 'Professional heist. Lenny is reliable.', chapter: 4, missable: true },
      { id: 'comp-micah-coach', text: 'Ch4: Rob Stagecoach with Micah', tip: 'He makes it violent. Expect chaos.', chapter: 4, missable: true },
      { id: 'comp-uncle-rustle', text: 'Ch4: Go Rustling with Uncle', tip: 'Steal cattle. Uncle is lazy as always.', chapter: 4, missable: true }
    ]
  },

  // ============================================
  // SECTION XX: CAMP ITEM REQUESTS
  // ============================================
  {
    id: 'camp-requests',
    title: 'XX. Camp Item Requests',
    icon: '🎁',
    defaultOpen: false,
    items: [
      // Chapter 2 only
      { id: 'request-jack-thimble', text: 'Ch2: Thimble for Jack', tip: 'Find in houses/cabins. He gives you a drawing. Heartwarming.', chapter: 2, missable: true },
      { id: 'request-jack-comic', text: 'Ch2: Comic Book for Jack', tip: 'General stores sell them. He gives you a chocolate bar.', chapter: 2, missable: true },
      { id: 'request-javier-oleander', text: 'Ch2: Oleander for Javier', tip: 'Pick oleander sage (Bayou area). He gives poison throwing knives.', chapter: 2, missable: true },
      { id: 'request-marybeth-pen', text: 'Ch2: Fountain Pen for Mary-Beth', tip: 'Find in houses/shops. She gives you a gold ring.', chapter: 2, missable: true },
      { id: 'request-pearson-compass', text: 'Ch2: Naval Compass for Pearson', tip: 'Shipwrecks or naval locations. He shares rum and stories.', chapter: 2, missable: true },
      { id: 'request-sean-bourbon', text: 'Ch2: Kentucky Bourbon for Sean', tip: 'Buy at saloons. He gives you a fire bottle.', chapter: 2, missable: true },
      { id: 'request-tilly-necklace', text: 'Ch2: Necklace for Tilly', tip: 'Jewelry boxes or rob NPCs. She gives medicine.', chapter: 2, missable: true },
      
      // Chapter 3 only
      { id: 'request-hosea-ginseng', text: 'Ch3: American Ginseng (2) for Hosea', tip: 'Forest areas. He gives Potent Medicine.', chapter: 3, missable: true },
      { id: 'request-kieran-burdock', text: 'Ch3: Burdock Roots (2) for Kieran', tip: 'Common plant. He gives Horse Medicine. Do this before his fate!', chapter: 3, missable: true },
      { id: 'request-molly-mirror', text: 'Ch3: Pocket Mirror for Molly', tip: 'Houses or general stores. She gives a cigar.', chapter: 3, missable: true },
      { id: 'request-sadie-harmonica', text: 'Ch3: Harmonica for Sadie', tip: 'Random NPC loot or houses. She gives Gun Oil.', chapter: 3, missable: true },
      
      // Chapters 2, 3, 4
      { id: 'request-bill-pomade', text: 'Ch2-4: Hair Pomade for Bill', tip: 'General stores. He gives Repeater Ammo.', missable: true },
      { id: 'request-charles-moonshine', text: 'Ch2-4: Moonshine for Charles', tip: 'Fence or general store. He gives Fire Arrows.', missable: true },
      { id: 'request-charles-oleander', text: 'Ch2-4: Oleander for Charles', tip: 'Bayou plant. He gives Poison Arrows. Great reward!', missable: true },
      { id: 'request-dutch-pipe', text: 'Ch2-4: Pipe for Dutch', tip: 'Random finds or Fence. He gives Spurs.', missable: true },
      { id: 'request-hosea-book', text: 'Ch2-4: Book for Hosea', tip: 'General stores or houses. He gives Predator Bait.', missable: true },
      { id: 'request-lenny-watch', text: 'Ch2-4: Pocket Watch for Lenny', tip: 'Rob wealthy NPCs. He gives Dynamite!', missable: true },
      { id: 'request-pearson-rabbit', text: 'Ch2-4: Rabbit Carcass for Pearson', tip: 'Hunt any rabbit. He makes Nutritious Stew.', missable: true },
      { id: 'request-susan-oregano', text: 'Ch2-4: Oregano (2) for Susan', tip: 'Common herb. She gives Miracle Tonic.', missable: true }
    ]
  },

  // ============================================
  // SECTION XXI: BOUNTY HUNTING
  // ============================================
  {
    id: 'bounties',
    title: 'XXI. Bounty Hunting',
    icon: '🤠',
    defaultOpen: false,
    items: [
      // Valentine
      { id: 'bounty-benedict', text: 'Valentine: Benedict Allbright', tip: 'Poison seller. Found west of Valentine. Alive or dead.' },
      { id: 'bounty-ellie', text: 'Valentine: Ellie Anne Swan', tip: 'Female outlaw. Camp northwest of Valentine. Bring alive for more $.' },
      // Rhodes  
      { id: 'bounty-mark', text: 'Rhodes: Mark Johnson', tip: 'Horse thief. Found in Bluewater Marsh area.' },
      { id: 'bounty-robbie', text: 'Rhodes: Robbie Laidlaw', tip: 'Murderer. Hiding near Caliga Hall.' },
      { id: 'bounty-camille', text: 'Rhodes: Camille de Millemont', tip: 'French con artist. Saint Denis area.' },
      // Strawberry
      { id: 'bounty-joshua', text: 'Strawberry: Joshua Brown', tip: 'Dangerous criminal. Found in Big Valley.' },
      { id: 'bounty-bart', text: 'Strawberry: Bart Cavanaugh', tip: 'Outlaw gang leader. Has bodyguards. Approach carefully.' },
      // Saint Denis
      { id: 'bounty-lindsay', text: 'Saint Denis: Lindsay Wofford', tip: 'City criminal. Urban pursuit through Saint Denis.' },
      { id: 'bounty-anthony', text: 'Saint Denis: Anthony Foreman', tip: 'Gang leader. Story-connected. Appears after Trelawny missions.' },
      // Blackwater (Epilogue)
      { id: 'bounty-elias', text: 'Blackwater: Elias Green', tip: 'EPILOGUE. War veteran gone bad.', chapter: 'epilogue' },
      { id: 'bounty-otis', text: 'Blackwater: Otis Skinner', tip: 'EPILOGUE. Serial killer type. Dangerous.', chapter: 'epilogue' },
      { id: 'bounty-herman', text: 'Blackwater: Herman Zizendorf', tip: 'EPILOGUE. Located near MacFarlane\'s Ranch.', chapter: 'epilogue' },
      // Tumbleweed (Epilogue)
      { id: 'bounty-esteban', text: 'Tumbleweed: Esteban Cortez', tip: 'EPILOGUE. Mexican outlaw in New Austin.', chapter: 'epilogue' },
      { id: 'bounty-joaquin', text: 'Tumbleweed: Joaquin Arroyo', tip: 'EPILOGUE. Del Lobo gang connection.', chapter: 'epilogue' }
    ]
  },

  // ============================================
  // SECTION XXII: FENCE TALISMANS & TRINKETS
  // ============================================
  {
    id: 'talismans',
    title: 'XXII. Talismans & Trinkets',
    icon: '🔮',
    defaultOpen: false,
    items: [
      // Trinkets (from legendary animals)
      { id: 'trinket-buck', text: 'Buck Antler Trinket ⭐', tip: 'Legendary Buck antler + Cobalt Petrified Wood + $22. BETTER PELTS!', priority: true },
      { id: 'trinket-bear', text: 'Bear Claw Talisman', tip: 'Legendary Bear claw + Silver Earring + Quartz Chunk. -10% health drain in combat.' },
      { id: 'trinket-boar', text: 'Boar Tusk Talisman', tip: 'Legendary Boar tusk + Gold Earring + Cobalt Petrified Wood. -10% horse core drain.' },
      { id: 'trinket-alligator', text: 'Alligator Tooth Talisman', tip: 'Legendary Alligator tooth + Gold Jointed Bracelet + Vintage Civil War Handcuffs. -10% Dead Eye drain.' },
      { id: 'trinket-wolf', text: 'Wolf Heart Trinket', tip: 'Legendary Wolf heart + Hawk Talon + Vintage Civil War Handcuffs. +10% alcohol fortifying.' },
      { id: 'trinket-elk', text: 'Elk Antler Trinket', tip: 'Legendary Elk antler + Cobalt Petrified Wood + Gold Earring. +10% from looted money.' },
      { id: 'trinket-ram', text: 'Ram Horn Trinket', tip: 'Legendary Ram horn + Abalone Shell Fragment + Silver Earring. -10% stamina drain on horseback.' },
      { id: 'trinket-panther', text: 'Panther Eye Trinket', tip: 'Legendary Panther eye + Obsidian Arrowhead + Hawk Talon. 3s faster Dead Eye refill.' },
      { id: 'trinket-moose', text: 'Moose Antler Trinket', tip: 'Legendary Moose antler + Vintage Civil War Handcuffs + Quartz Chunk. +10% health from meats.' },
      { id: 'trinket-beaver', text: 'Beaver Tooth Trinket', tip: 'Legendary Beaver tooth + Cobalt Petrified Wood. -10% weapon degradation.' },
      { id: 'trinket-boar-core', text: 'Boar Tusk Trinket', tip: 'Legendary Boar tusk + Cobalt Petrified Wood + Pocket Watch. +10% horse health.' },
      { id: 'trinket-cougar', text: 'Cougar Fang Trinket', tip: 'Legendary Cougar fang + Cobalt Petrified Wood. EPILOGUE. +10% stamina exp.' },
      { id: 'trinket-fox', text: 'Fox Claw Trinket', tip: 'Legendary Fox claw + Cobalt Petrified Wood. +5 Eagle Eye duration.' },
      { id: 'trinket-coyote', text: 'Coyote Fang Trinket', tip: 'Legendary Coyote fang + Cobalt Petrified Wood. +10% Dead Eye exp.' },
      { id: 'trinket-pronghorn', text: 'Pronghorn Horn Trinket', tip: 'Legendary Pronghorn horn + Cobalt Petrified Wood. EPILOGUE. Find money in lock boxes.' },
      { id: 'trinket-bison', text: 'Bison Horn Talisman', tip: 'Legendary Tatanka Bison horn + Gold Earring + Abalone Shell Fragment. -10% melee damage.' }
    ]
  },

  // ============================================
  // SECTION XXIII: CIGARETTE CARDS (12 Sets)
  // ============================================
  {
    id: 'cig-gunslingers',
    title: ' Cards: Famous Gunslingers',
    icon: '�',
    defaultOpen: false,
    items: [
      { id: 'cig-guns-01', text: 'Jim "Boy" Calloway', tip: 'Buy Premium Cigarettes or find in world.' },
      { id: 'cig-guns-02', text: 'Black Belle', tip: 'Random from cigarettes or world spawn.' },
      { id: 'cig-guns-03', text: 'Billy Midnight', tip: 'Set 1 of 12' },
      { id: 'cig-guns-04', text: 'Emmet Granger', tip: 'Set 1 of 12' },
      { id: 'cig-guns-05', text: 'Flaco Hernandez', tip: 'Set 1 of 12' },
      { id: 'cig-guns-06', text: 'Landon Ricketts', tip: 'Set 1 of 12' },
      { id: 'cig-guns-07', text: 'Otis Miller', tip: 'Set 1 of 12' },
      { id: 'cig-guns-08', text: 'Red Harlow', tip: 'Set 1 of 12' },
      { id: 'cig-guns-09', text: 'Sam Freeman', tip: 'Set 1 of 12' },
      { id: 'cig-guns-10', text: 'Swifty Stevens', tip: 'Set 1 of 12' },
      { id: 'cig-guns-11', text: 'Bart Love', tip: 'Set 1 of 12' },
      { id: 'cig-guns-12', text: 'Annie Stoakes', tip: 'Complete set = reward from Phineas!' }
    ]
  },
  {
    id: 'cig-stage',
    title: ' Cards: Stars of the Stage',
    icon: '🎭',
    defaultOpen: false,
    items: [
      { id: 'cig-stage-01', text: 'Miss Marjorie', tip: 'Set 2 of 12' },
      { id: 'cig-stage-02', text: 'Leopold Strauss', tip: 'Set 2 of 12' },
      { id: 'cig-stage-03', text: 'Aldridge T. Abbington', tip: 'Set 2 of 12' },
      { id: 'cig-stage-04', text: 'Miss Margaret', tip: 'Set 2 of 12' },
      { id: 'cig-stage-05', text: 'Mademoiselle Juliette', tip: 'Set 2 of 12' },
      { id: 'cig-stage-06', text: 'Maurice', tip: 'Set 2 of 12' },
      { id: 'cig-stage-07', text: 'Miss Amelie', tip: 'Set 2 of 12' },
      { id: 'cig-stage-08', text: 'Fontana', tip: 'Set 2 of 12' },
      { id: 'cig-stage-09', text: 'Renaldo', tip: 'Set 2 of 12' },
      { id: 'cig-stage-10', text: 'Zambini', tip: 'Set 2 of 12' },
      { id: 'cig-stage-11', text: 'Magnifico', tip: 'Set 2 of 12' },
      { id: 'cig-stage-12', text: 'The Masters', tip: 'Complete set = reward!' }
    ]
  },
  {
    id: 'cig-travel',
    title: ' Cards: Marvels of Travel',
    icon: '🚂',
    defaultOpen: false,
    items: [
      { id: 'cig-travel-01', text: 'Travel Card 1', tip: 'Trains & Travel theme. Set 3 of 12' },
      { id: 'cig-travel-02', text: 'Travel Card 2', tip: 'Set 3 of 12' },
      { id: 'cig-travel-03', text: 'Travel Card 3', tip: 'Set 3 of 12' },
      { id: 'cig-travel-04', text: 'Travel Card 4', tip: 'Set 3 of 12' },
      { id: 'cig-travel-05', text: 'Travel Card 5', tip: 'Set 3 of 12' },
      { id: 'cig-travel-06', text: 'Travel Card 6', tip: 'Set 3 of 12' },
      { id: 'cig-travel-07', text: 'Travel Card 7', tip: 'Set 3 of 12' },
      { id: 'cig-travel-08', text: 'Travel Card 8', tip: 'Set 3 of 12' },
      { id: 'cig-travel-09', text: 'Travel Card 9', tip: 'Set 3 of 12' },
      { id: 'cig-travel-10', text: 'Travel Card 10', tip: 'Set 3 of 12' },
      { id: 'cig-travel-11', text: 'Travel Card 11', tip: 'Set 3 of 12' },
      { id: 'cig-travel-12', text: 'Travel Card 12', tip: 'Complete set = reward!' }
    ]
  },
  {
    id: 'cig-fauna',
    title: ' Cards: Fauna of America',
    icon: '🦌',
    defaultOpen: false,
    items: [
      { id: 'cig-fauna-01', text: 'Fauna Card 1', tip: 'Wildlife theme. Set 4 of 12' },
      { id: 'cig-fauna-02', text: 'Fauna Card 2', tip: 'Set 4 of 12' },
      { id: 'cig-fauna-03', text: 'Fauna Card 3', tip: 'Set 4 of 12' },
      { id: 'cig-fauna-04', text: 'Fauna Card 4', tip: 'Set 4 of 12' },
      { id: 'cig-fauna-05', text: 'Fauna Card 5', tip: 'Set 4 of 12' },
      { id: 'cig-fauna-06', text: 'Fauna Card 6', tip: 'Set 4 of 12' },
      { id: 'cig-fauna-07', text: 'Fauna Card 7', tip: 'Set 4 of 12' },
      { id: 'cig-fauna-08', text: 'Fauna Card 8', tip: 'Set 4 of 12' },
      { id: 'cig-fauna-09', text: 'Fauna Card 9', tip: 'Set 4 of 12' },
      { id: 'cig-fauna-10', text: 'Fauna Card 10', tip: 'Set 4 of 12' },
      { id: 'cig-fauna-11', text: 'Fauna Card 11', tip: 'Set 4 of 12' },
      { id: 'cig-fauna-12', text: 'Fauna Card 12', tip: 'Complete set = reward!' }
    ]
  },
  {
    id: 'cig-horses',
    title: ' Cards: Horse Breeds',
    icon: '🐴',
    defaultOpen: false,
    items: [
      { id: 'cig-horses-01', text: 'Horse Card 1', tip: 'Horse breeds theme. Set 5 of 12' },
      { id: 'cig-horses-02', text: 'Horse Card 2', tip: 'Set 5 of 12' },
      { id: 'cig-horses-03', text: 'Horse Card 3', tip: 'Set 5 of 12' },
      { id: 'cig-horses-04', text: 'Horse Card 4', tip: 'Set 5 of 12' },
      { id: 'cig-horses-05', text: 'Horse Card 5', tip: 'Set 5 of 12' },
      { id: 'cig-horses-06', text: 'Horse Card 6', tip: 'Set 5 of 12' },
      { id: 'cig-horses-07', text: 'Horse Card 7', tip: 'Set 5 of 12' },
      { id: 'cig-horses-08', text: 'Horse Card 8', tip: 'Set 5 of 12' },
      { id: 'cig-horses-09', text: 'Horse Card 9', tip: 'Set 5 of 12' },
      { id: 'cig-horses-10', text: 'Horse Card 10', tip: 'Set 5 of 12' },
      { id: 'cig-horses-11', text: 'Horse Card 11', tip: 'Set 5 of 12' },
      { id: 'cig-horses-12', text: 'Horse Card 12', tip: 'Complete set = reward!' }
    ]
  },
  {
    id: 'cig-fight',
    title: ' Cards: Art of the Fight',
    icon: '🥊',
    defaultOpen: false,
    items: [
      { id: 'cig-fight-01', text: 'Fight Card 1', tip: 'Boxing & fighting theme. Set 6 of 12' },
      { id: 'cig-fight-02', text: 'Fight Card 2', tip: 'Set 6 of 12' },
      { id: 'cig-fight-03', text: 'Fight Card 3', tip: 'Set 6 of 12' },
      { id: 'cig-fight-04', text: 'Fight Card 4', tip: 'Set 6 of 12' },
      { id: 'cig-fight-05', text: 'Fight Card 5', tip: 'Set 6 of 12' },
      { id: 'cig-fight-06', text: 'Fight Card 6', tip: 'Set 6 of 12' },
      { id: 'cig-fight-07', text: 'Fight Card 7', tip: 'Set 6 of 12' },
      { id: 'cig-fight-08', text: 'Fight Card 8', tip: 'Set 6 of 12' },
      { id: 'cig-fight-09', text: 'Fight Card 9', tip: 'Set 6 of 12' },
      { id: 'cig-fight-10', text: 'Fight Card 10', tip: 'Set 6 of 12' },
      { id: 'cig-fight-11', text: 'Fight Card 11', tip: 'Set 6 of 12' },
      { id: 'cig-fight-12', text: 'Fight Card 12', tip: 'Complete set = reward!' }
    ]
  },
  {
    id: 'cig-aquatic',
    title: ' Cards: Wet and Dry',
    icon: '🐟',
    defaultOpen: false,
    items: [
      { id: 'cig-aquatic-01', text: 'Aquatic Card 1', tip: 'Sea life theme. Set 7 of 12' },
      { id: 'cig-aquatic-02', text: 'Aquatic Card 2', tip: 'Set 7 of 12' },
      { id: 'cig-aquatic-03', text: 'Aquatic Card 3', tip: 'Set 7 of 12' },
      { id: 'cig-aquatic-04', text: 'Aquatic Card 4', tip: 'Set 7 of 12' },
      { id: 'cig-aquatic-05', text: 'Aquatic Card 5', tip: 'Set 7 of 12' },
      { id: 'cig-aquatic-06', text: 'Aquatic Card 6', tip: 'Set 7 of 12' },
      { id: 'cig-aquatic-07', text: 'Aquatic Card 7', tip: 'Set 7 of 12' },
      { id: 'cig-aquatic-08', text: 'Aquatic Card 8', tip: 'Set 7 of 12' },
      { id: 'cig-aquatic-09', text: 'Aquatic Card 9', tip: 'Set 7 of 12' },
      { id: 'cig-aquatic-10', text: 'Aquatic Card 10', tip: 'Set 7 of 12' },
      { id: 'cig-aquatic-11', text: 'Aquatic Card 11', tip: 'Set 7 of 12' },
      { id: 'cig-aquatic-12', text: 'Aquatic Card 12', tip: 'Complete set = reward!' }
    ]
  },
  {
    id: 'cig-views',
    title: ' Cards: Views of America',
    icon: '🏔️',
    defaultOpen: false,
    items: [
      { id: 'cig-views-01', text: 'Views Card 1', tip: 'Landscapes theme. Set 8 of 12' },
      { id: 'cig-views-02', text: 'Views Card 2', tip: 'Set 8 of 12' },
      { id: 'cig-views-03', text: 'Views Card 3', tip: 'Set 8 of 12' },
      { id: 'cig-views-04', text: 'Views Card 4', tip: 'Set 8 of 12' },
      { id: 'cig-views-05', text: 'Views Card 5', tip: 'Set 8 of 12' },
      { id: 'cig-views-06', text: 'Views Card 6', tip: 'Set 8 of 12' },
      { id: 'cig-views-07', text: 'Views Card 7', tip: 'Set 8 of 12' },
      { id: 'cig-views-08', text: 'Views Card 8', tip: 'Set 8 of 12' },
      { id: 'cig-views-09', text: 'Views Card 9', tip: 'Set 8 of 12' },
      { id: 'cig-views-10', text: 'Views Card 10', tip: 'Set 8 of 12' },
      { id: 'cig-views-11', text: 'Views Card 11', tip: 'Set 8 of 12' },
      { id: 'cig-views-12', text: 'Views Card 12', tip: 'Complete set = reward!' }
    ]
  },
  {
    id: 'cig-engineering',
    title: ' Cards: Wonders of Engineering',
    icon: '⚙️',
    defaultOpen: false,
    items: [
      { id: 'cig-eng-01', text: 'Engineering Card 1', tip: 'Inventions theme. Set 9 of 12' },
      { id: 'cig-eng-02', text: 'Engineering Card 2', tip: 'Set 9 of 12' },
      { id: 'cig-eng-03', text: 'Engineering Card 3', tip: 'Set 9 of 12' },
      { id: 'cig-eng-04', text: 'Engineering Card 4', tip: 'Set 9 of 12' },
      { id: 'cig-eng-05', text: 'Engineering Card 5', tip: 'Set 9 of 12' },
      { id: 'cig-eng-06', text: 'Engineering Card 6', tip: 'Set 9 of 12' },
      { id: 'cig-eng-07', text: 'Engineering Card 7', tip: 'Set 9 of 12' },
      { id: 'cig-eng-08', text: 'Engineering Card 8', tip: 'Set 9 of 12' },
      { id: 'cig-eng-09', text: 'Engineering Card 9', tip: 'Set 9 of 12' },
      { id: 'cig-eng-10', text: 'Engineering Card 10', tip: 'Set 9 of 12' },
      { id: 'cig-eng-11', text: 'Engineering Card 11', tip: 'Set 9 of 12' },
      { id: 'cig-eng-12', text: 'Engineering Card 12', tip: 'Complete set = reward!' }
    ]
  },
  {
    id: 'cig-prominent',
    title: ' Cards: Prominent Americans',
    icon: '🎩',
    defaultOpen: false,
    items: [
      { id: 'cig-prom-01', text: 'Prominent Card 1', tip: 'Historical figures. Set 10 of 12' },
      { id: 'cig-prom-02', text: 'Prominent Card 2', tip: 'Set 10 of 12' },
      { id: 'cig-prom-03', text: 'Prominent Card 3', tip: 'Set 10 of 12' },
      { id: 'cig-prom-04', text: 'Prominent Card 4', tip: 'Set 10 of 12' },
      { id: 'cig-prom-05', text: 'Prominent Card 5', tip: 'Set 10 of 12' },
      { id: 'cig-prom-06', text: 'Prominent Card 6', tip: 'Set 10 of 12' },
      { id: 'cig-prom-07', text: 'Prominent Card 7', tip: 'Set 10 of 12' },
      { id: 'cig-prom-08', text: 'Prominent Card 8', tip: 'Set 10 of 12' },
      { id: 'cig-prom-09', text: 'Prominent Card 9', tip: 'Set 10 of 12' },
      { id: 'cig-prom-10', text: 'Prominent Card 10', tip: 'Set 10 of 12' },
      { id: 'cig-prom-11', text: 'Prominent Card 11', tip: 'Set 10 of 12' },
      { id: 'cig-prom-12', text: 'Prominent Card 12', tip: 'Complete set = reward!' }
    ]
  },
  {
    id: 'cig-baseball',
    title: ' Cards: Hall of Fame Baseball',
    icon: '⚾',
    defaultOpen: false,
    items: [
      { id: 'cig-base-01', text: 'Baseball Card 1', tip: 'Baseball players. Set 11 of 12' },
      { id: 'cig-base-02', text: 'Baseball Card 2', tip: 'Set 11 of 12' },
      { id: 'cig-base-03', text: 'Baseball Card 3', tip: 'Set 11 of 12' },
      { id: 'cig-base-04', text: 'Baseball Card 4', tip: 'Set 11 of 12' },
      { id: 'cig-base-05', text: 'Baseball Card 5', tip: 'Set 11 of 12' },
      { id: 'cig-base-06', text: 'Baseball Card 6', tip: 'Set 11 of 12' },
      { id: 'cig-base-07', text: 'Baseball Card 7', tip: 'Set 11 of 12' },
      { id: 'cig-base-08', text: 'Baseball Card 8', tip: 'Set 11 of 12' },
      { id: 'cig-base-09', text: 'Baseball Card 9', tip: 'Set 11 of 12' },
      { id: 'cig-base-10', text: 'Baseball Card 10', tip: 'Set 11 of 12' },
      { id: 'cig-base-11', text: 'Baseball Card 11', tip: 'Set 11 of 12' },
      { id: 'cig-base-12', text: 'Baseball Card 12', tip: 'Complete set = reward!' }
    ]
  },
  {
    id: 'cig-sports',
    title: ' Cards: Sports Champions',
    icon: '🏆',
    defaultOpen: false,
    items: [
      { id: 'cig-sport-01', text: 'Sports Card 1', tip: 'Athletes theme. Set 12 of 12' },
      { id: 'cig-sport-02', text: 'Sports Card 2', tip: 'Set 12 of 12' },
      { id: 'cig-sport-03', text: 'Sports Card 3', tip: 'Set 12 of 12' },
      { id: 'cig-sport-04', text: 'Sports Card 4', tip: 'Set 12 of 12' },
      { id: 'cig-sport-05', text: 'Sports Card 5', tip: 'Set 12 of 12' },
      { id: 'cig-sport-06', text: 'Sports Card 6', tip: 'Set 12 of 12' },
      { id: 'cig-sport-07', text: 'Sports Card 7', tip: 'Set 12 of 12' },
      { id: 'cig-sport-08', text: 'Sports Card 8', tip: 'Set 12 of 12' },
      { id: 'cig-sport-09', text: 'Sports Card 9', tip: 'Set 12 of 12' },
      { id: 'cig-sport-10', text: 'Sports Card 10', tip: 'Set 12 of 12' },
      { id: 'cig-sport-11', text: 'Sports Card 11', tip: 'Set 12 of 12' },
      { id: 'cig-sport-12', text: 'Sports Card 12', tip: 'Mail ALL 144 cards to Phineas T. Ramsbottom for reward!' }
    ]
  },

  // ============================================
  // SECTION XXIV: GANG MEMBER GRAVES
  // ============================================
  {
    id: 'graves',
    title: 'XXIV. Gang Member Graves',
    icon: '🪦',
    defaultOpen: false,
    items: [
      { id: 'grave-jenny', text: 'Jenny Kirk\'s Grave', tip: 'Died during Blackwater heist. Near Colter, snowy area.' },
      { id: 'grave-davey', text: 'Davey Callender\'s Grave', tip: 'Died from Blackwater wounds. Near Colter, by Jenny.' },
      { id: 'grave-sean', text: 'Sean MacGuire\'s Grave', tip: 'After his death in Rhodes. Scarlett Meadows area.' },
      { id: 'grave-kieran', text: 'Kieran Duffy\'s Grave', tip: 'After O\'Driscoll camp. Near Shady Belle.' },
      { id: 'grave-hosea', text: 'Hosea Matthews\' Grave', tip: 'After Saint Denis bank. Near Bluewater Marsh.' },
      { id: 'grave-lenny', text: 'Lenny Summers\' Grave', tip: 'After Saint Denis bank. Near Hosea\'s.' },
      { id: 'grave-eagle', text: 'Eagle Flies\' Grave', tip: 'After oil factory mission. Wapiti Indian Reservation.' },
      { id: 'grave-susan', text: 'Susan Grimshaw\'s Grave', tip: 'After Beaver Hollow. Near camp ruins.' },
      { id: 'grave-arthur', text: 'Arthur Morgan\'s Grave', tip: 'EPILOGUE. East of Bacchus Station. Visit as John for dialogue.' }
    ]
  },

  // ============================================
  // SECTION XXV: PERSONAL JOURNAL
  // ============================================
  {
    id: 'journal',
    title: 'XXV. Personal Journal',
    icon: '📓',
    defaultOpen: true,
    isJournal: true
  }
];

/**
 * Get total item count across all sections
 */
export function getTotalItemCount() {
  return CHECKLIST_SECTIONS
    .filter(s => !s.isJournal)
    .reduce((sum, section) => sum + (section.items?.length || 0), 0);
}

/**
 * Get section by ID
 */
export function getSectionById(id) {
  return CHECKLIST_SECTIONS.find(s => s.id === id);
}

/**
 * Navigation categories - groups sections into hierarchical menu
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
    sections: ['treasures', 'weapons', 'satchel', 'camp', 'talismans']
  },
  {
    id: 'world',
    title: 'World & Story',
    icon: '🗺️',
    sections: ['strangers', 'legendary-animals', 'bounties', 'companion-activities', 'camp-requests', 'missable', 'graves']
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
    sections: ['collectibles', 'cig-gunslingers', 'cig-stage', 'cig-travel', 'cig-fauna', 'cig-horses', 'cig-fight', 'cig-aquatic', 'cig-views', 'cig-engineering', 'cig-prominent', 'cig-baseball', 'cig-sports']
  },
  {
    id: 'personal',
    title: 'Personal',
    icon: '📓',
    sections: ['journal']
  }
];

