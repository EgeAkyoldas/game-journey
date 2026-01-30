/**
 * Gang Hideouts Section
 * Required for 100% completion - Clear 6 gang hideouts
 */

export const gangHideoutsSection = {
  id: 'gang-hideouts',
  title: 'X. Gang Hideouts',
  icon: '🏚️',
  defaultOpen: false,
  items: [
    // ========================================
    // REQUIRED FOR 100% (6 Hideouts)
    // ========================================
    {
      id: 'hideout-main',
      text: '100% Completion Hideouts (6 Required)',
      tip: 'Clear all enemies to complete. Some respawn, some are story-locked.',
      subItems: [
        { 
          id: 'hideout-six-point', 
          text: 'Six Point Cabin (O\'Driscolls)', 
          tip: '📍 NE of Valentine, Cumberland Forest. Encountered in Chapter 2 story. Can be cleared again later.',
          chapter: 2
        },
        { 
          id: 'hideout-shady-belle', 
          text: 'Shady Belle (Lemoyne Raiders)', 
          tip: '📍 Bayou Nwa, south of Caliga Hall. Story location - becomes camp in Chapter 4.',
          chapter: 3
        },
        { 
          id: 'hideout-hanging-dog', 
          text: 'Hanging Dog Ranch (O\'Driscolls → Laramie)', 
          tip: '📍 W of Valentine, near Little Creek River. Chapter 6 story mission. Laramie Gang in epilogue.',
          chapter: 6
        },
        { 
          id: 'hideout-beaver-hollow', 
          text: 'Beaver Hollow (Murfree Brood)', 
          tip: '📍 W of Annesburg, Roanoke Ridge. Becomes gang camp in Chapter 6.',
          chapter: 6
        },
        { 
          id: 'hideout-fort-mercer', 
          text: 'Fort Mercer (Del Lobos)', 
          tip: '📍 New Austin, S of Armadillo. ⚠️ EPILOGUE ONLY! Abandoned fort with many enemies.',
          chapter: 'Epilogue'
        },
        { 
          id: 'hideout-thieves-landing', 
          text: 'Thieves\' Landing (Del Lobos)', 
          tip: '📍 New Austin, S of Blackwater. ⚠️ EPILOGUE ONLY! Outlaw town - clear the whole area.',
          chapter: 'Epilogue'
        }
      ]
    },
    // ========================================
    // BONUS HIDEOUTS (Optional)
    // ========================================
    {
      id: 'hideout-bonus',
      text: 'Bonus Hideouts (Optional)',
      tip: 'Extra hideouts not required for 100% but offer good loot.',
      subItems: [
        { 
          id: 'hideout-gaptooth', 
          text: 'Gaptooth Breach (Del Lobos)', 
          tip: '📍 Gaptooth Ridge, W of Tumbleweed. Abandoned mine colony. Epilogue only.'
        },
        { 
          id: 'hideout-twin-rocks', 
          text: 'Twin Rocks (Del Lobos) ⭐', 
          tip: '📍 Cholla Springs, N of Armadillo. Special/Ultimate Edition bonus. Epilogue only.'
        },
        { 
          id: 'hideout-solomons', 
          text: 'Solomon\'s Folly (Del Lobos)', 
          tip: '📍 S of Benedict Point, New Austin. Small barn with guarded basement. Epilogue only.'
        }
      ]
    },
    // ========================================
    // TIPS
    // ========================================
    {
      id: 'hideout-tips',
      text: 'Gang Hideout Tips',
      tip: 'Strategies for clearing hideouts safely.',
      subItems: [
        { 
          id: 'hideout-tip-stealth', 
          text: 'Use Stealth', 
          tip: 'Approach at night with bow. Take out sentries silently for easier fight.'
        },
        { 
          id: 'hideout-tip-deadeye', 
          text: 'Dead Eye Tonics', 
          tip: 'Bring Snake Oil. Dead Eye makes clearing multiple enemies much easier.'
        },
        { 
          id: 'hideout-tip-loot', 
          text: 'Loot Everything', 
          tip: 'Hideouts have ammo, money, valuables. Check all bodies and buildings!'
        },
        { 
          id: 'hideout-tip-respawn', 
          text: 'Respawn Mechanic', 
          tip: 'Most hideouts respawn after a few in-game days. Good for farming money.'
        }
      ]
    }
  ]
};
