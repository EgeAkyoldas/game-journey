/**
 * Gang Member Graves Section
 * All findable graves - Pay respects to fallen comrades
 * Enhanced with cowboy storyteller narrative
 */

export const gravesSection = {
  id: 'graves',
  title: 'XXIV. Gang Member Graves',
  icon: '🪦',
  defaultOpen: false,
  items: [
    { 
      id: 'grave-jenny',
      text: "Jenny Kirk's Grave",
      tip: '📍 Near Colter, snowy area. Died during Blackwater heist.',
      tip_detailed: `**Jenny Kirk**. She was with us at Blackwater—young, fierce, full of fire. The heist went wrong, and she paid the price with her life.

📍 Her grave lies in the **snow near Colter**, not far from where we made camp that bitter winter. A simple marker for a life cut too short.

*She deserved better. They all did.*`,
      region: 'ambarino',
      chapter: 2,
      missable: true,
      verified: true
    },
    { 
      id: 'grave-davey',
      text: "Davey Callender's Grave",
      tip: "📍 Near Colter, by Jenny's grave. Died from Blackwater wounds.",
      tip_detailed: `**Davey Callender** made it out of Blackwater, but he was already done for. Gut shot. He held on through the mountains, but the cold and the blood took him before we even got our bearings.

📍 They buried him up in the **snow near Colter**, right beside Jenny. Two graves side by side, testament to that cursed job.

*He was tough as nails. Just wasn't tough enough.*`,
      region: 'ambarino',
      chapter: 2,
      missable: true,
      verified: true
    },
    { 
      id: 'grave-sean',
      text: "Sean MacGuire's Grave",
      tip: '📍 Scarlett Meadows, after Rhodes mission.',
      tip_detailed: `**Sean MacGuire**—loud-mouthed Irishman with a heart of gold. Shot dead in the streets of Rhodes. One second he's crackin' jokes, the next he's gone. No warning. No chance to say goodbye.

📍 His grave is in **Scarlett Meadows**, not far from Rhodes. A quiet spot for a man who was never quiet a day in his life.

*He made us laugh. God knows we needed that.*`,
      region: 'lemoyne',
      chapter: 3,
      missable: true,
      verified: true
    },
    { 
      id: 'grave-kieran',
      text: "Kieran Duffy's Grave",
      tip: "📍 Near Shady Belle, after O'Driscoll revenge.",
      tip_detailed: `**Kieran Duffy** came to us as an O'Driscoll, but he proved himself. Worked hard, stayed loyal. And for his trouble, those O'Driscoll bastards sent him back to us in pieces.

📍 They laid him to rest **near Shady Belle**. A marked man who just wanted to belong somewhere.

⚠️ *In this life, loyalty don't always save you.*`,
      region: 'lemoyne',
      chapter: 4,
      missable: true,
      verified: true
    },
    { 
      id: 'grave-hosea',
      text: "Hosea Matthews' Grave",
      tip: '📍 Near Bluewater Marsh, after Saint Denis bank.',
      tip_detailed: `**Hosea Matthews**. The old man. The voice of reason. Dutch's conscience—what was left of it. He died in Saint Denis, gunned down by Pinkertons during that damned bank job.

📍 His grave lies **near Bluewater Marsh**, a peaceful place for a man who sought peace.

*He was the best of us. The smartest. If we'd listened to him...*`,
      region: 'lemoyne',
      chapter: 4,
      missable: true,
      verified: true
    },
    { 
      id: 'grave-lenny',
      text: "Lenny Summers' Grave",
      tip: "📍 Near Hosea's grave, after Saint Denis bank.",
      tip_detailed: `**Lenny Summers**. Young, brilliant, brave. He had his whole life ahead of him. The bank job in Saint Denis took that away—bullets don't care about potential.

📍 They buried him **near Hosea**, the old man and the young man together. A cruel irony.

*LENNY! ...Damn. I miss that kid.*`,
      region: 'lemoyne',
      chapter: 4,
      missable: true,
      verified: true
    },
    { 
      id: 'grave-eagle',
      text: "Eagle Flies' Grave",
      tip: '📍 Wapiti Indian Reservation, after oil factory.',
      tip_detailed: `**Eagle Flies** died fighting for his people at the oil factory. Rains Fall's son, proud warrior, caught between two worlds. He went down swinging, even when the fight was already lost.

📍 His grave is at **Wapiti Indian Reservation**, among his people.

*Some men burn so bright, they can't last long. He was one of 'em.*`,
      region: 'ambarino',
      chapter: 6,
      missable: true,
      verified: true
    },
    { 
      id: 'grave-susan',
      text: "Susan Grimshaw's Grave",
      tip: '📍 Near Beaver Hollow camp ruins.',
      tip_detailed: `**Susan Grimshaw** kept that camp running through hell and high water. Fierce, loyal to a fault. In the end, she stood with Arthur when the gang fell apart. It cost her everything.

📍 Her grave is **near Beaver Hollow**, the last camp. The camp where it all ended.

*She held us together when nobody else could.*`,
      region: 'new-hanover',
      chapter: 6,
      missable: true,
      verified: true
    },
    { 
      id: 'grave-arthur',
      text: "Arthur Morgan's Grave",
      tip: '📍 EPILOGUE. East of Bacchus Station. Visit as John.',
      tip_detailed: `**Arthur Morgan**. Outlaw. Brother. Legend. He died on that mountain, watching the sunrise, knowing he'd done what he could to give the others a chance.

📍 His grave lies **east of Bacchus Station**, overlooking the valley. Visit as John—he has words for his old friend.

🏆 *The best of us. Don't let anyone tell you different.*`,
      region: 'ambarino',
      chapter: 'epilogue',
      missable: false,
      verified: true
    }
  ]
};
