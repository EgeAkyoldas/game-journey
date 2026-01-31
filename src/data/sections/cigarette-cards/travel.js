/**
 * Marvels of Travel Cigarette Card Set
 * Reward: Aged Pirate Rum + $50
 */

export const travelCards = {
  id: 'cig-travel',
  title: '🚬 Marvels of Travel',
  icon: '🚂',
  defaultOpen: false,
  tip_detailed: `Collect all 12 **Marvels of Travel** cards.

🏆 **Reward:** Aged Pirate Rum + $50`,
  reward: 'Aged Pirate Rum + $50',
  verified: true,
  items: [
    { id: 'cig-travel-01', text: 'Packet Ship', tip: '📍 Saint Denis docks, near harbor', verified: true },
    { id: 'cig-travel-02', text: 'Schooner', tip: "📍 Thieves Landing dock, Hennigan's Stead", verified: true },
    { id: 'cig-travel-03', text: 'Camel Caravan ⚠️', tip: '📍 Tumbleweed | ⚠️ New Austin (Epilogue)', chapter: 'epilogue', verified: true },
    { id: 'cig-travel-04', text: 'Elephant Carriage', tip: '📍 Saint Denis, near market', verified: true },
    { id: 'cig-travel-05', text: 'Goat Carriage ⚠️', tip: "📍 MacFarlane's Ranch | ⚠️ New Austin (Epilogue)", chapter: 'epilogue', verified: true },
    { id: 'cig-travel-06', text: 'Hot Air Balloon', tip: '📍 Strawberry, near Welcome Center', verified: true },
    { id: 'cig-travel-07', text: 'U.S. Frigate', tip: '📍 Blackwater pier', region: 'west-elizabeth', verified: true },
    { id: 'cig-travel-08', text: 'The Showboat', tip: '📍 Saint Denis riverboat landing', verified: true },
    { id: 'cig-travel-09', text: 'Balener Whaling Vessel', tip: '📍 Van Horn Trading Post harbor', verified: true },
    { id: 'cig-travel-10', text: 'Stagecoach', tip: '📍 Rhodes coach house', verified: true },
    { id: 'cig-travel-11', text: 'Steam Locomotive', tip: '📍 Wallace Station, inside building', verified: true },
    { id: 'cig-travel-12', text: 'Velocipede', tip: '📍 Annesburg train station area', verified: true }
  ]
};
