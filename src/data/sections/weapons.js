/**
 * Free Weapons Section
 * All unique/rare weapons with exact locations
 */

export const weaponsSection = {
  id: 'weapons',
  title: 'V. Weapons & Equipment',
  icon: '🔫',
  defaultOpen: false,
  items: [
    // ========================================
    // UNIQUE REVOLVERS & PISTOLS (Quest Rewards)
    // ========================================
    {
      id: 'weapons-unique-guns',
      text: 'Unique Revolvers & Pistols',
      tip: 'One-of-a-kind firearms from quests and special encounters.',
      subItems: [
        { 
          id: 'weapon-flaco-revolver', 
          text: "Flaco's Revolver", 
          tip: 'Gunslinger Quest. Kill Flaco Hernandez at Cairn Lake cabin. Ivory carved handle.'
        },
        { 
          id: 'weapon-granger-revolver', 
          text: "Granger's Revolver", 
          tip: 'Gunslinger Quest. Kill Emmet Granger at pig farm near Flatneck Station. Dark metal finish.'
        },
        { 
          id: 'weapon-midnight-pistol', 
          text: "Midnight's Pistol", 
          tip: 'Gunslinger Quest. Kill Billy Midnight on train from Rhodes. Engraved Mauser.'
        },
        { 
          id: 'weapon-calloway-revolver', 
          text: "Calloway's Revolver", 
          tip: 'Gunslinger Quest FINAL. Duel Jim Boy Calloway on riverboat. Engraved "Canis Canem Edit".'
        },
        { 
          id: 'weapon-algernon-revolver', 
          text: "Algernon's Revolver", 
          tip: 'Complete ALL 5 parts of "Duchesses and Other Animals" quest. Ornate pistol.'
        },
        { 
          id: 'weapon-otis-miller', 
          text: "Otis Miller's Revolver", 
          tip: '⚠️ EPILOGUE. Torn Treasure Map reward. Cave north of Cholla Springs, New Austin.',
          chapter: 'epilogue'
        },
        { 
          id: 'weapon-micah-revolver', 
          text: "Micah's Revolver", 
          tip: '⚠️ EPILOGUE 2. Return to Mount Hagen after credits. Loot from final location.',
          chapter: 'epilogue'
        }
      ]
    },
    // ========================================
    // FREE FIREARMS (Exploration)
    // ========================================
    {
      id: 'weapons-free-guns',
      text: 'Free Firearms (Exploration)',
      tip: 'Found in the world without purchase.',
      subItems: [
        { 
          id: 'weapon-schofield', 
          text: 'Schofield Revolver', 
          tip: "Valentine Doctor backroom robbery. Hit O'Driscoll side business. In chest."
        },
        { 
          id: 'weapon-lancaster', 
          text: 'Lancaster Repeater', 
          tip: 'Rhodes Gunsmith. Look in basement window for prisoner. Rob shop, rescue him.'
        },
        { 
          id: 'weapon-semi-auto', 
          text: 'Semi-Auto Shotgun', 
          tip: "Watson's Cabin (N of Strawberry). Kill hostile woman, basement has shotgun."
        },
        { 
          id: 'weapon-rare-shotgun', 
          text: 'Rare Shotgun ⭐', 
          tip: 'Hermit at Manito Glade (N of Annesburg). He attacks on sight - only ONE chance!',
          region: 'new-hanover'
        },
        { 
          id: 'weapon-pump-shotgun-free', 
          text: 'Pump Shotgun (Free)', 
          tip: 'Chez Porter cabin near Window Rock (N of Valentine). Weapon case in master bedroom.',
          region: 'ambarino'
        },
        { 
          id: 'weapon-rare-rolling-block', 
          text: 'Rare Rolling Block Rifle ⚠️', 
          tip: 'MISSABLE! "Magicians For Sport" mission (Ch3). Kill barn bounty hunter FAST, loot rifle.',
          missable: true,
          chapter: 3
        },
        { 
          id: 'weapon-worn-rolling-block', 
          text: 'Worn Rolling Block Rifle', 
          tip: 'O\'Driscoll camp west of Heartland Oil Fields. On dead body near campfire.',
          region: 'new-hanover'
        },
        { 
          id: 'weapon-pump-shotgun', 
          text: 'Pump Shotgun (Story)', 
          tip: 'Story mission "Paying a Social Call" (Ch2). Automatically obtained.'
        },
        { 
          id: 'weapon-bolt-action', 
          text: 'Bolt Action Rifle', 
          tip: '"The First Shall Be Last" mission. Kill LEFT bounty hunter quickly, loot rifle.',
          chapter: 2
        },
        { 
          id: 'weapon-varmint-rifle', 
          text: 'Varmint Rifle (Free)', 
          tip: 'Bayou near Lakay. Submerged corpse - use Eagle Eye to spot underwater. Near "U" in Bayou.',
          region: 'lemoyne'
        },
        { 
          id: 'weapon-m1899-pistol', 
          text: 'M1899 Pistol', 
          tip: 'Saint Denis gunsmith ONLY. Available after Chapter 4. Most modern pistol in game!',
          chapter: 4,
          region: 'lemoyne'
        },
        { 
          id: 'weapon-double-barrel', 
          text: 'Double-Barrel Shotgun', 
          tip: 'Reward for Hosea\'s debt collection tutorial mission (Ch2). Auto-obtained.',
          chapter: 2
        }
      ]
    },
    // ========================================
    // UNIQUE MELEE WEAPONS
    // ========================================
    {
      id: 'weapons-melee',
      text: 'Unique Melee Weapons',
      tip: 'Special hatchets, knives, and exotic melee weapons hidden in the world.',
      subItems: [
        { 
          id: 'weapon-viking-hatchet', 
          text: 'Viking Hatchet ⭐', 
          tip: 'Old Tomb NW of Annesburg. Enter cave, lodged in Viking skull. Norse engravings!'
        },
        { 
          id: 'weapon-ancient-tomahawk', 
          text: 'Ancient Tomahawk', 
          tip: 'Calumet Ravine near Wapiti Reservation. Stuck in wooden target on tree.'
        },
        { 
          id: 'weapon-hunter-hatchet', 
          text: 'Hunter Hatchet', 
          tip: 'Tree stump south of Window Rock, Grizzlies. Near small campsite.'
        },
        { 
          id: 'weapon-double-bit-hatchet', 
          text: 'Double Bit Hatchet', 
          tip: 'NW of Wallace Station. Tree stump near road, west of Dakota River.'
        },
        { 
          id: 'weapon-hewing-hatchet', 
          text: 'Hewing Hatchet', 
          tip: 'Flattened Cabin (crushed by boulder). South edge of Moonstone Pond.'
        },
        { 
          id: 'weapon-rusted-double-bit', 
          text: 'Rusted Double Bit Hatchet', 
          tip: 'Tree stump in Annesburg, near coal mine entrance.'
        },
        { 
          id: 'weapon-rusted-hunter', 
          text: 'Rusted Hunter Hatchet', 
          tip: "Martha's Swain area. Between Elysian Pool and O'Creagh's Run."
        },
        { 
          id: 'weapon-broken-pirate-sword', 
          text: 'Broken Pirate Sword ⭐', 
          tip: 'Shipwreck island south of Saint Denis bridge. On skeleton inside boat.'
        },
        { 
          id: 'weapon-civil-war-knife', 
          text: 'Civil War Knife', 
          tip: 'Fort Brennand ruins (SW of Van Horn). In basement with Civil War Hat.'
        },
        { 
          id: 'weapon-antler-knife', 
          text: 'Antler Knife', 
          tip: 'Near Hanging Dog Ranch. Find dead hunter attacked by grizzly. On his body.'
        },
        { 
          id: 'weapon-wide-blade-knife', 
          text: 'Wide Blade Knife', 
          tip: "Beryl's Dream Mine (W of Mount Shann). Deep inside, on corpse."
        },
        { 
          id: 'weapon-ornate-dagger', 
          text: 'Ornate Dagger ⭐', 
          tip: 'Kill the VAMPIRE in Saint Denis! Find 5 graffiti clues, then midnight encounter.'
        },
        { 
          id: 'weapon-jawbone-knife', 
          text: 'Jawbone Knife', 
          tip: 'Collect ALL 30 dinosaur bones. Reward from Deborah MacGuiness.'
        }
      ]
    },
    // ========================================
    // SPECIAL ITEMS
    // ========================================
    {
      id: 'weapons-special',
      text: 'Special Equipment',
      tip: 'Unique equipment and GTA Online crossover items.',
      subItems: [
        { 
          id: 'weapon-electric-lantern', 
          text: 'Electric Lantern', 
          tip: 'Complete "A Bright Bouncing Boy" Part 2 (Marko Dragic lab). Brighter than normal!'
        },
        { 
          id: 'weapon-ancient-arrowhead', 
          text: 'Ancient Arrowhead', 
          tip: 'Collect all 20 Dreamcatchers. Cave behind Elysian Pool waterfall. -Stamina bow drain.'
        },
        { 
          id: 'weapon-stone-hatchet', 
          text: 'Stone Hatchet (GTA Crossover)', 
          tip: 'Complete GTA Online treasure hunt + 25 kills = unlocks in Social Club.'
        },
        { 
          id: 'weapon-double-action-gta', 
          text: 'Double-Action Revolver (GTA)', 
          tip: 'Complete GTA Online treasure hunt + 50 headshots = gold skin in RDR2.'
        }
      ]
    }
  ]
};
