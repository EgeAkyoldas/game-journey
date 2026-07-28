# Data Integrity & Honest Filters — Design

**Date:** 2026-07-28
**Status:** Approved, ready for implementation planning
**Scope:** Sub-project A of three. B (mid-play surfaces) and C (map coordinates) depend on this and are out of scope here.

## Problem

The Chapter filter reports data absence as fact. Selecting Chapter 1 on production shows **1 item out of 405** — not because Chapter 1 is empty, but because only 180 of 886 items carry a `chapter` at all, and exactly one of them says `1`. The filter looks like it answered the question. It didn't.

The same failure is latent in the Region filter (371 items have no region) and in two smaller filter bugs.

Measured coverage across all 886 items (top-level plus sub-items):

| Field | Coverage |
|---|---|
| `text`, `tip` | 886 (100%) |
| `verified === true` | 872 (98%) |
| `region` | 515 (58%) |
| `tip_detailed` | 430 (49%) |
| `reward` | 316 (36%) |
| **`chapter`** | **180 (20%)** |
| `missable` (truthy) | 81 (9%) |
| `priority` | 37 (4%) |
| `rewards[]` | 9 (1%) |
| coordinates | 0 (0%) |

Only one section is below 100% verified: **companion-activities, 5/19**.

## Goals

1. Raise `chapter` and `region` coverage enough that chapter- and region-driven features are trustworthy.
2. Make derived data distinguishable from confirmed data, permanently.
3. Make filters incapable of silently hiding items for lack of data.

Non-goals: map coordinates, "Next up" queue, region lens, session planning, a test framework.

## Design

### 1. Per-field provenance

`verified: true` is per-item and means "someone checked this item". If 706 items get a backfilled `chapter`, they still read `verified: true` and the guesses become indistinguishable from confirmed facts.

Provenance is therefore recorded per field, not per item:

```js
{
  id: 'treasure-jack-hall',
  text: 'Jack Hall Gang Treasure',
  chapter: 2,
  region: 'new-hanover',
  verified: true,              // unchanged: item content was checked
  provenance: {                // new: only lists fields that are NOT verified
    chapter: 'derived'         // 'derived' | 'unknown'
  }
}
```

`region` is absent from `provenance` above, which is what marks it verified. A field is verified if and only if `provenance` does not mention it.

States:

- **verified** — from the source CSVs or hand-confirmed. Represented by *absence* from `provenance`, so the existing 180 chapters and 515 regions stay untouched and trusted with no migration.
- **derived** — inferred by a rule. Usable and filterable, but labelled everywhere it appears.
- **unknown** — cannot be determined. Recorded explicitly so "we don't know" is data rather than an accident of a missing key.

Per-field rather than a second item-level flag because an item can have a solid region and a guessed chapter; one flag would force trusting or distrusting both.

Consumers that must handle `derived`: the filter predicate, the tag renderer, and any future ranking in sub-project B.

### 2. Backfill, in three passes

The CSVs in `research/data/` are thinner than they appear. Measured by exact `id` match:

| Source | rows | id matches | conflicts (ch / rg) |
|---|---|---|---|
| data-verified.csv | 608 | 434 | 14 / 21 |
| data-review.csv | 756 | 723 | 7 / 0 |
| region-data.csv | 417 | 403 | 4 / 0 |

Union effect: `chapter` 180 → 350 (20% → 40%), `region` 515 → 554 (58% → 63%). 169 items have no CSV row at all, and the merge surfaces **25 chapter and 21 region disagreements** with data already in the app.

**Pass 1 — CSV merge.** Fills 170 chapters and 39 regions, marked `verified`. Merges by exact `id`, and only into fields that are currently empty. Never overwrites existing values.

**Pass 2 — conflict resolution.** For the 46 disagreements, the existing app value wins and the conflict is written to a report for human adjudication. Not auto-resolved: these are items someone already curated, so a wrong overwrite is worse than a gap.

**Pass 3 — rule-based derivation.** `chapter` means "earliest chapter reachable", which follows from geography and unlock gates rather than being arbitrary:

Rules are applied **in this order; the first that matches wins**:

1. **Explicit mention** — `tip` or `tip_detailed` contains a chapter reference (`"after Chapter 3"`, `"Chapter 4 only"`) → that chapter. Beats every rule below, because a stated chapter outranks an inferred one.
2. **New Austin** content → **epilogue** (Arthur cannot enter without glitches).
3. **Guarma** → **chapter 5**; nothing else is reachable there.
4. **Camp upgrades / companion activities** → **chapter 2** (Horseshoe Overlook is the first upgradeable camp).
5. **Cigarette cards, collectibles, challenges, trapper, hunting** → **chapter 2** (map opens, mechanics unlock).
6. **No match** → **`unknown`**, explicitly.

Each rule is a named function taking the item and returning a value or `null`, evaluated in the order above, so reasoning is inspectable and the whole backfill is re-runnable rather than a one-off mutation.

Expected outcome: `chapter` roughly 85–95%, `region` near 90%, remainder honestly `unknown`. Exact figures are not knowable until the rules run.

**Deliverables:** a script under `scripts/` that rewrites the section data files, and `research/data/backfill-report.md` listing every derived value grouped by the rule that produced it, plus every unresolved conflict. Review the report, not 886 diffs.

### 3. Filters that tell the truth

**Cumulative chapter semantics.** The filter becomes `item.chapter <= selected` instead of exact match. The field means "earliest chapter available", and the mid-play question is "I'm in Chapter 3, what can I do?" — a Chapter 2 collectible is still doable in Chapter 3. Chips relabel from `CH 3` to `By Ch 3` so the meaning is on screen. Epilogue sorts after 6. No exact-match toggle.

**Unknowns are counted, never silently dropped.** When a chapter or region filter is active, items lacking that field are excluded but reported beneath the list:

> *142 items hidden — no chapter recorded.* **[Show them]**

One click includes them. The Chapter 1 → 1-of-405 behaviour becomes impossible.

**Derived values look derived.** A `derived` chapter or region badge renders with a `~` prefix (`~CH 2`) and a dotted underline, with a `title` explaining "estimated from section and location". Quiet, but nobody mistakes a guess for a fact.

**Three filter bugs fixed in passing:**

- The reward filter tests `item.reward` only, so the 9 items that use `rewards[]` never match. Both are checked.
- `itemMatchesFilters` searches `item.title`, `item.description`, `item.tags` — fields present on **zero** items. The working search runs elsewhere against `text`. The dead branch is deleted rather than left as a second competing search implementation.
- Region values `all` and `guarma` (2 items) do not normalize to any entry in `REGIONS`, so they can never match a region filter. `guarma` is added as a region; `all` is replaced with a real value or `unknown`.

**Out of scope, flagged as follow-up:** sidebar section counts stay absolute (`0/38`) rather than reflecting the active filter. Making them filter-aware would change the counting path unified in commit `624a2d6`, and "38 total" remains true while filtered.

### 4. Validation

The backfill rewrites 40+ data files. The failure that matters is not a wrong chapter — it is silently losing items. `scripts/check-data.mjs` runs before and after and asserts:

- total stays 886; per-section counts unchanged
- every `id` unique; every item retains `id`, `text`, `tip`
- `chapter` ∈ 1–6 | `epilogue` | absent — catches stray `"Chapter 2"` strings from the CSV merge
- every `region` normalizes to a known region
- `provenance` only names fields the item actually has

Any failure aborts before writing. There is no test framework in this repo and adding one for a data migration would be scope creep; assert-and-abort is proportionate and remains useful afterwards as a pre-deploy check.

### 5. Companion Activities

5 of 19 verified — the only section below 100%. Small enough to finish here rather than leave as the one ragged edge.

## Risks

- **The chapter-2 rule carries most of the weight.** If it is wrong for a category, it is wrong for roughly 200 items at once. The report groups derived values by rule, so a bad rule appears as a block rather than scattered noise.
- **The CSVs may be stale rather than authoritative.** If the adjudicated conflict sample looks systematically wrong, the correct response is to drop Pass 1 for that source, not to push the merge through. This will be surfaced, not decided unilaterally.

## Verification of figures

Every number in this document was measured against `src/data/index.js` and the CSVs in `research/data/` on 2026-07-28, and the Chapter 1 filter behaviour was reproduced on the live deployment.
