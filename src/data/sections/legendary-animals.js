/**
 * Legendary Animals Section
 * Grouped by region with detailed hunting tips
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
      tip: 'Cold weather region - dress warm! Some of the toughest legendary animals.',
      reward: 'Trapper outfits + Fence trinkets',
      subItems: [
        { id: 'leg-bear', text: 'Legendary Bharati Grizzly Bear', tip: "North of O'Creagh's Run. AGGRESSIVE! Springfield Rifle or Rolling Block. Aim for head.", reward: 'Bear Claw Talisman' },
        { id: 'leg-bison-white', text: 'Legendary White Bison', tip: 'Lake Isabella, NW corner near Mount Hagen. Use high-powered rifle headshot.', reward: 'White Bison Hat' },
        { id: 'leg-wolf', text: 'Legendary Wolf', tip: 'Cotorra Springs geyser area. Best at dawn. Sniper first shot, then Dead Eye.', reward: 'Wolf Heart Trinket' },
        { id: 'leg-ram', text: 'Legendary Bighorn Ram', tip: 'East of Cattail Pond, near Valentine. Use bow or rifle headshot. Cover scent helps.' },
        { id: 'leg-elk', text: 'Legendary Elk', tip: 'East of Bacchus Station, Cumberland Forest. Springfield or bow to vitals.' }
      ]
    },
    {
      id: 'legendary-new-hanover',
      text: 'New Hanover Region',
      tip: 'Central map area - accessible early in story.',
      subItems: [
        { id: 'leg-buck', text: 'Legendary Buck', tip: 'NW of Strawberry, Black Bone Forest. HUNT FIRST for Buck Antler Trinket = better pelts!', reward: 'Buck Antler Trinket', priority: true },
        { id: 'leg-coyote', text: 'Legendary Coyote', tip: 'Scarlett Meadows near Dewberry Creek, NW of Rhodes. Fast - use Springfield for one-shot.' },
        { id: 'leg-fox', text: 'Legendary Fox', tip: 'North of Rhodes near Mattock Pond. Small target - Varmint Rifle or bow.' }
      ]
    },
    {
      id: 'legendary-lemoyne',
      text: 'Lemoyne Region',
      tip: 'Swamp and bayou area. Watch for gators!',
      subItems: [
        { id: 'leg-boar', text: 'Legendary Boar', tip: 'Bluewater Marsh, north of Lagras. Springfield or poison arrows work well.' },
        { id: 'leg-beaver', text: 'Legendary Beaver', tip: 'Butcher Creek area, west of Van Horn. Albino beaver - Varmint Rifle one-shot.' },
        { id: 'leg-alligator', text: 'Legendary Bullgator', tip: 'Lakay, Bayou Nwa. ONLY after Chapter 4. Bring Rolling Block Rifle + shotgun backup!', chapter: 4, reward: 'Alligator Tooth Talisman' },
        { id: 'leg-panther', text: 'Legendary Giaguaro Panther', tip: 'Bolger Glade, south of Braithwaite Manor. REQUIRES Master Hunter Rank 9 first. Extremely dangerous!', reward: 'Panther Eye Trinket', priority: true }
      ]
    },
    {
      id: 'legendary-roanoke',
      text: 'Roanoke Ridge Region',
      tip: 'Northeast woodland area. Rare spawn territory.',
      subItems: [
        { id: 'leg-moose', text: 'Legendary Moose', tip: 'Near Brandywine Drop, northeast corner. RARE SPAWN - camp nearby and sleep repeatedly.', reward: 'Moose Antler Trinket' }
      ]
    },
    {
      id: 'legendary-new-austin',
      text: 'New Austin (EPILOGUE ONLY)',
      tip: '⚠️ These 3 animals can only be hunted in the Epilogue as John Marston.',
      chapter: 'epilogue',
      subItems: [
        { id: 'leg-cougar', text: 'Legendary Cougar', tip: 'Gaptooth Ridge, west of Tumbleweed. Very deadly - use Dead Eye + shotgun!', chapter: 'epilogue', reward: 'Cougar Fang Trinket' },
        { id: 'leg-pronghorn', text: 'Legendary Pronghorn', tip: 'Del Lobo Rock, SE of Fort Mercer. Fast runner - sniper rifle essential.', chapter: 'epilogue' },
        { id: 'leg-bison-tatanka', text: 'Legendary Tatanka Bison', tip: "Hennigan's Stead, SE of MacFarlane's Ranch. Docile but tough - multiple headshots.", chapter: 'epilogue' }
      ]
    },

    // ========================================
    // LEGENDARY FISH
    // ========================================
    {
      id: 'legendary-fish',
      text: '🐟 Legendary Fish (13 Total)',
      tip: 'Start: Jeremy Gill at Flat Iron Lake. Buy Special Lures from Bait Shop. Mail fish to Jeremy.',
      reward: 'Special Hat + Fish Map',
      subItems: [
        { id: 'fish-bluegill', text: 'Bluegill (Flat Iron Lake)', tip: 'Near Rhodes. Special Lake Lure.' },
        { id: 'fish-bass-large', text: 'Largemouth Bass (San Luis River)', tip: 'New Austin area. Special Lake Lure.', chapter: 'epilogue' },
        { id: 'fish-bass-small', text: 'Smallmouth Bass (Owanjila Lake)', tip: 'Near Strawberry. Special Lake Lure.' },
        { id: 'fish-bass-rock', text: 'Rock Bass (Aurora Basin)', tip: 'Tall Trees area. Special Lake Lure.' },
        { id: 'fish-bass-striped', text: 'Striped Bass (San Luis River)', tip: 'Rio Bravo, New Austin. Special River Lure.', chapter: 'epilogue' },
        { id: 'fish-perch', text: 'Perch (Elysian Pool)', tip: 'Roanoke Ridge. Special Lake Lure.' },
        { id: 'fish-pickerel', text: 'Chain Pickerel (Dakota River)', tip: 'Near Valentine. Special River Lure.' },
        { id: 'fish-muskie', text: 'Muskie (O\'Creagh\'s Run)', tip: 'Same lake as Hamish. Special Lake Lure.' },
        { id: 'fish-gar', text: 'Longnose Gar (Lagras)', tip: 'Bayou Nwa swamp. Special Swamp Lure.' },
        { id: 'fish-salmon', text: 'Sockeye Salmon (Lake Isabella)', tip: 'Far north, snowy. Special Lake Lure.' },
        { id: 'fish-steelhead', text: 'Steelhead Trout (Willard\'s Rest)', tip: 'Near Charlotte\'s cabin. Special River Lure.' },
        { id: 'fish-sturgeon', text: 'Lake Sturgeon (Flat Iron Lake)', tip: 'South of Rhodes. Special Lake Lure.' },
        { id: 'fish-catfish', text: 'Channel Catfish (Sisika Island)', tip: 'Prison island area. Special River Lure. Easier in epilogue.', chapter: 'epilogue' }
      ]
    }
  ]
};
