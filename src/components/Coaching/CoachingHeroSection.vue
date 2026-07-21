<template>
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
                    :srcset="`${coachPortraitSmall} 800w, ${coachPortrait} 1600w`"
                    :alt="$t('coaching.coachPortraitAlt')"
                    decoding="async"
                    sizes="(max-width: 900px) 92vw, 40vw"
                    width="1600"
                    height="1067"
                />
            </div>
        </div>
    </section>
</template>

<script>
    import coachPortrait from '../../assets/images/coach-supporting-swimmer-1600.jpg'
    import coachPortraitSmall from '../../assets/images/coach-supporting-swimmer-800.jpg'

    export default {
        data() {
            return {
                coachPortrait,
                coachPortraitSmall,
            }
        },
    }
</script>

<style scoped>
    .coaching-hero {
        background:
            radial-gradient(circle at top, rgb(8 127 163 / 10%), transparent 38%),
            var(--clr-surface-mist);
        padding-block-end: clamp(3rem, 6vw, 4.5rem);
    }

    .coaching-hero-layout {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
        align-items: start;
        gap: clamp(2rem, 4vw, 4rem);
    }

    .coaching-copy {
        display: grid;
        gap: 1.35rem;
    }

    .coaching-copy h1 {
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
        aspect-ratio: 4 / 3.35;
        object-fit: cover;
        object-position: center 34%;
    }

    @media (max-width: 900px) {
        .coaching-hero-layout {
            grid-template-columns: 1fr;
        }

        .coaching-copy h1 {
            max-inline-size: 100%;
        }
    }
</style>
