/**
 * Companion Activities Section
 * Grouped by chapter with missable warnings
 * ✅ VERIFIED: 2026-02-02 via fandom.com, reddit.com, gamerant.com
 */

export const companionActivitiesSection = {
  id: 'companion-activities',
  title: 'Companion Activities',
  icon: '🤝',
  defaultOpen: false,
  items: [
    {
      id: 'comp-ch2',
      text: 'Chapter 2 Activities',
      tip: ' Horseshoe Overlook camp. White icons on map.',
      tip_detailed: `**Horseshoe Overlook** - our first real camp after that frozen hell in Colter. Good times here, partner. The gang's still hopeful, still together.

Look for **white activity icons** on your map when near camp. These are your chances to bond with your brothers and sisters in crime.

⚠️ **All Chapter 2 activities become MISSABLE once you leave Horseshoe Overlook.** Don't ride off without makin' memories.`,
      chapter: 2,
      region: 'new-hanover',
      missable: true,
      verified: true,
      subItems: [
        { 
          id: 'comp-charles-hunt', 
          text: 'Hunting with Charles', 
          tip: '🏹 White icon at camp. Teaches bow hunting basics.',
          tip_detailed: `**Charles Smith** will teach you the ways of the bow—silent, deadly, respectful to the land. Find the white icon at camp when he's available.

This mission teaches **bow hunting basics** and starts one of the best friendships in the game. Charles is solid. Loyal. One of the good ones.

🏹 *Pay attention to what he teaches. The bow'll save your life later.*`,
          missable: true,
          reward: 'Bow Training',
          region: 'new-hanover'
        },
        { 
          id: 'comp-javier-chez', 
          text: 'Rob Chez Porter with Javier', 
          tip: " O'Driscoll hideout north of Valentine. Stealth or loud.",
          tip_detailed: `**Javier Escuella** invites you to hit an **O'Driscoll hideout** north of Valentine called Chez Porter. 

You can go **stealth**—pickin' 'em off one by one—or go **loud** and blast your way through. Javier's good either way.

🔫 *Fun robbery, good loot, and you get to kill O'Driscolls. Win-win-win.*`,
          missable: true,
          reward: 'Loot + Honor',
          region: 'new-hanover'
        },
        { 
          id: 'comp-lenny-filet', 
          text: 'Five Finger Fillet with Lenny', 
          tip: '🎮 Camp game. Beat him to win money.',
          tip_detailed: `**Lenny Summers** challenges you to a game of **Five Finger Fillet** at camp. Stab between your fingers fast without cuttin' yourself.

Beat him and you win some cash. He takes the loss well—Lenny's got class.

💰 *Good practice for the gambling challenges later.*`,
          missable: true,
          reward: 'Money',
          region: 'new-hanover'
        },
        { 
          id: 'comp-uncle-cattle', 
          text: 'Cattle Rustling with Uncle', 
          tip: '🐄 Steal cattle together. Uncle is... Uncle.',
          tip_detailed: `**Uncle** wants to rustleattle. Yes, Uncle. The lazy one. This should be interesting.

He's as helpful as you'd expect (barely), but the banter is gold. You do the work, he provides commentary.

🐄 *It ain't about the money. It's about the journey. And Uncle's endless excuses.*`,
          missable: true,
          reward: 'Money + Comedy',
          region: 'new-hanover'
        }
      ]
    },
    {
      id: 'comp-ch3',
      text: 'Chapter 3 Activities',
      tip: ' Clemens Point camp near Rhodes. MANY missable activities!',
      tip_detailed: `**Clemens Point** - our camp by the lake in Lemoyne. This is where things get complicated with the Grays and Braithwaites, but also where you can build some real bonds.

⚠️ **Chapter 3 has the MOST companion activities**, and they're all missable. Don't rush the story—spend time at camp.

*These are the good days, even if we didn't know it then.*`,
      chapter: 3,
      region: 'lemoyne',
      missable: true,
      verified: true,
      subItems: [
        { 
          id: 'comp-sean-lonnie', 
          text: "Rob Lonnie's Shack with Sean", 
          tip: "🍺 Drunken robbery. Sean is HILARIOUS drunk.",
          tip_detailed: `**Sean MacGuire** invites you to rob some poor fool's shack. But first—drinks. Lots of drinks.

This is peak Sean energy. Drunken stumbling, terrible Irish poetry, and somehow you still pull off the heist.

🍺 *One of the funniest missions in the game. Do NOT miss this one.*`,
          missable: true,
          reward: 'Loot + Laughs',
          region: 'lemoyne'
        },
        { 
          id: 'comp-javier-fish', 
          text: 'Fishing with Javier', 
          tip: '🎣 Relaxing trip. Good dialogue about his past.',
          tip_detailed: `**Javier** takes you fishing. Quiet, peaceful, a break from the chaos. He opens up about his past in Mexico—why he left, what he lost.

🎣 These quiet moments are rare. Enjoy 'em.

*Javier's a complicated man. This is where you start to understand him.*`,
          missable: true,
          reward: 'Character Development',
          region: 'lemoyne'
        },
        { 
          id: 'comp-kieran-fish', 
          text: 'Fishing with Kieran', 
          tip: "🎣 He's nervous but friendly. Do this BEFORE Chapter 4...",
          tip_detailed: `**Kieran Duffy** finally gets invited to do something with the gang. He's nervous—still feels like an outsider—but grateful for the company.

⚠️ **Do this before Chapter 4.** Trust me. You'll understand later.

*Poor Kieran. He just wanted to belong.*`,
          missable: true,
          reward: 'Feels',
          region: 'lemoyne'
        },
        { 
          id: 'comp-bill-coach', 
          text: 'Rob Coach with Bill', 
          tip: '🚃 Alden at Rhodes station gives tip. Bill is chaotic.',
          tip_detailed: `**Bill Williamson** wants to rob a coach. Get a tip from **Alden at Rhodes station** first, then ride out with Bill.

Bill is... chaotic. Things will go sideways. That's just how he operates.

🔫 *Profitable despite Bill's best efforts.*`,
          missable: true,
          reward: 'Coach Loot',
          region: 'lemoyne'
        },
        { 
          id: 'comp-sean-coach', 
          text: 'Rob Coach with Sean', 
          tip: '🍺 Another drunk heist. Peak Sean energy.',
          tip_detailed: `**Sean** again, and yes, **more drinking is involved**. Rob a coach while buzzed.

This is Sean in his element—loud, fun, and miraculously effective.

🍺 *LENNY! Wait, wrong mission...*`,
          missable: true,
          reward: 'Coach Loot',
          region: 'lemoyne'
        },
        { 
          id: 'comp-micah-filet', 
          text: 'Five Finger Fillet with Micah', 
          tip: '🐍 He cheats. Beat him anyway.',
          tip_detailed: `**Micah Bell** challenges you to Five Finger Fillet. He cheats—because of course he does.

Beat him anyway. For yourself. For satisfaction.

🐍 *Everything Micah does is tainted. But victory is still sweet.*`,
          missable: true,
          reward: 'Satisfaction',
          region: 'lemoyne'
        },
        { 
          id: 'comp-tilly-dominoes', 
          text: 'Dominoes with Tilly', 
          tip: "🎲 Camp game. She's surprisingly competitive.",
          tip_detailed: `**Tilly Jackson** plays dominoes at camp. She looks sweet, but she's **surprisingly competitive**.

Good for gambling challenge progress and good company.

🎲 *Tilly's got a sharp mind. Don't underestimate her.*`,
          missable: true,
          reward: 'Gambling Progress',
          region: 'lemoyne'
        }
      ]
    },
    {
      id: 'comp-ch4',
      text: 'Chapter 4 Activities',
      tip: ' Shady Belle camp in swamp. Fewer but still missable.',
      tip_detailed: `**Shady Belle** - a haunted plantation in the Lemoyne swamps. The mood's darker here. Fewer activities, but still important.

⚠️ **Missable.** Chapter 4 moves fast once it starts.

*Things are changin'. You can feel it in the air.*`,
      chapter: 4,
      region: 'lemoyne',
      missable: true,
      verified: true,
      subItems: [
        { 
          id: 'comp-pearson-hunt', 
          text: 'Hunting with Pearson', 
          tip: '🦌 Rare activity. Good stories about his navy days.',
          tip_detailed: `**Simon Pearson** rarely leaves camp, but this time he joins you for a hunt. Listen to his stories about the navy—he's got tales to tell.

🦌 **Rare activity** - don't skip this one.

*Pearson's more than the camp cook. This trip shows you that.*`,
          missable: true,
          reward: 'Pearson Character Arc',
          region: 'lemoyne'
        },
        { 
          id: 'comp-lenny-coach', 
          text: 'Rob Coach with Lenny', 
          tip: '🚃 Professional heist. Lenny is reliable.',
          tip_detailed: `**Lenny** for a coach robbery. Unlike Sean or Bill, Lenny's **professional**. Things go smooth.

💰 Good payout, no chaos.

*Lenny's dependable. You could build a crew around a man like him.*`,
          missable: true,
          reward: 'Coach Loot',
          region: 'lemoyne'
        },
        { 
          id: 'comp-micah-coach', 
          text: 'Rob Coach with Micah', 
          tip: '🐍 He makes it violent. Expect chaos and high bounty.',
          tip_detailed: `**Micah** for a coach robbery. He turns it **violent**—kills when he doesn't need to, draws attention, raises alarms.

⚠️ **Expect chaos and a high bounty.** Micah can't help himself.

🐍 *You'll wish you went with Lenny.*`,
          missable: true,
          reward: 'Coach Loot + Bounty',
          region: 'lemoyne'
        },
        { 
          id: 'comp-charles-bank', 
          text: '⭐ Bank Robbery with Charles', 
          tip: '💰 SPECIAL/ULTIMATE EDITION ONLY. Rob Rhodes Bank.',
          tip_detailed: `**Charles** invites you to rob the **Rhodes Bank** together. This is a **Special/Ultimate Edition exclusive** activity.

💰 Big payout if you own the right edition.

⭐ *One of the few exclusive content pieces that's actually meaningful.*`,
          missable: true,
          reward: 'Bank Loot',
          region: 'lemoyne',
          verified: true,
          source: 'fandom.com, gamerant.com'
        }
      ]
    },
    {
      id: 'comp-trophy',
      text: '🏆 Friends With Benefits Trophy',
      tip: 'Complete 1 companion activity per camp (Ch2-4) for achievement.',
      tip_detailed: `There's an achievement called **"Friends With Benefits"** for completing at least **one companion activity in each camp** from Chapters 2-4.

📋 **Requirements:**
• ✅ At least 1 activity at **Horseshoe Overlook** (Ch2)
• ✅ At least 1 activity at **Clemens Point** (Ch3)
• ✅ At least 1 activity at **Shady Belle** (Ch4)

🏆 *Easy trophy if you're paying attention. Missable forever if you're not.*`,
      reward: 'Trophy/Achievement',
      verified: true
    }
  ]
};
