<template>
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
</template>

<style scoped>
    .coaching-cta {
        border: 1px solid var(--clr-border);
        border-radius: var(--radius-md);
        background: var(--clr-surface-plain);
        box-shadow: var(--shadow-nav);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        padding: clamp(1.5rem, 4vw, 2rem);
    }

    .coaching-cta h2 {
        font-size: clamp(2.3rem, 5vw, 4.5rem);
        max-inline-size: 12ch;
    }

    .coaching-cta-section {
        background: var(--clr-surface-water);
        border-block-start: 1px solid color-mix(in srgb, var(--clr-primary) 16%, transparent);
    }

    .coaching-cta .lead {
        max-inline-size: 42rem;
        margin-block-start: 0.8rem;
    }

    @media (max-width: 900px) {
        .coaching-cta h2 {
            max-inline-size: 100%;
        }
    }

    @media (max-width: 700px) {
        .coaching-cta {
            flex-direction: column;
            align-items: start;
        }
    }
</style>
