/**
 * Camp Item Requests Section
 * Grouped by gang member with items and rewards
 * Enhanced with cowboy storyteller narrative
 */

export const campRequestsSection = {
  id: 'camp-requests',
  title: 'XX. Camp Item Requests',
  icon: '🎁',
  defaultOpen: false,
  items: [
    {
      id: 'requests-jack',
      text: "Jack Marston's Requests",
      tip: '👦 Little Jack wants toys and books. Available after "A Fisher of Men".',
      tip_detailed: `**Jack** is just a kid—he wants simple things like toys and comic books. Bring them to him and he'll give you something in return.

⚠️ **MISSABLE** - These requests are only available until Chapter 4!

*He's a good kid. Make him smile while you can.*`,
      chapter: 2,
      missable: true,
      verified: true,
      subItems: [
        { 
          id: 'req-jack-thimble', 
          text: 'Thimble for Jack', 
          tip: '📍 Find in houses/cabins. He gives you a drawing.',
          tip_detailed: `Find a **Thimble** in houses or cabins. Jack will thank you with one of his drawings.

🎨 *His drawings are surprisingly good for his age.*`,
          missable: true, 
          reward: "Jack's Drawing",
          verified: true
        },
        { 
          id: 'req-jack-comic', 
          text: 'Comic Book for Jack', 
          tip: '📍 General stores sell them. He gives you chocolate.',
          tip_detailed: `Buy a **Comic Book** from any general store. Jack rewards you with a chocolate bar.

🍫 *Fair trade.*`,
          missable: true, 
          reward: 'Chocolate Bar',
          verified: true
        }
      ]
    },
    {
      id: 'requests-charles',
      text: "Charles Smith's Requests",
      tip: '🏹 Charles wants ingredients for special arrows. Best rewards!',
      tip_detailed: `**Charles** is a skilled hunter and warrior. Bring him ingredients and he'll craft special arrows for you.

🏹 **Best rewards** in the camp request system!`,
      verified: true,
      subItems: [
        { 
          id: 'req-charles-moonshine', 
          text: 'Moonshine for Charles', 
          tip: '📍 Fence or general store. He makes Fire Arrows!',
          tip_detailed: `Buy **Moonshine** from the Fence or general store. Charles creates Fire Arrows for you.

🔥 *Set your enemies ablaze.*`,
          missable: true, 
          reward: 'Fire Arrows',
          verified: true
        },
        { 
          id: 'req-charles-oleander', 
          text: 'Oleander Sage for Charles', 
          tip: '📍 Bayou area plant. He makes Poison Arrows!',
          tip_detailed: `Find **Oleander Sage** in the Bayou area (Lemoyne swamps). Charles creates Poison Arrows.

☠️ *Silent. Deadly. Efficient.*`,
          missable: true, 
          reward: 'Poison Arrows',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'req-charles-eagle', 
          text: 'Eagle Feather for Charles (Epilogue)', 
          tip: '📍 Shoot eagles or find feathers. EPILOGUE only.',
          tip_detailed: `Shoot an **Eagle** or find loose feathers. Charles makes Improved Arrows.

🦅 **Epilogue only** - Visit Charles at Beecher's Hope.`,
          chapter: 'epilogue', 
          reward: 'Improved Arrows',
          verified: true
        }
      ]
    },
    {
      id: 'requests-hosea',
      text: "Hosea Matthews' Requests",
      tip: '📖 Hosea wants books and medicine ingredients.',
      tip_detailed: `**Hosea** is a reader and a thinker. He wants specific books and medicinal plants.

⚠️ **MISSABLE after Chapter 3!**`,
      chapter: 3,
      missable: true,
      verified: true,
      subItems: [
        { 
          id: 'req-hosea-book', 
          text: 'The Case of the Shrew in the Fog', 
          tip: '📍 General stores. Read "Tale of Deceitful German" first!',
          tip_detailed: `Find the book **"The Case of the Shrew in the Fog"** at general stores.

📖 **Trigger:** Read "Tale of Deceitful German" first to unlock this request.

🏆 **Reward:** Predator Bait`,
          missable: true, 
          reward: 'Predator Bait',
          verified: true
        },
        { 
          id: 'req-hosea-ginseng', 
          text: 'American Ginseng (×2)', 
          tip: '📍 Forest areas. He gives Potent Medicine.',
          tip_detailed: `Collect **2× American Ginseng** from forest areas. Hosea makes Potent Medicine.`,
          missable: true, 
          reward: 'Potent Medicine',
          verified: true
        }
      ]
    },
    {
      id: 'requests-pearson',
      text: "Pearson's Requests",
      tip: '👨‍🍳 Camp cook needs supplies for meals.',
      tip_detailed: `**Pearson** the camp cook has simple needs—help him improve camp meals.`,
      verified: true,
      subItems: [
        { 
          id: 'req-pearson-compass', 
          text: 'Naval Compass', 
          tip: '📍 Shipwrecks or naval locations. He shares rum and stories.',
          tip_detailed: `Find a **Naval Compass** at shipwrecks or naval locations. Pearson shares rum and navy stories with you.

⚓ *He misses the sea more than he lets on.*`,
          missable: true, 
          reward: 'Navy Stories',
          verified: true
        },
        { 
          id: 'req-pearson-rabbit', 
          text: 'Rabbit Carcass', 
          tip: '📍 Hunt any rabbit (perfect not needed). Camp stew upgrade!',
          tip_detailed: `Bring Pearson any **Rabbit Carcass** (doesn't need to be perfect). He upgrades the camp stew.

🍲 *Better meals for everyone.*`,
          missable: true, 
          reward: 'Camp Stew Upgrade',
          verified: true
        }
      ]
    },
    {
      id: 'requests-others',
      text: 'Other Gang Member Requests',
      tip: '🎁 Various gang members have single requests. All missable after Ch4!',
      tip_detailed: `Every gang member has something they want. Bring it to them for rewards and relationship building.

⚠️ **ALL MISSABLE** - Most expire after Chapter 4! Some characters leave even earlier.

*These people are your family. Take care of them.*`,
      missable: true,
      verified: true,
      subItems: [
        { 
          id: 'req-abigail-money', 
          text: '$5 for Abigail (Jack\'s clothes)', 
          tip: '💵 Just donate $5. She thanks you for caring about Jack.',
          missable: true,
          verified: true
        },
        { 
          id: 'req-bill-pomade', 
          text: 'Hair Pomade for Bill', 
          tip: '📍 General stores. He gives Repeater Ammo.',
          missable: true, 
          reward: 'Repeater Ammo',
          verified: true
        },
        { 
          id: 'req-dutch-pipe', 
          text: 'Pipe for Dutch', 
          tip: '📍 Random finds or Fence. He gives ornate Spurs.',
          missable: true, 
          reward: 'Spurs',
          verified: true
        },
        { 
          id: 'req-javier-oleander', 
          text: 'Oleander Sage for Javier', 
          tip: '📍 Bayou plant. He gives Poison Throwing Knives.',
          missable: true, 
          reward: 'Poison Knives',
          region: 'lemoyne',
          verified: true
        },
        { 
          id: 'req-kieran-burdock', 
          text: 'Burdock Root (×2) for Kieran', 
          tip: '⚠️ Common plant. Do before Chapter 4! He gives Horse Medicine.',
          tip_detailed: `Collect **2× Burdock Root** (common plant) for Kieran.

⚠️ **URGENT:** Kieran's fate changes in Chapter 4. Complete this early!`,
          chapter: 3, 
          missable: true, 
          reward: 'Horse Medicine',
          verified: true
        },
        { 
          id: 'req-lenny-watch', 
          text: 'Pocket Watch for Lenny', 
          tip: '📍 Rob wealthy NPCs or houses. He gives Dynamite!',
          missable: true, 
          reward: 'Dynamite',
          verified: true
        },
        { 
          id: 'req-marybeth-pen', 
          text: 'Fountain Pen for Mary-Beth', 
          tip: '📍 Houses or general stores. She gives Gold Ring.',
          missable: true, 
          reward: 'Gold Ring',
          verified: true
        },
        { 
          id: 'req-molly-mirror', 
          text: 'Pocket Mirror for Molly', 
          tip: '📍 Houses or stores. She gives a Cigar.',
          chapter: 3, 
          missable: true, 
          reward: 'Cigar',
          verified: true
        },
        { 
          id: 'req-sadie-harmonica', 
          text: 'Harmonica for Sadie', 
          tip: '📍 Random NPC loot or houses. She gives Gun Oil.',
          chapter: 3, 
          missable: true, 
          reward: 'Gun Oil',
          verified: true
        },
        { 
          id: 'req-sean-bourbon', 
          text: 'Kentucky Bourbon for Sean', 
          tip: '⚠️ Buy at saloons. Do this FAST—Sean leaves early!',
          tip_detailed: `Buy **Kentucky Bourbon** at any saloon for Sean.

⚠️ **URGENT:** Sean's time with the gang is limited. Complete this in Chapter 2!`,
          chapter: 2, 
          missable: true, 
          reward: 'Fire Bottle',
          verified: true
        },
        { 
          id: 'req-susan-herbs', 
          text: 'Seasoning Herbs (×2) for Susan', 
          tip: '📍 Wild Mint, Oregano, or Thyme. She gives Miracle Tonic.',
          missable: true, 
          reward: 'Miracle Tonic',
          verified: true
        },
        { 
          id: 'req-tilly-necklace', 
          text: 'Necklace for Tilly', 
          tip: '📍 Jewelry boxes or rob wealthy NPCs. She gives Medicine.',
          missable: true, 
          reward: 'Medicine',
          verified: true
        }
      ]
    },
    {
      id: 'requests-epilogue',
      text: "Uncle's Hangover Cure (Epilogue)",
      tip: '🥴 As John at Beecher\'s Hope. Poor Uncle needs help.',
      tip_detailed: `In the Epilogue, **Uncle** needs a home remedy for his perpetual hangover. Gather the ingredients.

🍺 *Uncle's condition is... chronic.*`,
      chapter: 'epilogue',
      verified: true,
      subItems: [
        { 
          id: 'req-uncle-cure', 
          text: "Uncle's Home Remedy", 
          tip: '📦 Milkweed, Bourbon, Peppermint, Pomade, Skunk Carcass!',
          tip_detailed: `Gather these ingredients for Uncle's cure:
• Milkweed
• Kentucky Bourbon
• Peppermint
• Hair Pomade
• Skunk Carcass

🦨 *The skunk is the key ingredient. Don't ask.*`,
          reward: 'Uncle survives another day',
          verified: true
        }
      ]
    }
  ]
};
