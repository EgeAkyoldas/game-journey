/**
 * Treasure Hunts Section
 * Restructured with subItems for step-by-step tracking
 * Enhanced with cowboy storyteller narrative
 */

export const treasuresSection = {
  id: 'treasures',
  title: 'Treasure Hunts',
  icon: '💎',
  defaultOpen: true,
  items: [
    // ========================================
    // JACK HALL GANG TREASURE
    // ========================================
    {
      id: 'treasure-jack-hall',
      text: 'Jack Hall Gang Treasure',
      tip: '💰 Reward: 2 Gold Bars ($1000). Required for 100%.',
      tip_detailed: `The **Jack Hall Gang** buried their loot decades ago, and the maps still exist. Follow the trail through three locations to claim **2 Gold Bars**.

🎯 **Required for 100% completion.**

*Old money, waitin' for someone with enough gumption to find it.*`,
      reward: '2 Gold Bars ($1000)',
      verified: true,
      subItems: [
        { 
          id: 'jack-hall-1', 
          text: 'Map 1: Buy from Maximo', 
          tip: ' NW of Flatneck Station. Treasure hunter on ridge. $10 (or $5 if haggle).',
          tip_detailed: `**Maximo** is a treasure hunter camped on a ridge **northwest of Flatneck Station**, overlooking the river.

💰 He'll sell you the first map for **$10** (haggle to **$5**). Or... rob him. Your call.

*The man's a fool for sellin' treasure maps. But his loss is your gain.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'jack-hall-2', 
          text: "Map 2: Caliban's Seat", 
          tip: ' Rock formation south of Valentine. Climb from SE side.',
          tip_detailed: `**Caliban's Seat** is a rock formation **south of Valentine**. Tricky to climb.

 Approach from the **SE side**, follow the path along the cliff edge. Look for the map in a **hollow rock**—a hole in white granite.

*Height ain't for everyone. Watch your step.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'jack-hall-3', 
          text: 'Map 3: Cotorra Springs', 
          tip: ' West end of springs. Circle of rock formations. Pearl Necklace bonus.',
          tip_detailed: `**Cotorra Springs** - the geysers in Ambarino. Head to the **west end** where the rock formations stand in a circle.

 Search the **central rock pile**. Map's tucked in there, plus a **Pearl Necklace** bonus.

*Hot water, cold treasure. Nature's irony.*`,
          region: 'ambarino',
          reward: 'Pearl Necklace',
          verified: true
        },
        { 
          id: 'jack-hall-final', 
          text: "TREASURE: O'Creagh's Run Island", 
          tip: "🏆 Small island in lake. Rock on SE side. 2 GOLD BARS!",
          tip_detailed: `The treasure lies on a **small island in O'Creagh's Run** lake (where Hamish lives).

 Swim or boat out there. Search the **rock on the SE side** of the island.

💰 **2 GOLD BARS** - $1000 in your pocket!

*The Jack Hall Gang's long gone. Their gold lives on.*`,
          priority: true,
          reward: '2 Gold Bars ($1000)',
          region: 'new-hanover',
          verified: true
        }
      ]
    },
    // ========================================
    // HIGH STAKES TREASURE
    // ========================================
    {
      id: 'treasure-high-stakes',
      text: 'High Stakes Treasure',
      tip: '💰 Reward: 3 Gold Bars ($1500). Required for 100%.',
      tip_detailed: `The **High Stakes Treasure** lived up to its name—the original hunters literally died trying. Their loss is your gain.

💰 **3 Gold Bars** at the end.
🎯 **Required for 100% completion.**

*High stakes indeed. Lives were lost over this gold.*`,
      reward: '3 Gold Bars ($1500)',
      verified: true,
      subItems: [
        { 
          id: 'high-stakes-1', 
          text: 'Map 1: Save/Rob Stranger', 
          tip: ' Random encounter after Chapter 3. Man hanging from cliff near Cumberland Falls.',
          tip_detailed: `After completing **"The New South"** in Chapter 3, you may encounter a treasure hunter **hanging from a cliff** near Cumberland Falls.

📋 **Options:**
• **Save him** - He gives you the map as thanks
• **Let him fall** - Loot the map from his body

*Either way, that map's yours.*`,
          chapter: 3,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'high-stakes-2', 
          text: 'Map 2: Cumberland Falls', 
          tip: ' Behind the waterfall! Climb LEFT side rocks, enter cave.',
          tip_detailed: `**Cumberland Falls** hides a secret—a cave **behind the waterfall**.

 Climb the rocks on the **LEFT side**, make your way around to the **cave entrance**. Chest against the wall inside.

💧 *Classic treasure spot. Behind every waterfall, there's somethin' hidden.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'high-stakes-3', 
          text: 'Map 3: Barrow Lagoon', 
          tip: ' Frozen pond NE of Mount Hagen. Under fallen tree on east shore.',
          tip_detailed: `**Barrow Lagoon** is a frozen pond in the Ambarino mountains, **northeast of Mount Hagen**.

 Find the **fallen tree on the east shore**. Map's tucked underneath.

❄️ *Dress warm. Frostbite don't care about treasure.*`,
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'high-stakes-final', 
          text: 'TREASURE: Above Fort Wallace', 
          tip: '🏆 Cliff ABOVE fort on east side. DO NOT enter fort! 3 GOLD BARS!',
          tip_detailed: `The treasure is on the **cliff ABOVE Fort Wallace**, not inside it.

⚠️ **DO NOT enter the fort!** Soldiers will shoot on sight and you'll get a massive bounty.

 Approach from above, **east side cliff**. Jump down carefully to the ledge.

💰 **3 GOLD BARS** - $1500!

*The army guards nothin'. The treasure's right over their heads.*`,
          priority: true,
          reward: '3 Gold Bars ($1500)',
          region: 'new-hanover',
          verified: true
        }
      ]
    },
    // ========================================
    // POISONOUS TRAIL TREASURE
    // ========================================
    {
      id: 'treasure-poisonous-trail',
      text: 'Poisonous Trail Treasure',
      tip: '💰 Reward: 4 Gold Bars ($2000). HIGHEST PAYOUT! Required for 100%.',
      tip_detailed: `The **Poisonous Trail Treasure** is the biggest single payout in the treasure hunt game—**4 Gold Bars**, worth $2000.

🎯 **Required for 100% completion.**

*Whoever buried this didn't want it found. They almost succeeded.*`,
      reward: '4 Gold Bars ($2000)',
      priority: true,
      verified: true,
      subItems: [
        { 
          id: 'poison-1', 
          text: 'Map 1: Cairn Lake Cabin', 
          tip: ' Frozen lake cabin in Ambarino. Map pinned to wall inside.',
          tip_detailed: `**Cairn Lake** - a small frozen lake with a **cabin on the shore**.

 Go inside, find the map **pinned to the wall**.

❄️ *The cold preserved it well. Almost like it was waitin' for you.*`,
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'poison-2', 
          text: 'Map 2: Face Rock (Facu Rock)', 
          tip: ' West of Ringneck Creek. Giant face carved in rock. Map in "mouth".',
          tip_detailed: `**Face Rock** - a massive natural stone formation that looks like a face, **west of Ringneck Creek**.

 The map is hidden in the **"mouth" hole** at the base of the formation.

🗿 *Nature's got a sense of humor. So did whoever hid this map.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'poison-3', 
          text: 'Map 3: Elysian Pool Cave', 
          tip: ' Cave BEHIND Elysian Pool waterfall! BRING LANTERN. Dangerous bats.',
          tip_detailed: `**Elysian Pool** has a waterfall, and behind it is a **massive cave system**.

 Enter behind the waterfall. You'll need a **lantern**—it's pitch black. Watch out for **aggressive bats**.

⚠️ *This cave is creepy. Go deep enough and you'll find... things.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'poison-final', 
          text: 'TREASURE: Lighthouse Area', 
          tip: '🏆 North of lighthouse, south of Van Horn. Stone pile near coast. 4 GOLD BARS!',
          tip_detailed: `The treasure is **north of the Van Horn lighthouse**, along the coast.

 Look for a **stone pile** near the shore. Dig around and claim your prize.

💰 **4 GOLD BARS** - $2000! The biggest treasure haul in the game!

*Poison trail led to pure gold. Worth every step.*`,
          priority: true,
          reward: '4 Gold Bars ($2000)',
          region: 'new-hanover',
          verified: true
        }
      ]
    },
    // ========================================
    // LE TRESOR DES MORTS (Special/Ultimate Edition)
    // ========================================
    {
      id: 'treasure-le-tresor',
      text: 'Le Tresor Des Morts',
      tip: '⭐ Special/Ultimate Edition ONLY. 6 Gold Bars ($3000)!',
      tip_detailed: `**Le Tresor Des Morts** ("The Treasure of the Dead") is **exclusive to Special/Ultimate Edition** owners.

💰 **6 Gold Bars** - the single biggest treasure in the game!

⭐ *If you've got the fancy edition, don't miss this one.*`,
      reward: '6 Gold Bars ($3000)',
      verified: true,
      subItems: [
        { 
          id: 'le-tresor-1', 
          text: 'Map 1: Burned Settlement (Limpany)', 
          tip: ' Limpany ruins SW of Horseshoe Overlook. Jailhouse corpse has map.',
          tip_detailed: `**Limpany** - the burned-out town southwest of Horseshoe Overlook.

 Find the **jailhouse** (still standing). Inside is a **corpse with the map**.

🔥 *The dead keep their secrets. 'Til you come along.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'le-tresor-2', 
          text: 'Map 2: Saint Denis Docks', 
          tip: ' Cornwall Freight Station underground passage. Check wall near crate.',
          tip_detailed: `In **Saint Denis**, find the **Cornwall Freight Station**. There's an underground passage connecting the yard to the harbor.

 Check the **wall near a wooden crate** in the passage.

🏭 *Industrial secrets in an industrial city.*`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'le-tresor-final', 
          text: 'TREASURE: Saint Denis Cemetery', 
          tip: '🏆 Mausoleum with stained glass, west of central dome. Left wall. 6 GOLD BARS!',
          tip_detailed: `The treasure rests in the **Saint Denis Cemetery**.

 Find the **mausoleum with a stained glass window**, west of the central dome. Inspect the **left wall inside**.

💰 **6 GOLD BARS** - $3000! The richest treasure in the game!

*The dead gave up their gold. Spend it well.*`,
          priority: true,
          reward: '6 Gold Bars ($3000)',
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    // ========================================
    // ELEMENTAL TRAIL TREASURE
    // ========================================
    {
      id: 'treasure-elemental',
      text: 'Elemental Trail Treasure',
      tip: '🌿 Tree carvings lead to treasure. 2 Gold Bars ($1000).',
      tip_detailed: `The **Elemental Trail** is marked by **carvings on trees**—symbols representing Earth, Water, and Fire. Follow them to treasure.

💰 **2 Gold Bars** at the end.

*Someone marked this trail long ago. For those clever enough to follow.*`,
      reward: '2 Gold Bars ($1000)',
      verified: true,
      subItems: [
        { 
          id: 'elemental-1', 
          text: 'Tree 1: Window Rock Area', 
          tip: ' Near Window Rock. Tree with Earth symbol carving.',
          tip_detailed: `First tree is **near Window Rock**. Look for the **Earth symbol** carved into the bark.

🌿 *The first element. The foundation.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'elemental-2', 
          text: 'Tree 2: Elysian Pool Area', 
          tip: ' Near Elysian Pool. Tree with Water symbol.',
          tip_detailed: `Second tree is **near Elysian Pool**. The **Water symbol** carved here.

💧 *Where water flows, clues follow.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'elemental-3', 
          text: 'Tree 3: Fort Brennand Area', 
          tip: ' Near Fort Brennand. Tree with Fire symbol.',
          tip_detailed: `Third tree is **near Fort Brennand**. The **Fire symbol** completes the set.

🔥 *Earth, Water, Fire. Now combine them.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'elemental-final', 
          text: 'TREASURE: Mount Shann Sundial', 
          tip: '🏆 Summit of Mount Shann. Behind the sundial stone. 2 GOLD BARS!',
          tip_detailed: `The treasure waits at the **summit of Mount Shann**, behind the ancient **sundial stone structure**.

 It's a climb, but the view alone is worth it.

💰 **2 GOLD BARS** - $1000!

*The elements led you here. Claim your reward.*`,
          priority: true,
          reward: '2 Gold Bars ($1000)',
          region: 'west-elizabeth',
          verified: true
        }
      ]
    },
    // ========================================
    // LANDMARKS OF RICHES TREASURE
    // ========================================
    {
      id: 'treasure-landmarks-riches',
      text: 'Landmarks of Riches Treasure',
      chapter: 2,
      tip: '🏛️ Follow famous landmarks across the map. 6 Gold Bars ($3000)! Available from CH 2.',
      tip_detailed: `The **Landmarks of Riches** treasure hunt takes you on a tour of the frontier's most mysterious landmarks—an obelisk, a tiny church, a hobbit house, a Civil War battlefield, and finally the summit of Mount Shann.

💰 **6 Gold Bars** ($3000) — tied for the **richest treasure in the game** alongside Le Tresor Des Morts!

📌 Available from **Chapter 2** and relatively easy to complete. Originally a PC exclusive, now available on all platforms.

*The land itself holds the clues. Read the stones, follow the trail, claim the gold.*`,
      reward: '6 Gold Bars ($3000)',
      priority: true,
      verified: true,
      subItems: [
        { 
          id: 'landmarks-1', 
          text: 'Map 1: The Obelisk', 
          tip: '🏛️ NW of Strawberry, past Owanjila Lake. Check plaque on back of obelisk.',
          tip_detailed: `The first map is found at the **Obelisk** point of interest in West Elizabeth.

📍 Located **northwest of Strawberry**, past **Owanjila Lake**. It's a tall stone pillar standing alone on a ridge.

 Walk around to the **back of the obelisk** and inspect the **plaque**. The first map is etched right there.

*An ancient marker in the wilderness. Someone went to great lengths to leave this behind.*`,
          chapter: 2,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'landmarks-2', 
          text: 'Map 2: Tiny Church (Lakay)', 
          tip: '⛪ Miniature church in Lakay, north of Saint Denis. Climb roof, check bell tower.',
          tip_detailed: `The first map's clue leads you to the **Tiny Church** in **Lakay**, just north of Saint Denis in the swamps of Lemoyne.

 It's a remarkably small building. **Climb onto the roof** and search the **miniature bell tower** at the top.

⚠️ **Watch out for American Alligators** in the surrounding area—they're everywhere in this swamp.

*A church fit for mice, hidin' a map fit for kings.*`,
          chapter: 2,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'landmarks-3', 
          text: 'Map 3: Mysterious Hill Home', 
          tip: '🏠 "Hobbit house" NE of Fort Wallace/Bacchus Station. Check broken window on right side.',
          tip_detailed: `The second map depicts a **turtle with a broken shell**, pointing to the **Mysterious Hill Home**—a bizarre hobbit-like dwelling built into a hillside.

📍 Located on a mountain **northeast of Fort Wallace** and **Bacchus Station**.

 Look for a **broken window on the right-hand side** of the building (above a turtle symbol carved into the wall). Search inside to find the third map.

*Whoever built this place had secrets. And terrible taste in architecture.*`,
          chapter: 2,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'landmarks-4', 
          text: 'Map 4: Bolger Glade Battlefield', 
          tip: '⚔️ Civil War site south of Rhodes, east of Braithwaite Manor. Tree stump on rock near trenches.',
          tip_detailed: `The third map leads to **Bolger Glade**, an old Civil War battlefield in the **Scarlett Meadows** region of Lemoyne.

📍 Located **south of Rhodes** and **east of Braithwaite Manor**.

 Search for an **old tree stump sitting on top of a rock**, surrounded by trenches and near a **broken cannon**. The final map is hidden within the stump.

*Blood was spilled here long ago. But the treasure endured.*`,
          chapter: 2,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'landmarks-final', 
          text: 'TREASURE: Mount Shann Sundial', 
          tip: '🏆 Summit of Mount Shann, north of Strawberry. Under rock at base of sundial. 6 GOLD BARS!',
          tip_detailed: `The final clue leads to the **sundial atop Mount Shann**, just north of Strawberry and northeast of Owanjila Lake.

 Make your way to the **highest peak**. The ancient sundial stands there, overlooking the entire frontier.

 Search **under a rock at the base of the sundial**. Your reward awaits.

💰 **6 GOLD BARS** — $3000! Tied for the richest treasure in the entire game!

*From obelisk to sundial, landmark to landmark. The land guided you true. Now you're $3000 richer.*`,
          priority: true,
          reward: '6 Gold Bars ($3000)',
          chapter: 2,
          region: 'west-elizabeth',
          verified: true
        }
      ]
    },
    // ========================================
    // MENDED TREASURE MAP
    // ========================================
    {
      id: 'treasure-mended',
      text: 'Torn (Mended) Treasure Map',
      tip: "🗺️ Two hermits have map halves. Reward: Otis Miller's Revolver!",
      tip_detailed: `The **Mended Treasure Map** is torn in two—each half held by a different hermit. Both are hostile.

🔫 **Reward:** The legendary **Otis Miller's Revolver**!

*Two crazy hermits, one legendary gun.*`,
      reward: "Otis Miller's Revolver",
      verified: true,
      subItems: [
        { 
          id: 'mended-1', 
          text: 'Map Half 1: Hermit Cabin (Manito Glade)', 
          tip: ' North of Annesburg. Aggressive hermit with shotgun!',
          tip_detailed: `First hermit lives in **Manito Glade**, north of Annesburg.

⚠️ **HOSTILE** - He's got a shotgun and ain't shy about usin' it. Check the **drawer inside** after dealing with him.

🏚️ *Some folks just want to be left alone. Too bad for him.*`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'mended-2', 
          text: 'Map Half 2: Hermit Woman Cabin', 
          tip: ' NW West Elizabeth. Follow Little Creek River. Another hostile hermit.',
          tip_detailed: `Second hermit is a woman, equally unfriendly. Her cabin is **northwest of West Elizabeth**, follow Little Creek River.

⚠️ **HOSTILE** - Same deal. Take what you need.

🏚️ *What is it with hermits and treasure maps?*`,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'mended-final', 
          text: 'TREASURE: New Austin (Epilogue)', 
          tip: "🏆 ⚠️ EPILOGUE ONLY. Cholla Springs. Otis Miller's Revolver + bonus!",
          tip_detailed: `The treasure is in **Cholla Springs, New Austin**.

⚠️ **EPILOGUE ONLY** - Arthur can't safely access this area.

🔫 **Reward:** **Otis Miller's Revolver** - a unique weapon with history! Plus some... *interesting* bonus photos.

*The legendary outlaw's gun is yours. Live up to the name.*`,
          priority: true,
          reward: "Otis Miller's Revolver",
          chapter: 'epilogue',
          region: 'new-austin',
          verified: true
        }
      ]
    },
    // ========================================
    // STANDALONE TREASURES
    // ========================================
    {
      id: 'treasure-statues',
      text: 'Strange Statues Puzzle',
      tip: '🧩 Cave behind Window Rock. Press ONLY prime numbers (2,3,5,7). 3 Gold Bars!',
      tip_detailed: `In a **cave behind Window Rock**, there are 7 strange statues with buttons. It's a puzzle.

🧩 **Solution:** Press buttons on statues **2, 3, 5, and 7** ONLY. These are prime numbers.

💰 **3 Gold Bars** fall out of the central statue!

*Math class finally pays off.*`,
      reward: '3 Gold Bars ($1500)',
      priority: true,
      region: 'new-hanover',
      verified: true
    },
    {
      id: 'treasure-train-wreck',
      text: 'Train Wreck Gold Bar',
      tip: ' North of Cotorra Springs. Wrecked train in gorge. Lockbox in baggage car.',
      tip_detailed: `There's a **wrecked train** in a gorge **north of Cotorra Springs**. Crashed long ago, left to rot.

 Climb into the **baggage car** and find the lockbox.

💰 **1 Gold Bar** - $500!

*Someone else's tragedy, your windfall.*`,
      reward: '1 Gold Bar ($500)',
      region: 'ambarino',
      verified: true
    },
    {
      id: 'treasure-limpany',
      text: 'Limpany Sheriff Office Gold Bar',
      tip: " Burned town Limpany. Sheriff desk lockbox. May respawn!",
      tip_detailed: `**Limpany** - the burned ghost town southwest of Horseshoe Overlook.

 Find the **Sheriff's office** (still standing). Check the **desk lockbox**.

💰 **1 Gold Bar** - and rumor has it, **this one can respawn** after enough time passes!

*Easy money. Visit early and often.*`,
      reward: '1 Gold Bar ($500)',
      region: 'new-hanover',
      verified: true
    },
    {
      id: 'treasure-braithwaite',
      text: 'Braithwaite Manor Gold Bar',
      tip: ' After manor burns in Chapter 4. Search ruins carefully.',
      tip_detailed: `After the **Braithwaite Manor burns** in Chapter 4, return to the ruins.

 Search carefully through the rubble. There's a **lockbox hidden** in the debris.

💰 **1 Gold Bar** - spoils of war.

*The Braithwaites lost everything. Including this.*`,
      reward: '1 Gold Bar ($500)',
      chapter: 4,
      region: 'lemoyne',
      verified: true
    }
  ]
};
