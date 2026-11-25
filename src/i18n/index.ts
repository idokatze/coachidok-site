// The site copy, one file per language (en.js, he.js — the same keys in both).
// Pages get the copy for their language with useCopy(Astro.url.pathname).
import en from './en.js';
import he from './he.js';
import { langOf, type Lang } from '../site';

export type Copy = typeof en;
const copy: Record<Lang, Copy> = { en, he: he as Copy };

export const getCopy = (lang: Lang) => copy[lang];

/** Language, copy and text direction for the page at this address. */
export const useCopy = (pathname: string) => {
  const lang = langOf(pathname);
  return { lang, t: copy[lang], dir: lang === 'he' ? 'rtl' : 'ltr' } as const;
};
