/**
 * Prominent Americans Cigarette Card Set
 * Reward: Eagle Feather x3 + $50
 * Verified from: fandom.com, shacknews.com, camzillasmom.com
 */

export const prominentCards = {
  id: 'cig-prominent',
  title: 'Prominent Americans',
  icon: '🎩',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Prominent Americans** cards honoring the nation's leaders and luminaries.

🏆 **Reward:** Eagle Feather x3 + $50

*From presidents to industrialists, the faces that shaped America.*`,
  reward: 'Eagle Feather x3 + $50',
  verified: true,
  items: [
    { 
      id: 'cig-prom-01', 
      text: 'President Fisher', 
      tip: '🏭 Jansen Mills (N of Rhodes, Southfield Flats). On barrels at top of loading ramp.', 
      narrative: 'The people\'s president. Or so the newspapers said.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-prom-02', 
      text: 'President Hardin', 
      tip: '🏡 West of Lagras lake (between lake and Kamassa River). On railing next to bait shop.', 
      narrative: 'Led through war, died in peace. The nation mourned—briefly.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-prom-03', 
      text: 'Lillian Powell', 
      tip: '🏚️ NW of Pleasance schoolhouse. Shack, card in crate in bushes (NE side).', 
      narrative: 'Suffragette, reformer, troublemaker. Depended on who you asked.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-prom-04', 
      text: 'Leviticus Cornwall', 
      tip: '🏡 Small farm SW of Valentine (between "I" and "N" on map). On porch of house.', 
      narrative: 'Built an empire on oil and blood. Progress has its price.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-prom-05', 
      text: 'J.D. McKnight', 
      tip: '🎪 Rhodes gazebo (south of town, east of Saloon). On table inside.', 
      narrative: 'Railroad baron. Connected the nation, divided its workers.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-prom-06', 
      text: 'Luther Covington', 
      tip: '📦 Saint Denis SW docks. On a crate.', 
      narrative: 'Steel magnate. His bridges still stand; his workers\' graves, less so.',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-prom-07', 
      text: 'Harvey Griggs', 
      tip: '🏭 Cornwall Co. Freight Station (large brick building S of Saint Denis). Under stairs on workbench. Requires mission active.', 
      narrative: 'Shipping tycoon. If it moved by water, he owned it.',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-prom-08', 
      text: 'Henrietta Beatrice Woods', 
      tip: '🏠 NE Saint Denis (N of gazebo). Red house on east side of road after first intersection. On front porch table.', 
      narrative: 'Philanthropist and patron. Gave away fortunes she never earned.',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-prom-09', 
      text: 'General Quincy Harris', 
      tip: '⛽ N of Heartland Oil Fields. At base of oil well tower.', 
      narrative: 'War hero turned politician. The uniform never really came off.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-prom-10', 
      text: 'General Cornelius Palmer', 
      tip: '🏡 Farm N of Rhodes/Mattock Pond. On table inside shed.', 
      narrative: 'Cavalry commander. His victories were decisive; their costs, forgotten.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-prom-11', 
      text: 'Senator Thaddeus Waxman', 
      tip: '🏚️ Cabin W of shack, NW of Pleasance schoolhouse. On mantle inside.', 
      narrative: 'Lawmaker and dealmaker. The line between them blurred.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-prom-12', 
      text: 'President Alfred MacAlister', 
      tip: '🏝️ Islands SW of Saint Denis (Lannahechee River). Cabin on eastern shore, on SE windowsill.', 
      narrative: 'Last president of the old order. First of the new. History\'s hinge.',
      region: 'saint-denis',
      verified: true 
    }
  ]
};
