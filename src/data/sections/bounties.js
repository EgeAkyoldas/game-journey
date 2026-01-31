/**
 * Bounty Hunting Section
 * Grouped by sheriff office location
 * Enhanced with cowboy storyteller narrative
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
      tip: '📍 Available after "Good, Honest, Snake Oil". Alive = more $.',
      tip_detailed: `The **Valentine Sheriff** posts bounties on his board once you've done a little work for him. Complete the mission **"Good, Honest, Snake Oil"** in Chapter 2 and two names'll show up on that wanted board.

💰 **Pro tip**: Bringing 'em in alive always pays better. Dead's quicker, but live bounties fatten your wallet.

*These Valentine folk ain't the worst you'll hunt. Consider 'em practice.*`,
      chapter: 2,
      region: 'new-hanover',
      rewards: ['$40-50 per bounty', 'Honor'],
      verified: true,
      subItems: [
        { 
          id: 'bounty-benedict', 
          text: 'Benedict Allbright ($40)', 
          tip: '📍 Rocks west of Valentine near Dakota River. Must bring ALIVE.',
          tip_detailed: `**Benedict Allbright** - poison seller who's been killin' folk with tainted medicine. You'll find him perched on some **rocks west of Valentine**, near the Dakota River, contemplating his sins.

⚠️ **MUST be brought in ALIVE**. The law wants to make an example of him. If he dies, the bounty's void.

*He'll try to talk his way out. Don't let him. Hogtie and deliver.*`,
          reward: '$40 (Alive only)',
          region: 'new-hanover'
        },
        { 
          id: 'bounty-ellie', 
          text: 'Ellie Anne Swan ($50)', 
          tip: '📍 Camp NW of Valentine near Wallace Station. Alive = $50, Dead = $25.',
          tip_detailed: `**Ellie Anne Swan** - they say she killed her husband. Found hidin' in a **camp northwest of Valentine**, near Wallace Station.

💰 **Alive = $50 | Dead = $25**

She's got a sob story ready. Up to you whether you listen or just hogtie her and ride. Either way, she's worth the trip.

*Some say she's innocent. The poster don't care.*`,
          rewards: ['$50 Alive', '$25 Dead'],
          region: 'new-hanover'
        }
      ]
    },
    {
      id: 'bounty-rhodes',
      text: 'Rhodes Sheriff (3 Bounties)',
      tip: '📍 Southern bounties in Lemoyne. Chapter 3+.',
      tip_detailed: `The **Rhodes Sheriff** has three names on his board, and they're scattered across Lemoyne's swamps and fields. Most of these folks are nastier than the gators.

🏛️ *This is Gray and Braithwaite territory. Watch your step—the law here is... complicated.*`,
      chapter: 3,
      region: 'lemoyne',
      rewards: ['$25-55 per bounty'],
      verified: true,
      subItems: [
        { 
          id: 'bounty-mark', 
          text: 'Mark Johnson ($25)', 
          tip: '📍 Bluewater Marsh. Horse thief with gang backup.',
          tip_detailed: `**Mark Johnson** - a horse thief with a small crew backin' him up. You'll find him in **Bluewater Marsh**, and he won't come quietly.

⚠️ **Has gang backup** - expect 3-4 armed men. Clear 'em out before you grab Mark.

💰 **$25** - lowest bounty, but good practice for tougher hunts.`,
          reward: '$25',
          region: 'lemoyne'
        },
        { 
          id: 'bounty-robbie', 
          text: 'Robbie Laidlaw ($45)', 
          tip: '📍 Near Caliga Hall farmhouse. Murderer. Dangerous.',
          tip_detailed: `**Robbie Laidlaw** - killed a man in cold blood and fled. Dangerous fella, holed up **near Caliga Hall farmhouse**.

⚠️ **Dangerous** - he's armed and ain't lookin' to surrender. Approach with Dead Eye ready.

💰 **$45** - worth the risk if you're quick on the draw.`,
          reward: '$45',
          region: 'lemoyne'
        },
        { 
          id: 'bounty-camille', 
          text: 'Camille de Millemont ($55)', 
          tip: '📍 Saint Denis saloon. French con artist. Persuasive.',
          tip_detailed: `**Camille de Millemont** - a French con artist who's charmed her way through high society and left a trail of empty wallets. You'll find her in a **Saint Denis saloon**, workin' her next mark.

⚠️ **Persuasive** - she'll try to talk you into lettin' her go. Stay focused on the bounty.

💰 **$55** - highest Rhodes bounty. Worth the chase through city streets.`,
          reward: '$55',
          region: 'lemoyne'
        }
      ]
    },
    {
      id: 'bounty-strawberry',
      text: 'Strawberry Sheriff (2 Bounties)',
      tip: '📍 Western bounties in Big Valley area.',
      tip_detailed: `The **Strawberry Sheriff** posts bounties on desperate men who fled into the Big Valley wilderness. These hunts take you into rough country—bring supplies.

🏔️ *Mountain terrain means your horse better be sure-footed.*`,
      chapter: 2,
      region: 'west-elizabeth',
      rewards: ['$40-60 per bounty'],
      verified: true,
      subItems: [
        { 
          id: 'bounty-joshua', 
          text: 'Joshua Brown ($40)', 
          tip: '📍 Abandoned mine NW of Strawberry. Bring dynamite.',
          tip_detailed: `**Joshua Brown** - dangerous criminal holed up in an **abandoned mine northwest of Strawberry**. The tunnels are dark, cramped, and he knows every inch.

💣 **Bring dynamite** or lots of patience. You can smoke him out or go in after him.

💰 **$40** - the mine's creepy, but the payout's decent.`,
          reward: '$40',
          region: 'west-elizabeth'
        },
        { 
          id: 'bounty-bart', 
          text: 'Bart Cavanaugh ($60)', 
          tip: '🔫 Outlaw gang leader. Multiple bodyguards. Stealth recommended.',
          tip_detailed: `**Bart Cavanaugh** - an outlaw gang leader with **multiple bodyguards** around him at all times. This ain't a simple snatch-and-grab.

🔫 **Stealth recommended** - pick off the guards quietly with a bow, then grab Bart when he's alone. Going in loud means a firefight.

💰 **$60** - one of the better payouts. Worth the planning.`,
          reward: '$60',
          region: 'west-elizabeth'
        }
      ]
    },
    {
      id: 'bounty-saintdenis',
      text: 'Saint Denis Police (3 Bounties)',
      tip: '📍 Urban bounties. Chapter 4+. Some story-connected.',
      tip_detailed: `The **Saint Denis Police** handle city criminals—con men, arsonists, and gang leaders. Urban bounty hunting means chasing through crowded streets and watching for law interference.

🏙️ *In the city, you gotta be surgical. Too much noise brings badges running.*`,
      chapter: 4,
      region: 'lemoyne',
      rewards: ['$40-50 per bounty'],
      verified: true,
      subItems: [
        { 
          id: 'bounty-lindsay', 
          text: 'Lindsay Wofford ($45)', 
          tip: '📍 Urban pursuit through Saint Denis streets. Watch for police.',
          tip_detailed: `**Lindsay Wofford** - a city criminal who knows Saint Denis like the back of her hand. This bounty becomes an **urban pursuit through crowded streets**.

👮 **Watch for police** - causing too much chaos will bring the law down on YOU. Keep it clean.

💰 **$45** - fast bounty if you catch her quick.`,
          reward: '$45',
          region: 'lemoyne'
        },
        { 
          id: 'bounty-anthony', 
          text: 'Anthony Foreman ($50)', 
          tip: '⚠️ EPILOGUE only. Only appears if not killed in story.',
          tip_detailed: `**Anthony Foreman** - you might remember him from the Trelawny missions. If he survived those encounters, he's back to his old ways and there's a bounty on his head.

⚠️ **Conditional availability** - only appears in the **Epilogue**, and only if you didn't kill him during the main story.

💰 **$50** - satisfying to collect if you left him alive earlier.`,
          reward: '$50',
          chapter: 'epilogue',
          region: 'lemoyne'
        },
        { 
          id: 'bounty-patrick', 
          text: "Patrick O'Brien ($40)", 
          tip: '🔥 Serial arsonist. Near industrial area.',
          tip_detailed: `**Patrick O'Brien** - a serial arsonist who's been settin' fires across the industrial district. Found lurkin' **near the factories**.

🔥 *Ironic death available* - if you don't stop him in time, he'll die in one of his own fires. Still counts, but less satisfying.

💰 **$40** - stop him before he burns down half the city.`,
          reward: '$40',
          region: 'lemoyne'
        }
      ]
    },
    {
      id: 'bounty-blackwater',
      text: 'Blackwater Police (3 Bounties)',
      tip: '⚠️ EPILOGUE ONLY - West Elizabeth access required.',
      tip_detailed: `**Blackwater Police** bounties are only available in the **Epilogue** when John can freely roam West Elizabeth. These are tough customers—war veterans, serial killers, and gang remnants.

⚠️ *Blackwater was forbidden territory as Arthur. As John, it's hunting season.*`,
      chapter: 'epilogue',
      region: 'west-elizabeth',
      rewards: ['$50-65 per bounty'],
      verified: true,
      subItems: [
        { 
          id: 'bounty-elias', 
          text: 'Elias Green ($65)', 
          tip: "📍 West of Beecher's Hope. War veteran. Alive = $65, Dead = $35.",
          tip_detailed: `**Elias Green** - a war veteran who came back wrong. Turned to violence and crime. Found **west of Beecher's Hope**, close to John's new life.

💰 **Alive = $65 | Dead = $35**

War broke him. The bounty don't care about reasons.`,
          rewards: ['$65 Alive', '$35 Dead'],
          region: 'west-elizabeth'
        },
        { 
          id: 'bounty-otis', 
          text: 'Otis Skinner ($55)', 
          tip: '⚠️ Serial killer type. VERY dangerous. Heavy weapons.',
          tip_detailed: `**Otis Skinner** - they call him a "serial killer type" and that's puttin' it mild. This man is **extremely dangerous**.

🔫 **Bring heavy weapons** - shotgun, repeater, full Dead Eye. He's likely to charge you.

💰 **$55** - worth every bullet you spend.`,
          reward: '$55',
          region: 'west-elizabeth'
        },
        { 
          id: 'bounty-herman', 
          text: 'Herman Zizendorf ($50)', 
          tip: "📍 Near MacFarlane's Ranch. Has accomplices.",
          tip_detailed: `**Herman Zizendorf** - hidin' out **near MacFarlane's Ranch** with a crew of accomplices. Clear the help first, then grab Herman.

⚠️ **Has accomplices** - don't charge in alone.

💰 **$50** - a decent payday if you stay smart.`,
          reward: '$50',
          region: 'new-austin'
        }
      ]
    },
    {
      id: 'bounty-tumbleweed',
      text: 'Tumbleweed Sheriff (2 Bounties)',
      tip: '⚠️ EPILOGUE ONLY - New Austin access required.',
      tip_detailed: `**Tumbleweed Sheriff** posts the last bounties you'll hunt—deep in **New Austin** territory. Del Lobo gang connections and Mexican outlaws. The Wild West at its wildest.

🏜️ *The desert don't forgive mistakes. Bring water and bullets.*`,
      chapter: 'epilogue',
      region: 'new-austin',
      rewards: ['$60-65 per bounty'],
      verified: true,
      subItems: [
        { 
          id: 'bounty-joaquin', 
          text: 'Joaquin Arroyo ($60)', 
          tip: '📍 Del Lobo gang connection. Alive = $60, Dead = $30.',
          tip_detailed: `**Joaquin Arroyo** - connected to the Del Lobo gang, which means you'll fight through bandits to get to him.

💰 **Alive = $60 | Dead = $30**

The desert sun makes corpses stink quick. Alive is better money anyway.`,
          rewards: ['$60 Alive', '$30 Dead'],
          region: 'new-austin'
        },
        { 
          id: 'bounty-esteban', 
          text: 'Esteban Cortez ($65)', 
          tip: '📍 Mexican outlaw. Multiple gang members. Dead or alive = $65.',
          tip_detailed: `**Esteban Cortez** - a Mexican outlaw with **multiple gang members** guarding him. The fight to get him is the real challenge.

💰 **$65** - same payout dead or alive, so do what you gotta do.

🏆 *The last bounty on the board. Make it count, cowboy.*`,
          reward: '$65',
          region: 'new-austin'
        }
      ]
    }
  ]
};
