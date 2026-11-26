// Stable site data, shared by every page in both languages. Visible page copy lives in src/i18n.

export type Lang = 'en' | 'he';
export const langs: Lang[] = ['en', 'he'];

/** The public address of a page. build.format is 'file', so Astro gives /about.html or /index.html;
 *  the site's addresses have neither (trailingSlash: 'never'). Used for the canonical URL and the current-page mark. */
export const cleanPath = (pathname: string) => pathname.replace(/(?:index)?\.html$/, '').replace(/\/$/, '') || '/';

/** The language of a page, from its address: /he/… is Hebrew, everything else English. */
export const langOf = (pathname: string): Lang => (/^\/he(\/|$)/.test(cleanPath(pathname)) ? 'he' : 'en');

/** A page's address without the language prefix: /he/about → /about */
export const basePath = (pathname: string) => cleanPath(pathname).replace(/^\/he(?=\/|$)/, '') || '/';

/** The address of a page in a given language: ('/about', 'he') → /he/about */
export const localize = (path: string, lang: Lang) => {
  if (lang === 'en') return path;
  return path === '/' ? '/he' : `/he${path}`;
};

export const site = {
  // brand text in the header and footer stays English in both languages
  name: 'Coach Ido K',
  subtitle: 'Triathlon Coaching',
  tagline: 'Endurance & Triathlon Coaching',
  fullName: 'Ido Katzenellenbogen',
  company: 'Baby Goat Ltd.',
  phoneDisplay: '+972 54-475-5158',
  phoneE164: '+972544755158',
  whatsapp: 'https://wa.me/972544755158',
  email: 'idokatze@gmail.com',
  trainingPeaks: 'https://www.trainingpeaks.com/coach/idok',
  linkedIn: 'https://www.linkedin.com/in/idokatze',
  // Ido's Byron Katie site (Hebrew only). Linked from the Hebrew Coaching and About pages.
  theWork: 'https://idokatze.com',
};

/** Main menu: an address and the key of its label in the copy (header.nav.*). Contact is the header button. */
export const nav = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/coaching', key: 'coaching' },
  { href: '/contact', key: 'contact' },
] as const;

export type IconName = 'whatsapp' | 'phone' | 'mail' | 'trainingpeaks' | 'linkedin' | 'check' | 'close' | 'menu';

/** Every way to reach me. Footer and contact page both read from this list; labels come from the copy (contactMethods.*). */
export const contacts: {
  id: 'whatsapp' | 'email' | 'phone' | 'trainingPeaks' | 'linkedIn';
  value: string;
  href: string;
  icon: IconName;
  external?: boolean;
  footer?: boolean;   // also shown in the footer row
}[] = [
  { id: 'whatsapp', value: site.phoneDisplay, href: site.whatsapp, icon: 'whatsapp', external: true, footer: true },
  { id: 'email', value: site.email, href: `mailto:${site.email}`, icon: 'mail', footer: true },
  { id: 'phone', value: site.phoneDisplay, href: `tel:${site.phoneE164}`, icon: 'phone' },
  { id: 'trainingPeaks', value: 'TrainingPeaks', href: site.trainingPeaks, icon: 'trainingpeaks', external: true, footer: true },
  { id: 'linkedIn', value: 'LinkedIn', href: site.linkedIn, icon: 'linkedin', external: true, footer: true },
];
