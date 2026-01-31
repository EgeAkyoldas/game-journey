/**
 * Missable Content Section
 * Content that can be permanently missed
 */

export const missableSection = {
  id: 'missable',
  title: 'XVI. Missable Content',
  icon: '⚠️',
  defaultOpen: true,
  items: [
    {
      id: 'missable-bolt-action',
      text: 'Bolt Action Rifle (Free)',
      tip: '"The First Shall Be Last" mission. Kill LEFT bounty hunter fast.',
      missable: true,
      chapter: 2
    },
    {
      id: 'missable-mary-missions',
      text: 'Mary Linton Missions (3 Parts)',
      tip: 'Complete all before Chapter 6 ends. Emotional storyline.',
      missable: true,
      chapter: 6
    },
    {
      id: 'missable-edith-downes',
      text: 'Edith Downes Missions (2 Parts)',
      tip: 'Saint Denis slums. After debt collection missions. Redemption arc.',
      missable: true,
      chapter: 6
    },
    {
      id: 'missable-veteran',
      text: 'The Veteran (Hamish Sinclair)',
      tip: "O'Creagh's Run. 4 Parts. Final part gives Buell the horse.",
      missable: true,
      chapter: 6
    },
    {
      id: 'missable-widow',
      text: 'The Widow (Charlotte Balfour)',
      tip: 'North of Annesburg. 3 Parts. Teaching survival.',
      missable: true,
      chapter: 6
    },
    {
      id: 'missable-pearson-jacket',
      text: "Pearson's Scout Jacket",
      tip: 'Donate a rabbit carcass to Pearson. Chapters 2-3 only.',
      missable: true,
      chapter: 3
    },
    {
      id: 'missable-kieran',
      text: 'Fishing with Kieran',
      tip: "Chapter 3 only. Before Kieran's fate.",
      missable: true,
      chapter: 3
    },
    {
      id: 'missable-chicks-treasure',
      text: "Chick's Treasure Map",
      tip: 'Painting in Shady Belle. Inspect BEFORE leaving in Chapter 4.',
      missable: true,
      chapter: 4
    },
    {
      id: 'missable-lenny',
      text: 'A Quiet Time (Lenny Night)',
      tip: 'Valentine bar. Automatic story mission. YNNEL!',
      missable: true,
      chapter: 2
    },
    {
      id: 'missable-camp-requests',
      text: 'Camp Companion Requests',
      tip: 'Gang members ask for items (pipe, book, etc.). Check "scouting" icon at camp.',
      missable: true
    },
    {
      id: 'missable-high-honor',
      text: 'High Honor Missions',
      tip: 'Some stranger encounters require high honor to access.',
      missable: true
    },
    {
      id: 'missable-do-not-seek',
      text: 'Do Not Seek Absolution I & II',
      tip: 'Brother Dorkins. High honor required. Saint Denis church.',
      missable: true,
      chapter: 6
    }
    // Note: Missable HATS moved to unique-hats.js section
  ]
};

