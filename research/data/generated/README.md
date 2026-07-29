# Generated CSVs — not evidence

Everything in this directory is produced **from the app's own data** in
`src/data/sections/` by `scripts/extract-items-csv.mjs` and
`scripts/extract-all-data.mjs`.

These files are a convenient flat view for spreadsheet editing. They are **not
an independent source** and must never be used to backfill or "verify" the app's
data — doing so re-imports the app's own guesses as confirmed facts.

`scripts/backfill-data.mjs` refuses to read them, by name and by path.

The one independently-curated source is `research/data/data-verified.csv`.
