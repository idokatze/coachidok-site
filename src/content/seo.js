const SITE_URL = 'https://coachidok.com'

export const publicRoutes = ['/', '/about', '/coaching', '/contact']

export const seoByPath = {
    '/': {
        title: 'Coach Ido K | Personal Triathlon & Endurance Coaching',
        description:
            'Personal triathlon and endurance coaching from Ido Katzenellenbogen, bringing 15+ years of national-level coaching experience to serious athletes.',
    },
    '/about': {
        title: 'About Coach Ido | Triathlon & Endurance Coach',
        description:
            'Meet Ido Katzenellenbogen, a personal endurance coach with 15+ years of experience across national teams, junior development, and age-group sport.',
    },
    '/coaching': {
        title: 'Personal Triathlon & Endurance Coaching | Coach Ido K',
        description:
            'Explore personal coaching built around clear planning, regular communication, thoughtful adjustment, and your real-life endurance goals.',
    },
    '/contact': {
        title: 'Book a Free Coaching Consultation | Coach Ido K',
        description:
            'Tell Coach Ido about your triathlon or endurance goals and start with a free consultation about the coaching support that fits you.',
    },
}

export function normalizeSeoPath(path = '/') {
    const cleanPath = path.split(/[?#]/)[0].replace(/\/+$/, '')
    return cleanPath || '/'
}

export function getSeoForPath(path = '/') {
    const normalizedPath = normalizeSeoPath(path)
    const page = seoByPath[normalizedPath] || seoByPath['/']

    return {
        ...page,
        path: normalizedPath,
        canonicalUrl: `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`,
        imageUrl: `${SITE_URL}/og-hero.jpg`,
    }
}

export function getStructuredData(path = '/') {
    const seo = getSeoForPath(path)

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': `${SITE_URL}/#ido-katzenellenbogen`,
                name: 'Ido Katzenellenbogen',
                alternateName: 'Coach Ido K',
                url: `${SITE_URL}/`,
                image: seo.imageUrl,
                jobTitle: 'Personal Triathlon & Endurance Coach',
                knowsAbout: [
                    'Triathlon coaching',
                    'Endurance coaching',
                    'Junior athlete development',
                    'Long-course triathlon',
                    'Swimming',
                    'Cycling',
                    'Running',
                ],
                sameAs: [
                    'https://www.trainingpeaks.com/coach/idok',
                    'https://www.linkedin.com/in/idokatze',
                ],
            },
            {
                '@type': 'Service',
                '@id': `${SITE_URL}/#coaching-service`,
                name: 'Personal Triathlon & Endurance Coaching',
                serviceType: 'Triathlon and endurance coaching',
                url: `${SITE_URL}/coaching`,
                provider: {
                    '@id': `${SITE_URL}/#ido-katzenellenbogen`,
                },
            },
            {
                '@type': 'WebPage',
                '@id': `${seo.canonicalUrl}#webpage`,
                url: seo.canonicalUrl,
                name: seo.title,
                description: seo.description,
                inLanguage: 'en',
                about: {
                    '@id': `${SITE_URL}/#coaching-service`,
                },
            },
        ],
    }
}
