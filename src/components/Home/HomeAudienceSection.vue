<template>
    <section class="section home-audience-section">
        <div class="container home-audience-layout">
            <div class="home-audience-intro">
                <p class="eyebrow">{{ $t('home.audienceEyebrow') }}</p>
                <h2>{{ $t('home.audienceTitle') }}</h2>
            </div>

            <div class="home-audience-cards">
                <article
                    v-for="card in audienceCards"
                    :key="card.title"
                    class="home-audience-card"
                >
                    <h3>{{ card.title }}</h3>
                    <p>{{ card.body }}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            audienceCards() {
                return this.$tm('home.audienceCards')
            },
        },
    }
</script>

<style scoped>
    .home-audience-section {
        background: var(--clr-surface-tide);
    }

    .home-audience-layout {
        display: grid;
        gap: 2rem;
    }

    .home-audience-intro {
        display: grid;
        gap: 0.9rem;
        max-inline-size: 46rem;
    }

    .home-audience-intro h2 {
        font-size: clamp(1.95rem, 4vw, 3rem);
        max-inline-size: 16ch;
    }

    .home-audience-cards {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .home-audience-card {
        display: grid;
        gap: 0.75rem;
        padding: 1.45rem;
        border: 1px solid var(--clr-border);
        border-radius: var(--radius-md);
        background: var(--clr-surface-plain);
        box-shadow: var(--shadow-nav);
    }

    .home-audience-card h3 {
        font-size: 1.15rem;
    }

    .home-audience-card p {
        color: var(--clr-muted);
    }

    @media (max-width: 860px) {
        .home-audience-intro h2 {
            max-inline-size: 100%;
        }

        .home-audience-cards {
            grid-template-columns: 1fr;
        }
    }
</style>
