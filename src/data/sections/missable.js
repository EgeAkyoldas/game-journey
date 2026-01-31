/**
 * Missable Content Section
 * Content that can be permanently missed
 * Enhanced with cowboy storyteller narrative
 */

export const missableSection = {
  id: 'missable',
  title: 'XVI. Missable Content',
  icon: '⚠️',
  defaultOpen: true,
  items: [
    {
      id: 'missable-bolt-action',
      text: 'Bolt Action Rifle (Free)',
      tip: ' "The First Shall Be Last" mission. Kill LEFT bounty hunter fast.',
      tip_detailed: `During the mission **"The First Shall Be Last"** in Chapter 2, you're ambushed by bounty hunters. Kill the one on the **LEFT side fast**—before he rides off.

Loot his body and you get a **free Bolt Action Rifle**. Miss him, and you gotta buy it later for $180.

⚠️ **One chance only.** If he escapes, the rifle's gone forever.`,
      missable: true,
      chapter: 2,
      region: 'new-hanover',
      reward: 'Bolt Action Rifle',
      verified: true
    },
    {
      id: 'missable-mary-missions',
      text: 'Mary Linton Missions (3 Parts)',
      tip: '💔 Complete all before Chapter 6 ends. Emotional storyline.',
      tip_detailed: `**Mary Linton**—Arthur's old flame. She sends letters askin' for help, and each meeting tears open old wounds.

📋 **3 Parts:**
• Part 1: Help with her father
• Part 2: Help with her brother Jamie
• Part 3: Final meeting—the choice that haunts you

⚠️ **Must complete before Chapter 6 deadline.** After that, there's no more chances.

*Some things can't be fixed. But you can still try.*`,
      missable: true,
      chapter: 6,
      region: 'new-hanover',
      reward: 'Story Content + Closure',
      verified: true
    },
    {
      id: 'missable-edith-downes',
      text: 'Edith Downes Missions (2 Parts)',
      tip: ' Saint Denis slums. After debt collection. Redemption.',
      tip_detailed: `Remember **Thomas Downes**? The sick man you beat for a debt? His widow **Edith** and son are now living in the Saint Denis slums.

📋 **2 Parts:** Arthur tries to make amends. It's a redemption arc that hits hard.

 Find her in **Saint Denis**, near the slums district.

⚠️ **Must complete as Arthur, before Chapter 6 ends.**

*You can't undo what you did. But you can try to make it right.*`,
      missable: true,
      chapter: 6,
      region: 'lemoyne',
      reward: 'Redemption + Honor',
      verified: true
    },
    {
      id: 'missable-veteran',
      text: 'The Veteran (Hamish Sinclair)',
      tip: " O'Creagh's Run. 4 Parts. Final part gives Buell the horse.",
      tip_detailed: `**Hamish Sinclair** is a one-legged Civil War veteran living alone by **O'Creagh's Run**. Over 4 missions, you hunt together, fish together, and become genuine friends.

📋 **4 Parts:** Each encounter deepens the friendship.

🐴 **Final reward: Buell** - Hamish's horse. One of the best in the game, and carrying emotional weight.

⚠️ **Pro tip:** Do the first 3 parts as Arthur, but save the **final part for the Epilogue as John**. That way you can keep Buell.

*Hamish is good people. The kind this world don't make no more.*`,
      missable: true,
      chapter: 6,
      region: 'new-hanover',
      reward: 'Buell (Horse)',
      verified: true
    },
    {
      id: 'missable-widow',
      text: 'The Widow (Charlotte Balfour)',
      tip: ' North of Annesburg. 3 Parts. Teaching survival.',
      tip_detailed: `**Charlotte Balfour**'s husband died, leaving her alone in the wilderness north of Annesburg. She don't know how to survive.

📋 **3 Parts:** Arthur teaches her to hunt, to shoot, to live.

 Find her cabin **north of Annesburg**, near Willard's Rest.

⚠️ **Must complete as Arthur.** There's a gut-punch moment if you come back as John later...

*Sometimes the best thing you can do is help someone stand on their own.*`,
      missable: true,
      chapter: 6,
      region: 'new-hanover',
      reward: 'Story Content + Food Gifts',
      verified: true
    },
    {
      id: 'missable-pearson-jacket',
      text: "Pearson's Scout Jacket",
      tip: '🐰 Donate a rabbit carcass to Pearson. Chapters 2-3 only.',
      tip_detailed: `In **Chapters 2 or 3**, donate a **rabbit carcass** (not pelt—the whole animal) to **Pearson** at the provisions wagon.

After camp upgrades a bit, he'll give you the **Scout Jacket** as thanks—a unique clothing item you can't get any other way.

⚠️ **Chapters 2-3 only.** After Chapter 4, the camp dynamics change and this becomes impossible.

*Pearson appreciates the little things. So should you.*`,
      missable: true,
      chapter: 3,
      region: 'new-hanover',
      reward: 'Scout Jacket (Unique)',
      verified: true
    },
    {
      id: 'missable-kieran',
      text: 'Fishing with Kieran',
      tip: "🎣 Chapter 3 only. Before Kieran's fate.",
      tip_detailed: `**Kieran Duffy** finally gets a chance to bond with the gang. He invites you fishin' in **Chapter 3**.

Do this mission. It's your only chance to really know him.

⚠️ **Chapter 3 only.** After that... well, Kieran's story takes a dark turn.

*Poor Kieran. He just wanted to belong.*`,
      missable: true,
      chapter: 3,
      region: 'lemoyne',
      reward: 'Character Moment',
      verified: true
    },
    {
      id: 'missable-chicks-treasure',
      text: "Chick's Treasure Map",
      tip: "🖼️ Painting in Shady Belle. Inspect BEFORE leaving in Chapter 4.",
      tip_detailed: `There's a **painting inside Shady Belle** that reveals **Chick's Treasure Map** when you inspect it.

 Find it on a wall inside the main building, **before you leave Shady Belle at the end of Chapter 4**.

⚠️ Once the camp moves to Beaver Hollow, the painting despawns and this treasure is locked forever.

💰 *Free money you'll never see if you don't pay attention.*`,
      missable: true,
      chapter: 4,
      region: 'lemoyne',
      reward: "Chick's Treasure Map",
      verified: true
    },
    {
      id: 'missable-lenny',
      text: 'A Quiet Time (Lenny Night)',
      tip: '🍺 Valentine bar. Automatic story mission. YNNEL!',
      tip_detailed: `**"A Quiet Time"** - the legendary drunk night with **Lenny Summers** in Valentine.

🍺 This is an automatic story mission in Chapter 2, so you can't miss it per se, but it's so good it deserves mention.

**YNNEL! LENNYYY!**

*One of the greatest missions in gaming history. Enjoy every second.*`,
      missable: true,
      chapter: 2,
      region: 'new-hanover',
      reward: 'Legendary Memory',
      verified: true
    },
    {
      id: 'missable-camp-requests',
      text: 'Camp Companion Requests',
      tip: '🔍 Gang members ask for items (pipe, book, etc.). Check scouting icon.',
      tip_detailed: `Throughout Chapters 2-4, gang members will ask you to find specific items for them—a **harmonica**, a **pipe**, a **romance novel**, etc.

 Look for the **white "scouting" icon** at camp to hear their requests.

⚠️ **All requests become unavailable after Chapter 4.** And completing them builds bonds, unlocks unique camp interactions.

*These people are your family. Take care of 'em.*`,
      missable: true,
      chapter: 4,
      verified: true
    },
    {
      id: 'missable-high-honor',
      text: 'High Honor Missions',
      tip: '😇 Some stranger encounters require high honor to access.',
      tip_detailed: `Several stranger missions only become available if your **Honor is high enough**:

📋 **Examples:**
• Brother Dorkins at Saint Denis Church
• Certain dialogue options with strangers
• The "Do Not Seek Absolution" missions

Keep your honor up by **greeting people**, **helping strangers**, and **sparing lives** when given the choice.

😇 *Be the man you wish you'd been. There's still time.*`,
      missable: true,
      verified: true
    },
    {
      id: 'missable-do-not-seek',
      text: 'Do Not Seek Absolution I & II',
      tip: '⛪ Brother Dorkins. High honor required. Saint Denis church.',
      tip_detailed: `**Brother Dorkins** at the **Saint Denis church** offers confession and missions, but only if your **honor is high**.

📋 **2 Parts:**
• Part I: Confession and charity work
• Part II: Deeper redemption arc

⚠️ **High honor required.** If you've been a murdering bastard, the doors stay closed.

⛪ *Even outlaws can find grace. If they seek it.*`,
      missable: true,
      chapter: 6,
      region: 'lemoyne',
      reward: 'Absolution + Honor',
      verified: true
    }
    // Note: Missable HATS moved to unique-hats.js section
  ]
};
