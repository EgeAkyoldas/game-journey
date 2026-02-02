/**
 * Herbalist Challenges
 * Enhanced with cowboy storyteller narrative
 */

export const herbalistChallenge = {
  id: 'herbalist',
  title: 'Herbalist Challenges',
  icon: '🌿',
  defaultOpen: false,
  tip_detailed: `Master the **flora of the frontier**. Collect plants, craft tonics, and cook seasoned meals.

⚠️ Rank 9 requires **New Austin** (Epilogue for most players).

*Nature provides everything you need. Learn to use it.*`,
  verified: true,
  items: [
    { id: 'herbalist-1', text: 'Rank 1: Pick 6 Yarrow', tip: '🌼 Yellow flowers. Very common in Heartlands grasslands.', verified: true },
    { id: 'herbalist-2', text: 'Rank 2: Eat 4 Berry Types', tip: '🫐 Raspberry, Blackberry, Wintergreen, Evergreen. Just eat them.', verified: true },
    { id: 'herbalist-3', text: 'Rank 3: Craft 7 Sage-Based Items', tip: '🌿 Potent Bitters or Seasoned Meat. Sage is common.', verified: true },
    { id: 'herbalist-4', text: 'Rank 4: Feed Horse 5 Mushrooms', tip: '🍄 Any mushroom type. Open satchel → select → feed option.', verified: true },
    { id: 'herbalist-5', text: 'Rank 5: Craft 9 Indian Tobacco Items', tip: '🌿 Snake Oil uses it. Find Indian Tobacco near rivers.', verified: true },
    { id: 'herbalist-6', text: 'Rank 6: Collect 15 Plant Species', tip: '🌱 Explore different biomes. Desert plants available in Epilogue.', verified: true },
    { id: 'herbalist-7', text: 'Rank 7: Craft 5 Special Miracle Tonics', tip: '⚗️ High-tier recipes. Buy pamphlets from Fence.', verified: true },
    { id: 'herbalist-8', text: 'Rank 8: Craft 6 Poison Weapons (Oleander)', tip: '☠️ Poison arrows/throwing knives. Oleander grows in Bayou.', region: 'lemoyne', verified: true },
    { id: 'herbalist-9', text: 'Rank 9: Pick All 43 Plant Species ⚠️', tip: '⚠️ REQUIRES NEW AUSTIN! Desert cactus, etc. Epilogue normally.', chapter: 'epilogue', verified: true },
    { id: 'herbalist-10', text: 'Rank 10: Season & Cook 11 Meat Types', tip: '🍖 Cook all meat types with oregano/thyme/mint. SEASONED versions count.', verified: true }
  ]
};
