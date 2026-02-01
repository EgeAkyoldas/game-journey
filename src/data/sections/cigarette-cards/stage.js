/**
 * Stars of the Stage Cigarette Card Set
 * Reward: Small Jewelry Bag + $50
 * Verified from: camzillasmom.com, gamerant.com, shacknews.com
 */

export const stageCards = {
  id: 'cig-stage',
  title: 'Stars of the Stage',
  icon: '🎭',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Stars of the Stage** cards honoring the performers and entertainers of the era.

🏆 **Reward:** Small Jewelry Bag + $50

⚠️ *Robin Koninsky requires watching all 5 theater shows (last unlocks after Chapter 4 mission). Some cards in New Austin.*`,
  reward: 'Small Jewelry Bag + $50',
  verified: true,
  items: [
    { 
      id: 'cig-stage-01', 
      text: 'Laurence Dunn', 
      tip: '🏡 Robard Farm (NW of Rhodes, Southfield Flats). On mantelpiece inside farmhouse.', 
      narrative: 'His Hamlet brought tears to the frontier. Mostly from the smell.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-stage-02', 
      text: 'Louis Durand', 
      tip: '🏚️ West of Van Horn Trading Post. On east porch of abandoned house across railroad tracks.', 
      narrative: 'French accent, American heart. His tragedy was always sold out.',
      region: 'roanoke-ridge',
      verified: true 
    },
    { 
      id: 'cig-stage-03', 
      text: 'Jesse Raymond', 
      tip: '🔥 North of Tumbleweed, burnt-out house. On mantelpiece next to fireplace. ⚠️ Epilogue only.', 
      narrative: 'They said he died on stage. The fire said otherwise.',
      region: 'new-austin',
      chapter: 'epilogue',
      verified: true 
    },
    { 
      id: 'cig-stage-04', 
      text: 'Augusta Tremlow', 
      tip: '🌾 Hanging Dog Ranch windmill (NW of Pronghorn Ranch). On top platform—climb up.', 
      narrative: 'Sang like an angel, drank like a sailor. Audiences loved both.',
      region: 'big-valley',
      verified: true 
    },
    { 
      id: 'cig-stage-05', 
      text: 'Mabel Potter', 
      tip: '🎭 Théâtre Râleur, Saint Denis. In the west corridor.', 
      narrative: 'The leading lady of the South. Her curtain calls lasted longer than some plays.',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-stage-06', 
      text: 'Robin Koninsky', 
      tip: '🎭 Théâtre Râleur stage, Saint Denis. Behind curtains on left. Requires watching all 5 shows!', 
      narrative: 'Master of illusion. What was real on his stage? Only he knew.',
      region: 'saint-denis',
      chapter: 4,
      verified: true 
    },
    { 
      id: 'cig-stage-07', 
      text: 'Isadore Reid', 
      tip: '🛒 Valentine, cluster of structures SW of show. In back of one of two adjacent wagons.', 
      narrative: 'Traveling showman. His tricks worked best on those who\'d never seen a city.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-stage-08', 
      text: 'Irene Grubb', 
      tip: '🚂 MacFarlane\'s Ranch train platform. On a bench. ⚠️ Epilogue only.', 
      narrative: 'Danced her way west, sang her way back. The frontier remembered both.',
      region: 'new-austin',
      chapter: 'epilogue',
      verified: true 
    },
    { 
      id: 'cig-stage-09', 
      text: 'Nettie Palmer', 
      tip: '🎪 Valentine, inside Magic Lantern Show tent. Under the projector.', 
      narrative: 'Her voice could make grown men weep—and her prices made them weep harder.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-stage-10', 
      text: 'Jim Cobb', 
      tip: '🏚️ Eris Field shack (Ringneck Creek, Lemoyne). On front porch of abandoned house.', 
      narrative: 'Comedian by trade, philosopher by accident. His jokes aged like fine bourbon.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-stage-11', 
      text: 'Mittie Comstock', 
      tip: '🏠 Larned Sod cabin (Heartlands, New Hanover). On barrel in front of door.', 
      narrative: 'The toast of three territories. Her encore was always the silent exit.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-stage-12', 
      text: 'Robert Elliot Patchen', 
      tip: '📦 Rhodes, east of Fence (north part). On crate next to yellow hut.', 
      narrative: 'Playwright and poet. His words outlived every actor who spoke them.',
      region: 'lemoyne',
      verified: true 
    }
  ]
};
