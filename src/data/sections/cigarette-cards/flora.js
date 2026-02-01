/**
 * Flora of North America Cigarette Card Set
 * Reward: Special Miracle Tonic + $50
 * Verified from: primagames.com, fandom.com, camzillasmom.com
 */

export const floraCards = {
  id: 'cig-flora',
  title: 'Flora of North America',
  icon: '🌿',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Flora of North America** cards celebrating the botanical treasures of the frontier.

🏆 **Reward:** Special Miracle Tonic + $50

*From desert cacti to coastal redwoods, the land blooms with diversity.*`,
  reward: 'Special Miracle Tonic + $50',
  verified: true,
  items: [
    { 
      id: 'cig-flora-01', 
      text: 'Golden Currant', 
      tip: '🏚️ Lagras Lake area (NW of Saint Denis). On shelf inside northeast shack.', 
      narrative: 'Sweet berries in a sour land. Nature\'s little joke on the hungry.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-flora-02', 
      text: 'Hummingbird Sage', 
      tip: '🏠 Shack NW of Van Horn (toward Elysian Pool). On table, west side of shack.', 
      narrative: 'Named for the birds it attracts. Pretty and useful—unlike most things out here.',
      region: 'roanoke-ridge',
      verified: true 
    },
    { 
      id: 'cig-flora-03', 
      text: 'Oleander Sage', 
      tip: '🌿 Saint Denis alleyway (above "E" on map). On ledge behind vine-covered lattice.', 
      narrative: 'Deadly beautiful. Touch it wrong and you\'ll meet your maker.',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-flora-04', 
      text: 'Yarrow', 
      tip: '🏚️ Cabin south of Lakay, Lemoyne. On windowsill inside. ⚠️ Stranger may try to rob you!', 
      narrative: 'Heals wounds, stops bleeding. Every outlaw\'s best friend.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-flora-05', 
      text: 'Indian Tobacco', 
      tip: '📦 SE of Lakay, Lemoyne. On crate west of cabin in building cluster.', 
      narrative: 'Sacred smoke. The natives knew its power long before we arrived.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-flora-06', 
      text: 'Black Mangrove', 
      tip: '🚂 Emerald Station, New Hanover. Underneath bench outside train station.', 
      narrative: 'Roots in salt water. Survives where nothing should.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-flora-07', 
      text: 'Longleaf Pine', 
      tip: '⛏️ Annesburg mine shaft. Climb down boarded shaft with ladder, on crate near lantern.', 
      narrative: 'Towers over the forest. Wood strong enough to build an empire.',
      region: 'roanoke-ridge',
      verified: true 
    },
    { 
      id: 'cig-flora-08', 
      text: 'Desert Fan Palm', 
      tip: '🏛️ West of Tumbleweed, front porch table of large mansion. ⚠️ Epilogue only.', 
      narrative: 'Oasis plants. Where they grow, water hides.',
      region: 'new-austin',
      chapter: 'epilogue',
      verified: true 
    },
    { 
      id: 'cig-flora-09', 
      text: 'Coastal Redwood', 
      tip: '🏠 Strawberry, West Elizabeth. On table behind SE house. Requires mission active.', 
      narrative: 'Giants of the forest. They were old when Christ was young.',
      region: 'big-valley',
      verified: true 
    },
    { 
      id: 'cig-flora-10', 
      text: 'Horse Crippler Cactus', 
      tip: '🏡 Caliga Hall. On workbench in lean-to near NW pier.', 
      narrative: 'Named for its victims. Step on it and learn why.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-flora-11', 
      text: 'Blazing Star', 
      tip: '🏔️ Big Valley cabin (above "W" in West, before Little Creek River). On railing by door.', 
      narrative: 'Purple fire in the meadow. Pretty enough to pick, tough enough to survive.',
      region: 'big-valley',
      verified: true 
    },
    { 
      id: 'cig-flora-12', 
      text: 'Carolina Lupine', 
      tip: '🏛️ Tumbleweed sheriff office roof, behind the sign. ⚠️ Epilogue only.', 
      narrative: 'Blue bonnets of the frontier. Spring\'s announcement that winter lost.',
      region: 'new-austin',
      chapter: 'epilogue',
      verified: true 
    }
  ]
};
