<template>
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
</template>

<script>
    import { tm } from '../../i18n'

    export default {
        computed: {
            coachBio() {
                return tm('coachBio')
            },
        },
    }
</script>

<style scoped>
    .about-story-layout {
        display: grid;
        grid-template-columns: minmax(15rem, 0.6fr) minmax(0, 1.4fr);
        gap: clamp(1.5rem, 4vw, 3rem);
        align-items: start;
    }

    .about-story-section {
        background: var(--clr-surface-tide);
    }

    .about-story-intro {
        display: grid;
        gap: 0.9rem;
        position: sticky;
        top: 6.5rem;
    }

    .about-story-intro h2 {
        font-size: clamp(1.9rem, 4vw, 3.15rem);
        max-inline-size: 13ch;
    }

    .about-story-sections {
        display: grid;
        gap: 1rem;
    }

    .about-story-card {
        border: 1px solid var(--clr-border);
        border-radius: var(--radius-md);
        background: var(--clr-surface-plain);
        box-shadow: var(--shadow-nav);
        display: grid;
        gap: 0.85rem;
        padding: 1.5rem;
    }

    .about-story-card h3 {
        font-size: 1.2rem;
    }

    .about-story-card p {
        color: var(--clr-muted);
    }

    @media (max-width: 960px) {
        .about-story-layout {
            grid-template-columns: 1fr;
        }

        .about-story-intro {
            position: static;
        }

        .about-story-intro h2 {
            max-inline-size: 100%;
        }
    }
</style>
