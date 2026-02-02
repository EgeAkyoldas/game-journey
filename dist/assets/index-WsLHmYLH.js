(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const w="rdr_";let O=null;const $e=5e3,y={save(e,t){try{localStorage.setItem(`${w}${e}`,JSON.stringify(t)),this.scheduleAutoBackup()}catch(i){console.warn("Storage save failed:",i)}},load(e,t=null){try{const i=localStorage.getItem(`${w}${e}`);return i?JSON.parse(i):t}catch(i){return console.warn("Storage load failed:",i),t}},remove(e){localStorage.removeItem(`${w}${e}`)},clearAll(){const e=[];for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);i&&i.startsWith(w)&&e.push(i)}e.forEach(t=>localStorage.removeItem(t))},getCheckboxStates(){const e={};for(let t=0;t<localStorage.length;t++){const i=localStorage.key(t);if(i&&i.startsWith(`${w}check_`)){const a=i.replace(`${w}check_`,"");e[a]=this.load(`check_${a}`,!1)}}return e},exportProgress(){const e=this.getCheckboxStates(),t=Object.values(e).filter(Boolean).length,i=Object.keys(e).length,a={version:1,appName:"The Drifter's Ledger",exportDate:new Date().toISOString(),stats:{completed:t,total:i,percentage:i>0?Math.round(t/i*100):0},preferences:{theme:this.load("theme_mode","light"),collapsedSections:this.load("collapsed_sections",[]),navCollapsedCategories:this.load("nav_collapsed_categories",[])},checkboxes:e,journal:this.load("journal","")};return JSON.stringify(a,null,2)},importProgress(e){try{const t=JSON.parse(e);return t.checkboxes&&Object.entries(t.checkboxes).forEach(([i,a])=>{this.save(`check_${i}`,a)}),t.journal&&this.save("journal",t.journal),t.preferences&&(t.preferences.collapsedSections&&this.save("collapsed_sections",t.preferences.collapsedSections),t.preferences.theme&&this.save("theme_mode",t.preferences.theme)),t.collapsedSections&&this.save("collapsed_sections",t.collapsedSections),!0}catch(t){return console.error("Import failed:",t),!1}},scheduleAutoBackup(){O&&clearTimeout(O),O=setTimeout(()=>{this.saveToLocalBackup()},$e)},saveToLocalBackup(){const e=this.exportProgress();try{localStorage.setItem(`${w}auto_backup`,e),localStorage.setItem(`${w}last_backup`,new Date().toISOString()),console.log("📦 Auto-backup saved")}catch(t){console.warn("Auto-backup failed:",t)}},getLastBackupInfo(){return{data:this.load("auto_backup",null),timestamp:this.load("last_backup",null)}},downloadBackup(){const e=this.exportProgress(),i=`drifters-ledger-${new Date().toISOString().split("T")[0]}.json`,a=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=i,o.click(),URL.revokeObjectURL(r),console.log(`📥 Downloaded: ${i}`)}},le="rdr-mode",de="rdr-ui-theme",he=[{id:"wood",name:"Wood Block",icon:"fa-tree"},{id:"ledger",name:"Ledger",icon:"fa-book"},{id:"wanted",name:"Wanted",icon:"fa-scroll"},{id:"saloon",name:"Saloon",icon:"fa-whiskey-glass"}];function ce(){const e=y.load(le,"day"),t=y.load(de,"wood");W(e,!1),F(t,!1)}function W(e,t=!0){document.body.setAttribute("data-mode",e);const i=document.getElementById("mode-toggle");if(i){const a=i.querySelector("i");a&&(a.className=e==="night"?"fa-solid fa-sun":"fa-solid fa-moon"),i.title=e==="night"?"Switch to Day Mode":"Switch to Night Mode"}t&&y.save(le,e)}function ue(){const e=document.body.getAttribute("data-mode")||"day";W(e==="day"?"night":"day")}function F(e,t=!0){var a;document.body.setAttribute("data-ui-theme",e),document.querySelectorAll("[data-theme-id]").forEach(r=>{r.classList.toggle("active",r.dataset.themeId===e)});const i=document.querySelector(".nav-title");i&&(i.textContent=((a=he.find(r=>r.id===e))==null?void 0:a.name)||"Ledger"),t&&y.save(de,e)}function Ie(){const e=document.body.getAttribute("data-ui-theme")||"wood";return`<div class="theme-selector">${he.map(i=>`
    <button 
      class="theme-btn theme-btn--${i.id} ${i.id===e?"active":""}" 
      data-theme-id="${i.id}"
      title="${i.name}"
    >
      <i class="fa-solid ${i.icon}"></i>
    </button>
  `).join("")}</div>`}function _e(){const e=document.body.getAttribute("data-mode")==="night";return`
    <button class="mode-toggle" id="mode-toggle" title="${e?"Switch to Day Mode":"Switch to Night Mode"}">
      <i class="fa-solid ${e?"fa-sun":"fa-moon"}"></i>
    </button>
  `}function pe(){document.addEventListener("click",e=>{const t=e.target.closest("[data-theme-id]");if(t){F(t.dataset.themeId);return}e.target.closest("#mode-toggle")&&ue()})}typeof window<"u"&&(window.toggleMode=ue,window.setUITheme=F);const Ne={id:"quickstart",title:"Quick Start Guide",icon:"⭐",defaultOpen:!0,items:[{id:"qs-legendary-buck",text:"Hunt Legendary Buck FIRST",tip:" West of Strawberry. The Buck Antler Trinket increases perfect pelt chances.",tip_detailed:`Now listen here, partner—before you go chasin' deer across three counties, do yourself a favor and bag that **Legendary Buck**. He roams the woods ** west of Strawberry**, a ghost of white fur between the pines.

Put him down, haul his antler to the **Fence**, and get yourself that **Buck Antler Trinket**. From that moment on, every pelt you skin's got a better chance of comin' out **one star cleaner** than the Good Lord intended.

⚠️ *I've seen greenhorns waste weeks huntin' perfect pelts the hard way. Don't be one of 'em.*`,priority:!0,region:"west-elizabeth",chapter:2,rewards:["Buck Antler Trinket","+1 Pelt Quality"],verified:!0,source:"Red Dead Wiki"},{id:"qs-limpany-gold",text:"Grab Limpany Gold Bar ($500)",tip:" Burned town south of Valentine. Sheriff's desk has a lockbox.",tip_detailed:`There's a ghost town called **Limpany**,  **south of Valentine**—burned to ash years back. Nobody alive to tell the tale, but the fire left somethin' behind.

Head into what's left of the **Sheriff's office**. Under all that soot and ruin, there's a **lockbox in his desk**. Crack it open and you'll find yourself **$500 richer**.

💰 *Easy money, friend. The dead ain't got no use for gold.*`,region:"new-hanover",chapter:2,reward:"$500 Gold Bar",verified:!0,source:"Red Dead Wiki"},{id:"qs-leather-working",text:"Donate $225 for Leather Working Tools",tip:"📋 Camp ledger. Required to craft satchels at Pearson.",tip_detailed:`You want them fancy satchels? The ones that let you carry **twice the tonics**, **twice the ammo**? Then you best open that **camp ledger** and donate **$225** for Leather Working Tools.

Once Pearson's got the right equipment, he can stitch you up satchels that'll change how you ride. The **Legend of the East Satchel**? That's the holy grail, friend. Holds damn near everything.

🎯 *It ain't charity—it's an investment in your own hide.*`,region:"new-hanover",chapter:2,rewards:["Satchel Crafting","Legend of the East Satchel access"],verified:!0,source:"Red Dead Wiki"},{id:"qs-varmint-rifle",text:"Buy Varmint Rifle ($72)",tip:"🔫 Essential for perfect small animal pelts. Any Gunsmith.",tip_detailed:`Every hunter worth his salt knows—you don't shoot a rabbit with a repeater unless you want rabbit stew instead of a pelt.

The **Varmint Rifle**'s your best friend for small game. 🐿️ Squirrels, 🐰 rabbits, 🦆 birds—this little beauty drops 'em clean without tearin' up the hide.

💰 **$72** at any Gunsmith. Cheap as dirt for what it does. ⚠️ *Without it, you'll be cursin' at ruined pelts 'til the cows come home.*`,region:"new-hanover",chapter:2,reward:"Perfect Small Pelts",verified:!0,source:"Red Dead Wiki"},{id:"qs-arthur-lodgings",text:"Upgrade Arthur's Lodgings ($325)",tip:"🗺️ Unlocks Fast Travel from camp. Huge quality of life.",tip_detailed:`Camp life's fine and all, but ridin' thirty minutes to Saint Denis every time gets old real quick. Upgrade **Arthur's wagon**—costs **$325** from the ledger—and you unlock **Fast Travel** right from camp.

Just walk up to the **map behind your tent** and pick your destination. No more wearin' out your horse's shoes on the same dusty roads.

🗺️ *Trust an old timer on this one. Best three hundred bucks you'll ever spend.*`,region:"new-hanover",chapter:2,reward:"Fast Travel from Camp",verified:!0,source:"Red Dead Wiki"},{id:"qs-horse-station",text:"Unlock Horse Station ($300)",tip:"🐴 Access all your stabled horses from camp.",tip_detailed:`Got a stable full of fine horses but only one at camp? That's a problem. Drop **$300** in the camp ledger for the **Horse Station**, and you can summon any horse you own, right there at Horseshoe Overlook.

No more ridin' all the way to Valentine just to switch mounts. Your whole stable, waitin' on you like loyal hounds.

🐴 *For a man who appreciates good horseflesh, this ain't optional.*`,region:"new-hanover",chapter:2,reward:"Access All Stabled Horses",verified:!0,source:"Red Dead Wiki"},{id:"qs-schofield",text:"Steal Schofield Revolver (Free)",tip:" Valentine Doctor side business. Best early revolver.",tip_detailed:`The Valentine Doctor's got a side business—and I ain't talkin' about medicine. 👁️ Peek through the **back window** of his shop and you'll see somethin' suspicious. Rob the place.

In the back, there's a chest with a **Schofield Revolver**. Best sidearm you'll find this early in the game, and it don't cost you a dime—just a little moral flexibility.

🔫 *Some might call it stealin'. I call it liberatin' fine craftsmanship from undeserving hands.*`,region:"new-hanover",chapter:2,reward:"Schofield Revolver",verified:!0,source:"Red Dead Wiki"},{id:"qs-lancaster",text:"Steal Lancaster Repeater (Free)",tip:" Rhodes Gunsmith basement. Free the prisoner.",tip_detailed:`Down in ** Rhodes**, there's a Gunsmith with a secret in his basement. Walk around back, look through the window, and you'll spot a fella **locked in a cage**. Poor bastard.

Rob the store—or just knock—and make your way down to **free him**. For your trouble, you get the **Lancaster Repeater**. Finest repeater this side of the Mississippi, and it didn't cost you a cent.

🏆 *Good deed. Great gun. Sometimes the world does make sense.*`,region:"lemoyne",chapter:2,reward:"Lancaster Repeater",verified:!0,source:"Red Dead Wiki"}]},Ge={id:"treasures",title:"Treasure Hunts",icon:"💎",defaultOpen:!0,items:[{id:"treasure-jack-hall",text:"Jack Hall Gang Treasure",tip:"💰 Reward: 2 Gold Bars ($1000). Required for 100%.",tip_detailed:`The **Jack Hall Gang** buried their loot decades ago, and the maps still exist. Follow the trail through three locations to claim **2 Gold Bars**.

🎯 **Required for 100% completion.**

*Old money, waitin' for someone with enough gumption to find it.*`,reward:"2 Gold Bars ($1000)",verified:!0,subItems:[{id:"jack-hall-1",text:"Map 1: Buy from Maximo",tip:" NW of Flatneck Station. Treasure hunter on ridge. $10 (or $5 if haggle).",tip_detailed:`**Maximo** is a treasure hunter camped on a ridge **northwest of Flatneck Station**, overlooking the river.

💰 He'll sell you the first map for **$10** (haggle to **$5**). Or... rob him. Your call.

*The man's a fool for sellin' treasure maps. But his loss is your gain.*`,region:"new-hanover",verified:!0},{id:"jack-hall-2",text:"Map 2: Caliban's Seat",tip:" Rock formation south of Valentine. Climb from SE side.",tip_detailed:`**Caliban's Seat** is a rock formation **south of Valentine**. Tricky to climb.

 Approach from the **SE side**, follow the path along the cliff edge. Look for the map in a **hollow rock**—a hole in white granite.

*Height ain't for everyone. Watch your step.*`,region:"new-hanover",verified:!0},{id:"jack-hall-3",text:"Map 3: Cotorra Springs",tip:" West end of springs. Circle of rock formations. Pearl Necklace bonus.",tip_detailed:`**Cotorra Springs** - the geysers in Ambarino. Head to the **west end** where the rock formations stand in a circle.

 Search the **central rock pile**. Map's tucked in there, plus a **Pearl Necklace** bonus.

*Hot water, cold treasure. Nature's irony.*`,region:"ambarino",reward:"Pearl Necklace",verified:!0},{id:"jack-hall-final",text:"TREASURE: O'Creagh's Run Island",tip:"🏆 Small island in lake. Rock on SE side. 2 GOLD BARS!",tip_detailed:`The treasure lies on a **small island in O'Creagh's Run** lake (where Hamish lives).

 Swim or boat out there. Search the **rock on the SE side** of the island.

💰 **2 GOLD BARS** - $1000 in your pocket!

*The Jack Hall Gang's long gone. Their gold lives on.*`,priority:!0,reward:"2 Gold Bars ($1000)",region:"new-hanover",verified:!0}]},{id:"treasure-high-stakes",text:"High Stakes Treasure",tip:"💰 Reward: 3 Gold Bars ($1500). Required for 100%.",tip_detailed:`The **High Stakes Treasure** lived up to its name—the original hunters literally died trying. Their loss is your gain.

💰 **3 Gold Bars** at the end.
🎯 **Required for 100% completion.**

*High stakes indeed. Lives were lost over this gold.*`,reward:"3 Gold Bars ($1500)",verified:!0,subItems:[{id:"high-stakes-1",text:"Map 1: Save/Rob Stranger",tip:" Random encounter after Chapter 3. Man hanging from cliff near Cumberland Falls.",tip_detailed:`After completing **"The New South"** in Chapter 3, you may encounter a treasure hunter **hanging from a cliff** near Cumberland Falls.

📋 **Options:**
• **Save him** - He gives you the map as thanks
• **Let him fall** - Loot the map from his body

*Either way, that map's yours.*`,chapter:3,region:"new-hanover",verified:!0},{id:"high-stakes-2",text:"Map 2: Cumberland Falls",tip:" Behind the waterfall! Climb LEFT side rocks, enter cave.",tip_detailed:`**Cumberland Falls** hides a secret—a cave **behind the waterfall**.

 Climb the rocks on the **LEFT side**, make your way around to the **cave entrance**. Chest against the wall inside.

💧 *Classic treasure spot. Behind every waterfall, there's somethin' hidden.*`,region:"new-hanover",verified:!0},{id:"high-stakes-3",text:"Map 3: Barrow Lagoon",tip:" Frozen pond NE of Mount Hagen. Under fallen tree on east shore.",tip_detailed:`**Barrow Lagoon** is a frozen pond in the Ambarino mountains, **northeast of Mount Hagen**.

 Find the **fallen tree on the east shore**. Map's tucked underneath.

❄️ *Dress warm. Frostbite don't care about treasure.*`,region:"ambarino",verified:!0},{id:"high-stakes-final",text:"TREASURE: Above Fort Wallace",tip:"🏆 Cliff ABOVE fort on east side. DO NOT enter fort! 3 GOLD BARS!",tip_detailed:`The treasure is on the **cliff ABOVE Fort Wallace**, not inside it.

⚠️ **DO NOT enter the fort!** Soldiers will shoot on sight and you'll get a massive bounty.

 Approach from above, **east side cliff**. Jump down carefully to the ledge.

💰 **3 GOLD BARS** - $1500!

*The army guards nothin'. The treasure's right over their heads.*`,priority:!0,reward:"3 Gold Bars ($1500)",region:"new-hanover",verified:!0}]},{id:"treasure-poisonous-trail",text:"Poisonous Trail Treasure",tip:"💰 Reward: 4 Gold Bars ($2000). HIGHEST PAYOUT! Required for 100%.",tip_detailed:`The **Poisonous Trail Treasure** is the biggest single payout in the treasure hunt game—**4 Gold Bars**, worth $2000.

🎯 **Required for 100% completion.**

*Whoever buried this didn't want it found. They almost succeeded.*`,reward:"4 Gold Bars ($2000)",priority:!0,verified:!0,subItems:[{id:"poison-1",text:"Map 1: Cairn Lake Cabin",tip:" Frozen lake cabin in Ambarino. Map pinned to wall inside.",tip_detailed:`**Cairn Lake** - a small frozen lake with a **cabin on the shore**.

 Go inside, find the map **pinned to the wall**.

❄️ *The cold preserved it well. Almost like it was waitin' for you.*`,region:"ambarino",verified:!0},{id:"poison-2",text:"Map 2: Face Rock (Facu Rock)",tip:' West of Ringneck Creek. Giant face carved in rock. Map in "mouth".',tip_detailed:`**Face Rock** - a massive natural stone formation that looks like a face, **west of Ringneck Creek**.

 The map is hidden in the **"mouth" hole** at the base of the formation.

🗿 *Nature's got a sense of humor. So did whoever hid this map.*`,region:"new-hanover",verified:!0},{id:"poison-3",text:"Map 3: Elysian Pool Cave",tip:" Cave BEHIND Elysian Pool waterfall! BRING LANTERN. Dangerous bats.",tip_detailed:`**Elysian Pool** has a waterfall, and behind it is a **massive cave system**.

 Enter behind the waterfall. You'll need a **lantern**—it's pitch black. Watch out for **aggressive bats**.

⚠️ *This cave is creepy. Go deep enough and you'll find... things.*`,region:"new-hanover",verified:!0},{id:"poison-final",text:"TREASURE: Lighthouse Area",tip:"🏆 North of lighthouse, south of Van Horn. Stone pile near coast. 4 GOLD BARS!",tip_detailed:`The treasure is **north of the Van Horn lighthouse**, along the coast.

 Look for a **stone pile** near the shore. Dig around and claim your prize.

💰 **4 GOLD BARS** - $2000! The biggest treasure haul in the game!

*Poison trail led to pure gold. Worth every step.*`,priority:!0,reward:"4 Gold Bars ($2000)",region:"new-hanover",verified:!0}]},{id:"treasure-le-tresor",text:"Le Tresor Des Morts",tip:"⭐ Special/Ultimate Edition ONLY. 6 Gold Bars ($3000)!",tip_detailed:`**Le Tresor Des Morts** ("The Treasure of the Dead") is **exclusive to Special/Ultimate Edition** owners.

💰 **6 Gold Bars** - the single biggest treasure in the game!

⭐ *If you've got the fancy edition, don't miss this one.*`,reward:"6 Gold Bars ($3000)",verified:!0,subItems:[{id:"le-tresor-1",text:"Map 1: Burned Settlement (Limpany)",tip:" Limpany ruins SW of Horseshoe Overlook. Jailhouse corpse has map.",tip_detailed:`**Limpany** - the burned-out town southwest of Horseshoe Overlook.

 Find the **jailhouse** (still standing). Inside is a **corpse with the map**.

🔥 *The dead keep their secrets. 'Til you come along.*`,region:"new-hanover",verified:!0},{id:"le-tresor-2",text:"Map 2: Saint Denis Docks",tip:" Cornwall Freight Station underground passage. Check wall near crate.",tip_detailed:`In **Saint Denis**, find the **Cornwall Freight Station**. There's an underground passage connecting the yard to the harbor.

 Check the **wall near a wooden crate** in the passage.

🏭 *Industrial secrets in an industrial city.*`,region:"lemoyne",verified:!0},{id:"le-tresor-final",text:"TREASURE: Saint Denis Cemetery",tip:"🏆 Mausoleum with stained glass, west of central dome. Left wall. 6 GOLD BARS!",tip_detailed:`The treasure rests in the **Saint Denis Cemetery**.

 Find the **mausoleum with a stained glass window**, west of the central dome. Inspect the **left wall inside**.

💰 **6 GOLD BARS** - $3000! The richest treasure in the game!

*The dead gave up their gold. Spend it well.*`,priority:!0,reward:"6 Gold Bars ($3000)",region:"lemoyne",verified:!0}]},{id:"treasure-elemental",text:"Elemental Trail Treasure",tip:"🌿 Tree carvings lead to treasure. 2 Gold Bars ($1000).",tip_detailed:`The **Elemental Trail** is marked by **carvings on trees**—symbols representing Earth, Water, and Fire. Follow them to treasure.

💰 **2 Gold Bars** at the end.

*Someone marked this trail long ago. For those clever enough to follow.*`,reward:"2 Gold Bars ($1000)",verified:!0,subItems:[{id:"elemental-1",text:"Tree 1: Window Rock Area",tip:" Near Window Rock. Tree with Earth symbol carving.",tip_detailed:`First tree is **near Window Rock**. Look for the **Earth symbol** carved into the bark.

🌿 *The first element. The foundation.*`,region:"new-hanover",verified:!0},{id:"elemental-2",text:"Tree 2: Elysian Pool Area",tip:" Near Elysian Pool. Tree with Water symbol.",tip_detailed:`Second tree is **near Elysian Pool**. The **Water symbol** carved here.

💧 *Where water flows, clues follow.*`,region:"new-hanover",verified:!0},{id:"elemental-3",text:"Tree 3: Fort Brennand Area",tip:" Near Fort Brennand. Tree with Fire symbol.",tip_detailed:`Third tree is **near Fort Brennand**. The **Fire symbol** completes the set.

🔥 *Earth, Water, Fire. Now combine them.*`,region:"new-hanover",verified:!0},{id:"elemental-final",text:"TREASURE: Mount Shann Sundial",tip:"🏆 Summit of Mount Shann. Behind the sundial stone. 2 GOLD BARS!",tip_detailed:`The treasure waits at the **summit of Mount Shann**, behind the ancient **sundial stone structure**.

 It's a climb, but the view alone is worth it.

💰 **2 GOLD BARS** - $1000!

*The elements led you here. Claim your reward.*`,priority:!0,reward:"2 Gold Bars ($1000)",region:"west-elizabeth",verified:!0}]},{id:"treasure-mended",text:"Torn (Mended) Treasure Map",tip:"🗺️ Two hermits have map halves. Reward: Otis Miller's Revolver!",tip_detailed:`The **Mended Treasure Map** is torn in two—each half held by a different hermit. Both are hostile.

🔫 **Reward:** The legendary **Otis Miller's Revolver**!

*Two crazy hermits, one legendary gun.*`,reward:"Otis Miller's Revolver",verified:!0,subItems:[{id:"mended-1",text:"Map Half 1: Hermit Cabin (Manito Glade)",tip:" North of Annesburg. Aggressive hermit with shotgun!",tip_detailed:`First hermit lives in **Manito Glade**, north of Annesburg.

⚠️ **HOSTILE** - He's got a shotgun and ain't shy about usin' it. Check the **drawer inside** after dealing with him.

🏚️ *Some folks just want to be left alone. Too bad for him.*`,region:"new-hanover",verified:!0},{id:"mended-2",text:"Map Half 2: Hermit Woman Cabin",tip:" NW West Elizabeth. Follow Little Creek River. Another hostile hermit.",tip_detailed:`Second hermit is a woman, equally unfriendly. Her cabin is **northwest of West Elizabeth**, follow Little Creek River.

⚠️ **HOSTILE** - Same deal. Take what you need.

🏚️ *What is it with hermits and treasure maps?*`,region:"west-elizabeth",verified:!0},{id:"mended-final",text:"TREASURE: New Austin (Epilogue)",tip:"🏆 ⚠️ EPILOGUE ONLY. Cholla Springs. Otis Miller's Revolver + bonus!",tip_detailed:`The treasure is in **Cholla Springs, New Austin**.

⚠️ **EPILOGUE ONLY** - Arthur can't safely access this area.

🔫 **Reward:** **Otis Miller's Revolver** - a unique weapon with history! Plus some... *interesting* bonus photos.

*The legendary outlaw's gun is yours. Live up to the name.*`,priority:!0,reward:"Otis Miller's Revolver",chapter:"epilogue",region:"new-austin",verified:!0}]},{id:"treasure-statues",text:"Strange Statues Puzzle",tip:"🧩 Cave behind Window Rock. Press ONLY prime numbers (2,3,5,7). 3 Gold Bars!",tip_detailed:`In a **cave behind Window Rock**, there are 7 strange statues with buttons. It's a puzzle.

🧩 **Solution:** Press buttons on statues **2, 3, 5, and 7** ONLY. These are prime numbers.

💰 **3 Gold Bars** fall out of the central statue!

*Math class finally pays off.*`,reward:"3 Gold Bars ($1500)",priority:!0,region:"new-hanover",verified:!0},{id:"treasure-train-wreck",text:"Train Wreck Gold Bar",tip:" North of Cotorra Springs. Wrecked train in gorge. Lockbox in baggage car.",tip_detailed:`There's a **wrecked train** in a gorge **north of Cotorra Springs**. Crashed long ago, left to rot.

 Climb into the **baggage car** and find the lockbox.

💰 **1 Gold Bar** - $500!

*Someone else's tragedy, your windfall.*`,reward:"1 Gold Bar ($500)",region:"ambarino",verified:!0},{id:"treasure-limpany",text:"Limpany Sheriff Office Gold Bar",tip:" Burned town Limpany. Sheriff desk lockbox. May respawn!",tip_detailed:`**Limpany** - the burned ghost town southwest of Horseshoe Overlook.

 Find the **Sheriff's office** (still standing). Check the **desk lockbox**.

💰 **1 Gold Bar** - and rumor has it, **this one can respawn** after enough time passes!

*Easy money. Visit early and often.*`,reward:"1 Gold Bar ($500)",region:"new-hanover",verified:!0},{id:"treasure-braithwaite",text:"Braithwaite Manor Gold Bar",tip:" After manor burns in Chapter 4. Search ruins carefully.",tip_detailed:`After the **Braithwaite Manor burns** in Chapter 4, return to the ruins.

 Search carefully through the rubble. There's a **lockbox hidden** in the debris.

💰 **1 Gold Bar** - spoils of war.

*The Braithwaites lost everything. Including this.*`,reward:"1 Gold Bar ($500)",chapter:4,region:"lemoyne",verified:!0}]},We={id:"strangers",title:"Stranger Missions",icon:"❓",defaultOpen:!1,items:[{id:"stranger-gunslingers",text:"The Noblest of Men, and a Woman",tip:"🔫 Valentine Saloon. Track 5 legendary gunslingers for Theodore Levin.",tip_detailed:`**Theodore Levin** is writing a biography on the Old West's greatest gunslingers. He needs your help tracking them down.

 **Start:** Valentine Saloon with Theodore Levin
📋 **Objective:** Find and photograph (or duel) 5 legendary gunslingers

🏆 **Rewards:** 4 Unique Revolvers + $350

*Each gunslinger has a story. Most of them end badly.*`,chapter:2,reward:"4 Unique Revolvers, $350",region:"new-hanover",verified:!0,subItems:[{id:"guns-emmet",text:"Defeat Emmet Granger",tip:" Farm east of Flatneck Station. Clean pigsty, then duel.",tip_detailed:`**Emmet Granger** - a pig farmer with a deadly past.

 **Location:** Farm east of Flatneck Station
📋 **Approach:** He makes you clean his pigsty first. Then you duel.

⚠️ *Emmet buries bodies in the pig pen. Don't join them.*`,reward:"Granger's Revolver",region:"new-hanover",verified:!0},{id:"guns-flaco",text:"Defeat Flaco Hernandez",tip:" Cairn Lake cabin, Ambarino. Fight gang, then duel.",tip_detailed:`**Flaco Hernandez** - hiding in the frozen mountains with his gang.

 **Location:** Cairn Lake cabin, Ambarino
📋 **Approach:** Fight through his gang first, then duel Flaco.

❄️ *Bring warm clothes. It's cold up there.*`,reward:"Flaco's Revolver",region:"ambarino",verified:!0},{id:"guns-billy",text:"Defeat Billy Midnight",tip:" Rhodes train station. Chase on train, duel on roof.",tip_detailed:`**Billy Midnight** - a coward who runs. You chase him on the train.

 **Location:** Rhodes train station
📋 **Approach:** He boards the train. Chase him through the cars. Duel on the roof.

🚂 *Billy talks big but runs faster. Catch him.*`,reward:"Midnight's Pistol",region:"lemoyne",verified:!0},{id:"guns-belle",text:"Help Black Belle",tip:" Bluewater Marsh. Defend from bounty hunters (no duel).",tip_detailed:`**Black Belle** - the only one who's actually nice to you. She's being hunted.

 **Location:** Bluewater Marsh
📋 **Approach:** No duel—help her fight off the bounty hunters instead.

💪 *She's the real deal. And she survives.*`,reward:"Photo for Levin",region:"lemoyne",verified:!0},{id:"guns-slim",text:"Rescue Slim Grant",tip:" Annesburg sheriff → rescue Grant from bandits.",tip_detailed:`**Slim Grant** - captured by bandits.

 **Start:** Talk to the Annesburg sheriff
📋 **Objective:** Rescue Slim from the bandits`,region:"new-hanover",verified:!0},{id:"guns-calloway",text:"Final: Duel Jim Boy Calloway",tip:" Saint Denis riverboat. Final confrontation.",tip_detailed:`**Jim Boy Calloway** - Theodore Levin's subject turns out to be the real legend.

 **Location:** Saint Denis riverboat
📋 **Finale:** The biographer becomes the story. Duel Calloway.

⚠️ **Can be missable** depending on story progression.

*Calloway was the legend all along. Now prove you're better.*`,reward:"Calloway's Revolver",missable:!0,region:"lemoyne",verified:!0}]},{id:"stranger-dinosaur-bones",text:"A Test of Faith (Dinosaur Bones)",tip:"🦴 Deborah MacGuiness SE of Horseshoe Overlook. Find 30 bones.",tip_detailed:`**Deborah MacGuiness** is a paleontologist searching for dinosaur bones. She needs your help finding 30 of them.

 **Start:** Southeast of Horseshoe Overlook
📋 **Objective:** Find 30 dinosaur bones and mail their locations

🏆 **Rewards:**
• Mail 1 bone → Quartz Chunk (talisman ingredient)
• Mail all 30 → Jawbone Knife (unique weapon)

*Ancient creatures, modern science. Help Deborah make history.*`,chapter:2,reward:"Quartz Chunk, Skull Statue, Jawbone Knife",verified:!0,subItems:[{id:"bone-01",text:"Heartlands: Oil Field",tip:" Bottom of well under oil derrick at Heartlands Oil Fields",region:"new-hanover",verified:!0},{id:"bone-02",text:"Heartlands: Dewberry Creek West",tip:" West of Dewberry Creek, open rocky area",region:"new-hanover",verified:!0},{id:"bone-03",text:"Scarlett Meadows: Dewberry Creek South",tip:" South of Dewberry Creek, in the open",region:"lemoyne",verified:!0},{id:"bone-04",text:"Heartlands: Flatneck Station",tip:" Grassy hill east of Flatneck Station, near railroad",region:"new-hanover",verified:!0},{id:"bone-05",text:"Heartlands: Caliban's Seat",tip:" SW of Caliban's Seat, along Dakota River cliff. Use Dead Eye",region:"new-hanover",verified:!0},{id:"bone-06",text:"Heartlands: Abandoned Shack",tip:' South of abandoned cabin, north of "O" in New Hanover',region:"new-hanover",verified:!0},{id:"bone-07",text:"Heartlands: Dried River Gorge",tip:" Follow dried river from Oil Rig to source, left bank",region:"new-hanover",verified:!0},{id:"bone-08",text:"Cumberland: Six Point Overlook",tip:" Top of southeastern edge of Six Point Overlook",region:"new-hanover",verified:!0},{id:"bone-09",text:"Cumberland: Bacchus Station",tip:" Near Bacchus Station, ridge next to spiked rock",region:"new-hanover",verified:!0},{id:"bone-10",text:"Grizzlies: Dakota River North",tip:" North side of Dakota River, north of Valentine, rock cliff",region:"ambarino",verified:!0},{id:"bone-11",text:"Grizzlies: Fort Wallace Ledge",tip:" NW of Fort Wallace, high ledge from Cotorra Springs",region:"ambarino",verified:!0},{id:"bone-12",text:"Grizzlies: Calumet Ravine",tip:" North of Donner Falls, hill off path behind rocks",region:"ambarino",verified:!0},{id:"bone-13",text:"Grizzlies: O'Creagh's Run Overlook",tip:' Grizzlies East mountaintop, near "S" in East',region:"ambarino",verified:!0},{id:"bone-14",text:"Grizzlies: Northern Boundary",tip:" North road at Grizzlies East → south up hill, flowery grove",region:"ambarino",verified:!0},{id:"bone-15",text:"Roanoke: O'Creagh's Run East",tip:" East of O'Creagh's Run, railroad junction near 'R'",region:"new-hanover",verified:!0},{id:"bone-16",text:"Roanoke: Brandywine Drop",tip:" Up Roanoke Ridge near Brandywine Drop waterfall",region:"new-hanover",verified:!0},{id:"bone-17",text:"Roanoke: Kamassa River",tip:' West bank between "R and I" in River, middle ridge',region:"new-hanover",verified:!0},{id:"bone-18",text:"Roanoke: Van Horn North",tip:" NW of Van Horn, among trees off road heading north",region:"new-hanover",verified:!0},{id:"bone-19",text:"Lemoyne: Scarlett Meadows Creek",tip:' Under "L" of Lemoyne, small creek, ribcage in rocks',region:"lemoyne",verified:!0},{id:"bone-20",text:"Big Valley: Northern Cave",tip:" North from Wallace Station, cave entrance at bottom of slope",region:"west-elizabeth",verified:!0},{id:"bone-21",text:"Big Valley: Rocky Slope",tip:' Next to "W" in West Elizabeth, rocky slope near top',region:"west-elizabeth",verified:!0},{id:"bone-22",text:"Big Valley: Beryl's Dream",tip:' Near Mount Shann, top of winding "S" road',region:"west-elizabeth",verified:!0},{id:"bone-23",text:"Gaptooth: South Tumbleweed",tip:' ⚠️ EPILOGUE. South of "L" in Tumbleweed, ridge overlooking plain',chapter:"epilogue",region:"new-austin",verified:!0},{id:"bone-24",text:"Gaptooth: North Tumbleweed",tip:' ⚠️ EPILOGUE. Between "D and G" in Gaptooth Ridge, canyon summit',chapter:"epilogue",region:"new-austin",verified:!0},{id:"bone-25",text:"Cholla Springs: Rattlesnake Hollow",tip:" ⚠️ EPILOGUE. West of Rattlesnake Hollow, base of ridge",chapter:"epilogue",region:"new-austin",verified:!0},{id:"bone-26",text:"Cholla Springs: Jorge's Gap",tip:" ⚠️ EPILOGUE. Western ridge of Jorge's Gap, north of Mercer Station",chapter:"epilogue",region:"new-austin",verified:!0},{id:"bone-27",text:"Rio Bravo: San Luis River West",tip:" ⚠️ EPILOGUE. SW of Fort Mercer, ridge overlooking San Luis River",chapter:"epilogue",region:"new-austin",verified:!0},{id:"bone-28",text:"Rio Bravo: Del Lobo Rock",tip:" ⚠️ EPILOGUE. SE of Fort Mercer, high ridge, southern tip",chapter:"epilogue",region:"new-austin",verified:!0},{id:"bone-29",text:"Hennigan's Stead: Pike's Basin",tip:" ⚠️ EPILOGUE. NE of Armadillo, western route above dried river",chapter:"epilogue",region:"new-austin",verified:!0},{id:"bone-30",text:"Hennigan's Stead: San Luis North",tip:' ⚠️ EPILOGUE. North of "San" in San Luis, small shore',chapter:"epilogue",region:"new-austin",verified:!0}]},{id:"stranger-rock-carvings",text:"Geology for Beginners (Rock Carvings)",tip:"🗿 Francis Sinclair NW of Strawberry. Find 10 carvings. Time travel mystery!",tip_detailed:`**Francis Sinclair** is... strange. He has a birthmark that looks like a map. He wants you to find 10 rock carvings.

 **Start:** Northwest of Strawberry
📋 **Objective:** Find 10 rock carvings and mail their locations

🏆 **Reward:** Old Brass Compass (Raven Claw Talisman ingredient)

⏰ *Something's not right about Francis. The ending reveals why.*`,chapter:2,reward:"Raven Claw Talisman ingredient",verified:!0,subItems:[{id:"carving-01",text:"Mount Hagen",tip:" Very top of Mount Hagen, Grizzlies West",region:"ambarino",verified:!0},{id:"carving-02",text:"Whinyard Strait",tip:" Rock ledge north of wooden bridge crossing Whinyard Strait",region:"ambarino",verified:!0},{id:"carving-03",text:"Dakota River: Bacchus Station",tip:" Cliff overlooking Dakota River, south of Bacchus Station",region:"new-hanover",verified:!0},{id:"carving-04",text:"Dakota River: Rope Bridge",tip:" Ledge beneath cliff, directly above rope bridge",region:"new-hanover",verified:!0},{id:"carving-05",text:"Owanjila Lake",tip:" Southwest shore, opposite Owanjila Dam",region:"west-elizabeth",verified:!0},{id:"carving-06",text:"Mount Shann",tip:" Near the peak of Mount Shann",region:"west-elizabeth",verified:!0},{id:"carving-07",text:"Horseshoe Overlook",tip:" Cliff overlooking burned settlement, SW of Horseshoe Overlook",region:"new-hanover",verified:!0},{id:"carving-08",text:"Heartland Overflow",tip:" Edge of plateau above Heartland Overflow, south from Moonstone Pond",region:"new-hanover",verified:!0},{id:"carving-09",text:"Roanoke Ridge",tip:" Rock ledge near top, directly east from Deer Cottage",region:"new-hanover",verified:!0},{id:"carving-10",text:"Elysian Pool",tip:" Near east shore of Elysian Pool",region:"new-hanover",verified:!0}]},{id:"stranger-veteran",text:"The Veteran (Hamish Sinclair)",tip:"🎖️ O'Creagh's Run. Beautiful friendship storyline. Get Buell the horse!",tip_detailed:`**Hamish Sinclair** is a Civil War veteran living alone at O'Creagh's Run. His friendship with Arthur is one of the most beautiful in the game.

 **Start:** O'Creagh's Run, Grizzlies East

🏆 **Final Reward:** **Buell** - a unique gold Cremello horse

⚠️ **MISSABLE** - Complete before Chapter 6 ends!

*Hamish deserves better than what happens. But Buell will remember him.*`,chapter:6,reward:"Buell (unique gold horse)",missable:!0,region:"new-hanover",verified:!0,subItems:[{id:"veteran-01",text:"Part 1: Recover Buell",tip:" Find Hamish by rock at O'Creagh's Run. Catch his horse Buell.",tip_detailed:"Meet Hamish sitting by a rock, calling for his horse. Help catch **Buell**.",verified:!0},{id:"veteran-02",text:"Part 2: Fishing Trip",tip:' After 1 day. Catch "The Great Tyrant" legendary pike. 6AM-6PM only.',tip_detailed:`Go fishing with Hamish. You're hunting a legendary pike called "The Great Tyrant."

⏰ **Daytime only** (6AM-6PM)`,verified:!0},{id:"veteran-03",text:"Part 3: Wolf Hunt",tip:" After 1 day. Hunt wolves with Hamish. Watch for ambush!",tip_detailed:"Hunt wolves together. The pack will ambush—protect Hamish.",verified:!0},{id:"veteran-04",text:"Part 4: Giant Boar Hunt",tip:" Final part. Hamish dies. Kill boar, inherit Buell.",tip_detailed:`The final hunt. Hamish is killed by the giant boar.

💔 Kill the boar and take **Buell** as Hamish would have wanted.

🏆 **Reward:** Buell becomes your horse + Giant Boar Tusk`,reward:"Buell the Horse",missable:!0,verified:!0}]},{id:"stranger-widow",text:"The Widow (Charlotte Balfour)",tip:"💔 Willard's Rest, north of Annesburg. Teach a widow to survive.",tip_detailed:`**Charlotte Balfour** is a city woman whose husband just died. She has no idea how to survive in the wilderness.

 **Start:** Willard's Rest, north of Annesburg

📋 **Objective:** Teach her to hunt and survive

⚠️ **MISSABLE** - Complete before Chapter 6 ends!

*Arthur teaches her to live. In return, she gives him hope.*`,chapter:6,reward:"Honor boost, Supplies",missable:!0,region:"new-hanover",verified:!0,subItems:[{id:"widow-01",text:"Part 1: First Meeting",tip:" Find Charlotte mourning her husband. Give her food.",verified:!0},{id:"widow-02",text:"Part 2: Hunting Lesson",tip:" After 1 day. Teach her to hunt rabbits with a rifle.",verified:!0},{id:"widow-03",text:"Part 3: Self-Defense",tip:" Final visit. She has learned to survive.",tip_detailed:`Charlotte has learned. She can take care of herself now.

⚠️ **Visit her again in the Epilogue as John for closure.**`,missable:!0,verified:!0}]},{id:"stranger-albert-mason",text:"Arcadia for Amateurs (Albert Mason)",tip:"📸 Wildlife photographer needs help. Random encounters across map.",tip_detailed:`**Albert Mason** is a wildlife photographer from New York who keeps getting into trouble with the animals he's trying to photograph.

📋 **Random encounters** - he appears at different locations

🏆 **Total Reward:** $150

📸 *Albert's ambitious but hopeless. Keep saving him.*`,chapter:2,reward:"$150 total",verified:!0,subItems:[{id:"albert-01",text:"Wolves (Grizzlies)",tip:" Save Albert from wolves circling him.",region:"ambarino",verified:!0},{id:"albert-02",text:"Wild Horses (Heartlands)",tip:" Help photograph wild horses without spooking them.",region:"new-hanover",verified:!0},{id:"albert-03",text:"Alligators (Lagras)",tip:" Save Albert from alligators in the swamp.",region:"lemoyne",verified:!0},{id:"albert-04",text:"Cougars (Strawberry)",tip:" Final encounter. Save him from cougar attack.",reward:"$50",region:"west-elizabeth",verified:!0}]},{id:"stranger-mary-linton",text:"Mary Linton (Ex-Lover)",tip:"💔 Arthur's former love. Emotional storyline across chapters.",tip_detailed:`**Mary Linton** was Arthur's great love. She left him years ago, but now she needs his help.

📋 **Chapters:** 2, 4, and 6

⚠️ **MISSABLE** - Each part must be done in its chapter!

*Some loves never die. They just hurt forever.*`,chapter:2,reward:"Story/Honor",missable:!0,verified:!0,subItems:[{id:"mary-01",text:"Part 1: Help Her Brother",tip:" Chapter 2 letter. Rescue Jamie from Chelonians cult.",chapter:2,verified:!0},{id:"mary-02",text:"Part 2: Her Father",tip:" Chapter 4. Meet in Saint Denis. Deal with father's debts.",chapter:4,region:"lemoyne",verified:!0},{id:"mary-03",text:"Part 3: Final Meeting",tip:" Chapter 6. Saint Denis Theater. Make your choice.",tip_detailed:`The final meeting. Mary asks Arthur to run away with her.

💔 *Whatever you choose, it hurts.*`,chapter:6,missable:!0,region:"lemoyne",verified:!0}]},{id:"stranger-algernon",text:"Duchesses and Other Animals",tip:"🌺 Algernon Wasp in Saint Denis. VERY grindy exotic quest.",tip_detailed:`**Algernon Wasp** needs exotic orchids, bird plumes, and gator eggs. The grindiest quest in the game.

 **Start:** Greenhouse north of Saint Denis (Chapter 4+)

⚠️ Orchids only spawn up to current quest requirements!

🏆 **Final Reward:** Algernon's Revolver + Exotic Hat + $200`,chapter:4,reward:"Algernon's Revolver",region:"lemoyne",verified:!0,subItems:[{id:"algernon-01",text:"Request 1: Lady of Night Orchids (15)",tip:" Bayou Nwa, Bluewater Marsh. + Little/Reddish Egret plumes.",verified:!0},{id:"algernon-02",text:"Request 2: Moccasin/Slipper Orchids",tip:" Ground orchids. + Snowy Egret + Spoonbill plumes.",verified:!0},{id:"algernon-03",text:"Request 3: Acuna's Star/Cigar Orchids",tip:" Tree orchids in Bayou. + Gator Eggs (5).",verified:!0},{id:"algernon-04",text:"Request 4: Ghost/Night Scented/Rat Tail",tip:" Deep swamp orchids. + Spider Orchids.",verified:!0},{id:"algernon-05",text:"Request 5: Clamshell/Queen's/Sparrow's Egg",tip:" Final orchids + Dragon's Mouth + 20 more Gator Eggs.",verified:!0}]},{id:"stranger-marko-dragic",text:"A Bright Bouncing Boy (Robot)",tip:"🤖 Marko Dragic in Saint Denis. Help build a robot!",tip_detailed:`**Marko Dragic** is a mad scientist building a remote-controlled robot. One of the strangest and most memorable quests.

 **Start:** Saint Denis dock (Chapter 4+)

🏆 **Reward:** Electric Lantern (brighter than standard)

🤖 *The ending involves finding the robot on a mountain. Don't skip it.*`,chapter:4,reward:"Electric Lantern",region:"lemoyne",verified:!0,subItems:[{id:"dragic-01",text:"Part 1: Remote Control Boat",tip:" Saint Denis dock. Demo boats to crowd.",verified:!0},{id:"dragic-02",text:"Part 2: Laboratory Assistant",tip:" Doverhill Lab. Lightning experiment. Get Electric Lantern.",verified:!0},{id:"dragic-03",text:"Secret: Find the Robot",tip:" After several days, visit lab. Robot escaped to mountain peak!",reward:"Robot encounter",verified:!0}]},{id:"stranger-oh-brother",text:"Oh, Brother",tip:"👬 Valentine area. Feuding brothers seek treasure. Comedic.",tip_detailed:"Two brothers can't stop fighting over treasure. Help them (or don't).",chapter:2,region:"new-hanover",verified:!0},{id:"stranger-ties-that-bind",text:"The Ties That Bind Us",tip:"⛓️ Near Rhodes. Free chain gang prisoners. Honor mission.",chapter:3,region:"lemoyne",verified:!0},{id:"stranger-british",text:"He's British, Of Course",tip:"🦁 Emerald Ranch. Escaped circus animals (lion, zebra, tiger)!",chapter:2,region:"new-hanover",verified:!0},{id:"stranger-penelope",text:"The Course of True Love",tip:"💕 Rhodes. Star-crossed lovers Beau and Penelope. 5 parts.",chapter:3,region:"lemoyne",verified:!0},{id:"stranger-civil-war",text:"The Iniquities of History",tip:"📿 Rhodes. Help former slave recover items. Dark story.",chapter:6,region:"lemoyne",verified:!0},{id:"stranger-american-inferno",text:"The American Inferno, Burnt Out",tip:"📖 Tanner's Ranch. Famous author Evelyn Miller. Philosophical.",chapter:4,verified:!0},{id:"stranger-brother-dorkins",text:"Brothers and Sisters, One and All",tip:"⛪ Saint Denis monks. Help with charity. Honor rewards.",chapter:4,region:"lemoyne",verified:!0},{id:"stranger-fisher-of-fish",text:"A Fisher of Fish",tip:"🎣 Jeremy Gill near Flatneck Station. Catch 13 legendary fish.",tip_detailed:`**Jeremy Gill** lives on Flat Iron Lake's eastern shore. He'll give you a map to all 13 legendary fish.

📋 Catch and mail each fish to Jeremy. Final reward requires visiting him in person.`,chapter:2,region:"new-hanover",verified:!0},{id:"stranger-mercies-knowledge",text:"The Mercies of Knowledge",tip:"⚡ Saint Denis. Professor wants electric chair test subject. Dark humor.",chapter:4,region:"lemoyne",verified:!0},{id:"stranger-artist-way",text:"The Artist's Way (Charles Chatenay)",tip:"🎨 Saint Denis. Eccentric French artist. Very funny missions.",chapter:4,region:"lemoyne",verified:!0},{id:"stranger-american-dreams",text:"American Dreams (Serial Killer)",tip:"🔪 Find 3 murder scenes → clues → killer hideout.",tip_detailed:`A serial killer is leaving clues at murder scenes. Find all three to discover his hideout.

 **3 murder scenes** scattered across the map
🔍 Piece together clues from each scene
🏚️ Find the killer's basement lair

*One of the darkest quests in the game.*`,chapter:2,verified:!0},{id:"stranger-fine-night",text:"A Fine Night For It",tip:"🌙 Bayou N of Saint Denis. Strange encounter 10PM-5AM. Supernatural.",tip_detailed:`Something strange happens in the bayou at night...

⏰ **10PM-5AM only**

*Listen for the sounds. Follow them.*`,chapter:2,region:"lemoyne",verified:!0},{id:"stranger-wisdom-elders",text:"The Wisdom of the Elders",tip:"🦷 Butcher Creek. Investigate cursed village. Multiple parts.",chapter:6,region:"new-hanover",verified:!0},{id:"stranger-idealism",text:"Idealism and Pragmatism for Beginners",tip:"🎓 Saint Denis. University professors. Involves Mayor Lemieux.",chapter:4,region:"lemoyne",verified:!0},{id:"stranger-smoking",text:"Smoking and Other Hobbies",tip:"🃏 Flatneck Station. Phineas Ramsbottom wants 144 cigarette cards!",chapter:2,region:"new-hanover",verified:!0},{id:"stranger-hunting-requests",text:"Hunting Requests (5 Parts)",tip:"🐿️ Any train station. Hunt perfect small game carcasses.",tip_detailed:`The train station clerk has hunting requests. You need **perfect small game carcasses**.

⭐ Use **Small Game Arrows** for perfect pelts!`,chapter:2,verified:!0,subItems:[{id:"hunt-req-01",text:"Request 1",tip:"📋 Perfect Rabbit, Squirrel, Chipmunk carcasses",verified:!0},{id:"hunt-req-02",text:"Request 2",tip:"📋 Perfect Rat, Woodpecker, Bat carcasses",verified:!0},{id:"hunt-req-03",text:"Request 3",tip:"📋 Perfect Robin, Opossum, Toad carcasses",verified:!0},{id:"hunt-req-04",text:"Request 4",tip:"📋 Perfect Cedar Waxwing, Oriole, Skunk carcasses",verified:!0},{id:"hunt-req-05",text:"Request 5",tip:"📋 Perfect Blue Jay, Crow, Cardinal carcasses",verified:!0}]},{id:"stranger-suffragette",text:"A Better World, A New Friend",tip:"🗳️ Valentine. Suffragette campaigning for women's vote.",chapter:2,region:"new-hanover",verified:!0},{id:"stranger-fundraiser",text:"Fundraiser ⚠️ MISSABLE",tip:"⚠️ MISSABLE after Ch6! Saint Denis woman collecting donations.",chapter:4,missable:!0,region:"lemoyne",verified:!0},{id:"stranger-no-good-deed",text:"No Good Deed",tip:"💊 Rhodes. Dr. Alphonse Renaud needs stolen medical supplies.",chapter:3,region:"lemoyne",verified:!0},{id:"stranger-smell-greasepaint",text:"The Smell of the Grease Paint",tip:"🎪 Van Horn saloon. Circus performers. Multiple funny encounters.",chapter:2,region:"new-hanover",verified:!0},{id:"stranger-american-inferno-epilogue",text:"The American Inferno (Epilogue)",tip:"📖 Tanner's Ranch. Continue Evelyn Miller's story as John.",chapter:"epilogue",verified:!0},{id:"stranger-all-that-glitters",text:"All That Glitters",tip:"💰 W of Flatneck Station. Buy treasure map ($10) or rob stranger.",chapter:2,region:"new-hanover",verified:!0}]},qe={id:"legendary-animals",title:"Legendary Animals",icon:"🦌",defaultOpen:!1,items:[{id:"legendary-ambarino",text:"Ambarino Region (Grizzlies)",tip:"❄️ Cold weather region. Some of the toughest legendary animals.",tip_detailed:`**Ambarino** - the frozen Grizzlies. Up here, the cold'll kill you as fast as the wildlife.

❄️ **Dress warm!** Cold weather gear is essential.

These legendaries are some of the toughest in the game. Come prepared with high-powered rifles and plenty of tonics.

*The mountains don't forgive mistakes.*`,reward:"Trapper outfits + Fence trinkets",region:"ambarino",verified:!0,subItems:[{id:"leg-bear",text:"Legendary Bharati Grizzly Bear",tip:" North of O'Creagh's Run. AGGRESSIVE! Springfield or Rolling Block to head.",tip_detailed:`**Legendary Bharati Grizzly** - massive, aggressive, and will charge you on sight.

 **Location:** North of O'Creagh's Run, in the mountain area.

🔫 **Weapon:** Springfield Rifle or Rolling Block Rifle. **Aim for the head.** You might need multiple shots.

⚠️ *This bear has killed more players than any other legendary. Don't approach on horseback—he'll spook your horse and maul you.*`,reward:"Bear Claw Talisman",region:"ambarino",verified:!0},{id:"leg-bison-white",text:"Legendary White Bison",tip:" Lake Isabella, NW near Mount Hagen. High-powered rifle headshot.",tip_detailed:`**Legendary White Bison** - a ghost in the snow. Pure white, hulking, and rare.

 **Location:** Northwest corner of Lake Isabella, near Mount Hagen.

🔫 **Weapon:** Rolling Block or Springfield Rifle. One clean headshot if you're steady.

❄️ *The White Bison is docile until provoked. Take your time, line up the shot.*`,reward:"White Bison Hat",region:"ambarino",verified:!0},{id:"leg-wolf",text:"Legendary Wolf",tip:" Cotorra Springs geyser area. Best at dawn. Sniper first, then Dead Eye.",tip_detailed:`**Legendary Wolf** - he roams the geyser fields of Cotorra Springs. Cunning and fast.

 **Location:** Cotorra Springs area, among the geysers.

🎯 **Strategy:** Best hunted at **dawn**. Snipe him from distance first, then use Dead Eye to finish when he runs.

🐺 *Wolves run in packs. This one's different—he's alone. But don't underestimate him.*`,reward:"Wolf Heart Trinket",region:"ambarino",verified:!0},{id:"leg-ram",text:"Legendary Bighorn Ram",tip:" East of Cattail Pond, near Valentine. Bow or rifle headshot. Cover scent helps.",tip_detailed:`**Legendary Bighorn Ram** - massive curled horns, skittish temperament.

 **Location:** East of Cattail Pond, in the hills near Valentine.

🏹 **Weapon:** Bow or rifle, headshot. Use **Cover Scent Lotion** to get close.

🐏 *Rams spook easy. Stay downwind and move slow.*`,reward:"Ram Horn Trinket",region:"ambarino",verified:!0},{id:"leg-elk",text:"Legendary Elk",tip:" East of Bacchus Station, Cumberland Forest. Springfield or bow to vitals.",tip_detailed:`**Legendary Elk** - majestic antlers, cautious nature.

 **Location:** East of Bacchus Station, Cumberland Forest.

🔫 **Weapon:** Springfield Rifle or bow. Aim for heart/lungs.

🦌 *The Elk is peaceful unless threatened. Make your first shot count.*`,reward:"Elk Antler Trinket",region:"ambarino",verified:!0}]},{id:"legendary-new-hanover",text:"New Hanover Region",tip:" Central map area. Accessible early in story.",tip_detailed:`**New Hanover** is your backyard early in the game—familiar territory, reasonable danger levels.

 Hunt these legendaries as soon as Chapter 2 opens up free roam.

*Start here. Build your confidence before tackling the mountains.*`,region:"new-hanover",verified:!0,subItems:[{id:"leg-buck",text:"Legendary Buck ⭐",tip:" NW of Strawberry, Black Bone Forest. HUNT FIRST for +pelt quality!",tip_detailed:`**Legendary Buck** - the single most important legendary animal in the game.

 **Location:** Northwest of Strawberry, Black Bone Forest.

⭐ **HUNT THIS FIRST!** The **Buck Antler Trinket** gives you a chance for **higher quality pelts** on every animal you skin.

🎯 **Weapon:** Rifle or bow, headshot.

*Everything else becomes easier once you have this trinket. FIRST priority.*`,reward:"Buck Antler Trinket",priority:!0,region:"west-elizabeth",verified:!0},{id:"leg-coyote",text:"Legendary Coyote",tip:" Scarlett Meadows near Dewberry Creek, NW of Rhodes. Fast - one-shot with Springfield.",tip_detailed:`**Legendary Coyote** - small, fast, elusive.

 **Location:** Scarlett Meadows, near Dewberry Creek, northwest of Rhodes.

🔫 **Weapon:** Springfield Rifle for one-shot capability. Coyotes are fast—don't miss.

🐺 *Smaller than a wolf, quicker than your aim. Line it up before you fire.*`,reward:"Coyote Fang Trinket",region:"lemoyne",verified:!0},{id:"leg-fox",text:"Legendary Fox",tip:" North of Rhodes near Mattock Pond. Small target - Varmint Rifle or bow.",tip_detailed:`**Legendary Fox** - tiny target, clever escape artist.

 **Location:** North of Rhodes, near Mattock Pond.

🏹 **Weapon:** Varmint Rifle or bow. It's small—precision matters.

🦊 *The fox is wily. Don't expect him to sit still.*`,reward:"Fox Claw Trinket",region:"lemoyne",verified:!0}]},{id:"legendary-lemoyne",text:"Lemoyne Region",tip:"🐊 Swamp and bayou area. Watch for gators!",tip_detailed:`**Lemoyne** - hot, humid, and full of things that want to eat you. The swamps hide some of the most dangerous legendaries.

🐊 Regular gators are everywhere. The legendary one is worse.

*Keep your shotgun loaded and your eyes peeled.*`,region:"lemoyne",verified:!0,subItems:[{id:"leg-boar",text:"Legendary Boar",tip:" Bluewater Marsh, north of Lagras. Springfield or poison arrows.",tip_detailed:`**Legendary Boar** - big, mean, and tusked.

 **Location:** Bluewater Marsh, north of Lagras.

🔫 **Weapon:** Springfield Rifle or poison arrows work well.

🐗 *Boars charge. Keep your distance and shoot straight.*`,reward:"Boar Tusk Talisman",region:"lemoyne",verified:!0},{id:"leg-beaver",text:"Legendary Beaver",tip:" Butcher Creek area, west of Van Horn. Albino beaver - Varmint Rifle one-shot.",tip_detailed:`**Legendary Beaver** - an albino specimen, white as snow.

 **Location:** Butcher Creek area, west of Van Horn.

🔫 **Weapon:** Varmint Rifle for clean one-shot.

🦫 *Beavers are harmless. Take your time.*`,reward:"Beaver Tooth Trinket",region:"new-hanover",verified:!0},{id:"leg-alligator",text:"Legendary Bullgator",tip:" Lakay, Bayou Nwa. ⚠️ Chapter 4+ only. Rolling Block + shotgun backup!",tip_detailed:`**Legendary Bull Gator** - the monster of the swamp. Massive, ancient, and terrifying.

 **Location:** Lakay, Bayou Nwa.

⚠️ **Available only after Chapter 4.** The swamp won't spawn him earlier.

🔫 **Weapons:** Rolling Block Rifle for initial shots, **shotgun for backup** when he gets close. And he WILL get close.

🐊 *This gator's killed more men than malaria. Don't be another meal.*`,chapter:4,reward:"Alligator Tooth Talisman",region:"lemoyne",verified:!0},{id:"leg-panther",text:"Legendary Giaguaro Panther ⭐",tip:" Bolger Glade, south of Braithwaite Manor. ⚠️ Requires Master Hunter 9!",tip_detailed:`**Legendary Giaguaro Panther** - the deadliest cat in the game. Pure black, lightning fast, and locked behind a challenge.

 **Location:** Bolger Glade, south of Braithwaite Manor.

⚠️ **REQUIRES Master Hunter Challenge Rank 9** to spawn. Complete the challenges first.

🔫 **Weapon:** Shotgun or rifle with Dead Eye. This cat will pounce before you see it.

⭐ *The panther's eye makes a powerful trinket. Worth the grind.*`,reward:"Panther's Eye Trinket",priority:!0,region:"lemoyne",verified:!0}]},{id:"legendary-roanoke",text:"Roanoke Ridge Region",tip:"🫎 Northeast woodland area. Rare spawn territory.",tip_detailed:`**Roanoke Ridge** is wild, dense, and home to the rarest legendary spawn in the game.

🫎 The Legendary Moose is notoriously difficult to find. Patience is required.

*The woods keep their secrets. You gotta wait 'em out.*`,region:"new-hanover",verified:!0,subItems:[{id:"leg-moose",text:"Legendary Moose",tip:" Near Brandywine Drop, NE corner. RARE SPAWN - camp nearby, sleep repeatedly.",tip_detailed:`**Legendary Moose** - the rarest legendary spawn in the game. Some players search for hours.

 **Location:** Near Brandywine Drop, northeastern corner of the map.

⚠️ **RARE SPAWN** - Set up camp nearby and **sleep repeatedly** to force respawns. May take multiple attempts.

🫎 *The moose is worth the wait. Its antler makes a powerful trinket.*`,reward:"Moose Antler Trinket",region:"new-hanover",verified:!0}]},{id:"legendary-new-austin",text:"New Austin (EPILOGUE ONLY) ⚠️",tip:"⚠️ These 3 animals can only be hunted in the Epilogue as John.",tip_detailed:`**New Austin** is locked until the Epilogue. Arthur cannot safely explore this region—law will hunt him relentlessly.

⚠️ **Wait for John.** These three legendaries are Epilogue content.

🏜️ *The desert waited a decade for you. It can wait a little longer.*`,chapter:"epilogue",region:"new-austin",verified:!0,subItems:[{id:"leg-cougar",text:"Legendary Cougar",tip:" Gaptooth Ridge, west of Tumbleweed. DEADLY - Dead Eye + shotgun!",tip_detailed:`**Legendary Cougar** - fast, silent, lethal. The most dangerous predator in New Austin.

 **Location:** Gaptooth Ridge, west of Tumbleweed.

🔫 **Weapon:** Shotgun with Dead Eye. The cougar WILL pounce—be ready.

⚠️ *Cougars don't give second chances. Neither should you.*`,chapter:"epilogue",reward:"Cougar Fang Trinket",region:"new-austin",verified:!0},{id:"leg-pronghorn",text:"Legendary Pronghorn",tip:" Del Lobo Rock, SE of Fort Mercer. Fast runner - sniper essential.",tip_detailed:`**Legendary Pronghorn** - fastest legendary in the game. You won't catch it on horseback.

 **Location:** Del Lobo Rock, southeast of Fort Mercer.

🔫 **Weapon:** Sniper rifle is essential. One shot from distance.

🦌 *Don't chase. Snipe. It's the only way.*`,chapter:"epilogue",reward:"Pronghorn Horn Trinket",region:"new-austin",verified:!0},{id:"leg-bison-tatanka",text:"Legendary Tatanka Bison",tip:" Hennigan's Stead, SE of MacFarlane's Ranch. Docile but tough.",tip_detailed:`**Legendary Tatanka Bison** - massive, sturdy, and peaceful until you start shooting.

 **Location:** Hennigan's Stead, southeast of MacFarlane's Ranch.

🔫 **Weapon:** High-powered rifle. Multiple headshots may be needed.

🦬 *The Tatanka is a tank. Keep shooting.*`,chapter:"epilogue",reward:"Tatanka Bison Horn Trinket",region:"new-austin",verified:!0}]},{id:"legendary-fish",text:"🐟 Legendary Fish (13 Total)",tip:"🎣 Start: Jeremy Gill at Flat Iron Lake. Buy Special Lures. Mail fish.",tip_detailed:`There are **13 Legendary Fish** scattered across the waters of the five states. Each requires a **Special Lure** from the bait shop.

📋 **How to start:**
1. Find **Jeremy Gill** at his cabin on Flat Iron Lake (east shore)
2. He gives you the **Legendary Fish Map**
3. Buy **Special Lures** (Lake, River, Swamp) from Lagras bait shop
4. Catch fish and **mail them to Jeremy** from any post office

🎣 *Patience, partner. Legendary fish don't come easy.*`,reward:"Special Hat + Fish Map",verified:!0,subItems:[{id:"fish-bluegill",text:"Bluegill (Flat Iron Lake)",tip:" Near Rhodes. Special Lake Lure.",tip_detailed:`**Legendary Bluegill** - found in **Flat Iron Lake** near Rhodes.

🎣 **Lure:** Special Lake Lure`,region:"lemoyne",verified:!0},{id:"fish-bass-large",text:"Largemouth Bass (San Luis River)",tip:" New Austin area. ⚠️ Epilogue. Special Lake Lure.",tip_detailed:`**Legendary Largemouth Bass** - found in the **San Luis River**, New Austin.

⚠️ **Epilogue only.**
🎣 **Lure:** Special Lake Lure`,chapter:"epilogue",region:"new-austin",verified:!0},{id:"fish-bass-small",text:"Smallmouth Bass (Owanjila Lake)",tip:" Near Strawberry. Special Lake Lure.",tip_detailed:`**Legendary Smallmouth Bass** - found in **Owanjila Lake** near Strawberry.

🎣 **Lure:** Special Lake Lure`,region:"west-elizabeth",verified:!0},{id:"fish-bass-rock",text:"Rock Bass (Aurora Basin)",tip:" Tall Trees area. Special Lake Lure.",tip_detailed:`**Legendary Rock Bass** - found in **Aurora Basin**, Tall Trees area.

🎣 **Lure:** Special Lake Lure`,region:"west-elizabeth",verified:!0},{id:"fish-bass-striped",text:"Striped Bass (San Luis River)",tip:" Rio Bravo, New Austin. ⚠️ Epilogue. Special River Lure.",tip_detailed:`**Legendary Striped Bass** - found in the **San Luis River** at Rio Bravo, New Austin.

⚠️ **Epilogue only.**
🎣 **Lure:** Special River Lure`,chapter:"epilogue",region:"new-austin",verified:!0},{id:"fish-perch",text:"Perch (Elysian Pool)",tip:" Roanoke Ridge. Special Lake Lure.",tip_detailed:`**Legendary Perch** - found at **Elysian Pool**, Roanoke Ridge.

🎣 **Lure:** Special Lake Lure`,region:"new-hanover",verified:!0},{id:"fish-pickerel",text:"Chain Pickerel (Dakota River)",tip:" Near Valentine. Special River Lure.",tip_detailed:`**Legendary Chain Pickerel** - found in the **Dakota River** near Valentine.

🎣 **Lure:** Special River Lure`,region:"new-hanover",verified:!0},{id:"fish-muskie",text:"Muskie (O'Creagh's Run)",tip:" Same lake as Hamish. Special Lake Lure.",tip_detailed:`**Legendary Muskie** - found at **O'Creagh's Run**, same lake where Hamish lives.

🎣 **Lure:** Special Lake Lure`,region:"new-hanover",verified:!0},{id:"fish-gar",text:"Longnose Gar (Lagras)",tip:" Bayou Nwa swamp. Special Swamp Lure.",tip_detailed:`**Legendary Longnose Gar** - found in the swamps near **Lagras**, Bayou Nwa.

🎣 **Lure:** Special Swamp Lure`,region:"lemoyne",verified:!0},{id:"fish-salmon",text:"Sockeye Salmon (Lake Isabella)",tip:" Far north, snowy. Special Lake Lure.",tip_detailed:`**Legendary Sockeye Salmon** - found at **Lake Isabella**, in the frozen north.

❄️ Dress warm!
🎣 **Lure:** Special Lake Lure`,region:"ambarino",verified:!0},{id:"fish-steelhead",text:"Steelhead Trout (Willard's Rest)",tip:" Near Charlotte's cabin. Special River Lure.",tip_detailed:`**Legendary Steelhead Trout** - found at **Willard's Rest**, near Charlotte's cabin.

🎣 **Lure:** Special River Lure`,region:"new-hanover",verified:!0},{id:"fish-sturgeon",text:"Lake Sturgeon (Flat Iron Lake)",tip:" South of Rhodes. Special Lake Lure.",tip_detailed:`**Legendary Lake Sturgeon** - found in **Flat Iron Lake**, south of Rhodes.

🎣 **Lure:** Special Lake Lure`,region:"lemoyne",verified:!0},{id:"fish-catfish",text:"Channel Catfish (Sisika Island)",tip:" Prison island area. ⚠️ Epilogue easier. Special River Lure.",tip_detailed:`**Legendary Channel Catfish** - found near **Sisika Island** (the prison).

⚠️ **Easier in Epilogue** when John can roam freely.
🎣 **Lure:** Special River Lure`,chapter:"epilogue",region:"lemoyne",verified:!0}]}]},Ve={id:"weapons",title:"Weapons & Equipment",icon:"🔫",defaultOpen:!1,items:[{id:"weapons-unique-guns",text:"Unique Revolvers & Pistols",tip:"🔫 One-of-a-kind firearms from quests and special encounters.",tip_detailed:`Every legendary gunslinger left behind a **unique weapon**. Most come from the infamous Gunslinger quest—track them down, duel them, and take their iron.

🎯 Each has custom engravings and stats. Worth collecting for any completionist.

*Their names are carved in legend. Their guns are now yours.*`,verified:!0,subItems:[{id:"weapon-flaco-revolver",text:"Flaco's Revolver",tip:" Kill Flaco Hernandez at Cairn Lake cabin. Ivory carved handle.",tip_detailed:`**Flaco's Revolver** - Cattleman Revolver with ivory carved handle.

 **Quest:** "The Noblest of Men, and a Woman" (Gunslinger Quest)
 **Location:** Kill Flaco Hernandez at his cabin, Cairn Lake

⚔️ *Flaco talks big. His gun's nicer than he is.*`,reward:"Unique Revolver",region:"ambarino",verified:!0},{id:"weapon-granger-revolver",text:"Granger's Revolver",tip:" Kill Emmet Granger at pig farm near Flatneck Station.",tip_detailed:`**Granger's Revolver** - Cattleman Revolver with dark metal finish.

 **Quest:** "The Noblest of Men, and a Woman" (Gunslinger Quest)  
 **Location:** Kill Emmet Granger at the pig farm near Flatneck Station

🐷 *Emmet keeps pigs. And buries men in their pen.*`,reward:"Unique Revolver",region:"new-hanover",verified:!0},{id:"weapon-midnight-pistol",text:"Midnight's Pistol",tip:" Kill Billy Midnight on train from Rhodes. Engraved Mauser.",tip_detailed:`**Midnight's Pistol** - Engraved Mauser Pistol.

 **Quest:** "The Noblest of Men, and a Woman" (Gunslinger Quest)
 **Location:** Confront Billy Midnight on the train departing from Rhodes

🚂 *Billy runs. Catch the train, catch the man, take his gun.*`,reward:"Unique Mauser",region:"lemoyne",verified:!0},{id:"weapon-calloway-revolver",text:"Calloway's Revolver",tip:' Duel Jim Boy Calloway on riverboat. "Canis Canem Edit" engraving.',tip_detailed:`**Calloway's Revolver** - Double-Action Revolver engraved with "Canis Canem Edit" (Dog Eat Dog).

 **Quest:** "The Noblest of Men, and a Woman" FINALE
 **Location:** Duel Jim Boy Calloway on the riverboat

⚔️ *The biographer becomes the story. Calloway was the real legend all along.*`,reward:"Unique Revolver",verified:!0},{id:"weapon-algernon-revolver",text:"Algernon's Revolver",tip:" Complete ALL 5 parts of Exotic Quest. Ornate pistol.",tip_detailed:`**Algernon's Revolver** - Ornate, fancy pistol.

 **Quest:** Complete ALL 5 PARTS of "Duchesses and Other Animals"
 **NPC:** Algernon Wasp (greenhouse north of Saint Denis)

🌺 *The grindiest reward in the game. 43 orchids, 47 bird plumes, 25 gator eggs... but this gun is worth it.*`,reward:"Unique Pistol",region:"lemoyne",chapter:4,verified:!0},{id:"weapon-otis-miller",text:"Otis Miller's Revolver",tip:"⚠️ EPILOGUE. Torn Treasure Map. Cave N of Cholla Springs.",tip_detailed:`**Otis Miller's Revolver** - Famous outlaw's custom piece.

 **Quest:** Torn Treasure Map reward
 **Location:** Cave north of Cholla Springs, New Austin

⚠️ **Epilogue only** - New Austin access required.`,reward:"Unique Revolver",region:"new-austin",chapter:"epilogue",verified:!0},{id:"weapon-micah-revolver",text:"Micah's Revolver",tip:"⚠️ EPILOGUE 2. Return to Mount Hagen after credits.",tip_detailed:`**Micah's Revolver** - the rat's weapon.

 **Location:** Return to Mount Hagen after the credits roll. Loot from the final location.

⚠️ **Epilogue 2** required - after completing "American Venom"

🐀 *He doesn't deserve to be remembered. But his gun's yours now.*`,reward:"Unique Revolver",chapter:"epilogue",verified:!0}]},{id:"weapons-free-guns",text:"Free Firearms (Exploration)",tip:"🔫 Found in the world without purchase.",tip_detailed:`Why pay for guns when you can **find them** in the world? These firearms are free for the taking—if you know where to look.

🗺️ Most are hidden in cabins, robberies, or on corpses.

*The West is littered with free hardware. Help yourself.*`,verified:!0,subItems:[{id:"weapon-schofield",text:"Schofield Revolver (Free)",tip:" Valentine Doctor backroom robbery. O'Driscoll side business.",tip_detailed:`**Schofield Revolver** - one of the best revolvers, free.

 **Location:** Valentine Doctor's office. Rob the backroom (O'Driscoll side business). In the chest.

💰 *The doctor has a side hustle. Relieve him of his inventory.*`,reward:"Schofield Revolver",region:"new-hanover",verified:!0},{id:"weapon-lancaster",text:"Lancaster Repeater (Free)",tip:" Rhodes Gunsmith. Rescue prisoner in basement.",tip_detailed:`**Lancaster Repeater** - excellent repeater, free.

 **Location:** Rhodes Gunsmith. Look in the basement window—there's a prisoner. Rob the shop and rescue him. Take the Lancaster as thanks.

🔓 *The gunsmith's got dark secrets. Expose him, take his best rifle.*`,reward:"Lancaster Repeater",region:"lemoyne",verified:!0},{id:"weapon-semi-auto",text:"Semi-Auto Shotgun (Free)",tip:" Watson's Cabin (N of Strawberry). Hostile woman, shotgun in basement.",tip_detailed:`**Semi-Auto Shotgun** - rapid-fire devastation.

 **Location:** Watson's Cabin, north of Strawberry. The old woman is hostile—kill her, then check the basement.

🏚️ *She's not as innocent as she looks. Neither is her basement.*`,reward:"Semi-Auto Shotgun",region:"west-elizabeth",verified:!0},{id:"weapon-rare-shotgun",text:"Rare Shotgun ⭐",tip:" Manito Glade hermit (N of Annesburg). ONE CHANCE!",tip_detailed:`**Rare Shotgun** - unique double-barrel with engravings.

 **Location:** Hermit at Manito Glade (north of Annesburg). He attacks on sight.

⚠️ **ONE CHANCE** - if he dies without you looting the shotgun, it's gone!

🏚️ *The hermit's paranoid for a reason. He's got good hardware.*`,reward:"Rare Shotgun",region:"new-hanover",priority:!0,verified:!0},{id:"weapon-pump-shotgun-free",text:"Pump Shotgun (Free)",tip:" Chez Porter cabin near Window Rock (N of Valentine).",tip_detailed:`**Pump Shotgun** - reliable workhorse shotgun.

 **Location:** Chez Porter cabin near Window Rock, north of Valentine. In the weapon case in the master bedroom.

🏠 *Free pump action. No questions asked.*`,reward:"Pump Shotgun",region:"ambarino",verified:!0},{id:"weapon-rare-rolling-block",text:"Rare Rolling Block Rifle ⚠️",tip:'⚠️ MISSABLE! "Magicians For Sport" (Ch3). Kill barn bounty hunter FAST.',tip_detailed:`**Rare Rolling Block Rifle** - unique sniper rifle with special stats.

 **Mission:** "Magicians For Sport" (Chapter 3)
⚠️ **MISSABLE!** You must kill the bounty hunter in the barn **quickly** and loot his rifle before the mission ends.

🎯 *Miss this and it's gone forever.*`,reward:"Rare Rolling Block",missable:!0,chapter:3,verified:!0},{id:"weapon-worn-rolling-block",text:"Worn Rolling Block Rifle",tip:" O'Driscoll camp west of Heartland Oil Fields. Dead body.",tip_detailed:`**Worn Rolling Block Rifle** - usable sniper rifle, free.

 **Location:** O'Driscoll camp west of Heartland Oil Fields. On a dead body near the campfire.

*Worn but functional. O'Driscolls don't need it anymore.*`,reward:"Rolling Block Rifle",region:"new-hanover",verified:!0},{id:"weapon-pump-shotgun",text:"Pump Shotgun (Story)",tip:' "Paying a Social Call" mission (Ch2). Auto-obtained.',tip_detailed:`**Pump Shotgun** - obtained automatically.

 **Mission:** "Paying a Social Call" (Chapter 2). You get this automatically during the mission.`,reward:"Pump Shotgun",chapter:2,verified:!0},{id:"weapon-bolt-action",text:"Bolt Action Rifle (Free)",tip:' "The First Shall Be Last" mission. Kill LEFT bounty hunter, loot.',tip_detailed:`**Bolt Action Rifle** - powerful rifle, free.

 **Mission:** "The First Shall Be Last" (Chapter 2). Kill the bounty hunter on the LEFT quickly and loot his rifle.

🎯 *The bounty hunter's loss is your gain.*`,reward:"Bolt Action Rifle",chapter:2,verified:!0},{id:"weapon-varmint-rifle",text:"Varmint Rifle (Free)",tip:" Bayou near Lakay. Submerged corpse—use Eagle Eye.",tip_detailed:`**Varmint Rifle** - essential for small game hunting.

 **Location:** Bayou near Lakay. There's a submerged corpse underwater—use Eagle Eye to spot it. Near the "U" in Bayou Nwa on the map.

🔍 *The swamp keeps secrets. Some are useful.*`,reward:"Varmint Rifle",region:"lemoyne",verified:!0},{id:"weapon-m1899-pistol",text:"M1899 Pistol",tip:" Saint Denis gunsmith ONLY. Chapter 4+. Most modern pistol!",tip_detailed:`**M1899 Pistol** - the most modern pistol in the game. Semi-automatic, high capacity.

 **Location:** Saint Denis gunsmith **ONLY** (not available elsewhere)
 **Available:** After Chapter 4

🔫 *The future of firearms. Available now in Saint Denis.*`,reward:"M1899 Pistol",chapter:4,region:"lemoyne",verified:!0},{id:"weapon-double-barrel",text:"Double-Barrel Shotgun",tip:" Hosea debt collection tutorial (Ch2). Auto-obtained.",tip_detailed:`**Double-Barrel Shotgun** - classic two-shot devastation.

 **Mission:** Hosea's debt collection tutorial mission (Chapter 2). Obtained automatically.`,reward:"Double-Barrel Shotgun",chapter:2,verified:!0}]},{id:"weapons-melee",text:"Unique Melee Weapons",tip:"🪓 Hatchets, knives, and exotic melee weapons.",tip_detailed:`**Unique melee weapons** are scattered across the world—ancient tomahawks, Viking hatchets, pirate swords, and stranger things.

🗡️ Each has its own story and style.

*Sometimes bullets aren't personal enough.*`,verified:!0,subItems:[{id:"weapon-viking-hatchet",text:"Viking Hatchet ⭐",tip:" Old Tomb NW of Annesburg. Lodged in Viking skull!",tip_detailed:`**Viking Hatchet** - Norse engravings, centuries old.

 **Location:** Old Tomb northwest of Annesburg. Enter the cave—it's lodged in a Viking skull.

🪓 *Vikings in America? The evidence is in your hand.*`,reward:"Viking Hatchet",region:"new-hanover",priority:!0,verified:!0},{id:"weapon-ancient-tomahawk",text:"Ancient Tomahawk",tip:" Calumet Ravine near Wapiti. Stuck in wooden target.",tip_detailed:`**Ancient Tomahawk** - Native American throwing axe.

 **Location:** Calumet Ravine near Wapiti Reservation. Stuck in a wooden target on a tree.`,reward:"Ancient Tomahawk",region:"ambarino",verified:!0},{id:"weapon-hunter-hatchet",text:"Hunter Hatchet",tip:" Tree stump south of Window Rock, Grizzlies.",tip_detailed:`**Hunter Hatchet** - practical wilderness tool.

 **Location:** Tree stump south of Window Rock, Grizzlies. Near a small campsite.`,reward:"Hunter Hatchet",region:"ambarino",verified:!0},{id:"weapon-double-bit-hatchet",text:"Double Bit Hatchet",tip:" NW of Wallace Station. Tree stump near road.",tip_detailed:`**Double Bit Hatchet** - two-sided chopping power.

 **Location:** Northwest of Wallace Station. Tree stump near the road, west of Dakota River.`,reward:"Double Bit Hatchet",region:"ambarino",verified:!0},{id:"weapon-hewing-hatchet",text:"Hewing Hatchet",tip:" Flattened Cabin (crushed by boulder). S of Moonstone Pond.",tip_detailed:`**Hewing Hatchet** - woodworking specialty tool.

 **Location:** Flattened Cabin (crushed by boulder). South edge of Moonstone Pond.

🪨 *The cabin's occupant had bad luck. The hatchet survived.*`,reward:"Hewing Hatchet",region:"ambarino",verified:!0},{id:"weapon-rusted-double-bit",text:"Rusted Double Bit Hatchet",tip:" Tree stump in Annesburg, near coal mine.",tip_detailed:`**Rusted Double Bit Hatchet** - weathered but functional.

 **Location:** Tree stump in Annesburg, near the coal mine entrance.`,reward:"Rusted Double Bit Hatchet",region:"new-hanover",verified:!0},{id:"weapon-rusted-hunter",text:"Rusted Hunter Hatchet",tip:" Martha's Swain area. Between Elysian Pool and O'Creagh's Run.",tip_detailed:`**Rusted Hunter Hatchet** - old but reliable.

 **Location:** Martha's Swain area, between Elysian Pool and O'Creagh's Run.`,reward:"Rusted Hunter Hatchet",region:"new-hanover",verified:!0},{id:"weapon-broken-pirate-sword",text:"Broken Pirate Sword ⭐",tip:" Shipwreck island south of Saint Denis. On skeleton in boat.",tip_detailed:`**Broken Pirate Sword** - a cutlass from the age of sail.

 **Location:** Shipwreck island south of Saint Denis bridge. On a skeleton inside the wrecked boat.

🏴‍☠️ *Pair it with the Pirate Hat for maximum theatrics.*`,reward:"Broken Pirate Sword",region:"lemoyne",priority:!0,verified:!0},{id:"weapon-civil-war-knife",text:"Civil War Knife",tip:" Fort Brennand ruins (SW of Van Horn). Basement with hat.",tip_detailed:`**Civil War Knife** - Union Army blade.

 **Location:** Fort Brennand ruins, southwest of Van Horn. In the basement alongside the Civil War Hat.

*Old wars leave old relics.*`,reward:"Civil War Knife",region:"new-hanover",verified:!0},{id:"weapon-antler-knife",text:"Antler Knife",tip:" Near Hanging Dog Ranch. Dead hunter attacked by grizzly.",tip_detailed:`**Antler Knife** - bone-handled hunting blade.

 **Location:** Near Hanging Dog Ranch. Find the dead hunter who was attacked by a grizzly. On his body.

🐻 *The bear won. The hunter's knife is yours.*`,reward:"Antler Knife",region:"west-elizabeth",verified:!0},{id:"weapon-wide-blade-knife",text:"Wide Blade Knife",tip:" Beryl's Dream Mine (W of Mount Shann). Deep inside, on corpse.",tip_detailed:`**Wide Blade Knife** - heavy chopping knife.

 **Location:** Beryl's Dream Mine, west of Mount Shann. Deep inside on a corpse.

⛏️ *The miner's last tool.*`,reward:"Wide Blade Knife",region:"west-elizabeth",verified:!0},{id:"weapon-ornate-dagger",text:"Ornate Dagger ⭐",tip:" Kill the VAMPIRE in Saint Denis! 5 graffiti clues first.",tip_detailed:`**Ornate Dagger** - the vampire's ceremonial blade.

 **Location:** Kill the **Vampire** in Saint Denis!
1. Find 5 vampire graffiti clues around the city
2. Go to the dark alley at **midnight**
3. Kill him and take his dagger

🧛 *Yes, there's a vampire. No, I'm not joking.*`,reward:"Ornate Dagger",region:"lemoyne",priority:!0,verified:!0},{id:"weapon-jawbone-knife",text:"Jawbone Knife",tip:" Collect ALL 30 dinosaur bones. Reward from Deborah.",tip_detailed:`**Jawbone Knife** - made from actual dinosaur bone.

 **Quest:** "A Test of Faith" - collect ALL 30 dinosaur bones
 **Reward from:** Deborah MacGuinness

🦴 *Prehistoric predator. Modern weapon.*`,reward:"Jawbone Knife",verified:!0}]},{id:"weapons-special",text:"Special Equipment",tip:"✨ Unique equipment and GTA crossover items.",tip_detailed:"**Special equipment** includes unique quest rewards and crossover items from GTA Online.",verified:!0,subItems:[{id:"weapon-electric-lantern",text:"Electric Lantern",tip:' Complete "A Bright Bouncing Boy" Part 2 (Marko Dragic).',tip_detailed:`**Electric Lantern** - brighter than the standard oil lantern.

 **Quest:** Complete "A Bright Bouncing Boy" Part 2 with Marko Dragic

💡 *The future of illumination. Marko was ahead of his time.*`,reward:"Electric Lantern",verified:!0},{id:"weapon-ancient-arrowhead",text:"Ancient Arrowhead",tip:" Collect all 20 Dreamcatchers. Cave behind Elysian Pool waterfall.",tip_detailed:`**Ancient Arrowhead** - reduces bow stamina drain.

 **Quest:** Collect all 20 Dreamcatchers
 **Location:** Cave behind Elysian Pool waterfall (map reveals after collection)

🏹 *Ancient power for modern hunting.*`,reward:"Ancient Arrowhead",verified:!0},{id:"weapon-stone-hatchet",text:"Stone Hatchet (GTA Crossover)",tip:" GTA Online treasure hunt + 25 kills = unlocks in Social Club.",tip_detailed:`**Stone Hatchet** - GTA Online crossover item.

 **How to unlock:** Complete the GTA Online treasure hunt, then get 25 kills with it. Unlocks automatically via Social Club.

🎮 *Your efforts in Los Santos pay off in the Old West.*`,reward:"Stone Hatchet",verified:!0},{id:"weapon-double-action-gta",text:"Double-Action Revolver (GTA)",tip:" GTA Online treasure hunt + 50 headshots = gold skin in RDR2.",tip_detailed:`**Double-Action Revolver (Gold)** - GTA Online crossover.

 **How to unlock:** Complete the GTA Online treasure hunt, get 50 headshots. Unlocks the gold skin version in RDR2 via Social Club.

🎮 *More GTA rewards for the dedicated.*`,reward:"Gold Double-Action Revolver",verified:!0}]}]},ze={id:"satchel",title:"Satchel Upgrades",icon:"🎒",defaultOpen:!1,items:[{id:"satchel-prerequisite",text:"PREREQUISITE: Donate for Leather Working Tools",tip:"📋 Camp ledger, $225. Without this, Pearson cannot craft satchels.",tip_detailed:`Before you bring Pearson a single pelt, you gotta make sure he's got the tools to work with. Head to the **camp ledger** and donate **$225** for the **Leather Working Tools**.

Without 'em, that man couldn't stitch together a coin purse, let alone a proper satchel. This is step one, partner—don't skip it.

⚠️ *No tools, no satchels. Simple as that.*`,priority:!0,region:"new-hanover",chapter:2,verified:!0},{id:"satchel-trinket",text:"RECOMMENDED: Buck Antler Trinket",tip:"🦌 Hunt Legendary Buck first. +1 pelt quality chance.",tip_detailed:`Here's a tip from an old hunter: before you go chasin' perfect pelts, bag the **Legendary Buck** west of Strawberry. Take his antler to the **Fence** and get the **Buck Antler Trinket**.

This little charm gives you a **better chance of getting one-star-higher quality pelts**. Turns good pelts into great ones.

🏆 *Makes the satchel grind a whole lot easier. Trust me on this.*`,region:"west-elizabeth",chapter:2,rewards:["Buck Antler Trinket","+1 Pelt Quality"],verified:!0},{id:"satchel-tonics",text:"Tonics Satchel",tip:"🦌 1x Perfect Deer, 1x Perfect Buck, 1x Perfect Elk. Holds 99 tonics.",tip_detailed:`The **Tonics Satchel** lets you carry **99 tonics** instead of a measly few. When you're deep in a gunfight and need that health boost, you'll thank yourself.

**Required Pelts:**
• **1x Perfect Deer Pelt** - Common, Big Valley or Heartlands
• **1x Perfect Buck Pelt** - Bucks are deer with antlers, same areas
• **1x Perfect Elk Pelt** -  Ambarino mountains, near Cattail Pond

🔫 *Use the Rolling Block Rifle for clean headshots on these big boys.*`,region:"new-hanover",chapter:2,reward:"Hold 99 Tonics",verified:!0},{id:"satchel-ingredients",text:"Ingredients Satchel",tip:"🐿️ 1x Perfect Deer, Badger, Squirrel. Use Varmint Rifle for small animals.",tip_detailed:`The **Ingredients Satchel** holds more crafting materials—herbs, plants, and such. Essential for the self-sufficient outlaw.

**Required Pelts:**
• **1x Perfect Deer Pelt** - Easy, they're everywhere
• **1x Perfect Badger Pelt** - 🦡 Nocturnal, near Bolger Glade at night
• **1x Perfect Squirrel Pelt** - 🐿️ Use **Varmint Rifle** or Small Game Arrows

⚠️ *Squirrels are tiny. If you use anything bigger than a Varmint Rifle, you'll destroy the pelt.*`,region:"new-hanover",chapter:2,reward:"Hold 99 Ingredients",verified:!0},{id:"satchel-kit",text:"Kit Satchel",tip:"🐆 1x Perfect Deer, Elk, Panther. Panthers = night, Braithwaite area.",tip_detailed:`The **Kit Satchel** expands your capacity for crafting kits—fire bottles, poison arrows, and the like.

**Required Pelts:**
• **1x Perfect Deer Pelt** - Standard fare
• **1x Perfect Elk Pelt** - Ambarino mountains
• **1x Perfect Panther Pelt** - ⚠️ **The hard one**

 Panthers spawn **at night** near **Braithwaite Manor** and south of Old Harry Fen. They're fast, deadly, and will attack first. **Save before hunting.**

🔫 *Dead Eye. Headshot. Don't miss—you might not get a second chance.*`,region:"lemoyne",chapter:2,reward:"Hold 99 Kits",verified:!0},{id:"satchel-provisions",text:"Provisions Satchel",tip:"🦬 1x Perfect Deer, Bison, Raccoon. Bison in Great Plains.",tip_detailed:`The **Provisions Satchel** holds more food—meat, canned goods, all that keeps you fed on the trail.

**Required Pelts:**
• **1x Perfect Deer Pelt** - You know the drill
• **1x Perfect Bison Pelt** - 🦬  **Great Plains**, west of Blackwater (Chapter 4+)
• **1x Perfect Raccoon Pelt** - 🦝 Nocturnal, near rivers and streams

⚠️ *Bison are in New Austin territory early on, so you may need to wait until Chapter 4+ or risk a bounty.*`,region:"west-elizabeth",chapter:4,reward:"Hold 99 Provisions",verified:!0},{id:"satchel-materials",text:"Materials Satchel",tip:"🦎 1x Perfect Deer, Boar, Iguana. Iguanas on Flat Iron Lake islands.",tip_detailed:`The **Materials Satchel** holds crafting materials—feathers, bones, and such. Useful for all sorts of camp upgrades.

**Required Pelts:**
• **1x Perfect Deer Pelt** - Easy
• **1x Perfect Boar Pelt** - 🐗 Scarlett Meadows, Bluewater Marsh
• **1x Perfect Iguana Skin** - 🦎  **Flat Iron Lake islands** (or Guarma, but you can't return there)

⚠️ *Iguanas are on the small islands in Flat Iron Lake. Swim out there or take a boat. Use Varmint Rifle.*`,region:"new-hanover",chapter:2,reward:"Hold 99 Materials",verified:!0},{id:"satchel-valuables",text:"Valuables Satchel",tip:"🐰 1x Perfect Deer, Beaver, Rabbit. Easy pelts.",tip_detailed:`The **Valuables Satchel** holds more jewelry, pocket watches, and other loot. Good for the thievin' type.

**Required Pelts:**
• **1x Perfect Deer Pelt** - Standard
• **1x Perfect Beaver Pelt** - 🦫 Near rivers, especially Owanjila Dam
• **1x Perfect Rabbit Pelt** - 🐰 Everywhere, use Varmint Rifle

💰 *This is the easiest satchel after the first few. No panthers, no cougars, just honest critters.*`,region:"new-hanover",chapter:2,reward:"Hold 99 Valuables",verified:!0},{id:"satchel-legend",text:"Legend of the East Satchel",tip:"🏆 Craft ALL above + 1x Perfect Cougar + 1x Perfect Wolf. 99 slots for EVERYTHING.",tip_detailed:`The **Legend of the East Satchel**. The holy grail. Craft this and you can carry **99 of everything**—tonics, provisions, materials, the works.

**Requirements:**
• ✅ **Craft all 7 satchels above first**
• **1x Perfect Cougar Pelt** - 🦁  West of Strawberry, Tumbleweed area. **Dangerous.** Dead Eye headshot.
• **1x Perfect Wolf Pelt** - 🐺 Ambarino mountains, often in packs

⚠️ *Cougars are the most dangerous animals in the game. They will stalk you, pounce, and kill you before you can react. Save often.*

🏆 *Once you have this satchel, inventory management becomes trivial. Worth every perfect pelt.*`,priority:!0,region:"west-elizabeth",chapter:2,reward:"Hold 99 of EVERYTHING",verified:!0}]},Ue={id:"camp",title:"Camp Upgrades",icon:"⛺",defaultOpen:!1,items:[{id:"camp-ledger",text:"Ledger Upgrades ($ Only)",tip:"📋 Purchase from camp ledger near donation box.",tip_detailed:`The **camp ledger** is your ticket to a better life. Find it near the donation box—a big book where you can buy upgrades for the gang.

💰 **All prices are fixed.** No materials needed, just cold hard cash.

*Dutch says we're building paradise. These upgrades get us closer.*`,verified:!0,subItems:[{id:"camp-lodging-arthur",text:"Arthur's Lodging ($325) ⭐",tip:"🗺️ Unlocks FAST TRAVEL from map near bed. ESSENTIAL!",tip_detailed:`**$325** upgrades Arthur's wagon and unlocks the **Fast Travel map** right behind his tent.

🗺️ Walk up to the map, pick a destination, and—boom—you're there. Saves hours of riding.

⭐ **ESSENTIAL.** This should be your first or second camp purchase.

*Ridin' everywhere's romantic until the fifth trip to Saint Denis this week.*`,priority:!0,reward:"Fast Travel",verified:!0},{id:"camp-leather-tools",text:"Leather Working Tools ($225) ⭐",tip:"🎒 Allows Pearson to craft satchels. REQUIRED for Legend of the East!",tip_detailed:`**$225** gets Pearson the **Leather Working Tools** he needs to craft satchels.

Without these tools, he can't make anything. WITH them, he can stitch up satchels that change the game.

⭐ **REQUIRED** for the Legend of the East Satchel—the one that holds 99 of everything.

*No tools, no satchels. Simple math.*`,priority:!0,reward:"Satchel Crafting",verified:!0},{id:"camp-horse-station",text:"Horse Station ($300)",tip:"🐴 Hitching post. Access stabled horses from camp.",tip_detailed:`**$300** builds a **Horse Station** at camp. Any horse you've stabled can now be summoned right here.

🐴 No more riding to Valentine to switch mounts. Your whole stable at your fingertips.

*For the man with many horses, this is a luxry turned necessity.*`,reward:"Horse Access",verified:!0},{id:"camp-lodging-dutch",text:"Dutch's Lodging ($175)",tip:"🎩 Upgrades Dutch's tent. Morale boost.",tip_detailed:`**$175** upgrades **Dutch's tent**—makes it fancier. Dutch appreciates the gesture, and camp morale improves.

🎩 It's mostly cosmetic, but a happy Dutch means a happy camp (for now).

*Keep the boss comfortable. Even if his plans are gettin' wild.*`,reward:"Morale Boost",verified:!0},{id:"camp-chicken-coop",text:"Chicken Coop ($175)",tip:"🐔 Provides eggs for camp provisions.",tip_detailed:`**$175** builds a **Chicken Coop**. The hens provide fresh eggs, which keeps the camp's food supply healthy.

🐔 Not essential, but it helps if you're neglecting your hunting duties.

*Chickens don't ask for much. Feed 'em, get eggs. Fair trade.*`,reward:"Eggs for Camp",verified:!0},{id:"camp-boat",text:"Camp Boat/Canoe ($400)",tip:"🚣 Available at Clemens Point only. Fishing boat.",tip_detailed:`**$400** gets a **canoe** for the camp—but only at **Clemens Point** (Chapter 3), where we're by the lake.

🚣 Use it for fishing trips or just peaceful rows across the water.

*The boat don't move to other camps. Enjoy it while you're lakeside.*`,reward:"Fishing Boat",chapter:3,region:"lemoyne",verified:!0}]},{id:"camp-satchels",text:"Pearson Satchels (Requires Leather Tools)",tip:"🎒 Craft all 7 to unlock Legend of the East Satchel - 99 capacity!",tip_detailed:`**Pearson** can craft satchels once you buy the Leather Working Tools. Each satchel expands your carrying capacity for different item types.

📋 **Craft all 7** to unlock the **Legend of the East Satchel**—the holy grail that holds 99 of EVERYTHING.

*Hunt perfect pelts. Deliver to Pearson. Reap the rewards.*`,reward:"Legend of the East Satchel",verified:!0,subItems:[{id:"camp-satchel-tonics",text:"Tonics Satchel",tip:"📦 Perfect Deer + Buck Pelt. Holds more tonics.",tip_detailed:`**Tonics Satchel** - expands your tonic carrying capacity.

📦 **Materials:**
• 1x Perfect Deer Pelt
• 1x Perfect Buck Pelt

🎯 Both animals common in Big Valley and Heartlands.`,verified:!0},{id:"camp-satchel-ingredients",text:"Ingredients Satchel",tip:"📦 Perfect Deer + Badger + Squirrel. For cooking ingredients.",tip_detailed:`**Ingredients Satchel** - more space for herbs and cooking materials.

📦 **Materials:**
• 1x Perfect Deer Pelt
• 1x Perfect Badger Pelt (nocturnal)
• 1x Perfect Squirrel Pelt (use Varmint Rifle!)`,verified:!0},{id:"camp-satchel-kit",text:"Kit Satchel",tip:"📦 Perfect Elk + Panther. Holds more kits/pamphlets.",tip_detailed:`**Kit Satchel** - more space for crafting kits.

📦 **Materials:**
• 1x Perfect Elk Pelt (Ambarino mountains)
• 1x Perfect Panther Pelt (⚠️ Braithwaite Manor at night)

⚠️ **Panthers are deadly.** Save before hunting.`,verified:!0},{id:"camp-satchel-provisions",text:"Provisions Satchel",tip:"📦 Perfect Deer + Bison + Raccoon. More provisions.",tip_detailed:`**Provisions Satchel** - more space for food.

📦 **Materials:**
• 1x Perfect Deer Pelt
• 1x Perfect Bison Pelt (Great Plains, Epilogue-safe)
• 1x Perfect Raccoon Pelt (nocturnal, near rivers)`,verified:!0},{id:"camp-satchel-materials",text:"Materials Satchel",tip:"📦 Perfect Boar + Iguana. More crafting materials.",tip_detailed:`**Materials Satchel** - more space for crafting materials.

📦 **Materials:**
• 1x Perfect Boar Pelt (Bluewater Marsh)
• 1x Perfect Iguana Skin ( Flat Iron Lake islands)

🦎 Iguanas require a swim or boat trip.`,verified:!0},{id:"camp-satchel-valuables",text:"Valuables Satchel",tip:"📦 Perfect Deer + Beaver + Rabbit. More valuables.",tip_detailed:`**Valuables Satchel** - more space for jewelry and loot.

📦 **Materials:**
• 1x Perfect Deer Pelt
• 1x Perfect Beaver Pelt (Owanjila Dam)
• 1x Perfect Rabbit Pelt (everywhere)

💰 Easiest satchel after the basics.`,verified:!0},{id:"camp-satchel-legend",text:"Legend of the East Satchel ⭐",tip:"🏆 CRAFT ALL 7 ABOVE! Holds 99 of EVERYTHING!",tip_detailed:`**Legend of the East Satchel** - the ultimate reward.

📋 **Requirements:**
• ✅ Craft all 7 satchels above
• 1x Perfect Cougar Pelt (west of Strawberry)
• 1x Perfect Wolf Pelt (Ambarino)

🏆 Once complete, you can carry **99 of everything**. Inventory management becomes trivial.

*Worth every hour of hunting.*`,priority:!0,reward:"99 Capacity for ALL",verified:!0}]},{id:"camp-pearson-items",text:"Pearson Camp Crafting Items",tip:"🏕️ Decorative items from animal parts. Camp aesthetics.",tip_detailed:`Pearson can craft **decorative items** for camp using perfect pelts and carcasses. These make the camp look nice and boost morale.

🎨 **Purely cosmetic** but satisfying. Shows you're contributing beyond donations.

*A cozy camp is a happy camp.*`,verified:!0,subItems:[{id:"pearson-sit-blanket",text:"Cow Hide Covered Chest",tip:"📦 Perfect Cow Hide. Decorative storage.",tip_detailed:"Needs a **Perfect Cow Hide**. Find cattle at farms—use Rolling Block Rifle and be prepared for a bounty or bad honor.",verified:!0},{id:"pearson-scout-fire",text:"Bear Skin Rug",tip:"📦 Perfect Bear Pelt. Near main fire.",tip_detailed:"Needs a **Perfect Bear Pelt**. Black bears in Big Valley, grizzlies in Ambarino. Rifle headshot only.",verified:!0},{id:"pearson-pronghorn-skull",text:"Pronghorn Skull",tip:"📦 Perfect Pronghorn Carcass. Hanging decoration.",tip_detailed:"Needs a **Perfect Pronghorn Carcass** (whole animal). Common in the Heartlands. Small enough to carry on horseback.",verified:!0},{id:"pearson-boar-skin",text:"Boar Skin Table Cover",tip:"📦 Perfect Boar Pelt. For Pearson area.",tip_detailed:"Needs a **Perfect Boar Pelt**. Wild boars in Bluewater Marsh and Scarlett Meadows.",verified:!0},{id:"pearson-ox-skin",text:"Ox Hide Floor Cover",tip:"📦 Perfect Ox Hide. Ground cover.",tip_detailed:"Needs a **Perfect Ox Hide**. Oxen at farms—similar to cattle hunting. Expect bounty if witnessed.",verified:!0},{id:"pearson-cougar",text:"Cougar Skin Rug",tip:"📦 Perfect Cougar Pelt. Arthur tent area.",tip_detailed:"Needs a **Perfect Cougar Pelt**. ⚠️ Cougars are THE most dangerous hunt. West of Strawberry, saves first.",verified:!0},{id:"pearson-wolf",text:"Wolf Skin Rug",tip:"📦 Perfect Wolf Pelt. Dutch tent area.",tip_detailed:"Needs a **Perfect Wolf Pelt**. Wolves in Ambarino mountains, often in packs. Dead Eye headshots.",verified:!0},{id:"pearson-alligator",text:"Alligator Skin Item",tip:"📦 Perfect Alligator Skin. Various decorations.",tip_detailed:"Needs a **Perfect Alligator Skin**. Gators in Lemoyne swamps are everywhere. Rifle to the head.",verified:!0}]},{id:"camp-donations",text:"Donation Wagon Rewards",tip:"💰 Donate consistently to unlock supply wagons.",tip_detailed:`Keep donating money and items to the **camp donation box** over time. Eventually, supply wagons appear that provide free resources.

📊 These unlock based on cumulative donations, not single large amounts.

*The gang takes care of itself. If you take care of the gang.*`,verified:!0,subItems:[{id:"camp-ammo",text:"Ammunition Wagon",tip:"🔫 Donate consistently. Provides free ammo at camp.",tip_detailed:`Keep donating and eventually an **Ammunition Wagon** appears at camp. Free bullets, arrows, and throwing weapons.

🔫 Never run out of ammo again—at least when you're home.

*Stock up before every mission.*`,reward:"Free Ammo",verified:!0},{id:"camp-medical",text:"Medical Wagon",tip:"💊 Donate consistently. Provides medical supplies.",tip_detailed:`Keep donating and eventually a **Medical Wagon** appears. Free health cures, tonics, and medicines.

💊 Saves money on doctor visits.

*Pearson ain't a surgeon, but the supplies help.*`,reward:"Free Medicine",verified:!0}]}]},je={id:"pamphlets",title:"Pamphlets & Recipes",icon:"📜",defaultOpen:!1,items:[{id:"pamph-explosive",text:"Explosive & Incendiary Ammo",tip:"💥 Most powerful ammo types. Animal Fat is key ingredient!",tip_detailed:`**Explosive and incendiary ammunition** - the most devastating rounds you can craft. Learn these recipes and you'll clear rooms in seconds.

🔑 **Key Ingredient:** **Animal Fat** - harvest from ducks, geese, pigs, and boars.

💥 *When regular bullets just won't do.*`,verified:!0,subItems:[{id:"pamph-explosive-slug",text:"Explosive Slug Pamphlet",tip:' Burned house near Gaptooth Ridge. OR Fence ($90) after "A Short Walk in a Pretty Town".',tip_detailed:`**Explosive Slug** - turns your shotgun into a cannon.

 **Free location:** Burned house near train tracks between Gaptooth Ridge & Cholla Springs (Epilogue area)

💰 **OR** Fence sells for $90 after mission "A Short Walk in a Pretty Town"

📦 **Recipe:** 1 Slug Shell + 1 Animal Fat`,reward:"1 Slug Shell + 1 Animal Fat",region:"new-austin",verified:!0},{id:"pamph-express-explosive",text:"Express Explosive Pamphlet",tip:" Available from start of Chapter 2.",tip_detailed:`**Express Explosive** - explosive rifle rounds. Devastating against enemies and large animals.

 **Availability:** Fence from Chapter 2 start

📦 **Recipe:** 1 Express Cartridge + 1 Animal Fat`,reward:"1 Express Cartridge + 1 Animal Fat",verified:!0},{id:"pamph-incendiary-buckshot",text:"Incendiary Buckshot Pamphlet",tip:' Copperhead Landing cabin floorboard. OR Fence ($80) after "Pouring Forth Oil I".',tip_detailed:`**Incendiary Buckshot** - sets everything on fire. Terrifying up close.

 **Free location:** Under floorboard at Copperhead Landing cabin

💰 **OR** Fence sells for $80 after "Pouring Forth Oil I"

📦 **Recipe:** 1 Shotgun Shell + 1 Moonshine`,reward:"1 Shotgun Shell + 1 Moonshine",region:"lemoyne",verified:!0},{id:"pamph-fire-arrow",text:"Fire Arrow Pamphlet",tip:" Fence ($75). Requires Animal Fat.",tip_detailed:`**Fire Arrow** - silent and deadly with a burning payload.

 **Available:** Fence for $75

📦 **Recipe:** 1 Arrow + 1 Animal Fat + 1 Flight Feather`,reward:"1 Arrow + 1 Animal Fat + 1 Flight Feather",verified:!0}]},{id:"pamph-arrows",text:"Special Arrow Pamphlets",tip:"🏹 Arrows for hunting and combat. Flight Feathers from birds!",tip_detailed:`**Special arrows** expand your bow's versatility. Essential for hunters and stealth players.

🪶 **Flight Feathers** come from birds—eagles, hawks, crows. Keep 'em stocked.`,verified:!0,subItems:[{id:"pamph-poison-arrow",text:"Poison Arrow Pamphlet",tip:" Lockbox NE of Bacchus Station. OR Charles bison hunt. OR Fence.",tip_detailed:`**Poison Arrow** - slow death for your target. Good for large game.

 **Free location:** Lockbox outside Mysterious Hill Home (NE of Bacchus Station)
 **OR** Complete Charles bison hunting mission
 **OR** Buy at Fence

📦 **Recipe:** 1 Arrow + 1 Oleander Sage + 1 Flight Feather

⚠️ *Oleander Sage is poisonous. Found in Lemoyne.*`,reward:"1 Arrow + 1 Oleander Sage + 1 Flight Feather",region:"ambarino",verified:!0},{id:"pamph-dynamite-arrow",text:"Dynamite Arrow Pamphlet",tip:" Lockbox S of Wapiti Reservation. OR Fence after quest.",tip_detailed:`**Dynamite Arrow** - explosive death from a distance. Overkill for hunting, perfect for chaos.

 **Free location:** Lockbox under small wooden bridge south of Wapiti Indian Reservation

📦 **Recipe:** 1 Arrow + 1 Dynamite + 1 Flight Feather

💥 *Not recommended for pelt preservation.*`,reward:"1 Arrow + 1 Dynamite + 1 Flight Feather",region:"ambarino",verified:!0},{id:"pamph-improved-arrow",text:"Improved Arrow Pamphlet",tip:" Fence ($350). Better penetration for large game.",tip_detailed:`**Improved Arrow** - deeper penetration, more damage. Essential for large game hunting.

 **Available:** Fence for $350

📦 **Recipe:** 1 Arrow + 1 Flight Feather`,reward:"1 Arrow + 1 Flight Feather",verified:!0},{id:"pamph-small-game-arrow",text:"Small Game Arrow Pamphlet",tip:" Fence. Essential for perfect small pelts!",tip_detailed:`**Small Game Arrow** - kills small animals without destroying the pelt.

 **Available:** Fence

📦 **Recipe:** 1 Arrow + 1 Shotgun Shell + 1 Flight Feather

⭐ **ESSENTIAL** for squirrels, rabbits, and birds if you want perfect pelts.`,reward:"1 Arrow + 1 Shotgun Shell + 1 Flight Feather",priority:!0,verified:!0},{id:"pamph-tracking-arrow",text:"Tracking Arrow Pamphlet",tip:' Complete "Hunting for Sport" with Charles.',tip_detailed:`**Tracking Arrow** - hit an animal and track it easily. Useful for wounded prey that runs.

 **Obtained:** Complete "Hunting for Sport" mission with Charles

📦 **Recipe:** 1 Arrow + 1 Indian Tobacco + 1 Flight Feather`,reward:"1 Arrow + 1 Indian Tobacco + 1 Flight Feather",verified:!0}]},{id:"pamph-thrown",text:"Thrown Weapon Pamphlets",tip:"🔪 Tomahawks and Throwing Knives upgrades.",tip_detailed:"**Thrown weapon pamphlets** upgrade your knives and tomahawks. Silent and reusable (if you retrieve them).",verified:!0,subItems:[{id:"pamph-poison-knife",text:"Poison Throwing Knife Pamphlet",tip:" Shack N of Saint Denis. OR Charles quest. OR Fence.",tip_detailed:`**Poison Throwing Knife** - guaranteed kill even if you miss vitals.

 **Free location:** Under floorboard in shack north of Saint Denis (near train tracks)
 **OR** Complete Charles quest
 **OR** Buy at Fence

📦 **Recipe:** 1 Throwing Knife + 1 Oleander Sage`,reward:"1 Throwing Knife + 1 Oleander Sage",region:"lemoyne",verified:!0},{id:"pamph-improved-knife",text:"Improved Throwing Knife Pamphlet",tip:" Fence ($45). Better range and damage.",tip_detailed:`**Improved Throwing Knife** - flies farther, hits harder.

 **Available:** Fence for $45

📦 **Recipe:** 1 Throwing Knife + 1 Owl Feather`,reward:"1 Throwing Knife + 1 Owl Feather",verified:!0},{id:"pamph-homing-tomahawk",text:"Homing Tomahawk Pamphlet",tip:" Fence. Slight homing capability.",tip_detailed:`**Homing Tomahawk** - slight tracking when thrown. Makes hitting moving targets easier.

 **Available:** Fence

📦 **Recipe:** 1 Tomahawk + 1 Owl Feather`,reward:"1 Tomahawk + 1 Owl Feather",verified:!0}]},{id:"pamph-explosives",text:"Explosive Pamphlets",tip:"💣 Throwable explosive upgrades.",tip_detailed:"**Volatile explosives** pack more punch than standard dynamite and fire bottles.",verified:!0,subItems:[{id:"pamph-volatile-dynamite",text:"Volatile Dynamite Pamphlet",tip:" Lockbox at Hani's Bethel. OR Fence after 'American Distillation'.",tip_detailed:`**Volatile Dynamite** - bigger boom, more shrapnel.

 **Free location:** Lockbox under broken wagon at Hani's Bethel

💰 **OR** Fence sells after "American Distillation"

📦 **Recipe:** 1 Dynamite + 1 Animal Fat + 1 High-Velocity Cartridge`,reward:"1 Dynamite + 1 Animal Fat + 1 High-Velocity Cartridge",region:"new-hanover",verified:!0},{id:"pamph-volatile-fire-bottle",text:"Volatile Fire Bottle Pamphlet",tip:" Fence ($95). Bigger explosion.",tip_detailed:`**Volatile Fire Bottle** - more fire, more chaos.

 **Available:** Fence for $95

📦 **Recipe:** 1 Fire Bottle + 1 Animal Fat`,reward:"1 Fire Bottle + 1 Animal Fat",verified:!0}]},{id:"pamph-tonics",text:"Tonic Pamphlets",tip:"💊 Health, Stamina, Dead Eye restoration crafting.",tip_detailed:"**Tonic recipes** let you craft restoratives in the field. Essential for long hunts and extended combat.",verified:!0,subItems:[{id:"pamph-potent-health",text:"Potent Health Cure Pamphlet",tip:" Near Annesburg mining area. OR Fence.",tip_detailed:`**Potent Health Cure** - full health core restoration.

 **Free location:** Near Annesburg mining area

📦 **Recipe:** 1 Ginseng + 1 Yarrow`,reward:"1 Ginseng + 1 Yarrow",region:"new-hanover",verified:!0},{id:"pamph-potent-bitters",text:"Potent Snake Oil Pamphlet",tip:" Fence. Dead Eye restoration.",tip_detailed:`**Potent Snake Oil** - restore your Dead Eye when it matters most.

 **Available:** Fence

📦 **Recipe:** 1 Indian Tobacco + 1 Sage`,reward:"1 Indian Tobacco + 1 Sage",verified:!0},{id:"pamph-horse-reviver",text:"Horse Reviver Pamphlet",tip:" Fence. Bring back downed horse!",tip_detailed:`**Horse Reviver** - save your horse from the brink of death.

 **Available:** Fence

📦 **Recipe:** 1 Sage + 1 Health Cure

🐴 *Always carry a few. Losing a bonded horse is heartbreaking.*`,reward:"1 Sage + 1 Health Cure",priority:!0,verified:!0},{id:"pamph-horse-stimulant",text:"Horse Stimulant Pamphlet",tip:" Fence. Restore horse stamina.",tip_detailed:`**Horse Stimulant** - refills horse stamina for long rides.

 **Available:** Fence

📦 **Recipe:** 1 Burdock Root + 1 Oleander Sage`,reward:"1 Burdock Root + 1 Oleander Sage",verified:!0},{id:"pamph-special-miracles",text:"Special Miracle Tonic Pamphlet",tip:" Fence after Chapter 3. Full core restore!",tip_detailed:`**Special Miracle Tonic** - restores ALL cores to full. The best tonic in the game.

 **Available:** Fence after Chapter 3

📦 **Recipe:** 1 Valerian Root + 1 Yarrow + 1 Ginseng`,reward:"1 Valerian Root + 1 Yarrow + 1 Ginseng",chapter:3,verified:!0}]},{id:"pamph-hunting",text:"Hunting & Bait Pamphlets",tip:"🦌 Lures and scent covers for hunting.",tip_detailed:"**Hunting pamphlets** give you tools to attract prey and mask your presence. Essential for legendary animal hunts.",verified:!0,subItems:[{id:"pamph-cover-scent",text:"Cover Scent Lotion Pamphlet",tip:" Early game Fence. Mask your scent from animals.",tip_detailed:`**Cover Scent Lotion** - animals can't smell you coming.

 **Available:** Fence (early game)

📦 **Recipe:** 1 Sage + 1 Oregano

🎯 *Essential for hunting skittish animals like deer and elk.*`,reward:"1 Sage + 1 Oregano",priority:!0,verified:!0},{id:"pamph-potent-predator-bait",text:"Potent Predator Bait Pamphlet",tip:" Fence. Attracts predators faster.",tip_detailed:`**Potent Predator Bait** - draw in cougars, wolves, and bears.

 **Available:** Fence

📦 **Recipe:** 2 Meat + 1 Blackberry`,reward:"2 Meat + 1 Blackberry",verified:!0},{id:"pamph-potent-herbivore-bait",text:"Potent Herbivore Bait Pamphlet",tip:" Fence. Attracts herbivores faster.",tip_detailed:`**Potent Herbivore Bait** - draw in deer, elk, and bison.

 **Available:** Fence

📦 **Recipe:** 2 Berries + 1 Vanilla Flower`,reward:"2 Berries + 1 Vanilla Flower",verified:!0},{id:"pamph-special-horse-food",text:"Special Horse Food Pamphlet",tip:" Fence. Best horse core restoration.",tip_detailed:`**Special Horse Food** - the best food for your horse. Full core restoration.

 **Available:** Fence

📦 **Recipe:** 1 Big Game Meat + 1 Apple + 1 Hay`,reward:"1 Big Game Meat + 1 Apple + 1 Hay",verified:!0}]}]},Ke={id:"mysteries",title:"Mysteries & Secrets",icon:"👻",defaultOpen:!1,items:[{id:"mystery-serial-killer",text:"Serial Killer Mystery (American Dreams)",tip:"🔪 Find 3 gruesome clues to track down the killer.",tip_detailed:`A serial killer is leaving **dismembered bodies** across the map—each with a piece of a map in their remains. Find all three to locate his lair.

📋 **3 murder scenes** → piece together the map → find the killer

⚠️ **Warning:** These scenes are disturbing.

🏆 **Reward:** Unique confrontation + basement discovery

*One of the darkest secrets in the West...*`,reward:"Unique Confrontation",verified:!0,subItems:[{id:"serial-clue-1",text:"Clue 1: Wallace Station",tip:" SW of Valentine, S of Wallace Station. Map piece in severed head.",tip_detailed:` **Location:** Rock southwest of Valentine, south of Wallace Station

🔍 Dismembered body on the rock. The map piece is in the severed head's mouth.

*Someone's leaving messages. In flesh.*`,region:"new-hanover",verified:!0},{id:"serial-clue-2",text:"Clue 2: Valentine South",tip:" Between Citadel Rock & Caster's Ridge. Body under railroad.",tip_detailed:` **Location:** Between Citadel Rock and Caster's Ridge

🔍 Follow the blood trail to find the body hanging under the railroad tracks.`,region:"new-hanover",verified:!0},{id:"serial-clue-3",text:"Clue 3: Braithwaite Manor",tip:' East of Braithwaite Manor. "BEHOLD" written. Final piece.',tip_detailed:` **Location:** East of Braithwaite Manor

🔍 Body in a tree with "BEHOLD" written nearby. The final map piece.`,region:"lemoyne",verified:!0},{id:"serial-cabin",text:"Confront the Killer ⭐",tip:` Lucky's Cabin (S of Valentine). "Stranger" icon appears.`,tip_detailed:` **Location:** Lucky's Cabin, south of Valentine

With all 3 map pieces, a "Stranger" icon appears. Go to the basement.

⚠️ *What you find down there... you won't forget.*`,priority:!0,region:"new-hanover",verified:!0}]},{id:"mystery-vampire",text:"Vampire of Saint Denis 🧛",tip:"🧛 Find 5 blood graffiti clues. Appears at midnight only!",tip_detailed:`There is a **vampire** in Saint Denis. Find 5 blood-written clues around the city to trigger his appearance.

⏰ **He only appears at midnight (12:00-1:00 AM)**

🗡️ **Reward:** Ornate Dagger (unique melee weapon)

*Yes. A real vampire. In 1899.*`,reward:"Ornate Dagger",region:"lemoyne",verified:!0,subItems:[{id:"vampire-graffiti-1",text:"Graffiti 1: Near Outdoor Market",tip:" Close to Trapper/Fence in SE Saint Denis.",region:"lemoyne",verified:!0},{id:"vampire-graffiti-2",text:"Graffiti 2: Soup Kitchen",tip:" Across from Doyle's Tavern. Northern wall of red apartment.",region:"lemoyne",verified:!0},{id:"vampire-graffiti-3",text:"Graffiti 3: Alleyway",tip:" Between Gaillard's Shoes and antiques shop.",region:"lemoyne",verified:!0},{id:"vampire-graffiti-4",text:"Graffiti 4: Church Area",tip:" Near St. Denis Cathedral southern wall.",region:"lemoyne",verified:!0},{id:"vampire-graffiti-5",text:"Graffiti 5: Back Streets",tip:" Behind the general store area.",region:"lemoyne",verified:!0},{id:"vampire-encounter",text:"Kill the Vampire ⭐",tip:"⏰ 12:00-1:00 AM ONLY! Alley south of general store. Skull icon on map.",tip_detailed:`⏰ **Appears ONLY between 12:00-1:00 AM**

 **Location:** Alley south of general store, near Doyle's Tavern

After finding all 5 graffiti, a skull icon appears on the map. Go there at midnight.

🗡️ Kill him and take his **Ornate Dagger**.

*He's fast. Be ready.*`,priority:!0,region:"lemoyne",verified:!0}]},{id:"mystery-ufo",text:"UFO Sightings 🛸",tip:"🛸 Two locations for alien spacecraft. Specific times required!",tip_detailed:`There are **two UFO encounters** in the game. Both require specific times and conditions.

🛸 *We are not alone in the Old West...*`,verified:!0,subItems:[{id:"ufo-cult-shack",text:"UFO 1: Hani's Bethel (Cult Shack)",tip:' Between N and O of "New Hanover" on map. Dead cultists inside.',tip_detailed:` **Location:** Hani's Bethel, between N and O of "New Hanover" on the map (north of Emerald Ranch)

🔍 Find the shack full of dead cultists. Read the note about "KUHKOWABA."`,reward:"Mysterious Note",region:"new-hanover",verified:!0},{id:"ufo-cult-trigger",text:"UFO 1: Trigger at 2:00 AM",tip:"⏰ Return to shack at 2:00 AM. Green glow, UFO hovers above!",tip_detailed:`⏰ **Return to the shack at exactly 2:00 AM**

The shack glows green. Look up—a UFO hovers above!`,verified:!0},{id:"ufo-shann",text:"UFO 2: Mount Shann Peak",tip:" Peak of Mount Shann (NW of Strawberry). Go at night.",tip_detailed:` **Location:** Very peak of Mount Shann, northwest of Strawberry

The cult note hints at this location. Go at night.`,region:"west-elizabeth",verified:!0},{id:"ufo-shann-trigger",text:"UFO 2: Witness at Peak",tip:"⏰ Stand at very top at night. A second, different UFO appears!",tip_detailed:`⏰ **At night, stand at the very top of Mount Shann**

A second, different UFO appears!

🛸 *Someone's watching.*`,verified:!0}]},{id:"mystery-ghosts",text:"Ghost Encounters 👻",tip:"👻 Supernatural apparitions with tragic stories.",tip_detailed:"The spirits of the dead linger in certain places. Their stories are tragic—listen carefully.",verified:!0,subItems:[{id:"ghost-agnes",text:"Ghost of Agnes Dowd ⭐",tip:" NW Bluewater Marsh, 9PM-3AM, foggy. Appears 16 TIMES!",tip_detailed:`**Agnes Dowd** was murdered and dumped in the swamp. Her ghost appears **16 times**, each telling more of her tragic story.

 **Location:** Northwest Bluewater Marsh
⏰ **Time:** 9PM-3AM, foggy weather helps
📖 **Grave:** Find her grave at Shady Belle

*She just wants someone to listen...*`,priority:!0,region:"lemoyne",verified:!0},{id:"ghost-train",text:"Ghost Train 🚂",tip:" Scarlett Meadows, S of Old Greenbank Mill. 3:00 AM. ONCE per playthrough!",tip_detailed:`A phantom train roars down the tracks—but there's no train there.

 **Location:** Scarlett Meadows, south of Old Greenbank Mill
⏰ **Time:** 3:00 AM exactly
🐴 Your horse will become anxious

⚠️ **Appears ONCE per playthrough!**`,region:"lemoyne",verified:!0}]},{id:"mystery-bigfoot",text:"Bigfoot & Giant Encounters 🦶",tip:"🦶 Evidence of giant creatures in the mountains.",tip_detailed:"Something large lives in these mountains. Or lived. The evidence is here if you look.",verified:!0,subItems:[{id:"bigfoot-skeleton",text:"Giant Skeleton",tip:" Cave at top of Mount Shann. Massive humanoid skeleton!",tip_detailed:` **Location:** Cave at the top of Mount Shann, north of Strawberry

🦴 Inside the cave is a **massive humanoid skeleton**—far too large to be human.

*What was it? Who knows.*`,region:"west-elizabeth",verified:!0},{id:"bigfoot-voice",text:"Talking Giant (Bigfoot)",tip:" Grizzlies East, E of Wapiti. REQUIRES: Study 30+ animal species first!",tip_detailed:` **Location:** Grizzlies East, east of Wapiti Reservation

⚠️ **REQUIREMENT:** You must **study 30+ animal species** first!

📋 Follow the flock of birds from the river to a cave. A voice speaks to you—the last of his kind.

Return every 3 in-game days for more dialogue.

*"I am the last..."*`,region:"ambarino",verified:!0}]},{id:"mystery-robot",text:"Marko Dragic's Robot 🤖",tip:"🤖 Help an inventor create an electric automaton!",tip_detailed:`**Marko Dragic** is a mad scientist (based on Nikola Tesla) building a robot. One of the most memorable questlines in the game.

🏆 **Reward:** Electric Lantern (brighter than standard)`,reward:"Electric Lantern",chapter:4,verified:!0,subItems:[{id:"robot-meet",text:"Part 1: Meet Marko",tip:" SW Saint Denis park. Chapter 4+. Help with RC boat demo.",region:"lemoyne",verified:!0},{id:"robot-lab",text:"Part 2: Doverhill Lab",tip:" Doverhill (far NE map). Lightning experiment. Robot comes alive!",tip_detailed:` **Location:** Doverhill, far northeast of the map

Wait 24+ in-game hours after Part 1. Help Marko capture lightning with rods.

⚡ The robot... **comes alive.**

🏆 **Reward:** Electric Lantern`,reward:"Electric Lantern",region:"new-hanover",verified:!0},{id:"robot-final",text:"Part 3: Find the Robot",tip:" Return to lab later → Marko dead. Robot on mountain near Colter.",tip_detailed:`Wait a few more in-game days, then return to Doverhill.

💀 Marko is dead. The robot has fled.

 Find the robot on a mountain ledge overlooking **Colter**. It says one word:

🤖 *"Papa..."*`,verified:!0}]},{id:"mystery-time-traveler",text:"Time Traveler (Francis Sinclair) ⏰",tip:"⏰ Man with modern clothes asks for rock carvings. Strange ending...",tip_detailed:`**Francis Sinclair** talks strangely, wears odd clothes, and has a distinctive birthmark. He wants you to find 10 rock carvings.

The carvings show impossible things: pyramids, Vikings, skyscrapers...

🏆 **Reward:** Old Brass Compass (Raven Claw Talisman ingredient)

*Something's wrong here. The ending reveals everything.*`,reward:"Old Brass Compass",chapter:2,verified:!0,subItems:[{id:"sinclair-meet",text:"Meet Francis Sinclair",tip:" Small cabin NW of Strawberry. Note his modern speech + birthmark!",tip_detailed:` **Location:** Small cabin northwest of Strawberry (Chapter 2+)

🔍 Pay attention to:
• His **modern speech patterns**
• His distinctive **birthmark**`,region:"west-elizabeth",verified:!0},{id:"sinclair-carvings",text:"Find All 10 Rock Carvings",tip:" See Rock Carvings in Collectibles. Carvings show impossible things...",verified:!0},{id:"sinclair-ending",text:"Return to Cabin ⭐",tip:"⚠️ After all carvings → woman with baby has SAME BIRTHMARK. Time loop!",tip_detailed:`After finding all 10 carvings, return to the cabin.

⏰ Francis is gone. Instead, a **woman with a baby** answers the door. The baby has the **SAME BIRTHMARK** as Francis.

*Francis didn't just travel through time. He was born from it.*`,priority:!0,verified:!0}]},{id:"mystery-other",text:"Other Secrets & Easter Eggs",tip:"🔮 Additional mysterious encounters.",tip_detailed:"The world is full of unexplained phenomena. Here are more secrets to discover.",verified:!0,subItems:[{id:"mystery-strange-man",text:"The Strange Man",tip:" Cabin near Bayall Edge. Mirror reflects RDR1 character. Painting completes over time.",tip_detailed:` **Location:** Abandoned cabin near Bayall Edge (Bayou)

🪞 Look in the **mirror**—a mysterious figure reflects back. He's from RDR1.

🎨 The **painting** in the cabin completes itself over time as you return...

*"I know you."*`,region:"lemoyne",verified:!0},{id:"mystery-witch",text:"Witch's Cauldron 🧙",tip:" N of Annesburg in swamp. Bubbling cauldron. Drink for strange effect!",tip_detailed:` **Location:** North of Annesburg, in the swamp

🧙 Find the abandoned camp with a **bubbling cauldron**. You can drink from it...

⚠️ The effect is temporary but very strange.`,region:"new-hanover",verified:!0},{id:"mystery-devil",text:"Devil's Cave 😈",tip:" Big Valley cave. Man claims to be the Devil. Creepy dialogue.",tip_detailed:` **Location:** Cave in Big Valley

👹 A man inside claims to be **the Devil himself**. His dialogue is unsettling.

*Is he? Probably not. But then again...*`,region:"west-elizabeth",verified:!0},{id:"mystery-feral",text:"Feral Man 🐺",tip:" Roanoke Ridge. Wild man living with wolf pack.",tip_detailed:` **Location:** Roanoke Ridge

🐺 A man raised by wolves. He communicates with them, runs with them.

*Nature reclaimed him.*`,region:"new-hanover",verified:!0},{id:"mystery-pagan",text:"Pagan Ritual Site ⛧",tip:" Big Valley, West Elizabeth. Disturbing sacrifice scene.",tip_detailed:` **Location:** Big Valley, West Elizabeth

⛧ A disturbing pagan ritual site with a sacrificial victim.

🌙 Visit at night for full atmosphere.

*Something dark happened here.*`,region:"west-elizabeth",verified:!0},{id:"mystery-tiny-church",text:"Tiny Church ⛪",tip:" Bayou Nwa. Miniature uninhabited white church. Unexplained...",tip_detailed:` **Location:** Bayou Nwa, Lemoyne

⛪ A perfectly miniature white church. Too small for people. No explanation.

*Why is it here? Nobody knows.*`,region:"lemoyne",verified:!0},{id:"mystery-viking",text:"Viking Tomb ⚔️",tip:" NW of Annesburg. Ancient Viking burial. Get Viking Hatchet + Helmet!",tip_detailed:` **Location:** Northwest of Annesburg

⚔️ An ancient **Viking burial site** with artifacts:
• Viking Hatchet
• Viking Helmet
• Viking Comb

*Vikings in America, centuries before Columbus.*`,reward:"Viking Hatchet + Helmet",region:"new-hanover",verified:!0},{id:"mystery-meteor",text:"Meteor Crash Site ☄️",tip:" Roanoke Ridge. Burned cabin destroyed by meteor. Fragment inside!",tip_detailed:` **Location:** Roanoke Ridge

☄️ A cabin destroyed by a **meteor impact**. Still smoking.

💎 Find the **meteor fragment** inside the ruins.

*Space rocks don't care about property values.*`,region:"new-hanover",verified:!0}]}]},Je={id:"gang-hideouts",title:"Gang Hideouts",icon:"🏚️",defaultOpen:!1,items:[{id:"hideout-main",text:"100% Completion Hideouts (6 Required)",tip:"🎯 Clear all enemies to complete. Some respawn, some story-locked.",tip_detailed:`For that **100% completion**, you gotta clear **six specific gang hideouts**. Kill every last outlaw, loot the place clean, and move on to the next nest of rats.

⚠️ **Story timing matters.** Some hideouts only become available after certain missions. Others become your own camp for a while.

🔫 *Each hideout's got its own gang—O'Driscolls, Raiders, Murfrees, Del Lobos. Learn their territories.*`,verified:!0,subItems:[{id:"hideout-six-point",text:"Six Point Cabin (O'Driscolls)",tip:" NE of Valentine, Cumberland Forest. Chapter 2 story.",tip_detailed:`**Six Point Cabin** - an O'Driscoll camp in the **Cumberland Forest**, northeast of Valentine.

You'll hit this place during Chapter 2's story, but it can be cleared again later when the O'Driscolls reoccupy.

🔫 *These boys hate us. The feeling's mutual.*`,chapter:2,region:"new-hanover",reward:"Hideout Cleared",verified:!0},{id:"hideout-shady-belle",text:"Shady Belle (Lemoyne Raiders)",tip:" Bayou Nwa, south of Caliga Hall. Becomes camp in Ch4.",tip_detailed:`**Shady Belle** - a haunted-lookin' plantation in **Bayou Nwa**, south of Caliga Hall. The Lemoyne Raiders use it as their hideout.

 You'll clear this during the story, and it becomes your gang's camp for Chapter 4.

🏚️ *Nice place. Once you get the ghosts and Raiders out.*`,chapter:3,region:"lemoyne",reward:"New Camp Location",verified:!0},{id:"hideout-hanging-dog",text:"Hanging Dog Ranch (O'Driscolls → Laramie)",tip:" W of Valentine, near Little Creek River. Ch6 story.",tip_detailed:`**Hanging Dog Ranch** - O'Driscoll territory during the main story, west of Valentine near Little Creek River.

You'll assault this place in **Chapter 6**. After the story, the **Laramie Gang** moves in and you can clear it again.

🔫 *Different gang, same outcome. Dead outlaws.*`,chapter:6,region:"west-elizabeth",reward:"Hideout Cleared",verified:!0},{id:"hideout-beaver-hollow",text:"Beaver Hollow (Murfree Brood)",tip:" W of Annesburg, Roanoke Ridge. Becomes camp in Ch6.",tip_detailed:`**Beaver Hollow** - the Murfree Brood's lair, west of Annesburg in Roanoke Ridge. These inbred cannibals are the worst folks you'll meet.

 Clear 'em out and the gang moves in for Chapter 6. Dark times, dark place.

⚠️ *The Murfrees eat people. Don't let 'em take you alive.*`,chapter:6,region:"new-hanover",reward:"Final Camp Location",verified:!0},{id:"hideout-fort-mercer",text:"Fort Mercer (Del Lobos)",tip:" New Austin, S of Armadillo. ⚠️ EPILOGUE ONLY!",tip_detailed:`**Fort Mercer** - an abandoned military fort south of Armadillo, now occupied by the **Del Lobo gang**. Lot of history in these walls.

⚠️ **EPILOGUE ONLY** - Arthur can't safely enter New Austin.

🏰 *Thick walls, lots of enemies. Bring a rifle and patience.*`,chapter:"epilogue",region:"new-austin",reward:"Hideout Cleared + Loot",verified:!0},{id:"hideout-thieves-landing",text:"Thieves' Landing (Del Lobos)",tip:" New Austin, S of Blackwater. ⚠️ EPILOGUE ONLY!",tip_detailed:`**Thieves' Landing** - an outlaw town south of Blackwater where the Del Lobos run things. Every building's got enemies.

⚠️ **EPILOGUE ONLY** - John can roam freely here.

🏚️ *Clear the whole damn town. Every corner, every rooftop. Then it's yours.*`,chapter:"epilogue",region:"new-austin",reward:"Hideout Cleared + Fence Access",verified:!0}]},{id:"hideout-bonus",text:"Bonus Hideouts (Optional)",tip:"🎁 Not required for 100% but offer good loot.",tip_detailed:`These hideouts **don't count toward 100% completion**, but they're worth clearin' for the loot and the satisfaction.

💰 Good money, rare items, and practice for your trigger finger.

*Sometimes you just wanna shoot some outlaws. These places oblige.*`,verified:!0,subItems:[{id:"hideout-gaptooth",text:"Gaptooth Breach (Del Lobos)",tip:" Gaptooth Ridge, W of Tumbleweed. Epilogue only.",tip_detailed:`**Gaptooth Breach** - an abandoned mining colony in Gaptooth Ridge, west of Tumbleweed. Del Lobos have set up shop.

 **Epilogue only.** Good loot scattered across the old mining equipment.

⛏️ *Miners left. Outlaws moved in. You're the eviction notice.*`,chapter:"epilogue",region:"new-austin",verified:!0},{id:"hideout-twin-rocks",text:"Twin Rocks (Del Lobos) ⭐",tip:" Cholla Springs, N of Armadillo. Special/Ultimate Edition.",tip_detailed:`**Twin Rocks** - a rock formation hideout in Cholla Springs, north of Armadillo.

⭐ **Special/Ultimate Edition bonus content.** If you've got the fancy edition, this is exclusive to you.

 *Epilogue only.* Worth clearing if you've got access.`,chapter:"epilogue",region:"new-austin",verified:!0},{id:"hideout-solomons",text:"Solomon's Folly (Del Lobos)",tip:" S of Benedict Point, New Austin. Guarded basement.",tip_detailed:`**Solomon's Folly** - a small barn south of Benedict Point. Don't be fooled by its size—the basement's where the action is.

 **Epilogue only.** Clear the guards, loot the underground stash.

🏚️ *Small place, decent pay. Quick work.*`,chapter:"epilogue",region:"new-austin",verified:!0}]},{id:"hideout-tips",text:"Gang Hideout Tips",tip:"💡 Strategies for clearing hideouts safely.",tip_detailed:`Listen up, partner. These tips'll keep you breathin' when you're up against a dozen angry outlaws.

🎯 **Every hideout's a puzzle.** Find the approach that works for you—stealth, sniping, or full charge.`,verified:!0,subItems:[{id:"hideout-tip-stealth",text:"Use Stealth",tip:"🏹 Approach at night with bow. Take out sentries silently.",tip_detailed:`**Night approach with a bow** is the smart play. Sentries are easier to spot by their fires, and silent kills don't alert the main camp.

🏹 Take your time. One headshot at a time. Thin the herd before you commit.

*The quiet approach means fewer bullets spent and fewer wounds taken.*`,verified:!0},{id:"hideout-tip-deadeye",text:"Dead Eye Tonics",tip:"🎯 Bring Snake Oil. Dead Eye makes clearing easier.",tip_detailed:`**Snake Oil** and other Dead Eye tonics are your best friends. Pop one when things get hot and paint the targets before they can react.

🎯 Dead Eye turns a desperate fight into target practice.

*Stock up before you ride in. Tonics are cheap. Your life ain't.*`,verified:!0},{id:"hideout-tip-loot",text:"Loot Everything",tip:"💰 Check all bodies and buildings after the fight.",tip_detailed:`After the shootin' stops, **loot everything**. Bodies, lockboxes, cupboards, nightstands. Hideouts are treasure troves.

💰 You'll find cash, ammo, valuables, sometimes rare items.

*The dead don't need their money. You do.*`,verified:!0},{id:"hideout-tip-respawn",text:"Respawn Mechanic",tip:"🔄 Most hideouts respawn after a few in-game days.",tip_detailed:`Here's the beautiful thing—**most hideouts respawn** after a few in-game days. The enemies come back, and so does the loot.

🔄 **Good for farming money** if you're broke. Just ride away, sleep a few nights, come back, and clear 'em again.

*Outlaws never learn. Neither should you—keep robbin' 'em.*`,verified:!0}]}]},Ye={id:"trapper",title:"Trapper Outfits",icon:"🦌",defaultOpen:!1,items:[{id:"trapper-set-bear-hunter",text:"The Bear Hunter Set",tip:"🐻 Legendary Bear Pelt required. Cold weather outfit.",tip_detailed:`**The Bear Hunter Set** - crafted from the mighty Legendary Bear.

🐻 One of the first legendary sets you can craft. Provides excellent cold weather protection.

 Hunt the **Legendary Bharati Grizzly Bear** near O'Creagh's Run.`,region:"ambarino",verified:!0,subItems:[{id:"trap-bear-hat",text:"Legendary Bear Head Hat",tip:"📦 Legendary Bear Pelt ×1 | $40",reward:"$40",verified:!0},{id:"trap-bear-coat",text:"Legendary Bear Coat",tip:"📦 Legendary Bear Pelt ×1 + Perfect Bison ×1 | $28",reward:"$28",verified:!0},{id:"trap-bear-ropers",text:"Legendary Bear Ropers",tip:"📦 Legendary Bear Pelt ×1 + Perfect Bull ×1 | $30",reward:"$30",verified:!0},{id:"trap-boar-gloves",text:"Boar Riding Gloves",tip:"📦 Perfect Boar ×1 + Perfect Rabbit ×2 | $15",reward:"$15",verified:!0}]},{id:"trapper-set-trophy-buck",text:"The Trophy Buck Set",tip:"🦌 Legendary Buck + FoGreat early game set.",tip_detailed:`**The Trophy Buck Set** - crafted from the Legendary Buck and Fox.

🦌 Both legendaries are available early in Chapter 2. Great starting set!`,region:"new-hanover",verified:!0,subItems:[{id:"trap-raccoon-hat",text:"Raccoon Mountain Hat",tip:"📦 Perfect Raccoon ×1 + Perfect Beaver ×1 + Hawk Feather ×2 | $22",reward:"$22",verified:!0},{id:"trap-buck-vest",text:"Legendary Buck Vest",tip:"📦 Legendary Buck ×1 + Perfect Ram ×1 | $26",reward:"$26",verified:!0},{id:"trap-fox-moccasins",text:"Legendary Fox Moccasins",tip:"📦 Legendary Fox ×1 + Perfect Elk ×1 | $34",reward:"$34",verified:!0},{id:"trap-buck-fox-gloves",text:"Legendary Buck & Fox Range Gloves",tip:"📦 Legendary Buck ×1 + Legendary Fox ×1 | $28",reward:"$28",verified:!0}]},{id:"trapper-set-dreamcatcher",text:"The Dreamcatcher Set",tip:"🦬 Legendary Beaver + Bison + Boar. ⚠️ Tatanka Bison = Epilogue!",tip_detailed:`**The Dreamcatcher Set** - features the Legendary Tatanka Bison.

⚠️ **Epilogue only** - The Tatanka Bison is in New Austin.`,chapter:"epilogue",verified:!0,subItems:[{id:"trap-beaver-hat",text:"Legendary Beaver Flop Hat",tip:"📦 Legendary Beaver ×1 + Legendary Boar ×1 + Cardinal Feather | $34",reward:"$34",verified:!0},{id:"trap-bison-vest",text:"Legendary Bison Vest",tip:"📦 Legendary Tatanka Bison ×1 ⚠️ EPILOGUE | $35",reward:"$35",chapter:"epilogue",verified:!0},{id:"trap-bison-chaps",text:"Legendary Bison Batwing Chaps",tip:"📦 Legendary Tatanka Bison ×1 ⚠️ EPILOGUE | $33",reward:"$33",chapter:"epilogue",verified:!0},{id:"trap-boar-bison-boots",text:"Legendary Boar & Bison Fowlers",tip:"📦 Legendary Boar ×1 + Legendary Tatanka Bison ×1 | $39",reward:"$39",verified:!0},{id:"trap-beaver-gloves",text:"Legendary Beaver Cavalry Gloves",tip:"📦 Legendary Beaver Pelt ×1 | $18",reward:"$18",verified:!0}]},{id:"trapper-set-beast-of-prey",text:"The Beast of Prey Set",tip:"🐆 Legendary Cougar + Wolf. ⚠️ Cougar = Epilogue!",tip_detailed:`**The Beast of Prey Set** - crafted from apex predators.

⚠️ **Epilogue only** - The Legendary Cougar is in New Austin.`,chapter:"epilogue",verified:!0,subItems:[{id:"trap-cougar-hat",text:"Legendary Cougar Flop Hat",tip:"📦 Legendary Cougar ×1 + Turkey Feather ×2 ⚠️ EPILOGUE | $30",reward:"$30",chapter:"epilogue",verified:!0},{id:"trap-cougar-wolf-vest",text:"Legendary Cougar & Wolf Vest",tip:"📦 Legendary Cougar ×1 + Legendary Wolf ×1 | $38",reward:"$38",verified:!0},{id:"trap-wolf-chaps",text:"Legendary Wolf Batwing Chaps",tip:"📦 Legendary Wolf ×1 + Perfect Goat ×1 | $28",reward:"$28",verified:!0},{id:"trap-bull-boots",text:"Bull Fowler Boots",tip:"📦 Perfect Boar ×1 + Perfect Bull ×1 | $27",reward:"$27",verified:!0},{id:"trap-cougar-gloves",text:"Legendary Cougar Riding Gloves",tip:"📦 Legendary Cougar ×1 + Perfect Boar ×1 | $24",reward:"$24",verified:!0}]},{id:"trapper-set-huntsman",text:"The Huntsman Set",tip:"🦌 Legendary Coyote + Pronghorn. ⚠️ Pronghorn = Epilogue!",tip_detailed:`**The Huntsman Set** - classic hunter style.

⚠️ **Epilogue only** - The Legendary Pronghorn is in New Austin.`,chapter:"epilogue",verified:!0,subItems:[{id:"trap-coyote-hat",text:"Legendary Coyote Mountain Hat",tip:"📦 Legendary Coyote ×1 + Eagle Feather ×2 | $23",reward:"$23",verified:!0},{id:"trap-pronghorn-coat",text:"Legendary Pronghorn Coat",tip:"📦 Legendary Pronghorn ×1 + Perfect Moose ×1 ⚠️ EPILOGUE | $42",reward:"$42",chapter:"epilogue",verified:!0},{id:"trap-coyote-chaps",text:"Legendary Coyote Half Chaps",tip:"📦 Legendary Coyote ×1 + Perfect Fox ×2 | $26",reward:"$26",verified:!0},{id:"trap-workman-boots",text:"Workman's Pride Boots",tip:"📦 Perfect Cow ×1 + Perfect Goat ×1 | $24",reward:"$24",verified:!0},{id:"trap-pronghorn-gloves",text:"Legendary Pronghorn Range Gloves",tip:"📦 Legendary Pronghorn ×1 + Perfect Muskrat ×1 | $22",reward:"$22",verified:!0}]},{id:"trapper-set-death-roll",text:"The Death Roll Set",tip:"🐊 Legendary Alligator + Panther. Both late-game legendaries.",tip_detailed:`**The Death Roll Set** - bayou beast theme.

🐊 The Legendary Panther requires **Master Hunter Challenge 9** to spawn!`,verified:!0,subItems:[{id:"trap-gator-hat",text:"Legendary Alligator Gambler's Hat",tip:"📦 Legendary Alligator ×1 + Perfect Snake ×2 | $32",reward:"$32",verified:!0},{id:"trap-panther-cloak",text:"Legendary Panther Cloak",tip:"📦 Legendary Panther ×1. ⚠️ Requires Master Hunter 9! | $50",reward:"$50",verified:!0},{id:"trap-gator-vest",text:"Legendary Alligator Vest",tip:"📦 Legendary Alligator ×1 | $35",reward:"$35",verified:!0},{id:"trap-gator-boots",text:"Legendary Alligator Fowlers",tip:"📦 Legendary Alligator ×1 | $40",reward:"$40",verified:!0},{id:"trap-panther-gloves",text:"Legendary Panther Range Gloves",tip:"📦 Legendary Panther ×1 + Perfect Gila Monster ×1 | $28",reward:"$28",verified:!0}]},{id:"trapper-set-stalker",text:"The Stalker Set",tip:"🐏 Legendary Ram + Moose. Moose is RARE spawn!",tip_detailed:`**The Stalker Set** - features the elusive Moose.

⚠️ **Moose** is one of the **rarest spawns** in the game. Check O'Creagh's Run, Cairn Lake, and Owanjila at dawn.`,verified:!0,subItems:[{id:"trap-ram-hat",text:"Legendary Ram Hat",tip:"📦 Legendary Ram ×1 | $17",reward:"$17",verified:!0},{id:"trap-moose-jacket",text:"Legendary Moose Hunting Jacket",tip:"📦 Legendary Moose ×1 + Perfect Wolf ×1. Moose is very rare! | $45",reward:"$45",verified:!0},{id:"trap-ram-chaps",text:"Legendary Ram Batwing Chaps",tip:"📦 Legendary Ram ×1 | $23",reward:"$23",verified:!0},{id:"trap-moose-moccasins",text:"Legendary Moose Moccasins",tip:"📦 Legendary Moose ×1 + Perfect Cow ×1 | $38",reward:"$38",verified:!0},{id:"trap-ram-gloves",text:"Legendary Ram Rifleman Gloves",tip:"📦 Legendary Ram ×1 + Perfect Boar ×1 | $20",reward:"$20",verified:!0}]},{id:"trapper-set-ghost-bison",text:"The Ghost Bison Set",tip:"🦬 Legendary White Bison + Elk. Cold weather masterpiece.",tip_detailed:`**The Ghost Bison Set** - the ultimate cold weather outfit.

❄️ Crafted from the **White Bison** at Lake Isabella. Best cold protection in the game!`,region:"ambarino",verified:!0,subItems:[{id:"trap-white-bison-hat",text:"Legendary White Bison Hat",tip:"📦 Legendary White Bison ×1 | $22",reward:"$22",verified:!0},{id:"trap-white-bison-coat",text:"Legendary White Bison Coat",tip:"📦 Legendary White Bison ×1. Best cold weather protection! | $48",reward:"$48",priority:!0,verified:!0},{id:"trap-elk-chaps",text:"Legendary Elk Half Chaps",tip:"📦 Legendary Elk ×1 + Perfect Sheep ×1 | $26",reward:"$26",verified:!0},{id:"trap-elk-moccasins",text:"Legendary Elk Moccasins",tip:"📦 Legendary Elk ×1 + Perfect Goat ×1 | $30",reward:"$30",verified:!0},{id:"trap-elk-gloves",text:"Legendary Elk Range Gloves",tip:"📦 Legendary Elk ×1 | $18",reward:"$18",verified:!0}]},{id:"trapper-set-rattler",text:"The Rattler Set",tip:"🐷 Perfect pelts only. ⚠️ Peccary Pig = New Austin, Epilogue!",chapter:"epilogue",verified:!0,subItems:[{id:"trap-ram-sombrero",text:"Ram Sombrero",tip:"📦 Perfect Ram ×1 | $19",reward:"$19",verified:!0},{id:"trap-outdoorsmen-vest",text:"Outdoorsmen Vest",tip:"📦 Perfect Pronghorn ×1 | $23",reward:"$23",verified:!0},{id:"trap-javelina-chaps",text:"Javelina Half Chaps",tip:"📦 Perfect Collared Peccary ×1 + Snake ×1 ⚠️ EPILOGUE | $25",reward:"$25",chapter:"epilogue",verified:!0},{id:"trap-iguana-gloves",text:"Iguana Range Gloves",tip:"📦 Perfect Peccary ×1 + Perfect Iguana ×1 | $22",reward:"$22",verified:!0}]},{id:"trapper-set-wrangler",text:"The Wrangler Set",tip:"🐆 Perfect pelts. Panther = Hard to get!",verified:!0,subItems:[{id:"trap-goat-hat",text:"Goat Flop Hat",tip:"📦 Perfect Goat ×1 + Perfect Pronghorn ×1 | $17",reward:"$17",verified:!0},{id:"trap-trapper-cloak",text:"Trapper's Cloak",tip:"📦 Perfect Sheep ×1 | $18",reward:"$18",verified:!0},{id:"trap-noman-vest",text:"No-Man's Vest",tip:"📦 Perfect Goat ×1 + Perfect Panther ×1. Panther is dangerous! | $35",reward:"$35",verified:!0},{id:"trap-twotone-mocs",text:"Two Toned Moccasins",tip:"📦 Perfect Buck ×1 | $20",reward:"$20",verified:!0},{id:"trap-moose-gloves",text:"Moose Range Gloves",tip:"📦 Perfect Moose ×1. Moose is rare spawn! | $24",reward:"$24",verified:!0}]},{id:"trapper-set-bronco-buster",text:"The Bronco Buster Set",tip:"🐂 Perfect pelts. Great early-mid game set.",verified:!0,subItems:[{id:"trap-elk-flop-hat",text:"Elk Flop Hat",tip:"📦 Perfect Elk ×1 | $14",reward:"$14",verified:!0},{id:"trap-coyote-scout",text:"Coyote Scout Jacket",tip:"📦 Perfect Ox ×1 + Perfect Coyote ×1 | $32",reward:"$32",verified:!0},{id:"trap-huntsman-vest",text:"Huntsman Vest",tip:"📦 Perfect Sheep ×1 + Perfect Deer ×1 | $18",reward:"$18",verified:!0},{id:"trap-boar-chaps",text:"Boar Fringed Shotgun Chaps",tip:"📦 Perfect Boar ×2 | $20",reward:"$20",verified:!0},{id:"trap-pigskin-gloves",text:"Pigskin Rifleman Gloves",tip:"📦 Perfect Pig ×1 | $12",reward:"$12",verified:!0}]},{id:"trapper-set-marauder",text:"The Marauder Set",tip:"🐄 Perfect pelts. Easier materials to obtain.",verified:!0,subItems:[{id:"trap-muskrat-hat",text:"Muskrat Cavalry Hat",tip:"📦 Perfect Rabbit ×4 + Perfect Muskrat ×1 | $16",reward:"$16",verified:!0},{id:"trap-principal-vest",text:"Principal Vest",tip:"📦 Perfect Cow ×1 + Perfect Deer ×1 | $18",reward:"$18",verified:!0},{id:"trap-bull-chaps",text:"Bull Fringed Shotgun Chaps",tip:"📦 Perfect Bull ×1 | $19",reward:"$19",verified:!0},{id:"trap-snakeskin-gloves",text:"Snakeskin Cavalry Gloves",tip:"📦 Perfect Boar ×1 + Perfect Snake ×1 | $15",reward:"$15",verified:!0}]},{id:"trapper-set-bounty-hunter",text:"The Bounty Hunter Set",tip:"🤠 Perfect pelts. Classic western look.",verified:!0,subItems:[{id:"trap-plantation-hat",text:"Plantation Slouch Hat",tip:"📦 Perfect Bison ×1 | $18",reward:"$18",verified:!0},{id:"trap-beaver-jacket",text:"Beaver Hunting Jacket",tip:"📦 Perfect Cow ×1 + Perfect Beaver ×2 | $30",reward:"$30",verified:!0},{id:"trap-sheepskin-vest",text:"Sheepskin Vest",tip:"📦 Perfect Sheep ×2 | $16",reward:"$16",verified:!0},{id:"trap-pronghorn-chaps",text:"Pronghorn Half Chaps",tip:"📦 Perfect Pronghorn ×1 | $17",reward:"$17",verified:!0},{id:"trap-buck-riding-gloves",text:"Buck Riding Gloves",tip:"📦 Perfect Buck ×1 | $14",reward:"$14",verified:!0}]},{id:"trapper-set-desperado",text:"The Desperado Set",tip:"🐺 Perfect pelts. ⚠️ Armadillo = New Austin, Epilogue!",chapter:"epilogue",verified:!0,subItems:[{id:"trap-beaver-drifter",text:"Beaver Drifter Hat",tip:"📦 Perfect Beaver ×2 | $17",reward:"$17",verified:!0},{id:"trap-wolf-coat",text:"Wolf Coat",tip:"📦 Perfect Ram ×1 + Perfect Wolf ×1 | $28",reward:"$28",verified:!0},{id:"trap-billy-vest",text:"Billy Vest",tip:"📦 Perfect Armadillo ×2 + Perfect Goat ×1 ⚠️ EPILOGUE | $22",reward:"$22",chapter:"epilogue",verified:!0},{id:"trap-boar-bull-boots",text:"Boar & Bull Fowler Boots",tip:"📦 Perfect Boar ×1 + Perfect Ox ×1 | $25",reward:"$25",verified:!0},{id:"trap-winter-gloves",text:"Winter Cavalry Gloves",tip:"📦 Perfect Muskrat ×2 + Perfect Rabbit ×1 | $16",reward:"$16",verified:!0}]},{id:"trapper-set-night-wrangler",text:"The Night Wrangler Set",tip:"🐆 Perfect pelts. Cougar + Panther = Dangerous hunts!",tip_detailed:`**The Night Wrangler Set** requires hunting the most dangerous predators.

🐆 **Cougars** and **Panthers** are extremely aggressive. Bring strong weapons and Dead Eye.`,verified:!0,subItems:[{id:"trap-coyote-gambler",text:"Coyote Gambler's Hat",tip:"📦 Perfect Coyote ×2 | $16",reward:"$16",verified:!0},{id:"trap-cougar-coat",text:"Cougar Cutaway Coat",tip:"📦 Perfect Cougar ×2 + Perfect Black Bear ×1. Very dangerous! | $42",reward:"$42",verified:!0},{id:"trap-wilderness-vest",text:"Wilderness Vest",tip:"📦 Perfect Wolf ×1 + Perfect Panther ×1 | $32",reward:"$32",verified:!0},{id:"trap-moose-chaps",text:"Moose Half Chaps",tip:"📦 Perfect Moose ×1. Moose is very rare! | $26",reward:"$26",verified:!0},{id:"trap-badger-gloves",text:"Badger Rifleman Gloves",tip:"📦 Perfect Badger ×1 | $12",reward:"$12",verified:!0}]},{id:"trapper-set-mountain-man",text:"The Mountain Man Set",tip:"❄️ Perfect pelts. Good cold weather option.",region:"ambarino",verified:!0,subItems:[{id:"trap-grenadier-hat",text:"Grenadier Hat",tip:"📦 Perfect Muskrat ×1 + Perfect Beaver ×1 | $18",reward:"$18",verified:!0},{id:"trap-ram-shotgun-coat",text:"Ram Shotgun Coat",tip:"📦 Perfect Ram ×2 | $27",reward:"$27",verified:!0},{id:"trap-country-vest",text:"Country Vest",tip:"📦 Perfect Buck ×1 + Perfect Beaver ×1 | $20",reward:"$20",verified:!0},{id:"trap-elk-riding-gloves",text:"Elk Riding Gloves",tip:"📦 Perfect Elk ×1 | $15",reward:"$15",verified:!0}]},{id:"trapper-tips",text:"Trapper Tips",tip:"💡 Helpful information for hunting and crafting.",tip_detailed:"Master these tips to become an efficient pelt collector.",verified:!0,subItems:[{id:"trap-tip-locations",text:"Trapper Locations (5)",tip:" Saint Denis | Riggs Station | NE Strawberry | Near Annesburg | Tumbleweed (Epilogue)",tip_detailed:`**5 Trapper Locations:**
1. **Saint Denis** - Market entrance
2. **Riggs Station** - Near the station
3. **NE of Strawberry** - In the wilderness
4. **Near Annesburg** - Forest area
5. **Tumbleweed** - ⚠️ Epilogue only`,verified:!0},{id:"trap-tip-perfect",text:"Perfect Pelts",tip:"⭐ Correct weapon for size. Clean headshot. 3-star animal only.",tip_detailed:`**Getting Perfect Pelts:**
1. Only hunt **3-star animals** (check with binoculars)
2. Use the **correct weapon** for the animal size
3. Clean **headshot or heart shot** for clean kill

🔫 Small = Varmint Rifle | Medium = Repeater | Large = Rifle`,verified:!0},{id:"trap-tip-legendary",text:"Legendary Pelts",tip:'🏆 Always "perfect". If lost, auto-sent to Trapper. One per playthrough.',tip_detailed:`**Legendary Pelts:**
• Always count as **perfect quality**
• If lost (death, water), **auto-sent to Trapper**
• Only **ONE per playthrough**—don't need to retry`,verified:!0},{id:"trap-tip-buck",text:"Buck Antler Trinket ⭐",tip:"🦌 Hunt Legendary Buck FIRST! Trinket upgrades pelt quality by 1 tier.",tip_detailed:`**PRIORITY: Hunt the Legendary Buck first!**

The Buck Antler Trinket (crafted at Fence) **upgrades all future pelt quality by 1 tier**.

🦌 2-star animals have a chance to become 3-star pelts!

*This is the single most important trinket for hunters.*`,priority:!0,verified:!0}]}]},Qe={id:"unique-hats",title:"Unique Hats & Masks",icon:"🎩",defaultOpen:!1,items:[{id:"hats-world",text:"World Location Hats",tip:"🎩 Found at specific locations. Permanently saved to wardrobe.",tip_detailed:`These **unique hats** are hidden in specific locations across the world. Pick one up and it's saved **permanently** to your wardrobe.

🎩 When the hat name appears on screen, you know it's a keeper.

*A man's hat says a lot about him. Collect 'em all.*`,verified:!0,subItems:[{id:"hat-tricorn",text:"Tricorn Hat",tip:" Wrecked ship island west of Rhodes (Flat Iron Lake). Need boat.",tip_detailed:`**Tricorn Hat** - a three-cornered relic from the pirate age.

 **Location:** Wrecked ship on an island west of Rhodes in Flat Iron Lake

🚣 **Access:** Need a boat or canoe to reach the island

*A pirate's hat for landlocked waters.*`,region:"lemoyne",verified:!0},{id:"hat-civil-war",text:"Civil War Hardee Hat",tip:" Fort Brennand, SE of O'Creagh's Run. Basement skeleton.",tip_detailed:`**Civil War Hardee Hat** - Union Army headwear from the war.

 **Location:** Fort Brennand, southeast of O'Creagh's Run. In the basement corner, on a skeleton.

*Old bones, old wars. The hat survived longer than the man.*`,region:"new-hanover",verified:!0},{id:"hat-nevada",text:"Nevada Hat",tip:" Behind waterfall at Granite Pass. Climb down from top.",tip_detailed:`**Nevada Hat** - wide-brimmed and stylish.

 **Location:** Behind the waterfall at Granite Pass. Climb down from the top to a rocky walkway behind the falls.

💧 *Another waterfall, another secret. Pattern holds true.*`,region:"ambarino",verified:!0},{id:"hat-miner",text:"Miner's Hat",tip:" Beryl's Dream mine. Use plunger to blast rocks, crawl through.",tip_detailed:`**Miner's Hat** - a lantern-equipped hardhat.

 **Location:** Beryl's Dream mine. Use the plunger to blast the blocked entrance, crawl through the hole. On a corpse deep inside.

⛏️ *The miner didn't make it out. His hat did.*`,region:"new-hanover",verified:!0},{id:"hat-morion",text:"Morion Helmet",tip:" Top of Mount Hagen. Frozen settler corpse at peak.",tip_detailed:`**Morion Helmet** - a Spanish conquistador helmet, centuries old.

 **Location:** Very top of Mount Hagen. On a frozen settler corpse at the peak.

❄️ *How'd a Spanish helmet get up here? Some mysteries stay frozen.*`,region:"ambarino",verified:!0},{id:"hat-pirate",text:"Pirate Hat",tip:" Shipwreck island south of Saint Denis. Same spot as Pirate Sword.",tip_detailed:`**Pirate Hat** - complete with skull and crossbones.

 **Location:** Shipwreck island south of Saint Denis. Same location where you find the Pirate Sword.

🏴‍☠️ *Full pirate outfit potential if you're feelin' theatrical.*`,region:"lemoyne",verified:!0}]},{id:"hats-scarecrow",text:"Scarecrow Hats",tip:"🎃 Shoot these off scarecrows to collect them.",tip_detailed:`Farmers put hats on their scarecrows. **Shoot the hat off** and it becomes yours.

🔫 Aim carefully—you want the hat, not the straw man.

*Crows don't need fashion. You do.*`,verified:!0,subItems:[{id:"hat-scarecrow-straw",text:"Scarecrow Hat",tip:" Scarecrow SW of Heartland Overflow. Shoot hat off.",tip_detailed:`**Scarecrow Hat** - classic straw style.

 **Location:** Scarecrow southwest of Heartland Overflow

🔫 Shoot the hat off to collect it.`,region:"new-hanover",verified:!0},{id:"hat-scarecrow-derby",text:"Scarecrow Derby Hat",tip:" Braithwaite Manor cornfield.",tip_detailed:`**Scarecrow Derby Hat** - fancy for a field guardian.

 **Location:** Braithwaite Manor cornfield. Shoot it off the scarecrow.

*The Braithwaites dressed their scarecrows well.*`,region:"lemoyne",verified:!0},{id:"hat-scarecrow-top",text:"Scarecrow Top Hat",tip:" Behind MacFarlane's Ranch. ⚠️ EPILOGUE ONLY!",tip_detailed:`**Scarecrow Top Hat** - surprisingly dapper.

 **Location:** Behind MacFarlane's Ranch

⚠️ **Epilogue only** - New Austin access required.`,region:"new-austin",chapter:"epilogue",verified:!0}]},{id:"hats-masks",text:"Masks & Helmets",tip:"💀 Unique headwear including masks and ancient helmets.",tip_detailed:`**Masks and helmets** from various eras and cultures. Some are creepy, some are historical, all are unique.

💀 *Cover your face. Become someone else.*`,verified:!0,subItems:[{id:"mask-cat-skull",text:"Cat Skull Mask",tip:" Lakay settlement (swamp). Sunken building, crouch through hole.",tip_detailed:`**Cat Skull Mask** - a big cat's skull worn as a mask.

 **Location:** Lakay settlement in the Lemoyne swamps. Find the sunken building, crouch through the hole. Mounted on the wall inside.

💀 *Wear the face of a predator.*`,region:"lemoyne",verified:!0},{id:"mask-pig",text:"Pig Mask",tip:" Butcher's Creek slaughtering area. Center of settlement.",tip_detailed:`**Pig Mask** - disturbing swine headwear.

 **Location:** Butcher's Creek slaughtering area. Hanging in the center of the creepy settlement.

🐷 *Don't ask what they do there. Just take the mask.*`,region:"new-hanover",verified:!0},{id:"helmet-viking",text:"Viking Helmet",tip:" Old Tomb, west of Roanoke Valley river, N of Beaver Hollow.",tip_detailed:`**Viking Helmet** - horned helm from the Norse.

 **Location:** Old Tomb, west of Roanoke Valley river, north of Beaver Hollow. Also find the Viking Hatchet and Comb here.

⚔️ *Vikings in America? The evidence sits on your head.*`,region:"new-hanover",verified:!0},{id:"mask-pagan",text:"Pagan Skull Mask",tip:" Pagan ritual site, NW of Lake Owanjila.",tip_detailed:`**Pagan Skull Mask** - from a disturbing ritual site.

 **Location:** Pagan ritual site, northwest of Lake Owanjila. On a corpse in a very disturbing scene.

⚠️ *This place is wrong. Take the mask and leave.*`,region:"west-elizabeth",verified:!0},{id:"mask-ram",text:"Ram Skull Mask",tip:" Rathskeller Fork, east corner. ⚠️ EPILOGUE ONLY!",tip_detailed:`**Ram Skull Mask** - horned skull headwear.

 **Location:** Rathskeller Fork, eastern corner. Hanging from a wooden pole.

⚠️ **Epilogue only** - New Austin access required.`,region:"new-austin",chapter:"epilogue",verified:!0}]},{id:"hats-npc",text:"NPC Encounter Hats",tip:"🤠 From specific NPCs through encounters or combat.",tip_detailed:`Some unique hats come from **specific NPCs**—either through encounters, robbery, or killing gang members.

🔫 *When life gives you enemies, take their hats.*`,verified:!0,subItems:[{id:"hat-raccoon",text:"Classic Raccoon Hat",tip:' Valentine saloon "crazy man" in back. Fistfight → grab hat.',tip_detailed:`**Classic Raccoon Hat** - Davy Crockett style.

 **Location:** Valentine saloon. There's a "crazy man" in the back. Encounter him multiple times, eventually you'll fistfight. Beat him and grab his hat.

🦝 *He won't need it after the beating you give him.*`,region:"new-hanover",chapter:2,verified:!0},{id:"hat-lemoyne-riders",text:"Lemoyne Raiders Hat",tip:" Kill Lemoyne Raiders (Scarlett Meadows). Gray army cap.",tip_detailed:`**Lemoyne Raiders Hat** - distinctive gray Confederate-style cap.

 **Source:** Kill Lemoyne Raiders in Scarlett Meadows or their hideouts.

🎖️ *The South lost the war. These boys didn't get the message.*`,region:"lemoyne",verified:!0},{id:"hat-murfree",text:"Murfree Brood Hat",tip:" Kill Murfree Brood (Roanoke Ridge). Unique dirty cap.",tip_detailed:`**Murfree Brood Hat** - filthy headwear from filthy people.

 **Source:** Kill Murfree Brood members in Roanoke Ridge.

⚠️ *Wash it before wearing. These people are... unsanitary.*`,region:"new-hanover",verified:!0},{id:"hat-del-lobo",text:"Del Lobo Sombrero",tip:" Kill Del Lobos (New Austin). ⚠️ EPILOGUE ONLY!",tip_detailed:`**Del Lobo Sombrero** - wide-brimmed Mexican outlaw style.

 **Source:** Kill Del Lobo gang members in New Austin.

⚠️ **Epilogue only** - New Austin access required.`,region:"new-austin",chapter:"epilogue",verified:!0}]},{id:"hats-missable",text:"⚠️ Missable Hats",tip:"⚠️ Only obtainable during specific story missions!",tip_detailed:`These hats can **ONLY be obtained during specific story missions**. Miss them and they're gone forever.

⚠️ Save before these missions if you're a completionist.

*One chance. Don't blow it.*`,missable:!0,verified:!0,subItems:[{id:"hat-guarma",text:"Guarma Hat",tip:"⚠️ GUARMA ONLY (Ch5)! Kill soldiers wearing unique hat.",tip_detailed:`**Guarma Hat** - tropical military style.

⚠️ **GUARMA ONLY (Chapter 5)** - You cannot return to Guarma! Kill soldiers wearing unique hats and grab them before leaving.

🏝️ *What happens in Guarma stays in Guarma. Including the hats you missed.*`,missable:!0,chapter:5,verified:!0},{id:"hat-police",text:"Saint Denis Police Cap",tip:'⚠️ "Angelo Bronte" mission (Ch4). Loot from killed police.',tip_detailed:`**Saint Denis Police Cap** - law enforcement headwear.

⚠️ **Mission:** "Angelo Bronte, A Man of Honor" (Chapter 4). Kill police during the mission and loot their caps.

👮 *Normally you can't kill cops without consequences. This mission's different.*`,missable:!0,chapter:4,verified:!0},{id:"hat-miners-mission",text:"Miner's Hat (Mission)",tip:'⚠️ "The Bridge to Nowhere" mission (Ch6). Loot from miner.',tip_detailed:`**Miner's Hat (Mission Version)** - lantern helmet.

⚠️ **Mission:** "The Bridge to Nowhere" (Chapter 6). Loot from miners during the mission.

*Different from the world location version—get both!*`,missable:!0,chapter:6,verified:!0},{id:"hat-military",text:"Military Mountie Hat",tip:"⚠️ Fort Wallace missions (Ch6). Loot from army officer.",tip_detailed:`**Military Mountie Hat** - officer's dress hat.

⚠️ **Missions:** Fort Wallace-related missions in Chapter 6. Loot from army officers.

🎖️ *The army's got style. Take it from them.*`,missable:!0,chapter:6,verified:!0},{id:"hat-braithwaite",text:"Braithwaite Manor Hat",tip:"⚠️ Manor raid mission (Ch3). Loot from estate guards.",tip_detailed:`**Braithwaite Manor Hat** - fancy estate guard headwear.

⚠️ **Mission:** Braithwaite Manor raid (Chapter 3). Loot unique hats from estate guards during the assault.

🔥 *The manor burns. Grab the hats first.*`,missable:!0,chapter:3,verified:!0}]},{id:"hats-tips",text:"Hat Collection Tips",tip:"💡 Helpful advice for collecting unique headwear.",tip_detailed:"Know these rules and you'll never lose a hat again.",verified:!0,subItems:[{id:"hat-tip-save",text:"Saving Hats",tip:"💾 If hat name appears on screen when picked up, it saves permanently.",tip_detailed:"When you pick up a hat and its **name appears on screen**, that hat is saved **permanently** to your wardrobe. If no name appears, it's just a temporary hat.",verified:!0},{id:"hat-tip-horse",text:"Horse Storage",tip:"🐴 Store up to 3 hats on horse saddle. More in wardrobe.",tip_detailed:"Your horse saddle can hold **up to 3 hats**. Additional saved hats go to your wardrobe at camp or hotel.",verified:!0},{id:"hat-tip-lost",text:"Lost Hats",tip:"🔄 Unique hats respawn at original location if lost.",tip_detailed:"If you lose a unique hat, it will **respawn at its original location**. Check back if you need it again.",verified:!0}]}]},Xe={id:"bandit",title:"Bandit Challenges",icon:"🏴‍☠️",defaultOpen:!1,tip_detailed:`Embrace your **outlaw nature**. These challenges require robbery, theft, and general lawlessness.

⚠️ Honor takes a hit. Plan your crimes wisely.

*The law's just a suggestion out here.*`,verified:!0,items:[{id:"bandit-1",text:"Rank 1: Hold Up 5 Townsfolk",tip:"🔫 Aim weapon at civilians, demand money. Quick and dishonorable.",verified:!0},{id:"bandit-2",text:"Rank 2: Rob 2 Coaches",tip:"🚃 Road coaches or robbery missions from Alden/Hector work.",verified:!0},{id:"bandit-3",text:"Rank 3: Rob 4 Registers in 1 Day",tip:"💰 Hit Valentine → Strawberry → Rhodes → Saint Denis. Fast horse required!",verified:!0},{id:"bandit-4",text:"Rank 4: Rob 3 Coaches in 1 Day",tip:"🚃 Camp near roads with coach spawns. Horse stimulants help.",verified:!0},{id:"bandit-5",text:"Rank 5: Amass $250 Bounty",tip:"👮 Kill lawmen in one state. Pay it off after to reset.",verified:!0},{id:"bandit-6",text:"Rank 6: Steal 5 Horses → Sell to Fence",tip:"🐴 Clemens Cove horse fence (Ch3+). Steal quality horses for profit.",chapter:3,verified:!0},{id:"bandit-7",text:"Rank 7: Rob $50 From Townsfolk",tip:"💵 Hold up wealthy NPCs in Saint Denis—they carry more cash.",verified:!0},{id:"bandit-8",text:"Rank 8: Steal 7 Wagons → Sell to Fence",tip:"🛒 Emerald Ranch wagon fence. Any covered wagon counts.",verified:!0},{id:"bandit-9",text:"Rank 9: Hogtie 3 People to Train Tracks",tip:"🚂 Hogtie → place on tracks → wait for train. Very dishonorable.",verified:!0},{id:"bandit-10",text:"Rank 10: Complete 5 Train Robberies",tip:"🚂 Without dying or getting caught. Stop trains in tunnels for easy escape.",verified:!0}]},Ze={id:"explorer",title:"Explorer Challenges",icon:"🗺️",defaultOpen:!1,tip_detailed:`Discover the **hidden treasures** and **points of interest** across the frontier.

🗺️ Treasure hunts unlock valuable gold bars. Points of interest fill your journal.

*The West is vast. Explore every corner.*`,verified:!0,items:[{id:"explorer-1",text:"Rank 1: Find Any Treasure Map",tip:"🗺️ Buy from Maximo, find in gang hideouts, or loot strangers.",verified:!0},{id:"explorer-2",text:"Rank 2: Find 1 Treasure Stash",tip:"💰 Complete any treasure hunt chain. Jack Hall Gang is easiest.",verified:!0},{id:"explorer-3",text:"Rank 3: Find 2 Treasure Stashes",tip:"💰 Jack Hall Gang + High Stakes recommended.",verified:!0},{id:"explorer-4",text:"Rank 4: Find 3 Treasure Stashes",tip:"💰 Add Poisonous Trail treasure.",verified:!0},{id:"explorer-5",text:"Rank 5: Find 4 Treasure Stashes",tip:"💰 Add Le Tresor Des Morts.",verified:!0},{id:"explorer-6",text:"Rank 6: Find 5 Treasure Stashes",tip:"💰 All major treasure hunts complete.",verified:!0},{id:"explorer-7",text:"Rank 7: Discover 10 Points of Interest",tip:"🔍 Unique locations that get drawn in your journal when found.",verified:!0},{id:"explorer-8",text:"Rank 8: Discover 15 Points of Interest",tip:"🔍 Explore Ambarino and Lemoyne thoroughly.",verified:!0},{id:"explorer-9",text:"Rank 9: Discover 20 Points of Interest",tip:"🔍 Use online map guides to find remaining ones.",verified:!0},{id:"explorer-10",text:"Rank 10: Discover 25+ Points of Interest",tip:"🔍 Full world exploration required. Every region has secrets.",verified:!0}]},et={id:"hunter",title:"Master Hunter Challenges",icon:"🏹",defaultOpen:!1,tip_detailed:`Become a **master of the hunt**. Perfect pelts, tracking, and dangerous game.

🏆 Rank 10 **unlocks the Legendary Panther** hunt!

*The hunt is its own reward.*`,verified:!0,items:[{id:"hunter-1",text:"Rank 1: Skin 3 Deer",tip:"🦌 Very easy. Heartlands is full of deer.",verified:!0},{id:"hunter-2",text:"Rank 2: 3 Perfect Rabbit Pelts",tip:"🐰 VARMINT RIFLE headshots only. Small game arrows also work.",verified:!0},{id:"hunter-3",text:"Rank 3: Track 10 Animal Species",tip:"👁️ Study with binoculars, then follow tracks. Various biomes.",verified:!0},{id:"hunter-4",text:"Rank 4: Call Animal & Kill It (5x)",tip:"📢 Aim → press call button → wait → headshot when it looks.",verified:!0},{id:"hunter-5",text:"Rank 5: Skin 3 Bears",tip:"🐻 Black Bears (common) or Grizzlies. North of Strawberry.",verified:!0},{id:"hunter-6",text:"Rank 6: Kill 5 Cougars with Bow",tip:"🏹 Poison arrows recommended. West of Owanjila at night. Save often!",verified:!0},{id:"hunter-7",text:"Rank 7: Use Bait to Kill Predator AND Herbivore",tip:"🥩 Potent bait types. Place, hide, wait, shoot.",verified:!0},{id:"hunter-8",text:"Rank 8: Catch 3 Fish Without Fishing Rod",tip:"💥 Dynamite, poison arrows, or bow in shallow water.",verified:!0},{id:"hunter-9",text:"Rank 9: Kill Opossum Playing Dead",tip:"🦔 They fake death when approached. Wait for it, then shoot.",verified:!0},{id:"hunter-10",text:"Rank 10: Hunt Legendary Panther (Giaguaro) ⭐",tip:"🐆 This challenge UNLOCKS the Legendary Panther. Bolger Glade. Extremely dangerous!",priority:!0,verified:!0}]},tt={id:"herbalist",title:"Herbalist Challenges",icon:"🌿",defaultOpen:!1,tip_detailed:`Master the **flora of the frontier**. Collect plants, craft tonics, and cook seasoned meals.

⚠️ Rank 9 requires **New Austin** (Epilogue for most players).

*Nature provides everything you need. Learn to use it.*`,verified:!0,items:[{id:"herbalist-1",text:"Rank 1: Pick 6 Yarrow",tip:"🌼 Yellow flowers. Very common in Heartlands grasslands.",verified:!0},{id:"herbalist-2",text:"Rank 2: Eat 4 Berry Types",tip:"🫐 Raspberry, Blackberry, Wintergreen, Evergreen. Just eat them.",verified:!0},{id:"herbalist-3",text:"Rank 3: Craft 7 Sage-Based Items",tip:"🌿 Potent Bitters or Seasoned Meat. Sage is common.",verified:!0},{id:"herbalist-4",text:"Rank 4: Feed Horse 5 Mushrooms",tip:"🍄 Any mushroom type. Open satchel → select → feed option.",verified:!0},{id:"herbalist-5",text:"Rank 5: Craft 9 Indian Tobacco Items",tip:"🌿 Snake Oil uses it. Find Indian Tobacco near rivers.",verified:!0},{id:"herbalist-6",text:"Rank 6: Collect 15 Plant Species",tip:"🌱 Explore different biomes. Desert plants available in Epilogue.",verified:!0},{id:"herbalist-7",text:"Rank 7: Craft 5 Special Miracle Tonics",tip:"⚗️ High-tier recipes. Buy pamphlets from Fence.",verified:!0},{id:"herbalist-8",text:"Rank 8: Craft 6 Poison Weapons (Oleander)",tip:"☠️ Poison arrows/throwing knives. Oleander grows in Bayou.",region:"lemoyne",verified:!0},{id:"herbalist-9",text:"Rank 9: Pick All 43 Plant Species ⚠️",tip:"⚠️ REQUIRES NEW AUSTIN! Desert cactus, etc. Epilogue normally.",chapter:"epilogue",verified:!0},{id:"herbalist-10",text:"Rank 10: Season & Cook 11 Meat Types",tip:"🍖 Cook all meat types with oregano/thyme/mint. SEASONED versions count.",verified:!0}]},it={id:"sharpshooter",title:"Sharpshooter Challenges",icon:"🎯",defaultOpen:!1,tip_detailed:`Prove your **marksmanship**. Precision shooting, Dead Eye mastery, and impossible shots.

🎯 Use Dead Eye liberally—it's key to most of these.

*Shoot straight, or don't shoot at all.*`,verified:!0,items:[{id:"sharp-1",text:"Rank 1: Kill 3 Flying Birds",tip:"🦆 Shotgun makes this easy. Ducks, crows, any birds.",verified:!0},{id:"sharp-2",text:"Rank 2: Kill 2 Species in 1 Dead Eye",tip:"🎯 Deer + coyote or bird + rabbit. Tag both, execute.",verified:!0},{id:"sharp-3",text:"Rank 3: Kill 5 Birds from Moving Train",tip:"🚂 Ride on roof. Shotgun or repeater. Plenty of birds fly by.",verified:!0},{id:"sharp-4",text:"Rank 4: Kill Enemy from 80ft (Tomahawk)",tip:"🪓 Homing Tomahawk on stationary target. Gang hideout works.",verified:!0},{id:"sharp-5",text:"Rank 5: Kill 6 Animals (No Reload/Switch)",tip:"🔫 Varmint rifle + field of rabbits. Or bow in deer area.",verified:!0},{id:"sharp-6",text:"Rank 6: Kill Enemy from 660ft+",tip:"🔭 Carcano Rifle + long scope. Find long sightline at any enemy camp.",verified:!0},{id:"sharp-7",text:"Rank 7: Get 7 Headshots in a Row",tip:"💀 Dead Eye + gang hideout. Easy with practice.",verified:!0},{id:"sharp-8",text:"Rank 8: Disarm 3 Enemies (No Reload)",tip:"✋ Aim for gun hand in Dead Eye. Precise aim required.",verified:!0},{id:"sharp-9",text:"Rank 9: Shoot 3 Hats Off (Same Dead Eye)",tip:"🤠 Tag 3 heads high, don't kill. Town works well.",verified:!0},{id:"sharp-10",text:"Rank 10: 3 Birds with 3 Consecutive Rifle Shots",tip:"🦅 Long scoped rifle. Wait for birds to bunch up in the air.",verified:!0}]},at={id:"horseman",title:"Horseman Challenges",icon:"🐎",defaultOpen:!1,tip_detailed:`Prove your mastery of **horseback riding**. Speed runs, mounted combat, and breaking wild horses.

⚠️ Rank 9 requires **New Austin** (Epilogue).

*A rider and his horse are one.*`,verified:!0,items:[{id:"horseman-1",text:"Rank 1: Kill 5 Rabbits from Horseback",tip:"🐴 Trample them or shoot. Fields near Valentine work well.",verified:!0},{id:"horseman-2",text:"Rank 2: Jump 3 Obstacles in 15 Seconds",tip:"🐴 Find fence line, jump three times quickly.",verified:!0},{id:"horseman-3",text:"Rank 3: Valentine → Rhodes Under 5 Min",tip:"⏱️ Horse Stimulants. Direct road. Fast horse essential.",verified:!0},{id:"horseman-4",text:"Rank 4: Drag Victim 3300 Feet",tip:"🐴 Lasso someone, drag them while riding in big circles.",verified:!0},{id:"horseman-5",text:"Rank 5: Trample 5 Animals",tip:"🐴 Gallop through rabbit/squirrel fields.",verified:!0},{id:"horseman-6",text:"Rank 6: Strawberry → Saint Denis (No Touching Water)",tip:"⏱️ Under 9 minutes. Long detour around rivers. Use bridges only!",verified:!0},{id:"horseman-7",text:"Rank 7: Kill 7 Enemies from Horseback",tip:"🔫 Don't dismount. Gang hideout. Any weapon works.",verified:!0},{id:"horseman-8",text:"Rank 8: Kill 9 Predators from Horseback",tip:"🐺 Wolves, cougars, bears. Use rifle from saddle.",verified:!0},{id:"horseman-9",text:"Rank 9: Van Horn → Blackwater (No Touching Water) ⚠️",tip:"⚠️ REQUIRES EPILOGUE. Under 17 min. Long detour through Ambarino.",chapter:"epilogue",verified:!0},{id:"horseman-10",text:"Rank 10: Break Every Wild Horse Breed",tip:"🐴 Mustang, Nokota, American Paint, Hungarian, Morgan.",verified:!0}]},rt={id:"survivalist",title:"Survivalist Challenges",icon:"⛺",defaultOpen:!1,tip_detailed:`Live off the land. **Fishing, crafting, and hunting** like a true frontier survivor.

🎣 These challenges teach you the full survival loop.

*The wilderness provides for those who know how to take.*`,verified:!0,items:[{id:"survivalist-1",text:"Rank 1: Catch 3 Bluegill",tip:"🎣 Common fish. Any lake with bread/cheese bait.",verified:!0},{id:"survivalist-2",text:"Rank 2: Donate 5 Animals to Camp/Trapper",tip:"🦌 Hand in carcasses or pelts at camp or Trapper.",verified:!0},{id:"survivalist-3",text:"Rank 3: Kill 5 Animals with Varmint Rifle",tip:"🔫 Rabbits, squirrels, birds. Easy headshots.",verified:!0},{id:"survivalist-4",text:"Rank 4: Craft All Arrow Types",tip:"🏹 Dynamite, Fire, Poison, Improved, Small Game. Buy pamphlets.",verified:!0},{id:"survivalist-5",text:"Rank 5: Catch Fish from Boat + Railroad Tracks",tip:"🎣 Bayou riverboat, then stand on railroad over water.",verified:!0},{id:"survivalist-6",text:"Rank 6: Kill Scavenging Animal 5 Times",tip:"🦅 Kill coyote/vulture while it's eating a corpse.",verified:!0},{id:"survivalist-7",text:"Rank 7: 8 Small Game Kills (Small Game Arrows)",tip:"🐰 Consecutive kills. Rabbits/squirrels. Don't miss!",verified:!0},{id:"survivalist-8",text:"Rank 8: Craft Special Throwables",tip:"💣 Homing Tomahawk, Improved Tomahawk, Volatile Dynamite, Volatile Fire Bottle.",verified:!0},{id:"survivalist-9",text:"Rank 9: Catch Fish Over 19 Pounds",tip:"🐟 Legendary fish or big Muskie/Pike. Special lures required.",verified:!0},{id:"survivalist-10",text:"Rank 10: Catch All Fish Species",tip:"🎣 All 13 fish types. Different lures for different fish.",verified:!0}]},ot={id:"gambler",title:"Gambler Challenges",icon:"🎰",defaultOpen:!1,tip_detailed:`Test your luck at **poker, blackjack, dominoes**, and five finger fillet.

⚠️ Gambler 8 is notoriously RNG-dependent. Save constantly!

*Lady Luck is fickle. Patience is your friend.*`,verified:!0,items:[{id:"gambler-1",text:"Rank 1: Win 5 Poker Hands",tip:"🃏 Flatneck Station or Valentine. Play conservatively.",verified:!0},{id:"gambler-2",text:"Rank 2: Double Down 5x (Blackjack)",tip:"🃏 Only double on 10-11. Shows confidence.",verified:!0},{id:"gambler-3",text:"Rank 3: Win 3 Dominoes Games",tip:"🎲 Emerald Station is easiest. Block opponent's high numbers.",verified:!0},{id:"gambler-4",text:"Rank 4: Bust a Poker Player at Each Location",tip:"🃏 Keep playing until opponent leaves broke. Patience!",verified:!0},{id:"gambler-5",text:"Rank 5: Win 3 Dominoes in a Row",tip:"🎲 All Threes mode. Defensive play. Don't break streak!",verified:!0},{id:"gambler-6",text:"Rank 6: Blackjack with 3+ Hits (5x)",tip:"🃏 Hit on low cards (12-16). RNG heavy but doable.",verified:!0},{id:"gambler-7",text:"Rank 7: Five Finger Fillet All Locations",tip:"🔪 Beat players at Strawberry, Valentine, and Van Horn.",verified:!0},{id:"gambler-8",text:"Rank 8: Win 3 Blackjack (3+ Hits Each) ⚠️",tip:"⚠️ HARDEST CHALLENGE. Must hit 3+ times AND win. SAVE CONSTANTLY!",verified:!0},{id:"gambler-9",text:"Rank 9: Win 3 Dominoes in a Row (All Fives)",tip:"🎲 Different mode than Rank 5. Very grindy.",verified:!0},{id:"gambler-10",text:"Rank 10: Win 3 Poker Hands in a Row",tip:"🃏 Play at low stakes. Fold when weak. Don't break streak!",verified:!0}]},nt={id:"weapons-expert",title:"Weapons Expert",icon:"🔪",defaultOpen:!1,tip_detailed:`Master **every weapon type**. Knives, tomahawks, explosives, and precise gunplay.

⚠️ Rank 10 is brutal—killing a Grizzly with throwing knives without taking damage.

*A true gunslinger knows every tool of the trade.*`,verified:!0,items:[{id:"weapons-expert-1",text:"Rank 1: Kill 3 Enemies with a Knife",tip:"🔪 Melee knife attacks. Any enemies work.",verified:!0},{id:"weapons-expert-2",text:"Rank 2: Kill 3 Enemies in 10 Sec (Throwing Knives)",tip:"🔪 Dead Eye helps. Camp raids work well.",verified:!0},{id:"weapons-expert-3",text:"Rank 3: Kill 3 Birds of Prey with Tomahawk",tip:"🪓 Hawks/eagles. Use Homing Tomahawk. Very difficult!",verified:!0},{id:"weapons-expert-4",text:"Rank 4: Kill 10 Enemies (Shotgun Crafted Ammo)",tip:"💥 Use Slug, Incendiary, or Explosive shells.",verified:!0},{id:"weapons-expert-5",text:"Rank 5: Kill 5 Mounted Enemies (1 Throwing Knife Each)",tip:"🔪 One knife per kill. Target riders, not horses.",verified:!0},{id:"weapons-expert-6",text:"Rank 6: Kill 4 Enemies with Single Dynamite",tip:"💣 Lure enemies together. Gang hideouts work best.",verified:!0},{id:"weapons-expert-7",text:"Rank 7: Kill 4 Consecutive Enemies (Same Tomahawk)",tip:"🪓 Throw, retrieve, repeat 4 times. Don't miss!",verified:!0},{id:"weapons-expert-8",text:"Rank 8: Kill 15 Enemies (Long-Barreled Sidearm)",tip:"🔫 Mauser, Semi-Auto, or Volcanic Pistol with long barrel.",verified:!0},{id:"weapons-expert-9",text:"Rank 9: Kill 9 Unaware Enemies from Behind (Bow)",tip:"🏹 Stealth kills. Sneak up at enemy camps.",verified:!0},{id:"weapons-expert-10",text:"Rank 10: Kill Grizzly Bear (Throwing Knives, No Damage) ⚠️",tip:"⚠️ HARDEST CHALLENGE. Use cover, Dead Eye, and extreme patience.",verified:!0}]},st=[Xe,Ze,et,tt,it,at,rt,ot,nt],lt={id:"missable",title:"Missable Content",icon:"⚠️",defaultOpen:!0,items:[{id:"missable-bolt-action",text:"Bolt Action Rifle (Free)",tip:' "The First Shall Be Last" mission. Kill LEFT bounty hunter fast.',tip_detailed:`During the mission **"The First Shall Be Last"** in Chapter 2, you're ambushed by bounty hunters. Kill the one on the **LEFT side fast**—before he rides off.

Loot his body and you get a **free Bolt Action Rifle**. Miss him, and you gotta buy it later for $180.

⚠️ **One chance only.** If he escapes, the rifle's gone forever.`,missable:!0,chapter:2,region:"new-hanover",reward:"Bolt Action Rifle",verified:!0},{id:"missable-mary-missions",text:"Mary Linton Missions (3 Parts)",tip:"💔 Complete all before Chapter 6 ends. Emotional storyline.",tip_detailed:`**Mary Linton**—Arthur's old flame. She sends letters askin' for help, and each meeting tears open old wounds.

📋 **3 Parts:**
• Part 1: Help with her father
• Part 2: Help with her brother Jamie
• Part 3: Final meeting—the choice that haunts you

⚠️ **Must complete before Chapter 6 deadline.** After that, there's no more chances.

*Some things can't be fixed. But you can still try.*`,missable:!0,chapter:6,region:"new-hanover",reward:"Story Content + Closure",verified:!0},{id:"missable-edith-downes",text:"Edith Downes Missions (2 Parts)",tip:" Saint Denis slums. After debt collection. Redemption.",tip_detailed:`Remember **Thomas Downes**? The sick man you beat for a debt? His widow **Edith** and son are now living in the Saint Denis slums.

📋 **2 Parts:** Arthur tries to make amends. It's a redemption arc that hits hard.

 Find her in **Saint Denis**, near the slums district.

⚠️ **Must complete as Arthur, before Chapter 6 ends.**

*You can't undo what you did. But you can try to make it right.*`,missable:!0,chapter:6,region:"lemoyne",reward:"Redemption + Honor",verified:!0},{id:"missable-veteran",text:"The Veteran (Hamish Sinclair)",tip:" O'Creagh's Run. 4 Parts. Final part gives Buell the horse.",tip_detailed:`**Hamish Sinclair** is a one-legged Civil War veteran living alone by **O'Creagh's Run**. Over 4 missions, you hunt together, fish together, and become genuine friends.

📋 **4 Parts:** Each encounter deepens the friendship.

🐴 **Final reward: Buell** - Hamish's horse. One of the best in the game, and carrying emotional weight.

⚠️ **Pro tip:** Do the first 3 parts as Arthur, but save the **final part for the Epilogue as John**. That way you can keep Buell.

*Hamish is good people. The kind this world don't make no more.*`,missable:!0,chapter:6,region:"new-hanover",reward:"Buell (Horse)",verified:!0},{id:"missable-widow",text:"The Widow (Charlotte Balfour)",tip:" North of Annesburg. 3 Parts. Teaching survival.",tip_detailed:`**Charlotte Balfour**'s husband died, leaving her alone in the wilderness north of Annesburg. She don't know how to survive.

📋 **3 Parts:** Arthur teaches her to hunt, to shoot, to live.

 Find her cabin **north of Annesburg**, near Willard's Rest.

⚠️ **Must complete as Arthur.** There's a gut-punch moment if you come back as John later...

*Sometimes the best thing you can do is help someone stand on their own.*`,missable:!0,chapter:6,region:"new-hanover",reward:"Story Content + Food Gifts",verified:!0},{id:"missable-pearson-jacket",text:"Pearson's Scout Jacket",tip:"🐰 Donate a rabbit carcass to Pearson. Chapters 2-3 only.",tip_detailed:`In **Chapters 2 or 3**, donate a **rabbit carcass** (not pelt—the whole animal) to **Pearson** at the provisions wagon.

After camp upgrades a bit, he'll give you the **Scout Jacket** as thanks—a unique clothing item you can't get any other way.

⚠️ **Chapters 2-3 only.** After Chapter 4, the camp dynamics change and this becomes impossible.

*Pearson appreciates the little things. So should you.*`,missable:!0,chapter:3,region:"new-hanover",reward:"Scout Jacket (Unique)",verified:!0},{id:"missable-kieran",text:"Fishing with Kieran",tip:"🎣 Chapter 3 only. Before Kieran's fate.",tip_detailed:`**Kieran Duffy** finally gets a chance to bond with the gang. He invites you fishin' in **Chapter 3**.

Do this mission. It's your only chance to really know him.

⚠️ **Chapter 3 only.** After that... well, Kieran's story takes a dark turn.

*Poor Kieran. He just wanted to belong.*`,missable:!0,chapter:3,region:"lemoyne",reward:"Character Moment",verified:!0},{id:"missable-chicks-treasure",text:"Chick's Treasure Map",tip:"🖼️ Painting in Shady Belle. Inspect BEFORE leaving in Chapter 4.",tip_detailed:`There's a **painting inside Shady Belle** that reveals **Chick's Treasure Map** when you inspect it.

 Find it on a wall inside the main building, **before you leave Shady Belle at the end of Chapter 4**.

⚠️ Once the camp moves to Beaver Hollow, the painting despawns and this treasure is locked forever.

💰 *Free money you'll never see if you don't pay attention.*`,missable:!0,chapter:4,region:"lemoyne",reward:"Chick's Treasure Map",verified:!0},{id:"missable-lenny",text:"A Quiet Time (Lenny Night)",tip:"🍺 Valentine bar. Automatic story mission. YNNEL!",tip_detailed:`**"A Quiet Time"** - the legendary drunk night with **Lenny Summers** in Valentine.

🍺 This is an automatic story mission in Chapter 2, so you can't miss it per se, but it's so good it deserves mention.

**YNNEL! LENNYYY!**

*One of the greatest missions in gaming history. Enjoy every second.*`,missable:!0,chapter:2,region:"new-hanover",reward:"Legendary Memory",verified:!0},{id:"missable-camp-requests",text:"Camp Companion Requests",tip:"🔍 Gang members ask for items (pipe, book, etc.). Check scouting icon.",tip_detailed:`Throughout Chapters 2-4, gang members will ask you to find specific items for them—a **harmonica**, a **pipe**, a **romance novel**, etc.

 Look for the **white "scouting" icon** at camp to hear their requests.

⚠️ **All requests become unavailable after Chapter 4.** And completing them builds bonds, unlocks unique camp interactions.

*These people are your family. Take care of 'em.*`,missable:!0,chapter:4,verified:!0},{id:"missable-high-honor",text:"High Honor Missions",tip:"😇 Some stranger encounters require high honor to access.",tip_detailed:`Several stranger missions only become available if your **Honor is high enough**:

📋 **Examples:**
• Brother Dorkins at Saint Denis Church
• Certain dialogue options with strangers
• The "Do Not Seek Absolution" missions

Keep your honor up by **greeting people**, **helping strangers**, and **sparing lives** when given the choice.

😇 *Be the man you wish you'd been. There's still time.*`,missable:!0,verified:!0},{id:"missable-do-not-seek",text:"Do Not Seek Absolution I & II",tip:"⛪ Brother Dorkins. High honor required. Saint Denis church.",tip_detailed:`**Brother Dorkins** at the **Saint Denis church** offers confession and missions, but only if your **honor is high**.

📋 **2 Parts:**
• Part I: Confession and charity work
• Part II: Deeper redemption arc

⚠️ **High honor required.** If you've been a murdering bastard, the doors stay closed.

⛪ *Even outlaws can find grace. If they seek it.*`,missable:!0,chapter:6,region:"lemoyne",reward:"Absolution + Honor",verified:!0}]},dt={id:"collectibles",title:"Collectibles",icon:"🏆",defaultOpen:!1,items:[{id:"collect-dreamcatchers",text:"Dreamcatchers (20 Total)",tip:"🪶 Hanging in trees. All 20 = map to Ancient Arrowhead.",tip_detailed:`There are **20 dreamcatchers** hidden across the world, hanging in tree branches. Find them all and you'll receive a map leading to the **Ancient Arrowhead**.

🏆 **Reward:** Ancient Arrowhead - reduces bow stamina drain when drawn.

🔍 Use **Eagle Eye** to spot them glinting in the trees.

*Native wisdom, hanging in the wind. Each one brings you closer to the prize.*`,reward:"Ancient Arrowhead",verified:!0,subItems:[{id:"dream-01",text:"Flatneck Station West",tip:" Hill west of Flatneck Station, in a tree.",region:"new-hanover",verified:!0},{id:"dream-02",text:"Caliban's Seat West",tip:" Near road junction, tree facing north.",region:"new-hanover",verified:!0},{id:"dream-03",text:"Dakota River South Bank",tip:" On a ledge facing the river, near legendary fish spot.",region:"new-hanover",verified:!0},{id:"dream-04",text:"Heartland Overflow",tip:" Large leafless tree near overflow area.",region:"new-hanover",verified:!0},{id:"dream-05",text:"Heartland Hills",tip:" Large standalone leafless tree.",region:"new-hanover",verified:!0},{id:"dream-06",text:"Grizzlies SE",tip:" On mountain path, past fallen tree.",region:"ambarino",verified:!0},{id:"dream-07",text:"Cotorra Springs East",tip:" Biggest tree in small thicket.",region:"ambarino",verified:!0},{id:"dream-08",text:"Near The Loft",tip:" South of The Loft, only bare tree on right side.",region:"ambarino",verified:!0},{id:"dream-09",text:"Snowy Peak",tip:" Clump of trees after crossing river, heading NNW.",region:"ambarino",verified:!0},{id:"dream-10",text:"Campfire Area",tip:" Big tree behind log and small stump.",region:"ambarino",verified:!0},{id:"dream-11",text:"Annesburg North 1",tip:" In a clearing north of Annesburg.",region:"new-hanover",verified:!0},{id:"dream-12",text:"Annesburg North 2",tip:" Edge of road just north of town.",region:"new-hanover",verified:!0},{id:"dream-13",text:"Annesburg SE",tip:" Top of hill southeast of Annesburg.",region:"new-hanover",verified:!0},{id:"dream-14",text:"Annesburg South",tip:" Middle of tree group off road.",region:"new-hanover",verified:!0},{id:"dream-15",text:"Roanoke Ridge Hill",tip:" Tree that does not stand out, higher up.",region:"new-hanover",verified:!0},{id:"dream-16",text:"Elysian Pool South",tip:" Big tree by a bush south of pool.",region:"new-hanover",verified:!0},{id:"dream-17",text:"Bluewater Marsh NE",tip:" Tree at path fork in marsh.",region:"lemoyne",verified:!0},{id:"dream-18",text:"Lonnie's Shack North",tip:" On a path north of the shack.",region:"lemoyne",verified:!0},{id:"dream-19",text:"Aberdeen Pig Farm West",tip:" Hill west of the creepy farm.",region:"new-hanover",verified:!0},{id:"dream-20",text:"Elysian Pool Area (LAST)",tip:" Beyond old house foundation. LAST ONE → Get Map!",region:"new-hanover",priority:!0,verified:!0}]},{id:"collect-exotics",text:"Exotic Quest (Duchesses and Other Animals)",tip:"🌺 Algernon Wasp - Greenhouse N of Saint Denis. Chapter 4+. Very grindy!",tip_detailed:`**Algernon Wasp** is a strange little man with a greenhouse **north of Saint Denis**. He needs exotic orchids, bird plumes, and gator eggs for his... projects.

⚠️ **Available:** Chapter 4+, after "The Gilded Cage"

📋 **5 Parts** - each must be completed before the next begins. Orchids only spawn up to the current quest amount!

🏆 **Final Rewards:** Algernon's Revolver (unique) + Exotic Hat + $200

*The grindiest quest in the game. Patience required.*`,reward:"Algernon's Revolver + Exotic Hat + $200",chapter:4,region:"lemoyne",verified:!0,subItems:[{id:"exotic-part1",text:"── PART I ──",tip:"⚠️ START HERE: Orchids only spawn up to current quest amount!",verified:!0},{id:"exotic-p1-lady",text:"Lady of the Night Orchids (15)",tip:" Trees in Bayou Nwa southern shore, N of Kamassa River, Caliga Hall area.",region:"lemoyne",verified:!0},{id:"exotic-p1-egret-little",text:"Little Egret Plumes (5)",tip:"🐦 White egrets in Bayou Nwa. Varmint Rifle headshot. Farm near Lagras.",region:"lemoyne",verified:!0},{id:"exotic-p1-egret-reddish",text:"Reddish Egret Plumes (5)",tip:"🐦 Scarlett Meadows coastline. Reddish colored birds.",region:"lemoyne",verified:!0},{id:"exotic-part2",text:"── PART II ──",tip:"✅ Turn in Part I first! New orchids spawn after.",verified:!0},{id:"exotic-p2-moccasin",text:"Moccasin Flower Orchids (10)",tip:" GROUND orchids around Butcher Creek, Roanoke Ridge.",region:"new-hanover",verified:!0},{id:"exotic-p2-slipper",text:"Lady Slipper Orchids (7)",tip:" GROUND orchids in Big Valley, West Elizabeth.",region:"west-elizabeth",verified:!0},{id:"exotic-p2-egret-snowy",text:"Snowy Egret Plumes (5)",tip:"🐦 Farm Bayou Nwa → Rhodes → Emerald Station fast travel → sleep → return.",region:"lemoyne",verified:!0},{id:"exotic-p2-spoonbill",text:"Roseate Spoonbill Plumes (5)",tip:"🩷 PINK birds! Bayou Nwa islands. Beautiful but rare.",region:"lemoyne",verified:!0},{id:"exotic-part3",text:"── PART III ──",tip:"🔍 Quest getting harder. Use Eagle Eye (L3+R3) constantly!",verified:!0},{id:"exotic-p3-acuna",text:"Acuna's Star Orchids (3)",tip:" TREES in NE Bayou Nwa.",region:"lemoyne",verified:!0},{id:"exotic-p3-cigar",text:"Cigar Orchids (7)",tip:" TREES in Bluewater Marsh and NE Bayou Nwa.",region:"lemoyne",verified:!0},{id:"exotic-p3-eggs",text:"Gator Eggs (5)",tip:" Nests near water in Bayou Nwa. Check shorelines.",region:"lemoyne",verified:!0},{id:"exotic-part4",text:"── PART IV ──",tip:"💪 Almost there! Keep searching systematically.",verified:!0},{id:"exotic-p4-ghost",text:"Ghost Orchids (5)",tip:" TREES deep in Bayou Nwa. Hard to spot - use Eagle Eye!",region:"lemoyne",verified:!0},{id:"exotic-p4-night",text:"Night Scented Orchids (5)",tip:" TREES south of Braithwaite Manor area.",region:"lemoyne",verified:!0},{id:"exotic-p4-rat",text:"Rat Tail Orchids (10)",tip:" TREES throughout Lemoyne swamps.",region:"lemoyne",verified:!0},{id:"exotic-p4-spider",text:"Spider Orchids (5)",tip:" TREES in Lemoyne swamp areas.",region:"lemoyne",verified:!0},{id:"exotic-part5",text:"── PART V (FINAL) ──",tip:"🎉 Last stretch! Collect these for the big reward.",verified:!0},{id:"exotic-p5-clamshell",text:"Clamshell Orchids (5)",tip:" TREES E of Caliga Hall and Shady Belle, along riverfront.",region:"lemoyne",verified:!0},{id:"exotic-p5-queens",text:"Queen's Orchids (5)",tip:" GROUND near shores of Lagras and Lakay, Bayou Nwa.",region:"lemoyne",verified:!0},{id:"exotic-p5-sparrow",text:"Sparrow's Egg Orchids (10)",tip:" GROUND N of Roanoke Ridge and Elysian Pool.",region:"new-hanover",verified:!0},{id:"exotic-p5-dragon",text:"Dragon's Mouth Orchids (5)",tip:" GROUND scattered across Grizzlies East mountains.",region:"ambarino",verified:!0},{id:"exotic-p5-eggs",text:"Gator Eggs (20 more)",tip:" 20 more eggs! Same locations. Check repeatedly.",region:"lemoyne",verified:!0},{id:"exotic-complete",text:"✨ COMPLETE → Get Rewards!",tip:"🎁 Return to Algernon for: Algernon's Revolver, Exotic Hat, $200 cash!",priority:!0,reward:"Algernon's Revolver + Hat + $200",verified:!0}]},{id:"collect-dino",text:"Dinosaur Bones (30 Total)",tip:'🦴 See "A Test of Faith" in Stranger Missions. Full detailed list there.',tip_detailed:`**30 dinosaur bones** are scattered across the world. Find them all for paleontologist **Deborah MacGuinness**.

 **Quest:** "A Test of Faith" stranger mission

🏆 **Rewards:**
• Mail 1 bone → Quartz Chunk (talisman ingredient)
• Mail all 30 → Jawbone Knife (unique weapon)

*Ancient bones, modern science. Deborah's ahead of her time.*`,reward:"Jawbone Knife + Quartz Chunk",verified:!0},{id:"collect-rock",text:"Rock Carvings (10 Total)",tip:'🗿 See "Geology for Beginners" in Stranger Missions.',tip_detailed:`**10 rock carvings** are hidden in cliffsides and mountain faces. Find them all for **Francis Sinclair**.

 **Quest:** "Geology for Beginners" stranger mission

🏆 **Final Reward:** Old Brass Compass - required for the **Raven Claw Talisman** (-20% weapon degradation!)

🗿 *Francis Sinclair is... strange. But his compass is worth the search.*`,reward:"Old Brass Compass (Raven Talisman ingredient)",verified:!0},{id:"collect-cig",text:"Cigarette Cards (144 Total - 12 Sets)",tip:'🃏 See "Cigarette Cards" section for all 12 sets.',tip_detailed:`**144 cigarette cards** across **12 themed sets**. Collect them by:
• Buying premium cigarettes (guaranteed cards)
• Finding them in the world
• Looting enemies

📋 **12 Sets:** Flora, Fauna, Horses, Actresses, etc.

🏆 **Rewards:** Complete any set → Vintage Civil War Handcuffs + cash bonuses

🃏 *Mail completed sets to Phineas T. Ramsbottom in Saint Denis.*`,reward:"Vintage Civil War Handcuffs + cash",verified:!0},{id:"collect-graves",text:"Graves (9 Total)",tip:'🪦 See "Gang Member Graves" section.',tip_detailed:`Visit the **9 graves** of fallen gang members. A somber journey through loss.

⚠️ **Epilogue content** - requires completing the main story.

🏆 **Reward:** "Paying Respects" achievement/trophy

🪦 *Pay your respects to those who didn't make it.*`,reward:"Paying Respects Trophy",chapter:"epilogue",verified:!0},{id:"collect-hunting",text:"Hunting Requests (5 Total)",tip:'🐿️ See "Hunting Requests" in Stranger Missions.',tip_detailed:`**5 hunting requests** posted at train stations. Each requires **perfect small game carcasses**.

📋 **Requests:** Various small animals in perfect condition

🏆 **Final Reward:** Squirrel Statue (decorative)

🐿️ *Only perfect carcasses count. Use Small Game Arrows.*`,reward:"Squirrel Statue",verified:!0},{id:"collect-points-interest",text:"Points of Interest (50+)",tip:"🗺️ Discover unique locations that get marked on your map.",tip_detailed:`**Points of Interest** are unique locations that get permanently marked on your map when discovered. Over 50 total.

📋 **Examples:**
• Strange buildings
• Unique rock formations  
• Abandoned camps
• Historical markers

🗺️ *Explore everything. The world is full of secrets.*`,reward:"Compendium entries",verified:!0}]},ht={id:"companion-activities",title:"Companion Activities",icon:"🤝",defaultOpen:!1,items:[{id:"comp-ch2",text:"Chapter 2 Activities",tip:" Horseshoe Overlook camp. White icons on map.",tip_detailed:`**Horseshoe Overlook** - our first real camp after that frozen hell in Colter. Good times here, partner. The gang's still hopeful, still together.

Look for **white activity icons** on your map when near camp. These are your chances to bond with your brothers and sisters in crime.

⚠️ **All Chapter 2 activities become MISSABLE once you leave Horseshoe Overlook.** Don't ride off without makin' memories.`,chapter:2,region:"new-hanover",missable:!0,verified:!0,subItems:[{id:"comp-charles-hunt",text:"Hunting with Charles",tip:"🏹 White icon at camp. Teaches bow hunting basics.",tip_detailed:`**Charles Smith** will teach you the ways of the bow—silent, deadly, respectful to the land. Find the white icon at camp when he's available.

This mission teaches **bow hunting basics** and starts one of the best friendships in the game. Charles is solid. Loyal. One of the good ones.

🏹 *Pay attention to what he teaches. The bow'll save your life later.*`,missable:!0,reward:"Bow Training",region:"new-hanover"},{id:"comp-javier-chez",text:"Rob Chez Porter with Javier",tip:" O'Driscoll hideout north of Valentine. Stealth or loud.",tip_detailed:`**Javier Escuella** invites you to hit an **O'Driscoll hideout** north of Valentine called Chez Porter. 

You can go **stealth**—pickin' 'em off one by one—or go **loud** and blast your way through. Javier's good either way.

🔫 *Fun robbery, good loot, and you get to kill O'Driscolls. Win-win-win.*`,missable:!0,reward:"Loot + Honor",region:"new-hanover"},{id:"comp-lenny-filet",text:"Five Finger Fillet with Lenny",tip:"🎮 Camp game. Beat him to win money.",tip_detailed:`**Lenny Summers** challenges you to a game of **Five Finger Fillet** at camp. Stab between your fingers fast without cuttin' yourself.

Beat him and you win some cash. He takes the loss well—Lenny's got class.

💰 *Good practice for the gambling challenges later.*`,missable:!0,reward:"Money",region:"new-hanover"},{id:"comp-uncle-cattle",text:"Cattle Rustling with Uncle",tip:"🐄 Steal cattle together. Uncle is... Uncle.",tip_detailed:`**Uncle** wants to rustleattle. Yes, Uncle. The lazy one. This should be interesting.

He's as helpful as you'd expect (barely), but the banter is gold. You do the work, he provides commentary.

🐄 *It ain't about the money. It's about the journey. And Uncle's endless excuses.*`,missable:!0,reward:"Money + Comedy",region:"new-hanover"}]},{id:"comp-ch3",text:"Chapter 3 Activities",tip:" Clemens Point camp near Rhodes. MANY missable activities!",tip_detailed:`**Clemens Point** - our camp by the lake in Lemoyne. This is where things get complicated with the Grays and Braithwaites, but also where you can build some real bonds.

⚠️ **Chapter 3 has the MOST companion activities**, and they're all missable. Don't rush the story—spend time at camp.

*These are the good days, even if we didn't know it then.*`,chapter:3,region:"lemoyne",missable:!0,verified:!0,subItems:[{id:"comp-sean-lonnie",text:"Rob Lonnie's Shack with Sean",tip:"🍺 Drunken robbery. Sean is HILARIOUS drunk.",tip_detailed:`**Sean MacGuire** invites you to rob some poor fool's shack. But first—drinks. Lots of drinks.

This is peak Sean energy. Drunken stumbling, terrible Irish poetry, and somehow you still pull off the heist.

🍺 *One of the funniest missions in the game. Do NOT miss this one.*`,missable:!0,reward:"Loot + Laughs",region:"lemoyne"},{id:"comp-javier-fish",text:"Fishing with Javier",tip:"🎣 Relaxing trip. Good dialogue about his past.",tip_detailed:`**Javier** takes you fishing. Quiet, peaceful, a break from the chaos. He opens up about his past in Mexico—why he left, what he lost.

🎣 These quiet moments are rare. Enjoy 'em.

*Javier's a complicated man. This is where you start to understand him.*`,missable:!0,reward:"Character Development",region:"lemoyne"},{id:"comp-kieran-fish",text:"Fishing with Kieran",tip:"🎣 He's nervous but friendly. Do this BEFORE Chapter 4...",tip_detailed:`**Kieran Duffy** finally gets invited to do something with the gang. He's nervous—still feels like an outsider—but grateful for the company.

⚠️ **Do this before Chapter 4.** Trust me. You'll understand later.

*Poor Kieran. He just wanted to belong.*`,missable:!0,reward:"Feels",region:"lemoyne"},{id:"comp-bill-coach",text:"Rob Coach with Bill",tip:"🚃 Alden at Rhodes station gives tip. Bill is chaotic.",tip_detailed:`**Bill Williamson** wants to rob a coach. Get a tip from **Alden at Rhodes station** first, then ride out with Bill.

Bill is... chaotic. Things will go sideways. That's just how he operates.

🔫 *Profitable despite Bill's best efforts.*`,missable:!0,reward:"Coach Loot",region:"lemoyne"},{id:"comp-sean-coach",text:"Rob Coach with Sean",tip:"🍺 Another drunk heist. Peak Sean energy.",tip_detailed:`**Sean** again, and yes, **more drinking is involved**. Rob a coach while buzzed.

This is Sean in his element—loud, fun, and miraculously effective.

🍺 *LENNY! Wait, wrong mission...*`,missable:!0,reward:"Coach Loot",region:"lemoyne"},{id:"comp-micah-filet",text:"Five Finger Fillet with Micah",tip:"🐍 He cheats. Beat him anyway.",tip_detailed:`**Micah Bell** challenges you to Five Finger Fillet. He cheats—because of course he does.

Beat him anyway. For yourself. For satisfaction.

🐍 *Everything Micah does is tainted. But victory is still sweet.*`,missable:!0,reward:"Satisfaction",region:"lemoyne"},{id:"comp-tilly-dominoes",text:"Dominoes with Tilly",tip:"🎲 Camp game. She's surprisingly competitive.",tip_detailed:`**Tilly Jackson** plays dominoes at camp. She looks sweet, but she's **surprisingly competitive**.

Good for gambling challenge progress and good company.

🎲 *Tilly's got a sharp mind. Don't underestimate her.*`,missable:!0,reward:"Gambling Progress",region:"lemoyne"}]},{id:"comp-ch4",text:"Chapter 4 Activities",tip:" Shady Belle camp in swamp. Fewer but still missable.",tip_detailed:`**Shady Belle** - a haunted plantation in the Lemoyne swamps. The mood's darker here. Fewer activities, but still important.

⚠️ **Missable.** Chapter 4 moves fast once it starts.

*Things are changin'. You can feel it in the air.*`,chapter:4,region:"lemoyne",missable:!0,verified:!0,subItems:[{id:"comp-pearson-hunt",text:"Hunting with Pearson",tip:"🦌 Rare activity. Good stories about his navy days.",tip_detailed:`**Simon Pearson** rarely leaves camp, but this time he joins you for a hunt. Listen to his stories about the navy—he's got tales to tell.

🦌 **Rare activity** - don't skip this one.

*Pearson's more than the camp cook. This trip shows you that.*`,missable:!0,reward:"Pearson Character Arc",region:"lemoyne"},{id:"comp-lenny-coach",text:"Rob Coach with Lenny",tip:"🚃 Professional heist. Lenny is reliable.",tip_detailed:`**Lenny** for a coach robbery. Unlike Sean or Bill, Lenny's **professional**. Things go smooth.

💰 Good payout, no chaos.

*Lenny's dependable. You could build a crew around a man like him.*`,missable:!0,reward:"Coach Loot",region:"lemoyne"},{id:"comp-micah-coach",text:"Rob Coach with Micah",tip:"🐍 He makes it violent. Expect chaos and high bounty.",tip_detailed:`**Micah** for a coach robbery. He turns it **violent**—kills when he doesn't need to, draws attention, raises alarms.

⚠️ **Expect chaos and a high bounty.** Micah can't help himself.

🐍 *You'll wish you went with Lenny.*`,missable:!0,reward:"Coach Loot + Bounty",region:"lemoyne"}]},{id:"comp-trophy",text:"🏆 Friends With Benefits Trophy",tip:"Complete 1 companion activity per camp (Ch2-4) for achievement.",tip_detailed:`There's an achievement called **"Friends With Benefits"** for completing at least **one companion activity in each camp** from Chapters 2-4.

📋 **Requirements:**
• ✅ At least 1 activity at **Horseshoe Overlook** (Ch2)
• ✅ At least 1 activity at **Clemens Point** (Ch3)
• ✅ At least 1 activity at **Shady Belle** (Ch4)

🏆 *Easy trophy if you're paying attention. Missable forever if you're not.*`,reward:"Trophy/Achievement",verified:!0}]},ct={id:"camp-requests",title:"Camp Item Requests",icon:"🎁",defaultOpen:!1,items:[{id:"requests-jack",text:"Jack Marston's Requests",tip:'👦 Little Jack wants toys and books. Available after "A Fisher of Men".',tip_detailed:`**Jack** is just a kid—he wants simple things like toys and comic books. Bring them to him and he'll give you something in return.

⚠️ **MISSABLE** - These requests are only available until Chapter 4!

*He's a good kid. Make him smile while you can.*`,chapter:2,missable:!0,verified:!0,subItems:[{id:"req-jack-thimble",text:"Thimble for Jack",tip:" Find in houses/cabins. He gives you a drawing.",tip_detailed:`Find a **Thimble** in houses or cabins. Jack will thank you with one of his drawings.

🎨 *His drawings are surprisingly good for his age.*`,missable:!0,reward:"Jack's Drawing",verified:!0},{id:"req-jack-comic",text:"Comic Book for Jack",tip:" General stores sell them. He gives you chocolate.",tip_detailed:`Buy a **Comic Book** from any general store. Jack rewards you with a chocolate bar.

🍫 *Fair trade.*`,missable:!0,reward:"Chocolate Bar",verified:!0}]},{id:"requests-charles",text:"Charles Smith's Requests",tip:"🏹 Charles wants ingredients for special arrows. Best rewards!",tip_detailed:`**Charles** is a skilled hunter and warrior. Bring him ingredients and he'll craft special arrows for you.

🏹 **Best rewards** in the camp request system!`,verified:!0,subItems:[{id:"req-charles-moonshine",text:"Moonshine for Charles",tip:" Fence or general store. He makes Fire Arrows!",tip_detailed:`Buy **Moonshine** from the Fence or general store. Charles creates Fire Arrows for you.

🔥 *Set your enemies ablaze.*`,missable:!0,reward:"Fire Arrows",verified:!0},{id:"req-charles-oleander",text:"Oleander Sage for Charles",tip:" Bayou area plant. He makes Poison Arrows!",tip_detailed:`Find **Oleander Sage** in the Bayou area (Lemoyne swamps). Charles creates Poison Arrows.

☠️ *Silent. Deadly. Efficient.*`,missable:!0,reward:"Poison Arrows",region:"lemoyne",verified:!0},{id:"req-charles-eagle",text:"Eagle Feather for Charles (Epilogue)",tip:" Shoot eagles or find feathers. EPILOGUE only.",tip_detailed:`Shoot an **Eagle** or find loose feathers. Charles makes Improved Arrows.

🦅 **Epilogue only** - Visit Charles at Beecher's Hope.`,chapter:"epilogue",reward:"Improved Arrows",verified:!0}]},{id:"requests-hosea",text:"Hosea Matthews' Requests",tip:"📖 Hosea wants books and medicine ingredients.",tip_detailed:`**Hosea** is a reader and a thinker. He wants specific books and medicinal plants.

⚠️ **MISSABLE after Chapter 3!**`,chapter:3,missable:!0,verified:!0,subItems:[{id:"req-hosea-book",text:"The Case of the Shrew in the Fog",tip:' General stores. Read "Tale of Deceitful German" first!',tip_detailed:`Find the book **"The Case of the Shrew in the Fog"** at general stores.

📖 **Trigger:** Read "Tale of Deceitful German" first to unlock this request.

🏆 **Reward:** Predator Bait`,missable:!0,reward:"Predator Bait",verified:!0},{id:"req-hosea-ginseng",text:"American Ginseng (×2)",tip:" Forest areas. He gives Potent Medicine.",tip_detailed:"Collect **2× American Ginseng** from forest areas. Hosea makes Potent Medicine.",missable:!0,reward:"Potent Medicine",verified:!0}]},{id:"requests-pearson",text:"Pearson's Requests",tip:"👨‍🍳 Camp cook needs supplies for meals.",tip_detailed:"**Pearson** the camp cook has simple needs—help him improve camp meals.",verified:!0,subItems:[{id:"req-pearson-compass",text:"Naval Compass",tip:" Shipwrecks or naval locations. He shares rum and stories.",tip_detailed:`Find a **Naval Compass** at shipwrecks or naval locations. Pearson shares rum and navy stories with you.

⚓ *He misses the sea more than he lets on.*`,missable:!0,reward:"Navy Stories",verified:!0},{id:"req-pearson-rabbit",text:"Rabbit Carcass",tip:" Hunt any rabbit (perfect not needed). Camp stew upgrade!",tip_detailed:`Bring Pearson any **Rabbit Carcass** (doesn't need to be perfect). He upgrades the camp stew.

🍲 *Better meals for everyone.*`,missable:!0,reward:"Camp Stew Upgrade",verified:!0}]},{id:"requests-others",text:"Other Gang Member Requests",tip:"🎁 Various gang members have single requests. All missable after Ch4!",tip_detailed:`Every gang member has something they want. Bring it to them for rewards and relationship building.

⚠️ **ALL MISSABLE** - Most expire after Chapter 4! Some characters leave even earlier.

*These people are your family. Take care of them.*`,missable:!0,verified:!0,subItems:[{id:"req-abigail-money",text:"$5 for Abigail (Jack's clothes)",tip:"💵 Just donate $5. She thanks you for caring about Jack.",missable:!0,verified:!0},{id:"req-bill-pomade",text:"Hair Pomade for Bill",tip:" General stores. He gives Repeater Ammo.",missable:!0,reward:"Repeater Ammo",verified:!0},{id:"req-dutch-pipe",text:"Pipe for Dutch",tip:" Random finds or Fence. He gives ornate Spurs.",missable:!0,reward:"Spurs",verified:!0},{id:"req-javier-oleander",text:"Oleander Sage for Javier",tip:" Bayou plant. He gives Poison Throwing Knives.",missable:!0,reward:"Poison Knives",region:"lemoyne",verified:!0},{id:"req-kieran-burdock",text:"Burdock Root (×2) for Kieran",tip:"⚠️ Common plant. Do before Chapter 4! He gives Horse Medicine.",tip_detailed:`Collect **2× Burdock Root** (common plant) for Kieran.

⚠️ **URGENT:** Kieran's fate changes in Chapter 4. Complete this early!`,chapter:3,missable:!0,reward:"Horse Medicine",verified:!0},{id:"req-lenny-watch",text:"Pocket Watch for Lenny",tip:" Rob wealthy NPCs or houses. He gives Dynamite!",missable:!0,reward:"Dynamite",verified:!0},{id:"req-marybeth-pen",text:"Fountain Pen for Mary-Beth",tip:" Houses or general stores. She gives Gold Ring.",missable:!0,reward:"Gold Ring",verified:!0},{id:"req-molly-mirror",text:"Pocket Mirror for Molly",tip:" Houses or stores. She gives a Cigar.",chapter:3,missable:!0,reward:"Cigar",verified:!0},{id:"req-sadie-harmonica",text:"Harmonica for Sadie",tip:" Random NPC loot or houses. She gives Gun Oil.",chapter:3,missable:!0,reward:"Gun Oil",verified:!0},{id:"req-sean-bourbon",text:"Kentucky Bourbon for Sean",tip:"⚠️ Buy at saloons. Do this FAST—Sean leaves early!",tip_detailed:`Buy **Kentucky Bourbon** at any saloon for Sean.

⚠️ **URGENT:** Sean's time with the gang is limited. Complete this in Chapter 2!`,chapter:2,missable:!0,reward:"Fire Bottle",verified:!0},{id:"req-susan-herbs",text:"Seasoning Herbs (×2) for Susan",tip:" Wild Mint, Oregano, or Thyme. She gives Miracle Tonic.",missable:!0,reward:"Miracle Tonic",verified:!0},{id:"req-tilly-necklace",text:"Necklace for Tilly",tip:" Jewelry boxes or rob wealthy NPCs. She gives Medicine.",missable:!0,reward:"Medicine",verified:!0}]},{id:"requests-epilogue",text:"Uncle's Hangover Cure (Epilogue)",tip:"🥴 As John at Beecher's Hope. Poor Uncle needs help.",tip_detailed:`In the Epilogue, **Uncle** needs a home remedy for his perpetual hangover. Gather the ingredients.

🍺 *Uncle's condition is... chronic.*`,chapter:"epilogue",verified:!0,subItems:[{id:"req-uncle-cure",text:"Uncle's Home Remedy",tip:"📦 Milkweed, Bourbon, Peppermint, Pomade, Skunk Carcass!",tip_detailed:`Gather these ingredients for Uncle's cure:
• Milkweed
• Kentucky Bourbon
• Peppermint
• Hair Pomade
• Skunk Carcass

🦨 *The skunk is the key ingredient. Don't ask.*`,reward:"Uncle survives another day",verified:!0}]}]},ut={id:"bounties",title:"Bounty Hunting",icon:"🤠",defaultOpen:!1,items:[{id:"bounty-valentine",text:"Valentine Sheriff (2 Bounties)",tip:' Available after "Good, Honest, Snake Oil". Alive = more $.',tip_detailed:`The **Valentine Sheriff** posts bounties on his board once you've done a little work for him. Complete the mission **"Good, Honest, Snake Oil"** in Chapter 2 and two names'll show up on that wanted board.

💰 **Pro tip**: Bringing 'em in alive always pays better. Dead's quicker, but live bounties fatten your wallet.

*These Valentine folk ain't the worst you'll hunt. Consider 'em practice.*`,chapter:2,region:"new-hanover",rewards:["$40-50 per bounty","Honor"],verified:!0,subItems:[{id:"bounty-benedict",text:"Benedict Allbright ($40)",tip:" Rocks west of Valentine near Dakota River. Must bring ALIVE.",tip_detailed:`**Benedict Allbright** - poison seller who's been killin' folk with tainted medicine. You'll find him perched on some **rocks west of Valentine**, near the Dakota River, contemplating his sins.

⚠️ **MUST be brought in ALIVE**. The law wants to make an example of him. If he dies, the bounty's void.

*He'll try to talk his way out. Don't let him. Hogtie and deliver.*`,reward:"$40 (Alive only)",region:"new-hanover"},{id:"bounty-ellie",text:"Ellie Anne Swan ($50)",tip:" Camp NW of Valentine near Wallace Station. Alive = $50, Dead = $25.",tip_detailed:`**Ellie Anne Swan** - they say she killed her husband. Found hidin' in a **camp northwest of Valentine**, near Wallace Station.

💰 **Alive = $50 | Dead = $25**

She's got a sob story ready. Up to you whether you listen or just hogtie her and ride. Either way, she's worth the trip.

*Some say she's innocent. The poster don't care.*`,rewards:["$50 Alive","$25 Dead"],region:"new-hanover"}]},{id:"bounty-rhodes",text:"Rhodes Sheriff (3 Bounties)",tip:" Southern bounties in Lemoyne. Chapter 3+.",tip_detailed:`The **Rhodes Sheriff** has three names on his board, and they're scattered across Lemoyne's swamps and fields. Most of these folks are nastier than the gators.

🏛️ *This is Gray and Braithwaite territory. Watch your step—the law here is... complicated.*`,chapter:3,region:"lemoyne",rewards:["$25-55 per bounty"],verified:!0,subItems:[{id:"bounty-mark",text:"Mark Johnson ($25)",tip:" Bluewater Marsh. Horse thief with gang backup.",tip_detailed:`**Mark Johnson** - a horse thief with a small crew backin' him up. You'll find him in **Bluewater Marsh**, and he won't come quietly.

⚠️ **Has gang backup** - expect 3-4 armed men. Clear 'em out before you grab Mark.

💰 **$25** - lowest bounty, but good practice for tougher hunts.`,reward:"$25",region:"lemoyne"},{id:"bounty-robbie",text:"Robbie Laidlaw ($45)",tip:" Near Caliga Hall farmhouse. Murderer. Dangerous.",tip_detailed:`**Robbie Laidlaw** - killed a man in cold blood and fled. Dangerous fella, holed up **near Caliga Hall farmhouse**.

⚠️ **Dangerous** - he's armed and ain't lookin' to surrender. Approach with Dead Eye ready.

💰 **$45** - worth the risk if you're quick on the draw.`,reward:"$45",region:"lemoyne"},{id:"bounty-camille",text:"Camille de Millemont ($55)",tip:" Saint Denis saloon. French con artist. Persuasive.",tip_detailed:`**Camille de Millemont** - a French con artist who's charmed her way through high society and left a trail of empty wallets. You'll find her in a **Saint Denis saloon**, workin' her next mark.

⚠️ **Persuasive** - she'll try to talk you into lettin' her go. Stay focused on the bounty.

💰 **$55** - highest Rhodes bounty. Worth the chase through city streets.`,reward:"$55",region:"lemoyne"}]},{id:"bounty-strawberry",text:"Strawberry Sheriff (2 Bounties)",tip:" Western bounties in Big Valley area.",tip_detailed:`The **Strawberry Sheriff** posts bounties on desperate men who fled into the Big Valley wilderness. These hunts take you into rough country—bring supplies.

🏔️ *Mountain terrain means your horse better be sure-footed.*`,chapter:2,region:"west-elizabeth",rewards:["$40-60 per bounty"],verified:!0,subItems:[{id:"bounty-joshua",text:"Joshua Brown ($40)",tip:" Abandoned mine NW of Strawberry. Bring dynamite.",tip_detailed:`**Joshua Brown** - dangerous criminal holed up in an **abandoned mine northwest of Strawberry**. The tunnels are dark, cramped, and he knows every inch.

💣 **Bring dynamite** or lots of patience. You can smoke him out or go in after him.

💰 **$40** - the mine's creepy, but the payout's decent.`,reward:"$40",region:"west-elizabeth"},{id:"bounty-bart",text:"Bart Cavanaugh ($60)",tip:"🔫 Outlaw gang leader. Multiple bodyguards. Stealth recommended.",tip_detailed:`**Bart Cavanaugh** - an outlaw gang leader with **multiple bodyguards** around him at all times. This ain't a simple snatch-and-grab.

🔫 **Stealth recommended** - pick off the guards quietly with a bow, then grab Bart when he's alone. Going in loud means a firefight.

💰 **$60** - one of the better payouts. Worth the planning.`,reward:"$60",region:"west-elizabeth"}]},{id:"bounty-saintdenis",text:"Saint Denis Police (3 Bounties)",tip:" Urban bounties. Chapter 4+. Some story-connected.",tip_detailed:`The **Saint Denis Police** handle city criminals—con men, arsonists, and gang leaders. Urban bounty hunting means chasing through crowded streets and watching for law interference.

🏙️ *In the city, you gotta be surgical. Too much noise brings badges running.*`,chapter:4,region:"lemoyne",rewards:["$40-50 per bounty"],verified:!0,subItems:[{id:"bounty-lindsay",text:"Lindsay Wofford ($45)",tip:" Urban pursuit through Saint Denis streets. Watch for police.",tip_detailed:`**Lindsay Wofford** - a city criminal who knows Saint Denis like the back of her hand. This bounty becomes an **urban pursuit through crowded streets**.

👮 **Watch for police** - causing too much chaos will bring the law down on YOU. Keep it clean.

💰 **$45** - fast bounty if you catch her quick.`,reward:"$45",region:"lemoyne"},{id:"bounty-anthony",text:"Anthony Foreman ($50)",tip:"⚠️ EPILOGUE only. Only appears if not killed in story.",tip_detailed:`**Anthony Foreman** - you might remember him from the Trelawny missions. If he survived those encounters, he's back to his old ways and there's a bounty on his head.

⚠️ **Conditional availability** - only appears in the **Epilogue**, and only if you didn't kill him during the main story.

💰 **$50** - satisfying to collect if you left him alive earlier.`,reward:"$50",chapter:"epilogue",region:"lemoyne"},{id:"bounty-patrick",text:"Patrick O'Brien ($40)",tip:"🔥 Serial arsonist. Near industrial area.",tip_detailed:`**Patrick O'Brien** - a serial arsonist who's been settin' fires across the industrial district. Found lurkin' **near the factories**.

🔥 *Ironic death available* - if you don't stop him in time, he'll die in one of his own fires. Still counts, but less satisfying.

💰 **$40** - stop him before he burns down half the city.`,reward:"$40",region:"lemoyne"}]},{id:"bounty-blackwater",text:"Blackwater Police (3 Bounties)",tip:"⚠️ EPILOGUE ONLY - West Elizabeth access required.",tip_detailed:`**Blackwater Police** bounties are only available in the **Epilogue** when John can freely roam West Elizabeth. These are tough customers—war veterans, serial killers, and gang remnants.

⚠️ *Blackwater was forbidden territory as Arthur. As John, it's hunting season.*`,chapter:"epilogue",region:"west-elizabeth",rewards:["$50-65 per bounty"],verified:!0,subItems:[{id:"bounty-elias",text:"Elias Green ($65)",tip:" West of Beecher's Hope. War veteran. Alive = $65, Dead = $35.",tip_detailed:`**Elias Green** - a war veteran who came back wrong. Turned to violence and crime. Found **west of Beecher's Hope**, close to John's new life.

💰 **Alive = $65 | Dead = $35**

War broke him. The bounty don't care about reasons.`,rewards:["$65 Alive","$35 Dead"],region:"west-elizabeth"},{id:"bounty-otis",text:"Otis Skinner ($55)",tip:"⚠️ Serial killer type. VERY dangerous. Heavy weapons.",tip_detailed:`**Otis Skinner** - they call him a "serial killer type" and that's puttin' it mild. This man is **extremely dangerous**.

🔫 **Bring heavy weapons** - shotgun, repeater, full Dead Eye. He's likely to charge you.

💰 **$55** - worth every bullet you spend.`,reward:"$55",region:"west-elizabeth"},{id:"bounty-herman",text:"Herman Zizendorf ($50)",tip:" Near MacFarlane's Ranch. Has accomplices.",tip_detailed:`**Herman Zizendorf** - hidin' out **near MacFarlane's Ranch** with a crew of accomplices. Clear the help first, then grab Herman.

⚠️ **Has accomplices** - don't charge in alone.

💰 **$50** - a decent payday if you stay smart.`,reward:"$50",region:"new-austin"}]},{id:"bounty-tumbleweed",text:"Tumbleweed Sheriff (2 Bounties)",tip:"⚠️ EPILOGUE ONLY - New Austin access required.",tip_detailed:`**Tumbleweed Sheriff** posts the last bounties you'll hunt—deep in **New Austin** territory. Del Lobo gang connections and Mexican outlaws. The Wild West at its wildest.

🏜️ *The desert don't forgive mistakes. Bring water and bullets.*`,chapter:"epilogue",region:"new-austin",rewards:["$60-65 per bounty"],verified:!0,subItems:[{id:"bounty-joaquin",text:"Joaquin Arroyo ($60)",tip:" Del Lobo gang connection. Alive = $60, Dead = $30.",tip_detailed:`**Joaquin Arroyo** - connected to the Del Lobo gang, which means you'll fight through bandits to get to him.

💰 **Alive = $60 | Dead = $30**

The desert sun makes corpses stink quick. Alive is better money anyway.`,rewards:["$60 Alive","$30 Dead"],region:"new-austin"},{id:"bounty-esteban",text:"Esteban Cortez ($65)",tip:" Mexican outlaw. Multiple gang members. Dead or alive = $65.",tip_detailed:`**Esteban Cortez** - a Mexican outlaw with **multiple gang members** guarding him. The fight to get him is the real challenge.

💰 **$65** - same payout dead or alive, so do what you gotta do.

🏆 *The last bounty on the board. Make it count, cowboy.*`,reward:"$65",region:"new-austin"}]}]},pt={id:"talismans",title:"Talismans & Trinkets",icon:"🔮",defaultOpen:!1,items:[{id:"talisman-group",text:"Talismans (3 ingredients, stronger effects)",tip:"🔮 Crafted at Fence. Legendary parts + jewelry + unique items.",tip_detailed:`**Talismans** are the heavy hitters—powerful charms that require **three ingredients** each: a legendary animal part, a piece of jewelry, and a unique collectible item.

Take your materials to the **Fence** (Saint Denis or other locations) and he'll craft 'em for you.

⚠️ *Some unique items are missable or quest-locked. Plan ahead.*`,verified:!0,subItems:[{id:"talisman-alligator",text:"Alligator Tooth Talisman",tip:"🐊 Legendary Alligator Tooth + Gold Bracelet + Handcuffs. -10% Dead Eye drain.",tip_detailed:`**Alligator Tooth Talisman** - slows your Dead Eye drain by 10%.

📦 **Materials:**
• **Legendary Alligator Tooth** - Hunt Legendary Alligator in Bayou Nwa (Chapter 4+)
• **Gold Jointed Bracelet** - Found or looted from enemies
• **Vintage Civil War Handcuffs** - Complete any cigarette card set

🎯 *Perfect for gunslingers who live in Dead Eye.*`,reward:"-10% Dead Eye drain",verified:!0},{id:"talisman-bear",text:"Bear Claw Talisman",tip:"🐻 Legendary Bear Claw + Silver Bracelet + Quartz Chunk. -10% Health drain.",tip_detailed:`**Bear Claw Talisman** - slows your Health Core drain by 10%.

📦 **Materials:**
• **Legendary Bear Claw** - From the Legendary Bear (early story mission "Exit Pursued by a Bruised Ego")
• **Silver Chain Bracelet** - Found or looted
• **Quartz Chunk** - Mail any dinosaur bone location to Deborah MacGuinness

💪 *Stay strong longer in firefights and harsh weather.*`,reward:"-10% Health Core drain",verified:!0},{id:"talisman-bison",text:"Bison Horn Talisman",tip:"🦬 White Bison Horn + Abalone Shell + Silver Earring. -10% Stamina drain.",tip_detailed:`**Bison Horn Talisman** - slows your Stamina Core drain by 10%.

📦 **Materials:**
• **Legendary White Bison Horn** - Hunt near Lake Isabella, Ambarino
• **Abalone Shell Fragment** -  Abandoned house north of Rhodes
• **Silver Earring** - Found or looted

🏃 *Run longer, swim farther, climb higher.*`,reward:"-10% Stamina Core drain",verified:!0},{id:"talisman-boar",text:"Boar Tusk Talisman",tip:"🐗 Legendary Boar Tusk + Gold Earring + Cobalt Wood. -10% Horse Core drain.",tip_detailed:`**Boar Tusk Talisman** - slows your horse's core drain by 10%.

📦 **Materials:**
• **Legendary Boar Tusk** - Hunt near Bluewater Marsh
• **Gold Earring** - Found or looted
• **Cobalt Petrified Wood** -  Cave near Lake Isabella

🐴 *Your horse stays stronger longer. Worth every ingredient.*`,reward:"-10% Horse Core drain",verified:!0},{id:"talisman-raven",text:"Raven Claw Talisman ⭐",tip:"🔧 Old Brass Compass ONLY. -20% Weapon degradation!",tip_detailed:`**Raven Claw Talisman** - reduces weapon degradation by **20%**. The best equipment preservation in the game.

📦 **Materials:**
• **Old Brass Compass** - Complete ALL 10 rock carvings (Geology for Beginners) and visit Francis Sinclair's cabin

⭐ **One ingredient only** but that ingredient requires serious work—finding all 10 rock carvings across the map.

🔧 *Your weapons stay clean and deadly. No more constant oiling.*`,reward:"-20% Weapon degradation",priority:!0,verified:!0}]},{id:"trinket-group-hunt-first",text:"Priority Trinkets (Hunt First!) ⭐",tip:"⭐ These legendary animals should be hunted ASAP.",tip_detailed:`These trinkets should be your **first hunts** after unlocking free roam. Their effects are game-changing for the rest of your playthrough.

🎯 Hunt the Legendary Buck immediately. Everything else can wait.`,verified:!0,subItems:[{id:"trinket-buck",text:"Buck Antler Trinket ⭐",tip:"🦌 Legendary Buck Antler. HIGHER QUALITY PELTS! HUNT FIRST!",tip_detailed:`**Buck Antler Trinket** - gives you a **chance to get one-star-higher quality pelts** when skinning animals.

 **Legendary Buck location:** West of Strawberry, Big Valley

⭐ **HUNT THIS FIRST.** Every pelt you skin for the rest of the game has a better chance of being perfect. This makes satchel crafting, camp upgrades, and trapper gear infinitely easier.

*The single most important trinket in the game. Bar none.*`,reward:"Better pelts always",priority:!0,region:"west-elizabeth",verified:!0},{id:"trinket-fox",text:"Fox Claw Trinket",tip:"🦊 Legendary Fox Claw. +5 seconds Eagle Eye duration.",tip_detailed:`**Fox Claw Trinket** - extends your Eagle Eye vision by 5 seconds.

 **Legendary Fox location:** Mattock Pond area, west of Rhodes

👁️ Great for tracking and hunting. More time to spot those hidden trails.

*A hunter's best friend.*`,reward:"+5s Eagle Eye",region:"lemoyne",verified:!0}]},{id:"trinket-group-xp",text:"XP Boost Trinkets",tip:"📈 Increase experience gain for core stats.",tip_detailed:`These trinkets speed up your stat progression. Good for mid-game when you're still building up Arthur's cores.

📈 *More XP means stronger cores faster.*`,verified:!0,subItems:[{id:"trinket-moose",text:"Moose Antler Trinket",tip:"🫎 Legendary Moose Antler. +10% Health XP gain.",tip_detailed:`**Moose Antler Trinket** - 10% more Health XP from all sources.

 **Legendary Moose location:** Roanoke Ridge, northeast of the map. ⚠️ Moose are RARE and skittish.

💪 *Health is the most important stat. Level it faster.*`,reward:"+10% Health XP",region:"new-hanover",verified:!0},{id:"trinket-cougar",text:"Cougar Fang Trinket",tip:"🦁 Legendary Cougar Fang. ⚠️ EPILOGUE ONLY. +10% Stamina XP.",tip_detailed:`**Cougar Fang Trinket** - 10% more Stamina XP from all sources.

 **Legendary Cougar location:** New Austin, near Tumbleweed

⚠️ **EPILOGUE ONLY** - Arthur cannot safely access New Austin.

🏃 *John can get this at the start of the epilogue.*`,reward:"+10% Stamina XP",chapter:"epilogue",region:"new-austin",verified:!0},{id:"trinket-coyote",text:"Coyote Fang Trinket",tip:"🐺 Legendary Coyote Fang. +10% Dead Eye XP gain.",tip_detailed:`**Coyote Fang Trinket** - 10% more Dead Eye XP from all sources.

 **Legendary Coyote location:** Scarlett Meadows, northwest of Rhodes

🎯 *Dead Eye wins gunfights. Level it faster.*`,reward:"+10% Dead Eye XP",region:"lemoyne",verified:!0}]},{id:"trinket-group-utility",text:"Utility Trinkets",tip:"🛠️ Various quality of life improvements.",tip_detailed:`These trinkets make daily outlaw life easier—more money, less maintenance, better gathering.

🛠️ *Convenience is worth hunting for.*`,verified:!0,subItems:[{id:"trinket-beaver",text:"Beaver Tooth Trinket",tip:"🦫 Legendary Beaver Tooth. -10% Weapon degradation.",tip_detailed:`**Beaver Tooth Trinket** - weapons degrade 10% slower.

 **Legendary Beaver location:** Elysian Pool area, west of Van Horn

🔧 *Clean guns are accurate guns. Spend less time at the gunsmith.*`,reward:"-10% Weapon wear",region:"new-hanover",verified:!0},{id:"trinket-elk",text:"Elk Antler Trinket",tip:"🦌 Legendary Elk Antler. +10% looted cash value!",tip_detailed:`**Elk Antler Trinket** - every corpse you loot gives 10% more cash.

 **Legendary Elk location:** East of Bacchus Station, Ambarino

💰 *Over a full playthrough, this adds up to serious money.*`,reward:"+10% looted cash",region:"ambarino",verified:!0},{id:"trinket-ram",text:"Ram Horn Trinket",tip:"🐏 Legendary Bighorn Ram Horn. 2x herb yield!",tip_detailed:`**Ram Horn Trinket** - double yield from thyme, oregano, and wild mint.

 **Legendary Ram location:** Cattail Pond area, Grizzlies West

🌿 *These herbs are used in special recipes. Double is always better.*`,reward:"2x herb yield",region:"ambarino",verified:!0},{id:"trinket-wolf",text:"Wolf Heart Trinket",tip:"🐺 Legendary Wolf Heart. 2x alcohol resistance.",tip_detailed:`**Wolf Heart Trinket** - double your alcohol tolerance.

 **Legendary Wolf location:** Cotorra Springs, Ambarino

🍺 *Drink twice as much before getting sloppy. Perfect for saloon nights.*`,reward:"2x alcohol tolerance",region:"ambarino",verified:!0},{id:"trinket-lion",text:"Lion's Paw Trinket",tip:"🦁 Lion's Paw from Margaret stranger mission. +10% Stamina XP.",tip_detailed:`**Lion's Paw Trinket** - 10% more Stamina XP.

 **Source:** Complete the stranger mission **"He's British, Of Course"** with the circus animals

🎪 *Help Margaret catch his "exotic animals" and claim this as a reward.*`,reward:"+10% Stamina XP",region:"lemoyne",verified:!0}]},{id:"trinket-group-combat",text:"Combat Trinkets",tip:"🔫 Combat-focused bonuses for fighters.",tip_detailed:`These trinkets are for the violent-minded—better combat performance when you need it most.

🔫 *When bullets fly, these make the difference.*`,verified:!0,subItems:[{id:"trinket-panther",text:"Panther's Eye Trinket ⭐",tip:"🐆 Legendary Panther Eye. ⚠️ Requires Master Hunter 9! Dead Eye boost after kills.",tip_detailed:`**Panther's Eye Trinket** - for 3 seconds after a kill, Dead Eye drains 10% slower.

⚠️ **Requires Master Hunter Challenge Rank 9** to spawn the Legendary Panther

 **Location:** Shady Belle area, once challenge is complete

⭐ *Chain kills become devastating. Worth the challenge grind.*`,reward:"Dead Eye extension",priority:!0,region:"lemoyne",verified:!0},{id:"trinket-bison-tatanka",text:"Tatanka Bison Horn Trinket",tip:"🦬 Legendary Tatanka Bison Horn. ⚠️ EPILOGUE ONLY. +10% Melee resist.",tip_detailed:`**Tatanka Bison Horn Trinket** - 10% more resistance to melee damage.

 **Legendary Tatanka Bison location:** Hennigan's Stead, New Austin

⚠️ **EPILOGUE ONLY** - New Austin access required

🥊 *For the brawlers who prefer fists to guns.*`,reward:"+10% Melee resist",chapter:"epilogue",region:"new-austin",verified:!0}]},{id:"trinket-group-epilogue",text:"Epilogue-Only Trinkets",tip:"⚠️ New Austin access required (Epilogue only).",tip_detailed:`These trinkets require access to **New Austin**, which is only safe during the Epilogue when playing as John.

⚠️ *Arthur can technically glitch there, but these are designed for John's journey.*`,verified:!0,subItems:[{id:"trinket-pronghorn",text:"Pronghorn Horn Trinket",tip:"🦌 Legendary Pronghorn Horn. Carcasses NEVER rot!",tip_detailed:`**Pronghorn Horn Trinket** - carcasses stored on your horse **never rot**.

 **Legendary Pronghorn location:** Rio Del Lobo, New Austin (Epilogue)

🏆 *Hunt at your leisure. No more rushing to the trapper with a rotting carcass.*`,reward:"No carcass rot",chapter:"epilogue",region:"new-austin",verified:!0}]},{id:"unique-items",text:"Unique Crafting Items (Locations)",tip:" Rare items needed for talisman crafting.",tip_detailed:`Some talismans require **unique collectible items** that aren't just looted from enemies. You gotta find these specific pieces.

 *Most are quest rewards or hidden in specific locations. Plan ahead.*`,verified:!0,subItems:[{id:"item-quartz",text:"Quartz Chunk",tip:"🦴 Mail ANY dinosaur bone to Deborah MacGuinness.",tip_detailed:`**Quartz Chunk** - reward for mailing your first dinosaur bone location.

 Find any **dinosaur bone** (they're scattered across the map) and mail its location to **Deborah MacGuinness** as part of the "A Test of Faith" mission.

*One bone is enough. You'll get the Quartz Chunk by mail.*`,verified:!0},{id:"item-abalone",text:"Abalone Shell Fragment",tip:"🏚️ Abandoned house north of Rhodes. On a shelf inside.",tip_detailed:`**Abalone Shell Fragment** - found in an abandoned house.

 **Location:** North of Rhodes, in an old farmhouse. Look on the **shelf inside**.

*Free pickup. Just know where to look.*`,region:"lemoyne",verified:!0},{id:"item-cobalt",text:"Cobalt Petrified Wood",tip:"🗻 Cave near Lake Isabella. Chest inside.",tip_detailed:`**Cobalt Petrified Wood** - found in a cave.

 **Location:** Near Lake Isabella, Ambarino. Find the cave entrance and look for a **chest inside**.

❄️ *Bring warm clothes. It's freezing up there.*`,region:"ambarino",verified:!0},{id:"item-handcuffs",text:"Vintage Civil War Handcuffs",tip:"🃏 Complete ANY cigarette card set and mail to Ramsbottom.",tip_detailed:`**Vintage Civil War Handcuffs** - reward for completing your first cigarette card collection.

📋 Complete **any of the 12 cigarette card sets** and mail them to **Phineas T. Ramsbottom** in Saint Denis.

🃏 *The easiest sets are bought from General Stores. Premium cigarettes have guaranteed cards.*`,verified:!0},{id:"item-compass",text:"Old Brass Compass",tip:"🗿 Complete ALL 10 rock carvings, then visit Francis Sinclair.",tip_detailed:`**Old Brass Compass** - the hardest unique item to get.

📋 **Requirements:**
• Find ALL 10 rock carvings across the map ("Geology for Beginners" mission)
• Visit **Francis Sinclair's cabin** to trigger the final mission

🗿 *This takes serious exploration. Use a guide if needed.*`,verified:!0}]}]},gt={id:"cig-gunslingers",title:"Famous Gunslingers & Outlaws",icon:"🔫",defaultOpen:!1,tip_detailed:`Collect all 12 **Famous Gunslingers & Outlaws** cards celebrating the legends of the frontier.

🏆 **Reward:** Special Snake Oil + $50

⚠️ *Some cards are in New Austin (Epilogue only). Consider buying Premium Cigarettes for random cards.*`,reward:"Special Snake Oil + $50",verified:!0,items:[{id:"cig-guns-01",text:"Frank Heck",tip:"⚰️ Valentine Cemetery, on the unmarked east headstone (tall grave).",narrative:"The quickest draw in three counties—until the day he wasn't.",region:"heartlands",verified:!0},{id:"cig-guns-02",text:"Otis Miller Boys",tip:"🛒 Six Point Cabin, Cumberland Forest (SE of rope bridge). In the back of a blue wagon.",narrative:"Rode together, robbed together, died together. That's loyalty—or stupidity.",region:"grizzlies",verified:!0},{id:"cig-guns-03",text:"Jack Hall Gang",tip:"🏚️ Chez Porter (NW of Window Rock, Ambarino). On windowsill inside west shack.",narrative:"Their treasure maps outlived them all. Gold has a way of doing that.",region:"ambarino",verified:!0},{id:"cig-guns-04",text:"Butcher Brothers",tip:"🛢️ Butcher Creek (south of Elysian Pool). On red-topped barrel on front porch of southeastern house.",narrative:"Named for their profession, not their victims. Though the line got blurry.",region:"roanoke-ridge",verified:!0},{id:"cig-guns-05",text:"Flaco Hernandez",tip:"🏦 Rhodes bank roof (NW ledge). Climb ladder around back of bank.",narrative:"Cold as the mountains he came from. His gun spoke Spanish and English equally.",region:"lemoyne",verified:!0},{id:"cig-guns-06",text:"Slim Grant",tip:'🏔️ Fairvale Shanty (north of Grizzlies East, above "N" and "O" on map). On barrel outside shack.',narrative:"Thin as a rail, fast as lightning. They called him Slim for more than his figure.",region:"ambarino",verified:!0},{id:"cig-guns-07",text:"Landon Ricketts",tip:"🏜️ Armadillo, behind house facing undertaker. On barrel next to green shelf. ⚠️ Epilogue only.",narrative:"The last great gunslinger. Survived them all just by being better.",region:"new-austin",chapter:"epilogue",verified:!0},{id:"cig-guns-08",text:"Black Belle",tip:"⚓ Blackwater docks (east side). On barrel at Lemoyne Eastern Riverboat Company pier.",narrative:"They called her Black Belle because the widows always wore black after meeting her.",region:"west-elizabeth",verified:!0},{id:"cig-guns-09",text:"Billy Midnight",tip:"🌾 Tumbleweed east windmill. Climb ladder to platform. ⚠️ Epilogue only.",narrative:"Struck at midnight, gone by dawn. Some say he was a ghost—others wish he was.",region:"new-austin",chapter:"epilogue",verified:!0},{id:"cig-guns-10",text:"Emmet Granger",tip:'🐊 Canebreak Manor (Bluewater Marsh, at "H" in Marsh). On table inside abandoned cabin.',narrative:"Smelled like pig and gunpowder. Only one of those was intentional.",region:"lemoyne",verified:!0},{id:"cig-guns-11",text:'Jim "Boy" Calloway',tip:"⚰️ Saint Denis cemetery (north entrance). First mausoleum on left, inside on windowsill.",narrative:'They called him "Boy" until he proved otherwise. Then they stopped calling altogether.',region:"saint-denis",verified:!0},{id:"cig-guns-12",text:"Bart Love",tip:"🏠 House north of Little Creek River (near Wallace Station). Climb crates to enter window, next to couch.",narrative:"Loved three things: whiskey, cards, and killing. Not necessarily in that order.",region:"big-valley",verified:!0}]},ft={id:"cig-stage",title:"Stars of the Stage",icon:"🎭",defaultOpen:!1,tip_detailed:`Collect all 12 **Stars of the Stage** cards honoring the performers and entertainers of the era.

🏆 **Reward:** Small Jewelry Bag + $50

⚠️ *Robin Koninsky requires watching all 5 theater shows (last unlocks after Chapter 4 mission). Some cards in New Austin.*`,reward:"Small Jewelry Bag + $50",verified:!0,items:[{id:"cig-stage-01",text:"Laurence Dunn",tip:"🏡 Robard Farm (NW of Rhodes, Southfield Flats). On mantelpiece inside farmhouse.",narrative:"His Hamlet brought tears to the frontier. Mostly from the smell.",region:"lemoyne",verified:!0},{id:"cig-stage-02",text:"Louis Durand",tip:"🏚️ West of Van Horn Trading Post. On east porch of abandoned house across railroad tracks.",narrative:"French accent, American heart. His tragedy was always sold out.",region:"roanoke-ridge",verified:!0},{id:"cig-stage-03",text:"Jesse Raymond",tip:"🔥 North of Tumbleweed, burnt-out house. On mantelpiece next to fireplace. ⚠️ Epilogue only.",narrative:"They said he died on stage. The fire said otherwise.",region:"new-austin",chapter:"epilogue",verified:!0},{id:"cig-stage-04",text:"Augusta Tremlow",tip:"🌾 Hanging Dog Ranch windmill (NW of Pronghorn Ranch). On top platform—climb up.",narrative:"Sang like an angel, drank like a sailor. Audiences loved both.",region:"big-valley",verified:!0},{id:"cig-stage-05",text:"Mabel Potter",tip:"🎭 Théâtre Râleur, Saint Denis. In the west corridor.",narrative:"The leading lady of the South. Her curtain calls lasted longer than some plays.",region:"saint-denis",verified:!0},{id:"cig-stage-06",text:"Robin Koninsky",tip:"🎭 Théâtre Râleur stage, Saint Denis. Behind curtains on left. Requires watching all 5 shows!",narrative:"Master of illusion. What was real on his stage? Only he knew.",region:"saint-denis",chapter:4,verified:!0},{id:"cig-stage-07",text:"Isadore Reid",tip:"🛒 Valentine, cluster of structures SW of show. In back of one of two adjacent wagons.",narrative:"Traveling showman. His tricks worked best on those who'd never seen a city.",region:"heartlands",verified:!0},{id:"cig-stage-08",text:"Irene Grubb",tip:"🚂 MacFarlane's Ranch train platform. On a bench. ⚠️ Epilogue only.",narrative:"Danced her way west, sang her way back. The frontier remembered both.",region:"new-austin",chapter:"epilogue",verified:!0},{id:"cig-stage-09",text:"Nettie Palmer",tip:"🎪 Valentine, inside Magic Lantern Show tent. Under the projector.",narrative:"Her voice could make grown men weep—and her prices made them weep harder.",region:"heartlands",verified:!0},{id:"cig-stage-10",text:"Jim Cobb",tip:"🏚️ Eris Field shack (Ringneck Creek, Lemoyne). On front porch of abandoned house.",narrative:"Comedian by trade, philosopher by accident. His jokes aged like fine bourbon.",region:"lemoyne",verified:!0},{id:"cig-stage-11",text:"Mittie Comstock",tip:"🏠 Larned Sod cabin (Heartlands, New Hanover). On barrel in front of door.",narrative:"The toast of three territories. Her encore was always the silent exit.",region:"heartlands",verified:!0},{id:"cig-stage-12",text:"Robert Elliot Patchen",tip:"📦 Rhodes, east of Fence (north part). On crate next to yellow hut.",narrative:"Playwright and poet. His words outlived every actor who spoke them.",region:"lemoyne",verified:!0}]},mt={id:"cig-travel",title:"Marvels of Travel",icon:"🌍",defaultOpen:!1,tip_detailed:`Collect all 12 **Marvels of Travel** cards celebrating the vehicles and vessels that connected the world.

🏆 **Reward:** Aged Pirate Rum + $50

*From steamships to velocipedes, the machines that shrank the earth.*`,reward:"Aged Pirate Rum + $50",verified:!0,items:[{id:"cig-travel-01",text:"Packet Ship",tip:"⚓ Annesburg pier. On crate under roofed storage area.",narrative:"Reliable as death and taxes. Carried mail, cargo, and dreams.",region:"roanoke-ridge",verified:!0},{id:"cig-travel-02",text:"Schooner",tip:"⛵ Van Horn Trading Post. On larger schooner, top level under hammock/bed.",narrative:"Swift and graceful. Pirates loved them for a reason.",region:"roanoke-ridge",verified:!0},{id:"cig-travel-03",text:"Camel Caravan",tip:"🏠 Rhodes, house across from saloon. On backyard table by clothesline.",narrative:"Ships of the desert. The Army tried them out West—camels had opinions.",region:"lemoyne",verified:!0},{id:"cig-travel-04",text:"Elephant Carriage",tip:"🏨 Strawberry Trackers Hotel. Top of staircase around back, on banister.",narrative:"Exotic transport. Only royalty—or circus folk—rode in style like this.",region:"big-valley",verified:!0},{id:"cig-travel-05",text:"Goat Carriage",tip:"🐎 Emerald Ranch stables (largest building). On workbench inside.",narrative:"Child's chariot. Every kid wanted one; most got a wagon.",region:"heartlands",verified:!0},{id:"cig-travel-06",text:"Hot Air Balloon",tip:"🍺 Saint Denis, Doyle's Tavern. On shelf in back.",narrative:"First flight of fancy. A basket and some hot air—sound familiar?",region:"saint-denis",verified:!0},{id:"cig-travel-07",text:"U.S. Frigate",tip:"⚓ Braithwaite Manor boathouse. On workbench next to boat.",narrative:"Naval pride. Won wars and scared pirates—mostly.",region:"lemoyne",verified:!0},{id:"cig-travel-08",text:"The Showboat",tip:"⚓ Saint Denis docks (S of Newspaper Seller). Requires mission active.",narrative:"Floating theater. Drama on the water, scandals in the cabins.",region:"saint-denis",verified:!0},{id:"cig-travel-09",text:"Balener Whaling Vessel",tip:"🏠 Saint Denis, blue booth on docks (N of Maria Isabella). On windowsill inside.",narrative:"Whale hunter. Brought light to cities and death to giants.",region:"saint-denis",verified:!0},{id:"cig-travel-10",text:"Stagecoach",tip:"🚂 Riggs Station. On bench at train platform.",narrative:"King of the roads before the rails came. Bumpy ride, great stories.",region:"big-valley",verified:!0},{id:"cig-travel-11",text:"Steam Locomotive",tip:"🏚️ N of Clemens Point. Inside ruined unnamed building.",narrative:"Iron horse, unstoppable force. Changed everything, regretted nothing.",region:"lemoyne",verified:!0},{id:"cig-travel-12",text:"Velocipede",tip:"🏠 Saint Denis NW area. On front porch table on main street.",narrative:"Bicycle ancestor. Looked ridiculous, felt glorious.",region:"saint-denis",verified:!0}]},vt={id:"cig-fauna",title:"Fauna of North America",icon:"🦌",defaultOpen:!1,tip_detailed:`Collect all 12 **Fauna of North America** cards showcasing the wildlife of the frontier.

🏆 **Reward:** Perfect Rabbit Pelt + $50

*From deadly predators to humble game, the land teems with life.*`,reward:"Perfect Rabbit Pelt + $50",verified:!0,items:[{id:"cig-fauna-01",text:"Black Widow Spider",tip:"🏠 Vetter's Echo, West Elizabeth. On desk inside cabin.",narrative:"Small, deadly, patient. Nature's perfect assassin.",region:"big-valley",verified:!0},{id:"cig-fauna-02",text:"Bloodhound",tip:'🏚️ Bolger Glade ruins (N of "B" in Bolger Glade). Inside ruined house.',narrative:"Nose that never forgets. Criminals fear them most.",region:"lemoyne",verified:!0},{id:"cig-fauna-03",text:"Bluejay",tip:"🌳 Clingman, New Hanover. On tree platform SE of tower.",narrative:"Blue flash in the forest. Loud mouth, beautiful feathers.",region:"heartlands",verified:!0},{id:"cig-fauna-04",text:"Catfish",tip:"⚓ Saint Denis, behind Bronte's house (NW city). On barrel at small docks.",narrative:"Bottom feeder with whiskers. Tastes better than it looks.",region:"saint-denis",verified:!0},{id:"cig-fauna-05",text:"Coral Snake",tip:"🏠 Lakay, Lemoyne. On table inside largest southern house.",narrative:"Red touches yellow, kills a fellow. Remember that rhyme.",region:"lemoyne",verified:!0},{id:"cig-fauna-06",text:"Grouper",tip:"🚣 Lagras western dock. On back of fishing boat. Requires mission active.",narrative:"Big mouth of the deep. One fish feeds many.",region:"lemoyne",verified:!0},{id:"cig-fauna-07",text:"Large Mouth Bass",tip:"🏡 Gill Landing (NW of Rhodes). Hidden under sofa in seaside house.",narrative:"Fighter on the line. Most fun a fisherman can have.",region:"lemoyne",verified:!0},{id:"cig-fauna-08",text:"Panther",tip:"🏰 Fort Brennand, New Hanover. Inside a hut.",narrative:"Shadow with teeth. You won't see it coming.",region:"heartlands",verified:!0},{id:"cig-fauna-09",text:"Parrot",tip:"📦 Macomb's End pier, Lemoyne. On a crate.",narrative:"Talks but doesn't think. Politicians should take notes.",region:"lemoyne",verified:!0},{id:"cig-fauna-10",text:"Pheasant",tip:"🌳 W of Van Horn, SW of Elysian Pool. On box on tree platform near cabin.",narrative:"Colorful and delicious. Nature's perfect combination.",region:"roanoke-ridge",verified:!0},{id:"cig-fauna-11",text:"Snapping Turtle",tip:"🏠 Firwood Rise, New Hanover. In small crate under dresser inside house.",narrative:"Ancient and angry. Lose a finger if you're not careful.",region:"heartlands",verified:!0},{id:"cig-fauna-12",text:"Turkey",tip:"🔥 Van Horn Trading Post. On mantle upstairs in burned-out sheriff's office.",narrative:"Ben Franklin wanted it as national bird. He wasn't wrong.",region:"roanoke-ridge",verified:!0}]},yt={id:"cig-horses",title:"Breeds of Horses",icon:"🐴",defaultOpen:!1,tip_detailed:`Collect all 12 **Breeds of Horses** cards featuring the noble steeds that conquered the frontier.

🏆 **Reward:** Special Horse Medicine + $50

*A horseman's guide to the finest breeds money can buy—or steal.*`,reward:"Special Horse Medicine + $50",verified:!0,items:[{id:"cig-horse-01",text:"American Paint",tip:"🏭 Rhodes cotton mill (east of town). Ground floor, on crate by industrial wheel.",narrative:"Painted by nature itself. Every one unique as a fingerprint.",region:"lemoyne",verified:!0},{id:"cig-horse-02",text:"Appaloosa",tip:"⚓ Saint Denis southern docks. On barrel behind large building.",narrative:"Spotted coat, Nez Perce heritage. War horse turned working horse.",region:"saint-denis",verified:!0},{id:"cig-horse-03",text:"Andalusian",tip:"🐎 Painted Sky barn (south of Valentine, across Dakota River). On shelf near back of stables.",narrative:"Spanish royalty on four legs. Bred for kings, ridden by cowboys.",region:"heartlands",verified:!0},{id:"cig-horse-04",text:"American Standardbred",tip:"🏠 House south of Braithwaite Manor, on Lannahechee River. In one of the bedrooms.",narrative:"Racing bloodline. Born to pull, trained to gallop.",region:"lemoyne",verified:!0},{id:"cig-horse-05",text:"Nokota",tip:"🐎 Rhodes stable, inside. On a bench.",narrative:"Wild spirit of the Dakotas. Some things shouldn't be tamed.",region:"lemoyne",verified:!0},{id:"cig-horse-06",text:"Ardennes",tip:"🚂 Wallace Station, West Elizabeth. On a shelf.",narrative:"Draft horse built like a boulder. Pulls wagons, pulls weight.",region:"grizzlies",verified:!0},{id:"cig-horse-07",text:"Dutch Warmblood",tip:"🏡 Downes Ranch (SW of Valentine). On mantel inside main house.",narrative:"European elegance meets American grit. Best of both worlds.",region:"heartlands",verified:!0},{id:"cig-horse-08",text:"Turkoman",tip:"🏔️ Cabin near O'Creagh's Run lake (Grizzlies East). On workbench behind cabin.",narrative:"Desert bred, mountain tested. Speed and endurance combined.",region:"ambarino",verified:!0},{id:"cig-horse-09",text:"Hungarian Halfbred",tip:"🔨 Armadillo blacksmith (north of town). Inside hole in door. ⚠️ Epilogue only.",narrative:"Part Thoroughbred, all heart. The cavalry's choice.",region:"new-austin",chapter:"epilogue",verified:!0},{id:"cig-horse-10",text:"Mustang",tip:"🌾 Downes Ranch barn (SW of Valentine). On top of hay on upper level.",narrative:"Wild heart, iron will. America's horse.",region:"heartlands",verified:!0},{id:"cig-horse-11",text:"Thoroughbred",tip:"🚂 Rhodes train station. On wagon near cotton bales.",narrative:"Racing royalty. Born to run, bred to win.",region:"lemoyne",verified:!0},{id:"cig-horse-12",text:"Missouri Fox Trotter",tip:"🏠 House south of Braithwaite Manor (Lannahechee River). In one of the bedrooms.",narrative:"Smooth gaited, sure footed. Long rides, no regrets.",region:"lemoyne",verified:!0}]},wt={id:"cig-prominent",title:"Prominent Americans",icon:"🎩",defaultOpen:!1,tip_detailed:`Collect all 12 **Prominent Americans** cards honoring the nation's leaders and luminaries.

🏆 **Reward:** Eagle Feather x3 + $50

*From presidents to industrialists, the faces that shaped America.*`,reward:"Eagle Feather x3 + $50",verified:!0,items:[{id:"cig-prom-01",text:"President Fisher",tip:"🏭 Jansen Mills (N of Rhodes, Southfield Flats). On barrels at top of loading ramp.",narrative:"The people's president. Or so the newspapers said.",region:"lemoyne",verified:!0},{id:"cig-prom-02",text:"President Hardin",tip:"🏡 West of Lagras lake (between lake and Kamassa River). On railing next to bait shop.",narrative:"Led through war, died in peace. The nation mourned—briefly.",region:"lemoyne",verified:!0},{id:"cig-prom-03",text:"Lillian Powell",tip:"🏚️ NW of Pleasance schoolhouse. Shack, card in crate in bushes (NE side).",narrative:"Suffragette, reformer, troublemaker. Depended on who you asked.",region:"lemoyne",verified:!0},{id:"cig-prom-04",text:"Leviticus Cornwall",tip:'🏡 Small farm SW of Valentine (between "I" and "N" on map). On porch of house.',narrative:"Built an empire on oil and blood. Progress has its price.",region:"heartlands",verified:!0},{id:"cig-prom-05",text:"J.D. McKnight",tip:"🎪 Rhodes gazebo (south of town, east of Saloon). On table inside.",narrative:"Railroad baron. Connected the nation, divided its workers.",region:"lemoyne",verified:!0},{id:"cig-prom-06",text:"Luther Covington",tip:"📦 Saint Denis SW docks. On a crate.",narrative:"Steel magnate. His bridges still stand; his workers' graves, less so.",region:"saint-denis",verified:!0},{id:"cig-prom-07",text:"Harvey Griggs",tip:"🏭 Cornwall Co. Freight Station (large brick building S of Saint Denis). Under stairs on workbench. Requires mission active.",narrative:"Shipping tycoon. If it moved by water, he owned it.",region:"saint-denis",verified:!0},{id:"cig-prom-08",text:"Henrietta Beatrice Woods",tip:"🏠 NE Saint Denis (N of gazebo). Red house on east side of road after first intersection. On front porch table.",narrative:"Philanthropist and patron. Gave away fortunes she never earned.",region:"saint-denis",verified:!0},{id:"cig-prom-09",text:"General Quincy Harris",tip:"⛽ N of Heartland Oil Fields. At base of oil well tower.",narrative:"War hero turned politician. The uniform never really came off.",region:"heartlands",verified:!0},{id:"cig-prom-10",text:"General Cornelius Palmer",tip:"🏡 Farm N of Rhodes/Mattock Pond. On table inside shed.",narrative:"Cavalry commander. His victories were decisive; their costs, forgotten.",region:"lemoyne",verified:!0},{id:"cig-prom-11",text:"Senator Thaddeus Waxman",tip:"🏚️ Cabin W of shack, NW of Pleasance schoolhouse. On mantle inside.",narrative:"Lawmaker and dealmaker. The line between them blurred.",region:"lemoyne",verified:!0},{id:"cig-prom-12",text:"President Alfred MacAlister",tip:"🏝️ Islands SW of Saint Denis (Lannahechee River). Cabin on eastern shore, on SE windowsill.",narrative:"Last president of the old order. First of the new. History's hinge.",region:"saint-denis",verified:!0}]},bt={id:"cig-flora",title:"Flora of North America",icon:"🌿",defaultOpen:!1,tip_detailed:`Collect all 12 **Flora of North America** cards celebrating the botanical treasures of the frontier.

🏆 **Reward:** Special Miracle Tonic + $50

*From desert cacti to coastal redwoods, the land blooms with diversity.*`,reward:"Special Miracle Tonic + $50",verified:!0,items:[{id:"cig-flora-01",text:"Golden Currant",tip:"🏚️ Lagras Lake area (NW of Saint Denis). On shelf inside northeast shack.",narrative:"Sweet berries in a sour land. Nature's little joke on the hungry.",region:"lemoyne",verified:!0},{id:"cig-flora-02",text:"Hummingbird Sage",tip:"🏠 Shack NW of Van Horn (toward Elysian Pool). On table, west side of shack.",narrative:"Named for the birds it attracts. Pretty and useful—unlike most things out here.",region:"roanoke-ridge",verified:!0},{id:"cig-flora-03",text:"Oleander Sage",tip:'🌿 Saint Denis alleyway (above "E" on map). On ledge behind vine-covered lattice.',narrative:"Deadly beautiful. Touch it wrong and you'll meet your maker.",region:"saint-denis",verified:!0},{id:"cig-flora-04",text:"Yarrow",tip:"🏚️ Cabin south of Lakay, Lemoyne. On windowsill inside. ⚠️ Stranger may try to rob you!",narrative:"Heals wounds, stops bleeding. Every outlaw's best friend.",region:"lemoyne",verified:!0},{id:"cig-flora-05",text:"Indian Tobacco",tip:"📦 SE of Lakay, Lemoyne. On crate west of cabin in building cluster.",narrative:"Sacred smoke. The natives knew its power long before we arrived.",region:"lemoyne",verified:!0},{id:"cig-flora-06",text:"Black Mangrove",tip:"🚂 Emerald Station, New Hanover. Underneath bench outside train station.",narrative:"Roots in salt water. Survives where nothing should.",region:"heartlands",verified:!0},{id:"cig-flora-07",text:"Longleaf Pine",tip:"⛏️ Annesburg mine shaft. Climb down boarded shaft with ladder, on crate near lantern.",narrative:"Towers over the forest. Wood strong enough to build an empire.",region:"roanoke-ridge",verified:!0},{id:"cig-flora-08",text:"Desert Fan Palm",tip:"🏛️ West of Tumbleweed, front porch table of large mansion. ⚠️ Epilogue only.",narrative:"Oasis plants. Where they grow, water hides.",region:"new-austin",chapter:"epilogue",verified:!0},{id:"cig-flora-09",text:"Coastal Redwood",tip:"🏠 Strawberry, West Elizabeth. On table behind SE house. Requires mission active.",narrative:"Giants of the forest. They were old when Christ was young.",region:"big-valley",verified:!0},{id:"cig-flora-10",text:"Horse Crippler Cactus",tip:"🏡 Caliga Hall. On workbench in lean-to near NW pier.",narrative:"Named for its victims. Step on it and learn why.",region:"lemoyne",verified:!0},{id:"cig-flora-11",text:"Blazing Star",tip:'🏔️ Big Valley cabin (above "W" in West, before Little Creek River). On railing by door.',narrative:"Purple fire in the meadow. Pretty enough to pick, tough enough to survive.",region:"big-valley",verified:!0},{id:"cig-flora-12",text:"Carolina Lupine",tip:"🏛️ Tumbleweed sheriff office roof, behind the sign. ⚠️ Epilogue only.",narrative:"Blue bonnets of the frontier. Spring's announcement that winter lost.",region:"new-austin",chapter:"epilogue",verified:!0}]},kt={id:"cig-beauty",title:"Gems of Beauty",icon:"💎",defaultOpen:!1,tip_detailed:`Collect all 12 **Gems of Beauty** cards celebrating the beauties of the age.

🏆 **Reward:** Platinum Chain Necklace + $100

*Portraits of elegance from coast to coast.*`,reward:"Platinum Chain Necklace + $100",verified:!0,items:[{id:"cig-beauty-01",text:"Leila Stetson",tip:"🏠 Carmody Dell (NE of Heartland Oil Field). Inside house, on windowsill near fireplace.",narrative:"Eyes that launched a thousand stampedes. Cowboys rode miles just to see her pass.",region:"heartlands",verified:!0},{id:"cig-beauty-02",text:"Isabelle Barlow",tip:"📮 Doverhill (north of Annesburg). On wall shelf inside old post office.",narrative:"Grace under pressure. Smiled through scandals that would sink lesser souls.",region:"roanoke-ridge",verified:!0},{id:"cig-beauty-03",text:"Hattie Langtry",tip:"☄️ Doverhill Meteor House (SE of Abandoned Trading Post). On side table inside.",narrative:"Celestial beauty. They said she fell from the stars—she never denied it.",region:"roanoke-ridge",verified:!0},{id:"cig-beauty-04",text:"Isabelle Standish",tip:"⛏️ Annesburg mine (SW entrance). On table in chamber left of entrance.",narrative:"Rose among thorns. Bloom bright in the darkest places.",region:"roanoke-ridge",verified:!0},{id:"cig-beauty-05",text:"Maud Engel",tip:"🏚️ Small shack south of Heartland Oil Fields. On table inside.",narrative:"Innocent face, calculating mind. What you saw wasn't what you got.",region:"heartlands",verified:!0},{id:"cig-beauty-06",text:"Sadie Russell",tip:"🐔 Blackwater chicken coop (near Barber). On barrel.",narrative:"Wild heart in a corseted world. Proper on the outside, rebel within.",region:"west-elizabeth",verified:!0},{id:"cig-beauty-07",text:"Geraldine Emerson",tip:"🏚️ Hanging Dog Ranch barn (north of Strawberry). On crate on upper floor.",narrative:"Dangerous curves on a treacherous road. Men crashed trying to follow.",region:"big-valley",verified:!0},{id:"cig-beauty-08",text:"Agnes Guyon",tip:'🏔️ Millesani Claim shack (Grizzlies West, above "E" on map). On crate inside.',narrative:"Mountain flower. Survived winters that buried tougher folk.",region:"ambarino",verified:!0},{id:"cig-beauty-09",text:"Jennie Willetts",tip:'🐴 Van Horn, west from Post Office. On barrel in backyard of "Horse Shoeing" building.',narrative:"Working class charm. Beauty that money couldn't buy or corrupt.",region:"roanoke-ridge",verified:!0},{id:"cig-beauty-10",text:"Ilga Ulmer",tip:"💊 Saint Denis, alley near Doctor. On old desk. Requires mission active.",narrative:"Exotic mystery. Her accent alone was worth the ticket price.",region:"saint-denis",verified:!0},{id:"cig-beauty-11",text:"Fay Delaro",tip:"🏠 Valentine Auction Yard. Upstairs in southernmost barn, at big window facing yard.",narrative:"Country girl done good. Left hearts broken from coast to coast.",region:"heartlands",verified:!0},{id:"cig-beauty-12",text:"Pauline Henderson",tip:"🚂 Bacchus Station. On crate at north end of station.",narrative:"Last stop on the beauty train. Worth every mile of the journey.",region:"grizzlies",verified:!0}]},St={id:"cig-champions",title:"World's Champions",icon:"🏆",defaultOpen:!1,tip_detailed:`Collect all 12 **World's Champions** cards celebrating athletic excellence.

🏆 **Reward:** Valerian Root + $50

*The greatest sportsmen of the era, immortalized on paper.*`,reward:"Valerian Root + $50",verified:!0,items:[{id:"cig-champ-01",text:"Percy Wood",tip:"🏠 Butcher Creek (NW of Van Horn). On well outside cabin.",narrative:"Greco-Roman wrestler. Broke bones and hearts in equal measure.",region:"roanoke-ridge",verified:!0},{id:"cig-champ-02",text:"Edwin A. Rowe",tip:"🏠 Clawson's Rest (N of Valentine, Grizzlies West). On windowsill inside shack.",narrative:"Billiards champion. Made bank shots look like prophecy.",region:"grizzlies",verified:!0},{id:"cig-champ-03",text:"Theobaud Getzin",tip:"🏪 Emerald Ranch saloon. On shelf outside building.",narrative:"Champion of champions. Whatever the sport, he mastered it.",region:"heartlands",verified:!0},{id:"cig-champ-04",text:"H.T. Slocum",tip:"🏚️ Canebreak Manor (Bluewater Marsh, N of Saint Denis). Under house among boxes.",narrative:"Tennis legend. Served aces and attitude in equal measure.",region:"lemoyne",verified:!0},{id:"cig-champ-05",text:"R.S. Harradon",tip:"🏠 Shack W of Kamassa River (above Bluewater Marsh). On table on side of house.",narrative:"Cycling pioneer. Pedaled faster than horses ran.",region:"lemoyne",verified:!0},{id:"cig-champ-06",text:"E.D. Ewing",tip:"🏚️ Ruined building N of Rhodes. Down through open hatch, on shelf in basement.",narrative:"Tightrope walker. Death waited below; he never looked down.",region:"lemoyne",verified:!0},{id:"cig-champ-07",text:"Patsey Hill",tip:"🏠 Saint Denis NE corner. On back porch railing of a house.",narrative:"Tennis player. Her serve was faster than most men's thoughts.",region:"saint-denis",verified:!0},{id:"cig-champ-08",text:"William Sleicher",tip:"⛽ Heartland Oilfields (or Cornwall Kerosene). On porch table facing tracks.",narrative:"Weightlifter. Could lift a horse—and did, for the papers.",region:"heartlands",verified:!0},{id:"cig-champ-09",text:"Edwin Singerly",tip:"⛏️ Annesburg Coal Tower. Climb to very top platform, on floor at corner.",narrative:"Mountain climber. Conquered peaks that killed lesser men.",region:"roanoke-ridge",verified:!0},{id:"cig-champ-10",text:"Felix Hawley",tip:"🏔️ Barrow Lagoon hut (NW of Valentine, Grizzlies). On table inside.",narrative:"Boxing champion. His fists wrote stories on other men's faces.",region:"ambarino",verified:!0},{id:"cig-champ-11",text:"Alex McCormack",tip:"🍺 Saint Denis, Bastille Saloon courtyard. Down stairs, on boxes with pile of washing.",narrative:"Swimmer extraordinaire. Cut through water like a fish with ambition.",region:"saint-denis",verified:!0},{id:"cig-champ-12",text:"Marcus Gentry",tip:"🏠 Saint Denis, north area. On veranda at back of a house.",narrative:"Track and field legend. Faster than rumor, stronger than accusation.",region:"saint-denis",verified:!0}]},xt={id:"cig-vistas",title:"Vistas of America",icon:"🏔️",defaultOpen:!1,tip_detailed:`Collect all 12 **Vistas of America** cards showcasing the magnificent landscapes of the nation.

🏆 **Reward:** Gold Nugget + $100

*These scenic postcards capture America's grandeur—from bustling cities to untamed wilderness.*`,reward:"Gold Nugget + $100",verified:!0,items:[{id:"cig-vista-01",text:"New York",tip:"🏡 Caliga Hall (south of Rhodes). On front porch of second building from left.",narrative:"The city that never sleeps. Most folks here never will either.",region:"lemoyne",verified:!0},{id:"cig-vista-02",text:"Saint Denis",tip:"📮 Saint Denis, near Post Office. On small green luggage cart with red wheels.",narrative:"Paris of the South, they call it. Smells more like New Orleans though.",region:"saint-denis",verified:!0},{id:"cig-vista-03",text:"Blackwater",tip:"🎭 Blackwater Grand Theatre roof. Climb ladder behind theatre, card on chimney top.",narrative:"Civilization's last outpost before the wilderness swallows you whole.",region:"west-elizabeth",verified:!0},{id:"cig-vista-04",text:"Armadillo",tip:"🐷 Armadillo, west side. On barrel inside the pig pen. ⚠️ Epilogue only.",narrative:"Desert town. The pigs live better than most residents.",region:"new-austin",chapter:"epilogue",verified:!0},{id:"cig-vista-05",text:"Rio Bravo",tip:"🌾 Flatneck Station, New Hanover. Climb windmill tower to top platform.",narrative:"Where the river meets the desert. Beautiful and deadly.",region:"heartlands",verified:!0},{id:"cig-vista-06",text:"The Grizzlies",tip:"🏠 Venter's Place shack, near Armadillo. On table inside. Requires mission active. ⚠️ Epilogue only.",narrative:"Mountains that eat men. The view's worth the frostbite, they say.",region:"new-austin",chapter:"epilogue",verified:!0},{id:"cig-vista-07",text:"San Francisco",tip:"🏰 Fort Brennand (New Hanover). SE tower, climb ladder, on windowsill.",narrative:"City by the bay. Gold built it, earthquakes will test it.",region:"heartlands",verified:!0},{id:"cig-vista-08",text:"Tall Trees",tip:"🪵 Flatneck Station, behind train station. On barrel next to firewood stack.",narrative:"Redwoods that touch the sky. Makes a man feel small—which he is.",region:"heartlands",verified:!0},{id:"cig-vista-09",text:"Valentine",tip:"🚂 Valentine Train Station, inside. On a table.",narrative:"Heart of cattle country. Smells like progress and cowpies.",region:"heartlands",verified:!0},{id:"cig-vista-10",text:"Chicago",tip:"🌾 Emerald Ranch windmill. Climb to top platform.",narrative:"Windy city of beef and steel. The stockyards never close.",region:"heartlands",verified:!0},{id:"cig-vista-11",text:"Rhodes",tip:"⚰️ Rhodes cemetery, east side near church. On gravestone of William Willie Bowles.",narrative:"Southern charm with a side of tension. Confederate ghosts walk here.",region:"lemoyne",verified:!0},{id:"cig-vista-12",text:"Annesburg",tip:"⛏️ Annesburg, higher mining area. On barrel on western minecart tracks.",narrative:"Coal country. Black gold keeps the nation running—and the miners dying.",region:"roanoke-ridge",verified:!0}]},Ct={id:"cig-artists",title:"Artists, Writers & Poets",icon:"🎨",defaultOpen:!1,tip_detailed:`Collect all 12 **Artists, Writers & Poets** cards honoring creative souls of the frontier.

🏆 **Reward:** Ginseng Elixir + $100

*The dreamers who painted the American spirit with words and brush.*`,reward:"Ginseng Elixir + $100",verified:!0,items:[{id:"cig-art-01",text:"Edith Corinne",tip:"👗 Braithwaite Manor grounds. Near clothesline table, lower level.",narrative:"Portraitist to high society. Painted lies and called them art.",region:"lemoyne",verified:!0},{id:"cig-art-02",text:"Elsie Rose",tip:"🏨 Strawberry hotel. On table at top of stairwell.",narrative:"Romantic poet. Heart on sleeve, ink on everything else.",region:"big-valley",verified:!0},{id:"cig-art-03",text:"W.G. Hoyt",tip:"🏠 Hani's Bethel (New Hanover). On table inside cabin.",narrative:"Western chronicler. Made outlaws into legends with his pen.",region:"heartlands",verified:!0},{id:"cig-art-04",text:"Aldous Bramley",tip:"🏠 S of Blackwater, follow telegraph wire to blue-grey house. On front porch between chairs.",narrative:"Satirist supreme. His wit cut deeper than most knives.",region:"west-elizabeth",verified:!0},{id:"cig-art-05",text:"Preston T. Stephenson",tip:"🏭 Annesburg mining office (center of town). On desk upstairs. ⚠️ Trespassing!",narrative:"Industrial poet. Found beauty in the smoke and sweat of progress.",region:"roanoke-ridge",verified:!0},{id:"cig-art-06",text:"Evelyn Miller",tip:"🏠 Blackwater, NW of warehouse. On table next to clothesline.",narrative:"The voice of a generation. His words outlived his liver.",region:"west-elizabeth",verified:!0},{id:"cig-art-07",text:"Slick Hutton",tip:"🏛️ Van Horn Mansion (S-SW of Van Horn). On crate on NE balcony.",narrative:"Caricaturist. Drew truth that words couldn't capture.",region:"roanoke-ridge",verified:!0},{id:"cig-art-08",text:"Laurence Carson",tip:"🗑️ Saint Denis, alley opposite Trapper. On table behind wooden wall.",narrative:"Playwright of the people. His tragedies were everyone's.",region:"saint-denis",verified:!0},{id:"cig-art-09",text:"Miss Maud Delancey",tip:"🚣 Houseboat in Bluewater Marsh. On table on upper deck by hammock.",narrative:"Mystery novelist. Her plots were deadlier than her characters.",region:"lemoyne",verified:!0},{id:"cig-art-10",text:"Charles Châtenay",tip:"🏡 Chadwick Farm (NW of Valentine). On small table on front porch.",narrative:"French eccentric. Scandalized the refined with art and appetite.",region:"heartlands",verified:!0},{id:"cig-art-11",text:"George Dixie",tip:"🏡 Guthrie Farm (Heartland Overflow, W of Emerald Ranch). On bed with guitar in farmhouse.",narrative:"Folk musician turned painter. Saw America through strings and canvas.",region:"heartlands",verified:!0},{id:"cig-art-12",text:"Richard McCullough",tip:"🏛️ Gazebo N of Saint Denis (past cemetery, W side of road). On table to SE.",narrative:"Philosopher poet. Made sense of a senseless world—most days.",region:"saint-denis",verified:!0}]},Rt={id:"cig-inventions",title:"Amazing Inventions",icon:"💡",defaultOpen:!1,tip_detailed:`Collect all 12 **Amazing Inventions** cards celebrating the technological marvels of the industrial age.

🏆 **Reward:** Volatile Dynamite + $100

*These cards can be found after starting the "Smoking and Other Hobbies" stranger mission from Phineas T. Ramsbottom at Flatneck Station.*`,reward:"Volatile Dynamite + $100",verified:!0,items:[{id:"cig-inv-01",text:"Steam Locomotive",tip:"🏚️ Abandoned church SE of Bolger Glade, near Rhodes. Climb to upper landing, sprint-jump to bird's nest.",narrative:"The iron horse that conquered the frontier—belching smoke and shrieking across the wilderness.",region:"lemoyne",verified:!0},{id:"cig-inv-02",text:"Camera",tip:"📸 Saint Denis, balcony of building just south of the Photo Studio.",narrative:"Captures souls, they say. Or at least, the exact moment you looked your worst.",region:"saint-denis",verified:!0},{id:"cig-inv-03",text:"Electrical Execution Apparatus",tip:"⚡ Hanging Dog Ranch, inside main house under upstairs bunk bed. May need to climb via roof.",narrative:"Progress meets justice—though some would say neither is served by this contraption.",region:"big-valley",verified:!0},{id:"cig-inv-04",text:"Typewriter",tip:'📝 Blackwater, on barrel near warehouse entrance east of town (near "E" in Blackwater on map).',narrative:"Every key strike is a small explosion of progress. Newspapers never printed faster.",region:"west-elizabeth",verified:!0},{id:"cig-inv-05",text:"Buck's Revolver",tip:'🔫 Annesburg, behind the gunsmith shop on a table. Requires "Smoking and Other Hobbies" mission active.',narrative:"Sam Colt made men equal—this particular model made them deader than most.",region:"roanoke-ridge",verified:!0},{id:"cig-inv-06",text:"Telegraph",tip:"📡 West of Van Horn, follow train tracks north to abandoned station. On bench facing tracks.",narrative:"Words traveling faster than horses—what a time to be alive and sending bad news.",region:"roanoke-ridge",verified:!0},{id:"cig-inv-07",text:"Manned Glider",tip:"🪁 Caliga Hall (south of Rhodes), on workbench inside the large red barn.",narrative:"Dreams of flight, realized through wood and canvas. Icarus would be proud—and jealous.",region:"lemoyne",verified:!0},{id:"cig-inv-08",text:"Dynamite",tip:"💥 Shady Belle (SE of Rhodes), on back porch railing of the mansion.",narrative:"Nobel's gift to miners and outlaws alike. Handle with care—or don't, depending on your goal.",region:"lemoyne",verified:!0},{id:"cig-inv-09",text:"Cylinder Phonograph",tip:"🎵 Valentine saloon, on windowsill facing street, next to the piano.",narrative:"Captured voices, frozen in wax. Your grandchildren will hear you clear your throat forever.",region:"heartlands",verified:!0},{id:"cig-inv-10",text:"Player Piano",tip:"🎹 Saint Denis, Bastile Saloon (western saloon), on the piano inside.",narrative:"Music without musicians—the first step toward making us all obsolete.",region:"saint-denis",verified:!0},{id:"cig-inv-11",text:"Electric Light Bulb",tip:"💡 Doverhill (north of Annesburg), Tesla coil facility. On crate behind building near back exit.",narrative:"Edison's miracle—trading whale oil and candlelight for the hum of the future.",region:"roanoke-ridge",verified:!0},{id:"cig-inv-12",text:"Fountain Pen",tip:'✒️ Pleasance (abandoned village north of "O" in Lemoyne), inside school on a desk.',narrative:"No more inkwells, no more spills. Just thoughts flowing smooth as a spring creek.",region:"lemoyne",verified:!0}]},Lt=[gt,ft,mt,vt,yt,wt,bt,kt,St,xt,Ct,Rt],Tt={id:"graves",title:"Gang Member Graves",icon:"🪦",defaultOpen:!1,items:[{id:"grave-jenny",text:"Jenny Kirk's Grave",tip:" Near Colter, snowy area. Died during Blackwater heist.",tip_detailed:`**Jenny Kirk**. She was with us at Blackwater—young, fierce, full of fire. The heist went wrong, and she paid the price with her life.

 Her grave lies in the **snow near Colter**, not far from where we made camp that bitter winter. A simple marker for a life cut too short.

*She deserved better. They all did.*`,region:"ambarino",chapter:2,missable:!0,verified:!0},{id:"grave-davey",text:"Davey Callender's Grave",tip:" Near Colter, by Jenny's grave. Died from Blackwater wounds.",tip_detailed:`**Davey Callender** made it out of Blackwater, but he was already done for. Gut shot. He held on through the mountains, but the cold and the blood took him before we even got our bearings.

 They buried him up in the **snow near Colter**, right beside Jenny. Two graves side by side, testament to that cursed job.

*He was tough as nails. Just wasn't tough enough.*`,region:"ambarino",chapter:2,missable:!0,verified:!0},{id:"grave-sean",text:"Sean MacGuire's Grave",tip:" Scarlett Meadows, after Rhodes mission.",tip_detailed:`**Sean MacGuire**—loud-mouthed Irishman with a heart of gold. Shot dead in the streets of Rhodes. One second he's crackin' jokes, the next he's gone. No warning. No chance to say goodbye.

 His grave is in **Scarlett Meadows**, not far from Rhodes. A quiet spot for a man who was never quiet a day in his life.

*He made us laugh. God knows we needed that.*`,region:"lemoyne",chapter:3,missable:!0,verified:!0},{id:"grave-kieran",text:"Kieran Duffy's Grave",tip:" Near Shady Belle, after O'Driscoll revenge.",tip_detailed:`**Kieran Duffy** came to us as an O'Driscoll, but he proved himself. Worked hard, stayed loyal. And for his trouble, those O'Driscoll bastards sent him back to us in pieces.

 They laid him to rest **near Shady Belle**. A marked man who just wanted to belong somewhere.

⚠️ *In this life, loyalty don't always save you.*`,region:"lemoyne",chapter:4,missable:!0,verified:!0},{id:"grave-hosea",text:"Hosea Matthews' Grave",tip:" Near Bluewater Marsh, after Saint Denis bank.",tip_detailed:`**Hosea Matthews**. The old man. The voice of reason. Dutch's conscience—what was left of it. He died in Saint Denis, gunned down by Pinkertons during that damned bank job.

 His grave lies **near Bluewater Marsh**, a peaceful place for a man who sought peace.

*He was the best of us. The smartest. If we'd listened to him...*`,region:"lemoyne",chapter:4,missable:!0,verified:!0},{id:"grave-lenny",text:"Lenny Summers' Grave",tip:" Near Hosea's grave, after Saint Denis bank.",tip_detailed:`**Lenny Summers**. Young, brilliant, brave. He had his whole life ahead of him. The bank job in Saint Denis took that away—bullets don't care about potential.

 They buried him **near Hosea**, the old man and the young man together. A cruel irony.

*LENNY! ...Damn. I miss that kid.*`,region:"lemoyne",chapter:4,missable:!0,verified:!0},{id:"grave-eagle",text:"Eagle Flies' Grave",tip:" Wapiti Indian Reservation, after oil factory.",tip_detailed:`**Eagle Flies** died fighting for his people at the oil factory. Rains Fall's son, proud warrior, caught between two worlds. He went down swinging, even when the fight was already lost.

 His grave is at **Wapiti Indian Reservation**, among his people.

*Some men burn so bright, they can't last long. He was one of 'em.*`,region:"ambarino",chapter:6,missable:!0,verified:!0},{id:"grave-susan",text:"Susan Grimshaw's Grave",tip:" Near Beaver Hollow camp ruins.",tip_detailed:`**Susan Grimshaw** kept that camp running through hell and high water. Fierce, loyal to a fault. In the end, she stood with Arthur when the gang fell apart. It cost her everything.

 Her grave is **near Beaver Hollow**, the last camp. The camp where it all ended.

*She held us together when nobody else could.*`,region:"new-hanover",chapter:6,missable:!0,verified:!0},{id:"grave-arthur",text:"Arthur Morgan's Grave",tip:" EPILOGUE. East of Bacchus Station. Visit as John.",tip_detailed:`**Arthur Morgan**. Outlaw. Brother. Legend. He died on that mountain, watching the sunrise, knowing he'd done what he could to give the others a chance.

 His grave lies **east of Bacchus Station**, overlooking the valley. Visit as John—he has words for his old friend.

🏆 *The best of us. Don't let anyone tell you different.*`,region:"ambarino",chapter:"epilogue",missable:!1,verified:!0}]},Bt={id:"journal",title:"XXV. Personal Journal",icon:"📓",defaultOpen:!0,isJournal:!0},v=[Ne,Ge,Ve,ze,Ue,Ye,Qe,je,pt,We,qe,ut,Je,ht,ct,Ke,lt,Tt,...st,dt,...Lt,Bt],Pt=[{id:"getting-started",title:"Getting Started",icon:"fa-star",sections:["quickstart"]},{id:"money-gear",title:"Money & Gear",icon:"fa-coins",sections:["treasures","weapons","satchel","camp","trapper","unique-hats","pamphlets","talismans"]},{id:"world",title:"World & Story",icon:"fa-map",sections:["strangers","legendary-animals","bounties","gang-hideouts","companion-activities","camp-requests","mysteries","missable","graves"]},{id:"challenges",title:"Challenges",icon:"fa-trophy",sections:["bandit","explorer","hunter","herbalist","sharpshooter","horseman","survivalist","gambler","weapons-expert"]},{id:"collectibles",title:"Collectibles",icon:"fa-image",sections:["collectibles","cig-gunslingers","cig-stage","cig-travel","cig-fauna","cig-horses","cig-prominent","cig-flora","cig-beauty","cig-champions","cig-vistas","cig-artists","cig-inventions"]},{id:"personal",title:"Personal",icon:"fa-book",sections:["journal"]}],Et={quickstart:"fa-play-circle",treasures:"fa-gem",weapons:"fa-gun",satchel:"fa-briefcase",camp:"fa-campground",trapper:"fa-paw","unique-hats":"fa-hat-cowboy",pamphlets:"fa-scroll",talismans:"fa-hand-sparkles",strangers:"fa-user-secret","legendary-animals":"fa-hippo",bounties:"fa-crosshairs","gang-hideouts":"fa-skull-crossbones","companion-activities":"fa-users","camp-requests":"fa-box",mysteries:"fa-magnifying-glass",missable:"fa-triangle-exclamation",graves:"fa-cross",bandit:"fa-mask",explorer:"fa-compass",hunter:"fa-bullseye",herbalist:"fa-leaf",sharpshooter:"fa-crosshairs",horseman:"fa-horse",survivalist:"fa-fire",gambler:"fa-dice","weapons-expert":"fa-gun",collectibles:"fa-box-archive","cig-gunslingers":"fa-person-rifle","cig-stage":"fa-masks-theater","cig-travel":"fa-train","cig-fauna":"fa-paw","cig-horses":"fa-horse-head","cig-prominent":"fa-user-tie","cig-flora":"fa-seedling","cig-beauty":"fa-crown","cig-champions":"fa-medal","cig-vistas":"fa-mountain-sun","cig-artists":"fa-palette","cig-inventions":"fa-gears",journal:"fa-book-open"},D="rdr_",m={checked:{},listeners:new Set},p={init(){for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e);if(t&&t.startsWith(`${D}check_`)){const i=t.replace(`${D}check_`,"");try{m.checked[i]=JSON.parse(localStorage.getItem(t))||!1}catch{m.checked[i]=!1}}}console.log(`📦 State initialized: ${Object.keys(m.checked).length} items loaded`)},get(e){return m.checked[e]||!1},set(e,t){const i=m.checked[e];m.checked[e]=t;try{localStorage.setItem(`${D}check_${e}`,JSON.stringify(t))}catch(a){console.warn("Storage save failed:",a)}i!==t&&this._notifyListeners({id:e,value:t,type:"change"})},toggle(e){const t=!this.get(e);return this.set(e,t),t},subscribe(e){return m.listeners.add(e),()=>m.listeners.delete(e)},_notifyListeners(e){m.listeners.forEach(t=>{try{t(e)}catch(i){console.warn("Listener error:",i)}})},getProgress(e){let t=0,i=0;return e.forEach(a=>{a.isJournal||!a.items||a.items.forEach(r=>{t++,this.get(r.id)&&i++})}),{completed:i,total:t,percentage:t>0?Math.round(i/t*100):0}},getSectionProgress(e){if(!e.items)return{completed:0,total:0};const t=e.items.length;return{completed:e.items.filter(a=>this.get(a.id)).length,total:t}},reset(){Object.keys(m.checked).forEach(e=>{this.set(e,!1)})},getCheckedIds(){return Object.entries(m.checked).filter(([,e])=>e).map(([e])=>e)},bulkSet(e){Object.entries(e).forEach(([t,i])=>{this.set(t,i)})}},n={searchTerm:"",chapter:null,region:null,status:"all",missableOnly:!1,hasReward:!1},q=[{id:"new-hanover",name:"New Hanover"},{id:"lemoyne",name:"Lemoyne"},{id:"west-elizabeth",name:"West Elizabeth"},{id:"new-austin",name:"New Austin"},{id:"ambarino",name:"Ambarino"}],At={heartlands:"new-hanover",cumberland:"new-hanover",roanoke:"new-hanover","roanoke-ridge":"new-hanover",grizzlies:"ambarino","grizzlies-east":"ambarino","grizzlies-west":"ambarino","big-valley":"west-elizabeth","tall-trees":"west-elizabeth","great-plains":"west-elizabeth",bayou:"lemoyne","saint-denis":"lemoyne","scarlett-meadows":"lemoyne",bluewater:"lemoyne",gaptooth:"new-austin","rio-bravo":"new-austin",cholla:"new-austin","hennigans-stead":"new-austin"};function _(e){if(!e)return null;const t=e.toLowerCase();return q.some(i=>i.id===t)?t:At[t]||t}function Ht(e){var t,i,a;if(n.searchTerm){const r=n.searchTerm.toLowerCase(),o=(t=e.title)==null?void 0:t.toLowerCase().includes(r),s=(i=e.description)==null?void 0:i.toLowerCase().includes(r),l=(a=e.tags)==null?void 0:a.some(d=>d.toLowerCase().includes(r));if(!o&&!s&&!l)return!1}return!(n.chapter&&String(e.chapter||"").toLowerCase()!==n.chapter||n.region&&_(e.region)!==n.region||n.missableOnly&&!e.missable||n.hasReward&&!e.reward)}function Mt(e){return n.status==="all"?!0:n.status==="complete"?e:n.status==="incomplete"?!e:!0}function Ft(){const e=new Set,t=new Set;return v.forEach(i=>{var a;(a=i.items)==null||a.forEach(r=>{var o;if(r.chapter&&e.add(String(r.chapter).toLowerCase()),r.region){const s=_(r.region);s&&t.add(s)}(o=r.subItems)==null||o.forEach(s=>{if(s.chapter&&e.add(String(s.chapter).toLowerCase()),s.region){const l=_(s.region);l&&t.add(l)}})})}),{chapters:Array.from(e).sort((i,a)=>i==="epilogue"?1:a==="epilogue"?-1:parseInt(i)-parseInt(a)),regions:Array.from(t).sort()}}function Ot(e){n.searchTerm=e.trim()}function ee(e){n.chapter=e}function te(e){n.region=e}function Dt(e){n.status=e}function $t(){n.missableOnly=!n.missableOnly}function It(){n.hasReward=!n.hasReward}function _t(e){switch(e){case"search":n.searchTerm="";break;case"chapter":n.chapter=null;break;case"region":n.region=null;break;case"status":n.status="all";break;case"missable":n.missableOnly=!1;break;case"reward":n.hasReward=!1;break}}function Nt(){n.searchTerm="",n.chapter=null,n.region=null,n.status="all",n.missableOnly=!1,n.hasReward=!1}function Gt(){let e=0;return n.searchTerm&&e++,n.chapter&&e++,n.region&&e++,n.status!=="all"&&e++,n.missableOnly&&e++,n.hasReward&&e++,e}function Wt(){const{chapters:e,regions:t}=Ft();return`
    <div class="filter-panel" id="filter-panel">
      <!-- Status Radio -->
      <div class="filter-group">
        <div class="filter-label">Status</div>
        <div class="filter-radios">
          <button class="filter-radio ${n.status==="all"?"active":""}" data-status="all">All</button>
          <button class="filter-radio ${n.status==="incomplete"?"active":""}" data-status="incomplete">Todo</button>
          <button class="filter-radio ${n.status==="complete"?"active":""}" data-status="complete">Done</button>
        </div>
      </div>
      
      <!-- Chapter Chips -->
      <div class="filter-group">
        <div class="filter-label">Chapter</div>
        <div class="filter-chips" id="filter-chips-chapter">
          ${e.length===0?'<span class="filter-empty">No chapter data</span>':e.map(i=>{const a=i==="epilogue"?"Epilogue":`CH ${i}`;return`<button class="filter-chip chapter-chip ${n.chapter===i?"active":""}" data-chapter="${i}">${a}</button>`}).join("")}
        </div>
      </div>
      
      <!-- Region Chips -->
      <div class="filter-group">
        <div class="filter-label">Region</div>
        <div class="filter-chips" id="filter-chips-region">
          ${t.length===0?'<span class="filter-empty">No region data</span>':t.map(i=>{const a=q.find(o=>o.id===i),r=a?a.name:i;return`<button class="filter-chip region-chip ${n.region===i?"active":""}" data-region="${i}">${r}</button>`}).join("")}
        </div>
      </div>
      
      <!-- Toggle Filters -->
      <div class="filter-group filter-toggles">
        <button class="filter-toggle ${n.missableOnly?"active":""}" id="filter-missable">
          <i class="fa-solid fa-triangle-exclamation"></i> Missable
        </button>
        <button class="filter-toggle ${n.hasReward?"active":""}" id="filter-reward">
          <i class="fa-solid fa-gift"></i> Has Reward
        </button>
      </div>
      
      <!-- Active Filters Display -->
      <div class="active-filters" id="active-filters"></div>
    </div>
  `}function qt(){const e=[];if(n.searchTerm&&e.push(`<span class="filter-badge" data-clear="search"><i class="fa-solid fa-xmark"></i> "${n.searchTerm}"</span>`),n.chapter){const t=n.chapter==="epilogue"?"Epilogue":`CH ${n.chapter}`;e.push(`<span class="filter-badge" data-clear="chapter"><i class="fa-solid fa-xmark"></i> ${t}</span>`)}if(n.region){const t=q.find(i=>i.id===n.region);e.push(`<span class="filter-badge" data-clear="region"><i class="fa-solid fa-xmark"></i> ${(t==null?void 0:t.name)||n.region}</span>`)}return n.missableOnly&&e.push('<span class="filter-badge" data-clear="missable"><i class="fa-solid fa-xmark"></i> Missable</span>'),n.hasReward&&e.push('<span class="filter-badge" data-clear="reward"><i class="fa-solid fa-xmark"></i> Has Reward</span>'),e.length===0?"":`
    <div class="filter-badges">
      ${e.join("")}
      <button class="filter-reset" id="filter-reset">Clear All</button>
    </div>
  `}const f=e=>document.querySelector(e),E=e=>document.querySelectorAll(e);let M=!1,ge=null;function Vt(){console.log("🧭 renderNavigation() called"),ce();const e=document.createElement("nav");e.className="nav-sidebar",e.id="nav-sidebar",e.innerHTML=zt(),document.body.appendChild(e),jt();const t=document.createElement("div");t.innerHTML=_e(),document.body.appendChild(t.firstElementChild),Kt(),pe(),V(),z()}function zt(){return`
    <!-- Header -->
    <div class="nav-header">
      <span class="nav-title">Ledger</span>
      <button class="nav-close" id="nav-close">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    
    <!-- Theme Selector -->
    ${Ie()}
    
    <!-- Search Row -->
    <div class="nav-search-row">
      <input 
        type="text" 
        class="nav-search-input" 
        id="nav-search"
        placeholder="Search..."
      >
      <button class="filter-toggle-btn" id="filter-toggle-btn" title="Filters">
        <i class="fa-solid fa-sliders"></i>
        <span class="filter-count" id="filter-count" style="display:none">0</span>
      </button>
    </div>
    
    <!-- Filter Panel (collapsible) -->
    ${Wt()}
    
    <!-- Categories -->
    <div class="nav-categories" id="nav-categories">
      ${fe()}
    </div>
    
    <!-- Fixed Bottom Stats -->
    <div class="nav-stats" id="nav-stats">
      <div class="nav-stats-bar">
        <div class="nav-stats-fill" id="nav-stats-fill" style="width: 0%"></div>
      </div>
      <span class="nav-stats-text" id="nav-stats-text">0 / 0 (0%)</span>
    </div>
  `}function fe(){return Pt.map(e=>{const t=e.sections.map(i=>v.find(a=>a.id===i)).filter(Boolean);return t.length===0?"":`
      <div class="nav-category expanded" data-category="${e.id}">
        <div class="nav-category-header" data-category-toggle="${e.id}">
          <i class="nav-category-icon fa-solid ${e.icon}"></i>
          <span class="nav-category-title">${e.title}</span>
          <i class="nav-category-arrow fa-solid fa-chevron-down"></i>
        </div>
        <div class="nav-category-items">
          ${t.map(i=>Ut(i)).join("")}
        </div>
      </div>
    `}).join("")}function Ut(e){var a;if(e.isJournal)return`
      <a href="#journal" class="nav-section-link" data-section="journal">
        <i class="nav-section-icon fa-solid fa-book-open"></i>
        <span class="nav-section-title">Journal</span>
      </a>
    `;const t=Et[e.id]||"fa-circle",i=((a=e.items)==null?void 0:a.length)||0;return`
    <a href="#${e.id}" class="nav-section-link" data-section="${e.id}">
      <i class="nav-section-icon fa-solid ${t}"></i>
      <span class="nav-section-title">${e.title}</span>
      <span class="nav-section-count" data-count-section="${e.id}">0/${i}</span>
    </a>
  `}function jt(){const e=document.createElement("div");e.className="sidebar-overlay",e.id="sidebar-overlay",document.body.appendChild(e);const t=document.createElement("button");t.className="nav-fab",t.id="nav-fab",t.innerHTML='<i class="fa-solid fa-bars"></i>',document.body.appendChild(t)}function Kt(){document.addEventListener("click",t=>{var d;const i=t.target.closest("[data-category-toggle]");if(i){const h=i.closest(".nav-category");h.classList.toggle("expanded"),h.querySelector(".nav-category-items").classList.toggle("collapsed");const R=i.querySelector(".nav-category-arrow");R.style.transform=h.classList.contains("expanded")?"rotate(0deg)":"rotate(-90deg)";return}const a=t.target.closest(".nav-section-link");if(a){const h=a.dataset.section;ie(h),document.dispatchEvent(new CustomEvent("nav:sectionClick",{detail:{sectionId:h}})),$();return}if(t.target.closest("#filter-toggle-btn")){Jt();return}const r=t.target.closest(".filter-radio");if(r){Dt(r.dataset.status),E(".filter-radio").forEach(h=>h.classList.remove("active")),r.classList.add("active"),b();return}const o=t.target.closest(".chapter-chip");if(o){const h=o.classList.contains("active");E(".chapter-chip").forEach(g=>g.classList.remove("active")),h?ee(null):(o.classList.add("active"),ee(o.dataset.chapter)),b();return}const s=t.target.closest(".region-chip");if(s){const h=s.classList.contains("active");E(".region-chip").forEach(g=>g.classList.remove("active")),h?te(null):(s.classList.add("active"),te(s.dataset.region)),b();return}if(t.target.closest("#filter-missable")){$t(),f("#filter-missable").classList.toggle("active"),b();return}if(t.target.closest("#filter-reward")){It(),f("#filter-reward").classList.toggle("active"),b();return}const l=t.target.closest("[data-clear]");if(l){_t(l.dataset.clear),b();return}if(t.target.closest("#filter-reset")){Nt(),b();return}if(t.target.closest("#nav-fab")){f("#nav-sidebar").classList.add("open"),(d=f("#sidebar-overlay"))==null||d.classList.add("active");return}if(t.target.closest("#sidebar-overlay")){$();return}if(t.target.closest("#nav-close")){$();return}});const e=f("#nav-search");if(e){let t;e.addEventListener("input",i=>{clearTimeout(t),t=setTimeout(()=>{Ot(i.target.value),b()},200)})}window.addEventListener("scroll",()=>{const t=E("[data-section-id]");let i=null;t.forEach(a=>{a.getBoundingClientRect().top<=150&&(i=a.dataset.sectionId)}),i&&i!==ge&&ie(i)}),p.subscribe(()=>{V(),z()})}function Jt(){M=!M;const e=f("#filter-panel"),t=f("#filter-toggle-btn");e&&e.classList.toggle("open",M),t&&t.classList.toggle("active",M)}function ie(e){ge=e,E(".nav-section-link").forEach(i=>{i.classList.toggle("active",i.dataset.section===e)});const t=f(`.nav-section-link[data-section="${e}"]`);if(t){const i=t.closest(".nav-category");i&&!i.classList.contains("expanded")&&(i.classList.add("expanded"),i.querySelector(".nav-category-items").classList.remove("collapsed"))}}function $(){var e;(e=f("#nav-sidebar"))==null||e.classList.remove("open")}function b(){console.log("🔍 applyFilters called, activeFilters:",n),Yt(),Qt(),window.dispatchEvent(new CustomEvent("filters-changed",{detail:{...n}}))}function Yt(){const e=Gt(),t=f("#filter-count");t&&(t.textContent=e,t.style.display=e>0?"flex":"none")}function Qt(){const e=f("#active-filters");e&&(e.innerHTML=qt())}function V(){v.forEach(e=>{if(e.isJournal||!e.items)return;const t=f(`[data-count-section="${e.id}"]`);if(!t)return;const i=e.items.filter(s=>p.get(s.id)).length,a=e.items.length,r=a>0?i/a*100:0;t.textContent=`${i}/${a}`,t.classList.remove("progress-none","progress-low","progress-mid","progress-full"),r===0?t.classList.add("progress-none"):r<30?t.classList.add("progress-low"):r<60?t.classList.add("progress-mid"):r<100?t.classList.add("progress-high"):t.classList.add("progress-full");const o=t.closest(".nav-section-link");o&&o.classList.toggle("section-complete",i===a&&a>0)})}function z(){let e=0,t=0;v.forEach(o=>{o.isJournal||!o.items||(e+=o.items.length,t+=o.items.filter(s=>p.get(s.id)).length)});const i=e>0?Math.round(t/e*100):0,a=f("#nav-stats-fill"),r=f("#nav-stats-text");a&&(a.style.width=`${i}%`),r&&(r.textContent=`${t} / ${e} (${i}%)`)}function Xt(){const e=f("#nav-categories");e&&(e.innerHTML=fe()),V(),z()}const Zt={treasures:{color:"#eab308",name:"gold"},explorer:{color:"#eab308",name:"gold"},collectibles:{color:"#eab308",name:"gold"},quickstart:{color:"#22c55e",name:"green"},satchel:{color:"#22c55e",name:"green"},camp:{color:"#22c55e",name:"green"},missable:{color:"#dc2626",name:"red"},"legendary-animals":{color:"#dc2626",name:"red"},hunter:{color:"#dc2626",name:"red"},bounties:{color:"#f97316",name:"orange"},bandit:{color:"#f59e0b",name:"amber"},gambler:{color:"#f59e0b",name:"amber"},herbalist:{color:"#f59e0b",name:"amber"},horseman:{color:"#f59e0b",name:"amber"},sharpshooter:{color:"#f59e0b",name:"amber"},survivalist:{color:"#f59e0b",name:"amber"},"weapons-expert":{color:"#f59e0b",name:"amber"},strangers:{color:"#3b82f6",name:"blue"},"companion-activities":{color:"#3b82f6",name:"blue"},"camp-requests":{color:"#3b82f6",name:"blue"},graves:{color:"#3b82f6",name:"blue"},mysteries:{color:"#3b82f6",name:"blue"}},ei={color:"#9ca3af",name:"gray"};function U(e){return e.startsWith("cig-")?{color:"#22c55e",name:"green"}:Zt[e]||ei}function ti(e,t){var d,h;const i=p.get(e.id),a=((d=e.subItems)==null?void 0:d.length)>0,r=((h=e.tip_detailed)==null?void 0:h.length)>0,{color:o,name:s}=U(t);let l={completed:0,total:0,percent:0};return a&&(l.total=e.subItems.length,l.completed=e.subItems.filter(g=>p.get(g.id)).length,l.percent=Math.round(l.completed/l.total*100)),`
    <div class="checklist-card" data-item-id="${e.id}" data-section="${t}">
      <div class="card-row">
        <!-- Done Icon -->
        <button class="done-icon ${i?"checked":""}" 
                data-id="${e.id}" 
                data-section="${t}"
                style="--ring-color: ${o}">
          <span class="icon-inner">${i?"✖":""}</span>
        </button>
        
        <!-- Content -->
        <div class="card-content">
          <div class="card-tags">
            ${ii(e)}
          </div>
          <div class="card-title ${i?"completed":""}">${e.text}</div>
          ${e.tip?`<p class="card-tip"><i class="fa-solid fa-location-dot"></i> ${e.tip}</p>`:""}
          ${e.narrative?`<p class="card-narrative"><i class="fa-solid fa-quote-left"></i> ${e.narrative}</p>`:""}
          ${a?ai(l,s):""}
        </div>
        
        <!-- Action Buttons -->
        <div class="card-actions">
          ${a?`
            <button class="action-btn sub-toggle" data-toggle-subs="${e.id}" title="Steps">
              <i class="fa-solid fa-list-check"></i>
            </button>
          `:""}
          ${r?`
            <button class="action-btn info-toggle" data-toggle-info="${e.id}" title="More Info">
              <i class="fa-solid fa-circle-info"></i>
            </button>
          `:""}
        </div>
      </div>
      
      <!-- Sub-Items Accordion -->
      ${a?`
        <div class="accordion-panel subs-panel" id="subs-${e.id}">
          ${ri(e.subItems,t)}
        </div>
      `:""}
      
      <!-- Info Accordion (tip_detailed) -->
      ${r?`
        <div class="accordion-panel info-panel" id="info-${e.id}">
          <div class="detail-content">${ve(e.tip_detailed)}</div>
        </div>
      `:""}
    </div>
  `}function ii(e){let t="";return e.chapter&&(t+=`<span class="tag tag-chapter"><i class="fa-solid fa-book"></i> CH ${e.chapter}</span>`),e.region&&(t+=`<span class="tag tag-region"><i class="fa-solid fa-map-pin"></i> ${oi(e.region)}</span>`),(e.rewards||(e.reward?[e.reward]:[])).forEach(a=>{me(a)?t+=`<span class="tag tag-money"><i class="fa-solid fa-coins"></i> ${a}</span>`:t+=`<span class="tag tag-item"><i class="fa-solid fa-trophy"></i> ${a}</span>`}),e.priority&&(t+='<span class="tag tag-priority"><i class="fa-solid fa-exclamation"></i> Priority</span>'),e.missable&&(t+='<span class="tag tag-missable"><i class="fa-solid fa-triangle-exclamation"></i> Missable</span>'),t}function me(e){const t=e.toLowerCase();return/^\$[\d,]+/.test(e)||/\$[\d,]+/.test(e)||t.includes("gold bar")||t.includes("per bounty")||t.includes("money")||/\d+\s*(gold|dollars?)/.test(t)}function ai(e,t){return`
    <div class="progress-inline">
      <div class="progress-track">
        <div class="progress-fill progress-${t}" style="width: ${e.percent}%"></div>
      </div>
      <span class="progress-label">${e.completed}/${e.total}</span>
    </div>
  `}function ri(e,t){const{color:i}=U(t);return`
    <div class="sub-items-list">
      ${e.map(a=>{var g,R;const r=p.get(a.id),o=a.rewards||(a.reward?[a.reward]:[]),s=((g=a.tip)==null?void 0:g.length)>0,l=((R=a.tip_detailed)==null?void 0:R.length)>0,d=o.length>0,h=s||d;return`
          <div class="sub-item ${r?"completed":""}" data-sub-id="${a.id}">
            <div class="sub-item-header">
              <button class="done-icon small ${r?"checked":""}" 
                      data-id="${a.id}" 
                      data-section="${t}"
                      data-parent-id="${a.id.split("_")[0]}"
                      style="--ring-color: ${i}">
                <span class="icon-inner">${r?"✖":""}</span>
              </button>
              <span class="sub-text ${r?"completed":""}">${a.text}</span>
              ${l?`
                <button class="sub-info-toggle" data-toggle-sub-info="${a.id}" title="More Info">
                  <i class="fa-solid fa-circle-info"></i>
                </button>
              `:""}
            </div>
            ${h?`
              <div class="sub-meta-row">
                ${s?`
                  <div class="sub-tip">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${a.tip}</span>
                  </div>
                `:'<div class="sub-tip-spacer"></div>'}

                ${d?`
                  <div class="sub-tags">
                    ${o.map(c=>me(c)?`<span class="tag tag-money"><i class="fa-solid fa-coins"></i> ${c}</span>`:`<span class="tag tag-item"><i class="fa-solid fa-trophy"></i> ${c}</span>`).join("")}
                  </div>
                `:""}
              </div>
            `:""}
            ${l?`
              <div class="sub-info-panel" id="sub-info-${a.id}">
                <div class="sub-detail-content">${ve(a.tip_detailed)}</div>
              </div>
            `:""}
          </div>
        `}).join("")}
    </div>
  `}function oi(e){return e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function ve(e){return e?e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>"):""}function ni(e){e.querySelectorAll(".checklist-card").forEach(t=>{const i=t.querySelectorAll(".sub-item .done-icon.checked"),a=t.querySelectorAll(".sub-item").length;if(a===0)return;const r=i.length,o=r/a*100,s=t.querySelector(".progress-fill"),l=t.querySelector(".progress-label");s&&(s.style.width=o+"%"),l&&(l.textContent=`${r}/${a}`)})}function si(e){const t=e.querySelectorAll(".sub-item");return t.length===0?!1:e.querySelectorAll(".sub-item .done-icon.checked").length===t.length}function li(e){if(!si(e))return!1;const t=e.dataset.itemId,i=e.querySelector(".card-row > .done-icon"),a=e.querySelector(".card-title");return i&&!i.classList.contains("checked")?(p.set(t,!0),i.classList.add("checked"),i.querySelector(".icon-inner").textContent="✖",a&&a.classList.add("completed"),!0):!1}const ae={gun:["legendary-animals","hunter","weapons","weapons-expert","bounties","cig-gunslingers","sharpshooter","bandit","cig-fight"],done:["strangers","treasures","collectibles","missable","companion-activities","camp-requests","talismans","graves","cig-stage","cig-travel","cig-fauna","cig-horses","cig-aquatic","cig-views","cig-engineering","cig-prominent","cig-baseball","cig-sports"]},j={gun:new Audio("/gun.mp3"),done:new Audio("/done.mp3"),done2:new Audio("/done-2.mp3")};Object.values(j).forEach(e=>{e.volume=.3,e.load()});function di(e){return ae.gun.includes(e)?"gun":ae.done.includes(e)?"done":"done2"}function re(e=""){const t=di(e),i=j[t];i.currentTime=0,i.play().catch(()=>{})}function ye(e){Object.values(j).forEach(t=>{t.volume=Math.max(0,Math.min(1,e))})}const hi={gun:{sections:["legendary-animals","hunter","weapons","weapons-expert","bounties","cig-gunslingers","sharpshooter","bandit"],color:"#dc2626",colorName:"red",sound:"/gun.mp3"},done:{sections:["strangers","treasures","collectibles","missable","companion-activities","camp-requests","talismans","graves","cig-stage","cig-travel","cig-fauna","cig-horses","cig-prominent","cig-flora","cig-beauty","cig-champions","cig-vistas","cig-artists","cig-inventions"],color:"#22c55e",colorName:"green",sound:"/done.mp3"},done2:{sections:["quickstart","satchel","camp","explorer","herbalist","horseman","survivalist","gambler","journal","trapper","unique-hats","pamphlets","gang-hideouts","mysteries"],color:"#eab308",colorName:"gold",sound:"/done-2.mp3"}},A={};let S=null,N=!1;function we(){N||(Object.entries(hi).forEach(([e,t])=>{A[e]=new Audio(t.sound),A[e].volume=.3,A[e].load()}),S=new Audio("/complete.mp3"),S.volume=.4,S.load(),N=!0,console.log("🔊 Audio initialized with",Object.keys(A).length+1,"sounds"))}function ci(){N||we(),S&&(S.currentTime=0,S.play().catch(()=>{}))}function be(e){Object.values(A).forEach(t=>{t.volume=Math.max(0,Math.min(1,e))}),S&&(S.volume=e)}let x=new Set;const ke="rdr_collapsed_sections";function ui(e="checklist"){const t=document.getElementById(e);if(!t){console.error("Checklist container not found");return}p.init(),we(),pi(),gi(t),vi(t),p.subscribe(()=>{bi()}),window.addEventListener("filters-changed",()=>{const i=document.getElementById(e);i&&Si(i)}),console.log("📋 Checklist V2 initialized")}function pi(){try{const e=localStorage.getItem(ke);e&&(x=new Set(JSON.parse(e)))}catch{x=new Set}}function Se(){try{localStorage.setItem(ke,JSON.stringify([...x]))}catch{}}function gi(e){e.innerHTML=v.filter(t=>{var i;return!t.isJournal&&((i=t.items)==null?void 0:i.length)>0}).map(t=>fi(t)).join("")}function xe(e){return e===0?"progress-gray":e<=30?"progress-yellow":e<=60?"progress-orange":"progress-green"}function fi(e){const t=x.has(e.id),i=p.getSectionProgress(e),{color:a,name:r}=U(e.id),o=i.total>0?Math.round(i.completed/i.total*100):0,s=xe(o),d={quickstart:"fa-star",treasures:"fa-gem",weapons:"fa-gun",satchel:"fa-bag-shopping",camp:"fa-campground",trapper:"fa-paw","unique-hats":"fa-hat-cowboy",pamphlets:"fa-scroll",talismans:"fa-hand-sparkles",strangers:"fa-person-circle-question","legendary-animals":"fa-hippo",bounties:"fa-handcuffs","gang-hideouts":"fa-skull-crossbones","companion-activities":"fa-users","camp-requests":"fa-hand-holding-heart",mysteries:"fa-book-skull",missable:"fa-triangle-exclamation",graves:"fa-cross",collectibles:"fa-image",bandit:"fa-mask",explorer:"fa-compass",gambler:"fa-dice",herbalist:"fa-leaf",horseman:"fa-horse",hunter:"fa-bullseye",sharpshooter:"fa-crosshairs",survivalist:"fa-fire","weapons-expert":"fa-gun","cig-gunslingers":"fa-person-rifle","cig-stage":"fa-masks-theater","cig-travel":"fa-train","cig-fauna":"fa-paw","cig-horses":"fa-horse-head","cig-prominent":"fa-user-tie","cig-flora":"fa-seedling","cig-beauty":"fa-crown","cig-champions":"fa-medal","cig-vistas":"fa-mountain-sun","cig-artists":"fa-palette","cig-inventions":"fa-gears",journal:"fa-book"}[e.id]||"fa-list";return`
    <section class="checklist-section" id="section-${e.id}" data-section="${e.id}">
      <header class="section-header ${t?"collapsed":""}" data-section-id="${e.id}">
        <div class="section-header-left">
          <i class="fa-solid ${d} section-icon" style="color: ${a}"></i>
          <h2 class="section-title">${e.title}</h2>
          <span class="section-count">${i.completed}/${i.total}</span>
        </div>
        <div class="section-header-right">
          <div class="section-progress-bar">
            <div class="section-progress-fill ${s}" style="width: ${o}%" data-percent="${o}"></div>
          </div>
          <i class="fa-solid fa-chevron-down section-chevron"></i>
        </div>
      </header>
      
      ${e.tip_detailed?`
        <div class="section-info-toggle" data-section-info="${e.id}">
          <i class="fa-solid fa-scroll"></i> About this section
        </div>
        <div class="section-info-panel" id="section-info-${e.id}">
          <div class="section-info-content">${mi(e.tip_detailed)}</div>
        </div>
      `:""}
      
      <div class="section-items ${t?"hidden":""}">
        ${e.items.map(h=>ti(h,e.id)).join("")}
      </div>
    </section>
  `}function mi(e){return e?e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>"):""}function vi(e){e.querySelectorAll(".section-header").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.sectionId;wi(i,t)})}),e.querySelectorAll(".section-info-toggle").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const a=t.dataset.sectionInfo,r=document.getElementById(`section-info-${a}`);r&&(r.classList.toggle("open"),t.classList.toggle("active"))})}),e.querySelectorAll(".done-icon").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),yi(t,e)})}),e.querySelectorAll(".sub-toggle").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const a=t.dataset.toggleSubs,r=document.getElementById(`subs-${a}`);r&&(r.classList.toggle("open"),t.classList.toggle("active"))})}),e.querySelectorAll(".info-toggle").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const a=t.dataset.toggleInfo,r=document.getElementById(`info-${a}`);r&&(r.classList.toggle("open"),t.classList.toggle("active"))})}),e.querySelectorAll(".sub-info-toggle").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const a=t.dataset.toggleSubInfo,r=document.getElementById(`sub-info-${a}`);r&&(r.classList.toggle("open"),t.classList.toggle("active"))})})}function yi(e,t){const i=e.dataset.id,a=e.dataset.section,r=e.closest(".sub-item")!==null,o=p.toggle(i);e.classList.toggle("checked",o),e.querySelector(".icon-inner").textContent=o?"✖":"";const s=r?e.closest(".sub-item"):e.closest(".checklist-card"),l=r?s==null?void 0:s.querySelector(".sub-text"):s==null?void 0:s.querySelector(".card-title");if(l&&(l.classList.toggle("completed",o),l.style.textDecoration=o?"line-through":"none"),r){const d=e.closest(".sub-item");d&&d.classList.toggle("completed",o)}if(r&&o){const d=e.closest(".checklist-card");d&&(li(d)?ci():re(a))}else o&&re(a);ni(t),Ce(a),document.dispatchEvent(new CustomEvent("checklist:change",{detail:{id:i,sectionId:a,checked:o}}))}function wi(e,t){const i=document.getElementById(`section-${e}`),a=i==null?void 0:i.querySelector(".section-items");if(!a)return;a.classList.contains("hidden")?(a.classList.remove("hidden"),t.classList.remove("collapsed"),x.delete(e)):(a.classList.add("hidden"),t.classList.add("collapsed"),x.add(e)),Se()}function Ce(e){const t=v.find(o=>o.id===e);if(!t)return;const i=p.getSectionProgress(t),a=i.total>0?Math.round(i.completed/i.total*100):0,r=document.getElementById(`section-${e}`);if(r){const o=r.querySelector(".section-count"),s=r.querySelector(".section-progress-fill");o&&(o.textContent=`${i.completed}/${i.total}`),s&&(s.style.width=`${a}%`,s.classList.remove("progress-gray","progress-yellow","progress-orange","progress-green"),s.classList.add(xe(a)))}}function bi(){v.forEach(e=>{!e.isJournal&&e.items&&Ce(e.id)})}function ki(e){const t=document.getElementById(`section-${e}`);if(t){const i=t.querySelector(".section-header"),a=t.querySelector(".section-items");a!=null&&a.classList.contains("hidden")&&(a.classList.remove("hidden"),i==null||i.classList.remove("collapsed"),x.delete(e),Se()),t.scrollIntoView({behavior:"smooth",block:"start"}),t.classList.add("highlight"),setTimeout(()=>t.classList.remove("highlight"),1500)}}function Si(e){const t=n.searchTerm||n.chapter||n.region||n.status!=="all"||n.missableOnly||n.hasReward,i=e.querySelectorAll(".checklist-section");if(!t){i.forEach(a=>{a.style.display="",a.classList.remove("filter-expanded");const r=a.dataset.section,o=x.has(r),s=a.querySelector(".section-header"),l=a.querySelector(".section-items");o&&(s==null||s.classList.add("collapsed"),l==null||l.classList.add("hidden")),a.querySelectorAll(".checklist-card").forEach(d=>{d.style.display=""})});return}i.forEach(a=>{const r=a.dataset.section,o=v.find(g=>g.id===r);if(!o||!o.items)return;const s=a.querySelector(".section-header"),l=a.querySelector(".section-items");s==null||s.classList.remove("collapsed"),l==null||l.classList.remove("hidden"),a.classList.add("filter-expanded");let d=0;a.querySelectorAll(".checklist-card").forEach(g=>{var Y,Q,X,Z;const R=g.dataset.itemId,c=o.items.find(L=>L.id===R);if(!c){g.style.display="none";return}let K=!0;if(n.searchTerm){const L=n.searchTerm.toLowerCase(),He=(Y=c.text)==null?void 0:Y.toLowerCase().includes(L),Me=(Q=c.tip)==null?void 0:Q.toLowerCase().includes(L),Fe=(X=c.tip_detailed)==null?void 0:X.toLowerCase().includes(L),Oe=(Z=c.tags)==null?void 0:Z.some(De=>De.toLowerCase().includes(L));K=He||Me||Fe||Oe}const Be={title:c.text,description:c.tip||c.tip_detailed||"",tags:c.tags||[],chapter:c.chapter,region:c.region,missable:c.missable||c.isMissable,reward:c.reward},Pe=Ht(Be),Ee=p.get(c.id),Ae=Mt(Ee),J=K&&Pe&&Ae;g.style.display=J?"":"none",J&&d++}),d===0?a.style.display="none":a.style.display=""})}let T=!1,C="wood",H="night",B=!0,P=!0;const k={theme:"rdr_ui_theme",mode:"rdr_mode",audio:"rdr_audio_enabled",volume:"rdr_audio_volume",video:"rdr_video_enabled"};function xi(e="settings-panel"){const t=document.getElementById(e);if(!t){console.error("Settings panel container not found");return}Ci(),Li(t),Ti(t),Ri(),console.log("⚙️ Settings Panel initialized")}function Ci(){try{C=localStorage.getItem(k.theme)||"wood",H=localStorage.getItem(k.mode)||"night",B=localStorage.getItem(k.audio)!=="false",P=localStorage.getItem(k.video)!=="false"}catch{}}function Ri(){document.body.dataset.mode=H,document.body.dataset.uiTheme=C;const e=B?.3:0;be(e),ye(e);const t=document.querySelector(".video-background");t&&(t.style.display=P?"block":"none")}function Li(e){e.innerHTML=`
    <button class="settings-fab" id="settings-fab" title="Settings">
      <i class="fa-solid fa-gear"></i>
    </button>
    
    <div class="settings-panel" id="settings-panel-content">
      <div class="settings-header">
        <i class="fa-solid fa-gear"></i>
        <span>Settings</span>
        <button class="settings-close" id="settings-close">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      
      <div class="settings-body">
        <!-- Day/Night Mode -->
        <div class="settings-section">
          <div class="settings-label">
            <i class="fa-solid fa-circle-half-stroke"></i>
            Mode
          </div>
          <div class="settings-toggle-group">
            <button class="mode-btn ${H==="day"?"active":""}" data-mode="day">
              <i class="fa-solid fa-sun"></i> Day
            </button>
            <button class="mode-btn ${H==="night"?"active":""}" data-mode="night">
              <i class="fa-solid fa-moon"></i> Night
            </button>
          </div>
        </div>
        
        <!-- Theme Selector -->
        <div class="settings-section">
          <div class="settings-label">
            <i class="fa-solid fa-palette"></i>
            Theme
          </div>
          <div class="theme-grid">
            <button class="theme-option ${C==="wood"?"active":""}" 
                    data-theme="wood" title="Wood">
              <i class="fa-solid fa-tree"></i>
              <span>Wood</span>
            </button>
            <button class="theme-option ${C==="ledger"?"active":""}" 
                    data-theme="ledger" title="Ledger">
              <i class="fa-solid fa-book"></i>
              <span>Ledger</span>
            </button>
            <button class="theme-option ${C==="wanted"?"active":""}" 
                    data-theme="wanted" title="Wanted">
              <i class="fa-solid fa-scroll"></i>
              <span>Wanted</span>
            </button>
            <button class="theme-option ${C==="saloon"?"active":""}" 
                    data-theme="saloon" title="Saloon">
              <i class="fa-solid fa-whiskey-glass"></i>
              <span>Saloon</span>
            </button>
          </div>
        </div>
        
        <!-- Audio Toggle -->
        <div class="settings-section">
          <div class="settings-label">
            <i class="fa-solid fa-volume-high"></i>
            Sound Effects
          </div>
          <label class="settings-switch">
            <input type="checkbox" id="audio-toggle" ${B?"checked":""}>
            <span class="switch-slider"></span>
          </label>
        </div>
        
        <!-- Video Background Toggle -->
        <div class="settings-section">
          <div class="settings-label">
            <i class="fa-solid fa-film"></i>
            Video Background
          </div>
          <label class="settings-switch">
            <input type="checkbox" id="video-toggle" ${P?"checked":""}>
            <span class="switch-slider"></span>
          </label>
        </div>
      </div>
      
      <div class="settings-footer">
        <span class="settings-version">The Drifter's Ledger V2</span>
      </div>
    </div>
  `}function Ti(e){e.querySelector("#settings-fab").addEventListener("click",()=>{Bi()}),e.querySelector("#settings-close").addEventListener("click",()=>{I()}),e.querySelectorAll(".mode-btn").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.mode;Pi(i),e.querySelectorAll(".mode-btn").forEach(a=>a.classList.remove("active")),t.classList.add("active")})}),e.querySelectorAll(".theme-option").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.theme;Ei(i),e.querySelectorAll(".theme-option").forEach(a=>a.classList.remove("active")),t.classList.add("active")})}),e.querySelector("#audio-toggle").addEventListener("change",t=>{B=t.target.checked,localStorage.setItem(k.audio,B);const i=B?.3:0;be(i),ye(i)}),e.querySelector("#video-toggle").addEventListener("change",t=>{P=t.target.checked,localStorage.setItem(k.video,P);const i=document.querySelector(".video-background");i&&(i.style.display=P?"block":"none")}),document.addEventListener("click",t=>{T&&!e.contains(t.target)&&I()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&T&&I()})}function Bi(){const e=document.getElementById("settings-panel-content");T=!T,e.classList.toggle("open",T)}function I(){const e=document.getElementById("settings-panel-content");T=!1,e.classList.remove("open")}function Pi(e){H=e,document.body.dataset.mode=e,localStorage.setItem(k.mode,e),W(e),document.dispatchEvent(new CustomEvent("settings:modeChange",{detail:{mode:e}}))}function Ei(e){C=e,document.body.dataset.uiTheme=e,localStorage.setItem(k.theme,e),F(e),document.dispatchEvent(new CustomEvent("settings:themeChange",{detail:{theme:e}}))}const u=e=>document.querySelector(e),Ai=30;function Hi(){const e=u("#particles");if(e)for(let t=0;t<Ai;t++){const i=document.createElement("div");i.className="particle",i.style.top=`${Math.random()*100}vh`,i.style.left=`${Math.random()*100}vw`;const a=6+Math.random()*8,r=Math.random()*6;i.style.animation=`dust ${a}s linear infinite`,i.style.animationDelay=`-${r}s`;const o=2+Math.random()*2;i.style.width=`${o}px`,i.style.height=`${o}px`,i.style.opacity=(.3+Math.random()*.4).toString(),e.appendChild(i)}}const Re="journal";function Mi(){const e=document.createElement("button");e.className="journal-fab",e.id="journal-fab",e.title="Personal Journal",e.innerHTML='<i class="fa-solid fa-book"></i>',document.body.appendChild(e);const t=document.createElement("div");t.className="journal-modal",t.id="journal-modal",t.innerHTML=Fi(),document.body.appendChild(t),Oi(),Ii()}function Fi(){return`
    <div class="journal-modal-backdrop" data-close-modal></div>
    <div class="journal-modal-content">
      <div class="journal-modal-header">
        <h2 class="journal-modal-title">
          <i class="fa-solid fa-feather-pointed"></i>
          Personal Journal
        </h2>
        <button class="journal-modal-close" data-close-modal>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="journal-modal-body">
        <textarea 
          class="journal-textarea" 
          id="journal-textarea"
          placeholder="October 1899. Found a good spot near the river. The gang's spirits seem higher today..."
        ></textarea>
      </div>
      <div class="journal-modal-footer">
        <span class="journal-char-count" id="journal-char-count">0 characters</span>
        <span class="journal-save-status" id="journal-save-status">Saved</span>
      </div>
    </div>
  `}function Oi(){var t;(t=u("#journal-fab"))==null||t.addEventListener("click",Di),document.addEventListener("click",i=>{i.target.closest("[data-close-modal]")&&oe()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&$i()&&oe()});const e=u("#journal-textarea");if(e){let i;e.addEventListener("input",()=>{Le(),ne("Saving..."),clearTimeout(i),i=setTimeout(()=>{y.save(Re,e.value),ne("Saved")},500)})}}function Di(){const e=u("#journal-modal");e&&(e.classList.add("open"),document.body.style.overflow="hidden",setTimeout(()=>{var t;(t=u("#journal-textarea"))==null||t.focus()},100))}function oe(){const e=u("#journal-modal");e&&(e.classList.remove("open"),document.body.style.overflow="")}function $i(){var e;return(e=u("#journal-modal"))==null?void 0:e.classList.contains("open")}function Ii(){const e=y.load(Re,""),t=u("#journal-textarea");t&&(t.value=e,Le())}function Le(){const e=u("#journal-textarea"),t=u("#journal-char-count");if(e&&t){const i=e.value.length;t.textContent=`${i} character${i!==1?"s":""}`}}function ne(e){const t=u("#journal-save-status");t&&(t.textContent=e,t.classList.toggle("saving",e==="Saving..."))}function _i(){const{completed:e,total:t,percent:i}=Te();return`
    <div class="header-progress">
      <div class="header-progress-bar">
        <div class="header-progress-fill" id="header-progress-fill" style="width: ${i}%"></div>
      </div>
      <span class="header-progress-text" id="header-progress-text">${e} / ${t} (${i}%)</span>
    </div>
  `}function Te(){let e=0,t=0;try{if(!v||!Array.isArray(v))return{completed:0,total:0,percent:0};for(const a of v)if(!(!(a!=null&&a.items)||!Array.isArray(a.items))){for(const r of a.items)if(r!=null&&r.id&&(t++,p.get(r.id)&&e++,r.subItems&&Array.isArray(r.subItems)))for(const o of r.subItems)o!=null&&o.id&&(t++,p.get(o.id)&&e++)}}catch(a){return console.error("Error calculating progress:",a),{completed:0,total:0,percent:0}}const i=t>0?Math.round(e/t*100):0;return{completed:e,total:t,percent:i}}function G(){const{completed:e,total:t,percent:i}=Te(),a=document.getElementById("header-progress-fill"),r=document.getElementById("header-progress-text");a&&(a.style.width=`${i}%`),r&&(r.textContent=`${e} / ${t} (${i}%)`)}function Ni(){const e=u("#header");e&&(e.innerHTML=`
    <div class="header-wrapper">
      <!-- WANTED Stamp -->
      <div class="wanted-stamp">
        <span class="wanted-text">WANTED</span>
        <span class="wanted-subtext">DEAD OR ALIVE</span>
      </div>
      
      <!-- Main Title -->
      <h1 class="ledger-title">Journal</h1>
      
      <!-- Divider -->
      <div class="header-divider"></div>
      
      <!-- Subtitle -->
      <p class="ledger-subtitle">Property of A. Morgan <em>(and associates)</em></p>
      
      <!-- Music Links -->
      <nav class="music-links">
        <a href="https://open.spotify.com/search/dust%20to%20dust%20red%20dead" target="_blank" rel="noopener">
          <i class="fa-solid fa-music"></i> Dust to Dust
        </a>
        <span class="link-divider">|</span>
        <a href="https://www.youtube.com/results?search_query=red+dead+redemption+2+ambience" target="_blank" rel="noopener">
          <i class="fa-solid fa-fire"></i> Campfire
        </a>
        <span class="link-divider">|</span>
        <a href="https://www.youtube.com/watch?v=AUXGW6sWYDY" target="_blank" rel="noopener">
          <i class="fa-solid fa-guitar"></i> Unshaken
        </a>
      </nav>
      
      <!-- Overall Progress Bar -->
      ${_i()}
    </div>
  `)}function Gi(){var t,i,a,r;const e=u("#actions");e&&(e.innerHTML=`
    <div class="actions-bar">
      <button class="action-btn action-btn--danger" id="btn-burn" title="Reset all progress">
        <i class="fa-solid fa-fire"></i>
        <span>Burn the Ledger</span>
      </button>
      <button class="action-btn action-btn--gold" id="btn-export" title="Export progress to file">
        <i class="fa-solid fa-file-export"></i>
        <span>Export</span>
      </button>
      <input type="file" id="import-file" accept=".json" style="display: none;">
      <button class="action-btn action-btn--gold" id="btn-import" title="Import progress from file">
        <i class="fa-solid fa-file-import"></i>
        <span>Import</span>
      </button>
    </div>
  `,(t=u("#btn-burn"))==null||t.addEventListener("click",Wi),(i=u("#btn-export"))==null||i.addEventListener("click",qi),(a=u("#btn-import"))==null||a.addEventListener("click",()=>{var o;return(o=u("#import-file"))==null?void 0:o.click()}),(r=u("#import-file"))==null||r.addEventListener("change",Vi))}function Wi(){confirm(`🔥 Burn the history?

This will reset ALL checkboxes and clear your journal.

This action cannot be undone.`)&&(y.clearAll(),location.reload())}function qi(){const e=y.exportProgress(),t=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(t),a=document.createElement("a");a.href=i,a.download=`drifters-ledger-${new Date().toISOString().split("T")[0]}.json`,a.click(),URL.revokeObjectURL(i)}function Vi(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(!t)return;const i=new FileReader;i.onload=r=>{var s;const o=(s=r.target)==null?void 0:s.result;typeof o=="string"&&(y.importProgress(o)?(alert("✅ Progress imported successfully! Reloading..."),location.reload()):alert("❌ Failed to import progress. Invalid file format."))},i.readAsText(t),e.target.value=""}async function se(){console.log("🤠 Initializing The Drifter's Ledger V2..."),ce(),pe(),p.init(),Hi(),document.getElementById("header")&&Ni(),document.getElementById("sidebar")&&Vt(),ui("checklist"),Mi(),document.getElementById("actions")&&Gi(),xi("settings-panel"),zi(),G(),console.log("✅ V2 initialized successfully!")}function zi(){document.addEventListener("nav:sectionClick",e=>{const{sectionId:t}=e.detail;ki(t)}),document.addEventListener("checklist:change",()=>{Xt(),G()}),document.addEventListener("settings:themeChange",()=>{}),document.addEventListener("settings:modeChange",()=>{}),p.subscribe(()=>{G()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",se):se();
