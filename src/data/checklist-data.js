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
      { id: 'bandit-2', text: 'Rank 2: Rob 2 Coaches or Return to Camp', tip: 'Stolen coaches go to Emerald Ranch fence.' },
      { id: 'bandit-3', text: 'Rank 3: Rob 4 Registers in 1 Day', tip: 'Valentine, Strawberry, Rhodes, Saint Denis. Ride fast between them.' },
      { id: 'bandit-4', text: 'Rank 4: Rob 3 Coaches in 1 Day', tip: 'Camp near Emerald Ranch, farm wagon spawns on main road.' },
      { id: 'bandit-5', text: 'Rank 5: Amass $250 Bounty (Any State)', tip: 'Kill lawmen in one state. Pay it off after.' },
      { id: 'bandit-6', text: 'Rank 6: Steal 5 Horses Sold to Fence', tip: 'Clemens Point horse fence (Chapter 3+). Steal good horses.' },
      { id: 'bandit-7', text: 'Rank 7: Rob $50 From Townsfolk', tip: 'Hold up wealthy NPCs in Saint Denis. They carry more.' },
      { id: 'bandit-8', text: 'Rank 8: 3 Train Robberies Without Death', tip: 'Stop train in tunnels for easier escape. Reload if you die.' },
      { id: 'bandit-9', text: 'Rank 9: Hogtie 3 People to Train Tracks', tip: 'Hogtie, place on tracks, wait for train. Very dishonorable.' },
      { id: 'bandit-10', text: 'Rank 10: Complete 5 Gang Hideouts', tip: 'Fort Mercer, Shady Belle, Thieves Landing, etc.' }
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
      { id: 'herbalist-6', text: 'Rank 6: Collect 15 Species', tip: 'Explore different biomes. Desert plants in New Austin later.' },
      { id: 'herbalist-7', text: 'Rank 7: Craft 5 Special Miracle Tonics', tip: 'High-tier recipes. Buy pamphlets from Fence.' },
      { id: 'herbalist-8', text: 'Rank 8: Craft Poison Weapons (4 Types)', tip: 'Poison arrows, throwing knives, tomahawks.' },
      { id: 'herbalist-9', text: 'Rank 9: Pick All 43 Plant Species', tip: 'REQUIRES NEW AUSTIN! Epilogue normally. Desert plants.', chapter: 'epilogue' },
      { id: 'herbalist-10', text: 'Rank 10: Season/Cook 30 Unique Items', tip: 'Combine all meat types with seasoning combos.' }
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
      { id: 'sharp-5', text: 'Rank 5: Kill 6 Animals (No Weapon Switch)', tip: 'Varmint rifle, field of rabbits. Or bow in deer area.' },
      { id: 'sharp-6', text: 'Rank 6: Kill Enemy from 660ft+', tip: 'Carcano Rifle + long scope. Find long sightline, any camp.' },
      { id: 'sharp-7', text: 'Rank 7: 3 Headshots in 10 Seconds', tip: 'Dead Eye + gang hideout. Easy with practice.' },
      { id: 'sharp-8', text: 'Rank 8: Disarm 3 Enemies Without Reload', tip: 'Aim for gun hand in Dead Eye. Need precise aim.' },
      { id: 'sharp-9', text: 'Rank 9: Shoot 3 Hats Off', tip: 'Aim high, don\'t kill. Town duels work well.' },
      { id: 'sharp-10', text: 'Rank 10: 3 Birds with 3 Consecutive Shots', tip: 'Shotgun at flock. Wait for them to bunch up.' }
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
      { id: 'horseman-2', text: 'Rank 2: 3 Obstacles in 15 Seconds', tip: 'Find fence line, jump three times quickly.' },
      { id: 'horseman-3', text: 'Rank 3: Valentine to Rhodes Under 5 Min', tip: 'Horse Stimulants. Take direct road. Fast horse.' },
      { id: 'horseman-4', text: 'Rank 4: Drag Victim 3300 Feet', tip: 'Lasso someone, drag them while riding in big circles.' },
      { id: 'horseman-5', text: 'Rank 5: Trample 5 Animals', tip: 'Gallop through rabbit/squirrel fields.' },
      { id: 'horseman-6', text: 'Rank 6: Break All Wild Horse Breeds', tip: 'Mustang, Nokota, American Paint, Hungarian, Morgan.' },
      { id: 'horseman-7', text: 'Rank 7: Kill 7 from Horseback (No Repeaters)', tip: 'Pistols, shotguns, or bows only. Gang hideout.' },
      { id: 'horseman-8', text: 'Rank 8: Van Horn to Blackwater (No Water Touch)', tip: 'Long detour around all rivers. Use bridges only. VERY long.' },
      { id: 'horseman-9', text: 'Rank 9: Lead 2 Horses Half a Mile', tip: 'Catch 2 wild horses with lasso, ride with both following.' },
      { id: 'horseman-10', text: 'Rank 10: Blackwater to Saint Denis Under 17 Min', tip: 'REQUIRES EPILOGUE. Fast horse + stimulants.', chapter: 'epilogue' }
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
      { id: 'survivalist-2', text: 'Rank 2: Catch Fish with Bread/Cheese (3x)', tip: 'Buy from general store. Use on small fish.' },
      { id: 'survivalist-3', text: 'Rank 3: Kill 5 with Small Game Arrows', tip: 'Rabbits, squirrels, frogs. Flight feathers needed to craft.' },
      { id: 'survivalist-4', text: 'Rank 4: Craft All Arrow Types', tip: 'Dynamite, Fire, Poison, Improved, Small Game. Buy pamphlets.' },
      { id: 'survivalist-5', text: 'Rank 5: Fish in 5 Different Locations', tip: 'River, lake, pond, swamp, ocean. Different biomes.' },
      { id: 'survivalist-6', text: 'Rank 6: Kill Predator Attacking You', tip: 'Let wolf/cougar pounce, mash button, counter kill.' },
      { id: 'survivalist-7', text: 'Rank 7: 8 Consecutive Bow Kills', tip: 'Deer herd. Don\'t miss. Each miss resets counter.' },
      { id: 'survivalist-8', text: 'Rank 8: Craft 5 Thrown Weapon Types', tip: 'Homing Tomahawk, Improved Tomahawk, etc. Pamphlets needed.' },
      { id: 'survivalist-9', text: 'Rank 9: Catch Fish Over 19 Pounds', tip: 'Legendary fish or big Muskie/Pike. Special lures.' },
      { id: 'survivalist-10', text: 'Rank 10: 5 Bow Kills from Horseback (Consecutive)', tip: 'Slow ride through deer country. Don\'t miss.' }
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
      { id: 'gambler-6', text: 'Rank 6: Blackjack with 3+ Cards Wins', tip: 'Hit on low cards (12-16). RNG heavy.' },
      { id: 'gambler-7', text: 'Rank 7: Same as Rank 6 (3x)', tip: 'Just do it three times. Save/reload helps.' },
      { id: 'gambler-8', text: 'Rank 8: Win 3 Blackjack Hands in a Row', tip: 'SAVE CONSTANTLY. Pure RNG. Most frustrating challenge.' },
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
  // SECTION XVIII: PERSONAL JOURNAL
  // ============================================
  {
    id: 'journal',
    title: 'XVIII. Personal Journal',
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
    sections: ['treasures', 'weapons', 'satchel', 'camp']
  },
  {
    id: 'world',
    title: 'World & Story',
    icon: '🗺️',
    sections: ['strangers', 'legendary-animals', 'collectibles', 'missable']
  },
  {
    id: 'challenges',
    title: 'Challenges',
    icon: '🏆',
    sections: ['bandit', 'explorer', 'hunter', 'herbalist', 'sharpshooter', 'horseman', 'survivalist', 'gambler']
  },
  {
    id: 'personal',
    title: 'Personal',
    icon: '📓',
    sections: ['journal']
  }
];
