/**
 * Trapper Section
 * All craftable Trapper outfits and garment sets
 * Enhanced with cowboy storyteller narrative
 */

export const trapperSection = {
  id: 'trapper',
  title: 'Trapper Outfits',
  icon: '🦌',
  defaultOpen: false,
  items: [
    // ========================================
    // LEGENDARY SETS (Require Legendary Pelts)
    // ========================================
    {
      id: 'trapper-set-bear-hunter',
      text: 'The Bear Hunter Set',
      tip: '🐻 Legendary Bear Pelt required. Cold weather outfit.',
      tip_detailed: `**The Bear Hunter Set** - crafted from the mighty Legendary Bear.

🐻 One of the first legendary sets you can craft. Provides excellent cold weather protection.

📍 Hunt the **Legendary Bharati Grizzly Bear** near O'Creagh's Run.`,
      region: 'ambarino',
      verified: true,
      subItems: [
        { id: 'trap-bear-hat', text: 'Legendary Bear Head Hat', tip: '📦 Legendary Bear Pelt ×1 | $40', reward: '$40', verified: true },
        { id: 'trap-bear-coat', text: 'Legendary Bear Coat', tip: '📦 Legendary Bear Pelt ×1 + Perfect Bison ×1 | $28', reward: '$28', verified: true },
        { id: 'trap-bear-ropers', text: 'Legendary Bear Ropers', tip: '📦 Legendary Bear Pelt ×1 + Perfect Bull ×1 | $30', reward: '$30', verified: true },
        { id: 'trap-boar-gloves', text: 'Boar Riding Gloves', tip: '📦 Perfect Boar ×1 + Perfect Rabbit ×2 | $15', reward: '$15', verified: true }
      ]
    },
    {
      id: 'trapper-set-trophy-buck',
      text: 'The Trophy Buck Set',
      tip: '🦌 Legendary Buck + Fox. Great early game set.',
      tip_detailed: `**The Trophy Buck Set** - crafted from the Legendary Buck and Fox.

🦌 Both legendaries are available early in Chapter 2. Great starting set!`,
      region: 'new-hanover',
      verified: true,
      subItems: [
        { id: 'trap-raccoon-hat', text: 'Raccoon Mountain Hat', tip: '📦 Perfect Raccoon ×1 + Perfect Beaver ×1 + Hawk Feather ×2 | $22', reward: '$22', verified: true },
        { id: 'trap-buck-vest', text: 'Legendary Buck Vest', tip: '📦 Legendary Buck ×1 + Perfect Ram ×1 | $26', reward: '$26', verified: true },
        { id: 'trap-fox-moccasins', text: 'Legendary Fox Moccasins', tip: '📦 Legendary Fox ×1 + Perfect Elk ×1 | $34', reward: '$34', verified: true },
        { id: 'trap-buck-fox-gloves', text: 'Legendary Buck & Fox Range Gloves', tip: '📦 Legendary Buck ×1 + Legendary Fox ×1 | $28', reward: '$28', verified: true }
      ]
    },
    {
      id: 'trapper-set-dreamcatcher',
      text: 'The Dreamcatcher Set',
      tip: '🦬 Legendary Beaver + Bison + Boar. ⚠️ Tatanka Bison = Epilogue!',
      tip_detailed: `**The Dreamcatcher Set** - features the Legendary Tatanka Bison.

⚠️ **Epilogue only** - The Tatanka Bison is in New Austin.`,
      chapter: 'epilogue',
      verified: true,
      subItems: [
        { id: 'trap-beaver-hat', text: 'Legendary Beaver Flop Hat', tip: '📦 Legendary Beaver ×1 + Legendary Boar ×1 + Cardinal Feather | $34', reward: '$34', verified: true },
        { id: 'trap-bison-vest', text: 'Legendary Bison Vest', tip: '📦 Legendary Tatanka Bison ×1 ⚠️ EPILOGUE | $35', reward: '$35', chapter: 'epilogue', verified: true },
        { id: 'trap-bison-chaps', text: 'Legendary Bison Batwing Chaps', tip: '📦 Legendary Tatanka Bison ×1 ⚠️ EPILOGUE | $33', reward: '$33', chapter: 'epilogue', verified: true },
        { id: 'trap-boar-bison-boots', text: 'Legendary Boar & Bison Fowlers', tip: '📦 Legendary Boar ×1 + Legendary Tatanka Bison ×1 | $39', reward: '$39', verified: true },
        { id: 'trap-beaver-gloves', text: 'Legendary Beaver Cavalry Gloves', tip: '📦 Legendary Beaver Pelt ×1 | $18', reward: '$18', verified: true }
      ]
    },
    {
      id: 'trapper-set-beast-of-prey',
      text: 'The Beast of Prey Set',
      tip: '🐆 Legendary Cougar + Wolf. ⚠️ Cougar = Epilogue!',
      tip_detailed: `**The Beast of Prey Set** - crafted from apex predators.

⚠️ **Epilogue only** - The Legendary Cougar is in New Austin.`,
      chapter: 'epilogue',
      verified: true,
      subItems: [
        { id: 'trap-cougar-hat', text: 'Legendary Cougar Flop Hat', tip: '📦 Legendary Cougar ×1 + Turkey Feather ×2 ⚠️ EPILOGUE | $30', reward: '$30', chapter: 'epilogue', verified: true },
        { id: 'trap-cougar-wolf-vest', text: 'Legendary Cougar & Wolf Vest', tip: '📦 Legendary Cougar ×1 + Legendary Wolf ×1 | $38', reward: '$38', verified: true },
        { id: 'trap-wolf-chaps', text: 'Legendary Wolf Batwing Chaps', tip: '📦 Legendary Wolf ×1 + Perfect Goat ×1 | $28', reward: '$28', verified: true },
        { id: 'trap-bull-boots', text: 'Bull Fowler Boots', tip: '📦 Perfect Boar ×1 + Perfect Bull ×1 | $27', reward: '$27', verified: true },
        { id: 'trap-cougar-gloves', text: 'Legendary Cougar Riding Gloves', tip: '📦 Legendary Cougar ×1 + Perfect Boar ×1 | $24', reward: '$24', verified: true }
      ]
    },
    {
      id: 'trapper-set-huntsman',
      text: 'The Huntsman Set',
      tip: '🦌 Legendary Coyote + Pronghorn. ⚠️ Pronghorn = Epilogue!',
      tip_detailed: `**The Huntsman Set** - classic hunter style.

⚠️ **Epilogue only** - The Legendary Pronghorn is in New Austin.`,
      chapter: 'epilogue',
      verified: true,
      subItems: [
        { id: 'trap-coyote-hat', text: 'Legendary Coyote Mountain Hat', tip: '📦 Legendary Coyote ×1 + Eagle Feather ×2 | $23', reward: '$23', verified: true },
        { id: 'trap-pronghorn-coat', text: 'Legendary Pronghorn Coat', tip: '📦 Legendary Pronghorn ×1 + Perfect Moose ×1 ⚠️ EPILOGUE | $42', reward: '$42', chapter: 'epilogue', verified: true },
        { id: 'trap-coyote-chaps', text: 'Legendary Coyote Half Chaps', tip: '📦 Legendary Coyote ×1 + Perfect Fox ×2 | $26', reward: '$26', verified: true },
        { id: 'trap-workman-boots', text: "Workman's Pride Boots", tip: '📦 Perfect Cow ×1 + Perfect Goat ×1 | $24', reward: '$24', verified: true },
        { id: 'trap-pronghorn-gloves', text: 'Legendary Pronghorn Range Gloves', tip: '📦 Legendary Pronghorn ×1 + Perfect Muskrat ×1 | $22', reward: '$22', verified: true }
      ]
    },
    {
      id: 'trapper-set-death-roll',
      text: 'The Death Roll Set',
      tip: '🐊 Legendary Alligator + Panther. Both late-game legendaries.',
      tip_detailed: `**The Death Roll Set** - bayou beast theme.

🐊 The Legendary Panther requires **Master Hunter Challenge 9** to spawn!`,
      verified: true,
      subItems: [
        { id: 'trap-gator-hat', text: "Legendary Alligator Gambler's Hat", tip: '📦 Legendary Alligator ×1 + Perfect Snake ×2 | $32', reward: '$32', verified: true },
        { id: 'trap-panther-cloak', text: 'Legendary Panther Cloak', tip: '📦 Legendary Panther ×1. ⚠️ Requires Master Hunter 9! | $50', reward: '$50', verified: true },
        { id: 'trap-gator-vest', text: 'Legendary Alligator Vest', tip: '📦 Legendary Alligator ×1 | $35', reward: '$35', verified: true },
        { id: 'trap-gator-boots', text: 'Legendary Alligator Fowlers', tip: '📦 Legendary Alligator ×1 | $40', reward: '$40', verified: true },
        { id: 'trap-panther-gloves', text: 'Legendary Panther Range Gloves', tip: '📦 Legendary Panther ×1 + Perfect Gila Monster ×1 | $28', reward: '$28', verified: true }
      ]
    },
    {
      id: 'trapper-set-stalker',
      text: 'The Stalker Set',
      tip: '🐏 Legendary Ram + Moose. Moose is RARE spawn!',
      tip_detailed: `**The Stalker Set** - features the elusive Moose.

⚠️ **Moose** is one of the **rarest spawns** in the game. Check O'Creagh's Run, Cairn Lake, and Owanjila at dawn.`,
      verified: true,
      subItems: [
        { id: 'trap-ram-hat', text: 'Legendary Ram Hat', tip: '📦 Legendary Ram ×1 | $17', reward: '$17', verified: true },
        { id: 'trap-moose-jacket', text: 'Legendary Moose Hunting Jacket', tip: '📦 Legendary Moose ×1 + Perfect Wolf ×1. Moose is very rare! | $45', reward: '$45', verified: true },
        { id: 'trap-ram-chaps', text: 'Legendary Ram Batwing Chaps', tip: '📦 Legendary Ram ×1 | $23', reward: '$23', verified: true },
        { id: 'trap-moose-moccasins', text: 'Legendary Moose Moccasins', tip: '📦 Legendary Moose ×1 + Perfect Cow ×1 | $38', reward: '$38', verified: true },
        { id: 'trap-ram-gloves', text: 'Legendary Ram Rifleman Gloves', tip: '📦 Legendary Ram ×1 + Perfect Boar ×1 | $20', reward: '$20', verified: true }
      ]
    },
    {
      id: 'trapper-set-ghost-bison',
      text: 'The Ghost Bison Set',
      tip: '🦬 Legendary White Bison + Elk. Cold weather masterpiece.',
      tip_detailed: `**The Ghost Bison Set** - the ultimate cold weather outfit.

❄️ Crafted from the **White Bison** at Lake Isabella. Best cold protection in the game!`,
      region: 'ambarino',
      verified: true,
      subItems: [
        { id: 'trap-white-bison-hat', text: 'Legendary White Bison Hat', tip: '📦 Legendary White Bison ×1 | $22', reward: '$22', verified: true },
        { id: 'trap-white-bison-coat', text: 'Legendary White Bison Coat', tip: '📦 Legendary White Bison ×1. Best cold weather protection! | $48', reward: '$48', priority: true, verified: true },
        { id: 'trap-elk-chaps', text: 'Legendary Elk Half Chaps', tip: '📦 Legendary Elk ×1 + Perfect Sheep ×1 | $26', reward: '$26', verified: true },
        { id: 'trap-elk-moccasins', text: 'Legendary Elk Moccasins', tip: '📦 Legendary Elk ×1 + Perfect Goat ×1 | $30', reward: '$30', verified: true },
        { id: 'trap-elk-gloves', text: 'Legendary Elk Range Gloves', tip: '📦 Legendary Elk ×1 | $18', reward: '$18', verified: true }
      ]
    },

    // ========================================
    // REGULAR SETS (Perfect Pelts Only)
    // ========================================
    {
      id: 'trapper-set-rattler',
      text: 'The Rattler Set',
      tip: '🐷 Perfect pelts only. ⚠️ Peccary Pig = New Austin, Epilogue!',
      chapter: 'epilogue',
      verified: true,
      subItems: [
        { id: 'trap-ram-sombrero', text: 'Ram Sombrero', tip: '📦 Perfect Ram ×1 | $19', reward: '$19', verified: true },
        { id: 'trap-outdoorsmen-vest', text: 'Outdoorsmen Vest', tip: '📦 Perfect Pronghorn ×1 | $23', reward: '$23', verified: true },
        { id: 'trap-javelina-chaps', text: 'Javelina Half Chaps', tip: '📦 Perfect Collared Peccary ×1 + Snake ×1 ⚠️ EPILOGUE | $25', reward: '$25', chapter: 'epilogue', verified: true },
        { id: 'trap-iguana-gloves', text: 'Iguana Range Gloves', tip: '📦 Perfect Peccary ×1 + Perfect Iguana ×1 | $22', reward: '$22', verified: true }
      ]
    },
    {
      id: 'trapper-set-wrangler',
      text: 'The Wrangler Set',
      tip: '🐆 Perfect pelts. Panther = Hard to get!',
      verified: true,
      subItems: [
        { id: 'trap-goat-hat', text: 'Goat Flop Hat', tip: '📦 Perfect Goat ×1 + Perfect Pronghorn ×1 | $17', reward: '$17', verified: true },
        { id: 'trap-trapper-cloak', text: "Trapper's Cloak", tip: '📦 Perfect Sheep ×1 | $18', reward: '$18', verified: true },
        { id: 'trap-noman-vest', text: "No-Man's Vest", tip: '📦 Perfect Goat ×1 + Perfect Panther ×1. Panther is dangerous! | $35', reward: '$35', verified: true },
        { id: 'trap-twotone-mocs', text: 'Two Toned Moccasins', tip: '📦 Perfect Buck ×1 | $20', reward: '$20', verified: true },
        { id: 'trap-moose-gloves', text: 'Moose Range Gloves', tip: '📦 Perfect Moose ×1. Moose is rare spawn! | $24', reward: '$24', verified: true }
      ]
    },
    {
      id: 'trapper-set-bronco-buster',
      text: 'The Bronco Buster Set',
      tip: '🐂 Perfect pelts. Great early-mid game set.',
      verified: true,
      subItems: [
        { id: 'trap-elk-flop-hat', text: 'Elk Flop Hat', tip: '📦 Perfect Elk ×1 | $14', reward: '$14', verified: true },
        { id: 'trap-coyote-scout', text: 'Coyote Scout Jacket', tip: '📦 Perfect Ox ×1 + Perfect Coyote ×1 | $32', reward: '$32', verified: true },
        { id: 'trap-huntsman-vest', text: 'Huntsman Vest', tip: '📦 Perfect Sheep ×1 + Perfect Deer ×1 | $18', reward: '$18', verified: true },
        { id: 'trap-boar-chaps', text: 'Boar Fringed Shotgun Chaps', tip: '📦 Perfect Boar ×2 | $20', reward: '$20', verified: true },
        { id: 'trap-pigskin-gloves', text: 'Pigskin Rifleman Gloves', tip: '📦 Perfect Pig ×1 | $12', reward: '$12', verified: true }
      ]
    },
    {
      id: 'trapper-set-marauder',
      text: 'The Marauder Set',
      tip: '🐄 Perfect pelts. Easier materials to obtain.',
      verified: true,
      subItems: [
        { id: 'trap-muskrat-hat', text: 'Muskrat Cavalry Hat', tip: '📦 Perfect Rabbit ×4 + Perfect Muskrat ×1 | $16', reward: '$16', verified: true },
        { id: 'trap-principal-vest', text: 'Principal Vest', tip: '📦 Perfect Cow ×1 + Perfect Deer ×1 | $18', reward: '$18', verified: true },
        { id: 'trap-bull-chaps', text: 'Bull Fringed Shotgun Chaps', tip: '📦 Perfect Bull ×1 | $19', reward: '$19', verified: true },
        { id: 'trap-snakeskin-gloves', text: 'Snakeskin Cavalry Gloves', tip: '📦 Perfect Boar ×1 + Perfect Snake ×1 | $15', reward: '$15', verified: true }
      ]
    },
    {
      id: 'trapper-set-bounty-hunter',
      text: 'The Bounty Hunter Set',
      tip: '🤠 Perfect pelts. Classic western look.',
      verified: true,
      subItems: [
        { id: 'trap-plantation-hat', text: 'Plantation Slouch Hat', tip: '📦 Perfect Bison ×1 | $18', reward: '$18', verified: true },
        { id: 'trap-beaver-jacket', text: 'Beaver Hunting Jacket', tip: '📦 Perfect Cow ×1 + Perfect Beaver ×2 | $30', reward: '$30', verified: true },
        { id: 'trap-sheepskin-vest', text: 'Sheepskin Vest', tip: '📦 Perfect Sheep ×2 | $16', reward: '$16', verified: true },
        { id: 'trap-pronghorn-chaps', text: 'Pronghorn Half Chaps', tip: '📦 Perfect Pronghorn ×1 | $17', reward: '$17', verified: true },
        { id: 'trap-buck-riding-gloves', text: 'Buck Riding Gloves', tip: '📦 Perfect Buck ×1 | $14', reward: '$14', verified: true }
      ]
    },
    {
      id: 'trapper-set-desperado',
      text: 'The Desperado Set',
      tip: '🐺 Perfect pelts. ⚠️ Armadillo = New Austin, Epilogue!',
      chapter: 'epilogue',
      verified: true,
      subItems: [
        { id: 'trap-beaver-drifter', text: 'Beaver Drifter Hat', tip: '📦 Perfect Beaver ×2 | $17', reward: '$17', verified: true },
        { id: 'trap-wolf-coat', text: 'Wolf Coat', tip: '📦 Perfect Ram ×1 + Perfect Wolf ×1 | $28', reward: '$28', verified: true },
        { id: 'trap-billy-vest', text: 'Billy Vest', tip: '📦 Perfect Armadillo ×2 + Perfect Goat ×1 ⚠️ EPILOGUE | $22', reward: '$22', chapter: 'epilogue', verified: true },
        { id: 'trap-boar-bull-boots', text: 'Boar & Bull Fowler Boots', tip: '📦 Perfect Boar ×1 + Perfect Ox ×1 | $25', reward: '$25', verified: true },
        { id: 'trap-winter-gloves', text: 'Winter Cavalry Gloves', tip: '📦 Perfect Muskrat ×2 + Perfect Rabbit ×1 | $16', reward: '$16', verified: true }
      ]
    },
    {
      id: 'trapper-set-night-wrangler',
      text: 'The Night Wrangler Set',
      tip: '🐆 Perfect pelts. Cougar + Panther = Dangerous hunts!',
      tip_detailed: `**The Night Wrangler Set** requires hunting the most dangerous predators.

🐆 **Cougars** and **Panthers** are extremely aggressive. Bring strong weapons and Dead Eye.`,
      verified: true,
      subItems: [
        { id: 'trap-coyote-gambler', text: "Coyote Gambler's Hat", tip: '📦 Perfect Coyote ×2 | $16', reward: '$16', verified: true },
        { id: 'trap-cougar-coat', text: 'Cougar Cutaway Coat', tip: '📦 Perfect Cougar ×2 + Perfect Black Bear ×1. Very dangerous! | $42', reward: '$42', verified: true },
        { id: 'trap-wilderness-vest', text: 'Wilderness Vest', tip: '📦 Perfect Wolf ×1 + Perfect Panther ×1 | $32', reward: '$32', verified: true },
        { id: 'trap-moose-chaps', text: 'Moose Half Chaps', tip: '📦 Perfect Moose ×1. Moose is very rare! | $26', reward: '$26', verified: true },
        { id: 'trap-badger-gloves', text: 'Badger Rifleman Gloves', tip: '📦 Perfect Badger ×1 | $12', reward: '$12', verified: true }
      ]
    },
    {
      id: 'trapper-set-mountain-man',
      text: 'The Mountain Man Set',
      tip: '❄️ Perfect pelts. Good cold weather option.',
      region: 'ambarino',
      verified: true,
      subItems: [
        { id: 'trap-grenadier-hat', text: 'Grenadier Hat', tip: '📦 Perfect Muskrat ×1 + Perfect Beaver ×1 | $18', reward: '$18', verified: true },
        { id: 'trap-ram-shotgun-coat', text: 'Ram Shotgun Coat', tip: '📦 Perfect Ram ×2 | $27', reward: '$27', verified: true },
        { id: 'trap-country-vest', text: 'Country Vest', tip: '📦 Perfect Buck ×1 + Perfect Beaver ×1 | $20', reward: '$20', verified: true },
        { id: 'trap-elk-riding-gloves', text: 'Elk Riding Gloves', tip: '📦 Perfect Elk ×1 | $15', reward: '$15', verified: true }
      ]
    },

    // ========================================
    // TRAPPER TIPS
    // ========================================
    {
      id: 'trapper-tips',
      text: 'Trapper Tips',
      tip: '💡 Helpful information for hunting and crafting.',
      tip_detailed: `Master these tips to become an efficient pelt collector.`,
      verified: true,
      subItems: [
        { 
          id: 'trap-tip-locations', 
          text: 'Trapper Locations (5)', 
          tip: '📍 Saint Denis | Riggs Station | NE Strawberry | Near Annesburg | Tumbleweed (Epilogue)',
          tip_detailed: `**5 Trapper Locations:**
1. **Saint Denis** - Market entrance
2. **Riggs Station** - Near the station
3. **NE of Strawberry** - In the wilderness
4. **Near Annesburg** - Forest area
5. **Tumbleweed** - ⚠️ Epilogue only`,
          verified: true
        },
        { 
          id: 'trap-tip-perfect', 
          text: 'Perfect Pelts', 
          tip: '⭐ Correct weapon for size. Clean headshot. 3-star animal only.',
          tip_detailed: `**Getting Perfect Pelts:**
1. Only hunt **3-star animals** (check with binoculars)
2. Use the **correct weapon** for the animal size
3. Clean **headshot or heart shot** for clean kill

🔫 Small = Varmint Rifle | Medium = Repeater | Large = Rifle`,
          verified: true
        },
        { 
          id: 'trap-tip-legendary', 
          text: 'Legendary Pelts', 
          tip: '🏆 Always "perfect". If lost, auto-sent to Trapper. One per playthrough.',
          tip_detailed: `**Legendary Pelts:**
• Always count as **perfect quality**
• If lost (death, water), **auto-sent to Trapper**
• Only **ONE per playthrough**—don't need to retry`,
          verified: true
        },
        { 
          id: 'trap-tip-buck', 
          text: 'Buck Antler Trinket ⭐', 
          tip: '🦌 Hunt Legendary Buck FIRST! Trinket upgrades pelt quality by 1 tier.',
          tip_detailed: `**PRIORITY: Hunt the Legendary Buck first!**

The Buck Antler Trinket (crafted at Fence) **upgrades all future pelt quality by 1 tier**.

🦌 2-star animals have a chance to become 3-star pelts!

*This is the single most important trinket for hunters.*`,
          priority: true,
          verified: true
        }
      ]
    }
  ]
};
