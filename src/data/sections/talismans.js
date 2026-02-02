/**
 * Talismans & Trinkets Section
 * Complete crafting recipes from Fence
 * ✅ VERIFIED: 2026-02-02 via gamesradar.com, fandom.com, gamerant.com
 */

export const talismansSection = {
  id: 'talismans',
  title: 'Talismans & Trinkets',
  icon: '🔮',
  defaultOpen: false,
  items: [
    // ========================================
    // TALISMANS (3 ingredients each, stronger bonuses)
    // ========================================
    {
      id: 'talisman-group',
      text: 'Talismans (3 ingredients, stronger effects)',
      tip: '🔮 Crafted at Fence. Legendary parts + jewelry + unique items.',
      tip_detailed: `**Talismans** are the heavy hitters—powerful charms that require **three ingredients** each: a legendary animal part, a piece of jewelry, and a unique collectible item.

Take your materials to the **Fence** (Saint Denis or other locations) and he'll craft 'em for you.

⚠️ *Some unique items are missable or quest-locked. Plan ahead.*`,
      verified: true,
      subItems: [
        { 
          id: 'talisman-alligator', 
          text: 'Alligator Tooth Talisman', 
          tip: '🐊 Legendary Alligator Tooth + Gold Bracelet + Handcuffs. -10% Dead Eye drain.',
          tip_detailed: `**Alligator Tooth Talisman** - slows your Dead Eye drain by 10%.

📦 **Materials:**
• **Legendary Alligator Tooth** - Hunt Legendary Alligator in Bayou Nwa (Chapter 4+)
• **Gold Jointed Bracelet** - Found or looted from enemies
• **Vintage Civil War Handcuffs** - Complete any cigarette card set

🎯 *Perfect for gunslingers who live in Dead Eye.*`,
          reward: '-10% Dead Eye drain',
          verified: true
        },
        { 
          id: 'talisman-bear', 
          text: 'Bear Claw Talisman', 
          tip: '🐻 Legendary Bear Claw + Silver Bracelet + Quartz Chunk. -10% Health drain.',
          tip_detailed: `**Bear Claw Talisman** - slows your Health Core drain by 10%.

📦 **Materials:**
• **Legendary Bear Claw** - From the Legendary Bear (early story mission "Exit Pursued by a Bruised Ego")
• **Silver Chain Bracelet** - Found or looted
• **Quartz Chunk** - Mail any dinosaur bone location to Deborah MacGuinness

💪 *Stay strong longer in firefights and harsh weather.*`,
          reward: '-10% Health Core drain',
          verified: true
        },
        { 
          id: 'talisman-bison', 
          text: 'Bison Horn Talisman', 
          tip: '🦬 White Bison Horn + Abalone Shell + Silver Earring. -10% Stamina drain.',
          tip_detailed: `**Bison Horn Talisman** - slows your Stamina Core drain by 10%.

📦 **Materials:**
• **Legendary White Bison Horn** - Hunt near Lake Isabella, Ambarino
• **Abalone Shell Fragment** -  Abandoned house north of Rhodes
• **Silver Earring** - Found or looted

🏃 *Run longer, swim farther, climb higher.*`,
          reward: '-10% Stamina Core drain',
          verified: true
        },
        { 
          id: 'talisman-boar', 
          text: 'Boar Tusk Talisman', 
          tip: '🐗 Legendary Boar Tusk + Gold Earring + Cobalt Wood. -10% Horse Core drain.',
          tip_detailed: `**Boar Tusk Talisman** - slows your horse's core drain by 10%.

📦 **Materials:**
• **Legendary Boar Tusk** - Hunt near Bluewater Marsh
• **Gold Earring** - Found or looted
• **Cobalt Petrified Wood** -  Cave near Lake Isabella

🐴 *Your horse stays stronger longer. Worth every ingredient.*`,
          reward: '-10% Horse Core drain',
          verified: true
        },
        { 
          id: 'talisman-raven', 
          text: 'Raven Claw Talisman ⭐', 
          tip: '🔧 Old Brass Compass ONLY. -20% Weapon degradation!',
          tip_detailed: `**Raven Claw Talisman** - reduces weapon degradation by **20%**. The best equipment preservation in the game.

📦 **Materials:**
• **Old Brass Compass** - Complete ALL 10 rock carvings (Geology for Beginners) and visit Francis Sinclair's cabin

⭐ **One ingredient only** but that ingredient requires serious work—finding all 10 rock carvings across the map.

🔧 *Your weapons stay clean and deadly. No more constant oiling.*`,
          reward: '-20% Weapon degradation',
          priority: true,
          verified: true
        }
      ]
    },
    // ========================================
    // TRINKETS (1 ingredient each, simpler bonuses)
    // ========================================
    {
      id: 'trinket-group-hunt-first',
      text: 'Priority Trinkets (Hunt First!) ⭐',
      tip: '⭐ These legendary animals should be hunted ASAP.',
      tip_detailed: `These trinkets should be your **first hunts** after unlocking free roam. Their effects are game-changing for the rest of your playthrough.

🎯 Hunt the Legendary Buck immediately. Everything else can wait.`,
      verified: true,
      subItems: [
        { 
          id: 'trinket-buck', 
          text: 'Buck Antler Trinket ⭐', 
          tip: '🦌 Legendary Buck Antler. HIGHER QUALITY PELTS! HUNT FIRST!',
          tip_detailed: `**Buck Antler Trinket** - gives you a **chance to get one-star-higher quality pelts** when skinning animals.

 **Legendary Buck location:** West of Strawberry, Big Valley

⭐ **HUNT THIS FIRST.** Every pelt you skin for the rest of the game has a better chance of being perfect. This makes satchel crafting, camp upgrades, and trapper gear infinitely easier.

*The single most important trinket in the game. Bar none.*`,
          reward: 'Better pelts always',
          priority: true,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'trinket-fox', 
          text: 'Fox Claw Trinket', 
          tip: '🦊 Legendary Fox Claw. +5 seconds Eagle Eye duration.',
          tip_detailed: `**Fox Claw Trinket** - extends your Eagle Eye vision by 5 seconds.

 **Legendary Fox location:** Mattock Pond area, west of Rhodes

👁️ Great for tracking and hunting. More time to spot those hidden trails.

*A hunter's best friend.*`,
          reward: '+5s Eagle Eye',
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    {
      id: 'trinket-group-xp',
      text: 'XP Boost Trinkets',
      tip: '📈 Increase experience gain for core stats.',
      tip_detailed: `These trinkets speed up your stat progression. Good for mid-game when you're still building up Arthur's cores.

📈 *More XP means stronger cores faster.*`,
      verified: true,
      subItems: [
        { 
          id: 'trinket-moose', 
          text: 'Moose Antler Trinket', 
          tip: '🫎 Legendary Moose Antler. +10% Health XP gain.',
          tip_detailed: `**Moose Antler Trinket** - 10% more Health XP from all sources.

 **Legendary Moose location:** Roanoke Ridge, northeast of the map. ⚠️ Moose are RARE and skittish.

💪 *Health is the most important stat. Level it faster.*`,
          reward: '+10% Health XP',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'trinket-cougar', 
          text: 'Cougar Fang Trinket', 
          tip: '🦁 Legendary Cougar Fang. ⚠️ EPILOGUE ONLY. +10% Stamina XP.',
          tip_detailed: `**Cougar Fang Trinket** - 10% more Stamina XP from all sources.

 **Legendary Cougar location:** New Austin, near Tumbleweed

⚠️ **EPILOGUE ONLY** - Arthur cannot safely access New Austin.

🏃 *John can get this at the start of the epilogue.*`,
          reward: '+10% Stamina XP',
          chapter: 'epilogue',
          region: 'new-austin',
          verified: true
        },
        { 
          id: 'trinket-coyote', 
          text: 'Coyote Fang Trinket', 
          tip: '🐺 Legendary Coyote Fang. +10% Dead Eye XP gain.',
          tip_detailed: `**Coyote Fang Trinket** - 10% more Dead Eye XP from all sources.

 **Legendary Coyote location:** Scarlett Meadows, northwest of Rhodes

🎯 *Dead Eye wins gunfights. Level it faster.*`,
          reward: '+10% Dead Eye XP',
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    {
      id: 'trinket-group-utility',
      text: 'Utility Trinkets',
      tip: '🛠️ Various quality of life improvements.',
      tip_detailed: `These trinkets make daily outlaw life easier—more money, less maintenance, better gathering.

🛠️ *Convenience is worth hunting for.*`,
      verified: true,
      subItems: [
        { 
          id: 'trinket-beaver', 
          text: 'Beaver Tooth Trinket', 
          tip: '🦫 Legendary Beaver Tooth. -10% Weapon degradation.',
          tip_detailed: `**Beaver Tooth Trinket** - weapons degrade 10% slower.

 **Legendary Beaver location:** Elysian Pool area, west of Van Horn

🔧 *Clean guns are accurate guns. Spend less time at the gunsmith.*`,
          reward: '-10% Weapon wear',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'trinket-elk', 
          text: 'Elk Antler Trinket', 
          tip: '🦌 Legendary Elk Antler. +10% looted cash value!',
          tip_detailed: `**Elk Antler Trinket** - every corpse you loot gives 10% more cash.

 **Legendary Elk location:** East of Bacchus Station, Ambarino

💰 *Over a full playthrough, this adds up to serious money.*`,
          reward: '+10% looted cash',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'trinket-ram', 
          text: 'Ram Horn Trinket', 
          tip: '🐏 Legendary Bighorn Ram Horn. 2x herb yield!',
          tip_detailed: `**Ram Horn Trinket** - double yield from thyme, oregano, and wild mint.

 **Legendary Ram location:** Cattail Pond area, Grizzlies West

🌿 *These herbs are used in special recipes. Double is always better.*`,
          reward: '2x herb yield',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'trinket-wolf', 
          text: 'Wolf Heart Trinket', 
          tip: '🐺 Legendary Wolf Heart. 2x alcohol resistance.',
          tip_detailed: `**Wolf Heart Trinket** - double your alcohol tolerance.

 **Legendary Wolf location:** Cotorra Springs, Ambarino

🍺 *Drink twice as much before getting sloppy. Perfect for saloon nights.*`,
          reward: '2x alcohol tolerance',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'trinket-lion', 
          text: "Lion's Paw Trinket", 
          tip: "🦁 Lion's Paw from Margaret stranger mission. +10% Stamina XP.",
          tip_detailed: `**Lion's Paw Trinket** - 10% more Stamina XP.

 **Source:** Complete the stranger mission **"He's British, Of Course"** with the circus animals

🎪 *Help Margaret catch his "exotic animals" and claim this as a reward.*`,
          reward: '+10% Stamina XP',
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    {
      id: 'trinket-group-combat',
      text: 'Combat Trinkets',
      tip: '🔫 Combat-focused bonuses for fighters.',
      tip_detailed: `These trinkets are for the violent-minded—better combat performance when you need it most.

🔫 *When bullets fly, these make the difference.*`,
      verified: true,
      subItems: [
        { 
          id: 'trinket-panther', 
          text: "Panther's Eye Trinket ⭐", 
          tip: '🐆 Legendary Panther Eye. ⚠️ Requires Master Hunter 9! Dead Eye boost after kills.',
          tip_detailed: `**Panther's Eye Trinket** - for 3 seconds after a kill, Dead Eye drains 10% slower.

⚠️ **Requires Master Hunter Challenge Rank 9** to spawn the Legendary Panther

 **Location:** Shady Belle area, once challenge is complete

⭐ *Chain kills become devastating. Worth the challenge grind.*`,
          reward: 'Dead Eye extension',
          priority: true,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'trinket-bison-tatanka', 
          text: 'Tatanka Bison Horn Trinket', 
          tip: '🦬 Legendary Tatanka Bison Horn. ⚠️ EPILOGUE ONLY. +10% Melee resist.',
          tip_detailed: `**Tatanka Bison Horn Trinket** - 10% more resistance to melee damage.

 **Legendary Tatanka Bison location:** Hennigan's Stead, New Austin

⚠️ **EPILOGUE ONLY** - New Austin access required

🥊 *For the brawlers who prefer fists to guns.*`,
          reward: '+10% Melee resist',
          chapter: 'epilogue',
          region: 'new-austin',
          verified: true
        }
      ]
    },
    {
      id: 'trinket-group-epilogue',
      text: 'Epilogue-Only Trinkets',
      tip: '⚠️ New Austin access required (Epilogue only).',
      tip_detailed: `These trinkets require access to **New Austin**, which is only safe during the Epilogue when playing as John.

⚠️ *Arthur can technically glitch there, but these are designed for John's journey.*`,
      verified: true,
      subItems: [
        { 
          id: 'trinket-pronghorn', 
          text: 'Pronghorn Horn Trinket', 
          tip: '🦌 Legendary Pronghorn Horn. Carcasses NEVER rot!',
          tip_detailed: `**Pronghorn Horn Trinket** - carcasses stored on your horse **never rot**.

 **Legendary Pronghorn location:** Rio Del Lobo, New Austin (Epilogue)

🏆 *Hunt at your leisure. No more rushing to the trapper with a rotting carcass.*`,
          reward: 'No carcass rot',
          chapter: 'epilogue',
          region: 'new-austin',
          verified: true
        }
      ]
    },
    // ========================================
    // UNIQUE ITEMS NEEDED (Checklist)
    // ========================================
    {
      id: 'unique-items',
      text: 'Unique Crafting Items (Locations)',
      tip: ' Rare items needed for talisman crafting.',
      tip_detailed: `Some talismans require **unique collectible items** that aren't just looted from enemies. You gotta find these specific pieces.

 *Most are quest rewards or hidden in specific locations. Plan ahead.*`,
      verified: true,
      subItems: [
        { 
          id: 'item-quartz', 
          text: 'Quartz Chunk', 
          tip: '🦴 Mail ANY dinosaur bone to Deborah MacGuinness.',
          tip_detailed: `**Quartz Chunk** - reward for mailing your first dinosaur bone location.

 Find any **dinosaur bone** (they're scattered across the map) and mail its location to **Deborah MacGuinness** as part of the "A Test of Faith" mission.

*One bone is enough. You'll get the Quartz Chunk by mail.*`,
          verified: true
        },
        { 
          id: 'item-abalone', 
          text: 'Abalone Shell Fragment', 
          tip: '🏚️ Abandoned house north of Rhodes. On a shelf inside.',
          tip_detailed: `**Abalone Shell Fragment** - found in an abandoned house.

 **Location:** North of Rhodes, in an old farmhouse. Look on the **shelf inside**.

*Free pickup. Just know where to look.*`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'item-cobalt', 
          text: 'Cobalt Petrified Wood', 
          tip: '🗻 Cave near Lake Isabella. Chest inside.',
          tip_detailed: `**Cobalt Petrified Wood** - found in a cave.

 **Location:** Near Lake Isabella, Ambarino. Find the cave entrance and look for a **chest inside**.

❄️ *Bring warm clothes. It's freezing up there.*`,
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'item-handcuffs', 
          text: 'Vintage Civil War Handcuffs', 
          tip: '🃏 Complete ANY cigarette card set and mail to Ramsbottom.',
          tip_detailed: `**Vintage Civil War Handcuffs** - reward for completing your first cigarette card collection.

📋 Complete **any of the 12 cigarette card sets** and mail them to **Phineas T. Ramsbottom** in Saint Denis.

🃏 *The easiest sets are bought from General Stores. Premium cigarettes have guaranteed cards.*`,
          verified: true
        },
        { 
          id: 'item-compass', 
          text: 'Old Brass Compass', 
          tip: '🗿 Complete ALL 10 rock carvings, then visit Francis Sinclair.',
          tip_detailed: `**Old Brass Compass** - the hardest unique item to get.

📋 **Requirements:**
• Find ALL 10 rock carvings across the map ("Geology for Beginners" mission)
• Visit **Francis Sinclair's cabin** to trigger the final mission

🗿 *This takes serious exploration. Use a guide if needed.*`,
          verified: true
        }
      ]
    }
  ]
};
