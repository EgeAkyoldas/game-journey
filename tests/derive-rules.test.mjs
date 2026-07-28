import test from 'node:test';
import assert from 'node:assert/strict';
import { deriveChapter, parseChapterFromText } from '../scripts/lib/derive-rules.mjs';

test('parses an explicit chapter mention', () => {
  assert.equal(parseChapterFromText('Available after Chapter 3'), 3);
  assert.equal(parseChapterFromText('Chapter 4 only'), 4);
  assert.equal(parseChapterFromText('Epilogue only'), 'epilogue');
});

test('ignores text with no chapter mention', () => {
  assert.equal(parseChapterFromText('West of Strawberry'), null);
  assert.equal(parseChapterFromText(''), null);
  assert.equal(parseChapterFromText(undefined), null);
});

test('explicit mention beats section rules', () => {
  const item = { _section: 'cig-fauna', tip: 'Only in Chapter 4' };
  assert.deepEqual(deriveChapter(item), { value: 4, rule: 'explicit-mention' });
});

test('New Austin content derives to epilogue', () => {
  const item = { _section: 'collectibles', region: 'new-austin', tip: 'Near Tumbleweed' };
  assert.deepEqual(deriveChapter(item), { value: 'epilogue', rule: 'new-austin' });
});

test('Guarma content derives to chapter 5', () => {
  const item = { _section: 'collectibles', region: 'guarma', tip: 'On the island' };
  assert.deepEqual(deriveChapter(item), { value: 5, rule: 'guarma' });
});

test('camp sections derive to chapter 2', () => {
  const item = { _section: 'camp', tip: 'Donate to the ledger' };
  assert.deepEqual(deriveChapter(item), { value: 2, rule: 'camp' });
});

test('open-world collectible sections derive to chapter 2', () => {
  const item = { _section: 'cig-fauna', tip: 'Behind the saloon' };
  assert.deepEqual(deriveChapter(item), { value: 2, rule: 'open-world' });
});

test('unmatched items derive to null', () => {
  const item = { _section: 'strangers', tip: 'Somewhere out there' };
  assert.deepEqual(deriveChapter(item), { value: null, rule: null });
});

test('rules are applied in precedence order, not data order', () => {
  // New Austin AND an explicit mention: the mention wins
  const item = { _section: 'collectibles', region: 'new-austin', tip: 'From Chapter 2' };
  assert.deepEqual(deriveChapter(item), { value: 2, rule: 'explicit-mention' });
});

test('earliest numeric chapter wins over a later epilogue mention', () => {
  assert.equal(parseChapterFromText('One in Chapter 2, one in Epilogue.'), 2);
  assert.equal(parseChapterFromText('Obtainable from CH 1! Or CH 2 fire arrow, or Epilogue.'), 1);
});

test('epilogue-only text with no numeric chapter still returns epilogue', () => {
  assert.equal(parseChapterFromText('Epilogue only'), 'epilogue');
});

test('recognizes plural "Chapters N-M" range phrasing and returns the earliest number', () => {
  assert.equal(parseChapterFromText('Chapters 2-3 only'), 2);
  assert.equal(parseChapterFromText('Throughout Chapters 2-4, talk to Pearson'), 2);
});

test('preserves existing single-chapter and no-mention behaviour', () => {
  assert.equal(parseChapterFromText('Available after Chapter 3'), 3);
  assert.equal(parseChapterFromText('West of Strawberry'), null);
});

test('returns the minimum chapter when multiple mentions appear out of order', () => {
  assert.equal(parseChapterFromText('Chapter 4 or Chapter 2'), 2);
});

test('recognizes the "CH" abbreviation, with or without a period, spaced or not', () => {
  assert.equal(parseChapterFromText('CH 2'), 2);
  assert.equal(parseChapterFromText('Ch3'), 3);
  assert.equal(parseChapterFromText('Ch. 5'), 5);
});
