# The Drifter's Ledger

Red Dead Redemption 2 100% completion checklist. Vanilla JS + Vite + Tailwind 4, no framework, all state in `localStorage`.

Live: https://rdr2-companion.vercel.app

## Commands

```bash
npm install
npm run dev      # vite dev server
npm run build    # -> dist/
npm run preview  # serve dist/
```

## Layout

```
index.html                  single entry, inlines page-shell CSS
src/main-v2.js              app entry (V2); wires all components
src/components/
  sidebar-v2/               nav, filters, theme system  (+ styles/)
  checklist-v2/             section + item rendering    (+ styles/)
  showcase-v2/              audio feedback, showcase styles
  settings-panel/           settings drawer
  header.js                 title + overall progress
  header-progress.js        progress bar
  navigation.js             section scroll/nav helpers
  checklist.js              shared checklist helpers
  actions.js                export / import / reset
  journal-modal.js          per-item notes modal
  particles.js              ambient background particles
src/data/
  index.js                  aggregates CHECKLIST_SECTIONS
  state.js                  store, persistence
  nav-categories.js         sidebar grouping
  sections/                 one module per checklist section
    challenges/             10 challenge families
    cigarette-cards/        fauna / horses / vistas
src/utils/                  audio, dom, storage helpers
public/                     favicon, robots.txt, background.mp4, sfx
scripts/                    one-off data extraction (Node, reads research/data)
research/data/              source PDF, extracted CSV/JSON, saved ledgers
research/mockups/           standalone HTML design mockups (not built)
docs/                       data verification notes, handoff, reddit copy
```

Only `index.html` is a Vite entry. Files in `research/` are reference material and are not built or deployed.
