/**
 * Bounty Hunting Section
 * Grouped by sheriff office location
 * ✅ VERIFIED: 2026-02-02 via rdr2.org, gamerant.com, gamepressure.com
 */

export const bountiesSection = {
  id: 'bounties',
  title: 'Bounty Hunting',
  icon: '🤠',
  defaultOpen: false,
  items: [
    {
      id: 'bounty-valentine',
      text: 'Valentine Sheriff (2 Bounties)',
      tip: 'Available after "Good, Honest, Snake Oil". Alive = more $.',
      tip_detailed: `The **Valentine Sheriff** posts bounties on his board once you've done a little work for him. Complete the mission **"Good, Honest, Snake Oil"** in Chapter 2 and two names'll show up on that wanted board.

💰 **Pro tip**: Bringing 'em in alive always pays better. Dead's quicker, but live bounties fatten your wallet.

*These Valentine folk ain't the worst you'll hunt. Consider 'em practice.*`,
      chapter: 2,
      region: 'new-hanover',
      rewards: ['$40-50 per bounty', 'Honor'],
      verified: true,
      source: 'rdr2.org, gamerant.com',
      subItems: [
        { 
          id: 'bounty-benedict', 
          text: 'Benedict Allbright ($40)', 
          tip: 'Rocks west of Valentine near Dakota River. MUST bring ALIVE.',
          tip_detailed: `**Benedict Allbright** - poison seller who's been killin' folk with tainted medicine. You'll find him perched on some **rocks west of Valentine**, near the Dakota River, contemplating his sins.

⚠️ **MUST be brought in ALIVE** - the law wants to make an example of him. If he dies, the bounty's void.

*He'll try to talk his way out. Don't let him. Hogtie and deliver.*`,
          reward: '$40 (Alive only)',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'bounty-ellie', 
          text: 'Ellie Anne Swan ($50)', 
          tip: 'Camp near Wallace Station. Alive = $50, Dead = $25.',
          tip_detailed: `**Ellie Anne Swan** - known as "the black widow," accused of killing her husband. Found hidin' in a **camp near Wallace Station**, northwest of Valentine.

💰 **Alive = $50 | Dead = $25**

She's got a sob story ready. Up to you whether you listen or just hogtie her and ride.

*Some say she's innocent. The poster don't care.*`,
          rewards: ['$50 Alive', '$25 Dead'],
          region: 'new-hanover',
          verified: true
        }
      ]
    },
    {
      id: 'bounty-rhodes',
      text: 'Rhodes Sheriff (3 Bounties)',
      tip: 'Southern bounties in Lemoyne. Chapter 4+.',
      tip_detailed: `The **Rhodes Post Office** has three bounties on the board starting in Chapter 4 after "The Joy of Civilization" mission. Most are Lemoyne Raiders or connected criminals.

🏛️ *Gray and Braithwaite territory. Complex politics, but bounty hunting is straightforward.*`,
      chapter: 4,
      region: 'lemoyne',
      rewards: ['$25-??'],
      verified: true,
      source: 'rdr2.org, gamepressure.com',
      subItems: [
        { 
          id: 'bounty-mark', 
          text: 'Mark Johnson', 
          tip: 'Bluewater Marsh, west of Kamassa River. Former robber with family. ALIVE only.',
          tip_detailed: `**Mark Johnson** - former stage and train robber, now hiding with his family. Found **west of Kamassa River near Bluewater Marsh**.

⚠️ **MUST bring ALIVE** - he's got family there, so approach carefully.

*Takes some tracking to locate his hideout.*`,
          reward: 'Bring Alive',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'bounty-robbie', 
          text: 'Robbie Laidlaw', 
          tip: 'Cabin southeast of Braithwaite Manor. Available after catching Mark Johnson. ALIVE only.',
          tip_detailed: `**Robbie Laidlaw** - wanted for murder. Hiding in a **cabin southeast of Braithwaite Manor**. 

⚠️ **Unlocks after catching Mark Johnson** - complete his bounty first.
⚠️ **MUST bring ALIVE**

*Dangerous and armed. Approach with Dead Eye ready.*`,
          reward: 'Bring Alive',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'bounty-camille', 
          text: 'Camille de Millemont', 
          tip: 'Catfish Jacksons. Lemoyne Raiders member. Dead or Alive (alive = better).',
          tip_detailed: `**Camille de Millemont** - a member of the Lemoyne Raiders, added with the PC release. Found at **Catfish Jacksons**.

💰 **Dead or Alive** - but bringing him in alive yields a better reward.

⚠️ *Note: This is a MALE character despite the name.*`,
          reward: 'Dead or Alive',
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    {
      id: 'bounty-strawberry',
      text: 'Strawberry Sheriff (2 Bounties)',
      tip: 'Western bounties in Big Valley. One in Chapter 2, one in Epilogue.',
      tip_detailed: `The **Strawberry Jail** has bounty posters. Joshua Brown is available early, but Bart Cavanaugh only appears in the Epilogue.

🏔️ *Mountain terrain—make sure your horse is sure-footed.*`,
      chapter: 2,
      region: 'west-elizabeth',
      rewards: ['$40-??'],
      verified: true,
      source: 'rdr2.org, gamepressure.com',
      subItems: [
        { 
          id: 'bounty-joshua', 
          text: 'Joshua Brown ($40)', 
          tip: 'Old mine north of Strawberry. Shootist. ALIVE only.',
          tip_detailed: `**Joshua Brown** - a shootist holed up in an **old mine north of Strawberry**. The tunnels are dark and cramped.

⚠️ **MUST bring ALIVE**

💣 Patience or dynamite to smoke him out works.

💰 **$40**`,
          reward: '$40 (Alive only)',
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'bounty-bart', 
          text: 'Bart Cavanaugh', 
          tip: '⚠️ EPILOGUE ONLY. Gang leader with crew, found passed out at camp.',
          tip_detailed: `**Bart Cavanaugh** - outlaw gang leader. This bounty is only available during the **Epilogue**.

You'll find him and his gang **passed out at a campsite**. Easy grab if you're quiet.

💰 Bringing him alive gets a better reward.`,
          reward: 'Alive better',
          chapter: 'epilogue',
          region: 'west-elizabeth',
          verified: true
        }
      ]
    },
    {
      id: 'bounty-saintdenis',
      text: 'Saint Denis Police (2 Bounties)',
      tip: 'Urban bounties. One early, one Epilogue only.',
      tip_detailed: `The **Saint Denis Police Station** has bounty posters inside. Lindsey Wofford is available after "Good, Honest, Snake Oil", while Anthony Foreman only appears in the Epilogue under certain conditions.

🏙️ *City bounties require precision. Too much chaos brings more law.*`,
      chapter: 2,
      region: 'lemoyne',
      rewards: ['Varies'],
      verified: true,
      source: 'rdr2.org, gamepressure.com',
      subItems: [
        { 
          id: 'bounty-lindsey', 
          text: 'Lindsey Wofford', 
          tip: 'Fort Brennand, SW of Van Horn. Lemoyne Raiders leader. Dead or Alive.',
          tip_detailed: `**Lindsey Wofford** - leader of the Lemoyne Raiders. Found at **Fort Brennand, southwest of Van Horn** (NOT in Saint Denis itself).

💰 **Dead or Alive** - same payout either way, so approach how you like.

⚠️ Available after "Good, Honest, Snake Oil" mission.

*Note: Despite some confusion, this is a MALE character.*`,
          reward: 'Dead or Alive',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'bounty-anthony', 
          text: 'Anthony Foreman ($50)', 
          tip: '⚠️ EPILOGUE ONLY. Doyle\'s Tavern. Only if NOT killed in story.',
          tip_detailed: `**Anthony Foreman** - you might remember him from the Trelawny missions. His bounty poster appears in the **Epilogue** after "Gainful Employment" mission.

⚠️ **Conditional** - only appears if you DIDN'T kill him during the main story.

📍 Found in **Doyle's Tavern**, Saint Denis. Must bring ALIVE.

💰 **$50**`,
          reward: '$50 (Alive only)',
          chapter: 'epilogue',
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    {
      id: 'bounty-tumbleweed',
      text: 'Tumbleweed Sheriff (2 Bounties)',
      tip: '⚠️ EPILOGUE ONLY - New Austin access required.',
      tip_detailed: `**Tumbleweed Police Station** posts the final bounties—deep in New Austin territory. Del Lobo gang connections. Only accessible as John in the Epilogue.

🏜️ *The desert don't forgive mistakes. Bring water and bullets.*`,
      chapter: 'epilogue',
      region: 'new-austin',
      rewards: ['Varies'],
      verified: true,
      source: 'rdr2.org, gamepressure.com',
      subItems: [
        { 
          id: 'bounty-joaquin', 
          text: 'Joaquin Arroyo', 
          tip: 'West of Solomon\'s Folly. Del Lobo gang. ALIVE only.',
          tip_detailed: `**Joaquin Arroyo** - Del Lobo gang member. Found **west of Solomon's Folly** in New Austin.

⚠️ **MUST bring ALIVE**

💰 Alive payout is significant. Don't shoot.`,
          reward: 'Bring Alive',
          region: 'new-austin',
          verified: true
        },
        { 
          id: 'bounty-esteban', 
          text: 'Esteban Cortez', 
          tip: 'Mine SW of Tumbleweed. Dead or Alive.',
          tip_detailed: `**Esteban Cortez** - located in a **mine southwest of Tumbleweed**. Has gang backup.

💰 **Dead or Alive** - either way works.

🏆 *One of the final bounties in the game.*`,
          reward: 'Dead or Alive',
          region: 'new-austin',
          verified: true
        }
      ]
    }
  ]
};
