/**
 * Unique Hats & Masks Section
 * Special headwear found around the world
 * Enhanced with cowboy storyteller narrative
 */

export const uniqueHatsSection = {
  id: 'unique-hats',
  title: 'Unique Hats & Masks',
  icon: '🎩',
  defaultOpen: false,
  items: [
    // ========================================
    // UNIQUE HATS (World Locations)
    // ========================================
    {
      id: 'hats-world',
      text: 'World Location Hats',
      tip: '🎩 Found at specific locations. Permanently saved to wardrobe.',
      tip_detailed: `These **unique hats** are hidden in specific locations across the world. Pick one up and it's saved **permanently** to your wardrobe.

🎩 When the hat name appears on screen, you know it's a keeper.

*A man's hat says a lot about him. Collect 'em all.*`,
      verified: true,
      subItems: [
        { 
          id: 'hat-tricorn', 
          text: 'Tricorn Hat', 
          tip: '📍 Wrecked ship island west of Rhodes (Flat Iron Lake). Need boat.',
          tip_detailed: `**Tricorn Hat** - a three-cornered relic from the pirate age.

📍 **Location:** Wrecked ship on an island west of Rhodes in Flat Iron Lake

🚣 **Access:** Need a boat or canoe to reach the island

*A pirate's hat for landlocked waters.*`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'hat-civil-war', 
          text: 'Civil War Hardee Hat', 
          tip: "📍 Fort Brennand, SE of O'Creagh's Run. Basement skeleton.",
          tip_detailed: `**Civil War Hardee Hat** - Union Army headwear from the war.

📍 **Location:** Fort Brennand, southeast of O'Creagh's Run. In the basement corner, on a skeleton.

*Old bones, old wars. The hat survived longer than the man.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'hat-nevada', 
          text: 'Nevada Hat', 
          tip: '📍 Behind waterfall at Granite Pass. Climb down from top.',
          tip_detailed: `**Nevada Hat** - wide-brimmed and stylish.

📍 **Location:** Behind the waterfall at Granite Pass. Climb down from the top to a rocky walkway behind the falls.

💧 *Another waterfall, another secret. Pattern holds true.*`,
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'hat-miner', 
          text: "Miner's Hat", 
          tip: "📍 Beryl's Dream mine. Use plunger to blast rocks, crawl through.",
          tip_detailed: `**Miner's Hat** - a lantern-equipped hardhat.

📍 **Location:** Beryl's Dream mine. Use the plunger to blast the blocked entrance, crawl through the hole. On a corpse deep inside.

⛏️ *The miner didn't make it out. His hat did.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'hat-morion', 
          text: 'Morion Helmet', 
          tip: '📍 Top of Mount Hagen. Frozen settler corpse at peak.',
          tip_detailed: `**Morion Helmet** - a Spanish conquistador helmet, centuries old.

📍 **Location:** Very top of Mount Hagen. On a frozen settler corpse at the peak.

❄️ *How'd a Spanish helmet get up here? Some mysteries stay frozen.*`,
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'hat-pirate', 
          text: 'Pirate Hat', 
          tip: '📍 Shipwreck island south of Saint Denis. Same spot as Pirate Sword.',
          tip_detailed: `**Pirate Hat** - complete with skull and crossbones.

📍 **Location:** Shipwreck island south of Saint Denis. Same location where you find the Pirate Sword.

🏴‍☠️ *Full pirate outfit potential if you're feelin' theatrical.*`,
          region: 'lemoyne',
          verified: true
        }
      ]
    },

    // ========================================
    // SCARECROW HATS
    // ========================================
    {
      id: 'hats-scarecrow',
      text: 'Scarecrow Hats',
      tip: '🎃 Shoot these off scarecrows to collect them.',
      tip_detailed: `Farmers put hats on their scarecrows. **Shoot the hat off** and it becomes yours.

🔫 Aim carefully—you want the hat, not the straw man.

*Crows don't need fashion. You do.*`,
      verified: true,
      subItems: [
        { 
          id: 'hat-scarecrow-straw', 
          text: 'Scarecrow Hat', 
          tip: '📍 Scarecrow SW of Heartland Overflow. Shoot hat off.',
          tip_detailed: `**Scarecrow Hat** - classic straw style.

📍 **Location:** Scarecrow southwest of Heartland Overflow

🔫 Shoot the hat off to collect it.`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'hat-scarecrow-derby', 
          text: 'Scarecrow Derby Hat', 
          tip: '📍 Braithwaite Manor cornfield.',
          tip_detailed: `**Scarecrow Derby Hat** - fancy for a field guardian.

📍 **Location:** Braithwaite Manor cornfield. Shoot it off the scarecrow.

*The Braithwaites dressed their scarecrows well.*`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'hat-scarecrow-top', 
          text: 'Scarecrow Top Hat', 
          tip: "📍 Behind MacFarlane's Ranch. ⚠️ EPILOGUE ONLY!",
          tip_detailed: `**Scarecrow Top Hat** - surprisingly dapper.

📍 **Location:** Behind MacFarlane's Ranch

⚠️ **Epilogue only** - New Austin access required.`,
          region: 'new-austin',
          chapter: 'epilogue',
          verified: true
        }
      ]
    },

    // ========================================
    // MASKS & HELMETS
    // ========================================
    {
      id: 'hats-masks',
      text: 'Masks & Helmets',
      tip: '💀 Unique headwear including masks and ancient helmets.',
      tip_detailed: `**Masks and helmets** from various eras and cultures. Some are creepy, some are historical, all are unique.

💀 *Cover your face. Become someone else.*`,
      verified: true,
      subItems: [
        { 
          id: 'mask-cat-skull', 
          text: 'Cat Skull Mask', 
          tip: '📍 Lakay settlement (swamp). Sunken building, crouch through hole.',
          tip_detailed: `**Cat Skull Mask** - a big cat's skull worn as a mask.

📍 **Location:** Lakay settlement in the Lemoyne swamps. Find the sunken building, crouch through the hole. Mounted on the wall inside.

💀 *Wear the face of a predator.*`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'mask-pig', 
          text: 'Pig Mask', 
          tip: "📍 Butcher's Creek slaughtering area. Center of settlement.",
          tip_detailed: `**Pig Mask** - disturbing swine headwear.

📍 **Location:** Butcher's Creek slaughtering area. Hanging in the center of the creepy settlement.

🐷 *Don't ask what they do there. Just take the mask.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'helmet-viking', 
          text: 'Viking Helmet', 
          tip: '📍 Old Tomb, west of Roanoke Valley river, N of Beaver Hollow.',
          tip_detailed: `**Viking Helmet** - horned helm from the Norse.

📍 **Location:** Old Tomb, west of Roanoke Valley river, north of Beaver Hollow. Also find the Viking Hatchet and Comb here.

⚔️ *Vikings in America? The evidence sits on your head.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'mask-pagan', 
          text: 'Pagan Skull Mask', 
          tip: '📍 Pagan ritual site, NW of Lake Owanjila.',
          tip_detailed: `**Pagan Skull Mask** - from a disturbing ritual site.

📍 **Location:** Pagan ritual site, northwest of Lake Owanjila. On a corpse in a very disturbing scene.

⚠️ *This place is wrong. Take the mask and leave.*`,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'mask-ram', 
          text: 'Ram Skull Mask', 
          tip: '📍 Rathskeller Fork, east corner. ⚠️ EPILOGUE ONLY!',
          tip_detailed: `**Ram Skull Mask** - horned skull headwear.

📍 **Location:** Rathskeller Fork, eastern corner. Hanging from a wooden pole.

⚠️ **Epilogue only** - New Austin access required.`,
          region: 'new-austin',
          chapter: 'epilogue',
          verified: true
        }
      ]
    },

    // ========================================
    // NPC ENCOUNTER HATS
    // ========================================
    {
      id: 'hats-npc',
      text: 'NPC Encounter Hats',
      tip: '🤠 From specific NPCs through encounters or combat.',
      tip_detailed: `Some unique hats come from **specific NPCs**—either through encounters, robbery, or killing gang members.

🔫 *When life gives you enemies, take their hats.*`,
      verified: true,
      subItems: [
        { 
          id: 'hat-raccoon', 
          text: 'Classic Raccoon Hat', 
          tip: '📍 Valentine saloon "crazy man" in back. Fistfight → grab hat.',
          tip_detailed: `**Classic Raccoon Hat** - Davy Crockett style.

📍 **Location:** Valentine saloon. There's a "crazy man" in the back. Encounter him multiple times, eventually you'll fistfight. Beat him and grab his hat.

🦝 *He won't need it after the beating you give him.*`,
          region: 'new-hanover',
          chapter: 2,
          verified: true
        },
        { 
          id: 'hat-lemoyne-riders', 
          text: 'Lemoyne Raiders Hat', 
          tip: '📍 Kill Lemoyne Raiders (Scarlett Meadows). Gray army cap.',
          tip_detailed: `**Lemoyne Raiders Hat** - distinctive gray Confederate-style cap.

📍 **Source:** Kill Lemoyne Raiders in Scarlett Meadows or their hideouts.

🎖️ *The South lost the war. These boys didn't get the message.*`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'hat-murfree', 
          text: 'Murfree Brood Hat', 
          tip: '📍 Kill Murfree Brood (Roanoke Ridge). Unique dirty cap.',
          tip_detailed: `**Murfree Brood Hat** - filthy headwear from filthy people.

📍 **Source:** Kill Murfree Brood members in Roanoke Ridge.

⚠️ *Wash it before wearing. These people are... unsanitary.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'hat-del-lobo', 
          text: 'Del Lobo Sombrero', 
          tip: '📍 Kill Del Lobos (New Austin). ⚠️ EPILOGUE ONLY!',
          tip_detailed: `**Del Lobo Sombrero** - wide-brimmed Mexican outlaw style.

📍 **Source:** Kill Del Lobo gang members in New Austin.

⚠️ **Epilogue only** - New Austin access required.`,
          region: 'new-austin',
          chapter: 'epilogue',
          verified: true
        }
      ]
    },

    // ========================================
    // MISSABLE HATS (Story-Locked)
    // ========================================
    {
      id: 'hats-missable',
      text: '⚠️ Missable Hats',
      tip: '⚠️ Only obtainable during specific story missions!',
      tip_detailed: `These hats can **ONLY be obtained during specific story missions**. Miss them and they're gone forever.

⚠️ Save before these missions if you're a completionist.

*One chance. Don't blow it.*`,
      missable: true,
      verified: true,
      subItems: [
        { 
          id: 'hat-guarma', 
          text: 'Guarma Hat', 
          tip: '⚠️ GUARMA ONLY (Ch5)! Kill soldiers wearing unique hat.',
          tip_detailed: `**Guarma Hat** - tropical military style.

⚠️ **GUARMA ONLY (Chapter 5)** - You cannot return to Guarma! Kill soldiers wearing unique hats and grab them before leaving.

🏝️ *What happens in Guarma stays in Guarma. Including the hats you missed.*`,
          missable: true,
          chapter: 5,
          verified: true
        },
        { 
          id: 'hat-police', 
          text: 'Saint Denis Police Cap', 
          tip: '⚠️ "Angelo Bronte" mission (Ch4). Loot from killed police.',
          tip_detailed: `**Saint Denis Police Cap** - law enforcement headwear.

⚠️ **Mission:** "Angelo Bronte, A Man of Honor" (Chapter 4). Kill police during the mission and loot their caps.

👮 *Normally you can't kill cops without consequences. This mission's different.*`,
          missable: true,
          chapter: 4,
          verified: true
        },
        { 
          id: 'hat-miners-mission', 
          text: "Miner's Hat (Mission)", 
          tip: '⚠️ "The Bridge to Nowhere" mission (Ch6). Loot from miner.',
          tip_detailed: `**Miner's Hat (Mission Version)** - lantern helmet.

⚠️ **Mission:** "The Bridge to Nowhere" (Chapter 6). Loot from miners during the mission.

*Different from the world location version—get both!*`,
          missable: true,
          chapter: 6,
          verified: true
        },
        { 
          id: 'hat-military', 
          text: 'Military Mountie Hat', 
          tip: '⚠️ Fort Wallace missions (Ch6). Loot from army officer.',
          tip_detailed: `**Military Mountie Hat** - officer's dress hat.

⚠️ **Missions:** Fort Wallace-related missions in Chapter 6. Loot from army officers.

🎖️ *The army's got style. Take it from them.*`,
          missable: true,
          chapter: 6,
          verified: true
        },
        { 
          id: 'hat-braithwaite', 
          text: 'Braithwaite Manor Hat', 
          tip: '⚠️ Manor raid mission (Ch3). Loot from estate guards.',
          tip_detailed: `**Braithwaite Manor Hat** - fancy estate guard headwear.

⚠️ **Mission:** Braithwaite Manor raid (Chapter 3). Loot unique hats from estate guards during the assault.

🔥 *The manor burns. Grab the hats first.*`,
          missable: true,
          chapter: 3,
          verified: true
        }
      ]
    },

    // ========================================
    // COLLECTION TIP
    // ========================================
    {
      id: 'hats-tips',
      text: 'Hat Collection Tips',
      tip: '💡 Helpful advice for collecting unique headwear.',
      tip_detailed: `Know these rules and you'll never lose a hat again.`,
      verified: true,
      subItems: [
        { 
          id: 'hat-tip-save', 
          text: 'Saving Hats', 
          tip: '💾 If hat name appears on screen when picked up, it saves permanently.',
          tip_detailed: `When you pick up a hat and its **name appears on screen**, that hat is saved **permanently** to your wardrobe. If no name appears, it's just a temporary hat.`,
          verified: true
        },
        { 
          id: 'hat-tip-horse', 
          text: 'Horse Storage', 
          tip: '🐴 Store up to 3 hats on horse saddle. More in wardrobe.',
          tip_detailed: `Your horse saddle can hold **up to 3 hats**. Additional saved hats go to your wardrobe at camp or hotel.`,
          verified: true
        },
        { 
          id: 'hat-tip-lost', 
          text: 'Lost Hats', 
          tip: '🔄 Unique hats respawn at original location if lost.',
          tip_detailed: `If you lose a unique hat, it will **respawn at its original location**. Check back if you need it again.`,
          verified: true
        }
      ]
    }
  ]
};
