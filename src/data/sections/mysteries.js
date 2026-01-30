/**
 * Mysteries & Easter Eggs Section
 * Supernatural encounters, secret locations, and hidden stories
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
      tip: 'Find 3 gruesome clues to track down the killer. Reward: Unique encounter + item.',
      reward: 'Unique Confrontation',
      subItems: [
        { 
          id: 'serial-clue-1', 
          text: 'Clue 1: Wallace Station', 
          tip: '📍 SW of Valentine, S of Wallace Station. Rock with dismembered body. Map piece in severed head\'s mouth.'
        },
        { 
          id: 'serial-clue-2', 
          text: 'Clue 2: Valentine South', 
          tip: '📍 Between Citadel Rock & Caster\'s Ridge. Follow blood trail to body hanging under railroad.'
        },
        { 
          id: 'serial-clue-3', 
          text: 'Clue 3: Braithwaite Manor', 
          tip: '📍 East of Braithwaite Manor. Body in tree with "BEHOLD" written. Final map piece.'
        },
        { 
          id: 'serial-cabin', 
          text: 'Confront the Killer', 
          tip: '📍 Lucky\'s Cabin (S of Valentine). With all 3 pieces, "Stranger" icon appears. Go to basement.'
        }
      ]
    },
    // ========================================
    // VAMPIRE OF SAINT DENIS
    // ========================================
    {
      id: 'mystery-vampire',
      text: 'Vampire of Saint Denis',
      tip: 'Find 5 blood graffiti clues. Only appears at midnight! Reward: Ornate Dagger.',
      reward: 'Ornate Dagger',
      subItems: [
        { 
          id: 'vampire-graffiti-1', 
          text: 'Graffiti 1: Near Outdoor Market', 
          tip: 'Close to Trapper/Fence location in SE Saint Denis.'
        },
        { 
          id: 'vampire-graffiti-2', 
          text: 'Graffiti 2: Soup Kitchen', 
          tip: 'Across from Doyle\'s Tavern. Northern wall of red apartment, near "Soup Kitchen" gate.'
        },
        { 
          id: 'vampire-graffiti-3', 
          text: 'Graffiti 3: Alleyway', 
          tip: 'Between Gaillard\'s Shoes and antiques shop. Wall under balcony in courtyard.'
        },
        { 
          id: 'vampire-graffiti-4', 
          text: 'Graffiti 4: Church Area', 
          tip: 'Near St. Denis Cathedral southern wall.'
        },
        { 
          id: 'vampire-graffiti-5', 
          text: 'Graffiti 5: Back Streets', 
          tip: 'Behind the general store area. Inspect all to trigger encounter.'
        },
        { 
          id: 'vampire-encounter', 
          text: 'Kill the Vampire ⭐', 
          tip: '⚠️ Appears 12:00-1:00 AM ONLY! Alley south of general store near Doyle\'s Tavern. Skull icon on map after all graffiti found.'
        }
      ]
    },
    // ========================================
    // UFO SIGHTINGS
    // ========================================
    {
      id: 'mystery-ufo',
      text: 'UFO Sightings',
      tip: 'Two locations to witness alien spacecraft. Requires specific times!',
      subItems: [
        { 
          id: 'ufo-cult-shack', 
          text: "UFO 1: Hani's Bethel (Cult Shack)", 
          tip: '📍 Between N and O of "New Hanover" on map (N of Emerald Ranch). Find dead cultists + note about KUHKOWABA.',
          reward: 'Mysterious Note'
        },
        { 
          id: 'ufo-cult-trigger', 
          text: 'UFO 1: Trigger at 2:00 AM', 
          tip: '⚠️ Return to shack at 2:00 AM. Green glow, UFO hovers above!'
        },
        { 
          id: 'ufo-shann', 
          text: 'UFO 2: Mount Shann Peak', 
          tip: '📍 Peak of Mount Shann (NW of Strawberry). Clue in cult note. Go at night.'
        },
        { 
          id: 'ufo-shann-trigger', 
          text: 'UFO 2: Witness at Peak', 
          tip: '⚠️ Stand at very top of mountain at night. Second, different UFO appears!'
        }
      ]
    },
    // ========================================
    // GHOST ENCOUNTERS
    // ========================================
    {
      id: 'mystery-ghosts',
      text: 'Ghost Encounters',
      tip: 'Supernatural apparitions that tell tragic stories.',
      subItems: [
        { 
          id: 'ghost-agnes', 
          text: 'Ghost of Agnes Dowd ⭐', 
          tip: '📍 NW Bluewater Marsh, 9PM-3AM, foggy weather. Appears 16 TIMES telling her tragic story. Grave at Shady Belle.'
        },
        { 
          id: 'ghost-train', 
          text: 'Ghost Train', 
          tip: '📍 Scarlett Meadows, S of Old Greenbank Mill. Ride tracks at 3:00 AM. Horse gets anxious! Appears ONCE per playthrough.'
        }
      ]
    },
    // ========================================
    // BIGFOOT / GIANTS
    // ========================================
    {
      id: 'mystery-bigfoot',
      text: 'Bigfoot & Giant Encounters',
      tip: 'Evidence of giant creatures in the mountains.',
      subItems: [
        { 
          id: 'bigfoot-skeleton', 
          text: 'Giant Skeleton', 
          tip: '📍 Cave at top of Mount Shann (N of Strawberry). Massive humanoid skeleton. Point of Interest marked in journal.'
        },
        { 
          id: 'bigfoot-voice', 
          text: 'Talking Giant', 
          tip: '📍 Grizzlies East, E of Wapiti Reservation. REQUIREMENT: Study 30+ animal species first! Follow bird flock from river to cave. Return every 3 days for more dialogue.'
        }
      ]
    },
    // ========================================
    // MARKO DRAGIC'S ROBOT
    // ========================================
    {
      id: 'mystery-robot',
      text: "Marko Dragic's Robot (A Bright Bouncing Boy)",
      tip: 'Help an inventor create an electric automaton! Multi-part stranger mission.',
      reward: 'Electric Lantern',
      subItems: [
        { 
          id: 'robot-meet', 
          text: 'Part 1: Meet Marko', 
          tip: '📍 SW Saint Denis park. Chapter 4+. Help with RC boat demonstration.'
        },
        { 
          id: 'robot-lab', 
          text: 'Part 2: Doverhill Lab', 
          tip: '📍 Doverhill (far NE map). Wait 24+ in-game hours. Capture lightning with rods. Robot comes alive!'
        },
        { 
          id: 'robot-final', 
          text: 'Part 3: Find the Robot', 
          tip: '📍 Wait a few more days, return to find Marko dead. Robot fled to mountain ledge overlooking Colter. Says "Papa"...'
        }
      ]
    },
    // ========================================
    // TIME TRAVELER (Francis Sinclair)
    // ========================================
    {
      id: 'mystery-time-traveler',
      text: 'Time Traveler (Geology for Beginners)',
      tip: 'Man with modern clothes asks you to find rock carvings. Strange ending...',
      reward: 'Old Brass Compass',
      subItems: [
        { 
          id: 'sinclair-meet', 
          text: 'Meet Francis Sinclair', 
          tip: '📍 Small cabin NW of Strawberry. Chapter 2+. Note his modern speech and birthmark!'
        },
        { 
          id: 'sinclair-carvings', 
          text: 'Find All 10 Rock Carvings', 
          tip: 'See Collectibles section for locations. Carvings show pyramids, Vikings, skyscrapers...'
        },
        { 
          id: 'sinclair-ending', 
          text: 'Return to Cabin', 
          tip: '⚠️ After finding all carvings, return. Woman with baby who has SAME BIRTHMARK as Francis. Time loop?'
        }
      ]
    },
    // ========================================
    // OTHER MYSTERIES
    // ========================================
    {
      id: 'mystery-other',
      text: 'Other Secrets & Easter Eggs',
      tip: 'Additional mysterious encounters throughout the world.',
      subItems: [
        { 
          id: 'mystery-strange-man', 
          text: 'The Strange Man', 
          tip: '📍 Abandoned cabin near Bayall Edge. Mirror reflects mysterious figure from RDR1. Painting completes over time.'
        },
        { 
          id: 'mystery-witch', 
          text: "Witch's Cauldron", 
          tip: '📍 N of Annesburg in swamp. Find bubbling cauldron. Drink potion for strange effect!'
        },
        { 
          id: 'mystery-devil', 
          text: "Devil's Cave", 
          tip: '📍 Big Valley cave. Man claims to be the Devil. Creepy dialogue.'
        },
        { 
          id: 'mystery-feral', 
          text: 'Feral Man', 
          tip: '📍 Roanoke Ridge. Wild man living with wolf pack. Unique encounter.'
        },
        { 
          id: 'mystery-pagan', 
          text: 'Pagan Ritual Site', 
          tip: '📍 Big Valley, West Elizabeth. Disturbing sacrifice scene. Night recommended.'
        },
        { 
          id: 'mystery-tiny-church', 
          text: 'Tiny Church', 
          tip: '📍 Bayou Nwa, Lemoyne. Miniature uninhabited white church. Unexplained...'
        },
        { 
          id: 'mystery-viking', 
          text: 'Viking Tomb', 
          tip: '📍 NW of Annesburg. Ancient Viking burial site. Get Viking Hatchet + Helmet here.'
        },
        { 
          id: 'mystery-meteor', 
          text: 'Meteor Crash Site', 
          tip: '📍 Roanoke Ridge. Burned cabin destroyed by meteor. Find meteor fragment inside.'
        }
      ]
    }
  ]
};
