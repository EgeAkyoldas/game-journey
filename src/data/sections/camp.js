/**
 * Camp Upgrades Section
 * All camp upgrade options + Pearson Crafting
 * Enhanced with cowboy storyteller narrative
 */

export const campSection = {
  id: 'camp',
  title: 'VII. Camp Upgrades',
  icon: '⛺',
  defaultOpen: false,
  items: [
    // ========================================
    // LEDGER UPGRADES (Money Only)
    // ========================================
    {
      id: 'camp-ledger',
      text: 'Ledger Upgrades ($ Only)',
      tip: '📋 Purchase from camp ledger near donation box.',
      tip_detailed: `The **camp ledger** is your ticket to a better life. Find it near the donation box—a big book where you can buy upgrades for the gang.

💰 **All prices are fixed.** No materials needed, just cold hard cash.

*Dutch says we're building paradise. These upgrades get us closer.*`,
      verified: true,
      subItems: [
        { 
          id: 'camp-lodging-arthur', 
          text: "Arthur's Lodging ($325) ⭐", 
          tip: '🗺️ Unlocks FAST TRAVEL from map near bed. ESSENTIAL!',
          tip_detailed: `**$325** upgrades Arthur's wagon and unlocks the **Fast Travel map** right behind his tent.

🗺️ Walk up to the map, pick a destination, and—boom—you're there. Saves hours of riding.

⭐ **ESSENTIAL.** This should be your first or second camp purchase.

*Ridin' everywhere's romantic until the fifth trip to Saint Denis this week.*`,
          priority: true,
          reward: 'Fast Travel',
          verified: true
        },
        { 
          id: 'camp-leather-tools', 
          text: 'Leather Working Tools ($225) ⭐', 
          tip: '🎒 Allows Pearson to craft satchels. REQUIRED for Legend of the East!',
          tip_detailed: `**$225** gets Pearson the **Leather Working Tools** he needs to craft satchels.

Without these tools, he can't make anything. WITH them, he can stitch up satchels that change the game.

⭐ **REQUIRED** for the Legend of the East Satchel—the one that holds 99 of everything.

*No tools, no satchels. Simple math.*`,
          priority: true,
          reward: 'Satchel Crafting',
          verified: true
        },
        { 
          id: 'camp-horse-station', 
          text: 'Horse Station ($300)', 
          tip: '🐴 Hitching post. Access stabled horses from camp.',
          tip_detailed: `**$300** builds a **Horse Station** at camp. Any horse you've stabled can now be summoned right here.

🐴 No more riding to Valentine to switch mounts. Your whole stable at your fingertips.

*For the man with many horses, this is a luxry turned necessity.*`,
          reward: 'Horse Access',
          verified: true
        },
        { 
          id: 'camp-lodging-dutch', 
          text: "Dutch's Lodging ($175)", 
          tip: "🎩 Upgrades Dutch's tent. Morale boost.",
          tip_detailed: `**$175** upgrades **Dutch's tent**—makes it fancier. Dutch appreciates the gesture, and camp morale improves.

🎩 It's mostly cosmetic, but a happy Dutch means a happy camp (for now).

*Keep the boss comfortable. Even if his plans are gettin' wild.*`,
          reward: 'Morale Boost',
          verified: true
        },
        { 
          id: 'camp-chicken-coop', 
          text: 'Chicken Coop ($175)', 
          tip: '🐔 Provides eggs for camp provisions.',
          tip_detailed: `**$175** builds a **Chicken Coop**. The hens provide fresh eggs, which keeps the camp's food supply healthy.

🐔 Not essential, but it helps if you're neglecting your hunting duties.

*Chickens don't ask for much. Feed 'em, get eggs. Fair trade.*`,
          reward: 'Eggs for Camp',
          verified: true
        },
        { 
          id: 'camp-boat', 
          text: 'Camp Boat/Canoe ($400)', 
          tip: '🚣 Available at Clemens Point only. Fishing boat.',
          tip_detailed: `**$400** gets a **canoe** for the camp—but only at **Clemens Point** (Chapter 3), where we're by the lake.

🚣 Use it for fishing trips or just peaceful rows across the water.

*The boat don't move to other camps. Enjoy it while you're lakeside.*`,
          reward: 'Fishing Boat',
          chapter: 3,
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    // ========================================
    // PEARSON SATCHELS (Leather Tools Required)
    // ========================================
    {
      id: 'camp-satchels',
      text: 'Pearson Satchels (Requires Leather Tools)',
      tip: '🎒 Craft all 7 to unlock Legend of the East Satchel - 99 capacity!',
      tip_detailed: `**Pearson** can craft satchels once you buy the Leather Working Tools. Each satchel expands your carrying capacity for different item types.

📋 **Craft all 7** to unlock the **Legend of the East Satchel**—the holy grail that holds 99 of EVERYTHING.

*Hunt perfect pelts. Deliver to Pearson. Reap the rewards.*`,
      reward: 'Legend of the East Satchel',
      verified: true,
      subItems: [
        { 
          id: 'camp-satchel-tonics', 
          text: 'Tonics Satchel', 
          tip: '📦 Perfect Deer + Buck Pelt. Holds more tonics.',
          tip_detailed: `**Tonics Satchel** - expands your tonic carrying capacity.

📦 **Materials:**
• 1x Perfect Deer Pelt
• 1x Perfect Buck Pelt

🎯 Both animals common in Big Valley and Heartlands.`,
          verified: true
        },
        { 
          id: 'camp-satchel-ingredients', 
          text: 'Ingredients Satchel', 
          tip: '📦 Perfect Deer + Badger + Squirrel. For cooking ingredients.',
          tip_detailed: `**Ingredients Satchel** - more space for herbs and cooking materials.

📦 **Materials:**
• 1x Perfect Deer Pelt
• 1x Perfect Badger Pelt (nocturnal)
• 1x Perfect Squirrel Pelt (use Varmint Rifle!)`,
          verified: true
        },
        { 
          id: 'camp-satchel-kit', 
          text: 'Kit Satchel', 
          tip: '📦 Perfect Elk + Panther. Holds more kits/pamphlets.',
          tip_detailed: `**Kit Satchel** - more space for crafting kits.

📦 **Materials:**
• 1x Perfect Elk Pelt (Ambarino mountains)
• 1x Perfect Panther Pelt (⚠️ Braithwaite Manor at night)

⚠️ **Panthers are deadly.** Save before hunting.`,
          verified: true
        },
        { 
          id: 'camp-satchel-provisions', 
          text: 'Provisions Satchel', 
          tip: '📦 Perfect Deer + Bison + Raccoon. More provisions.',
          tip_detailed: `**Provisions Satchel** - more space for food.

📦 **Materials:**
• 1x Perfect Deer Pelt
• 1x Perfect Bison Pelt (Great Plains, Epilogue-safe)
• 1x Perfect Raccoon Pelt (nocturnal, near rivers)`,
          verified: true
        },
        { 
          id: 'camp-satchel-materials', 
          text: 'Materials Satchel', 
          tip: '📦 Perfect Boar + Iguana. More crafting materials.',
          tip_detailed: `**Materials Satchel** - more space for crafting materials.

📦 **Materials:**
• 1x Perfect Boar Pelt (Bluewater Marsh)
• 1x Perfect Iguana Skin ( Flat Iron Lake islands)

🦎 Iguanas require a swim or boat trip.`,
          verified: true
        },
        { 
          id: 'camp-satchel-valuables', 
          text: 'Valuables Satchel', 
          tip: '📦 Perfect Deer + Beaver + Rabbit. More valuables.',
          tip_detailed: `**Valuables Satchel** - more space for jewelry and loot.

📦 **Materials:**
• 1x Perfect Deer Pelt
• 1x Perfect Beaver Pelt (Owanjila Dam)
• 1x Perfect Rabbit Pelt (everywhere)

💰 Easiest satchel after the basics.`,
          verified: true
        },
        { 
          id: 'camp-satchel-legend', 
          text: 'Legend of the East Satchel ⭐', 
          tip: '🏆 CRAFT ALL 7 ABOVE! Holds 99 of EVERYTHING!',
          tip_detailed: `**Legend of the East Satchel** - the ultimate reward.

📋 **Requirements:**
• ✅ Craft all 7 satchels above
• 1x Perfect Cougar Pelt (west of Strawberry)
• 1x Perfect Wolf Pelt (Ambarino)

🏆 Once complete, you can carry **99 of everything**. Inventory management becomes trivial.

*Worth every hour of hunting.*`,
          priority: true,
          reward: '99 Capacity for ALL',
          verified: true
        }
      ]
    },
    // ========================================
    // PEARSON CAMP ITEMS
    // ========================================
    {
      id: 'camp-pearson-items',
      text: 'Pearson Camp Crafting Items',
      tip: '🏕️ Decorative items from animal parts. Camp aesthetics.',
      tip_detailed: `Pearson can craft **decorative items** for camp using perfect pelts and carcasses. These make the camp look nice and boost morale.

🎨 **Purely cosmetic** but satisfying. Shows you're contributing beyond donations.

*A cozy camp is a happy camp.*`,
      verified: true,
      subItems: [
        { 
          id: 'pearson-sit-blanket', 
          text: 'Cow Hide Covered Chest', 
          tip: '📦 Perfect Cow Hide. Decorative storage.',
          tip_detailed: `Needs a **Perfect Cow Hide**. Find cattle at farms—use Rolling Block Rifle and be prepared for a bounty or bad honor.`,
          verified: true
        },
        { 
          id: 'pearson-scout-fire', 
          text: 'Bear Skin Rug', 
          tip: '📦 Perfect Bear Pelt. Near main fire.',
          tip_detailed: `Needs a **Perfect Bear Pelt**. Black bears in Big Valley, grizzlies in Ambarino. Rifle headshot only.`,
          verified: true
        },
        { 
          id: 'pearson-pronghorn-skull', 
          text: 'Pronghorn Skull', 
          tip: '📦 Perfect Pronghorn Carcass. Hanging decoration.',
          tip_detailed: `Needs a **Perfect Pronghorn Carcass** (whole animal). Common in the Heartlands. Small enough to carry on horseback.`,
          verified: true
        },
        { 
          id: 'pearson-boar-skin', 
          text: 'Boar Skin Table Cover', 
          tip: '📦 Perfect Boar Pelt. For Pearson area.',
          tip_detailed: `Needs a **Perfect Boar Pelt**. Wild boars in Bluewater Marsh and Scarlett Meadows.`,
          verified: true
        },
        { 
          id: 'pearson-ox-skin', 
          text: 'Ox Hide Floor Cover', 
          tip: '📦 Perfect Ox Hide. Ground cover.',
          tip_detailed: `Needs a **Perfect Ox Hide**. Oxen at farms—similar to cattle hunting. Expect bounty if witnessed.`,
          verified: true
        },
        { 
          id: 'pearson-cougar', 
          text: 'Cougar Skin Rug', 
          tip: '📦 Perfect Cougar Pelt. Arthur tent area.',
          tip_detailed: `Needs a **Perfect Cougar Pelt**. ⚠️ Cougars are THE most dangerous hunt. West of Strawberry, saves first.`,
          verified: true
        },
        { 
          id: 'pearson-wolf', 
          text: 'Wolf Skin Rug', 
          tip: '📦 Perfect Wolf Pelt. Dutch tent area.',
          tip_detailed: `Needs a **Perfect Wolf Pelt**. Wolves in Ambarino mountains, often in packs. Dead Eye headshots.`,
          verified: true
        },
        { 
          id: 'pearson-alligator', 
          text: 'Alligator Skin Item', 
          tip: '📦 Perfect Alligator Skin. Various decorations.',
          tip_detailed: `Needs a **Perfect Alligator Skin**. Gators in Lemoyne swamps are everywhere. Rifle to the head.`,
          verified: true
        }
      ]
    },
    // ========================================
    // DONATION REWARDS
    // ========================================
    {
      id: 'camp-donations',
      text: 'Donation Wagon Rewards',
      tip: '💰 Donate consistently to unlock supply wagons.',
      tip_detailed: `Keep donating money and items to the **camp donation box** over time. Eventually, supply wagons appear that provide free resources.

📊 These unlock based on cumulative donations, not single large amounts.

*The gang takes care of itself. If you take care of the gang.*`,
      verified: true,
      subItems: [
        { 
          id: 'camp-ammo', 
          text: 'Ammunition Wagon', 
          tip: '🔫 Donate consistently. Provides free ammo at camp.',
          tip_detailed: `Keep donating and eventually an **Ammunition Wagon** appears at camp. Free bullets, arrows, and throwing weapons.

🔫 Never run out of ammo again—at least when you're home.

*Stock up before every mission.*`,
          reward: 'Free Ammo',
          verified: true
        },
        { 
          id: 'camp-medical', 
          text: 'Medical Wagon', 
          tip: '💊 Donate consistently. Provides medical supplies.',
          tip_detailed: `Keep donating and eventually a **Medical Wagon** appears. Free health cures, tonics, and medicines.

💊 Saves money on doctor visits.

*Pearson ain't a surgeon, but the supplies help.*`,
          reward: 'Free Medicine',
          verified: true
        }
      ]
    }
  ]
};
