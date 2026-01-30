/**
 * Stranger Missions Section
 * Comprehensive guide with nested checkable sub-items
 * All stranger mission chains with detailed steps, locations, and rewards
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
      tip: 'Start: Valentine Saloon with Theodore Levin. Track 5 legendary gunslingers for his biography.',
      chapter: 2,
      reward: '4 Unique Revolvers, $350',
      subItems: [
        { id: 'guns-emmet', text: 'Defeat Emmet Granger', tip: 'Farm east of Flatneck Station. Clean pigsty, then duel him.', reward: "Granger's Revolver" },
        { id: 'guns-flaco', text: 'Defeat Flaco Hernandez', tip: 'Cairn Lake cabin, Ambarino. Fight gang, then duel.', reward: "Flaco's Revolver" },
        { id: 'guns-billy', text: 'Defeat Billy Midnight', tip: 'Rhodes train station. Chase on train, duel on roof.', reward: "Midnight's Pistol" },
        { id: 'guns-belle', text: 'Help Black Belle', tip: 'Bluewater Marsh. Defend from bounty hunters (no duel).', reward: 'Photo for Levin' },
        { id: 'guns-slim', text: 'Rescue Slim Grant', tip: 'Annesburg sheriff → rescue Grant from bandits.' },
        { id: 'guns-calloway', text: 'Final: Duel Jim Boy Calloway', tip: 'Saint Denis riverboat. Final confrontation.', reward: "Calloway's Revolver", missable: true }
      ]
    },

    // ========================================
    // A TEST OF FAITH (Dinosaur Bones) - 30 ITEMS
    // ========================================
    {
      id: 'stranger-dinosaur-bones',
      text: 'A Test of Faith (Dinosaur Bones)',
      tip: 'Start: Deborah MacGuiness SE of Horseshoe Overlook. Find 30 bones, mail locations from Post Office.',
      chapter: 2,
      reward: 'Quartz Chunk, Skull Statue, Jawbone Knife',
      subItems: [
        // Heartlands (7)
        { id: 'bone-01', text: 'Heartlands: Oil Field', tip: 'Bottom of well under oil derrick at Heartlands Oil Fields' },
        { id: 'bone-02', text: 'Heartlands: Dewberry Creek West', tip: 'West of Dewberry Creek, open rocky area' },
        { id: 'bone-03', text: 'Scarlett Meadows: Dewberry Creek South', tip: 'South of Dewberry Creek, in the open' },
        { id: 'bone-04', text: 'Heartlands: Flatneck Station', tip: 'Grassy hill east of Flatneck Station, near railroad' },
        { id: 'bone-05', text: "Heartlands: Caliban's Seat", tip: "SW of Caliban's Seat, along Dakota River cliff. Use Dead Eye" },
        { id: 'bone-06', text: 'Heartlands: Abandoned Shack', tip: 'South of abandoned cabin, north of "O" in New Hanover' },
        { id: 'bone-07', text: 'Heartlands: Dried River Gorge', tip: 'Follow dried river from Oil Rig to source, left bank' },
        // Cumberland Forest (2)
        { id: 'bone-08', text: 'Cumberland: Six Point Overlook', tip: 'Top of southeastern edge of Six Point Overlook' },
        { id: 'bone-09', text: 'Cumberland: Bacchus Station', tip: 'Near Bacchus Station, ridge next to spiked rock' },
        // Grizzlies (5)
        { id: 'bone-10', text: 'Grizzlies: Dakota River North', tip: 'North side of Dakota River, north of Valentine, rock cliff' },
        { id: 'bone-11', text: 'Grizzlies: Fort Wallace Ledge', tip: 'NW of Fort Wallace, high ledge from Cotorra Springs' },
        { id: 'bone-12', text: 'Grizzlies: Calumet Ravine', tip: 'North of Donner Falls, hill off path behind rocks' },
        { id: 'bone-13', text: "Grizzlies: O'Creagh's Run Overlook", tip: 'Grizzlies East mountaintop, near "S" in East' },
        { id: 'bone-14', text: 'Grizzlies: Northern Boundary', tip: 'North road at Grizzlies East → south up hill, flowery grove' },
        // Roanoke Ridge (4)
        { id: 'bone-15', text: "Roanoke: O'Creagh's Run East", tip: "East of O'Creagh's Run, railroad junction near 'R'" },
        { id: 'bone-16', text: 'Roanoke: Brandywine Drop', tip: 'Up Roanoke Ridge near Brandywine Drop waterfall' },
        { id: 'bone-17', text: 'Roanoke: Kamassa River', tip: 'West bank between "R and I" in River, middle ridge' },
        { id: 'bone-18', text: 'Roanoke: Van Horn North', tip: 'NW of Van Horn, among trees off road heading north' },
        // Lemoyne (1)
        { id: 'bone-19', text: 'Lemoyne: Scarlett Meadows Creek', tip: 'Under "L" of Lemoyne, small creek, ribcage in rocks' },
        // West Elizabeth (3)
        { id: 'bone-20', text: 'Big Valley: Northern Cave', tip: 'North from Wallace Station, cave entrance at bottom of slope' },
        { id: 'bone-21', text: 'Big Valley: Rocky Slope', tip: 'Next to "W" in West Elizabeth, rocky slope near top' },
        { id: 'bone-22', text: "Big Valley: Beryl's Dream", tip: 'Near Mount Shann, top of winding "S" road' },
        // New Austin (8) - EPILOGUE ONLY
        { id: 'bone-23', text: 'Gaptooth: South Tumbleweed', tip: 'South of "L" in Tumbleweed, ridge overlooking plain', chapter: 'epilogue' },
        { id: 'bone-24', text: 'Gaptooth: North Tumbleweed', tip: 'Between "D and G" in Gaptooth Ridge, canyon summit east side', chapter: 'epilogue' },
        { id: 'bone-25', text: 'Cholla Springs: Rattlesnake Hollow', tip: 'West of Rattlesnake Hollow, base of ridge', chapter: 'epilogue' },
        { id: 'bone-26', text: "Cholla Springs: Jorge's Gap", tip: "Western ridge of Jorge's Gap, north of Mercer Station", chapter: 'epilogue' },
        { id: 'bone-27', text: 'Rio Bravo: San Luis River West', tip: 'SW of Fort Mercer, ridge overlooking San Luis River', chapter: 'epilogue' },
        { id: 'bone-28', text: 'Rio Bravo: Del Lobo Rock', tip: 'SE of Fort Mercer, high ridge, southern tip of "Rock"', chapter: 'epilogue' },
        { id: 'bone-29', text: "Hennigan's Stead: Pike's Basin", tip: 'NE of Armadillo, western route above dried river', chapter: 'epilogue' },
        { id: 'bone-30', text: "Hennigan's Stead: San Luis North", tip: 'North of land above "San" in San Luis, small shore', chapter: 'epilogue' }
      ]
    },

    // ========================================
    // GEOLOGY FOR BEGINNERS (Rock Carvings) - 10 ITEMS
    // ========================================
    {
      id: 'stranger-rock-carvings',
      text: 'Geology for Beginners (Rock Carvings)',
      tip: 'Start: Francis Sinclair NW of Strawberry. Find 10 carvings, mail locations. Time travel mystery!',
      chapter: 2,
      reward: 'Raven Claw Talisman ingredient',
      subItems: [
        { id: 'carving-01', text: 'Mount Hagen', tip: 'Very top of Mount Hagen, Grizzlies West' },
        { id: 'carving-02', text: 'Whinyard Strait', tip: 'Rock ledge north of wooden bridge crossing Whinyard Strait' },
        { id: 'carving-03', text: 'Dakota River: Bacchus Station', tip: 'Cliff overlooking Dakota River, south of Bacchus Station' },
        { id: 'carving-04', text: 'Dakota River: Rope Bridge', tip: 'Ledge beneath cliff, directly above rope bridge' },
        { id: 'carving-05', text: 'Owanjila Lake', tip: 'Southwest shore, opposite Owanjila Dam' },
        { id: 'carving-06', text: 'Mount Shann', tip: 'Near the peak of Mount Shann' },
        { id: 'carving-07', text: 'Horseshoe Overlook', tip: 'Cliff overlooking burned settlement, SW of Horseshoe Overlook' },
        { id: 'carving-08', text: 'Heartland Overflow', tip: 'Edge of plateau above Heartland Overflow, south from Moonstone Pond' },
        { id: 'carving-09', text: 'Roanoke Ridge', tip: 'Rock ledge near top, directly east from Deer Cottage' },
        { id: 'carving-10', text: 'Elysian Pool', tip: 'Near east shore of Elysian Pool' }
      ]
    },

    // ========================================
    // THE VETERAN (Hamish Sinclair) - 4 PARTS
    // ========================================
    {
      id: 'stranger-veteran',
      text: 'The Veteran (Hamish Sinclair)',
      tip: "Start: O'Creagh's Run, Grizzlies East. Beautiful friendship storyline across 4 parts.",
      chapter: 6,
      reward: 'Buell (unique gold horse)',
      missable: true,
      subItems: [
        { id: 'veteran-01', text: 'Part 1: Recover Buell', tip: "Find Hamish by rock at O'Creagh's Run. Catch his horse Buell." },
        { id: 'veteran-02', text: 'Part 2: Fishing Trip', tip: 'After 1 day. Go fishing, catch "The Great Tyrant" legendary pike. 6AM-6PM only.' },
        { id: 'veteran-03', text: 'Part 3: Wolf Hunt', tip: 'After 1 day. Track and hunt wolves with Hamish. Watch for ambush!' },
        { id: 'veteran-04', text: 'Part 4: Giant Boar Hunt', tip: 'Final part. Hamish is killed by boar. Kill boar, get Buell + Giant Boar Tusk.', reward: 'Buell the Horse', missable: true }
      ]
    },

    // ========================================
    // THE WIDOW (Charlotte Balfour) - 3 PARTS
    // ========================================
    {
      id: 'stranger-widow',
      text: 'The Widow (Charlotte Balfour)',
      tip: 'Start: Willard\'s Rest, north of Annesburg. Teach a city widow to survive in the wilderness.',
      chapter: 6,
      reward: 'Honor boost, Supplies',
      missable: true,
      subItems: [
        { id: 'widow-01', text: 'Part 1: First Meeting', tip: 'Find Charlotte mourning her husband. Give her food.' },
        { id: 'widow-02', text: 'Part 2: Hunting Lesson', tip: 'After 1 day. Teach her to hunt rabbits with a rifle.' },
        { id: 'widow-03', text: 'Part 3: Self-Defense', tip: 'Final visit. She has learned to survive. Get supplies.', missable: true }
      ]
    },

    // ========================================
    // ARCADIA FOR AMATEURS (Albert Mason) - 4 PARTS
    // ========================================
    {
      id: 'stranger-albert-mason',
      text: 'Arcadia for Amateurs (Albert Mason)',
      tip: 'Wildlife photographer needs help with dangerous animals. Random encounters around the map.',
      chapter: 2,
      reward: '$150 total',
      subItems: [
        { id: 'albert-01', text: 'Wolves (Grizzlies)', tip: 'Find Albert being circled by wolves near Grizzlies. Save him.' },
        { id: 'albert-02', text: 'Wild Horses (Heartlands)', tip: 'Help photograph wild horses without spooking them.' },
        { id: 'albert-03', text: 'Alligators (Lagras)', tip: 'Save Albert from alligators in the swamp area.' },
        { id: 'albert-04', text: 'Cougars (Strawberry)', tip: 'Final encounter. Find his campsite, save from cougar attack.', reward: '$50' }
      ]
    },

    // ========================================
    // MARY LINTON - 3 PARTS
    // ========================================
    {
      id: 'stranger-mary-linton',
      text: 'Mary Linton (Ex-Lover)',
      tip: "Arthur's former love. Emotional storyline across chapters 2, 4, and 6.",
      chapter: 2,
      reward: 'Story/Honor',
      missable: true,
      subItems: [
        { id: 'mary-01', text: 'Part 1: Help Her Brother', tip: 'Chapter 2. Letter arrives at camp. Help rescue her brother Jamie from Chelonians.' },
        { id: 'mary-02', text: 'Part 2: Her Father', tip: 'Chapter 4. Meet in Saint Denis. Deal with her father\'s debts.' },
        { id: 'mary-03', text: 'Part 3: Final Meeting', tip: 'Chapter 6. Theater in Saint Denis. Make your choice.', missable: true }
      ]
    },

    // ========================================
    // DUCHESSES AND OTHER ANIMALS (Algernon Wasp)
    // ========================================
    {
      id: 'stranger-algernon',
      text: 'Duchesses and Other Animals',
      tip: 'Start: Algernon Wasp in Saint Denis. Very grindy exotic collection quest - 5 parts.',
      chapter: 4,
      reward: "Algernon's Revolver",
      subItems: [
        { id: 'algernon-01', text: 'Request 1: Lady Orchids', tip: 'Collect 15 Lady of the Night Orchids (Bayou Nwa, Bluewater Marsh)' },
        { id: 'algernon-02', text: 'Request 2: Spider Orchids + Egret Plumes', tip: 'Collect 10 Spider Orchids + 5 Snowy Egret feathers' },
        { id: 'algernon-03', text: 'Request 3: Cigar Orchids + Heron Plumes', tip: 'Collect 10 Cigar Orchids + 5 Little Egret + 5 Reddish Egret plumes' },
        { id: 'algernon-04', text: 'Request 4: Ghost Orchids + Pelicans', tip: 'Collect 10 Ghost Orchids + 5 Spoonbill + 5 Pelican feathers' },
        { id: 'algernon-05', text: 'Request 5: Rat Tail Orchids + Gators', tip: 'Collect 20 Rat Tail Orchids + 25 Gator Eggs = Final reward' }
      ]
    },

    // ========================================
    // A BRIGHT BOUNCING BOY (Marko Dragic)
    // ========================================
    {
      id: 'stranger-marko-dragic',
      text: 'A Bright Bouncing Boy (Robot)',
      tip: 'Start: Marko Dragic in Saint Denis. Help build a robot! 2 parts + secret robot encounter.',
      chapter: 4,
      reward: 'Electric Lantern',
      subItems: [
        { id: 'dragic-01', text: 'Part 1: Remote Control Boat', tip: 'Saint Denis dock. Help demonstrate remote-controlled boats to crowd.' },
        { id: 'dragic-02', text: 'Part 2: Laboratory Assistant', tip: 'Doverhill Lab. Help with lightning experiment. Get Electric Lantern.' },
        { id: 'dragic-03', text: 'Secret: Find the Robot', tip: 'After several days, visit lab. Find robot on mountain peak.', reward: 'Robot encounter' }
      ]
    },

    // ========================================
    // OTHER STRANGER MISSIONS (Simple list)
    // ========================================
    {
      id: 'stranger-oh-brother',
      text: 'Oh, Brother',
      tip: 'Valentine area. Help feuding brothers find treasure. 3 parts with comedic ending.',
      chapter: 2
    },
    {
      id: 'stranger-ties-that-bind',
      text: 'The Ties That Bind Us',
      tip: 'Near Rhodes. Free chain gang prisoners twice. Honor mission.',
      chapter: 3
    },
    {
      id: 'stranger-british',
      text: "He's British, Of Course",
      tip: 'Emerald Ranch area. Escaped circus animals (lion, zebra, tiger). Fun encounters!',
      chapter: 2
    },
    {
      id: 'stranger-penelope',
      text: 'The Course of True Love',
      tip: 'Rhodes. Help star-crossed lovers Beau and Penelope. 5 parts across chapters.',
      chapter: 3
    },
    {
      id: 'stranger-civil-war',
      text: 'The Iniquities of History',
      tip: 'Rhodes. Help former slave recover items from Confederate officer. Dark story.',
      chapter: 6
    },
    {
      id: 'stranger-american-inferno',
      text: 'The American Inferno, Burnt Out',
      tip: "Tanner's Ranch. Find famous author Evelyn Miller. Philosophical discussions.",
      chapter: 4
    },
    {
      id: 'stranger-brother-dorkins',
      text: 'Brothers and Sisters, One and All',
      tip: 'Saint Denis monks. Help with charity. Honor rewards.',
      chapter: 4
    },
    {
      id: 'stranger-fisher-of-fish',
      text: 'A Fisher of Fish',
      tip: 'Jeremy Gill near Flatneck Station. Catch 13 legendary fish. Map provided.',
      chapter: 2
    },
    {
      id: 'stranger-mercies-knowledge',
      text: 'The Mercies of Knowledge',
      tip: 'Saint Denis. Professor wants electric chair test subject. Dark humor.',
      chapter: 4
    },
    {
      id: 'stranger-artist-way',
      text: "The Artist's Way (Charles Chatenay)",
      tip: 'Saint Denis. Help eccentric French artist escape trouble. Very funny missions.',
      chapter: 4
    },
    {
      id: 'stranger-american-dreams',
      text: 'American Dreams (Serial Killer)',
      tip: 'Find 3 murder scenes across map → piece together clues → find killer hideout.',
      chapter: 2
    },
    {
      id: 'stranger-fine-night',
      text: 'A Fine Night For It',
      tip: 'Bayou north of Saint Denis. Strange encounter 10PM-5AM. Supernatural mystery.',
      chapter: 2
    },
    {
      id: 'stranger-wisdom-elders',
      text: 'The Wisdom of the Elders',
      tip: 'Butcher Creek. Investigate cursed village. Multiple parts.',
      chapter: 6
    },
    {
      id: 'stranger-idealism',
      text: 'Idealism and Pragmatism for Beginners',
      tip: 'Saint Denis. University professors debate. Involves Mayor Lemieux.',
      chapter: 4
    },
    {
      id: 'stranger-smoking',
      text: 'Smoking and Other Hobbies',
      tip: 'Flatneck Station. Phineas Ramsbottom wants cigarette cards. Collect all 144!',
      chapter: 2
    },
    {
      id: 'stranger-hunting-requests',
      text: 'Hunting Requests (5 Parts)',
      tip: 'Any train station clerk. Hunt specific perfect small game carcasses.',
      chapter: 2,
      subItems: [
        { id: 'hunt-req-01', text: 'Request 1', tip: 'Perfect Rabbit, Squirrel, Chipmunk carcasses' },
        { id: 'hunt-req-02', text: 'Request 2', tip: 'Perfect Rat, Woodpecker, Bat carcasses' },
        { id: 'hunt-req-03', text: 'Request 3', tip: 'Perfect Robin, Opossum, Toad carcasses' },
        { id: 'hunt-req-04', text: 'Request 4', tip: 'Perfect Cedar Waxwing, Oriole, Skunk carcasses' },
        { id: 'hunt-req-05', text: 'Request 5', tip: 'Perfect Blue Jay, Crow, Cardinal carcasses' }
      ]
    },
    // ========================================
    // ADDITIONAL MISSIONS (Wiki Cross-Check)
    // ========================================
    {
      id: 'stranger-suffragette',
      text: 'A Better World, A New Friend',
      tip: "Valentine. Meet suffragette campaigning for women's right to vote. Honor + dialogue.",
      chapter: 2
    },
    {
      id: 'stranger-fundraiser',
      text: 'Fundraiser (MISSABLE)',
      tip: '⚠️ MISSABLE after Ch6! Saint Denis. Woman collecting donations. Small honor gains.',
      chapter: 4,
      missable: true
    },
    {
      id: 'stranger-no-good-deed',
      text: 'No Good Deed',
      tip: 'Rhodes. Dr. Alphonse Renaud needs help recovering stolen medical supplies.',
      chapter: 3
    },
    {
      id: 'stranger-smell-greasepaint',
      text: 'The Smell of the Grease Paint',
      tip: 'Van Horn saloon. Circus performers need help. Multiple funny encounters.',
      chapter: 2
    },
    {
      id: 'stranger-american-inferno-epilogue',
      text: 'The American Inferno (Epilogue)',
      tip: "Tanner's Ranch. Continue Evelyn Miller's story as John. Philosophical ending.",
      chapter: 'epilogue'
    },
    {
      id: 'stranger-all-that-glitters',
      text: 'All That Glitters',
      tip: 'West of Flatneck Station. Buy treasure map for $10 or rob the stranger.',
      chapter: 2
    }
  ]
};
