/**
 * Free Weapons Section
 * All unique/rare weapons with exact locations
 * ✅ VERIFIED: 2026-02-02 via redbull.com, powerpyx.com, fandom.com, ign.com
 */

export const weaponsSection = {
  id: 'weapons',
  title: 'Weapons & Equipment',
  icon: '🔫',
  defaultOpen: false,
  items: [
    // ========================================
    // UNIQUE REVOLVERS & PISTOLS (Quest Rewards)
    // ========================================
    {
      id: 'weapons-unique-guns',
      text: 'Unique Revolvers & Pistols',
      tip: '🔫 One-of-a-kind firearms from quests and special encounters.',
      tip_detailed: `Every legendary gunslinger left behind a **unique weapon**. Most come from the infamous Gunslinger quest—track them down, duel them, and take their iron.

🎯 Each has custom engravings and stats. Worth collecting for any completionist.

*Their names are carved in legend. Their guns are now yours.*`,
      verified: true,
      subItems: [
        { 
          id: 'weapon-flaco-revolver', 
          text: "Flaco's Revolver", 
          tip: ' Kill Flaco Hernandez at Cairn Lake cabin. Ivory carved handle.',
          tip_detailed: `**Flaco's Revolver** - Cattleman Revolver with ivory carved handle.

 **Quest:** "The Noblest of Men, and a Woman" (Gunslinger Quest)
 **Location:** Kill Flaco Hernandez at his cabin, Cairn Lake

⚔️ *Flaco talks big. His gun's nicer than he is.*`,
          reward: 'Unique Revolver',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'weapon-granger-revolver', 
          text: "Granger's Revolver", 
          tip: ' Kill Emmet Granger at pig farm near Flatneck Station.',
          tip_detailed: `**Granger's Revolver** - Cattleman Revolver with dark metal finish.

 **Quest:** "The Noblest of Men, and a Woman" (Gunslinger Quest)  
 **Location:** Kill Emmet Granger at the pig farm near Flatneck Station

🐷 *Emmet keeps pigs. And buries men in their pen.*`,
          reward: 'Unique Revolver',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'weapon-midnight-pistol', 
          text: "Midnight's Pistol", 
          tip: ' Kill Billy Midnight on train from Rhodes. Engraved Mauser.',
          tip_detailed: `**Midnight's Pistol** - Engraved Mauser Pistol.

 **Quest:** "The Noblest of Men, and a Woman" (Gunslinger Quest)
 **Location:** Confront Billy Midnight on the train departing from Rhodes

🚂 *Billy runs. Catch the train, catch the man, take his gun.*`,
          reward: 'Unique Mauser',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'weapon-calloway-revolver', 
          text: "Calloway's Revolver", 
          tip: ' Duel Jim Boy Calloway on riverboat. "Canis Canem Edit" engraving.',
          tip_detailed: `**Calloway's Revolver** - Double-Action Revolver engraved with "Canis Canem Edit" (Dog Eat Dog).

 **Quest:** "The Noblest of Men, and a Woman" FINALE
 **Location:** Duel Jim Boy Calloway on the riverboat

⚔️ *The biographer becomes the story. Calloway was the real legend all along.*`,
          reward: 'Unique Revolver',
          verified: true
        },
        { 
          id: 'weapon-algernon-revolver', 
          text: "Algernon's Revolver", 
          tip: ' Complete ALL 5 parts of Exotic Quest. Ornate pistol.',
          tip_detailed: `**Algernon's Revolver** - Ornate, fancy pistol.

 **Quest:** Complete ALL 5 PARTS of "Duchesses and Other Animals"
 **NPC:** Algernon Wasp (greenhouse north of Saint Denis)

🌺 *The grindiest reward in the game. 43 orchids, 47 bird plumes, 25 gator eggs... but this gun is worth it.*`,
          reward: 'Unique Pistol',
          region: 'lemoyne',
          chapter: 4,
          verified: true
        },
        { 
          id: 'weapon-otis-miller', 
          text: "Otis Miller's Revolver", 
          tip: '⚠️ EPILOGUE. Torn Treasure Map. Cave N of Cholla Springs.',
          tip_detailed: `**Otis Miller's Revolver** - Famous outlaw's custom piece.

 **Quest:** Torn Treasure Map reward
 **Location:** Cave north of Cholla Springs, New Austin

⚠️ **Epilogue only** - New Austin access required.`,
          reward: 'Unique Revolver',
          region: 'new-austin',
          chapter: 'epilogue',
          verified: true
        },
        { 
          id: 'weapon-micah-revolver', 
          text: "Micah's Revolver", 
          tip: '🔫 Obtainable from CH 1! "Old Friends" O\'Driscoll trick, CH 2 fire arrow, or Epilogue.',
          tip_detailed: `**Micah's Revolver** - the rat's unique engraved revolver. Obtainable **three ways**:

---

🏆 **Method 1 — Chapter 1: "Old Friends" Mission (EARLIEST)**
1. During the O'Driscoll ambush, when Dutch says to take the lead
2. Kill all enemies **except one** O'Driscoll
3. **Disarm him** by punching out his weapons until he's bare-fisted
4. Lead the unarmed O'Driscoll toward **Micah** — they'll fistfight
5. Micah drops his revolver — **grab it fast!**

⚠️ May disappear from inventory at Chapter 2 start, but stays in Compendium.

---

🏹 **Method 2 — Chapter 2: Strawberry Jail (Fire Arrow Trick)**
1. Go to **Strawberry** BEFORE starting **"Blessed are the Meek?"**
2. Cause a disturbance to draw deputies out
3. Sneak into **Sheriff's office back door**, go downstairs
4. Shoot a **Fire Arrow** through the cell bars near **Micah's left foot**
5. He drops — **pick up the revolver** through the gap

---

📖 **Method 3 — Epilogue 2 (Normal)**
Return to **Mount Hagen** after completing **"American Venom"**. Loot from the final location.

🐀 *Three chances to take from Micah. Don't waste 'em.*`,
          reward: 'Unique Revolver',
          chapter: 1,
          verified: true
        }
      ]
    },
    // ========================================
    // FREE FIREARMS (Exploration)
    // ========================================
    {
      id: 'weapons-free-guns',
      text: 'Free Firearms (Exploration)',
      tip: '🔫 Found in the world without purchase.',
      tip_detailed: `Why pay for guns when you can **find them** in the world? These firearms are free for the taking—if you know where to look.

🗺️ Most are hidden in cabins, robberies, or on corpses.

*The West is littered with free hardware. Help yourself.*`,
      verified: true,
      subItems: [
        { 
          id: 'weapon-schofield', 
          text: 'Schofield Revolver (Free)', 
          tip: " Valentine Doctor backroom robbery. O'Driscoll side business.",
          tip_detailed: `**Schofield Revolver** - one of the best revolvers, free.

 **Location:** Valentine Doctor's office. Rob the backroom (O'Driscoll side business). In the chest.

💰 *The doctor has a side hustle. Relieve him of his inventory.*`,
          reward: 'Schofield Revolver',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'weapon-lancaster', 
          text: 'Lancaster Repeater (Free)', 
          tip: ' Rhodes Gunsmith. Rescue prisoner in basement.',
          tip_detailed: `**Lancaster Repeater** - excellent repeater, free.

 **Location:** Rhodes Gunsmith. Look in the basement window—there's a prisoner. Rob the shop and rescue him. Take the Lancaster as thanks.

🔓 *The gunsmith's got dark secrets. Expose him, take his best rifle.*`,
          reward: 'Lancaster Repeater',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'weapon-semi-auto', 
          text: 'Semi-Auto Shotgun (Free)', 
          tip: " Watson's Cabin (N of Strawberry). Hostile woman, shotgun in basement.",
          tip_detailed: `**Semi-Auto Shotgun** - rapid-fire devastation.

 **Location:** Watson's Cabin, north of Strawberry. The old woman is hostile—kill her, then check the basement.

🏚️ *She's not as innocent as she looks. Neither is her basement.*`,
          reward: 'Semi-Auto Shotgun',
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'weapon-rare-shotgun', 
          text: 'Rare Shotgun ⭐', 
          tip: ' Manito Glade hermit (N of Annesburg). ONE CHANCE!',
          tip_detailed: `**Rare Shotgun** - unique double-barrel with engravings.

 **Location:** Hermit at Manito Glade (north of Annesburg). He attacks on sight.

⚠️ **ONE CHANCE** - if he dies without you looting the shotgun, it's gone!

🏚️ *The hermit's paranoid for a reason. He's got good hardware.*`,
          reward: 'Rare Shotgun',
          region: 'new-hanover',
          priority: true,
          verified: true
        },
        { 
          id: 'weapon-pump-shotgun-free', 
          text: 'Pump Shotgun (Free)', 
          tip: ' Chez Porter cabin near Window Rock (N of Valentine).',
          tip_detailed: `**Pump Shotgun** - reliable workhorse shotgun.

 **Location:** Chez Porter cabin near Window Rock, north of Valentine. In the weapon case in the master bedroom.

🏠 *Free pump action. No questions asked.*`,
          reward: 'Pump Shotgun',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'weapon-rare-rolling-block', 
          text: 'Rare Rolling Block Rifle ⚠️', 
          tip: '⚠️ MISSABLE! "Magicians For Sport" (Ch3). Kill barn bounty hunter FAST.',
          tip_detailed: `**Rare Rolling Block Rifle** - unique sniper rifle with special stats.

 **Mission:** "Magicians For Sport" (Chapter 3)
⚠️ **MISSABLE!** You must kill the bounty hunter in the barn **quickly** and loot his rifle before the mission ends.

🎯 *Miss this and it's gone forever.*`,
          reward: 'Rare Rolling Block',
          missable: true,
          chapter: 3,
          verified: true
        },
        { 
          id: 'weapon-worn-rolling-block', 
          text: 'Worn Rolling Block Rifle', 
          tip: " O'Driscoll camp west of Heartland Oil Fields. Dead body.",
          tip_detailed: `**Worn Rolling Block Rifle** - usable sniper rifle, free.

 **Location:** O'Driscoll camp west of Heartland Oil Fields. On a dead body near the campfire.

*Worn but functional. O'Driscolls don't need it anymore.*`,
          reward: 'Rolling Block Rifle',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'weapon-pump-shotgun', 
          text: 'Pump Shotgun (Story)', 
          tip: ' "Paying a Social Call" mission (Ch2). Auto-obtained.',
          tip_detailed: `**Pump Shotgun** - obtained automatically.

 **Mission:** "Paying a Social Call" (Chapter 2). You get this automatically during the mission.`,
          reward: 'Pump Shotgun',
          chapter: 2,
          verified: true
        },
        { 
          id: 'weapon-bolt-action', 
          text: 'Bolt Action Rifle (Free)', 
          tip: ' "The First Shall Be Last" mission. Kill LEFT bounty hunter, loot.',
          tip_detailed: `**Bolt Action Rifle** - powerful rifle, free.

 **Mission:** "The First Shall Be Last" (Chapter 2). Kill the bounty hunter on the LEFT quickly and loot his rifle.

🎯 *The bounty hunter's loss is your gain.*`,
          reward: 'Bolt Action Rifle',
          chapter: 2,
          verified: true
        },
        { 
          id: 'weapon-varmint-rifle', 
          text: 'Varmint Rifle (Free)', 
          tip: ' Bayou near Lakay. Submerged corpse—use Eagle Eye.',
          tip_detailed: `**Varmint Rifle** - essential for small game hunting.

 **Location:** Bayou near Lakay. There's a submerged corpse underwater—use Eagle Eye to spot it. Near the "U" in Bayou Nwa on the map.

🔍 *The swamp keeps secrets. Some are useful.*`,
          reward: 'Varmint Rifle',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'weapon-m1899-pistol', 
          text: 'M1899 Pistol', 
          tip: ' Saint Denis gunsmith ONLY. Chapter 4+. Most modern pistol!',
          tip_detailed: `**M1899 Pistol** - the most modern pistol in the game. Semi-automatic, high capacity.

 **Location:** Saint Denis gunsmith **ONLY** (not available elsewhere)
 **Available:** After Chapter 4

🔫 *The future of firearms. Available now in Saint Denis.*`,
          reward: 'M1899 Pistol',
          chapter: 4,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'weapon-double-barrel', 
          text: 'Double-Barrel Shotgun', 
          tip: ' Hosea debt collection tutorial (Ch2). Auto-obtained.',
          tip_detailed: `**Double-Barrel Shotgun** - classic two-shot devastation.

 **Mission:** Hosea's debt collection tutorial mission (Chapter 2). Obtained automatically.`,
          reward: 'Double-Barrel Shotgun',
          chapter: 2,
          verified: true
        }
      ]
    },
    // ========================================
    // UNIQUE MELEE WEAPONS
    // ========================================
    {
      id: 'weapons-melee',
      text: 'Unique Melee Weapons',
      tip: '🪓 Hatchets, knives, and exotic melee weapons.',
      tip_detailed: `**Unique melee weapons** are scattered across the world—ancient tomahawks, Viking hatchets, pirate swords, and stranger things.

🗡️ Each has its own story and style.

*Sometimes bullets aren't personal enough.*`,
      verified: true,
      subItems: [
        { 
          id: 'weapon-viking-hatchet', 
          text: 'Viking Hatchet ⭐', 
          tip: ' Old Tomb NW of Annesburg. Lodged in Viking skull!',
          tip_detailed: `**Viking Hatchet** - Norse engravings, centuries old.

 **Location:** Old Tomb northwest of Annesburg. Enter the cave—it's lodged in a Viking skull.

🪓 *Vikings in America? The evidence is in your hand.*`,
          reward: 'Viking Hatchet',
          region: 'new-hanover',
          priority: true,
          verified: true
        },
        { 
          id: 'weapon-ancient-tomahawk', 
          text: 'Ancient Tomahawk', 
          tip: ' Calumet Ravine near Wapiti. Stuck in wooden target.',
          tip_detailed: `**Ancient Tomahawk** - Native American throwing axe.

 **Location:** Calumet Ravine near Wapiti Reservation. Stuck in a wooden target on a tree.`,
          reward: 'Ancient Tomahawk',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'weapon-hunter-hatchet', 
          text: 'Hunter Hatchet', 
          tip: ' Tree stump south of Window Rock, Grizzlies.',
          tip_detailed: `**Hunter Hatchet** - practical wilderness tool.

 **Location:** Tree stump south of Window Rock, Grizzlies. Near a small campsite.`,
          reward: 'Hunter Hatchet',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'weapon-double-bit-hatchet', 
          text: 'Double Bit Hatchet', 
          tip: ' NW of Wallace Station. Tree stump near road.',
          tip_detailed: `**Double Bit Hatchet** - two-sided chopping power.

 **Location:** Northwest of Wallace Station. Tree stump near the road, west of Dakota River.`,
          reward: 'Double Bit Hatchet',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'weapon-hewing-hatchet', 
          text: 'Hewing Hatchet', 
          tip: ' Flattened Cabin (crushed by boulder). S of Moonstone Pond.',
          tip_detailed: `**Hewing Hatchet** - woodworking specialty tool.

 **Location:** Flattened Cabin (crushed by boulder). South edge of Moonstone Pond.

🪨 *The cabin's occupant had bad luck. The hatchet survived.*`,
          reward: 'Hewing Hatchet',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'weapon-rusted-double-bit', 
          text: 'Rusted Double Bit Hatchet', 
          tip: ' Tree stump in Annesburg, near coal mine.',
          tip_detailed: `**Rusted Double Bit Hatchet** - weathered but functional.

 **Location:** Tree stump in Annesburg, near the coal mine entrance.`,
          reward: 'Rusted Double Bit Hatchet',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'weapon-rusted-hunter', 
          text: 'Rusted Hunter Hatchet', 
          tip: " Martha's Swain area. Between Elysian Pool and O'Creagh's Run.",
          tip_detailed: `**Rusted Hunter Hatchet** - old but reliable.

 **Location:** Martha's Swain area, between Elysian Pool and O'Creagh's Run.`,
          reward: 'Rusted Hunter Hatchet',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'weapon-broken-pirate-sword', 
          text: 'Broken Pirate Sword ⭐', 
          tip: ' Shipwreck island south of Saint Denis. On skeleton in boat.',
          tip_detailed: `**Broken Pirate Sword** - a cutlass from the age of sail.

 **Location:** Shipwreck island south of Saint Denis bridge. On a skeleton inside the wrecked boat.

🏴‍☠️ *Pair it with the Pirate Hat for maximum theatrics.*`,
          reward: 'Broken Pirate Sword',
          region: 'lemoyne',
          priority: true,
          verified: true
        },
        { 
          id: 'weapon-civil-war-knife', 
          text: 'Civil War Knife', 
          tip: ' Fort Brennand ruins (SW of Van Horn). Basement with hat.',
          tip_detailed: `**Civil War Knife** - Union Army blade.

 **Location:** Fort Brennand ruins, southwest of Van Horn. In the basement alongside the Civil War Hat.

*Old wars leave old relics.*`,
          reward: 'Civil War Knife',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'weapon-antler-knife', 
          text: 'Antler Knife', 
          tip: ' Near Hanging Dog Ranch. Dead hunter attacked by grizzly.',
          tip_detailed: `**Antler Knife** - bone-handled hunting blade.

 **Location:** Near Hanging Dog Ranch. Find the dead hunter who was attacked by a grizzly. On his body.

🐻 *The bear won. The hunter's knife is yours.*`,
          reward: 'Antler Knife',
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'weapon-wide-blade-knife', 
          text: 'Wide Blade Knife', 
          tip: " Beryl's Dream Mine (W of Mount Shann). Deep inside, on corpse.",
          tip_detailed: `**Wide Blade Knife** - heavy chopping knife.

 **Location:** Beryl's Dream Mine, west of Mount Shann. Deep inside on a corpse.

⛏️ *The miner's last tool.*`,
          reward: 'Wide Blade Knife',
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'weapon-ornate-dagger', 
          text: 'Ornate Dagger ⭐', 
          tip: ' Kill the VAMPIRE in Saint Denis! 5 graffiti clues first.',
          tip_detailed: `**Ornate Dagger** - the vampire's ceremonial blade.

 **Location:** Kill the **Vampire** in Saint Denis!
1. Find 5 vampire graffiti clues around the city
2. Go to the dark alley at **midnight**
3. Kill him and take his dagger

🧛 *Yes, there's a vampire. No, I'm not joking.*`,
          reward: 'Ornate Dagger',
          region: 'lemoyne',
          priority: true,
          verified: true
        },
        { 
          id: 'weapon-jawbone-knife', 
          text: 'Jawbone Knife', 
          tip: ' Collect ALL 30 dinosaur bones. Reward from Deborah.',
          tip_detailed: `**Jawbone Knife** - made from actual dinosaur bone.

 **Quest:** "A Test of Faith" - collect ALL 30 dinosaur bones
 **Reward from:** Deborah MacGuinness

🦴 *Prehistoric predator. Modern weapon.*`,
          reward: 'Jawbone Knife',
          verified: true
        }
      ]
    },
    // ========================================
    // SPECIAL ITEMS
    // ========================================
    {
      id: 'weapons-special',
      text: 'Special Equipment',
      tip: '✨ Unique equipment and GTA crossover items.',
      tip_detailed: `**Special equipment** includes unique quest rewards and crossover items from GTA Online.`,
      verified: true,
      subItems: [
        { 
          id: 'weapon-electric-lantern', 
          text: 'Electric Lantern', 
          tip: ' Complete "A Bright Bouncing Boy" Part 2 (Marko Dragic).',
          tip_detailed: `**Electric Lantern** - brighter than the standard oil lantern.

 **Quest:** Complete "A Bright Bouncing Boy" Part 2 with Marko Dragic

💡 *The future of illumination. Marko was ahead of his time.*`,
          reward: 'Electric Lantern',
          verified: true
        },
        { 
          id: 'weapon-ancient-arrowhead', 
          text: 'Ancient Arrowhead', 
          tip: ' Collect all 20 Dreamcatchers. Cave behind Elysian Pool waterfall.',
          tip_detailed: `**Ancient Arrowhead** - reduces bow stamina drain.

 **Quest:** Collect all 20 Dreamcatchers
 **Location:** Cave behind Elysian Pool waterfall (map reveals after collection)

🏹 *Ancient power for modern hunting.*`,
          reward: 'Ancient Arrowhead',
          verified: true
        },
        { 
          id: 'weapon-stone-hatchet', 
          text: 'Stone Hatchet (GTA Crossover)', 
          tip: ' GTA Online treasure hunt + 25 kills = unlocks in Social Club.',
          tip_detailed: `**Stone Hatchet** - GTA Online crossover item.

 **How to unlock:** Complete the GTA Online treasure hunt, then get 25 kills with it. Unlocks automatically via Social Club.

🎮 *Your efforts in Los Santos pay off in the Old West.*`,
          reward: 'Stone Hatchet',
          verified: true
        },
        { 
          id: 'weapon-double-action-gta', 
          text: 'Double-Action Revolver (GTA)', 
          tip: ' GTA Online treasure hunt + 50 headshots = gold skin in RDR2.',
          tip_detailed: `**Double-Action Revolver (Gold)** - GTA Online crossover.

 **How to unlock:** Complete the GTA Online treasure hunt, get 50 headshots. Unlocks the gold skin version in RDR2 via Social Club.

🎮 *More GTA rewards for the dedicated.*`,
          reward: 'Gold Double-Action Revolver',
          verified: true
        }
      ]
    }
  ]
};
