/**
 * Satchel Upgrades Section
 * Legend of the East Satchel crafting requirements
 * Enhanced with cowboy storyteller narrative
 */

export const satchelSection = {
  id: 'satchel',
  title: 'VI. Satchel Upgrades',
  icon: '🎒',
  defaultOpen: false,
  items: [
    {
      id: 'satchel-prerequisite',
      text: 'PREREQUISITE: Donate for Leather Working Tools',
      tip: '📋 Camp ledger, $225. Without this, Pearson cannot craft satchels.',
      tip_detailed: `Before you bring Pearson a single pelt, you gotta make sure he's got the tools to work with. Head to the **camp ledger** and donate **$225** for the **Leather Working Tools**.

Without 'em, that man couldn't stitch together a coin purse, let alone a proper satchel. This is step one, partner—don't skip it.

⚠️ *No tools, no satchels. Simple as that.*`,
      priority: true,
      region: 'new-hanover',
      chapter: 2,
      verified: true
    },
    {
      id: 'satchel-trinket',
      text: 'RECOMMENDED: Buck Antler Trinket',
      tip: '🦌 Hunt Legendary Buck first. +1 pelt quality chance.',
      tip_detailed: `Here's a tip from an old hunter: before you go chasin' perfect pelts, bag the **Legendary Buck** west of Strawberry. Take his antler to the **Fence** and get the **Buck Antler Trinket**.

This little charm gives you a **better chance of getting one-star-higher quality pelts**. Turns good pelts into great ones.

🏆 *Makes the satchel grind a whole lot easier. Trust me on this.*`,
      region: 'west-elizabeth',
      chapter: 2,
      rewards: ['Buck Antler Trinket', '+1 Pelt Quality'],
      verified: true
    },
    {
      id: 'satchel-tonics',
      text: 'Tonics Satchel',
      tip: '🦌 1x Perfect Deer, 1x Perfect Buck, 1x Perfect Elk. Holds 99 tonics.',
      tip_detailed: `The **Tonics Satchel** lets you carry **99 tonics** instead of a measly few. When you're deep in a gunfight and need that health boost, you'll thank yourself.

**Required Pelts:**
• **1x Perfect Deer Pelt** - Common, Big Valley or Heartlands
• **1x Perfect Buck Pelt** - Bucks are deer with antlers, same areas
• **1x Perfect Elk Pelt** -  Ambarino mountains, near Cattail Pond

🔫 *Use the Rolling Block Rifle for clean headshots on these big boys.*`,
      region: 'new-hanover',
      chapter: 2,
      reward: 'Hold 99 Tonics',
      verified: true
    },
    {
      id: 'satchel-ingredients',
      text: 'Ingredients Satchel',
      tip: '🐿️ 1x Perfect Deer, Badger, Squirrel. Use Varmint Rifle for small animals.',
      tip_detailed: `The **Ingredients Satchel** holds more crafting materials—herbs, plants, and such. Essential for the self-sufficient outlaw.

**Required Pelts:**
• **1x Perfect Deer Pelt** - Easy, they're everywhere
• **1x Perfect Badger Pelt** - 🦡 Nocturnal, near Bolger Glade at night
• **1x Perfect Squirrel Pelt** - 🐿️ Use **Varmint Rifle** or Small Game Arrows

⚠️ *Squirrels are tiny. If you use anything bigger than a Varmint Rifle, you'll destroy the pelt.*`,
      region: 'new-hanover',
      chapter: 2,
      reward: 'Hold 99 Ingredients',
      verified: true
    },
    {
      id: 'satchel-kit',
      text: 'Kit Satchel',
      tip: '🐆 1x Perfect Deer, Elk, Panther. Panthers = night, Braithwaite area.',
      tip_detailed: `The **Kit Satchel** expands your capacity for crafting kits—fire bottles, poison arrows, and the like.

**Required Pelts:**
• **1x Perfect Deer Pelt** - Standard fare
• **1x Perfect Elk Pelt** - Ambarino mountains
• **1x Perfect Panther Pelt** - ⚠️ **The hard one**

 Panthers spawn **at night** near **Braithwaite Manor** and south of Old Harry Fen. They're fast, deadly, and will attack first. **Save before hunting.**

🔫 *Dead Eye. Headshot. Don't miss—you might not get a second chance.*`,
      region: 'lemoyne',
      chapter: 2,
      reward: 'Hold 99 Kits',
      verified: true
    },
    {
      id: 'satchel-provisions',
      text: 'Provisions Satchel',
      tip: '🦬 1x Perfect Deer, Bison, Raccoon. Bison in Great Plains.',
      tip_detailed: `The **Provisions Satchel** holds more food—meat, canned goods, all that keeps you fed on the trail.

**Required Pelts:**
• **1x Perfect Deer Pelt** - You know the drill
• **1x Perfect Bison Pelt** - 🦬  **Great Plains**, west of Blackwater (Chapter 4+)
• **1x Perfect Raccoon Pelt** - 🦝 Nocturnal, near rivers and streams

⚠️ *Bison are in New Austin territory early on, so you may need to wait until Chapter 4+ or risk a bounty.*`,
      region: 'west-elizabeth',
      chapter: 4,
      reward: 'Hold 99 Provisions',
      verified: true
    },
    {
      id: 'satchel-materials',
      text: 'Materials Satchel',
      tip: '🦎 1x Perfect Deer, Boar, Iguana. Iguanas on Flat Iron Lake islands.',
      tip_detailed: `The **Materials Satchel** holds crafting materials—feathers, bones, and such. Useful for all sorts of camp upgrades.

**Required Pelts:**
• **1x Perfect Deer Pelt** - Easy
• **1x Perfect Boar Pelt** - 🐗 Scarlett Meadows, Bluewater Marsh
• **1x Perfect Iguana Skin** - 🦎  **Flat Iron Lake islands** (or Guarma, but you can't return there)

⚠️ *Iguanas are on the small islands in Flat Iron Lake. Swim out there or take a boat. Use Varmint Rifle.*`,
      region: 'new-hanover',
      chapter: 2,
      reward: 'Hold 99 Materials',
      verified: true
    },
    {
      id: 'satchel-valuables',
      text: 'Valuables Satchel',
      tip: '🐰 1x Perfect Deer, Beaver, Rabbit. Easy pelts.',
      tip_detailed: `The **Valuables Satchel** holds more jewelry, pocket watches, and other loot. Good for the thievin' type.

**Required Pelts:**
• **1x Perfect Deer Pelt** - Standard
• **1x Perfect Beaver Pelt** - 🦫 Near rivers, especially Owanjila Dam
• **1x Perfect Rabbit Pelt** - 🐰 Everywhere, use Varmint Rifle

💰 *This is the easiest satchel after the first few. No panthers, no cougars, just honest critters.*`,
      region: 'new-hanover',
      chapter: 2,
      reward: 'Hold 99 Valuables',
      verified: true
    },
    {
      id: 'satchel-legend',
      text: 'Legend of the East Satchel',
      tip: '🏆 Craft ALL above + 1x Perfect Cougar + 1x Perfect Wolf. 99 slots for EVERYTHING.',
      tip_detailed: `The **Legend of the East Satchel**. The holy grail. Craft this and you can carry **99 of everything**—tonics, provisions, materials, the works.

**Requirements:**
• ✅ **Craft all 7 satchels above first**
• **1x Perfect Cougar Pelt** - 🦁  West of Strawberry, Tumbleweed area. **Dangerous.** Dead Eye headshot.
• **1x Perfect Wolf Pelt** - 🐺 Ambarino mountains, often in packs

⚠️ *Cougars are the most dangerous animals in the game. They will stalk you, pounce, and kill you before you can react. Save often.*

🏆 *Once you have this satchel, inventory management becomes trivial. Worth every perfect pelt.*`,
      priority: true,
      region: 'west-elizabeth',
      chapter: 2,
      reward: 'Hold 99 of EVERYTHING',
      verified: true
    }
  ]
};
