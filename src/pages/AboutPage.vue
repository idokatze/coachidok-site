<template>
    <main class="about-page">
        <section class="section about-hero">
            <div class="container about-hero-layout">
                <div class="about-hero-copy">
                    <p class="about-hero-name">{{ coachBio.name }}</p>
                    <h1>{{ coachBio.title }}</h1>
                    <ul
                        class="about-hero-keywords"
                        :aria-label="$t('about.coachingApproach')"
                    >
                        <li
                            v-for="keyword in coachBio.keywords"
                            :key="keyword"
                        >
                            {{ keyword }}
                        </li>
                    </ul>
                    <p class="lead">{{ coachBio.summary }}</p>
                    <p>{{ $t('about.introLead') }}</p>
                </div>

                <div class="about-hero-image-wrap">
                    <img
                        :src="coachPortrait"
                        :alt="$t('about.coachPortraitAlt')"
                    />
                </div>
            </div>
        </section>

        <section class="section about-highlights-section">
            <div class="container">
                <div class="about-highlights">
                    <article
                        v-for="item in coachBio.experience"
                        :key="item.title"
                        class="about-highlight-card"
                    >
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.body }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="section about-story-section">
            <div class="container about-story-layout">
                <div class="about-story-intro">
                    <p class="eyebrow">{{ $t('about.pathEyebrow') }}</p>
                    <h2>{{ $t('about.pathTitle') }}</h2>
                </div>

                <div class="about-story-sections">
                    <article
                        v-for="section in coachBio.sections"
                        :key="section.title"
                        class="about-story-card"
                    >
                        <h3>{{ section.title }}</h3>
                        <p
                            v-for="paragraph in section.paragraphs"
                            :key="paragraph"
                        >
                            {{ paragraph }}
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section class="section about-cta-section">
            <div class="container about-cta">
                <div>
                    <p class="eyebrow">{{ $t('about.ctaEyebrow') }}</p>
                    <h2>{{ $t('about.ctaTitle') }}</h2>
                </div>

                <RouterLink to="/contact" class="btn btn-primary">
                    {{ $t('about.ctaButton') }}
                </RouterLink>
            </div>
        </section>
    </main>
</template>

<script>
    import coachPortrait from '../assets/images/coach-portrait-lakeside.jpg'
    import { tm } from '../i18n'

    export default {
        computed: {
            coachBio() {
                return tm('coachBio')
            },
        },
        data() {
            return {
                coachPortrait,
            }
        },
    }
</script>

<style scoped>
    .about-page {
        background:
            radial-gradient(circle at top, rgb(8 127 163 / 8%), transparent 38%),
            var(--clr-bg);
    }

    .about-hero {
        padding-block-end: clamp(3rem, 6vw, 4.5rem);
    }

    .about-hero-layout {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.95fr);
        align-items: center;
        gap: clamp(2rem, 5vw, 4rem);
    }

    .about-hero-copy {
        display: grid;
        gap: 1rem;
        max-inline-size: 42rem;
    }

    .about-hero-name {
        color: var(--clr-heading);
        font-size: 0.95rem;
        font-weight: 900;
        text-transform: uppercase;
    }

    .about-hero-copy h1 {
        font-size: clamp(2.35rem, 5vw, 4.25rem);
        max-inline-size: 13ch;
    }

    .about-hero-keywords {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, max-content));
        gap: 0.85rem 1.5rem;
        padding-block-end: 0.15rem;
    }

    .about-hero-keywords li {
        display: inline-flex;
        align-items: center;
        gap: 0.65rem;
        color: var(--clr-heading);
        font-size: 0.9rem;
        font-weight: 800;
        line-height: 1.2;
    }

    .about-hero-keywords li::before {
        content: '';
        inline-size: 1.15rem;
        block-size: 2px;
        border-radius: 999px;
        background: var(--clr-primary);
        flex: 0 0 auto;
    }

    .about-hero-image-wrap {
        overflow: hidden;
        border: 1px solid color-mix(in srgb, var(--clr-primary) 14%, transparent);
        border-radius: var(--radius-md);
        background: var(--clr-surface);
        box-shadow: var(--shadow-soft);
    }

    .about-hero-image-wrap img {
        inline-size: 100%;
        aspect-ratio: 4 / 5;
        object-fit: cover;
        object-position: center 20%;
    }

    .about-highlights {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .about-highlight-card,
    .about-story-card,
    .about-cta {
        border: 1px solid var(--clr-border);
        border-radius: var(--radius-md);
        background: color-mix(in srgb, var(--clr-surface) 92%, transparent);
        box-shadow: var(--shadow-nav);
    }

    .about-highlight-card {
        display: grid;
        gap: 0.7rem;
        padding: 1.5rem;
    }

    .about-highlight-card h2 {
        font-size: 1.25rem;
    }

    .about-highlight-card p,
    .about-story-card p {
        color: var(--clr-muted);
    }

    .about-story-layout {
        display: grid;
        grid-template-columns: minmax(15rem, 0.6fr) minmax(0, 1.4fr);
        gap: clamp(1.5rem, 4vw, 3rem);
        align-items: start;
    }

    .about-story-intro {
        display: grid;
        gap: 0.9rem;
        position: sticky;
        top: 6.5rem;
    }

    .about-story-intro h2,
    .about-cta h2 {
        font-size: clamp(1.9rem, 4vw, 3.15rem);
        max-inline-size: 13ch;
    }

    .about-story-sections {
        display: grid;
        gap: 1rem;
    }

    .about-story-card {
        display: grid;
        gap: 0.85rem;
        padding: 1.5rem;
    }

    .about-story-card h3 {
        font-size: 1.2rem;
    }

    .about-cta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        padding: clamp(1.5rem, 4vw, 2rem);
    }

    @media (max-width: 960px) {
        .about-hero-layout,
        .about-story-layout,
        .about-highlights {
            grid-template-columns: 1fr;
        }

        .about-hero-copy h1,
        .about-story-intro h2,
        .about-cta h2 {
            max-inline-size: 100%;
        }

        .about-hero-keywords {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .about-story-intro {
            position: static;
        }
    }

    @media (max-width: 700px) {
        .about-cta {
            flex-direction: column;
            align-items: start;
        }
    }

    @media (max-width: 560px) {
        .about-hero-keywords {
            grid-template-columns: 1fr;
        }
    }
</style>
