<template>
    <section class="hero-section">
        <div class="hero-background" aria-hidden="true">
            <img src="../../assets/images/hero.png" alt="" />
        </div>

        <div class="container hero-container">
            <div class="hero-content">
                <p class="eyebrow">Coach Ido K</p>

                <h1>Triathlon Coaching for Athletes Who Want to Train Smarter</h1>

                <p class="lead">
                    Personalized endurance coaching built around your goals,
                    your schedule, and your life.
                </p>

                <RouterLink to="/contact" class="btn btn-primary">
                    Book a Free Consultation
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .hero-section {
        position: relative;
        isolation: isolate;
        display: grid;
        align-items: start;
        min-height: clamp(40rem, calc(100svh - 4rem), 50rem);
        overflow: hidden;
        padding-block: clamp(3rem, 5vw, 3.5rem);
        background: var(--clr-heading);
    }

    .hero-section::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background:
            linear-gradient(
                90deg,
                var(--clr-hero-overlay-start),
                var(--clr-hero-overlay-end)
            ),
            linear-gradient(0deg, var(--clr-hero-overlay-depth), transparent 45%);
    }

    .hero-background {
        position: absolute;
        inset: 0;
        z-index: -2;
    }

    .hero-background img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .hero-container {
        width: min(calc(100% - 2 * var(--page-padding)), var(--container-max));
    }

    .hero-content {
        display: grid;
        justify-items: start;
        gap: 0.9rem;
        max-width: 36rem;
        text-shadow: var(--shadow-text);
    }

    .hero-content .eyebrow {
        color: var(--clr-primary-soft);
    }

    .hero-content h1 {
        max-width: 22ch;
        font-size: clamp(2.2rem, 3.4vw, 3.1rem);
        color: var(--clr-surface);
    }

    .hero-content .lead {
        max-width: 36rem;
        color: var(--clr-hero-text-muted);
    }

    @media (max-width: 860px) {
        .hero-section {
            min-height: clamp(38rem, calc(100svh - 6rem), 46rem);
            padding-block: clamp(2.75rem, 8vw, 4rem);
        }

        .hero-content h1 {
            max-width: 17ch;
            font-size: clamp(2.2rem, 9.5vw, 3.25rem);
        }
    }

    @media (max-width: 560px) {
        .hero-section::before {
            background:
                linear-gradient(
                    90deg,
                    var(--clr-hero-overlay-mobile-start),
                    var(--clr-hero-overlay-mobile-end)
                ),
                linear-gradient(
                    0deg,
                    var(--clr-hero-overlay-mobile-depth),
                    transparent 45%
                );
        }

        .hero-background img {
            object-position: 58% center;
        }
    }
</style>
