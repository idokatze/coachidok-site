<template>
    <section class="section about-cta-section">
        <div class="container about-cta">
            <p class="eyebrow">{{ $t('about.ctaEyebrow') }}</p>

            <div class="about-cta-main">
                <h2>{{ $t('about.ctaTitle') }}</h2>

                <RouterLink to="/contact" class="btn btn-primary">
                    {{ $t('about.ctaButton') }}
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .about-cta {
        display: grid;
        gap: 1rem;
    }

    .about-cta h2 {
        font-size: clamp(1.9rem, 4vw, 3.15rem);
        max-inline-size: 13ch;
    }

    .about-cta-section {
        background: var(--clr-surface-water);
        border-block-start: 1px solid color-mix(in srgb, var(--clr-primary) 16%, transparent);
    }

    .about-cta-main {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: center;
        gap: 1.5rem;
    }

    .about-cta-main .btn {
        align-self: center;
    }

    @media (max-width: 960px) {
        .about-cta h2 {
            max-inline-size: 100%;
        }
    }

    @media (max-width: 700px) {
        .about-cta-main {
            grid-template-columns: 1fr;
            align-items: start;
        }
    }
</style>
