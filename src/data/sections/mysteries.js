/**
 * Mysteries & Easter Eggs Section
 * Supernatural encounters, secret locations, and hidden stories
 * Enhanced with cowboy storyteller narrative
 */

export const mysteriesSection = {
  id: 'mysteries',
  title: 'IX. Mysteries & Secrets',
  icon: '👻',
  defaultOpen: false,
  items: [
    // ========================================
    // SERIAL KILLER MYSTERY (American Dreams)
    // ========================================
    {
      id: 'mystery-serial-killer',
      text: 'Serial Killer Mystery (American Dreams)',
      tip: '🔪 Find 3 gruesome clues to track down the killer.',
      tip_detailed: `A serial killer is leaving **dismembered bodies** across the map—each with a piece of a map in their remains. Find all three to locate his lair.

📋 **3 murder scenes** → piece together the map → find the killer

⚠️ **Warning:** These scenes are disturbing.

🏆 **Reward:** Unique confrontation + basement discovery

*One of the darkest secrets in the West...*`,
      reward: 'Unique Confrontation',
      verified: true,
      subItems: [
        { 
          id: 'serial-clue-1', 
          text: 'Clue 1: Wallace Station', 
          tip: "📍 SW of Valentine, S of Wallace Station. Map piece in severed head.",
          tip_detailed: `📍 **Location:** Rock southwest of Valentine, south of Wallace Station

🔍 Dismembered body on the rock. The map piece is in the severed head's mouth.

*Someone's leaving messages. In flesh.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'serial-clue-2', 
          text: 'Clue 2: Valentine South', 
          tip: "📍 Between Citadel Rock & Caster's Ridge. Body under railroad.",
          tip_detailed: `📍 **Location:** Between Citadel Rock and Caster's Ridge

🔍 Follow the blood trail to find the body hanging under the railroad tracks.`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'serial-clue-3', 
          text: 'Clue 3: Braithwaite Manor', 
          tip: '📍 East of Braithwaite Manor. "BEHOLD" written. Final piece.',
          tip_detailed: `📍 **Location:** East of Braithwaite Manor

🔍 Body in a tree with "BEHOLD" written nearby. The final map piece.`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'serial-cabin', 
          text: 'Confront the Killer ⭐', 
          tip: '📍 Lucky\'s Cabin (S of Valentine). "Stranger" icon appears.',
          tip_detailed: `📍 **Location:** Lucky's Cabin, south of Valentine

With all 3 map pieces, a "Stranger" icon appears. Go to the basement.

⚠️ *What you find down there... you won't forget.*`,
          priority: true,
          region: 'new-hanover',
          verified: true
        }
      ]
    },
    // ========================================
    // VAMPIRE OF SAINT DENIS
    // ========================================
    {
      id: 'mystery-vampire',
      text: 'Vampire of Saint Denis 🧛',
      tip: '🧛 Find 5 blood graffiti clues. Appears at midnight only!',
      tip_detailed: `There is a **vampire** in Saint Denis. Find 5 blood-written clues around the city to trigger his appearance.

⏰ **He only appears at midnight (12:00-1:00 AM)**

🗡️ **Reward:** Ornate Dagger (unique melee weapon)

*Yes. A real vampire. In 1899.*`,
      reward: 'Ornate Dagger',
      region: 'lemoyne',
      verified: true,
      subItems: [
        { 
          id: 'vampire-graffiti-1', 
          text: 'Graffiti 1: Near Outdoor Market', 
          tip: '📍 Close to Trapper/Fence in SE Saint Denis.',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'vampire-graffiti-2', 
          text: 'Graffiti 2: Soup Kitchen', 
          tip: "📍 Across from Doyle's Tavern. Northern wall of red apartment.",
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'vampire-graffiti-3', 
          text: 'Graffiti 3: Alleyway', 
          tip: "📍 Between Gaillard's Shoes and antiques shop.",
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'vampire-graffiti-4', 
          text: 'Graffiti 4: Church Area', 
          tip: '📍 Near St. Denis Cathedral southern wall.',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'vampire-graffiti-5', 
          text: 'Graffiti 5: Back Streets', 
          tip: '📍 Behind the general store area.',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'vampire-encounter', 
          text: 'Kill the Vampire ⭐', 
          tip: "⏰ 12:00-1:00 AM ONLY! Alley south of general store. Skull icon on map.",
          tip_detailed: `⏰ **Appears ONLY between 12:00-1:00 AM**

📍 **Location:** Alley south of general store, near Doyle's Tavern

After finding all 5 graffiti, a skull icon appears on the map. Go there at midnight.

🗡️ Kill him and take his **Ornate Dagger**.

*He's fast. Be ready.*`,
          priority: true,
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    // ========================================
    // UFO SIGHTINGS
    // ========================================
    {
      id: 'mystery-ufo',
      text: 'UFO Sightings 🛸',
      tip: '🛸 Two locations for alien spacecraft. Specific times required!',
      tip_detailed: `There are **two UFO encounters** in the game. Both require specific times and conditions.

🛸 *We are not alone in the Old West...*`,
      verified: true,
      subItems: [
        { 
          id: 'ufo-cult-shack', 
          text: "UFO 1: Hani's Bethel (Cult Shack)", 
          tip: '📍 Between N and O of "New Hanover" on map. Dead cultists inside.',
          tip_detailed: `📍 **Location:** Hani's Bethel, between N and O of "New Hanover" on the map (north of Emerald Ranch)

🔍 Find the shack full of dead cultists. Read the note about "KUHKOWABA."`,
          reward: 'Mysterious Note',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'ufo-cult-trigger', 
          text: 'UFO 1: Trigger at 2:00 AM', 
          tip: '⏰ Return to shack at 2:00 AM. Green glow, UFO hovers above!',
          tip_detailed: `⏰ **Return to the shack at exactly 2:00 AM**

The shack glows green. Look up—a UFO hovers above!`,
          verified: true
        },
        { 
          id: 'ufo-shann', 
          text: 'UFO 2: Mount Shann Peak', 
          tip: '📍 Peak of Mount Shann (NW of Strawberry). Go at night.',
          tip_detailed: `📍 **Location:** Very peak of Mount Shann, northwest of Strawberry

The cult note hints at this location. Go at night.`,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'ufo-shann-trigger', 
          text: 'UFO 2: Witness at Peak', 
          tip: '⏰ Stand at very top at night. A second, different UFO appears!',
          tip_detailed: `⏰ **At night, stand at the very top of Mount Shann**

A second, different UFO appears!

🛸 *Someone's watching.*`,
          verified: true
        }
      ]
    },
    // ========================================
    // GHOST ENCOUNTERS
    // ========================================
    {
      id: 'mystery-ghosts',
      text: 'Ghost Encounters 👻',
      tip: '👻 Supernatural apparitions with tragic stories.',
      tip_detailed: `The spirits of the dead linger in certain places. Their stories are tragic—listen carefully.`,
      verified: true,
      subItems: [
        { 
          id: 'ghost-agnes', 
          text: 'Ghost of Agnes Dowd ⭐', 
          tip: '📍 NW Bluewater Marsh, 9PM-3AM, foggy. Appears 16 TIMES!',
          tip_detailed: `**Agnes Dowd** was murdered and dumped in the swamp. Her ghost appears **16 times**, each telling more of her tragic story.

📍 **Location:** Northwest Bluewater Marsh
⏰ **Time:** 9PM-3AM, foggy weather helps
📖 **Grave:** Find her grave at Shady Belle

*She just wants someone to listen...*`,
          priority: true,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'ghost-train', 
          text: 'Ghost Train 🚂', 
          tip: '📍 Scarlett Meadows, S of Old Greenbank Mill. 3:00 AM. ONCE per playthrough!',
          tip_detailed: `A phantom train roars down the tracks—but there's no train there.

📍 **Location:** Scarlett Meadows, south of Old Greenbank Mill
⏰ **Time:** 3:00 AM exactly
🐴 Your horse will become anxious

⚠️ **Appears ONCE per playthrough!**`,
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    // ========================================
    // BIGFOOT / GIANTS
    // ========================================
    {
      id: 'mystery-bigfoot',
      text: 'Bigfoot & Giant Encounters 🦶',
      tip: '🦶 Evidence of giant creatures in the mountains.',
      tip_detailed: `Something large lives in these mountains. Or lived. The evidence is here if you look.`,
      verified: true,
      subItems: [
        { 
          id: 'bigfoot-skeleton', 
          text: 'Giant Skeleton', 
          tip: '📍 Cave at top of Mount Shann. Massive humanoid skeleton!',
          tip_detailed: `📍 **Location:** Cave at the top of Mount Shann, north of Strawberry

🦴 Inside the cave is a **massive humanoid skeleton**—far too large to be human.

*What was it? Who knows.*`,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'bigfoot-voice', 
          text: 'Talking Giant (Bigfoot)', 
          tip: '📍 Grizzlies East, E of Wapiti. REQUIRES: Study 30+ animal species first!',
          tip_detailed: `📍 **Location:** Grizzlies East, east of Wapiti Reservation

⚠️ **REQUIREMENT:** You must **study 30+ animal species** first!

📋 Follow the flock of birds from the river to a cave. A voice speaks to you—the last of his kind.

Return every 3 in-game days for more dialogue.

*"I am the last..."*`,
          region: 'ambarino',
          verified: true
        }
      ]
    },
    // ========================================
    // MARKO DRAGIC'S ROBOT
    // ========================================
    {
      id: 'mystery-robot',
      text: "Marko Dragic's Robot 🤖",
      tip: '🤖 Help an inventor create an electric automaton!',
      tip_detailed: `**Marko Dragic** is a mad scientist (based on Nikola Tesla) building a robot. One of the most memorable questlines in the game.

🏆 **Reward:** Electric Lantern (brighter than standard)`,
      reward: 'Electric Lantern',
      chapter: 4,
      verified: true,
      subItems: [
        { 
          id: 'robot-meet', 
          text: 'Part 1: Meet Marko', 
          tip: '📍 SW Saint Denis park. Chapter 4+. Help with RC boat demo.',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'robot-lab', 
          text: 'Part 2: Doverhill Lab', 
          tip: '📍 Doverhill (far NE map). Lightning experiment. Robot comes alive!',
          tip_detailed: `📍 **Location:** Doverhill, far northeast of the map

Wait 24+ in-game hours after Part 1. Help Marko capture lightning with rods.

⚡ The robot... **comes alive.**

🏆 **Reward:** Electric Lantern`,
          reward: 'Electric Lantern',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'robot-final', 
          text: 'Part 3: Find the Robot', 
          tip: '📍 Return to lab later → Marko dead. Robot on mountain near Colter.',
          tip_detailed: `Wait a few more in-game days, then return to Doverhill.

💀 Marko is dead. The robot has fled.

📍 Find the robot on a mountain ledge overlooking **Colter**. It says one word:

🤖 *"Papa..."*`,
          verified: true
        }
      ]
    },
    // ========================================
    // TIME TRAVELER (Francis Sinclair)
    // ========================================
    {
      id: 'mystery-time-traveler',
      text: 'Time Traveler (Francis Sinclair) ⏰',
      tip: '⏰ Man with modern clothes asks for rock carvings. Strange ending...',
      tip_detailed: `**Francis Sinclair** talks strangely, wears odd clothes, and has a distinctive birthmark. He wants you to find 10 rock carvings.

The carvings show impossible things: pyramids, Vikings, skyscrapers...

🏆 **Reward:** Old Brass Compass (Raven Claw Talisman ingredient)

*Something's wrong here. The ending reveals everything.*`,
      reward: 'Old Brass Compass',
      chapter: 2,
      verified: true,
      subItems: [
        { 
          id: 'sinclair-meet', 
          text: 'Meet Francis Sinclair', 
          tip: '📍 Small cabin NW of Strawberry. Note his modern speech + birthmark!',
          tip_detailed: `📍 **Location:** Small cabin northwest of Strawberry (Chapter 2+)

🔍 Pay attention to:
• His **modern speech patterns**
• His distinctive **birthmark**`,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'sinclair-carvings', 
          text: 'Find All 10 Rock Carvings', 
          tip: '📍 See Rock Carvings in Collectibles. Carvings show impossible things...',
          verified: true
        },
        { 
          id: 'sinclair-ending', 
          text: 'Return to Cabin ⭐', 
          tip: '⚠️ After all carvings → woman with baby has SAME BIRTHMARK. Time loop!',
          tip_detailed: `After finding all 10 carvings, return to the cabin.

⏰ Francis is gone. Instead, a **woman with a baby** answers the door. The baby has the **SAME BIRTHMARK** as Francis.

*Francis didn't just travel through time. He was born from it.*`,
          priority: true,
          verified: true
        }
      ]
    },
    // ========================================
    // OTHER MYSTERIES
    // ========================================
    {
      id: 'mystery-other',
      text: 'Other Secrets & Easter Eggs',
      tip: '🔮 Additional mysterious encounters.',
      tip_detailed: `The world is full of unexplained phenomena. Here are more secrets to discover.`,
      verified: true,
      subItems: [
        { 
          id: 'mystery-strange-man', 
          text: 'The Strange Man', 
          tip: '📍 Cabin near Bayall Edge. Mirror reflects RDR1 character. Painting completes over time.',
          tip_detailed: `📍 **Location:** Abandoned cabin near Bayall Edge (Bayou)

🪞 Look in the **mirror**—a mysterious figure reflects back. He's from RDR1.

🎨 The **painting** in the cabin completes itself over time as you return...

*"I know you."*`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'mystery-witch', 
          text: "Witch's Cauldron 🧙", 
          tip: '📍 N of Annesburg in swamp. Bubbling cauldron. Drink for strange effect!',
          tip_detailed: `📍 **Location:** North of Annesburg, in the swamp

🧙 Find the abandoned camp with a **bubbling cauldron**. You can drink from it...

⚠️ The effect is temporary but very strange.`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'mystery-devil', 
          text: "Devil's Cave 😈", 
          tip: '📍 Big Valley cave. Man claims to be the Devil. Creepy dialogue.',
          tip_detailed: `📍 **Location:** Cave in Big Valley

👹 A man inside claims to be **the Devil himself**. His dialogue is unsettling.

*Is he? Probably not. But then again...*`,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'mystery-feral', 
          text: 'Feral Man 🐺', 
          tip: '📍 Roanoke Ridge. Wild man living with wolf pack.',
          tip_detailed: `📍 **Location:** Roanoke Ridge

🐺 A man raised by wolves. He communicates with them, runs with them.

*Nature reclaimed him.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'mystery-pagan', 
          text: 'Pagan Ritual Site ⛧', 
          tip: '📍 Big Valley, West Elizabeth. Disturbing sacrifice scene.',
          tip_detailed: `📍 **Location:** Big Valley, West Elizabeth

⛧ A disturbing pagan ritual site with a sacrificial victim.

🌙 Visit at night for full atmosphere.

*Something dark happened here.*`,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'mystery-tiny-church', 
          text: 'Tiny Church ⛪', 
          tip: '📍 Bayou Nwa. Miniature uninhabited white church. Unexplained...',
          tip_detailed: `📍 **Location:** Bayou Nwa, Lemoyne

⛪ A perfectly miniature white church. Too small for people. No explanation.

*Why is it here? Nobody knows.*`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'mystery-viking', 
          text: 'Viking Tomb ⚔️', 
          tip: '📍 NW of Annesburg. Ancient Viking burial. Get Viking Hatchet + Helmet!',
          tip_detailed: `📍 **Location:** Northwest of Annesburg

⚔️ An ancient **Viking burial site** with artifacts:
• Viking Hatchet
• Viking Helmet
• Viking Comb

*Vikings in America, centuries before Columbus.*`,
          reward: 'Viking Hatchet + Helmet',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'mystery-meteor', 
          text: 'Meteor Crash Site ☄️', 
          tip: '📍 Roanoke Ridge. Burned cabin destroyed by meteor. Fragment inside!',
          tip_detailed: `📍 **Location:** Roanoke Ridge

☄️ A cabin destroyed by a **meteor impact**. Still smoking.

💎 Find the **meteor fragment** inside the ruins.

*Space rocks don't care about property values.*`,
          region: 'new-hanover',
          verified: true
        }
      ]
    }
  ]
};
