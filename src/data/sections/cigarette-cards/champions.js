/**
 * World's Champions Cigarette Card Set
 * Reward: Valerian Root + $50
 */

export const championsCards = {
  id: 'cig-champions',
  title: ' World\'s Champions',
  icon: '🏆',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **World's Champions** cards.

🏆 **Reward:** Valerian Root + $50`,
  reward: 'Valerian Root + $50',
  verified: true,
  items: [
    { id: 'cig-champ-01', text: 'Percy Wood', tip: ' Valentine saloon, on bar counter', verified: true },
    { id: 'cig-champ-02', text: 'Edwin A. Rowe', tip: ' Rhodes gun shop', verified: true },
    { id: 'cig-champ-03', text: 'Theobald Getzin', tip: ' Saint Denis fighting ring area', verified: true },
    { id: 'cig-champ-04', text: 'H.T. Slocum', tip: ' Strawberry butcher shop', verified: true },
    { id: 'cig-champ-05', text: 'R.S. Harradon', tip: ' Van Horn Trading Post', verified: true },
    { id: 'cig-champ-06', text: 'E.D. Ewing "Walker"', tip: ' Blackwater police station', region: 'west-elizabeth', verified: true },
    { id: 'cig-champ-07', text: 'Patsey Hill', tip: ' Annesburg saloon', verified: true },
    { id: 'cig-champ-08', text: 'William Sleicher', tip: ' Emerald Ranch fence yard', verified: true },
    { id: 'cig-champ-09', text: 'Edwin Singerly ⚠️', tip: ' Armadillo bank | ⚠️ New Austin (Epilogue)', chapter: 'epilogue', verified: true },
    { id: 'cig-champ-10', text: 'Felix Hawley ⚠️', tip: ' Tumbleweed | ⚠️ New Austin (Epilogue)', chapter: 'epilogue', verified: true },
    { id: 'cig-champ-11', text: 'Capt. Jack Page ⚠️', tip: " MacFarlane's Ranch | ⚠️ New Austin (Epilogue)", chapter: 'epilogue', verified: true },
    { id: 'cig-champ-12', text: 'Axel McCormack ⚠️', tip: ' Fort Mercer | ⚠️ New Austin (Epilogue)', chapter: 'epilogue', verified: true }
  ]
};
