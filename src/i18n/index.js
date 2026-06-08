import { reactive } from 'vue'

const STORAGE_KEY = 'coachidok-site-locale'
const SUPPORTED_LOCALES = ['en', 'he']

const messages = {
    en: {
        app: {
            skipToContent: 'Skip to main content',
        },
        common: {
            localeToggle: 'Language',
        },
        header: {
            logoName: 'Coach Ido K',
            logoSubtitle: 'Triathlon Coaching',
            openMenu: 'Open navigation menu',
            closeMenu: 'Close navigation menu',
            menu: 'Menu',
            primaryNav: 'Primary navigation',
            nav: {
                home: 'Home',
                about: 'About',
                coaching: 'Coaching',
                contact: 'Contact',
            },
            locale: {
                en: 'EN',
                he: 'HE',
            },
        },
        footer: {
            tagline: 'Endurance & Triathlon Coaching',
            company: 'Baby Goat Ltd.',
        },
        contactMethods: {
            WhatsApp: 'WhatsApp',
            Email: 'Email',
            TrainingPeaks: 'TrainingPeaks',
            LinkedIn: 'LinkedIn',
        },
        hero: {
            eyebrow: 'Coach Ido Katzenellenbogen',
            title: 'Triathlon and Endurance Coaching',
            lead: 'Personalized one-on-one endurance coaching built around your goals, your schedule, and your life.',
            cta: 'Book a Free Consultation',
        },
        coachBio: {
            name: 'Coach Ido Katzenellenbogen',
            title: 'Personal Triathlon & Endurance Coach',
            summary:
                'I help endurance athletes train with structure, clarity, and long-term purpose.',
            keywords: [
                'Detail-oriented',
                'Tailored to the athlete',
                'Hands-on',
                'Growth-minded',
            ],
            homeIntro:
                'For more than 15 years, I have coached athletes across swimming, running, and triathlon, from first steps in sport to junior, elite, and adult athletes training toward meaningful goals.',
            homeCredibility:
                'My work has ranged from club coaching to national-team and academy roles, always with the goal of building training around the athlete, not the other way around.',
            experience: [
                {
                    title: '15+ years coaching',
                    body: 'Across swimming, running, and triathlon, with athletes at very different stages of development.',
                },
                {
                    title: 'High-performance background',
                    body: 'Including national team and academy roles working with junior and elite triathletes.',
                },
                {
                    title: 'Athlete-centered approach',
                    body: 'Structured planning, close observation, and coaching that adapts to the person in front of me.',
                },
            ],
            sections: [
                {
                    title: 'Coaching background',
                    paragraphs: [
                        'For more than 15 years, I have coached athletes across swimming, running, and triathlon, from young children taking their first steps in sport to adult athletes in their 60s, as well as junior and elite triathletes competing internationally.',
                        'Alongside my work as a club coach, I have served as Head Coach of Israel’s U17 National Team, Assistant Coach of the Elite National Team, and Head Coach at the Wingate Academy for Excellence.',
                    ],
                },
                {
                    title: 'How I found coaching',
                    paragraphs: [
                        'My path into coaching was not completely linear. I studied law at Tel Aviv University, but never pursued it professionally. Instead, I gravitated toward coaching and the process of helping athletes work toward their goals, develop skills, and grow as athletes and human beings.',
                        'I spent most of my childhood in the United States and moved to Israel at age 13. As a kid, I played soccer, baseball, and golf, and sport was always a major part of how I learned, connected, and challenged myself.',
                    ],
                },
                {
                    title: 'My athlete perspective',
                    paragraphs: [
                        'I have trained and competed across endurance sports myself, from sprint triathlon to half-Ironman distance, as well as 5K, 10K, numerous half marathons and full marathons, and stage-race mountain biking.',
                        'I was never the most naturally gifted triathlete, but I was curious, passionate, detail-oriented, and willing to keep learning. That mindset still shapes how I coach today.',
                    ],
                },
                {
                    title: 'What shapes my coaching',
                    paragraphs: [
                        'As I moved into coaching junior and elite athletes, I was often working in environments I had not experienced myself as an elite athlete. Because I could not rely on my own racing experience as the answer, I had to become better at observing, asking questions, studying the sport, and understanding the athlete in front of me.',
                        'Over time, that became one of my strengths. My coaching developed through curiosity, attention to detail, and a constant drive to improve, not through repeating what had worked for me personally. I learned to understand the process, not just the performance.',
                    ],
                },
                {
                    title: 'Coaching as teaching',
                    paragraphs: [
                        'I also designed and led a national triathlon coaches certification program, which deepened the way I think about coaching itself: not just as writing workouts, but as teaching, communicating, observing, adapting, and helping athletes develop over time.',
                        'Today, my coaching combines high-performance experience with a practical understanding of real life. A good plan needs structure, but it also needs to fit the athlete. My goal is to help athletes build consistency, develop durable skills, and become stronger, more capable endurance athletes over time.',
                    ],
                },
            ],
        },
        about: {
            coachingApproach: 'Coaching approach',
            coachPortraitAlt: 'Coach Ido by the water',
            moreAboutMe: 'More about me',
            introLead:
                'My coaching combines high-performance experience with a practical understanding of real life, helping athletes train with structure, clarity, and long-term purpose.',
            pathEyebrow: 'My path',
            pathTitle:
                'A coaching philosophy shaped by observation, learning, and real people.',
            ctaEyebrow: 'Work together',
            ctaTitle: 'Ready to build training around your goals and your life?',
            ctaButton: 'Contact me',
        },
        coaching: {
            eyebrow: 'Coaching',
            coachPortraitAlt: 'Coach Ido standing by the water',
            title: 'Structured coaching for athletes who want a clear path forward.',
            lead: 'Training should feel purposeful, adaptable, and connected to real life. The goal is steady progress you can trust, not just a harder calendar.',
            primaryCta: 'Start the conversation',
            secondaryCta: 'Learn about my background',
            includesEyebrow: 'What coaching includes',
            includesTitle: 'A system built around consistency, context, and feedback.',
            pillars: [
                {
                    title: 'Individual planning',
                    body: 'Your training is built around your current level, race goals, recovery needs, and real weekly availability.',
                },
                {
                    title: 'Ongoing adjustments',
                    body: 'Plans should respond to travel, fatigue, work pressure, and strong training blocks instead of pretending every week is identical.',
                },
                {
                    title: 'Feedback that matters',
                    body: 'Communication is part of the process, so the training makes sense and you understand what each phase is trying to achieve.',
                },
            ],
            processEyebrow: 'How we work',
            processTitle: 'Simple process, clear expectations.',
            steps: [
                {
                    number: '01',
                    title: 'Initial conversation',
                    body: 'We start with your background, current routine, goals, and the kind of support you are looking for.',
                },
                {
                    number: '02',
                    title: 'Training setup',
                    body: 'I build the structure, key priorities, and progression so your week has direction without becoming rigid.',
                },
                {
                    number: '03',
                    title: 'Review and adapt',
                    body: 'We keep adjusting based on feedback, training response, and the reality of life around the sport.',
                },
            ],
            nextEyebrow: 'Next step',
            nextTitle: 'Tell me where you are now and what you are aiming for.',
            nextLead:
                'We can shape the right coaching setup once we understand your goals, schedule, and training history.',
            nextButton: 'Contact me',
        },
        contact: {
            eyebrow: 'Contact',
            title: 'Start with a focused coaching conversation.',
            lead: 'Tell me where you are now, what you are training for, and what kind of support would make the next block clearer.',
            contactMethods: 'Contact methods',
            supportLabel: 'Coaching support',
            coachingSupportAlt:
                'Coach supporting an athlete before a swim session',
            form: {
                title: 'Free consultation request',
                intro:
                    'A few details are enough to understand whether the coaching fit is right.',
                name: 'Name',
                email: 'Email',
                goal: 'Primary goal',
                message: 'Message',
                send: 'Send request',
                sending: 'Sending...',
                goals: [
                    'First triathlon',
                    'Improve race performance',
                    'Return to consistent training',
                    'Long-distance / endurance build',
                    'Not sure yet',
                ],
                success: 'Thanks. Your request was sent successfully.',
                invalid: 'Please check the highlighted fields and try again.',
                setupError:
                    'Form setup is not complete yet. Add the Web3Forms access key to enable submissions.',
                genericError:
                    'Something went wrong while sending your request.',
            },
            validation: {
                name: 'Please enter your name.',
                emailRequired: 'Please enter your email.',
                emailInvalid: 'Please enter a valid email address.',
                goal: 'Please choose a primary goal.',
            },
        },
    },
    he: {
        app: {
            skipToContent: 'דלג לתוכן הראשי',
        },
        common: {
            localeToggle: 'שפה',
        },
        header: {
            logoName: 'המאמן עידו ק',
            logoSubtitle: 'אימון טריאתלון',
            openMenu: 'פתיחת תפריט ניווט',
            closeMenu: 'סגירת תפריט ניווט',
            menu: 'תפריט',
            primaryNav: 'ניווט ראשי',
            nav: {
                home: 'בית',
                about: 'אודות',
                coaching: 'אימון',
                contact: 'יצירת קשר',
            },
            locale: {
                en: 'EN',
                he: 'עב',
            },
        },
        footer: {
            tagline: 'אימון סבולת וטריאתלון',
            company: 'Baby Goat Ltd.',
        },
        contactMethods: {
            WhatsApp: 'וואטסאפ',
            Email: 'אימייל',
            TrainingPeaks: 'TrainingPeaks',
            LinkedIn: 'לינקדאין',
        },
        hero: {
            eyebrow: 'המאמן עידו קצנלנבוגן',
            title: 'אימון טריאתלון וסבולת',
            lead: 'אימון אישי אחד על אחד, מותאם למטרות שלך, ללוח הזמנים שלך ולחיים שלך.',
            cta: 'לקביעת שיחת היכרות חינם',
        },
        coachBio: {
            name: 'המאמן עידו קצנלנבוגן',
            title: 'מאמן אישי לטריאתלון וספורט סבולת',
            summary:
                'אני עוזר לספורטאי סבולת להתאמן עם מבנה, בהירות ומטרה ארוכת טווח.',
            keywords: [
                'ירידה לפרטים',
                'מותאם לספורטאי/ת',
                'מעורבות מלאה',
                'חשיבה תהליכית',
            ],
            homeIntro:
                'במשך יותר מ־15 שנה אני מאמן שחייה, ריצה וטריאתלון, החל מצעדים ראשונים בספורט ועד ספורטאי נוער, עילית ובוגרים שמתאמנים למטרות משמעותיות.',
            homeCredibility:
                'העבודה שלי נעה בין אימון מועדונים לבין תפקידי נבחרת ואקדמיה, תמיד מתוך מטרה לבנות את האימון סביב הספורטאי ולא להפך.',
            experience: [
                {
                    title: 'מעל 15 שנות אימון',
                    body: 'בשחייה, ריצה וטריאתלון, עם ספורטאים בשלבים שונים מאוד של התפתחות.',
                },
                {
                    title: 'רקע הישגי',
                    body: 'כולל תפקידי נבחרת ואקדמיה בעבודה עם טריאתלטים צעירים וספורטאי עילית.',
                },
                {
                    title: 'גישה ממוקדת ספורטאי',
                    body: 'תכנון מובנה, התבוננות קרובה ואימון שמסתגל לאדם שנמצא מולי.',
                },
            ],
            sections: [
                {
                    title: 'רקע מקצועי באימון',
                    paragraphs: [
                        'במשך יותר מ־15 שנה אני מאמן שחייה, ריצה וטריאתלון, החל מילדים שעושים את צעדיהם הראשונים בספורט, דרך מבוגרים בשנות ה־60 לחייהם, ועד טריאתלטים צעירים וספורטאי עילית המתחרים בזירה הבינלאומית.',
                        'לצד עבודתי כמאמן מועדון, שימשתי כמאמן הראשי של נבחרת ישראל עד גיל 17, כעוזר מאמן נבחרת העילית וכמאמן הראשי באקדמיה למצוינות במכון וינגייט.',
                    ],
                },
                {
                    title: 'איך הגעתי לאימון',
                    paragraphs: [
                        'הדרך שלי לאימון לא הייתה לגמרי ליניארית. למדתי משפטים באוניברסיטת תל אביב, אבל לא פניתי לעסוק בכך מקצועית. במקום זאת נמשכתי לעולם האימון ולתהליך של עזרה לספורטאים להתקדם לעבר המטרות שלהם, לפתח יכולות ולצמוח כספורטאים וכבני אדם.',
                        'את רוב ילדותי העברתי בארצות הברית, ובגיל 13 עברתי לישראל. כילד שיחקתי כדורגל, בייסבול וגולף, והספורט תמיד היה חלק מרכזי באופן שבו למדתי, התחברתי לאנשים ואתגרתי את עצמי.',
                    ],
                },
                {
                    title: 'הפרספקטיבה שלי כספורטאי',
                    paragraphs: [
                        'גם אני התאמנתי והתחריתי במגוון ענפי סבולת, מטריאתלון ספרינט ועד חצי איש ברזל, וגם במרחקי 5 ו־10 ק"מ, חצאי מרתון, מרתונים ורכיבת הרים רב־יומית.',
                        'מעולם לא הייתי הטריאתלט הכי מוכשר באופן טבעי, אבל הייתי סקרן, מלא תשוקה, יסודי ומוכן להמשיך ללמוד. התפיסה הזאת ממשיכה לעצב את הדרך שבה אני מאמן גם היום.',
                    ],
                },
                {
                    title: 'מה מעצב את האימון שלי',
                    paragraphs: [
                        'כשהתקדמתי לאימון ספורטאי נוער ועילית, לא פעם עבדתי בסביבות שלא חוויתי בעצמי כספורטאי עילית. מכיוון שלא יכולתי להסתמך על הניסיון התחרותי האישי שלי כתשובה, נאלצתי להיות טוב יותר בהתבוננות, בשאילת שאלות, בלימוד הענף ובהבנת הספורטאי שמולי.',
                        'עם הזמן זה הפך לאחת החוזקות שלי. האימון שלי התפתח דרך סקרנות, תשומת לב לפרטים ודחף מתמיד להשתפר, ולא דרך חזרה אוטומטית על מה שעבד עבורי אישית. למדתי להבין את התהליך, לא רק את התוצאה.',
                    ],
                },
                {
                    title: 'אימון כהוראה',
                    paragraphs: [
                        'בנוסף, תכננתי והובלתי תוכנית לאומית להכשרת מאמני טריאתלון, מה שהעמיק את הדרך שבה אני חושב על אימון: לא רק כתיבת אימונים, אלא הוראה, תקשורת, התבוננות, התאמה וליווי ספורטאים לאורך זמן.',
                        'היום האימון שלי משלב ניסיון מהעולם ההישגי עם הבנה מעשית של החיים עצמם. תוכנית טובה צריכה מבנה, אבל היא גם חייבת להתאים לספורטאי. המטרה שלי היא לעזור לספורטאים לבנות עקביות, לפתח יכולות עמידות ולהפוך לאורך זמן לספורטאי סבולת חזקים ומסוגלים יותר.',
                    ],
                },
            ],
        },
        about: {
            coachingApproach: 'גישת האימון',
            coachPortraitAlt: 'המאמן עידו ליד המים',
            moreAboutMe: 'עוד עליי',
            introLead:
                'האימון שלי משלב ניסיון מהעולם ההישגי עם הבנה מעשית של החיים עצמם, כדי לעזור לספורטאים להתאמן עם מבנה, בהירות ומטרה ארוכת טווח.',
            pathEyebrow: 'הדרך שלי',
            pathTitle:
                'פילוסופיית אימון שנבנתה מהתבוננות, למידה ועבודה עם אנשים אמיתיים.',
            ctaEyebrow: 'בואו נעבוד יחד',
            ctaTitle: 'מוכנים לבנות תהליך אימון שמתאים למטרות ולחיים שלכם?',
            ctaButton: 'יצירת קשר',
        },
        coaching: {
            eyebrow: 'אימון',
            coachPortraitAlt: 'המאמן עידו עומד ליד המים',
            title: 'אימון מובנה לספורטאים שרוצים דרך ברורה קדימה.',
            lead: 'אימון צריך להרגיש מכוון, גמיש ומחובר לחיים עצמם. המטרה היא התקדמות עקבית שאפשר לסמוך עליה, לא רק לוח אימונים קשוח יותר.',
            primaryCta: 'בואו נתחיל שיחה',
            secondaryCta: 'לקרוא על הרקע שלי',
            includesEyebrow: 'מה כולל האימון',
            includesTitle: 'מערכת שבנויה על עקביות, הקשר ומשוב.',
            pillars: [
                {
                    title: 'תכנון אישי',
                    body: 'האימונים נבנים סביב הרמה הנוכחית שלך, מטרות התחרות, צורכי ההתאוששות והזמן האמיתי שיש לך בכל שבוע.',
                },
                {
                    title: 'התאמות שוטפות',
                    body: 'תוכנית צריכה להגיב לנסיעות, עייפות, עומס בעבודה ולתקופות אימון חזקות, ולא להעמיד פנים שכל שבוע נראה אותו דבר.',
                },
                {
                    title: 'משוב עם ערך',
                    body: 'התקשורת היא חלק מהתהליך, כדי שהאימונים יהיו ברורים ותבין מה כל שלב מנסה להשיג.',
                },
            ],
            processEyebrow: 'איך אנחנו עובדים',
            processTitle: 'תהליך פשוט, ציפיות ברורות.',
            steps: [
                {
                    number: '01',
                    title: 'שיחה ראשונית',
                    body: 'מתחילים מהרקע שלך, מהשגרה הנוכחית, מהמטרות ומהסוג של הליווי שאתה מחפש.',
                },
                {
                    number: '02',
                    title: 'בניית המסגרת',
                    body: 'אני בונה את המבנה, סדרי העדיפויות וההתקדמות כך שלשבוע שלך תהיה כוונה מבלי להפוך לנוקשה.',
                },
                {
                    number: '03',
                    title: 'בקרה והתאמה',
                    body: 'ממשיכים להתאים לפי המשוב, תגובת הגוף לאימונים והמציאות של החיים סביב הספורט.',
                },
            ],
            nextEyebrow: 'השלב הבא',
            nextTitle: 'ספרו לי איפה אתם נמצאים עכשיו ולאן אתם שואפים להגיע.',
            nextLead:
                'אפשר לבנות את מסגרת האימון הנכונה ברגע שמבינים את המטרות, לוח הזמנים והיסטוריית האימונים שלכם.',
            nextButton: 'יצירת קשר',
        },
        contact: {
            eyebrow: 'יצירת קשר',
            title: 'בואו נתחיל משיחת אימון ממוקדת.',
            lead: 'ספרו לי איפה אתם נמצאים עכשיו, למה אתם מתאמנים ואיזה סוג של ליווי יעזור להפוך את התקופה הקרובה לברורה יותר.',
            contactMethods: 'דרכי קשר',
            supportLabel: 'תמיכת אימון',
            coachingSupportAlt: 'מאמן תומך בספורטאית לפני אימון שחייה',
            form: {
                title: 'בקשה לשיחת ייעוץ חינם',
                intro:
                    'כמה פרטים מספיקים כדי להבין האם יש התאמה לאימון.',
                name: 'שם',
                email: 'אימייל',
                goal: 'מטרה עיקרית',
                message: 'הודעה',
                send: 'שליחת בקשה',
                sending: 'שולח...',
                goals: [
                    'הטריאתלון הראשון שלי',
                    'שיפור ביצועי תחרות',
                    'חזרה לאימונים עקביים',
                    'בניית סבולת / מרחקים ארוכים',
                    'עדיין לא בטוח/ה',
                ],
                success: 'תודה. הבקשה נשלחה בהצלחה.',
                invalid: 'נא לבדוק את השדות המסומנים ולנסות שוב.',
                setupError:
                    'הטופס עדיין לא הוגדר. יש להוסיף מפתח Web3Forms כדי לאפשר שליחה.',
                genericError:
                    'אירעה תקלה בזמן שליחת הבקשה.',
            },
            validation: {
                name: 'נא להזין שם.',
                emailRequired: 'נא להזין כתובת אימייל.',
                emailInvalid: 'נא להזין כתובת אימייל תקינה.',
                goal: 'נא לבחור מטרה עיקרית.',
            },
        },
    },
}

const state = reactive({
    locale: 'en',
})

function getByPath(source, path) {
    return path.split('.').reduce((value, key) => value?.[key], source)
}

function resolveMessage(path) {
    return (
        getByPath(messages[state.locale], path) ??
        getByPath(messages.en, path) ??
        path
    )
}

function updateDocumentLanguage(locale) {
    if (typeof document === 'undefined') {
        return
    }

    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr'
}

export function setLocale(locale) {
    const nextLocale = SUPPORTED_LOCALES.includes(locale) ? locale : 'en'

    state.locale = nextLocale
    updateDocumentLanguage(nextLocale)

    if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, nextLocale)
    }
}

export function initLocale() {
    if (typeof window === 'undefined') {
        updateDocumentLanguage(state.locale)
        return
    }

    const storedLocale = window.localStorage.getItem(STORAGE_KEY)
    const browserLocale = window.navigator.language?.startsWith('he')
        ? 'he'
        : 'en'

    setLocale(storedLocale || browserLocale)
}

export function t(path) {
    const message = resolveMessage(path)
    return typeof message === 'string' ? message : path
}

export function tm(path) {
    return resolveMessage(path)
}

export function isLocale(locale) {
    return state.locale === locale
}

export const i18nState = state
