/**
 * Stranger Missions Section
 * Comprehensive guide with nested checkable sub-items
 * All stranger mission chains with detailed steps, locations, and rewards
 * Enhanced with cowboy storyteller narrative
 */

export const strangersSection = {
  id: 'strangers',
  title: 'III. Stranger Missions',
  icon: '❓',
  defaultOpen: false,
  items: [
    // ========================================
    // THE NOBLEST OF MEN, AND A WOMAN (Gunslingers)
    // ========================================
    {
      id: 'stranger-gunslingers',
      text: 'The Noblest of Men, and a Woman',
      tip: '🔫 Valentine Saloon. Track 5 legendary gunslingers for Theodore Levin.',
      tip_detailed: `**Theodore Levin** is writing a biography on the Old West's greatest gunslingers. He needs your help tracking them down.

📍 **Start:** Valentine Saloon with Theodore Levin
📋 **Objective:** Find and photograph (or duel) 5 legendary gunslingers

🏆 **Rewards:** 4 Unique Revolvers + $350

*Each gunslinger has a story. Most of them end badly.*`,
      chapter: 2,
      reward: '4 Unique Revolvers, $350',
      region: 'new-hanover',
      verified: true,
      subItems: [
        { 
          id: 'guns-emmet', 
          text: 'Defeat Emmet Granger', 
          tip: '📍 Farm east of Flatneck Station. Clean pigsty, then duel.',
          tip_detailed: `**Emmet Granger** - a pig farmer with a deadly past.

📍 **Location:** Farm east of Flatneck Station
📋 **Approach:** He makes you clean his pigsty first. Then you duel.

⚠️ *Emmet buries bodies in the pig pen. Don't join them.*`,
          reward: "Granger's Revolver",
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'guns-flaco', 
          text: 'Defeat Flaco Hernandez', 
          tip: '📍 Cairn Lake cabin, Ambarino. Fight gang, then duel.',
          tip_detailed: `**Flaco Hernandez** - hiding in the frozen mountains with his gang.

📍 **Location:** Cairn Lake cabin, Ambarino
📋 **Approach:** Fight through his gang first, then duel Flaco.

❄️ *Bring warm clothes. It's cold up there.*`,
          reward: "Flaco's Revolver",
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'guns-billy', 
          text: 'Defeat Billy Midnight', 
          tip: '📍 Rhodes train station. Chase on train, duel on roof.',
          tip_detailed: `**Billy Midnight** - a coward who runs. You chase him on the train.

📍 **Location:** Rhodes train station
📋 **Approach:** He boards the train. Chase him through the cars. Duel on the roof.

🚂 *Billy talks big but runs faster. Catch him.*`,
          reward: "Midnight's Pistol",
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'guns-belle', 
          text: 'Help Black Belle', 
          tip: '📍 Bluewater Marsh. Defend from bounty hunters (no duel).',
          tip_detailed: `**Black Belle** - the only one who's actually nice to you. She's being hunted.

📍 **Location:** Bluewater Marsh
📋 **Approach:** No duel—help her fight off the bounty hunters instead.

💪 *She's the real deal. And she survives.*`,
          reward: 'Photo for Levin',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'guns-slim', 
          text: 'Rescue Slim Grant', 
          tip: '📍 Annesburg sheriff → rescue Grant from bandits.',
          tip_detailed: `**Slim Grant** - captured by bandits.

📍 **Start:** Talk to the Annesburg sheriff
📋 **Objective:** Rescue Slim from the bandits`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'guns-calloway', 
          text: 'Final: Duel Jim Boy Calloway', 
          tip: '📍 Saint Denis riverboat. Final confrontation.',
          tip_detailed: `**Jim Boy Calloway** - Theodore Levin's subject turns out to be the real legend.

📍 **Location:** Saint Denis riverboat
📋 **Finale:** The biographer becomes the story. Duel Calloway.

⚠️ **Can be missable** depending on story progression.

*Calloway was the legend all along. Now prove you're better.*`,
          reward: "Calloway's Revolver",
          missable: true,
          region: 'lemoyne',
          verified: true
        }
      ]
    },

    // ========================================
    // A TEST OF FAITH (Dinosaur Bones) - 30 ITEMS
    // ========================================
    {
      id: 'stranger-dinosaur-bones',
      text: 'A Test of Faith (Dinosaur Bones)',
      tip: '🦴 Deborah MacGuiness SE of Horseshoe Overlook. Find 30 bones.',
      tip_detailed: `**Deborah MacGuiness** is a paleontologist searching for dinosaur bones. She needs your help finding 30 of them.

📍 **Start:** Southeast of Horseshoe Overlook
📋 **Objective:** Find 30 dinosaur bones and mail their locations

🏆 **Rewards:**
• Mail 1 bone → Quartz Chunk (talisman ingredient)
• Mail all 30 → Jawbone Knife (unique weapon)

*Ancient creatures, modern science. Help Deborah make history.*`,
      chapter: 2,
      reward: 'Quartz Chunk, Skull Statue, Jawbone Knife',
      verified: true,
      subItems: [
        // Heartlands (7)
        { id: 'bone-01', text: 'Heartlands: Oil Field', tip: '📍 Bottom of well under oil derrick at Heartlands Oil Fields', region: 'new-hanover', verified: true },
        { id: 'bone-02', text: 'Heartlands: Dewberry Creek West', tip: '📍 West of Dewberry Creek, open rocky area', region: 'new-hanover', verified: true },
        { id: 'bone-03', text: 'Scarlett Meadows: Dewberry Creek South', tip: '📍 South of Dewberry Creek, in the open', region: 'lemoyne', verified: true },
        { id: 'bone-04', text: 'Heartlands: Flatneck Station', tip: '📍 Grassy hill east of Flatneck Station, near railroad', region: 'new-hanover', verified: true },
        { id: 'bone-05', text: "Heartlands: Caliban's Seat", tip: "📍 SW of Caliban's Seat, along Dakota River cliff. Use Dead Eye", region: 'new-hanover', verified: true },
        { id: 'bone-06', text: 'Heartlands: Abandoned Shack', tip: '📍 South of abandoned cabin, north of "O" in New Hanover', region: 'new-hanover', verified: true },
        { id: 'bone-07', text: 'Heartlands: Dried River Gorge', tip: '📍 Follow dried river from Oil Rig to source, left bank', region: 'new-hanover', verified: true },
        // Cumberland Forest (2)
        { id: 'bone-08', text: 'Cumberland: Six Point Overlook', tip: '📍 Top of southeastern edge of Six Point Overlook', region: 'new-hanover', verified: true },
        { id: 'bone-09', text: 'Cumberland: Bacchus Station', tip: '📍 Near Bacchus Station, ridge next to spiked rock', region: 'new-hanover', verified: true },
        // Grizzlies (5)
        { id: 'bone-10', text: 'Grizzlies: Dakota River North', tip: '📍 North side of Dakota River, north of Valentine, rock cliff', region: 'ambarino', verified: true },
        { id: 'bone-11', text: 'Grizzlies: Fort Wallace Ledge', tip: '📍 NW of Fort Wallace, high ledge from Cotorra Springs', region: 'ambarino', verified: true },
        { id: 'bone-12', text: 'Grizzlies: Calumet Ravine', tip: '📍 North of Donner Falls, hill off path behind rocks', region: 'ambarino', verified: true },
        { id: 'bone-13', text: "Grizzlies: O'Creagh's Run Overlook", tip: '📍 Grizzlies East mountaintop, near "S" in East', region: 'ambarino', verified: true },
        { id: 'bone-14', text: 'Grizzlies: Northern Boundary', tip: '📍 North road at Grizzlies East → south up hill, flowery grove', region: 'ambarino', verified: true },
        // Roanoke Ridge (4)
        { id: 'bone-15', text: "Roanoke: O'Creagh's Run East", tip: "📍 East of O'Creagh's Run, railroad junction near 'R'", region: 'new-hanover', verified: true },
        { id: 'bone-16', text: 'Roanoke: Brandywine Drop', tip: '📍 Up Roanoke Ridge near Brandywine Drop waterfall', region: 'new-hanover', verified: true },
        { id: 'bone-17', text: 'Roanoke: Kamassa River', tip: '📍 West bank between "R and I" in River, middle ridge', region: 'new-hanover', verified: true },
        { id: 'bone-18', text: 'Roanoke: Van Horn North', tip: '📍 NW of Van Horn, among trees off road heading north', region: 'new-hanover', verified: true },
        // Lemoyne (1)
        { id: 'bone-19', text: 'Lemoyne: Scarlett Meadows Creek', tip: '📍 Under "L" of Lemoyne, small creek, ribcage in rocks', region: 'lemoyne', verified: true },
        // West Elizabeth (3)
        { id: 'bone-20', text: 'Big Valley: Northern Cave', tip: '📍 North from Wallace Station, cave entrance at bottom of slope', region: 'west-elizabeth', verified: true },
        { id: 'bone-21', text: 'Big Valley: Rocky Slope', tip: '📍 Next to "W" in West Elizabeth, rocky slope near top', region: 'west-elizabeth', verified: true },
        { id: 'bone-22', text: "Big Valley: Beryl's Dream", tip: '📍 Near Mount Shann, top of winding "S" road', region: 'west-elizabeth', verified: true },
        // New Austin (8) - EPILOGUE ONLY
        { id: 'bone-23', text: 'Gaptooth: South Tumbleweed', tip: '📍 ⚠️ EPILOGUE. South of "L" in Tumbleweed, ridge overlooking plain', chapter: 'epilogue', region: 'new-austin', verified: true },
        { id: 'bone-24', text: 'Gaptooth: North Tumbleweed', tip: '📍 ⚠️ EPILOGUE. Between "D and G" in Gaptooth Ridge, canyon summit', chapter: 'epilogue', region: 'new-austin', verified: true },
        { id: 'bone-25', text: 'Cholla Springs: Rattlesnake Hollow', tip: '📍 ⚠️ EPILOGUE. West of Rattlesnake Hollow, base of ridge', chapter: 'epilogue', region: 'new-austin', verified: true },
        { id: 'bone-26', text: "Cholla Springs: Jorge's Gap", tip: "📍 ⚠️ EPILOGUE. Western ridge of Jorge's Gap, north of Mercer Station", chapter: 'epilogue', region: 'new-austin', verified: true },
        { id: 'bone-27', text: 'Rio Bravo: San Luis River West', tip: '📍 ⚠️ EPILOGUE. SW of Fort Mercer, ridge overlooking San Luis River', chapter: 'epilogue', region: 'new-austin', verified: true },
        { id: 'bone-28', text: 'Rio Bravo: Del Lobo Rock', tip: '📍 ⚠️ EPILOGUE. SE of Fort Mercer, high ridge, southern tip', chapter: 'epilogue', region: 'new-austin', verified: true },
        { id: 'bone-29', text: "Hennigan's Stead: Pike's Basin", tip: '📍 ⚠️ EPILOGUE. NE of Armadillo, western route above dried river', chapter: 'epilogue', region: 'new-austin', verified: true },
        { id: 'bone-30', text: "Hennigan's Stead: San Luis North", tip: '📍 ⚠️ EPILOGUE. North of "San" in San Luis, small shore', chapter: 'epilogue', region: 'new-austin', verified: true }
      ]
    },

    // ========================================
    // GEOLOGY FOR BEGINNERS (Rock Carvings) - 10 ITEMS
    // ========================================
    {
      id: 'stranger-rock-carvings',
      text: 'Geology for Beginners (Rock Carvings)',
      tip: '🗿 Francis Sinclair NW of Strawberry. Find 10 carvings. Time travel mystery!',
      tip_detailed: `**Francis Sinclair** is... strange. He has a birthmark that looks like a map. He wants you to find 10 rock carvings.

📍 **Start:** Northwest of Strawberry
📋 **Objective:** Find 10 rock carvings and mail their locations

🏆 **Reward:** Old Brass Compass (Raven Claw Talisman ingredient)

⏰ *Something's not right about Francis. The ending reveals why.*`,
      chapter: 2,
      reward: 'Raven Claw Talisman ingredient',
      verified: true,
      subItems: [
        { id: 'carving-01', text: 'Mount Hagen', tip: '📍 Very top of Mount Hagen, Grizzlies West', region: 'ambarino', verified: true },
        { id: 'carving-02', text: 'Whinyard Strait', tip: '📍 Rock ledge north of wooden bridge crossing Whinyard Strait', region: 'ambarino', verified: true },
        { id: 'carving-03', text: 'Dakota River: Bacchus Station', tip: '📍 Cliff overlooking Dakota River, south of Bacchus Station', region: 'new-hanover', verified: true },
        { id: 'carving-04', text: 'Dakota River: Rope Bridge', tip: '📍 Ledge beneath cliff, directly above rope bridge', region: 'new-hanover', verified: true },
        { id: 'carving-05', text: 'Owanjila Lake', tip: '📍 Southwest shore, opposite Owanjila Dam', region: 'west-elizabeth', verified: true },
        { id: 'carving-06', text: 'Mount Shann', tip: '📍 Near the peak of Mount Shann', region: 'west-elizabeth', verified: true },
        { id: 'carving-07', text: 'Horseshoe Overlook', tip: '📍 Cliff overlooking burned settlement, SW of Horseshoe Overlook', region: 'new-hanover', verified: true },
        { id: 'carving-08', text: 'Heartland Overflow', tip: '📍 Edge of plateau above Heartland Overflow, south from Moonstone Pond', region: 'new-hanover', verified: true },
        { id: 'carving-09', text: 'Roanoke Ridge', tip: '📍 Rock ledge near top, directly east from Deer Cottage', region: 'new-hanover', verified: true },
        { id: 'carving-10', text: 'Elysian Pool', tip: '📍 Near east shore of Elysian Pool', region: 'new-hanover', verified: true }
      ]
    },

    // ========================================
    // THE VETERAN (Hamish Sinclair) - 4 PARTS
    // ========================================
    {
      id: 'stranger-veteran',
      text: 'The Veteran (Hamish Sinclair)',
      tip: "🎖️ O'Creagh's Run. Beautiful friendship storyline. Get Buell the horse!",
      tip_detailed: `**Hamish Sinclair** is a Civil War veteran living alone at O'Creagh's Run. His friendship with Arthur is one of the most beautiful in the game.

📍 **Start:** O'Creagh's Run, Grizzlies East

🏆 **Final Reward:** **Buell** - a unique gold Cremello horse

⚠️ **MISSABLE** - Complete before Chapter 6 ends!

*Hamish deserves better than what happens. But Buell will remember him.*`,
      chapter: 6,
      reward: 'Buell (unique gold horse)',
      missable: true,
      region: 'new-hanover',
      verified: true,
      subItems: [
        { 
          id: 'veteran-01', 
          text: 'Part 1: Recover Buell', 
          tip: "📍 Find Hamish by rock at O'Creagh's Run. Catch his horse Buell.",
          tip_detailed: `Meet Hamish sitting by a rock, calling for his horse. Help catch **Buell**.`,
          verified: true
        },
        { 
          id: 'veteran-02', 
          text: 'Part 2: Fishing Trip', 
          tip: '📍 After 1 day. Catch "The Great Tyrant" legendary pike. 6AM-6PM only.',
          tip_detailed: `Go fishing with Hamish. You're hunting a legendary pike called "The Great Tyrant."

⏰ **Daytime only** (6AM-6PM)`,
          verified: true
        },
        { 
          id: 'veteran-03', 
          text: 'Part 3: Wolf Hunt', 
          tip: '📍 After 1 day. Hunt wolves with Hamish. Watch for ambush!',
          tip_detailed: `Hunt wolves together. The pack will ambush—protect Hamish.`,
          verified: true
        },
        { 
          id: 'veteran-04', 
          text: 'Part 4: Giant Boar Hunt', 
          tip: '📍 Final part. Hamish dies. Kill boar, inherit Buell.',
          tip_detailed: `The final hunt. Hamish is killed by the giant boar.

💔 Kill the boar and take **Buell** as Hamish would have wanted.

🏆 **Reward:** Buell becomes your horse + Giant Boar Tusk`,
          reward: 'Buell the Horse',
          missable: true,
          verified: true
        }
      ]
    },

    // ========================================
    // THE WIDOW (Charlotte Balfour) - 3 PARTS
    // ========================================
    {
      id: 'stranger-widow',
      text: 'The Widow (Charlotte Balfour)',
      tip: "💔 Willard's Rest, north of Annesburg. Teach a widow to survive.",
      tip_detailed: `**Charlotte Balfour** is a city woman whose husband just died. She has no idea how to survive in the wilderness.

📍 **Start:** Willard's Rest, north of Annesburg

📋 **Objective:** Teach her to hunt and survive

⚠️ **MISSABLE** - Complete before Chapter 6 ends!

*Arthur teaches her to live. In return, she gives him hope.*`,
      chapter: 6,
      reward: 'Honor boost, Supplies',
      missable: true,
      region: 'new-hanover',
      verified: true,
      subItems: [
        { 
          id: 'widow-01', 
          text: 'Part 1: First Meeting', 
          tip: '📍 Find Charlotte mourning her husband. Give her food.',
          verified: true
        },
        { 
          id: 'widow-02', 
          text: 'Part 2: Hunting Lesson', 
          tip: '📍 After 1 day. Teach her to hunt rabbits with a rifle.',
          verified: true
        },
        { 
          id: 'widow-03', 
          text: 'Part 3: Self-Defense', 
          tip: '📍 Final visit. She has learned to survive.',
          tip_detailed: `Charlotte has learned. She can take care of herself now.

⚠️ **Visit her again in the Epilogue as John for closure.**`,
          missable: true,
          verified: true
        }
      ]
    },

    // ========================================
    // ARCADIA FOR AMATEURS (Albert Mason) - 4 PARTS
    // ========================================
    {
      id: 'stranger-albert-mason',
      text: 'Arcadia for Amateurs (Albert Mason)',
      tip: '📸 Wildlife photographer needs help. Random encounters across map.',
      tip_detailed: `**Albert Mason** is a wildlife photographer from New York who keeps getting into trouble with the animals he's trying to photograph.

📋 **Random encounters** - he appears at different locations

🏆 **Total Reward:** $150

📸 *Albert's ambitious but hopeless. Keep saving him.*`,
      chapter: 2,
      reward: '$150 total',
      verified: true,
      subItems: [
        { id: 'albert-01', text: 'Wolves (Grizzlies)', tip: '📍 Save Albert from wolves circling him.', region: 'ambarino', verified: true },
        { id: 'albert-02', text: 'Wild Horses (Heartlands)', tip: '📍 Help photograph wild horses without spooking them.', region: 'new-hanover', verified: true },
        { id: 'albert-03', text: 'Alligators (Lagras)', tip: '📍 Save Albert from alligators in the swamp.', region: 'lemoyne', verified: true },
        { id: 'albert-04', text: 'Cougars (Strawberry)', tip: '📍 Final encounter. Save him from cougar attack.', reward: '$50', region: 'west-elizabeth', verified: true }
      ]
    },

    // ========================================
    // MARY LINTON - 3 PARTS
    // ========================================
    {
      id: 'stranger-mary-linton',
      text: 'Mary Linton (Ex-Lover)',
      tip: "💔 Arthur's former love. Emotional storyline across chapters.",
      tip_detailed: `**Mary Linton** was Arthur's great love. She left him years ago, but now she needs his help.

📋 **Chapters:** 2, 4, and 6

⚠️ **MISSABLE** - Each part must be done in its chapter!

*Some loves never die. They just hurt forever.*`,
      chapter: 2,
      reward: 'Story/Honor',
      missable: true,
      verified: true,
      subItems: [
        { 
          id: 'mary-01', 
          text: 'Part 1: Help Her Brother', 
          tip: '📍 Chapter 2 letter. Rescue Jamie from Chelonians cult.',
          chapter: 2,
          verified: true
        },
        { 
          id: 'mary-02', 
          text: "Part 2: Her Father", 
          tip: "📍 Chapter 4. Meet in Saint Denis. Deal with father's debts.",
          chapter: 4,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'mary-03', 
          text: 'Part 3: Final Meeting', 
          tip: '📍 Chapter 6. Saint Denis Theater. Make your choice.',
          tip_detailed: `The final meeting. Mary asks Arthur to run away with her.

💔 *Whatever you choose, it hurts.*`,
          chapter: 6,
          missable: true,
          region: 'lemoyne',
          verified: true
        }
      ]
    },

    // ========================================
    // DUCHESSES AND OTHER ANIMALS (Algernon Wasp)
    // ========================================
    {
      id: 'stranger-algernon',
      text: 'Duchesses and Other Animals',
      tip: '🌺 Algernon Wasp in Saint Denis. VERY grindy exotic quest.',
      tip_detailed: `**Algernon Wasp** needs exotic orchids, bird plumes, and gator eggs. The grindiest quest in the game.

📍 **Start:** Greenhouse north of Saint Denis (Chapter 4+)

⚠️ Orchids only spawn up to current quest requirements!

🏆 **Final Reward:** Algernon's Revolver + Exotic Hat + $200`,
      chapter: 4,
      reward: "Algernon's Revolver",
      region: 'lemoyne',
      verified: true,
      subItems: [
        { id: 'algernon-01', text: 'Request 1: Lady of Night Orchids (15)', tip: '📍 Bayou Nwa, Bluewater Marsh. + Little/Reddish Egret plumes.', verified: true },
        { id: 'algernon-02', text: 'Request 2: Moccasin/Slipper Orchids', tip: '📍 Ground orchids. + Snowy Egret + Spoonbill plumes.', verified: true },
        { id: 'algernon-03', text: "Request 3: Acuna's Star/Cigar Orchids", tip: '📍 Tree orchids in Bayou. + Gator Eggs (5).', verified: true },
        { id: 'algernon-04', text: 'Request 4: Ghost/Night Scented/Rat Tail', tip: '📍 Deep swamp orchids. + Spider Orchids.', verified: true },
        { id: 'algernon-05', text: "Request 5: Clamshell/Queen's/Sparrow's Egg", tip: "📍 Final orchids + Dragon's Mouth + 20 more Gator Eggs.", verified: true }
      ]
    },

    // ========================================
    // A BRIGHT BOUNCING BOY (Marko Dragic)
    // ========================================
    {
      id: 'stranger-marko-dragic',
      text: 'A Bright Bouncing Boy (Robot)',
      tip: '🤖 Marko Dragic in Saint Denis. Help build a robot!',
      tip_detailed: `**Marko Dragic** is a mad scientist building a remote-controlled robot. One of the strangest and most memorable quests.

📍 **Start:** Saint Denis dock (Chapter 4+)

🏆 **Reward:** Electric Lantern (brighter than standard)

🤖 *The ending involves finding the robot on a mountain. Don't skip it.*`,
      chapter: 4,
      reward: 'Electric Lantern',
      region: 'lemoyne',
      verified: true,
      subItems: [
        { id: 'dragic-01', text: 'Part 1: Remote Control Boat', tip: '📍 Saint Denis dock. Demo boats to crowd.', verified: true },
        { id: 'dragic-02', text: 'Part 2: Laboratory Assistant', tip: '📍 Doverhill Lab. Lightning experiment. Get Electric Lantern.', verified: true },
        { id: 'dragic-03', text: 'Secret: Find the Robot', tip: '📍 After several days, visit lab. Robot escaped to mountain peak!', reward: 'Robot encounter', verified: true }
      ]
    },

    // ========================================
    // OTHER STRANGER MISSIONS
    // ========================================
    {
      id: 'stranger-oh-brother',
      text: 'Oh, Brother',
      tip: '👬 Valentine area. Feuding brothers seek treasure. Comedic.',
      tip_detailed: `Two brothers can't stop fighting over treasure. Help them (or don't).`,
      chapter: 2,
      region: 'new-hanover',
      verified: true
    },
    {
      id: 'stranger-ties-that-bind',
      text: 'The Ties That Bind Us',
      tip: '⛓️ Near Rhodes. Free chain gang prisoners. Honor mission.',
      chapter: 3,
      region: 'lemoyne',
      verified: true
    },
    {
      id: 'stranger-british',
      text: "He's British, Of Course",
      tip: '🦁 Emerald Ranch. Escaped circus animals (lion, zebra, tiger)!',
      chapter: 2,
      region: 'new-hanover',
      verified: true
    },
    {
      id: 'stranger-penelope',
      text: 'The Course of True Love',
      tip: '💕 Rhodes. Star-crossed lovers Beau and Penelope. 5 parts.',
      chapter: 3,
      region: 'lemoyne',
      verified: true
    },
    {
      id: 'stranger-civil-war',
      text: 'The Iniquities of History',
      tip: '📿 Rhodes. Help former slave recover items. Dark story.',
      chapter: 6,
      region: 'lemoyne',
      verified: true
    },
    {
      id: 'stranger-american-inferno',
      text: 'The American Inferno, Burnt Out',
      tip: "📖 Tanner's Ranch. Famous author Evelyn Miller. Philosophical.",
      chapter: 4,
      verified: true
    },
    {
      id: 'stranger-brother-dorkins',
      text: 'Brothers and Sisters, One and All',
      tip: '⛪ Saint Denis monks. Help with charity. Honor rewards.',
      chapter: 4,
      region: 'lemoyne',
      verified: true
    },
    {
      id: 'stranger-fisher-of-fish',
      text: 'A Fisher of Fish',
      tip: '🎣 Jeremy Gill near Flatneck Station. Catch 13 legendary fish.',
      tip_detailed: `**Jeremy Gill** lives on Flat Iron Lake's eastern shore. He'll give you a map to all 13 legendary fish.

📋 Catch and mail each fish to Jeremy. Final reward requires visiting him in person.`,
      chapter: 2,
      region: 'new-hanover',
      verified: true
    },
    {
      id: 'stranger-mercies-knowledge',
      text: 'The Mercies of Knowledge',
      tip: '⚡ Saint Denis. Professor wants electric chair test subject. Dark humor.',
      chapter: 4,
      region: 'lemoyne',
      verified: true
    },
    {
      id: 'stranger-artist-way',
      text: "The Artist's Way (Charles Chatenay)",
      tip: '🎨 Saint Denis. Eccentric French artist. Very funny missions.',
      chapter: 4,
      region: 'lemoyne',
      verified: true
    },
    {
      id: 'stranger-american-dreams',
      text: 'American Dreams (Serial Killer)',
      tip: '🔪 Find 3 murder scenes → clues → killer hideout.',
      tip_detailed: `A serial killer is leaving clues at murder scenes. Find all three to discover his hideout.

📍 **3 murder scenes** scattered across the map
🔍 Piece together clues from each scene
🏚️ Find the killer's basement lair

*One of the darkest quests in the game.*`,
      chapter: 2,
      verified: true
    },
    {
      id: 'stranger-fine-night',
      text: 'A Fine Night For It',
      tip: '🌙 Bayou N of Saint Denis. Strange encounter 10PM-5AM. Supernatural.',
      tip_detailed: `Something strange happens in the bayou at night...

⏰ **10PM-5AM only**

*Listen for the sounds. Follow them.*`,
      chapter: 2,
      region: 'lemoyne',
      verified: true
    },
    {
      id: 'stranger-wisdom-elders',
      text: 'The Wisdom of the Elders',
      tip: "🦷 Butcher Creek. Investigate cursed village. Multiple parts.",
      chapter: 6,
      region: 'new-hanover',
      verified: true
    },
    {
      id: 'stranger-idealism',
      text: 'Idealism and Pragmatism for Beginners',
      tip: '🎓 Saint Denis. University professors. Involves Mayor Lemieux.',
      chapter: 4,
      region: 'lemoyne',
      verified: true
    },
    {
      id: 'stranger-smoking',
      text: 'Smoking and Other Hobbies',
      tip: '🃏 Flatneck Station. Phineas Ramsbottom wants 144 cigarette cards!',
      chapter: 2,
      region: 'new-hanover',
      verified: true
    },
    {
      id: 'stranger-hunting-requests',
      text: 'Hunting Requests (5 Parts)',
      tip: '🐿️ Any train station. Hunt perfect small game carcasses.',
      tip_detailed: `The train station clerk has hunting requests. You need **perfect small game carcasses**.

⭐ Use **Small Game Arrows** for perfect pelts!`,
      chapter: 2,
      verified: true,
      subItems: [
        { id: 'hunt-req-01', text: 'Request 1', tip: '📋 Perfect Rabbit, Squirrel, Chipmunk carcasses', verified: true },
        { id: 'hunt-req-02', text: 'Request 2', tip: '📋 Perfect Rat, Woodpecker, Bat carcasses', verified: true },
        { id: 'hunt-req-03', text: 'Request 3', tip: '📋 Perfect Robin, Opossum, Toad carcasses', verified: true },
        { id: 'hunt-req-04', text: 'Request 4', tip: '📋 Perfect Cedar Waxwing, Oriole, Skunk carcasses', verified: true },
        { id: 'hunt-req-05', text: 'Request 5', tip: '📋 Perfect Blue Jay, Crow, Cardinal carcasses', verified: true }
      ]
    },
    // ========================================
    // ADDITIONAL MISSIONS
    // ========================================
    {
      id: 'stranger-suffragette',
      text: 'A Better World, A New Friend',
      tip: "🗳️ Valentine. Suffragette campaigning for women's vote.",
      chapter: 2,
      region: 'new-hanover',
      verified: true
    },
    {
      id: 'stranger-fundraiser',
      text: 'Fundraiser ⚠️ MISSABLE',
      tip: '⚠️ MISSABLE after Ch6! Saint Denis woman collecting donations.',
      chapter: 4,
      missable: true,
      region: 'lemoyne',
      verified: true
    },
    {
      id: 'stranger-no-good-deed',
      text: 'No Good Deed',
      tip: '💊 Rhodes. Dr. Alphonse Renaud needs stolen medical supplies.',
      chapter: 3,
      region: 'lemoyne',
      verified: true
    },
    {
      id: 'stranger-smell-greasepaint',
      text: 'The Smell of the Grease Paint',
      tip: '🎪 Van Horn saloon. Circus performers. Multiple funny encounters.',
      chapter: 2,
      region: 'new-hanover',
      verified: true
    },
    {
      id: 'stranger-american-inferno-epilogue',
      text: 'The American Inferno (Epilogue)',
      tip: "📖 Tanner's Ranch. Continue Evelyn Miller's story as John.",
      chapter: 'epilogue',
      verified: true
    },
    {
      id: 'stranger-all-that-glitters',
      text: 'All That Glitters',
      tip: '💰 W of Flatneck Station. Buy treasure map ($10) or rob stranger.',
      chapter: 2,
      region: 'new-hanover',
      verified: true
    }
  ]
};
