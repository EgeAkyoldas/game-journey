/**
 * Horses Cigarette Card Set
 * Reward: Special Horse Medicine + $50
 */

export const horsesCards = {
  id: 'cig-horses',
  title: '🚬 Horses',
  icon: '🐴',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Horses** cards.

🏆 **Reward:** Special Horse Medicine + $50`,
  reward: 'Special Horse Medicine + $50',
  verified: true,
  items: [
    { id: 'cig-horse-01', text: 'American Standardbred', tip: '📍 Valentine Stable, inside', verified: true },
    { id: 'cig-horse-02', text: 'Thoroughbred', tip: '📍 Saint Denis stable area', verified: true },
    { id: 'cig-horse-03', text: 'Kentucky Saddler', tip: '📍 Rhodes Stable, on barrel', verified: true },
    { id: 'cig-horse-04', text: 'Morgan', tip: '📍 Strawberry Stable area', verified: true },
    { id: 'cig-horse-05', text: 'Tennessee Walker', tip: '📍 Emerald Ranch Stable', verified: true },
    { id: 'cig-horse-06', text: 'Mustang ⚠️', tip: '📍 Tumbleweed Stable | ⚠️ New Austin (Epilogue)', chapter: 'epilogue', verified: true },
    { id: 'cig-horse-07', text: 'Appaloosa', tip: '📍 Van Horn stable area', verified: true },
    { id: 'cig-horse-08', text: 'Ardennes', tip: '📍 Fort Wallace cavalry stables', verified: true },
    { id: 'cig-horse-09', text: 'Hungarian Half-bred', tip: '📍 Blackwater Stable', region: 'west-elizabeth', verified: true },
    { id: 'cig-horse-10', text: 'Dutch Warmblood', tip: '📍 Annesburg, near mining company', verified: true },
    { id: 'cig-horse-11', text: 'Turkoman', tip: '📍 Braithwaite Manor stables', verified: true },
    { id: 'cig-horse-12', text: 'Missouri Fox Trotter', tip: '📍 Scarlett Meadows stables', verified: true }
  ]
};
