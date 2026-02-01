/**
 * Breeds of Horses Cigarette Card Set
 * Reward: Special Horse Medicine + $50
 * Verified from: shacknews.com, rdr2.org, fandom.com
 */

export const horsesCards = {
  id: 'cig-horses',
  title: 'Breeds of Horses',
  icon: '🐴',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Breeds of Horses** cards featuring the noble steeds that conquered the frontier.

🏆 **Reward:** Special Horse Medicine + $50

*A horseman's guide to the finest breeds money can buy—or steal.*`,
  reward: 'Special Horse Medicine + $50',
  verified: true,
  items: [
    { 
      id: 'cig-horse-01', 
      text: 'American Paint', 
      tip: '🏭 Rhodes cotton mill (east of town). Ground floor, on crate by industrial wheel.', 
      narrative: 'Painted by nature itself. Every one unique as a fingerprint.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-horse-02', 
      text: 'Appaloosa', 
      tip: '⚓ Saint Denis southern docks. On barrel behind large building.', 
      narrative: 'Spotted coat, Nez Perce heritage. War horse turned working horse.',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-horse-03', 
      text: 'Andalusian', 
      tip: '🐎 Painted Sky barn (south of Valentine, across Dakota River). On shelf near back of stables.', 
      narrative: 'Spanish royalty on four legs. Bred for kings, ridden by cowboys.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-horse-04', 
      text: 'American Standardbred', 
      tip: '🏠 House south of Braithwaite Manor, on Lannahechee River. In one of the bedrooms.', 
      narrative: 'Racing bloodline. Born to pull, trained to gallop.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-horse-05', 
      text: 'Nokota', 
      tip: '🐎 Rhodes stable, inside. On a bench.', 
      narrative: 'Wild spirit of the Dakotas. Some things shouldn\'t be tamed.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-horse-06', 
      text: 'Ardennes', 
      tip: '🚂 Wallace Station, West Elizabeth. On a shelf.', 
      narrative: 'Draft horse built like a boulder. Pulls wagons, pulls weight.',
      region: 'grizzlies',
      verified: true 
    },
    { 
      id: 'cig-horse-07', 
      text: 'Dutch Warmblood', 
      tip: '🏡 Downes Ranch (SW of Valentine). On mantel inside main house.', 
      narrative: 'European elegance meets American grit. Best of both worlds.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-horse-08', 
      text: 'Turkoman', 
      tip: '🏔️ Cabin near O\'Creagh\'s Run lake (Grizzlies East). On workbench behind cabin.', 
      narrative: 'Desert bred, mountain tested. Speed and endurance combined.',
      region: 'ambarino',
      verified: true 
    },
    { 
      id: 'cig-horse-09', 
      text: 'Hungarian Halfbred', 
      tip: '🔨 Armadillo blacksmith (north of town). Inside hole in door. ⚠️ Epilogue only.', 
      narrative: 'Part Thoroughbred, all heart. The cavalry\'s choice.',
      region: 'new-austin',
      chapter: 'epilogue',
      verified: true 
    },
    { 
      id: 'cig-horse-10', 
      text: 'Mustang', 
      tip: '🌾 Downes Ranch barn (SW of Valentine). On top of hay on upper level.', 
      narrative: 'Wild heart, iron will. America\'s horse.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-horse-11', 
      text: 'Thoroughbred', 
      tip: '🚂 Rhodes train station. On wagon near cotton bales.', 
      narrative: 'Racing royalty. Born to run, bred to win.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-horse-12', 
      text: 'Missouri Fox Trotter', 
      tip: '🏠 House south of Braithwaite Manor (Lannahechee River). In one of the bedrooms.', 
      narrative: 'Smooth gaited, sure footed. Long rides, no regrets.',
      region: 'lemoyne',
      verified: true 
    }
  ]
};
