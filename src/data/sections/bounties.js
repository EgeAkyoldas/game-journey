/**
 * Bounty Hunting Section
 * Grouped by sheriff office location
 */

export const bountiesSection = {
  id: 'bounties',
  title: 'XXI. Bounty Hunting',
  icon: '🤠',
  defaultOpen: false,
  items: [
    {
      id: 'bounty-valentine',
      text: 'Valentine Sheriff (2 Bounties)',
      tip: 'Available after Chapter 2 mission "Good, Honest, Snake Oil". Alive = more $.',
      chapter: 2,
      subItems: [
        { id: 'bounty-benedict', text: 'Benedict Allbright ($40)', tip: 'Poison seller. Found on rocks west of Valentine near Dakota River. Must bring ALIVE.' },
        { id: 'bounty-ellie', text: 'Ellie Anne Swan ($50)', tip: 'Female outlaw. Camp northwest of Valentine near Wallace Station. Alive = $50, Dead = $25.' }
      ]
    },
    {
      id: 'bounty-rhodes',
      text: 'Rhodes Sheriff (3 Bounties)',
      tip: 'Southern bounties in Lemoyne area.',
      chapter: 3,
      subItems: [
        { id: 'bounty-mark', text: 'Mark Johnson ($25)', tip: 'Horse thief. Found in Bluewater Marsh. Has gang backup.' },
        { id: 'bounty-robbie', text: 'Robbie Laidlaw ($45)', tip: 'Murderer. Hiding near Caliga Hall farmhouse. Dangerous.' },
        { id: 'bounty-camille', text: 'Camille de Millemont ($55)', tip: 'French con artist. Found in Saint Denis area saloon. Persuasive - stay focused.' }
      ]
    },
    {
      id: 'bounty-strawberry',
      text: 'Strawberry Sheriff (2 Bounties)',
      tip: 'Western bounties in Big Valley area.',
      chapter: 2,
      subItems: [
        { id: 'bounty-joshua', text: 'Joshua Brown ($40)', tip: 'Dangerous criminal. Abandoned mine NW of Strawberry. Bring dynamite or patience.' },
        { id: 'bounty-bart', text: 'Bart Cavanaugh ($60)', tip: 'Outlaw gang leader. Multiple bodyguards. Approach carefully - stealth recommended.' }
      ]
    },
    {
      id: 'bounty-saintdenis',
      text: 'Saint Denis Police (3 Bounties)',
      tip: 'Urban bounties. Some connected to story missions.',
      chapter: 4,
      subItems: [
        { id: 'bounty-lindsay', text: 'Lindsay Wofford ($45)', tip: 'City criminal. Urban pursuit through Saint Denis streets. Watch for police.' },
        { id: 'bounty-anthony', text: 'Anthony Foreman ($50)', tip: 'Gang leader from Trelawny missions. Only appears if not killed in story. Epilogue.', chapter: 'epilogue' },
        { id: 'bounty-patrick', text: 'Patrick O\'Brien ($40)', tip: 'Serial arsonist. Found near industrial area. Fire-related death if you let him.' }
      ]
    },
    {
      id: 'bounty-blackwater',
      text: 'Blackwater Police (3 Bounties)',
      tip: '⚠️ EPILOGUE ONLY - West Elizabeth access required.',
      chapter: 'epilogue',
      subItems: [
        { id: 'bounty-elias', text: 'Elias Green ($65)', tip: 'War veteran gone bad. West of Beecher\'s Hope. Alive = $65, Dead = $35.' },
        { id: 'bounty-otis', text: 'Otis Skinner ($55)', tip: 'Serial killer type. Very dangerous - bring heavy weapons.' },
        { id: 'bounty-herman', text: 'Herman Zizendorf ($50)', tip: "Near MacFarlane's Ranch. Has accomplices." }
      ]
    },
    {
      id: 'bounty-tumbleweed',
      text: 'Tumbleweed Sheriff (2 Bounties)',
      tip: '⚠️ EPILOGUE ONLY - New Austin access required.',
      chapter: 'epilogue',
      subItems: [
        { id: 'bounty-joaquin', text: 'Joaquin Arroyo ($60)', tip: 'Del Lobo gang connection. Alive = $60, Dead = $30.' },
        { id: 'bounty-esteban', text: 'Esteban Cortez ($65)', tip: 'Mexican outlaw. Multiple gang members. Alive or dead = $65.' }
      ]
    }
  ]
};
