/**
 * Marvels of Travel Cigarette Card Set
 * Reward: Aged Pirate Rum + $50
 * Verified from: fandom.com, shacknews.com, camzillasmom.com
 */

export const travelCards = {
  id: 'cig-travel',
  title: 'Marvels of Travel',
  icon: '🌍',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Marvels of Travel** cards celebrating the vehicles and vessels that connected the world.

🏆 **Reward:** Aged Pirate Rum + $50

*From steamships to velocipedes, the machines that shrank the earth.*`,
  reward: 'Aged Pirate Rum + $50',
  verified: true,
  items: [
    { 
      id: 'cig-travel-01', 
      text: 'Packet Ship', 
      tip: '⚓ Annesburg pier. On crate under roofed storage area.', 
      narrative: 'Reliable as death and taxes. Carried mail, cargo, and dreams.',
      region: 'roanoke-ridge',
      verified: true 
    },
    { 
      id: 'cig-travel-02', 
      text: 'Schooner', 
      tip: '⛵ Van Horn Trading Post. On larger schooner, top level under hammock/bed.', 
      narrative: 'Swift and graceful. Pirates loved them for a reason.',
      region: 'roanoke-ridge',
      verified: true 
    },
    { 
      id: 'cig-travel-03', 
      text: 'Camel Caravan', 
      tip: '🏠 Rhodes, house across from saloon. On backyard table by clothesline.', 
      narrative: 'Ships of the desert. The Army tried them out West—camels had opinions.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-travel-04', 
      text: 'Elephant Carriage', 
      tip: '🏨 Strawberry Trackers Hotel. Top of staircase around back, on banister.', 
      narrative: 'Exotic transport. Only royalty—or circus folk—rode in style like this.',
      region: 'big-valley',
      verified: true 
    },
    { 
      id: 'cig-travel-05', 
      text: 'Goat Carriage', 
      tip: '🐎 Emerald Ranch stables (largest building). On workbench inside.', 
      narrative: 'Child\'s chariot. Every kid wanted one; most got a wagon.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-travel-06', 
      text: 'Hot Air Balloon', 
      tip: '🍺 Saint Denis, Doyle\'s Tavern. On shelf in back.', 
      narrative: 'First flight of fancy. A basket and some hot air—sound familiar?',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-travel-07', 
      text: 'U.S. Frigate', 
      tip: '⚓ Braithwaite Manor boathouse. On workbench next to boat.', 
      narrative: 'Naval pride. Won wars and scared pirates—mostly.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-travel-08', 
      text: 'The Showboat', 
      tip: '⚓ Saint Denis docks (S of Newspaper Seller). Requires mission active.', 
      narrative: 'Floating theater. Drama on the water, scandals in the cabins.',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-travel-09', 
      text: 'Balener Whaling Vessel', 
      tip: '🏠 Saint Denis, blue booth on docks (N of Maria Isabella). On windowsill inside.', 
      narrative: 'Whale hunter. Brought light to cities and death to giants.',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-travel-10', 
      text: 'Stagecoach', 
      tip: '🚂 Riggs Station. On bench at train platform.', 
      narrative: 'King of the roads before the rails came. Bumpy ride, great stories.',
      region: 'big-valley',
      verified: true 
    },
    { 
      id: 'cig-travel-11', 
      text: 'Steam Locomotive', 
      tip: '🏚️ N of Clemens Point. Inside ruined unnamed building.', 
      narrative: 'Iron horse, unstoppable force. Changed everything, regretted nothing.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-travel-12', 
      text: 'Velocipede', 
      tip: '🏠 Saint Denis NW area. On front porch table on main street.', 
      narrative: 'Bicycle ancestor. Looked ridiculous, felt glorious.',
      region: 'saint-denis',
      verified: true 
    }
  ]
};
