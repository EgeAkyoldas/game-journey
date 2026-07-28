/**
 * Chapter derivation rules, in precedence order. First non-null wins.
 * `chapter` means "earliest chapter this becomes reachable".
 */

const CAMP_SECTIONS = new Set(['camp', 'camp-requests', 'companion-activities']);

const OPEN_WORLD_SECTIONS = new Set([
  'collectibles', 'trapper', 'unique-hats', 'pamphlets', 'talismans',
  'bandit', 'explorer', 'hunter', 'herbalist', 'sharpshooter',
  'horseman', 'survivalist', 'gambler', 'weapons-expert',
  'cig-gunslingers', 'cig-stage', 'cig-travel', 'cig-fauna', 'cig-horses',
  'cig-prominent', 'cig-flora', 'cig-beauty', 'cig-champions', 'cig-vistas',
  'cig-artists', 'cig-inventions'
]);

const NEW_AUSTIN_REGIONS = new Set(['new-austin', 'gaptooth', 'rio-bravo', 'cholla', 'hennigans-stead']);

/**
 * Find an explicit chapter reference in free text.
 * @param {string} [text]
 * @returns {number|'epilogue'|null}
 */
export function parseChapterFromText(text) {
  if (!text) return null;
  if (/\bepilogue\b/i.test(text)) return 'epilogue';
  const match = text.match(/\bchapter\s*([1-6])\b/i);
  return match ? Number(match[1]) : null;
}

export const CHAPTER_RULES = [
  {
    name: 'explicit-mention',
    apply: item => parseChapterFromText(item.tip) ?? parseChapterFromText(item.tip_detailed)
  },
  {
    name: 'new-austin',
    apply: item => (item.region && NEW_AUSTIN_REGIONS.has(item.region.toLowerCase()) ? 'epilogue' : null)
  },
  {
    name: 'guarma',
    apply: item => (item.region && item.region.toLowerCase() === 'guarma' ? 5 : null)
  },
  {
    name: 'camp',
    apply: item => (CAMP_SECTIONS.has(item._section) ? 2 : null)
  },
  {
    name: 'open-world',
    apply: item => (OPEN_WORLD_SECTIONS.has(item._section) ? 2 : null)
  }
];

/**
 * @param {object} item - must carry `_section`
 * @returns {{ value: number|'epilogue'|null, rule: string|null }}
 */
export function deriveChapter(item) {
  for (const rule of CHAPTER_RULES) {
    const value = rule.apply(item);
    if (value !== null && value !== undefined) {
      return { value, rule: rule.name };
    }
  }
  return { value: null, rule: null };
}
