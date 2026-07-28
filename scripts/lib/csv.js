/**
 * Minimal RFC-4180 CSV parser.
 * Supports quoted fields, "" escapes, embedded commas/newlines, and a BOM.
 */
export function parseCSV(text) {
  const rows = [];
  let row = [];
  let cur = '';
  let inQuotes = false;

  const src = text.replace(/^﻿/, '');

  for (let i = 0; i < src.length; i++) {
    const c = src[i];

    if (inQuotes) {
      if (c === '"') {
        if (src[i + 1] === '"') { cur += '"'; i++; }
        else inQuotes = false;
      } else {
        cur += c;
      }
      continue;
    }

    if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(cur); cur = ''; }
    else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
    else if (c !== '\r') cur += c;
  }

  if (cur !== '' || row.length) { row.push(cur); rows.push(row); }

  const header = rows.shift();
  if (!header) return [];

  return rows
    .filter(r => r.length > 1)
    .map(r => Object.fromEntries(
      header.map((h, i) => [h.trim(), (r[i] || '').trim()])
    ));
}
