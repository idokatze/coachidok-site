// <title> and description of every page, per language.
// English: written around the phrases athletes search for (online triathlon coach, 70.3, Ironman, first triathlon) —
// titles under 60 characters, descriptions under ~155, so search results don't cut them. Hebrew: the same, around מאמן טריאתלון, אימון טריאתלון אונליין, חצי-איש-ברזל and איש-ברזל.
import type { Lang } from '../site';

type PageSeo = { title: string; description: string };
export type PageKey = 'home' | 'about' | 'coaching' | 'contact';

export const seo: Record<Lang, Record<PageKey, PageSeo>> = {
  en: {
    home: {
      title: 'Online Triathlon Coach – Short Course, 70.3 & Ironman',
      description: '1-on-1 online triathlon coaching, short course to 70.3 and Ironman. 15+ years coaching, former head coach of Israel’s U17 national team. Based in Israel.',
    },
    about: {
      title: 'Triathlon Coach Ido Katzenellenbogen | About',
      description: '15+ years coaching triathlon. Former head coach of Israel’s national academy and U17 team, and a certified Byron Katie facilitator for the mental side.',
    },
    coaching: {
      title: 'Online Triathlon Coaching for Every Level | Coach Ido K',
      description: '1-on-1 online coaching through TrainingPeaks: first triathlon, sprint and Olympic, half Ironman (70.3), Ironman and junior development.',
    },
    contact: {
      title: 'Free Triathlon Coaching Consultation | Coach Ido K',
      description: 'Tell me about your training and goals and set up a free 10–15 minute call. Online coaching for athletes in Israel and worldwide.',
    },
  },
  he: {
    home: {
      title: 'מאמן טריאתלון אישי אונליין – ספרינט ועד 70.3 ואיש-ברזל',
      description: 'אימון טריאתלון אישי אונליין, ממרחקים קצרים ועד חצי-איש-ברזל (70.3) ואיש-ברזל. מעל 15 שנות אימון, לשעבר מאמן ראשי של נבחרת ישראל עד גיל 17.',
    },
    about: {
      title: 'מאמן הטריאתלון עידו קצנלנבוגן | אודות',
      description: 'מעל 15 שנות אימון טריאתלון. לשעבר מאמן ראשי באקדמיית וינגייט ובנבחרת ישראל עד גיל 17, ומאפשר מוסמך בשיטת העבודה של ביירון קייטי.',
    },
    coaching: {
      title: 'אימון טריאתלון אישי אונליין | עידו קצנלנבוגן',
      description: 'אימון אישי אחד על אחד דרך TrainingPeaks: טריאתלון ראשון, ספרינט ואולימפי, חצי-איש-ברזל (70.3), איש-ברזל ומסלול נוער.',
    },
    contact: {
      title: 'שיחת ייעוץ חינם לאימון טריאתלון | עידו קצנלנבוגן',
      description: 'ספרו לי על האימונים והמטרות שלכם ונתאם שיחה חינם של 10–15 דקות. אימון טריאתלון אונליין לספורטאים בישראל ובעולם.',
    },
  },
};

