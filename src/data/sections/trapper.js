/**
 * Trapper Section
 * All craftable Trapper outfits and garment sets
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
      tip: 'Legendary Bear Pelt required. Cold weather outfit.',
      region: 'ambarino',
      subItems: [
        { id: 'trap-bear-hat', text: 'Legendary Bear Head Hat', tip: '📦 Legendary Bear Pelt ×1', reward: '$40' },
        { id: 'trap-bear-coat', text: 'Legendary Bear Coat', tip: '📦 Legendary Bear Pelt ×1 + Perfect Bison Pelt ×1', reward: '$28' },
        { id: 'trap-bear-ropers', text: 'Legendary Bear Ropers', tip: '📦 Legendary Bear Pelt ×1 + Perfect Bull Hide ×1', reward: '$30' },
        { id: 'trap-boar-gloves', text: 'Boar Riding Gloves', tip: '📦 Perfect Boar Pelt ×1 + Perfect Rabbit Pelt ×2', reward: '$15' }
      ]
    },
    {
      id: 'trapper-set-trophy-buck',
      text: 'The Trophy Buck Set',
      tip: 'Legendary Buck + Fox required. Great early game set.',
      region: 'new-hanover',
      subItems: [
        { id: 'trap-raccoon-hat', text: 'Raccoon Mountain Hat', tip: '📦 Perfect Raccoon ×1 + Perfect Beaver ×1 + Hawk Feather ×2', reward: '$22' },
        { id: 'trap-buck-vest', text: 'Legendary Buck Vest', tip: '📦 Legendary Buck Pelt ×1 + Perfect Ram Hide ×1', reward: '$26' },
        { id: 'trap-fox-moccasins', text: 'Legendary Fox Moccasins', tip: '📦 Legendary Fox Pelt ×1 + Perfect Elk Pelt ×1', reward: '$34' },
        { id: 'trap-buck-fox-gloves', text: 'Legendary Buck & Fox Range Gloves', tip: '📦 Legendary Buck ×1 + Legendary Fox ×1', reward: '$28' }
      ]
    },
    {
      id: 'trapper-set-dreamcatcher',
      text: 'The Dreamcatcher Set',
      tip: 'Legendary Beaver + Bison + Boar. ⚠️ Tatanka Bison = Epilogue only!',
      chapter: 'epilogue',
      subItems: [
        { id: 'trap-beaver-hat', text: 'Legendary Beaver Flop Hat', tip: '📦 Legendary Beaver ×1 + Legendary Boar ×1 + Cardinal Feather', reward: '$34' },
        { id: 'trap-bison-vest', text: 'Legendary Bison Vest', tip: '📦 Legendary Tatanka Bison ×1 ⚠️ Epilogue', reward: '$35' },
        { id: 'trap-bison-chaps', text: 'Legendary Bison Batwing Chaps', tip: '📦 Legendary Tatanka Bison ×1 ⚠️ Epilogue', reward: '$33' },
        { id: 'trap-boar-bison-boots', text: 'Legendary Boar & Bison Fowlers', tip: '📦 Legendary Boar ×1 + Legendary Tatanka Bison ×1', reward: '$39' },
        { id: 'trap-beaver-gloves', text: 'Legendary Beaver Cavalry Gloves', tip: '📦 Legendary Beaver Pelt ×1', reward: '$18' }
      ]
    },
    {
      id: 'trapper-set-beast-of-prey',
      text: 'The Beast of Prey Set',
      tip: 'Legendary Cougar + Wolf. ⚠️ Cougar = Epilogue only!',
      chapter: 'epilogue',
      subItems: [
        { id: 'trap-cougar-hat', text: 'Legendary Cougar Flop Hat', tip: '📦 Legendary Cougar ×1 + Turkey Feather ×2 ⚠️ Epilogue', reward: '$30' },
        { id: 'trap-cougar-wolf-vest', text: 'Legendary Cougar & Wolf Vest', tip: '📦 Legendary Cougar ×1 + Legendary Wolf ×1', reward: '$38' },
        { id: 'trap-wolf-chaps', text: 'Legendary Wolf Batwing Chaps', tip: '📦 Legendary Wolf ×1 + Perfect Goat Hide ×1', reward: '$28' },
        { id: 'trap-bull-boots', text: 'Bull Fowler Boots', tip: '📦 Perfect Boar ×1 + Perfect Bull Hide ×1', reward: '$27' },
        { id: 'trap-cougar-gloves', text: 'Legendary Cougar Riding Gloves', tip: '📦 Legendary Cougar ×1 + Perfect Boar ×1', reward: '$24' }
      ]
    },
    {
      id: 'trapper-set-huntsman',
      text: 'The Huntsman Set',
      tip: 'Legendary Coyote + Pronghorn. ⚠️ Pronghorn = Epilogue only!',
      chapter: 'epilogue',
      subItems: [
        { id: 'trap-coyote-hat', text: 'Legendary Coyote Mountain Hat', tip: '📦 Legendary Coyote ×1 + Eagle Feather ×2', reward: '$23' },
        { id: 'trap-pronghorn-coat', text: 'Legendary Pronghorn Coat', tip: '📦 Legendary Pronghorn ×1 + Perfect Moose ×1 ⚠️ Epilogue', reward: '$42' },
        { id: 'trap-coyote-chaps', text: 'Legendary Coyote Half Chaps', tip: '📦 Legendary Coyote ×1 + Perfect Fox ×2', reward: '$26' },
        { id: 'trap-workman-boots', text: "Workman's Pride Boots", tip: '📦 Perfect Cow Hide ×1 + Perfect Goat Hide ×1', reward: '$24' },
        { id: 'trap-pronghorn-gloves', text: 'Legendary Pronghorn Range Gloves', tip: '📦 Legendary Pronghorn ×1 + Perfect Muskrat ×1', reward: '$22' }
      ]
    },
    {
      id: 'trapper-set-death-roll',
      text: 'The Death Roll Set',
      tip: 'Legendary Alligator + Panther. Both late-game legendaries.',
      subItems: [
        { id: 'trap-gator-hat', text: "Legendary Alligator Gambler's Hat", tip: '📦 Legendary Alligator ×1 + Perfect Snake Skin ×2', reward: '$32' },
        { id: 'trap-panther-cloak', text: 'Legendary Panther Cloak', tip: '📦 Legendary Panther ×1. Requires Master Hunter 9!', reward: '$50' },
        { id: 'trap-gator-vest', text: 'Legendary Alligator Vest', tip: '📦 Legendary Alligator ×1', reward: '$35' },
        { id: 'trap-gator-boots', text: 'Legendary Alligator Fowlers', tip: '📦 Legendary Alligator ×1', reward: '$40' },
        { id: 'trap-panther-gloves', text: 'Legendary Panther Range Gloves', tip: '📦 Legendary Panther ×1 + Perfect Gila Monster ×1', reward: '$28' }
      ]
    },
    {
      id: 'trapper-set-stalker',
      text: 'The Stalker Set',
      tip: 'Legendary Ram + Moose. Moose is RARE spawn!',
      subItems: [
        { id: 'trap-ram-hat', text: 'Legendary Ram Hat', tip: '📦 Legendary Ram Hide ×1', reward: '$17' },
        { id: 'trap-moose-jacket', text: 'Legendary Moose Hunting Jacket', tip: '📦 Legendary Moose ×1 + Perfect Wolf ×1. Moose is very rare!', reward: '$45' },
        { id: 'trap-ram-chaps', text: 'Legendary Ram Batwing Chaps', tip: '📦 Legendary Ram Hide ×1', reward: '$23' },
        { id: 'trap-moose-moccasins', text: 'Legendary Moose Moccasins', tip: '📦 Legendary Moose ×1 + Perfect Cow Hide ×1', reward: '$38' },
        { id: 'trap-ram-gloves', text: 'Legendary Ram Rifleman Gloves', tip: '📦 Legendary Ram ×1 + Perfect Boar ×1', reward: '$20' }
      ]
    },
    {
      id: 'trapper-set-ghost-bison',
      text: 'The Ghost Bison Set',
      tip: 'Legendary White Bison + Elk. Cold weather masterpiece.',
      region: 'ambarino',
      subItems: [
        { id: 'trap-white-bison-hat', text: 'Legendary White Bison Hat', tip: '📦 Legendary White Bison ×1', reward: '$22' },
        { id: 'trap-white-bison-coat', text: 'Legendary White Bison Coat', tip: '📦 Legendary White Bison ×1. Best cold weather protection!', reward: '$48' },
        { id: 'trap-elk-chaps', text: 'Legendary Elk Half Chaps', tip: '📦 Legendary Elk ×1 + Perfect Sheep Hide ×1', reward: '$26' },
        { id: 'trap-elk-moccasins', text: 'Legendary Elk Moccasins', tip: '📦 Legendary Elk ×1 + Perfect Goat Hide ×1', reward: '$30' },
        { id: 'trap-elk-gloves', text: 'Legendary Elk Range Gloves', tip: '📦 Legendary Elk ×1', reward: '$18' }
      ]
    },

    // ========================================
    // REGULAR SETS (Perfect Pelts Only)
    // ========================================
    {
      id: 'trapper-set-rattler',
      text: 'The Rattler Set',
      tip: 'Perfect pelts only. ⚠️ Peccary Pig = New Austin, Epilogue!',
      chapter: 'epilogue',
      subItems: [
        { id: 'trap-ram-sombrero', text: 'Ram Sombrero', tip: '📦 Perfect Ram Hide ×1', reward: '$19' },
        { id: 'trap-outdoorsmen-vest', text: 'Outdoorsmen Vest', tip: '📦 Perfect Pronghorn Hide ×1', reward: '$23' },
        { id: 'trap-javelina-chaps', text: 'Javelina Half Chaps', tip: '📦 Perfect Collared Peccary ×1 + Snake Skin ×1 ⚠️ Epilogue', reward: '$25' },
        { id: 'trap-iguana-gloves', text: 'Iguana Range Gloves', tip: '📦 Perfect Peccary ×1 + Perfect Iguana ×1', reward: '$22' }
      ]
    },
    {
      id: 'trapper-set-wrangler',
      text: 'The Wrangler Set',
      tip: 'Perfect pelts needed. Panther = Hard to get!',
      subItems: [
        { id: 'trap-goat-hat', text: 'Goat Flop Hat', tip: '📦 Perfect Goat Hide ×1 + Perfect Pronghorn ×1', reward: '$17' },
        { id: 'trap-trapper-cloak', text: "Trapper's Cloak", tip: '📦 Perfect Sheep Hide ×1', reward: '$18' },
        { id: 'trap-noman-vest', text: "No-Man's Vest", tip: '📦 Perfect Goat ×1 + Perfect Panther ×1. Panther is dangerous!', reward: '$35' },
        { id: 'trap-twotone-mocs', text: 'Two Toned Moccasins', tip: '📦 Perfect Buck Pelt ×1', reward: '$20' },
        { id: 'trap-moose-gloves', text: 'Moose Range Gloves', tip: '📦 Perfect Moose Pelt ×1. Moose is rare spawn!', reward: '$24' }
      ]
    },
    {
      id: 'trapper-set-bronco-buster',
      text: 'The Bronco Buster Set',
      tip: 'Perfect pelts. Great early-mid game set.',
      subItems: [
        { id: 'trap-elk-flop-hat', text: 'Elk Flop Hat', tip: '📦 Perfect Elk Pelt ×1', reward: '$14' },
        { id: 'trap-coyote-scout', text: 'Coyote Scout Jacket', tip: '📦 Perfect Ox Hide ×1 + Perfect Coyote ×1', reward: '$32' },
        { id: 'trap-huntsman-vest', text: 'Huntsman Vest', tip: '📦 Perfect Sheep ×1 + Perfect Deer ×1', reward: '$18' },
        { id: 'trap-boar-chaps', text: 'Boar Fringed Shotgun Chaps', tip: '📦 Perfect Boar Pelt ×2', reward: '$20' },
        { id: 'trap-pigskin-gloves', text: 'Pigskin Rifleman Gloves', tip: '📦 Perfect Pig Hide ×1', reward: '$12' }
      ]
    },
    {
      id: 'trapper-set-marauder',
      text: 'The Marauder Set',
      tip: 'Perfect pelts. Easier materials to obtain.',
      subItems: [
        { id: 'trap-muskrat-hat', text: 'Muskrat Cavalry Hat', tip: '📦 Perfect Rabbit ×4 + Perfect Muskrat ×1', reward: '$16' },
        { id: 'trap-principal-vest', text: 'Principal Vest', tip: '📦 Perfect Cow Hide ×1 + Perfect Deer ×1', reward: '$18' },
        { id: 'trap-bull-chaps', text: 'Bull Fringed Shotgun Chaps', tip: '📦 Perfect Bull Hide ×1', reward: '$19' },
        { id: 'trap-snakeskin-gloves', text: 'Snakeskin Cavalry Gloves', tip: '📦 Perfect Boar ×1 + Perfect Snake Skin ×1', reward: '$15' }
      ]
    },
    {
      id: 'trapper-set-bounty-hunter',
      text: 'The Bounty Hunter Set',
      tip: 'Perfect pelts. Classic western look.',
      subItems: [
        { id: 'trap-plantation-hat', text: 'Plantation Slouch Hat', tip: '📦 Perfect Bison Pelt ×1', reward: '$18' },
        { id: 'trap-beaver-jacket', text: 'Beaver Hunting Jacket', tip: '📦 Perfect Cow Hide ×1 + Perfect Beaver ×2', reward: '$30' },
        { id: 'trap-sheepskin-vest', text: 'Sheepskin Vest', tip: '📦 Perfect Sheep Hide ×2', reward: '$16' },
        { id: 'trap-pronghorn-chaps', text: 'Pronghorn Half Chaps', tip: '📦 Perfect Pronghorn Hide ×1', reward: '$17' },
        { id: 'trap-buck-riding-gloves', text: 'Buck Riding Gloves', tip: '📦 Perfect Buck Pelt ×1', reward: '$14' }
      ]
    },
    {
      id: 'trapper-set-desperado',
      text: 'The Desperado Set',
      tip: 'Perfect pelts. ⚠️ Armadillo = New Austin, Epilogue!',
      chapter: 'epilogue',
      subItems: [
        { id: 'trap-beaver-drifter', text: 'Beaver Drifter Hat', tip: '📦 Perfect Beaver Pelt ×2', reward: '$17' },
        { id: 'trap-wolf-coat', text: 'Wolf Coat', tip: '📦 Perfect Ram Hide ×1 + Perfect Wolf ×1', reward: '$28' },
        { id: 'trap-billy-vest', text: 'Billy Vest', tip: '📦 Perfect Armadillo ×2 + Perfect Goat ×1 ⚠️ Epilogue', reward: '$22' },
        { id: 'trap-boar-bull-boots', text: 'Boar & Bull Fowler Boots', tip: '📦 Perfect Boar ×1 + Perfect Ox Hide ×1', reward: '$25' },
        { id: 'trap-winter-gloves', text: 'Winter Cavalry Gloves', tip: '📦 Perfect Muskrat ×2 + Perfect Rabbit ×1', reward: '$16' }
      ]
    },
    {
      id: 'trapper-set-night-wrangler',
      text: 'The Night Wrangler Set',
      tip: 'Perfect pelts. Cougar + Panther = Dangerous hunts!',
      subItems: [
        { id: 'trap-coyote-gambler', text: "Coyote Gambler's Hat", tip: '📦 Perfect Coyote Pelt ×2', reward: '$16' },
        { id: 'trap-cougar-coat', text: 'Cougar Cutaway Coat', tip: '📦 Perfect Cougar ×2 + Perfect Black Bear ×1. Very dangerous!', reward: '$42' },
        { id: 'trap-wilderness-vest', text: 'Wilderness Vest', tip: '📦 Perfect Wolf ×1 + Perfect Panther ×1', reward: '$32' },
        { id: 'trap-moose-chaps', text: 'Moose Half Chaps', tip: '📦 Perfect Moose ×1. Moose is very rare!', reward: '$26' },
        { id: 'trap-badger-gloves', text: 'Badger Rifleman Gloves', tip: '📦 Perfect Badger Pelt ×1', reward: '$12' }
      ]
    },
    {
      id: 'trapper-set-mountain-man',
      text: 'The Mountain Man Set',
      tip: 'Perfect pelts. Good cold weather option.',
      region: 'ambarino',
      subItems: [
        { id: 'trap-grenadier-hat', text: 'Grenadier Hat', tip: '📦 Perfect Muskrat ×1 + Perfect Beaver ×1', reward: '$18' },
        { id: 'trap-ram-shotgun-coat', text: 'Ram Shotgun Coat', tip: '📦 Perfect Ram Hide ×2', reward: '$27' },
        { id: 'trap-country-vest', text: 'Country Vest', tip: '📦 Perfect Buck ×1 + Perfect Beaver ×1', reward: '$20' },
        { id: 'trap-elk-riding-gloves', text: 'Elk Riding Gloves', tip: '📦 Perfect Elk Pelt ×1', reward: '$15' }
      ]
    },

    // ========================================
    // TRAPPER TIPS
    // ========================================
    {
      id: 'trapper-tips',
      text: 'Trapper Tips',
      tip: 'Helpful information for hunting and crafting.',
      subItems: [
        { id: 'trap-tip-locations', text: 'Trapper Locations (5)', tip: '📍 Saint Denis | Riggs Station | NE of Strawberry | Near Annesburg | Tumbleweed (Epilogue)' },
        { id: 'trap-tip-perfect', text: 'Perfect Pelts', tip: 'Use correct weapon for animal size. Clean headshot or heart shot. 3-star animal only.' },
        { id: 'trap-tip-legendary', text: 'Legendary Pelts', tip: 'Always "perfect" quality. If lost, automatically sent to Trapper. One per playthrough.' },
        { id: 'trap-tip-buck', text: 'Buck Antler Trinket ⭐', tip: 'Hunt Legendary Buck FIRST! Trinket upgrades all future pelt quality by 1 tier.' }
      ]
    }
  ]
};
