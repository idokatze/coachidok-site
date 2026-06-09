<template>
    <main class="coaching-page">
        <section class="section section-tight coaching-hero">
            <div class="container coaching-hero-layout">
                <div class="coaching-copy">
                    <p class="eyebrow">{{ $t('coaching.eyebrow') }}</p>
                    <h1>{{ $t('coaching.title') }}</h1>
                    <p class="lead">{{ $t('coaching.lead') }}</p>

                    <div class="coaching-hero-actions">
                        <RouterLink to="/contact" class="btn btn-primary">
                            {{ $t('coaching.primaryCta') }}
                        </RouterLink>
                        <RouterLink to="/about" class="btn btn-secondary">
                            {{ $t('coaching.secondaryCta') }}
                        </RouterLink>
                    </div>
                </div>

                <div class="coaching-image-wrap">
                    <img
                        :src="coachPortrait"
                        :alt="$t('coaching.coachPortraitAlt')"
                    />
                </div>
            </div>
        </section>

        <section class="section coaching-pillars-section">
            <div class="container">
                <div class="section-heading">
                    <p class="eyebrow">{{ $t('coaching.includesEyebrow') }}</p>
                    <h2>{{ $t('coaching.includesTitle') }}</h2>
                </div>

                <div class="coaching-pillars">
                    <article
                        v-for="pillar in pillars"
                        :key="pillar.title"
                        class="coaching-card"
                    >
                        <h3>{{ pillar.title }}</h3>
                        <p>{{ pillar.body }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="section coaching-process-section">
            <div class="container coaching-process-layout">
                <div class="section-heading">
                    <p class="eyebrow">{{ $t('coaching.processEyebrow') }}</p>
                    <h2>{{ $t('coaching.processTitle') }}</h2>
                </div>

                <ol class="coaching-steps">
                    <li v-for="step in steps" :key="step.title" class="coaching-step">
                        <span class="coaching-step-number">{{ step.number }}</span>
                        <div>
                            <h3>{{ step.title }}</h3>
                            <p>{{ step.body }}</p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>

        <section class="section coaching-cta-section">
            <div class="container coaching-cta">
                <div>
                    <p class="eyebrow">{{ $t('coaching.nextEyebrow') }}</p>
                    <h2>{{ $t('coaching.nextTitle') }}</h2>
                    <p class="lead">{{ $t('coaching.nextLead') }}</p>
                </div>

                <RouterLink to="/contact" class="btn btn-primary">
                    {{ $t('coaching.nextButton') }}
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
            pillars() {
                return tm('coaching.pillars')
            },
            steps() {
                return tm('coaching.steps')
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
    .coaching-page {
        background:
            radial-gradient(circle at top, rgb(8 127 163 / 8%), transparent 36%),
            var(--clr-bg);
    }

    .coaching-hero {
        background: var(--clr-surface-mist);
        padding-block-end: clamp(3rem, 6vw, 4.5rem);
    }

    .coaching-hero-layout {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
        align-items: center;
        gap: clamp(2rem, 4vw, 4rem);
    }

    .coaching-copy {
        display: grid;
        gap: 1.35rem;
    }

    .coaching-copy h1,
    .section-heading h2,
    .coaching-cta h2 {
        font-size: clamp(2.3rem, 5vw, 4.5rem);
        max-inline-size: 12ch;
    }

    .coaching-hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.9rem;
        padding-block-start: 0.4rem;
    }

    .coaching-image-wrap {
        overflow: hidden;
        border: 1px solid color-mix(in srgb, var(--clr-primary) 14%, transparent);
        border-radius: var(--radius-md);
        background: var(--clr-surface);
        box-shadow: var(--shadow-soft);
    }

    .coaching-image-wrap img {
        inline-size: 100%;
        aspect-ratio: 4 / 5;
        object-fit: cover;
        object-position: center 22%;
    }

    .section-heading {
        display: grid;
        gap: 0.9rem;
        margin-block-end: 2rem;
    }

    .coaching-pillars {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.2rem;
    }

    .coaching-card,
    .coaching-step,
    .coaching-cta {
        border: 1px solid var(--clr-border);
        border-radius: var(--radius-md);
        background: var(--clr-surface-plain);
        box-shadow: var(--shadow-nav);
    }

    .coaching-card {
        display: grid;
        gap: 0.85rem;
        padding: 1.5rem;
    }

    .coaching-card h3,
    .coaching-step h3 {
        font-size: 1.15rem;
    }

    .coaching-process-layout {
        display: grid;
        gap: 2rem;
    }

    .coaching-steps {
        display: grid;
        gap: 1rem;
    }

    .coaching-step {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1rem;
        align-items: start;
        padding: 1.35rem 1.5rem;
    }

    .coaching-step-number {
        display: inline-grid;
        place-items: center;
        inline-size: 3rem;
        block-size: 3rem;
        border-radius: 999px;
        background: var(--clr-primary-soft);
        color: var(--clr-primary-dark);
        font-size: 0.95rem;
        font-weight: 900;
    }

    .coaching-step p,
    .coaching-card p {
        color: var(--clr-muted);
    }

    .coaching-cta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        padding: clamp(1.5rem, 4vw, 2rem);
    }

    .coaching-process-section {
        background: var(--clr-surface-tide);
    }

    .coaching-cta-section {
        background: var(--clr-surface-water);
    }

    .coaching-cta .lead {
        max-inline-size: 42rem;
        margin-block-start: 0.8rem;
    }

    @media (max-width: 900px) {
        .coaching-hero-layout,
        .coaching-pillars {
            grid-template-columns: 1fr;
        }

        .coaching-copy h1,
        .section-heading h2,
        .coaching-cta h2 {
            max-inline-size: 100%;
        }
    }

    @media (max-width: 700px) {
        .coaching-step {
            grid-template-columns: 1fr;
        }

        .coaching-cta {
            flex-direction: column;
            align-items: start;
        }
    }
</style>
