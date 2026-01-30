/**
 * Companion Activities Section
 * Grouped by chapter with missable warnings
 */

export const companionActivitiesSection = {
  id: 'companion-activities',
  title: 'XIX. Companion Activities',
  icon: '🤝',
  defaultOpen: false,
  items: [
    {
      id: 'comp-ch2',
      text: 'Chapter 2 Activities',
      tip: 'Horseshoe Overlook camp. White icons on map. Do these before leaving!',
      chapter: 2,
      missable: true,
      subItems: [
        { id: 'comp-charles-hunt', text: 'Hunting with Charles', tip: 'White icon at camp. Teaches bow hunting basics. Start of great friendship.', missable: true },
        { id: 'comp-javier-chez', text: 'Rob Chez Porter with Javier', tip: "O'Driscoll hideout north of Valentine. Fun stealth or loud approach.", missable: true },
        { id: 'comp-lenny-filet', text: 'Five Finger Fillet with Lenny', tip: 'Camp game. Beat him to win money. He takes it well.', missable: true },
        { id: 'comp-uncle-cattle', text: 'Cattle Rustling with Uncle', tip: 'Steal cattle together. Uncle is lazy but entertaining.', missable: true }
      ]
    },
    {
      id: 'comp-ch3',
      text: 'Chapter 3 Activities',
      tip: 'Clemens Point camp near Rhodes. Many missable activities here!',
      chapter: 3,
      missable: true,
      subItems: [
        { id: 'comp-sean-lonnie', text: "Rob Lonnie's Shack with Sean", tip: 'Drunken robbery mission. Sean is hilarious drunk.', missable: true },
        { id: 'comp-javier-fish', text: 'Fishing with Javier', tip: 'Relaxing trip. Good dialogue about his past.', missable: true },
        { id: 'comp-kieran-fish', text: 'Fishing with Kieran', tip: "He's nervous but friendly. Do this before Chapter 4...", missable: true },
        { id: 'comp-bill-coach', text: 'Rob Coach with Bill', tip: 'Alden at Rhodes station gives tip. Bill is chaotic.', missable: true },
        { id: 'comp-sean-coach', text: 'Rob Coach with Sean', tip: 'Another drunk heist. Peak Sean energy.', missable: true },
        { id: 'comp-micah-filet', text: 'Five Finger Fillet with Micah', tip: 'He cheats. Beat him anyway for satisfaction.', missable: true },
        { id: 'comp-tilly-dominoes', text: 'Dominoes with Tilly', tip: "Camp game. She's surprisingly competitive.", missable: true }
      ]
    },
    {
      id: 'comp-ch4',
      text: 'Chapter 4 Activities',
      tip: 'Shady Belle camp in swamp. Fewer activities but still missable.',
      chapter: 4,
      missable: true,
      subItems: [
        { id: 'comp-pearson-hunt', text: 'Hunting with Pearson', tip: 'Rare activity. Good stories about his navy days.', missable: true },
        { id: 'comp-lenny-coach', text: 'Rob Coach with Lenny', tip: 'Professional heist. Lenny is reliable partner.', missable: true },
        { id: 'comp-micah-coach', text: 'Rob Coach with Micah', tip: 'He makes it violent. Expect chaos and high bounty.', missable: true }
      ]
    },
    {
      id: 'comp-trophy',
      text: '🏆 Friends With Benefits Trophy',
      tip: 'Complete at least one companion activity in each camp (Ch2-4) for trophy/achievement.',
      reward: 'Trophy/Achievement'
    }
  ]
};
