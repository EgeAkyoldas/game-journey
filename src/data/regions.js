/**
 * Region ids and normalization.
 * Deliberately dependency-free: build scripts import this without pulling in
 * the checklist data graph.
 */

export const REGIONS = [
  { id: 'new-hanover', name: 'New Hanover' },
  { id: 'lemoyne', name: 'Lemoyne' },
  { id: 'west-elizabeth', name: 'West Elizabeth' },
  { id: 'new-austin', name: 'New Austin' },
  { id: 'ambarino', name: 'Ambarino' },
  { id: 'guarma', name: 'Guarma' }
];

const SUB_REGION_MAP = {
  // New Hanover
  'heartlands': 'new-hanover',
  'cumberland': 'new-hanover',
  'roanoke': 'new-hanover',
  'roanoke-ridge': 'new-hanover',
  // Ambarino
  'grizzlies': 'ambarino',
  'grizzlies-east': 'ambarino',
  'grizzlies-west': 'ambarino',
  // West Elizabeth
  'big-valley': 'west-elizabeth',
  'tall-trees': 'west-elizabeth',
  'great-plains': 'west-elizabeth',
  // Lemoyne
  'bayou': 'lemoyne',
  'saint-denis': 'lemoyne',
  'scarlett-meadows': 'lemoyne',
  'bluewater': 'lemoyne',
  // New Austin
  'gaptooth': 'new-austin',
  'rio-bravo': 'new-austin',
  'cholla': 'new-austin',
  'hennigans-stead': 'new-austin'
};

/**
 * @param {string} region
 * @returns {string|null} a main region id, or null
 */
export function normalizeRegion(region) {
  if (!region) return null;
  const lower = region.toLowerCase();
  if (REGIONS.some(r => r.id === lower)) return lower;
  return SUB_REGION_MAP[lower] || lower;
}
