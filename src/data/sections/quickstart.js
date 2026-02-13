/**
 * Quick Start Section
 * Early game essentials for new players
 * Enhanced with cowboy storyteller narrative (tip_detailed)
 * Uses **bold** for key info and icons for visual clarity
 */

export const quickstartSection = {
  id: 'quickstart',
  title: 'Quick Start Guide',
  icon: '⭐',
  defaultOpen: true,
  items: [
    {
      id: 'qs-legendary-buck',
      text: 'Hunt Legendary Buck FIRST',
      tip: ' West of Strawberry. The Buck Antler Trinket increases perfect pelt chances.',
      tip_detailed: `Now listen here, partner—before you go chasin' deer across three counties, do yourself a favor and bag that **Legendary Buck**. He roams the woods ** west of Strawberry**, a ghost of white fur between the pines.

Put him down, haul his antler to the **Fence**, and get yourself that **Buck Antler Trinket**. From that moment on, every pelt you skin's got a better chance of comin' out **one star cleaner** than the Good Lord intended.

⚠️ *I've seen greenhorns waste weeks huntin' perfect pelts the hard way. Don't be one of 'em.*`,
      priority: true,
      region: 'west-elizabeth',
      chapter: 2,
      rewards: ['Buck Antler Trinket', '+1 Pelt Quality'],
      verified: true,
      source: 'Red Dead Wiki'
    },
    {
      id: 'qs-limpany-gold',
      text: 'Grab Limpany Gold Bar ($500)',
      tip: " Burned town south of Valentine. Sheriff's desk has a lockbox.",
      tip_detailed: `There's a ghost town called **Limpany**,  **south of Valentine**—burned to ash years back. Nobody alive to tell the tale, but the fire left somethin' behind.

Head into what's left of the **Sheriff's office**. Under all that soot and ruin, there's a **lockbox in his desk**. Crack it open and you'll find yourself **$500 richer**.

💰 *Easy money, friend. The dead ain't got no use for gold.*`,
      region: 'new-hanover',
      chapter: 2,
      reward: '$500 Gold Bar',
      verified: true,
      source: 'Red Dead Wiki'
    },
    {
      id: 'qs-leather-working',
      text: 'Donate $225 for Leather Working Tools',
      tip: '📋 Camp ledger. Required to craft satchels at Pearson.',
      tip_detailed: `You want them fancy satchels? The ones that let you carry **twice the tonics**, **twice the ammo**? Then you best open that **camp ledger** and donate **$225** for Leather Working Tools.

Once Pearson's got the right equipment, he can stitch you up satchels that'll change how you ride. The **Legend of the East Satchel**? That's the holy grail, friend. Holds damn near everything.

🎯 *It ain't charity—it's an investment in your own hide.*`,
      region: 'new-hanover',
      chapter: 2,
      rewards: ['Satchel Crafting', 'Legend of the East Satchel access'],
      verified: true,
      source: 'Red Dead Wiki'
    },
    {
      id: 'qs-varmint-rifle',
      text: 'Buy Varmint Rifle ($72)',
      tip: '🔫 Essential for perfect small animal pelts. Any Gunsmith.',
      tip_detailed: `Every hunter worth his salt knows—you don't shoot a rabbit with a repeater unless you want rabbit stew instead of a pelt.

The **Varmint Rifle**'s your best friend for small game. 🐿️ Squirrels, 🐰 rabbits, 🦆 birds—this little beauty drops 'em clean without tearin' up the hide.

💰 **$72** at any Gunsmith. Cheap as dirt for what it does. ⚠️ *Without it, you'll be cursin' at ruined pelts 'til the cows come home.*`,
      region: 'new-hanover',
      chapter: 2,
      reward: 'Perfect Small Pelts',
      verified: true,
      source: 'Red Dead Wiki'
    },
    {
      id: 'qs-arthur-lodgings',
      text: "Upgrade Arthur's Lodgings ($325)",
      tip: '🗺️ Unlocks Fast Travel from camp. Huge quality of life.',
      tip_detailed: `Camp life's fine and all, but ridin' thirty minutes to Saint Denis every time gets old real quick. Upgrade **Arthur's wagon**—costs **$325** from the ledger—and you unlock **Fast Travel** right from camp.

Just walk up to the **map behind your tent** and pick your destination. No more wearin' out your horse's shoes on the same dusty roads.

🗺️ *Trust an old timer on this one. Best three hundred bucks you'll ever spend.*`,
      region: 'new-hanover',
      chapter: 2,
      reward: 'Fast Travel from Camp',
      verified: true,
      source: 'Red Dead Wiki'
    },
    {
      id: 'qs-horse-station',
      text: 'Unlock Horse Station ($300)',
      tip: '🐴 Access all your stabled horses from camp.',
      tip_detailed: `Got a stable full of fine horses but only one at camp? That's a problem. Drop **$300** in the camp ledger for the **Horse Station**, and you can summon any horse you own, right there at Horseshoe Overlook.

No more ridin' all the way to Valentine just to switch mounts. Your whole stable, waitin' on you like loyal hounds.

🐴 *For a man who appreciates good horseflesh, this ain't optional.*`,
      region: 'new-hanover',
      chapter: 2,
      reward: 'Access All Stabled Horses',
      verified: true,
      source: 'Red Dead Wiki'
    },
    {
      id: 'qs-schofield',
      text: 'Steal Schofield Revolver (Free)',
      tip: ' Valentine Doctor side business. Best early revolver.',
      tip_detailed: `The Valentine Doctor's got a side business—and I ain't talkin' about medicine. 👁️ Peek through the **back window** of his shop and you'll see somethin' suspicious. Rob the place.

In the back, there's a chest with a **Schofield Revolver**. Best sidearm you'll find this early in the game, and it don't cost you a dime—just a little moral flexibility.

🔫 *Some might call it stealin'. I call it liberatin' fine craftsmanship from undeserving hands.*`,
      region: 'new-hanover',
      chapter: 2,
      reward: 'Schofield Revolver',
      verified: true,
      source: 'Red Dead Wiki'
    },
    {
      id: 'qs-lancaster',
      text: 'Steal Lancaster Repeater (Free)',
      tip: ' Rhodes Gunsmith basement. Free the prisoner.',
      tip_detailed: `Down in ** Rhodes**, there's a Gunsmith with a secret in his basement. Walk around back, look through the window, and you'll spot a fella **locked in a cage**. Poor bastard.

Rob the store—or just knock—and make your way down to **free him**. For your trouble, you get the **Lancaster Repeater**. Finest repeater this side of the Mississippi, and it didn't cost you a cent.

🏆 *Good deed. Great gun. Sometimes the world does make sense.*`,
      region: 'lemoyne',
      chapter: 2,
      reward: 'Lancaster Repeater',
      verified: true,
      source: 'Red Dead Wiki'
    },
    {
      id: 'qs-micah-revolver',
      text: "Steal Micah's Revolver (Free)",
      tip: "🔫 Obtainable from Chapter 1! 'Old Friends' mission trick or Strawberry jail fire arrow. Unique revolver!",
      tip_detailed: `That rat **Micah Bell** carries a **unique engraved revolver**—and you can take it from him as early as **Chapter 1**. Two early methods, plus the normal Epilogue pickup:

---

🏆 **Method 1 — Chapter 1: "Old Friends" Mission (EARLIEST)**
1. During the O'Driscoll ambush, when Dutch says to take the lead
2. Kill all enemies **except one** O'Driscoll
3. **Disarm him** by punching out his weapons until he's bare-fisted
4. Lead the unarmed O'Driscoll toward **Micah** — they'll start a fistfight
5. Micah drops his revolver during the scuffle — **grab it fast!**

⚠️ May disappear from inventory at Chapter 2 start, but stays in Compendium.

---

🏹 **Method 2 — Chapter 2: Strawberry Jail (Fire Arrow Trick)**
1. Go to **Strawberry** BEFORE starting **"Blessed are the Meek?"**
2. Cause a disturbance to draw deputies out
3. Sneak into the **Sheriff's office back door**, go downstairs
4. Shoot a **Fire Arrow** through the cell bars near **Micah's left foot**
5. He drops — **pick up the revolver** through the gap (unequip off-hand first)

⚠️ May take a few tries. Leave and return if it doesn't work — Micah respawns.

---

📖 **Method 3 — Epilogue (Normal)**
Obtained naturally during the Epilogue storyline.

🔫 *Three chances to take from Micah. Don't waste 'em all.*`,
      region: 'west-elizabeth',
      chapter: 1,
      reward: "Micah's Revolver",
      verified: true,
      source: 'Community Discovery'
    }
  ]
};
