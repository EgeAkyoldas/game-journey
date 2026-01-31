/**
 * Legendary Animals Section
 * Grouped by region with detailed hunting tips
 * Enhanced with cowboy storyteller narrative
 */

export const legendaryAnimalsSection = {
  id: 'legendary-animals',
  title: 'IV. Legendary Animals',
  icon: '🦌',
  defaultOpen: false,
  items: [
    // ========================================
    // LAND ANIMALS BY REGION
    // ========================================
    {
      id: 'legendary-ambarino',
      text: 'Ambarino Region (Grizzlies)',
      tip: '❄️ Cold weather region. Some of the toughest legendary animals.',
      tip_detailed: `**Ambarino** - the frozen Grizzlies. Up here, the cold'll kill you as fast as the wildlife.

❄️ **Dress warm!** Cold weather gear is essential.

These legendaries are some of the toughest in the game. Come prepared with high-powered rifles and plenty of tonics.

*The mountains don't forgive mistakes.*`,
      reward: 'Trapper outfits + Fence trinkets',
      region: 'ambarino',
      verified: true,
      subItems: [
        { 
          id: 'leg-bear', 
          text: 'Legendary Bharati Grizzly Bear', 
          tip: "📍 North of O'Creagh's Run. AGGRESSIVE! Springfield or Rolling Block to head.",
          tip_detailed: `**Legendary Bharati Grizzly** - massive, aggressive, and will charge you on sight.

📍 **Location:** North of O'Creagh's Run, in the mountain area.

🔫 **Weapon:** Springfield Rifle or Rolling Block Rifle. **Aim for the head.** You might need multiple shots.

⚠️ *This bear has killed more players than any other legendary. Don't approach on horseback—he'll spook your horse and maul you.*`,
          reward: 'Bear Claw Talisman',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'leg-bison-white', 
          text: 'Legendary White Bison', 
          tip: '📍 Lake Isabella, NW near Mount Hagen. High-powered rifle headshot.',
          tip_detailed: `**Legendary White Bison** - a ghost in the snow. Pure white, hulking, and rare.

📍 **Location:** Northwest corner of Lake Isabella, near Mount Hagen.

🔫 **Weapon:** Rolling Block or Springfield Rifle. One clean headshot if you're steady.

❄️ *The White Bison is docile until provoked. Take your time, line up the shot.*`,
          reward: 'White Bison Hat',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'leg-wolf', 
          text: 'Legendary Wolf', 
          tip: '📍 Cotorra Springs geyser area. Best at dawn. Sniper first, then Dead Eye.',
          tip_detailed: `**Legendary Wolf** - he roams the geyser fields of Cotorra Springs. Cunning and fast.

📍 **Location:** Cotorra Springs area, among the geysers.

🎯 **Strategy:** Best hunted at **dawn**. Snipe him from distance first, then use Dead Eye to finish when he runs.

🐺 *Wolves run in packs. This one's different—he's alone. But don't underestimate him.*`,
          reward: 'Wolf Heart Trinket',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'leg-ram', 
          text: 'Legendary Bighorn Ram', 
          tip: '📍 East of Cattail Pond, near Valentine. Bow or rifle headshot. Cover scent helps.',
          tip_detailed: `**Legendary Bighorn Ram** - massive curled horns, skittish temperament.

📍 **Location:** East of Cattail Pond, in the hills near Valentine.

🏹 **Weapon:** Bow or rifle, headshot. Use **Cover Scent Lotion** to get close.

🐏 *Rams spook easy. Stay downwind and move slow.*`,
          reward: 'Ram Horn Trinket',
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'leg-elk', 
          text: 'Legendary Elk', 
          tip: '📍 East of Bacchus Station, Cumberland Forest. Springfield or bow to vitals.',
          tip_detailed: `**Legendary Elk** - majestic antlers, cautious nature.

📍 **Location:** East of Bacchus Station, Cumberland Forest.

🔫 **Weapon:** Springfield Rifle or bow. Aim for heart/lungs.

🦌 *The Elk is peaceful unless threatened. Make your first shot count.*`,
          reward: 'Elk Antler Trinket',
          region: 'ambarino',
          verified: true
        }
      ]
    },
    {
      id: 'legendary-new-hanover',
      text: 'New Hanover Region',
      tip: '📍 Central map area. Accessible early in story.',
      tip_detailed: `**New Hanover** is your backyard early in the game—familiar territory, reasonable danger levels.

📍 Hunt these legendaries as soon as Chapter 2 opens up free roam.

*Start here. Build your confidence before tackling the mountains.*`,
      region: 'new-hanover',
      verified: true,
      subItems: [
        { 
          id: 'leg-buck', 
          text: 'Legendary Buck ⭐', 
          tip: '📍 NW of Strawberry, Black Bone Forest. HUNT FIRST for +pelt quality!',
          tip_detailed: `**Legendary Buck** - the single most important legendary animal in the game.

📍 **Location:** Northwest of Strawberry, Black Bone Forest.

⭐ **HUNT THIS FIRST!** The **Buck Antler Trinket** gives you a chance for **higher quality pelts** on every animal you skin.

🎯 **Weapon:** Rifle or bow, headshot.

*Everything else becomes easier once you have this trinket. FIRST priority.*`,
          reward: 'Buck Antler Trinket',
          priority: true,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'leg-coyote', 
          text: 'Legendary Coyote', 
          tip: '📍 Scarlett Meadows near Dewberry Creek, NW of Rhodes. Fast - one-shot with Springfield.',
          tip_detailed: `**Legendary Coyote** - small, fast, elusive.

📍 **Location:** Scarlett Meadows, near Dewberry Creek, northwest of Rhodes.

🔫 **Weapon:** Springfield Rifle for one-shot capability. Coyotes are fast—don't miss.

🐺 *Smaller than a wolf, quicker than your aim. Line it up before you fire.*`,
          reward: 'Coyote Fang Trinket',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'leg-fox', 
          text: 'Legendary Fox', 
          tip: '📍 North of Rhodes near Mattock Pond. Small target - Varmint Rifle or bow.',
          tip_detailed: `**Legendary Fox** - tiny target, clever escape artist.

📍 **Location:** North of Rhodes, near Mattock Pond.

🏹 **Weapon:** Varmint Rifle or bow. It's small—precision matters.

🦊 *The fox is wily. Don't expect him to sit still.*`,
          reward: 'Fox Claw Trinket',
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    {
      id: 'legendary-lemoyne',
      text: 'Lemoyne Region',
      tip: '🐊 Swamp and bayou area. Watch for gators!',
      tip_detailed: `**Lemoyne** - hot, humid, and full of things that want to eat you. The swamps hide some of the most dangerous legendaries.

🐊 Regular gators are everywhere. The legendary one is worse.

*Keep your shotgun loaded and your eyes peeled.*`,
      region: 'lemoyne',
      verified: true,
      subItems: [
        { 
          id: 'leg-boar', 
          text: 'Legendary Boar', 
          tip: '📍 Bluewater Marsh, north of Lagras. Springfield or poison arrows.',
          tip_detailed: `**Legendary Boar** - big, mean, and tusked.

📍 **Location:** Bluewater Marsh, north of Lagras.

🔫 **Weapon:** Springfield Rifle or poison arrows work well.

🐗 *Boars charge. Keep your distance and shoot straight.*`,
          reward: 'Boar Tusk Talisman',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'leg-beaver', 
          text: 'Legendary Beaver', 
          tip: '📍 Butcher Creek area, west of Van Horn. Albino beaver - Varmint Rifle one-shot.',
          tip_detailed: `**Legendary Beaver** - an albino specimen, white as snow.

📍 **Location:** Butcher Creek area, west of Van Horn.

🔫 **Weapon:** Varmint Rifle for clean one-shot.

🦫 *Beavers are harmless. Take your time.*`,
          reward: 'Beaver Tooth Trinket',
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'leg-alligator', 
          text: 'Legendary Bullgator', 
          tip: '📍 Lakay, Bayou Nwa. ⚠️ Chapter 4+ only. Rolling Block + shotgun backup!',
          tip_detailed: `**Legendary Bull Gator** - the monster of the swamp. Massive, ancient, and terrifying.

📍 **Location:** Lakay, Bayou Nwa.

⚠️ **Available only after Chapter 4.** The swamp won't spawn him earlier.

🔫 **Weapons:** Rolling Block Rifle for initial shots, **shotgun for backup** when he gets close. And he WILL get close.

🐊 *This gator's killed more men than malaria. Don't be another meal.*`,
          chapter: 4,
          reward: 'Alligator Tooth Talisman',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'leg-panther', 
          text: 'Legendary Giaguaro Panther ⭐', 
          tip: '📍 Bolger Glade, south of Braithwaite Manor. ⚠️ Requires Master Hunter 9!',
          tip_detailed: `**Legendary Giaguaro Panther** - the deadliest cat in the game. Pure black, lightning fast, and locked behind a challenge.

📍 **Location:** Bolger Glade, south of Braithwaite Manor.

⚠️ **REQUIRES Master Hunter Challenge Rank 9** to spawn. Complete the challenges first.

🔫 **Weapon:** Shotgun or rifle with Dead Eye. This cat will pounce before you see it.

⭐ *The panther's eye makes a powerful trinket. Worth the grind.*`,
          reward: "Panther's Eye Trinket",
          priority: true,
          region: 'lemoyne',
          verified: true
        }
      ]
    },
    {
      id: 'legendary-roanoke',
      text: 'Roanoke Ridge Region',
      tip: '🫎 Northeast woodland area. Rare spawn territory.',
      tip_detailed: `**Roanoke Ridge** is wild, dense, and home to the rarest legendary spawn in the game.

🫎 The Legendary Moose is notoriously difficult to find. Patience is required.

*The woods keep their secrets. You gotta wait 'em out.*`,
      region: 'new-hanover',
      verified: true,
      subItems: [
        { 
          id: 'leg-moose', 
          text: 'Legendary Moose', 
          tip: '📍 Near Brandywine Drop, NE corner. RARE SPAWN - camp nearby, sleep repeatedly.',
          tip_detailed: `**Legendary Moose** - the rarest legendary spawn in the game. Some players search for hours.

📍 **Location:** Near Brandywine Drop, northeastern corner of the map.

⚠️ **RARE SPAWN** - Set up camp nearby and **sleep repeatedly** to force respawns. May take multiple attempts.

🫎 *The moose is worth the wait. Its antler makes a powerful trinket.*`,
          reward: 'Moose Antler Trinket',
          region: 'new-hanover',
          verified: true
        }
      ]
    },
    {
      id: 'legendary-new-austin',
      text: 'New Austin (EPILOGUE ONLY) ⚠️',
      tip: '⚠️ These 3 animals can only be hunted in the Epilogue as John.',
      tip_detailed: `**New Austin** is locked until the Epilogue. Arthur cannot safely explore this region—law will hunt him relentlessly.

⚠️ **Wait for John.** These three legendaries are Epilogue content.

🏜️ *The desert waited a decade for you. It can wait a little longer.*`,
      chapter: 'epilogue',
      region: 'new-austin',
      verified: true,
      subItems: [
        { 
          id: 'leg-cougar', 
          text: 'Legendary Cougar', 
          tip: '📍 Gaptooth Ridge, west of Tumbleweed. DEADLY - Dead Eye + shotgun!',
          tip_detailed: `**Legendary Cougar** - fast, silent, lethal. The most dangerous predator in New Austin.

📍 **Location:** Gaptooth Ridge, west of Tumbleweed.

🔫 **Weapon:** Shotgun with Dead Eye. The cougar WILL pounce—be ready.

⚠️ *Cougars don't give second chances. Neither should you.*`,
          chapter: 'epilogue',
          reward: 'Cougar Fang Trinket',
          region: 'new-austin',
          verified: true
        },
        { 
          id: 'leg-pronghorn', 
          text: 'Legendary Pronghorn', 
          tip: '📍 Del Lobo Rock, SE of Fort Mercer. Fast runner - sniper essential.',
          tip_detailed: `**Legendary Pronghorn** - fastest legendary in the game. You won't catch it on horseback.

📍 **Location:** Del Lobo Rock, southeast of Fort Mercer.

🔫 **Weapon:** Sniper rifle is essential. One shot from distance.

🦌 *Don't chase. Snipe. It's the only way.*`,
          chapter: 'epilogue',
          reward: 'Pronghorn Horn Trinket',
          region: 'new-austin',
          verified: true
        },
        { 
          id: 'leg-bison-tatanka', 
          text: 'Legendary Tatanka Bison', 
          tip: "📍 Hennigan's Stead, SE of MacFarlane's Ranch. Docile but tough.",
          tip_detailed: `**Legendary Tatanka Bison** - massive, sturdy, and peaceful until you start shooting.

📍 **Location:** Hennigan's Stead, southeast of MacFarlane's Ranch.

🔫 **Weapon:** High-powered rifle. Multiple headshots may be needed.

🦬 *The Tatanka is a tank. Keep shooting.*`,
          chapter: 'epilogue',
          reward: 'Tatanka Bison Horn Trinket',
          region: 'new-austin',
          verified: true
        }
      ]
    },

    // ========================================
    // LEGENDARY FISH
    // ========================================
    {
      id: 'legendary-fish',
      text: '🐟 Legendary Fish (13 Total)',
      tip: '🎣 Start: Jeremy Gill at Flat Iron Lake. Buy Special Lures. Mail fish.',
      tip_detailed: `There are **13 Legendary Fish** scattered across the waters of the five states. Each requires a **Special Lure** from the bait shop.

📋 **How to start:**
1. Find **Jeremy Gill** at his cabin on Flat Iron Lake (east shore)
2. He gives you the **Legendary Fish Map**
3. Buy **Special Lures** (Lake, River, Swamp) from Lagras bait shop
4. Catch fish and **mail them to Jeremy** from any post office

🎣 *Patience, partner. Legendary fish don't come easy.*`,
      reward: 'Special Hat + Fish Map',
      verified: true,
      subItems: [
        { 
          id: 'fish-bluegill', 
          text: 'Bluegill (Flat Iron Lake)', 
          tip: '📍 Near Rhodes. Special Lake Lure.',
          tip_detailed: `**Legendary Bluegill** - found in **Flat Iron Lake** near Rhodes.

🎣 **Lure:** Special Lake Lure`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'fish-bass-large', 
          text: 'Largemouth Bass (San Luis River)', 
          tip: '📍 New Austin area. ⚠️ Epilogue. Special Lake Lure.',
          tip_detailed: `**Legendary Largemouth Bass** - found in the **San Luis River**, New Austin.

⚠️ **Epilogue only.**
🎣 **Lure:** Special Lake Lure`,
          chapter: 'epilogue',
          region: 'new-austin',
          verified: true
        },
        { 
          id: 'fish-bass-small', 
          text: 'Smallmouth Bass (Owanjila Lake)', 
          tip: '📍 Near Strawberry. Special Lake Lure.',
          tip_detailed: `**Legendary Smallmouth Bass** - found in **Owanjila Lake** near Strawberry.

🎣 **Lure:** Special Lake Lure`,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'fish-bass-rock', 
          text: 'Rock Bass (Aurora Basin)', 
          tip: '📍 Tall Trees area. Special Lake Lure.',
          tip_detailed: `**Legendary Rock Bass** - found in **Aurora Basin**, Tall Trees area.

🎣 **Lure:** Special Lake Lure`,
          region: 'west-elizabeth',
          verified: true
        },
        { 
          id: 'fish-bass-striped', 
          text: 'Striped Bass (San Luis River)', 
          tip: '📍 Rio Bravo, New Austin. ⚠️ Epilogue. Special River Lure.',
          tip_detailed: `**Legendary Striped Bass** - found in the **San Luis River** at Rio Bravo, New Austin.

⚠️ **Epilogue only.**
🎣 **Lure:** Special River Lure`,
          chapter: 'epilogue',
          region: 'new-austin',
          verified: true
        },
        { 
          id: 'fish-perch', 
          text: 'Perch (Elysian Pool)', 
          tip: '📍 Roanoke Ridge. Special Lake Lure.',
          tip_detailed: `**Legendary Perch** - found at **Elysian Pool**, Roanoke Ridge.

🎣 **Lure:** Special Lake Lure`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'fish-pickerel', 
          text: 'Chain Pickerel (Dakota River)', 
          tip: '📍 Near Valentine. Special River Lure.',
          tip_detailed: `**Legendary Chain Pickerel** - found in the **Dakota River** near Valentine.

🎣 **Lure:** Special River Lure`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'fish-muskie', 
          text: "Muskie (O'Creagh's Run)", 
          tip: "📍 Same lake as Hamish. Special Lake Lure.",
          tip_detailed: `**Legendary Muskie** - found at **O'Creagh's Run**, same lake where Hamish lives.

🎣 **Lure:** Special Lake Lure`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'fish-gar', 
          text: 'Longnose Gar (Lagras)', 
          tip: '📍 Bayou Nwa swamp. Special Swamp Lure.',
          tip_detailed: `**Legendary Longnose Gar** - found in the swamps near **Lagras**, Bayou Nwa.

🎣 **Lure:** Special Swamp Lure`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'fish-salmon', 
          text: 'Sockeye Salmon (Lake Isabella)', 
          tip: '📍 Far north, snowy. Special Lake Lure.',
          tip_detailed: `**Legendary Sockeye Salmon** - found at **Lake Isabella**, in the frozen north.

❄️ Dress warm!
🎣 **Lure:** Special Lake Lure`,
          region: 'ambarino',
          verified: true
        },
        { 
          id: 'fish-steelhead', 
          text: "Steelhead Trout (Willard's Rest)", 
          tip: "📍 Near Charlotte's cabin. Special River Lure.",
          tip_detailed: `**Legendary Steelhead Trout** - found at **Willard's Rest**, near Charlotte's cabin.

🎣 **Lure:** Special River Lure`,
          region: 'new-hanover',
          verified: true
        },
        { 
          id: 'fish-sturgeon', 
          text: 'Lake Sturgeon (Flat Iron Lake)', 
          tip: '📍 South of Rhodes. Special Lake Lure.',
          tip_detailed: `**Legendary Lake Sturgeon** - found in **Flat Iron Lake**, south of Rhodes.

🎣 **Lure:** Special Lake Lure`,
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'fish-catfish', 
          text: 'Channel Catfish (Sisika Island)', 
          tip: '📍 Prison island area. ⚠️ Epilogue easier. Special River Lure.',
          tip_detailed: `**Legendary Channel Catfish** - found near **Sisika Island** (the prison).

⚠️ **Easier in Epilogue** when John can roam freely.
🎣 **Lure:** Special River Lure`,
          chapter: 'epilogue',
          region: 'lemoyne',
          verified: true
        }
      ]
    }
  ]
};
