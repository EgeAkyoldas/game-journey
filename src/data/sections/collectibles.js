/**
 * Collectibles Section
 * All major collectible categories with detailed subItems
 * Enhanced with cowboy storyteller narrative
 */

export const collectiblesSection = {
  id: 'collectibles',
  title: 'XVII. Collectibles',
  icon: '🏆',
  defaultOpen: false,
  items: [
    // ========================================
    // DREAMCATCHERS (20 Total)
    // ========================================
    {
      id: 'collect-dreamcatchers',
      text: 'Dreamcatchers (20 Total)',
      tip: '🪶 Hanging in trees. All 20 = map to Ancient Arrowhead.',
      tip_detailed: `There are **20 dreamcatchers** hidden across the world, hanging in tree branches. Find them all and you'll receive a map leading to the **Ancient Arrowhead**.

🏆 **Reward:** Ancient Arrowhead - reduces bow stamina drain when drawn.

🔍 Use **Eagle Eye** to spot them glinting in the trees.

*Native wisdom, hanging in the wind. Each one brings you closer to the prize.*`,
      reward: 'Ancient Arrowhead',
      verified: true,
      subItems: [
        // Heartlands & New Hanover (5)
        { id: 'dream-01', text: 'Flatneck Station West', tip: ' Hill west of Flatneck Station, in a tree.', region: 'new-hanover', verified: true },
        { id: 'dream-02', text: "Caliban's Seat West", tip: " Near road junction, tree facing north.", region: 'new-hanover', verified: true },
        { id: 'dream-03', text: 'Dakota River South Bank', tip: ' On a ledge facing the river, near legendary fish spot.', region: 'new-hanover', verified: true },
        { id: 'dream-04', text: 'Heartland Overflow', tip: ' Large leafless tree near overflow area.', region: 'new-hanover', verified: true },
        { id: 'dream-05', text: 'Heartland Hills', tip: ' Large standalone leafless tree.', region: 'new-hanover', verified: true },
        // Grizzlies (5)
        { id: 'dream-06', text: 'Grizzlies SE', tip: ' On mountain path, past fallen tree.', region: 'ambarino', verified: true },
        { id: 'dream-07', text: 'Cotorra Springs East', tip: ' Biggest tree in small thicket.', region: 'ambarino', verified: true },
        { id: 'dream-08', text: 'Near The Loft', tip: ' South of The Loft, only bare tree on right side.', region: 'ambarino', verified: true },
        { id: 'dream-09', text: 'Snowy Peak', tip: ' Clump of trees after crossing river, heading NNW.', region: 'ambarino', verified: true },
        { id: 'dream-10', text: 'Campfire Area', tip: ' Big tree behind log and small stump.', region: 'ambarino', verified: true },
        // Roanoke Ridge (5)
        { id: 'dream-11', text: 'Annesburg North 1', tip: ' In a clearing north of Annesburg.', region: 'new-hanover', verified: true },
        { id: 'dream-12', text: 'Annesburg North 2', tip: ' Edge of road just north of town.', region: 'new-hanover', verified: true },
        { id: 'dream-13', text: 'Annesburg SE', tip: ' Top of hill southeast of Annesburg.', region: 'new-hanover', verified: true },
        { id: 'dream-14', text: 'Annesburg South', tip: ' Middle of tree group off road.', region: 'new-hanover', verified: true },
        { id: 'dream-15', text: 'Roanoke Ridge Hill', tip: ' Tree that does not stand out, higher up.', region: 'new-hanover', verified: true },
        // Bluewater & Other (5)
        { id: 'dream-16', text: 'Elysian Pool South', tip: ' Big tree by a bush south of pool.', region: 'new-hanover', verified: true },
        { id: 'dream-17', text: 'Bluewater Marsh NE', tip: ' Tree at path fork in marsh.', region: 'lemoyne', verified: true },
        { id: 'dream-18', text: "Lonnie's Shack North", tip: " On a path north of the shack.", region: 'lemoyne', verified: true },
        { id: 'dream-19', text: 'Aberdeen Pig Farm West', tip: ' Hill west of the creepy farm.', region: 'new-hanover', verified: true },
        { id: 'dream-20', text: 'Elysian Pool Area (LAST)', tip: ' Beyond old house foundation. LAST ONE → Get Map!', region: 'new-hanover', priority: true, verified: true }
      ]
    },
    // ========================================
    // EXOTICS QUEST (5 Parts - Algernon Wasp)
    // ========================================
    {
      id: 'collect-exotics',
      text: 'Exotic Quest (Duchesses and Other Animals)',
      tip: '🌺 Algernon Wasp - Greenhouse N of Saint Denis. Chapter 4+. Very grindy!',
      tip_detailed: `**Algernon Wasp** is a strange little man with a greenhouse **north of Saint Denis**. He needs exotic orchids, bird plumes, and gator eggs for his... projects.

⚠️ **Available:** Chapter 4+, after "The Gilded Cage"

📋 **5 Parts** - each must be completed before the next begins. Orchids only spawn up to the current quest amount!

🏆 **Final Rewards:** Algernon's Revolver (unique) + Exotic Hat + $200

*The grindiest quest in the game. Patience required.*`,
      reward: "Algernon's Revolver + Exotic Hat + $200",
      chapter: 4,
      region: 'lemoyne',
      verified: true,
      subItems: [
        // Part 1
        { id: 'exotic-part1', text: '── PART I ──', tip: '⚠️ START HERE: Orchids only spawn up to current quest amount!', verified: true },
        { id: 'exotic-p1-lady', text: 'Lady of the Night Orchids (15)', tip: ' Trees in Bayou Nwa southern shore, N of Kamassa River, Caliga Hall area.', region: 'lemoyne', verified: true },
        { id: 'exotic-p1-egret-little', text: 'Little Egret Plumes (5)', tip: '🐦 White egrets in Bayou Nwa. Varmint Rifle headshot. Farm near Lagras.', region: 'lemoyne', verified: true },
        { id: 'exotic-p1-egret-reddish', text: 'Reddish Egret Plumes (5)', tip: '🐦 Scarlett Meadows coastline. Reddish colored birds.', region: 'lemoyne', verified: true },
        // Part 2
        { id: 'exotic-part2', text: '── PART II ──', tip: '✅ Turn in Part I first! New orchids spawn after.', verified: true },
        { id: 'exotic-p2-moccasin', text: 'Moccasin Flower Orchids (10)', tip: ' GROUND orchids around Butcher Creek, Roanoke Ridge.', region: 'new-hanover', verified: true },
        { id: 'exotic-p2-slipper', text: 'Lady Slipper Orchids (7)', tip: ' GROUND orchids in Big Valley, West Elizabeth.', region: 'west-elizabeth', verified: true },
        { id: 'exotic-p2-egret-snowy', text: 'Snowy Egret Plumes (5)', tip: '🐦 Farm Bayou Nwa → Rhodes → Emerald Station fast travel → sleep → return.', region: 'lemoyne', verified: true },
        { id: 'exotic-p2-spoonbill', text: 'Roseate Spoonbill Plumes (5)', tip: '🩷 PINK birds! Bayou Nwa islands. Beautiful but rare.', region: 'lemoyne', verified: true },
        // Part 3  
        { id: 'exotic-part3', text: '── PART III ──', tip: '🔍 Quest getting harder. Use Eagle Eye (L3+R3) constantly!', verified: true },
        { id: 'exotic-p3-acuna', text: "Acuna's Star Orchids (3)", tip: ' TREES in NE Bayou Nwa.', region: 'lemoyne', verified: true },
        { id: 'exotic-p3-cigar', text: 'Cigar Orchids (7)', tip: ' TREES in Bluewater Marsh and NE Bayou Nwa.', region: 'lemoyne', verified: true },
        { id: 'exotic-p3-eggs', text: 'Gator Eggs (5)', tip: ' Nests near water in Bayou Nwa. Check shorelines.', region: 'lemoyne', verified: true },
        // Part 4
        { id: 'exotic-part4', text: '── PART IV ──', tip: '💪 Almost there! Keep searching systematically.', verified: true },
        { id: 'exotic-p4-ghost', text: 'Ghost Orchids (5)', tip: ' TREES deep in Bayou Nwa. Hard to spot - use Eagle Eye!', region: 'lemoyne', verified: true },
        { id: 'exotic-p4-night', text: 'Night Scented Orchids (5)', tip: ' TREES south of Braithwaite Manor area.', region: 'lemoyne', verified: true },
        { id: 'exotic-p4-rat', text: 'Rat Tail Orchids (10)', tip: ' TREES throughout Lemoyne swamps.', region: 'lemoyne', verified: true },
        { id: 'exotic-p4-spider', text: 'Spider Orchids (5)', tip: ' TREES in Lemoyne swamp areas.', region: 'lemoyne', verified: true },
        // Part 5 - Final
        { id: 'exotic-part5', text: '── PART V (FINAL) ──', tip: '🎉 Last stretch! Collect these for the big reward.', verified: true },
        { id: 'exotic-p5-clamshell', text: 'Clamshell Orchids (5)', tip: ' TREES E of Caliga Hall and Shady Belle, along riverfront.', region: 'lemoyne', verified: true },
        { id: 'exotic-p5-queens', text: "Queen's Orchids (5)", tip: " GROUND near shores of Lagras and Lakay, Bayou Nwa.", region: 'lemoyne', verified: true },
        { id: 'exotic-p5-sparrow', text: "Sparrow's Egg Orchids (10)", tip: ' GROUND N of Roanoke Ridge and Elysian Pool.', region: 'new-hanover', verified: true },
        { id: 'exotic-p5-dragon', text: "Dragon's Mouth Orchids (5)", tip: ' GROUND scattered across Grizzlies East mountains.', region: 'ambarino', verified: true },
        { id: 'exotic-p5-eggs', text: 'Gator Eggs (20 more)', tip: ' 20 more eggs! Same locations. Check repeatedly.', region: 'lemoyne', verified: true },
        { id: 'exotic-complete', text: '✨ COMPLETE → Get Rewards!', tip: "🎁 Return to Algernon for: Algernon's Revolver, Exotic Hat, $200 cash!", priority: true, reward: "Algernon's Revolver + Hat + $200", verified: true }
      ]
    },
    // ========================================
    // OTHER COLLECTIBLES (References to other sections)
    // ========================================
    {
      id: 'collect-dino',
      text: 'Dinosaur Bones (30 Total)',
      tip: '🦴 See "A Test of Faith" in Stranger Missions. Full detailed list there.',
      tip_detailed: `**30 dinosaur bones** are scattered across the world. Find them all for paleontologist **Deborah MacGuinness**.

 **Quest:** "A Test of Faith" stranger mission

🏆 **Rewards:**
• Mail 1 bone → Quartz Chunk (talisman ingredient)
• Mail all 30 → Jawbone Knife (unique weapon)

*Ancient bones, modern science. Deborah's ahead of her time.*`,
      reward: 'Jawbone Knife + Quartz Chunk',
      verified: true
    },
    {
      id: 'collect-rock',
      text: 'Rock Carvings (10 Total)',
      tip: '🗿 See "Geology for Beginners" in Stranger Missions.',
      tip_detailed: `**10 rock carvings** are hidden in cliffsides and mountain faces. Find them all for **Francis Sinclair**.

 **Quest:** "Geology for Beginners" stranger mission

🏆 **Final Reward:** Old Brass Compass - required for the **Raven Claw Talisman** (-20% weapon degradation!)

🗿 *Francis Sinclair is... strange. But his compass is worth the search.*`,
      reward: 'Old Brass Compass (Raven Talisman ingredient)',
      verified: true
    },
    {
      id: 'collect-cig',
      text: 'Cigarette Cards (144 Total - 12 Sets)',
      tip: '🃏 See "Cigarette Cards" section for all 12 sets.',
      tip_detailed: `**144 cigarette cards** across **12 themed sets**. Collect them by:
• Buying premium cigarettes (guaranteed cards)
• Finding them in the world
• Looting enemies

📋 **12 Sets:** Flora, Fauna, Horses, Actresses, etc.

🏆 **Rewards:** Complete any set → Vintage Civil War Handcuffs + cash bonuses

🃏 *Mail completed sets to Phineas T. Ramsbottom in Saint Denis.*`,
      reward: 'Vintage Civil War Handcuffs + cash',
      verified: true
    },
    {
      id: 'collect-graves',
      text: 'Graves (9 Total)',
      tip: '🪦 See "Gang Member Graves" section.',
      tip_detailed: `Visit the **9 graves** of fallen gang members. A somber journey through loss.

⚠️ **Epilogue content** - requires completing the main story.

🏆 **Reward:** "Paying Respects" achievement/trophy

🪦 *Pay your respects to those who didn't make it.*`,
      reward: 'Paying Respects Trophy',
      chapter: 'epilogue',
      verified: true
    },
    {
      id: 'collect-hunting',
      text: 'Hunting Requests (5 Total)',
      tip: '🐿️ See "Hunting Requests" in Stranger Missions.',
      tip_detailed: `**5 hunting requests** posted at train stations. Each requires **perfect small game carcasses**.

📋 **Requests:** Various small animals in perfect condition

🏆 **Final Reward:** Squirrel Statue (decorative)

🐿️ *Only perfect carcasses count. Use Small Game Arrows.*`,
      reward: 'Squirrel Statue',
      verified: true
    },
    {
      id: 'collect-points-interest',
      text: 'Points of Interest (50+)',
      tip: '🗺️ Discover unique locations that get marked on your map.',
      tip_detailed: `**Points of Interest** are unique locations that get permanently marked on your map when discovered. Over 50 total.

📋 **Examples:**
• Strange buildings
• Unique rock formations  
• Abandoned camps
• Historical markers

🗺️ *Explore everything. The world is full of secrets.*`,
      reward: 'Compendium entries',
      verified: true
    }
  ]
};
