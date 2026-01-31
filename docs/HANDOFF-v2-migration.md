# 🤠 The Drifter's Ledger - V2 Migration Handoff

> **Agent Handoff Document** | Created: 2026-01-31 | Status: Ready for New Agent

---

## 📋 Executive Summary

The Drifter's Ledger is an RDR2 progress checklist app. Current state:
- **V1 (Production)**: `index.html` + `main.js` = monolithic components
- **V2 (Prototype)**: `showcase.html` = modular, themed showcase

**Goal**: Migrate `index.html` to use V2 component architecture while preserving all V1 features.

---

## 🏗️ Current Architecture

### V1 Components (Legacy - `src/components/*.js`)

| File | Size | Purpose | Deps |
|------|------|---------|------|
| `navigation.js` | 31KB | Sidebar nav, search, category tree | checklist-data |
| `checklist.js` | 20KB | Item rendering, done state, sub-items | navigation.js |
| `map.js` | 9KB | Modal map with markers | - |
| `actions.js` | 2.4KB | Export/Import buttons | - |
| `theme.js` | 2.5KB | Day/Night toggle | - |
| `header.js` | 1.5KB | Title, progress bar | - |
| `journal.js` | 1.4KB | Notes textarea | - |
| `particles.js` | 1.1KB | Ambient dust particles | - |

### V2 Components (New - `src/components/*-v2/`)

#### Sidebar V2 (`sidebar-v2/`)
```
├── index.js           # Barrel exports
├── navigation.js      # 13KB - Modular nav rendering
├── filters.js         # 9.5KB - Search & filter logic
├── theme-system.js    # 4KB - Multi-theme (wood/ledger/wanted/saloon) + day/night
└── styles/
    ├── sidebar.css    # Base layout
    ├── themes.css     # Theme variations
    └── components.css # Buttons, toggles
```

#### Showcase V2 (`showcase-v2/`)
```
├── index.js           # Barrel exports
├── showcase.js        # Demo card rendering
├── item-renderer.js   # 11KB - Card HTML generation
├── audio.js           # Sound effects (click, done, complete)
└── styles/
    └── showcase.css   # 25KB - Full theme system with 48 section×theme combos
```

---

## 🎨 V2 Theme System

### Data Attributes
```html
<body data-mode="night" data-ui-theme="wood">
```

### Available Themes
| Theme | Day Palette | Night Palette | Special Features |
|-------|-------------|---------------|------------------|
| **Wood** | Tan/brown wood tones | Dark wood | Default, natural |
| **Ledger** | Cream paper, sepia ink | Dark leather | Section left-borders, Special Elite font |
| **Wanted** | Aged poster, red titles | Blood red | UPPERCASE titles, 3px borders |
| **Saloon** | Rich brown + gold | Purple + neon glow | Box-shadow neon effects |

### Section Color System
Each theme has 6 section colors (both Day & Night):
- `treasures` → Gold
- `quickstart` → Green
- `missable` → Red
- `bounties` → Orange
- `bandit`/`challenge*` → Amber
- `strangers` → Blue

---

## 📁 File Index

### Entry Points
| File | Purpose |
|------|---------|
| `index.html` | **V1 Production** - Uses main.js |
| `showcase.html` | **V2 Prototype** - Standalone demo |
| `src/main.js` | V1 app initializer |

### Data Layer
```
src/data/
├── index.js              # CHECKLIST_SECTIONS export
├── checklist-data.js     # NAV_CATEGORIES structure
├── storage.js            # localStorage wrapper
└── sections/             # 50+ section data files
    ├── treasures.js
    ├── missable.js
    ├── bounties.js
    ├── challenges/       # Challenge subcategories
    └── cigarette-cards/  # 12 card sets
```

### Styles
```
src/styles/
├── main.css              # V1 global styles (has @apply warnings)
├── variables.css         # CSS vars
└── components/           # Component-specific styles
```

---

## 🚀 Migration Plan

### Phase 1: Create `main-v2.js`
```js
// New unified entry point
import './styles/main.css';
import { initParticles } from './components/particles.js';
import { initThemeSystem, attachThemeListeners } from './components/sidebar-v2/theme-system.js';
import { renderSidebar } from './components/sidebar-v2/navigation.js';
import { initFilters } from './components/sidebar-v2/filters.js';
import { renderChecklist } from './components/checklist-v2/checklist.js'; // TO CREATE
import { initJournal } from './components/journal.js'; // Reuse V1
import { renderActions } from './components/actions.js'; // Reuse V1
import { renderMapButton } from './components/map.js'; // Reuse V1
```

### Phase 2: Create `checklist-v2/`
New component that:
1. Uses `item-renderer.js` patterns from showcase-v2
2. Integrates with sidebar-v2 theme system
3. Preserves localStorage done states
4. Supports audio feedback

### Phase 3: Create `index-v2.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Rye&family=Special+Elite&display=swap" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- V2 Styles -->
  <link rel="stylesheet" href="/src/components/sidebar-v2/styles/sidebar.css">
  <link rel="stylesheet" href="/src/components/sidebar-v2/styles/themes.css">
  <link rel="stylesheet" href="/src/components/sidebar-v2/styles/components.css">
  <link rel="stylesheet" href="/src/components/checklist-v2/styles/checklist.css">
</head>
<body data-mode="night" data-ui-theme="wood">
  <div id="particles"></div>
  <div id="sidebar"></div>
  <main id="content">
    <div id="header"></div>
    <div id="checklist"></div>
    <div id="journal"></div>
    <div id="actions"></div>
  </main>
  <script type="module" src="/src/main-v2.js"></script>
</body>
</html>
```

### Phase 4: Verify & Replace
1. Test all features in index-v2.html
2. Verify localStorage compatibility
3. Replace index.html with V2 version

---

## ⚠️ Known Issues

### CSS Lint Warnings (Non-blocking)
```
src/styles/main.css - Lines 294, 304, 312, 321, 332
"Unknown at rule @apply"
```
These are Tailwind-style directives that work at runtime but IDE doesn't recognize.

### V1 → V2 Compatibility Concerns
1. **storage.js keys** - Must preserve existing localStorage keys
2. **NAV_CATEGORIES structure** - Both V1 and V2 expect same format
3. **CHECKLIST_SECTIONS format** - Items have `id`, `title`, `tip`, `subItems`

---

## 🔧 Commands

```bash
# Dev server
npm run dev

# Build
npm run build

# Preview pages
http://localhost:5173/           # V1 Production
http://localhost:5173/showcase.html  # V2 Showcase
```

---

## 📦 Key Exports

### From sidebar-v2/index.js
```js
export { initThemeSystem, attachThemeListeners, setUITheme, setDayNightMode } from './theme-system.js';
export { renderSidebar, updateSidebarStats } from './navigation.js';
export { initFilters, applyFilters } from './filters.js';
```

### From showcase-v2/index.js
```js
export { initShowcase } from './showcase.js';
export { renderItemCard } from './item-renderer.js';
export { initAudio, playSound, playCompleteSound } from './audio.js';
```

---

## ✅ Migration Checklist

- [ ] Create `checklist-v2/checklist.js` - Main list renderer
- [ ] Create `checklist-v2/item-renderer.js` - Copy from showcase-v2
- [ ] Create `checklist-v2/styles/checklist.css` - Theme-aware styles
- [ ] Create `header-v2/header.js` - Progress with theme support
- [ ] Create `main-v2.js` - New entry point
- [ ] Create `index-v2.html` - New HTML shell
- [ ] Test localStorage compatibility
- [ ] Test all theme variations (8 combos)
- [ ] Verify search/filter functionality
- [ ] Verify audio feedback
- [ ] Replace production files

---

## 🎯 Success Criteria

1. All 4 themes work correctly (Day + Night = 8 states)
2. Section colors apply per-theme
3. Audio feedback on checkbox clicks
4. Sub-item expand/collapse works
5. Search and category filters work
6. Progress bar updates correctly
7. Journal notes persist
8. Export/Import functionality works
9. Map modal opens correctly
10. No console errors

---

*Document prepared for agent handoff. Good luck, partner! 🤠*
