import test from 'node:test';
import assert from 'node:assert/strict';
import {
  activeFilters, itemMatchesFilters, chapterRank,
  isHiddenForMissingField, normalizeRegion, REGIONS, resetAllFilters
} from '../src/components/sidebar-v2/filters.js';

test('chapterRank orders epilogue after chapter 6', () => {
  assert.equal(chapterRank(1), 1);
  assert.equal(chapterRank(6), 6);
  assert.equal(chapterRank('epilogue'), 7);
});

test('chapter filter is cumulative', () => {
  resetAllFilters();
  activeFilters.chapter = '3';
  assert.equal(itemMatchesFilters({ id: 'a', chapter: 2 }), true, 'ch2 is doable in ch3');
  assert.equal(itemMatchesFilters({ id: 'b', chapter: 3 }), true);
  assert.equal(itemMatchesFilters({ id: 'c', chapter: 4 }), false, 'ch4 not yet reachable');
  assert.equal(itemMatchesFilters({ id: 'd', chapter: 'epilogue' }), false);
  resetAllFilters();
});

test('epilogue filter includes everything', () => {
  resetAllFilters();
  activeFilters.chapter = 'epilogue';
  assert.equal(itemMatchesFilters({ id: 'a', chapter: 2 }), true);
  assert.equal(itemMatchesFilters({ id: 'b', chapter: 'epilogue' }), true);
  resetAllFilters();
});

test('items with unknown chapter are excluded but identifiable', () => {
  resetAllFilters();
  activeFilters.chapter = '3';
  const item = { id: 'a', provenance: { chapter: 'unknown' } };
  assert.equal(itemMatchesFilters(item), false);
  assert.equal(isHiddenForMissingField(item), 'chapter');
  resetAllFilters();
});

test('showUnknown includes items with no chapter', () => {
  resetAllFilters();
  activeFilters.chapter = '3';
  activeFilters.showUnknown = true;
  assert.equal(itemMatchesFilters({ id: 'a', provenance: { chapter: 'unknown' } }), true);
  resetAllFilters();
});

test('reward filter matches both reward and rewards[]', () => {
  resetAllFilters();
  activeFilters.hasReward = true;
  assert.equal(itemMatchesFilters({ id: 'a', reward: '$500' }), true);
  assert.equal(itemMatchesFilters({ id: 'b', rewards: ['Gold Bar'] }), true);
  assert.equal(itemMatchesFilters({ id: 'c' }), false);
  resetAllFilters();
});

test('guarma normalizes to a known region', () => {
  assert.ok(REGIONS.some(r => r.id === normalizeRegion('guarma')));
});

test('resetAllFilters clears showUnknown', () => {
  activeFilters.showUnknown = true;
  resetAllFilters();
  assert.equal(activeFilters.showUnknown, false);
});
