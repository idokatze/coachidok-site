<template>
    <section class="section section-tight about-hero">
        <div class="container about-hero-layout">
            <div class="about-hero-intro">
                <h1>{{ coachBio.name }}</h1>
                <p class="about-hero-title">{{ coachBio.title }}</p>
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
            </div>

            <div class="about-hero-side">
                <div class="about-hero-image-wrap">
                    <img
                        :src="coachPortrait"
                        :alt="$t('about.coachPortraitAlt')"
                    />
                </div>

                <div class="about-hero-highlights">
                    <article
                        v-for="item in coachBio.experience"
                        :key="item.title"
                        class="about-highlight-card"
                    >
                        <h2>{{ item.title }}</h2>
                        <ul
                            v-if="item.points"
                            class="about-highlight-points"
                        >
                            <li
                                v-for="point in item.points"
                                :key="point"
                            >
                                {{ point }}
                            </li>
                        </ul>
                        <p v-else>{{ item.body }}</p>
                    </article>
                </div>
            </div>

            <div class="about-hero-copy">
                <div class="about-hero-body">
                    <p>{{ $t('about.introLead') }}</p>
                    <p>{{ coachBio.homeIntro }}</p>
                    <p>{{ coachBio.homeCredibility }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import coachPortrait from '../../assets/images/coach-portrait-lakeside.jpg'
    import { tm } from '../../i18n'

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
    .about-hero {
        background:
            radial-gradient(circle at top, rgb(8 127 163 / 10%), transparent 38%),
            var(--clr-surface-mist);
        padding-block-end: clamp(3rem, 6vw, 4.5rem);
    }

    .about-hero-layout {
        display: grid;
        grid-template-columns: minmax(16rem, 22rem) minmax(0, 1fr);
        align-items: start;
        gap: clamp(2rem, 5vw, 4rem);
    }

    .about-hero-intro {
        grid-column: 1 / -1;
        display: grid;
        gap: 0.9rem;
        max-inline-size: 100%;
    }

    .about-hero-intro h1 {
        font-size: clamp(2.35rem, 5vw, 4rem);
        max-inline-size: 100%;
    }

    .about-hero-title {
        color: var(--clr-primary-dark);
        font-size: clamp(1rem, 2vw, 1.15rem);
        font-weight: 800;
        line-height: 1.4;
    }

    .about-hero-keywords {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, max-content));
        justify-content: start;
        gap: 0.85rem 1.1rem;
        padding-block-start: 0.35rem;
    }

    .about-hero-keywords li {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
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

    .about-hero-side {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: minmax(14rem, 22rem) minmax(0, 1fr);
        gap: 1.25rem;
        align-items: start;
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
        aspect-ratio: 4 / 4.85;
        object-fit: cover;
        object-position: center 16%;
    }

    .about-hero-highlights {
        display: grid;
        gap: 0.85rem;
        align-content: start;
    }

    .about-hero-copy {
        grid-column: 1 / -1;
        display: grid;
        gap: 1.15rem;
        max-inline-size: 100%;
    }

    .about-hero-body {
        display: grid;
        gap: 0.9rem;
    }

    .about-hero-body p {
        color: var(--clr-text);
        line-height: 1.75;
    }

    .about-highlight-card {
        border: 1px solid var(--clr-border);
        border-radius: var(--radius-md);
        background: var(--clr-surface-plain);
        box-shadow: var(--shadow-nav);
        display: grid;
        gap: 0.7rem;
        padding: 1.5rem;
    }

    .about-highlight-card h2 {
        font-size: 1.25rem;
    }

    .about-highlight-points {
        display: grid;
        gap: 0.55rem;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .about-highlight-points li {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: start;
        column-gap: 0.45rem;
        color: var(--clr-muted);
        line-height: 1.5;
    }

    .about-highlight-points li::before {
        content: '•';
        color: var(--clr-primary);
        font-weight: 900;
    }

    .about-highlight-card p {
        color: var(--clr-muted);
    }

    @media (max-width: 960px) {
        .about-hero-layout {
            grid-template-columns: 1fr;
        }

        .about-hero-intro h1 {
            max-inline-size: 100%;
        }

        .about-hero-keywords {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 700px) {
        .about-hero-side {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 560px) {
        .about-hero-keywords {
            grid-template-columns: 1fr;
        }
    }
</style>
