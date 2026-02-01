/**
 * Famous Gunslingers & Outlaws Cigarette Card Set
 * Reward: Special Snake Oil + $50
 * Verified from: shacknews.com, gamerant.com, camzillasmom.com
 */

export const gunslingersCards = {
  id: 'cig-gunslingers',
  title: 'Famous Gunslingers & Outlaws',
  icon: '🔫',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Famous Gunslingers & Outlaws** cards celebrating the legends of the frontier.

🏆 **Reward:** Special Snake Oil + $50

⚠️ *Some cards are in New Austin (Epilogue only). Consider buying Premium Cigarettes for random cards.*`,
  reward: 'Special Snake Oil + $50',
  verified: true,
  items: [
    { 
      id: 'cig-guns-01', 
      text: 'Frank Heck', 
      tip: '⚰️ Valentine Cemetery, on the unmarked east headstone (tall grave).', 
      narrative: 'The quickest draw in three counties—until the day he wasn\'t.',
      region: 'heartlands',
      verified: true 
    },
    { 
      id: 'cig-guns-02', 
      text: 'Otis Miller Boys', 
      tip: '🛒 Six Point Cabin, Cumberland Forest (SE of rope bridge). In the back of a blue wagon.', 
      narrative: 'Rode together, robbed together, died together. That\'s loyalty—or stupidity.',
      region: 'grizzlies',
      verified: true 
    },
    { 
      id: 'cig-guns-03', 
      text: 'Jack Hall Gang', 
      tip: '🏚️ Chez Porter (NW of Window Rock, Ambarino). On windowsill inside west shack.', 
      narrative: 'Their treasure maps outlived them all. Gold has a way of doing that.',
      region: 'ambarino',
      verified: true 
    },
    { 
      id: 'cig-guns-04', 
      text: 'Butcher Brothers', 
      tip: '🛢️ Butcher Creek (south of Elysian Pool). On red-topped barrel on front porch of southeastern house.', 
      narrative: 'Named for their profession, not their victims. Though the line got blurry.',
      region: 'roanoke-ridge',
      verified: true 
    },
    { 
      id: 'cig-guns-05', 
      text: 'Flaco Hernandez', 
      tip: '🏦 Rhodes bank roof (NW ledge). Climb ladder around back of bank.', 
      narrative: 'Cold as the mountains he came from. His gun spoke Spanish and English equally.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-guns-06', 
      text: 'Slim Grant', 
      tip: '🏔️ Fairvale Shanty (north of Grizzlies East, above "N" and "O" on map). On barrel outside shack.', 
      narrative: 'Thin as a rail, fast as lightning. They called him Slim for more than his figure.',
      region: 'ambarino',
      verified: true 
    },
    { 
      id: 'cig-guns-07', 
      text: 'Landon Ricketts', 
      tip: '🏜️ Armadillo, behind house facing undertaker. On barrel next to green shelf. ⚠️ Epilogue only.', 
      narrative: 'The last great gunslinger. Survived them all just by being better.',
      region: 'new-austin',
      chapter: 'epilogue',
      verified: true 
    },
    { 
      id: 'cig-guns-08', 
      text: 'Black Belle', 
      tip: '⚓ Blackwater docks (east side). On barrel at Lemoyne Eastern Riverboat Company pier.', 
      narrative: 'They called her Black Belle because the widows always wore black after meeting her.',
      region: 'west-elizabeth',
      verified: true 
    },
    { 
      id: 'cig-guns-09', 
      text: 'Billy Midnight', 
      tip: '🌾 Tumbleweed east windmill. Climb ladder to platform. ⚠️ Epilogue only.', 
      narrative: 'Struck at midnight, gone by dawn. Some say he was a ghost—others wish he was.',
      region: 'new-austin',
      chapter: 'epilogue',
      verified: true 
    },
    { 
      id: 'cig-guns-10', 
      text: 'Emmet Granger', 
      tip: '🐊 Canebreak Manor (Bluewater Marsh, at "H" in Marsh). On table inside abandoned cabin.', 
      narrative: 'Smelled like pig and gunpowder. Only one of those was intentional.',
      region: 'lemoyne',
      verified: true 
    },
    { 
      id: 'cig-guns-11', 
      text: 'Jim "Boy" Calloway', 
      tip: '⚰️ Saint Denis cemetery (north entrance). First mausoleum on left, inside on windowsill.', 
      narrative: 'They called him "Boy" until he proved otherwise. Then they stopped calling altogether.',
      region: 'saint-denis',
      verified: true 
    },
    { 
      id: 'cig-guns-12', 
      text: 'Bart Love', 
      tip: '🏠 House north of Little Creek River (near Wallace Station). Climb crates to enter window, next to couch.', 
      narrative: 'Loved three things: whiskey, cards, and killing. Not necessarily in that order.',
      region: 'big-valley',
      verified: true 
    }
  ]
};
