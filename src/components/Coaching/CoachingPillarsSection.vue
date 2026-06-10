<template>
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
</template>

<script>
    import { tm } from '../../i18n'

    export default {
        computed: {
            pillars() {
                return tm('coaching.pillars')
            },
        },
    }
</script>

<style scoped>
    .section-heading {
        display: grid;
        gap: 0.9rem;
        margin-block-end: 2rem;
    }

    .section-heading h2 {
        font-size: clamp(2.3rem, 5vw, 4.5rem);
        max-inline-size: 12ch;
    }

    .coaching-pillars {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.2rem;
    }

    .coaching-pillars-section {
        background: var(--clr-surface-plain);
        border-block: 1px solid color-mix(in srgb, var(--clr-primary) 12%, transparent);
    }

    .coaching-card {
        border: 1px solid var(--clr-border);
        border-radius: var(--radius-md);
        background: var(--clr-surface-plain);
        box-shadow: var(--shadow-nav);
        display: grid;
        gap: 0.85rem;
        padding: 1.5rem;
    }

    .coaching-card h3 {
        font-size: 1.15rem;
    }

    .coaching-card p {
        color: var(--clr-muted);
    }

    @media (max-width: 900px) {
        .coaching-pillars {
            grid-template-columns: 1fr;
        }

        .section-heading h2 {
            max-inline-size: 100%;
        }
    }
</style>
