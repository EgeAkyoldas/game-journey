/**
 * Famous Gunslingers & Outlaws Cigarette Card Set
 * Reward: Special Snake Oil + $50
 * Enhanced with verified status
 */

export const gunslingersCards = {
  id: 'cig-gunslingers',
  title: '🚬 Famous Gunslingers & Outlaws',
  icon: '🔫',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Famous Gunslingers & Outlaws** cards.

🏆 **Reward:** Special Snake Oil + $50

*The legends of the Old West, preserved on paper.*`,
  reward: 'Special Snake Oil + $50',
  verified: true,
  items: [
    { id: 'cig-guns-01', text: 'Frank Heck', tip: '📍 Valentine Cemetery, The Heartlands', verified: true },
    { id: 'cig-guns-02', text: 'Otis Miller Boys', tip: '📍 Six Point Cabin, Cumberland Forest', verified: true },
    { id: 'cig-guns-03', text: 'Jack Hall Gang', tip: '📍 Lakay, Bayou Nwa - on a barrel', verified: true },
    { id: 'cig-guns-04', text: 'Butcher Brothers ⚠️', tip: "📍 Thieves Landing | ⚠️ Hennigan's Stead (Epilogue)", chapter: 'epilogue', verified: true },
    { id: 'cig-guns-05', text: 'Flaco Hernandez', tip: '📍 Bank roof in Rhodes', verified: true },
    { id: 'cig-guns-06', text: 'Slim Grant', tip: '📍 Strawberry General Store, inside', verified: true },
    { id: 'cig-guns-07', text: 'Landon Ricketts ⚠️', tip: "📍 MacFarlane's Ranch | ⚠️ New Austin (Epilogue)", chapter: 'epilogue', verified: true },
    { id: 'cig-guns-08', text: 'Black Belle', tip: '📍 Blackwater pier, on a crate', region: 'west-elizabeth', verified: true },
    { id: 'cig-guns-09', text: 'Billy Midnight', tip: '📍 Van Horn Trading Post, lighthouse area', verified: true },
    { id: 'cig-guns-10', text: 'Emmet Granger', tip: '📍 Horseshoe Overlook Camp area', verified: true },
    { id: 'cig-guns-11', text: 'Jim "Boy" Calloway', tip: '📍 Inside mausoleum, NW Saint Denis graveyard', verified: true },
    { id: 'cig-guns-12', text: 'Bart Love ⚠️', tip: '📍 Tumbleweed Sheriff Office | ⚠️ New Austin (Epilogue)', chapter: 'epilogue', verified: true }
  ]
};
