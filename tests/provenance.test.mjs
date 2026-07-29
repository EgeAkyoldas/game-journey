import test from 'node:test';
import assert from 'node:assert/strict';
import { provenanceOf, isDerived, hasValue, applyBackfill } from '../src/data/provenance.js';

test('a field absent from provenance is verified', () => {
  const item = { id: 'a', chapter: 2 };
  assert.equal(provenanceOf(item, 'chapter'), 'verified');
  assert.equal(isDerived(item, 'chapter'), false);
  assert.equal(hasValue(item, 'chapter'), true);
});

test('a field named derived reports derived', () => {
  const item = { id: 'a', chapter: 2, provenance: { chapter: 'derived' } };
  assert.equal(provenanceOf(item, 'chapter'), 'derived');
  assert.equal(isDerived(item, 'chapter'), true);
  assert.equal(hasValue(item, 'chapter'), true);
});

test('a field named unknown has no usable value', () => {
  const item = { id: 'a', provenance: { chapter: 'unknown' } };
  assert.equal(provenanceOf(item, 'chapter'), 'unknown');
  assert.equal(hasValue(item, 'chapter'), false);
});

test('a missing field with no provenance is unknown', () => {
  const item = { id: 'a' };
  assert.equal(provenanceOf(item, 'chapter'), 'unknown');
  assert.equal(hasValue(item, 'chapter'), false);
});

test('applyBackfill merges into items and sub-items without mutating input', () => {
  const sections = [{
    id: 's', items: [
      { id: 'a', text: 'A', subItems: [{ id: 'a1', text: 'A1' }] }
    ]
  }];
  const overlay = {
    a: { chapter: 2, provenance: { chapter: 'derived' } },
    a1: { region: 'lemoyne' }
  };

  const merged = applyBackfill(sections, overlay);

  assert.equal(merged[0].items[0].chapter, 2);
  assert.equal(merged[0].items[0].provenance.chapter, 'derived');
  assert.equal(merged[0].items[0].subItems[0].region, 'lemoyne');
  assert.equal(sections[0].items[0].chapter, undefined, 'input must not be mutated');
});

test('curated values win over the overlay', () => {
  const sections = [{ id: 's', items: [{ id: 'a', text: 'A', chapter: 4 }] }];
  const overlay = { a: { chapter: 2, provenance: { chapter: 'derived' } } };
  const merged = applyBackfill(sections, overlay);
  assert.equal(merged[0].items[0].chapter, 4);
  assert.equal(provenanceOf(merged[0].items[0], 'chapter'), 'verified');
});

test('an explicit null is settled but still not a usable value', () => {
  // `region: null` means "this item has no region" (e.g. a trinket crafted at
  // any Fence). It must not read as verified, or it would claim to be a
  // confirmed fact while matching no region filter.
  const item = { id: 'a', region: null };
  assert.equal(provenanceOf(item, 'region'), 'unknown');
  assert.equal(hasValue(item, 'region'), false);
  assert.equal(isDerived(item, 'region'), false);
});
