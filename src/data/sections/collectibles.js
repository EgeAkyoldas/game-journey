/**
 * Collectibles Section
 * All major collectible categories with detailed subItems
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
      tip: 'Hanging in trees. Collect all 20 for map leading to Ancient Arrowhead (slower bow stamina drain).',
      reward: 'Ancient Arrowhead',
      subItems: [
        // Heartlands & New Hanover (5)
        { id: 'dream-01', text: 'Flatneck Station West', tip: 'Hill west of Flatneck Station, in a tree' },
        { id: 'dream-02', text: "Caliban's Seat West", tip: 'Near road junction, tree facing north' },
        { id: 'dream-03', text: 'Dakota River South Bank', tip: 'On a ledge facing the river, near legendary fish spot' },
        { id: 'dream-04', text: 'Heartland Overflow', tip: 'Large leafless tree near overflow area' },
        { id: 'dream-05', text: 'Heartland Hills', tip: 'Large standalone leafless tree' },
        // Grizzlies (5)
        { id: 'dream-06', text: 'Grizzlies SE', tip: 'On mountain path, past fallen tree' },
        { id: 'dream-07', text: 'Cotorra Springs East', tip: 'Biggest tree in small thicket' },
        { id: 'dream-08', text: 'Near The Loft', tip: 'South of The Loft, only bare tree on right side' },
        { id: 'dream-09', text: 'Snowy Peak', tip: 'Clump of trees after crossing river, heading NNW' },
        { id: 'dream-10', text: 'Campfire Area', tip: 'Big tree behind log and small stump' },
        // Roanoke Ridge (5)
        { id: 'dream-11', text: 'Annesburg North 1', tip: 'In a clearing north of Annesburg' },
        { id: 'dream-12', text: 'Annesburg North 2', tip: 'Edge of road just north of town' },
        { id: 'dream-13', text: 'Annesburg SE', tip: 'Top of hill southeast of Annesburg' },
        { id: 'dream-14', text: 'Annesburg South', tip: 'Middle of tree group off road' },
        { id: 'dream-15', text: 'Roanoke Ridge Hill', tip: 'Tree that does not stand out, higher up' },
        // Bluewater & Other (5)
        { id: 'dream-16', text: 'Elysian Pool South', tip: 'Big tree by a bush south of pool' },
        { id: 'dream-17', text: 'Bluewater Marsh NE', tip: 'Tree at path fork in marsh' },
        { id: 'dream-18', text: "Lonnie's Shack North", tip: 'On a path north of the shack' },
        { id: 'dream-19', text: 'Aberdeen Pig Farm West', tip: 'Hill west of the creepy farm' },
        { id: 'dream-20', text: 'Elysian Pool Area', tip: 'Beyond old house foundation. LAST ONE → Get Map!' }
      ]
    },
    // ========================================
    // EXOTICS QUEST (5 Parts - Algernon Wasp)
    // ========================================
    {
      id: 'collect-exotics',
      text: 'Exotic Quest (Duchesses and Other Animals)',
      tip: '📍 Algernon Wasp - Greenhouse N of Saint Denis. Chapter 4+ after "The Gilded Cage". Very grindy!',
      reward: "Algernon's Revolver + Exotic Hat + $200",
      subItems: [
        // Part 1
        { id: 'exotic-part1', text: '── PART I ──', tip: '⚠️ START HERE: Orchids only spawn up to current quest amount!' },
        { id: 'exotic-p1-lady', text: 'Lady of the Night Orchids (15)', tip: '📍 Trees in Bayou Nwa southern shore, N of Kamassa River, Caliga Hall area.' },
        { id: 'exotic-p1-egret-little', text: 'Little Egret Plumes (5)', tip: 'White egrets in Bayou Nwa. Varmint Rifle headshot. Farm near Lagras.' },
        { id: 'exotic-p1-egret-reddish', text: 'Reddish Egret Plumes (5)', tip: 'Scarlett Meadows coastline. Reddish colored birds.' },
        // Part 2
        { id: 'exotic-part2', text: '── PART II ──', tip: 'Turn in Part I first! New orchids spawn after.' },
        { id: 'exotic-p2-moccasin', text: 'Moccasin Flower Orchids (10)', tip: '📍 GROUND orchids around Butcher Creek, Roanoke Ridge.' },
        { id: 'exotic-p2-slipper', text: 'Lady Slipper Orchids (7)', tip: '📍 GROUND orchids in Big Valley, West Elizabeth.' },
        { id: 'exotic-p2-egret-snowy', text: 'Snowy Egret Plumes (5)', tip: 'Farm Bayou Nwa → Rhodes → Emerald Station fast travel → sleep → return.' },
        { id: 'exotic-p2-spoonbill', text: 'Roseate Spoonbill Plumes (5)', tip: '🩷 PINK birds! Bayou Nwa islands. Beautiful but rare.' },
        // Part 3  
        { id: 'exotic-part3', text: '── PART III ──', tip: 'Quest is getting harder. Use Eagle Eye (L3+R3) constantly!' },
        { id: 'exotic-p3-acuna', text: "Acuna's Star Orchids (3)", tip: '📍 TREES in NE Bayou Nwa.' },
        { id: 'exotic-p3-cigar', text: 'Cigar Orchids (7)', tip: '📍 TREES in Bluewater Marsh and NE Bayou Nwa.' },
        { id: 'exotic-p3-eggs', text: 'Gator Eggs (5)', tip: '📍 Nests near water in Bayou Nwa. Check shorelines.' },
        // Part 4
        { id: 'exotic-part4', text: '── PART IV ──', tip: 'Almost there! Keep searching systematically.' },
        { id: 'exotic-p4-ghost', text: 'Ghost Orchids (5)', tip: '📍 TREES deep in Bayou Nwa. Hard to spot - use Eagle Eye!' },
        { id: 'exotic-p4-night', text: 'Night Scented Orchids (5)', tip: '📍 TREES south of Braithwaite Manor area.' },
        { id: 'exotic-p4-rat', text: 'Rat Tail Orchids (10)', tip: '📍 TREES throughout Lemoyne swamps.' },
        { id: 'exotic-p4-spider', text: 'Spider Orchids (5)', tip: '📍 TREES in Lemoyne swamp areas.' },
        // Part 5 - Final
        { id: 'exotic-part5', text: '── PART V (FINAL) ──', tip: '🎉 Last stretch! Collect these for the big reward.' },
        { id: 'exotic-p5-clamshell', text: 'Clamshell Orchids (5)', tip: '📍 TREES E of Caliga Hall and Shady Belle, along riverfront.' },
        { id: 'exotic-p5-queens', text: "Queen's Orchids (5)", tip: '📍 GROUND near shores of Lagras and Lakay, Bayou Nwa.' },
        { id: 'exotic-p5-sparrow', text: "Sparrow's Egg Orchids (10)", tip: '📍 GROUND N of Roanoke Ridge and Elysian Pool.' },
        { id: 'exotic-p5-dragon', text: "Dragon's Mouth Orchids (5)", tip: '📍 GROUND scattered across Grizzlies East mountains.' },
        { id: 'exotic-p5-eggs', text: 'Gator Eggs (20 more)', tip: '📍 20 more eggs! Same locations. Check repeatedly.' },
        { id: 'exotic-complete', text: '✨ COMPLETE → Get Rewards!', tip: '🎁 Return to Algernon for: Algernon\'s Revolver, Exotic Hat, $200 cash!' }
      ]
    },
    // ========================================
    // OTHER COLLECTIBLES (References to other sections)
    // ========================================
    {
      id: 'collect-dino',
      text: 'Dinosaur Bones (30 Total)',
      tip: 'See "A Test of Faith" in Stranger Missions. Full detailed list there.',
      reward: 'Jawbone Knife + Quartz Chunk'
    },
    {
      id: 'collect-rock',
      text: 'Rock Carvings (10 Total)',
      tip: 'See "Geology for Beginners" in Stranger Missions. Full detailed list there.',
      reward: 'Old Brass Compass (Raven Talisman ingredient)'
    },
    {
      id: 'collect-cig',
      text: 'Cigarette Cards (144 Total - 12 Sets)',
      tip: 'See "Cigarette Cards" section for all 12 sets with 12 cards each.',
      reward: 'Vintage Civil War Handcuffs + cash'
    },
    {
      id: 'collect-graves',
      text: 'Graves (9 Total)',
      tip: 'See "Gang Member Graves" section. Visit all 9 for "Paying Respects" achievement.',
      reward: 'Paying Respects Trophy'
    },
    {
      id: 'collect-hunting',
      text: 'Hunting Requests (5 Total)',
      tip: 'See "Hunting Requests" in Stranger Missions. Perfect small game carcasses.',
      reward: 'Squirrel Statue'
    },
    {
      id: 'collect-points-interest',
      text: 'Points of Interest',
      tip: 'Discover unique locations that get marked on your map. 50+ total.',
      reward: 'Compendium entries'
    }
  ]
};
