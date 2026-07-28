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
