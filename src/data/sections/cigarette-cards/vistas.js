/**
 * Vistas of America Cigarette Card Set
 * Reward: Gold Nugget + $100
 * Verified from: gamerant.com, camzillasmom.com, fandom.com
 */

export const vistasCards = {
  id: 'cig-vistas',
  title: 'Vistas of America',
  icon: '🏔️',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Vistas of America** cards showcasing the magnificent landscapes of the nation.

🏆 **Reward:** Gold Nugget + $100

*These scenic postcards capture America's grandeur—from bustling cities to untamed wilderness.*`,
  reward: 'Gold Nugget + $100',
  verified: true,
  items: [
    { 
      id: 'cig-vista-01', 
      text: 'New York', 
      tip: '🏡 Caliga Hall (south of Rhodes). On front porch of second building from left.', 
      narrative: 'The city that never sleeps. Most folks here never will either.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-vista-02', 
      text: 'Saint Denis', 
      tip: '📮 Saint Denis, near Post Office. On small green luggage cart with red wheels.', 
      narrative: 'Paris of the South, they call it. Smells more like New Orleans though.',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-vista-03', 
      text: 'Blackwater', 
      tip: '🎭 Blackwater Grand Theatre roof. Climb ladder behind theatre, card on chimney top.', 
      narrative: 'Civilization\'s last outpost before the wilderness swallows you whole.',
      region: 'west-elizabeth',
      verified: true 
    },
    { 
      id: 'cig-vista-04', 
      text: 'Armadillo', 
      tip: '🐷 Armadillo, west side. On barrel inside the pig pen. ⚠️ Epilogue only.', 
      narrative: 'Desert town. The pigs live better than most residents.',
      region: 'new-austin',
      chapter: 'epilogue',
      verified: true 
    },
    { 
      id: 'cig-vista-05', 
      text: 'Rio Bravo', 
      tip: '🌾 Flatneck Station, New Hanover. Climb windmill tower to top platform.', 
      narrative: 'Where the river meets the desert. Beautiful and deadly.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-vista-06', 
      text: 'The Grizzlies', 
      tip: '🏠 Venter\'s Place shack, near Armadillo. On table inside. Requires mission active. ⚠️ Epilogue only.', 
      narrative: 'Mountains that eat men. The view\'s worth the frostbite, they say.',
      region: 'new-austin',
      chapter: 'epilogue',
      verified: true 
    },
    { 
      id: 'cig-vista-07', 
      text: 'San Francisco', 
      tip: '🏰 Fort Brennand (New Hanover). SE tower, climb ladder, on windowsill.', 
      narrative: 'City by the bay. Gold built it, earthquakes will test it.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-vista-08', 
      text: 'Tall Trees', 
      tip: '🪵 Flatneck Station, behind train station. On barrel next to firewood stack.', 
      narrative: 'Redwoods that touch the sky. Makes a man feel small—which he is.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-vista-09', 
      text: 'Valentine', 
      tip: '🚂 Valentine Train Station, inside. On a table.', 
      narrative: 'Heart of cattle country. Smells like progress and cowpies.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-vista-10', 
      text: 'Chicago', 
      tip: '🌾 Emerald Ranch windmill. Climb to top platform.', 
      narrative: 'Windy city of beef and steel. The stockyards never close.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-vista-11', 
      text: 'Rhodes', 
      tip: '⚰️ Rhodes cemetery, east side near church. On gravestone of William Willie Bowles.', 
      narrative: 'Southern charm with a side of tension. Confederate ghosts walk here.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-vista-12', 
      text: 'Annesburg', 
      tip: '⛏️ Annesburg, higher mining area. On barrel on western minecart tracks.', 
      narrative: 'Coal country. Black gold keeps the nation running—and the miners dying.',
      region: 'roanoke-ridge',
      verified: true 
    }
  ]
};
