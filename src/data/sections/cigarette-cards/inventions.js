/**
 * Amazing Inventions Cigarette Card Set
 * Reward: Volatile Dynamite + $100
 */

export const inventionsCards = {
  id: 'cig-inventions',
  title: ' Amazing Inventions',
  icon: '💡',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Amazing Inventions** cards.

🏆 **Reward:** Volatile Dynamite + $100`,
  reward: 'Volatile Dynamite + $100',
  verified: true,
  items: [
    { id: 'cig-inv-01', text: 'Light Bulb', tip: ' Saint Denis power station area', verified: true },
    { id: 'cig-inv-02', text: 'Telephone', tip: ' Saint Denis telegraph office', verified: true },
    { id: 'cig-inv-03', text: 'Camera', tip: ' Saint Denis photo studio', verified: true },
    { id: 'cig-inv-04', text: 'Phonograph', tip: ' Rhodes General Store', verified: true },
    { id: 'cig-inv-05', text: 'Moving Picture Machine', tip: ' Saint Denis theater entrance', verified: true },
    { id: 'cig-inv-06', text: 'Typewriter', tip: ' Valentine newspaper office', verified: true },
    { id: 'cig-inv-07', text: 'Sewing Machine', tip: ' Strawberry General Store', verified: true },
    { id: 'cig-inv-08', text: 'Revolver', tip: ' Valentine gun shop', verified: true },
    { id: 'cig-inv-09', text: 'Rifle', tip: ' Annesburg gun shop', verified: true },
    { id: 'cig-inv-10', text: 'Dynamite', tip: ' Annesburg mining office', verified: true },
    { id: 'cig-inv-11', text: 'Telegraph', tip: ' Wallace Station telegraph office', verified: true },
    { id: 'cig-inv-12', text: 'Gramophone', tip: ' Blackwater General Store', region: 'west-elizabeth', verified: true }
  ]
};
