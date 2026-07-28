import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCSV } from '../scripts/lib/csv.js';

test('parses a simple row', () => {
  const rows = parseCSV('id,chapter\nfoo,2\n');
  assert.deepEqual(rows, [{ id: 'foo', chapter: '2' }]);
});

test('handles quoted fields containing commas', () => {
  const rows = parseCSV('id,text\n"a","Hello, partner"\n');
  assert.equal(rows[0].text, 'Hello, partner');
});

test('handles escaped double quotes', () => {
  const rows = parseCSV('id,text\n"a","He said ""howdy"""\n');
  assert.equal(rows[0].text, 'He said "howdy"');
});

test('handles newlines inside quoted fields', () => {
  const rows = parseCSV('id,text\n"a","line1\nline2"\n');
  assert.equal(rows[0].text, 'line1\nline2');
  assert.equal(rows.length, 1);
});

test('strips a UTF-8 BOM from the header', () => {
  const rows = parseCSV('﻿id,chapter\nfoo,2\n');
  assert.equal(rows[0].id, 'foo');
});

test('trims whitespace around values', () => {
  const rows = parseCSV('id,chapter\n  foo  ,  2  \n');
  assert.deepEqual(rows, [{ id: 'foo', chapter: '2' }]);
});
