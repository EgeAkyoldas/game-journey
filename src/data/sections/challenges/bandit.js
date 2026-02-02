/**
 * Bandit Challenges
 * Enhanced with cowboy storyteller narrative
 */

export const banditChallenge = {
  id: 'bandit',
  title: 'Bandit Challenges',
  icon: '🏴‍☠️',
  defaultOpen: false,
  tip_detailed: `Embrace your **outlaw nature**. These challenges require robbery, theft, and general lawlessness.

⚠️ Honor takes a hit. Plan your crimes wisely.

*The law's just a suggestion out here.*`,
  verified: true,
  items: [
    { id: 'bandit-1', text: 'Rank 1: Hold Up 5 Townsfolk', tip: '🔫 Aim weapon at civilians, demand money. Quick and dishonorable.', verified: true },
    { id: 'bandit-2', text: 'Rank 2: Rob 2 Coaches', tip: '🚃 Road coaches or robbery missions from Alden/Hector work.', verified: true },
    { id: 'bandit-3', text: 'Rank 3: Rob 4 Registers in 1 Day', tip: '💰 Hit Valentine → Strawberry → Rhodes → Saint Denis. Fast horse required!', verified: true },
    { id: 'bandit-4', text: 'Rank 4: Rob 3 Coaches in 1 Day', tip: '🚃 Camp near roads with coach spawns. Horse stimulants help.', verified: true },
    { id: 'bandit-5', text: 'Rank 5: Amass $250 Bounty', tip: '👮 Kill lawmen in one state. Pay it off after to reset.', verified: true },
    { id: 'bandit-6', text: 'Rank 6: Steal 5 Horses → Sell to Fence', tip: '🐴 Clemens Cove horse fence (Ch3+). Steal quality horses for profit.', chapter: 3, verified: true },
    { id: 'bandit-7', text: 'Rank 7: Rob $50 From Townsfolk', tip: '💵 Hold up wealthy NPCs in Saint Denis—they carry more cash.', verified: true },
    { id: 'bandit-8', text: 'Rank 8: Steal 7 Wagons → Sell to Fence', tip: '🛒 Emerald Ranch wagon fence. Any covered wagon counts.', verified: true },
    { id: 'bandit-9', text: 'Rank 9: Hogtie 3 People to Train Tracks', tip: '🚂 Hogtie → place on tracks → wait for train. Very dishonorable.', verified: true },
    { id: 'bandit-10', text: 'Rank 10: Complete 5 Train Robberies', tip: '🚂 Without dying or getting caught. Stop trains in tunnels for easy escape.', verified: true }
  ]
};
