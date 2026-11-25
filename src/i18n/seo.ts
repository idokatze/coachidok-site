// <title> and description of every page, per language.
// English: carried over from the previous site. Hebrew: put together from the Hebrew page copy until it gets its own text.
import type { Lang } from '../site';
import he from './he.js';

type PageSeo = { title: string; description: string };
export type PageKey = 'home' | 'about' | 'coaching' | 'contact';

export const seo: Record<Lang, Record<PageKey, PageSeo>> = {
  en: {
    home: {
      title: 'Coach Ido K | Personal Triathlon & Endurance Coaching',
      description: 'Personal triathlon and endurance coaching from Ido Katzenellenbogen, bringing 15+ years of national-level coaching experience to serious athletes.',
    },
    about: {
      title: 'About Coach Ido | Triathlon & Endurance Coach',
      description: 'Meet Ido Katzenellenbogen, a personal endurance coach with 15+ years of experience across national teams, junior development, and age-group sport.',
    },
    coaching: {
      title: 'Personal Triathlon & Endurance Coaching | Coach Ido K',
      description: 'Remote personal coaching for first-time, short-course, long-distance, and junior elite triathletes, built around planning, feedback, and communication.',
    },
    contact: {
      title: 'Book a Free Coaching Consultation | Coach Ido K',
      description: 'Tell Coach Ido about your triathlon or endurance goals and start with a free consultation about the coaching support that fits you.',
    },
  },
  he: {
    home: { title: `${he.coachBio.name} | ${he.coachBio.title}`, description: he.hero.lead },
    about: { title: `${he.header.nav.about} | ${he.coachBio.name}`, description: he.about.introLead },
    coaching: { title: `${he.header.nav.coaching} | ${he.coachBio.name}`, description: he.coaching.lead },
    contact: { title: `${he.header.nav.contact} | ${he.coachBio.name}`, description: he.contact.lead },
  },
};

