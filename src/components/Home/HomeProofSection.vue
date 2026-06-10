<template>
    <section class="section section-tight home-proof-section">
        <div class="container home-proof-layout">
            <div class="home-proof-intro">
                <p class="eyebrow">{{ $t('home.proofEyebrow') }}</p>
                <h2>{{ $t('home.proofTitle') }}</h2>
                <p class="lead">{{ $t('home.proofLead') }}</p>
            </div>

            <div class="home-proof-cards">
                <article
                    v-for="item in proofItems"
                    :key="item.label"
                    class="home-proof-card"
                >
                    <p class="home-proof-value">{{ item.value }}</p>
                    <p class="home-proof-label">{{ item.label }}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            proofItems() {
                return this.$tm('home.proofItems')
            },
        },
    }
</script>

<style scoped>
    .home-proof-section {
        background: var(--clr-surface-water);
        border-block-end: 1px solid color-mix(in srgb, var(--clr-primary) 12%, transparent);
    }

    .home-proof-layout {
        display: grid;
        gap: 2rem;
    }

    .home-proof-intro {
        display: grid;
        gap: 0.9rem;
        max-inline-size: 52rem;
    }

    .home-proof-intro h2 {
        font-size: clamp(2rem, 4vw, 3.25rem);
        max-inline-size: 14ch;
    }

    .home-proof-cards {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .home-proof-card {
        display: grid;
        gap: 0.45rem;
        padding: 1.4rem;
        border: 1px solid color-mix(in srgb, var(--clr-primary) 14%, transparent);
        border-radius: var(--radius-md);
        background: color-mix(in srgb, var(--clr-surface) 94%, transparent);
        box-shadow: var(--shadow-nav);
    }

    .home-proof-value {
        color: var(--clr-primary-dark);
        font-size: clamp(1.5rem, 3vw, 2rem);
        font-weight: 900;
        line-height: 1;
    }

    .home-proof-label {
        color: var(--clr-text);
        font-weight: 800;
        line-height: 1.4;
    }

    @media (max-width: 860px) {
        .home-proof-intro h2 {
            max-inline-size: 100%;
        }

        .home-proof-cards {
            grid-template-columns: 1fr;
        }
    }
</style>
