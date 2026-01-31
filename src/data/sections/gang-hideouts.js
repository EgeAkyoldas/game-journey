/**
 * Gang Hideouts Section
 * Required for 100% completion - Clear 6 gang hideouts
 * Enhanced with cowboy storyteller narrative
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
      tip: '🎯 Clear all enemies to complete. Some respawn, some story-locked.',
      tip_detailed: `For that **100% completion**, you gotta clear **six specific gang hideouts**. Kill every last outlaw, loot the place clean, and move on to the next nest of rats.

⚠️ **Story timing matters.** Some hideouts only become available after certain missions. Others become your own camp for a while.

🔫 *Each hideout's got its own gang—O'Driscolls, Raiders, Murfrees, Del Lobos. Learn their territories.*`,
      verified: true,
      subItems: [
        { 
          id: 'hideout-six-point', 
          text: "Six Point Cabin (O'Driscolls)", 
          tip: '📍 NE of Valentine, Cumberland Forest. Chapter 2 story.',
          tip_detailed: `**Six Point Cabin** - an O'Driscoll camp in the **Cumberland Forest**, northeast of Valentine.

You'll hit this place during Chapter 2's story, but it can be cleared again later when the O'Driscolls reoccupy.

🔫 *These boys hate us. The feeling's mutual.*`,
          chapter: 2,
          region: 'new-hanover',
          reward: 'Hideout Cleared',
          verified: true
        },
        { 
          id: 'hideout-shady-belle', 
          text: 'Shady Belle (Lemoyne Raiders)', 
          tip: '📍 Bayou Nwa, south of Caliga Hall. Becomes camp in Ch4.',
          tip_detailed: `**Shady Belle** - a haunted-lookin' plantation in **Bayou Nwa**, south of Caliga Hall. The Lemoyne Raiders use it as their hideout.

📍 You'll clear this during the story, and it becomes your gang's camp for Chapter 4.

🏚️ *Nice place. Once you get the ghosts and Raiders out.*`,
          chapter: 3,
          region: 'lemoyne',
          reward: 'New Camp Location',
          verified: true
        },
        { 
          id: 'hideout-hanging-dog', 
          text: "Hanging Dog Ranch (O'Driscolls → Laramie)", 
          tip: '📍 W of Valentine, near Little Creek River. Ch6 story.',
          tip_detailed: `**Hanging Dog Ranch** - O'Driscoll territory during the main story, west of Valentine near Little Creek River.

You'll assault this place in **Chapter 6**. After the story, the **Laramie Gang** moves in and you can clear it again.

🔫 *Different gang, same outcome. Dead outlaws.*`,
          chapter: 6,
          region: 'west-elizabeth',
          reward: 'Hideout Cleared',
          verified: true
        },
        { 
          id: 'hideout-beaver-hollow', 
          text: 'Beaver Hollow (Murfree Brood)', 
          tip: '📍 W of Annesburg, Roanoke Ridge. Becomes camp in Ch6.',
          tip_detailed: `**Beaver Hollow** - the Murfree Brood's lair, west of Annesburg in Roanoke Ridge. These inbred cannibals are the worst folks you'll meet.

📍 Clear 'em out and the gang moves in for Chapter 6. Dark times, dark place.

⚠️ *The Murfrees eat people. Don't let 'em take you alive.*`,
          chapter: 6,
          region: 'new-hanover',
          reward: 'Final Camp Location',
          verified: true
        },
        { 
          id: 'hideout-fort-mercer', 
          text: 'Fort Mercer (Del Lobos)', 
          tip: '📍 New Austin, S of Armadillo. ⚠️ EPILOGUE ONLY!',
          tip_detailed: `**Fort Mercer** - an abandoned military fort south of Armadillo, now occupied by the **Del Lobo gang**. Lot of history in these walls.

⚠️ **EPILOGUE ONLY** - Arthur can't safely enter New Austin.

🏰 *Thick walls, lots of enemies. Bring a rifle and patience.*`,
          chapter: 'epilogue',
          region: 'new-austin',
          reward: 'Hideout Cleared + Loot',
          verified: true
        },
        { 
          id: 'hideout-thieves-landing', 
          text: "Thieves' Landing (Del Lobos)", 
          tip: '📍 New Austin, S of Blackwater. ⚠️ EPILOGUE ONLY!',
          tip_detailed: `**Thieves' Landing** - an outlaw town south of Blackwater where the Del Lobos run things. Every building's got enemies.

⚠️ **EPILOGUE ONLY** - John can roam freely here.

🏚️ *Clear the whole damn town. Every corner, every rooftop. Then it's yours.*`,
          chapter: 'epilogue',
          region: 'new-austin',
          reward: 'Hideout Cleared + Fence Access',
          verified: true
        }
      ]
    },
    // ========================================
    // BONUS HIDEOUTS (Optional)
    // ========================================
    {
      id: 'hideout-bonus',
      text: 'Bonus Hideouts (Optional)',
      tip: '🎁 Not required for 100% but offer good loot.',
      tip_detailed: `These hideouts **don't count toward 100% completion**, but they're worth clearin' for the loot and the satisfaction.

💰 Good money, rare items, and practice for your trigger finger.

*Sometimes you just wanna shoot some outlaws. These places oblige.*`,
      verified: true,
      subItems: [
        { 
          id: 'hideout-gaptooth', 
          text: 'Gaptooth Breach (Del Lobos)', 
          tip: '📍 Gaptooth Ridge, W of Tumbleweed. Epilogue only.',
          tip_detailed: `**Gaptooth Breach** - an abandoned mining colony in Gaptooth Ridge, west of Tumbleweed. Del Lobos have set up shop.

📍 **Epilogue only.** Good loot scattered across the old mining equipment.

⛏️ *Miners left. Outlaws moved in. You're the eviction notice.*`,
          chapter: 'epilogue',
          region: 'new-austin',
          verified: true
        },
        { 
          id: 'hideout-twin-rocks', 
          text: 'Twin Rocks (Del Lobos) ⭐', 
          tip: '📍 Cholla Springs, N of Armadillo. Special/Ultimate Edition.',
          tip_detailed: `**Twin Rocks** - a rock formation hideout in Cholla Springs, north of Armadillo.

⭐ **Special/Ultimate Edition bonus content.** If you've got the fancy edition, this is exclusive to you.

📍 *Epilogue only.* Worth clearing if you've got access.`,
          chapter: 'epilogue',
          region: 'new-austin',
          verified: true
        },
        { 
          id: 'hideout-solomons', 
          text: "Solomon's Folly (Del Lobos)", 
          tip: '📍 S of Benedict Point, New Austin. Guarded basement.',
          tip_detailed: `**Solomon's Folly** - a small barn south of Benedict Point. Don't be fooled by its size—the basement's where the action is.

📍 **Epilogue only.** Clear the guards, loot the underground stash.

🏚️ *Small place, decent pay. Quick work.*`,
          chapter: 'epilogue',
          region: 'new-austin',
          verified: true
        }
      ]
    },
    // ========================================
    // TIPS
    // ========================================
    {
      id: 'hideout-tips',
      text: 'Gang Hideout Tips',
      tip: '💡 Strategies for clearing hideouts safely.',
      tip_detailed: `Listen up, partner. These tips'll keep you breathin' when you're up against a dozen angry outlaws.

🎯 **Every hideout's a puzzle.** Find the approach that works for you—stealth, sniping, or full charge.`,
      verified: true,
      subItems: [
        { 
          id: 'hideout-tip-stealth', 
          text: 'Use Stealth', 
          tip: '🏹 Approach at night with bow. Take out sentries silently.',
          tip_detailed: `**Night approach with a bow** is the smart play. Sentries are easier to spot by their fires, and silent kills don't alert the main camp.

🏹 Take your time. One headshot at a time. Thin the herd before you commit.

*The quiet approach means fewer bullets spent and fewer wounds taken.*`,
          verified: true
        },
        { 
          id: 'hideout-tip-deadeye', 
          text: 'Dead Eye Tonics', 
          tip: '🎯 Bring Snake Oil. Dead Eye makes clearing easier.',
          tip_detailed: `**Snake Oil** and other Dead Eye tonics are your best friends. Pop one when things get hot and paint the targets before they can react.

🎯 Dead Eye turns a desperate fight into target practice.

*Stock up before you ride in. Tonics are cheap. Your life ain't.*`,
          verified: true
        },
        { 
          id: 'hideout-tip-loot', 
          text: 'Loot Everything', 
          tip: '💰 Check all bodies and buildings after the fight.',
          tip_detailed: `After the shootin' stops, **loot everything**. Bodies, lockboxes, cupboards, nightstands. Hideouts are treasure troves.

💰 You'll find cash, ammo, valuables, sometimes rare items.

*The dead don't need their money. You do.*`,
          verified: true
        },
        { 
          id: 'hideout-tip-respawn', 
          text: 'Respawn Mechanic', 
          tip: '🔄 Most hideouts respawn after a few in-game days.',
          tip_detailed: `Here's the beautiful thing—**most hideouts respawn** after a few in-game days. The enemies come back, and so does the loot.

🔄 **Good for farming money** if you're broke. Just ride away, sleep a few nights, come back, and clear 'em again.

*Outlaws never learn. Neither should you—keep robbin' 'em.*`,
          verified: true
        }
      ]
    }
  ]
};
