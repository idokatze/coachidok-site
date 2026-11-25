// Checks that the Hebrew copy (src/i18n/he.js) has every key the English copy (src/i18n/en.js) has, and the other way round,
// including the number of items in every list. A key missing in one language would show as a blank on that page.
// Runs as part of `npm run check`. Fails (exit 1) and names each difference.
import en from '../src/i18n/en.js';
import he from '../src/i18n/he.js';

// English-only for now: the Hebrew text for these hasn't been written yet. Remove each line as its Hebrew arrives.
const PENDING_HEBREW = [
  'home.bringTitle',
  'home.bringItems',
  'about.experienceTitle',
  'about.experienceItems',
  'coachBio.sections',
];

const differences = [];
const pending = (path) => PENDING_HEBREW.some((p) => path === p || path.startsWith(p + '.') || path.startsWith(p + '['));

function compare(a, b, path) {
  if (pending(path)) return;
  const kind = (v) => (Array.isArray(v) ? 'list' : v && typeof v === 'object' ? 'group' : 'text');
  if (kind(a) !== kind(b)) return differences.push(`${path}: ${kind(a)} in English, ${kind(b)} in Hebrew`);
  if (kind(a) === 'list') {
    if (a.length !== b.length) differences.push(`${path}: ${a.length} items in English, ${b.length} in Hebrew`);
    a.slice(0, b.length).forEach((item, i) => compare(item, b[i], `${path}[${i}]`));
  } else if (kind(a) === 'group') {
    for (const key of Object.keys(a)) {
      const p = path ? `${path}.${key}` : key;
      if (!(key in b)) { if (!pending(p)) differences.push(`${p}: missing in Hebrew`); }
      else compare(a[key], b[key], p);
    }
    for (const key of Object.keys(b)) {
      const p = path ? `${path}.${key}` : key;
      if (!(key in a) && !pending(p)) differences.push(`${p}: missing in English`);
    }
  } else if (typeof a === 'string' && (!a.trim() || !b.trim())) {
    differences.push(`${path}: empty text`);
  }
}

compare(en, he, '');
if (differences.length) {
  console.error(`Copy check: ${differences.length} difference(s) between en.js and he.js\n  ` + differences.join('\n  '));
  process.exit(1);
}
console.log(`Copy check: English and Hebrew match (${PENDING_HEBREW.length} item(s) waiting for Hebrew).`);
