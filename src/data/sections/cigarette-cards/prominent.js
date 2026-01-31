/**
 * Prominent Americans Cigarette Card Set
 * Reward: 3 Eagle Feathers + $50
 */

export const prominentCards = {
  id: 'cig-prominent',
  title: ' Prominent Americans',
  icon: '🎩',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Prominent Americans** cards.

🏆 **Reward:** 3 Eagle Feathers + $50`,
  reward: '3 Eagle Feathers + $50',
  verified: true,
  items: [
    { id: 'cig-prom-01', text: 'President Fisher', tip: " Saint Denis Mayor's office area", verified: true },
    { id: 'cig-prom-02', text: 'President Hardin', tip: ' Blackwater Post Office', region: 'west-elizabeth', verified: true },
    { id: 'cig-prom-03', text: 'Lillian Powell', tip: ' Rhodes Parlor House, ground floor', verified: true },
    { id: 'cig-prom-04', text: 'Leviticus Cornwall', tip: ' Cornwall Kerosene & Tar, near Valentine', verified: true },
    { id: 'cig-prom-05', text: 'J.D. McKnight', tip: ' Annesburg mining office', verified: true },
    { id: 'cig-prom-06', text: 'Luther Covington', tip: ' Van Horn Trading Post hotel', verified: true },
    { id: 'cig-prom-07', text: 'Harvey Griggs', tip: ' Strawberry General Store', verified: true },
    { id: 'cig-prom-08', text: 'Henrietta Beatrice Woods', tip: ' Saint Denis tailor shop', verified: true },
    { id: 'cig-prom-09', text: 'General Quincy Harris', tip: ' Fort Wallace area', verified: true },
    { id: 'cig-prom-10', text: 'General Cornelius Palmer', tip: ' Bolger Glade military camp', verified: true },
    { id: 'cig-prom-11', text: 'Senator Thaddeus Waxman', tip: ' Saint Denis courthouse area', verified: true },
    { id: 'cig-prom-12', text: 'President Alfred Macalister ⚠️', tip: ' Tumbleweed Town Hall | ⚠️ New Austin (Epilogue)', chapter: 'epilogue', verified: true }
  ]
};
