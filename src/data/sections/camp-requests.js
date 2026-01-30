/**
 * Camp Item Requests Section
 * Grouped by gang member with items and rewards
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
      tip: 'Little Jack wants toys and books. Available after "A Fisher of Men" mission.',
      chapter: 2,
      missable: true,
      subItems: [
        { id: 'req-jack-thimble', text: 'Thimble for Jack', tip: 'Find in houses/cabins. He gives you a sweet drawing.', missable: true, reward: "Jack's Drawing" },
        { id: 'req-jack-comic', text: 'Comic Book for Jack', tip: 'General stores sell them. He gives you chocolate bar.', missable: true, reward: 'Chocolate Bar' }
      ]
    },
    {
      id: 'requests-charles',
      text: "Charles Smith's Requests",
      tip: 'Charles wants ingredients for special arrows. Best rewards!',
      subItems: [
        { id: 'req-charles-moonshine', text: 'Moonshine for Charles', tip: 'Fence or general store. Creates Fire Arrows for you.', missable: true, reward: 'Fire Arrows' },
        { id: 'req-charles-oleander', text: 'Oleander Sage for Charles', tip: 'Bayou area plant. Creates Poison Arrows for you. Excellent!', missable: true, reward: 'Poison Arrows' },
        { id: 'req-charles-eagle', text: 'Eagle Feather for Charles', tip: 'Shoot eagles or find feathers. EPILOGUE only request.', chapter: 'epilogue', reward: 'Improved Arrows' }
      ]
    },
    {
      id: 'requests-hosea',
      text: "Hosea Matthews' Requests",
      tip: 'Hosea wants books and medicine ingredients.',
      chapter: 3,
      missable: true,
      subItems: [
        { id: 'req-hosea-book', text: 'The Case of the Shrew in the Fog', tip: 'General stores. Read "Tale of Deceitful German" first to trigger.', missable: true, reward: 'Predator Bait' },
        { id: 'req-hosea-ginseng', text: 'American Ginseng (×2)', tip: 'Forest areas - common plant. He gives Potent Medicine.', missable: true, reward: 'Potent Medicine' }
      ]
    },
    {
      id: 'requests-pearson',
      text: "Pearson's Requests",
      tip: 'Camp cook needs supplies for meals.',
      subItems: [
        { id: 'req-pearson-compass', text: 'Naval Compass', tip: 'Shipwrecks or naval locations. He shares rum and navy stories.', missable: true, reward: 'Navy Stories' },
        { id: 'req-pearson-rabbit', text: 'Rabbit Carcass', tip: 'Hunt any rabbit (perfect not needed). He makes Nutritious Stew.', missable: true, reward: 'Camp Stew Upgrade' }
      ]
    },
    {
      id: 'requests-others',
      text: 'Other Gang Member Requests',
      tip: 'Various gang members have single requests. All missable after Chapter 4!',
      missable: true,
      subItems: [
        { id: 'req-abigail-money', text: '$5 for Abigail (Jack\'s clothes)', tip: 'Just donate $5. She thanks you for caring about Jack.', missable: true },
        { id: 'req-bill-pomade', text: 'Hair Pomade for Bill', tip: 'General stores. He gives Repeater Ammo.', missable: true, reward: 'Repeater Ammo' },
        { id: 'req-dutch-pipe', text: 'Pipe for Dutch', tip: 'Random finds or Fence. He gives ornate Spurs.', missable: true, reward: 'Spurs' },
        { id: 'req-javier-oleander', text: 'Oleander Sage for Javier', tip: 'Bayou plant. He gives Poison Throwing Knives.', missable: true, reward: 'Poison Knives' },
        { id: 'req-kieran-burdock', text: 'Burdock Root (×2) for Kieran', tip: 'Common plant. Do before Chapter 4! He gives Horse Medicine.', chapter: 3, missable: true, reward: 'Horse Medicine' },
        { id: 'req-lenny-watch', text: 'Pocket Watch for Lenny', tip: 'Rob wealthy NPCs or find in houses. He gives Dynamite!', missable: true, reward: 'Dynamite' },
        { id: 'req-marybeth-pen', text: 'Fountain Pen for Mary-Beth', tip: 'Houses or general stores. She gives Gold Ring.', missable: true, reward: 'Gold Ring' },
        { id: 'req-molly-mirror', text: 'Pocket Mirror for Molly', tip: 'Houses or stores. She gives a Cigar.', chapter: 3, missable: true, reward: 'Cigar' },
        { id: 'req-sadie-harmonica', text: 'Harmonica for Sadie', tip: 'Random NPC loot or houses. She gives Gun Oil.', chapter: 3, missable: true, reward: 'Gun Oil' },
        { id: 'req-sean-bourbon', text: 'Kentucky Bourbon for Sean', tip: 'Buy at saloons. He gives Fire Bottle!', chapter: 2, missable: true, reward: 'Fire Bottle' },
        { id: 'req-susan-herbs', text: 'Seasoning Herbs (×2) for Susan', tip: 'Wild Mint, Oregano, or Creeping Thyme. She gives Miracle Tonic.', missable: true, reward: 'Miracle Tonic' },
        { id: 'req-tilly-necklace', text: 'Necklace for Tilly', tip: 'Jewelry boxes or rob wealthy NPCs. She gives Medicine.', missable: true, reward: 'Medicine' }
      ]
    },
    {
      id: 'requests-epilogue',
      text: "Uncle's Hangover Cure (Epilogue)",
      tip: 'As John at Beecher\'s Hope. Uncle needs home remedy ingredients.',
      chapter: 'epilogue',
      subItems: [
        { id: 'req-uncle-cure', text: 'Uncle\'s Home Remedy', tip: 'Collect: Milkweed, Kentucky Bourbon, Peppermint, Hair Pomade, Skunk Carcass. Poor Uncle...', reward: 'Uncle survives another day' }
      ]
    }
  ]
};
