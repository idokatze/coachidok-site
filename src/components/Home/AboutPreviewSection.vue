<template>
    <section class="section section-topless about-preview-section">
        <div class="container about-preview-layout">
            <div class="about-preview-intro">
                <h2>{{ coachBio.name }}</h2>
                <p class="about-preview-title">{{ coachBio.title }}</p>
                <ul
                    class="about-preview-keywords"
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

            <div class="about-preview-image-wrap">
                <img
                    :src="coachPortrait"
                    :alt="$t('about.coachPortraitAlt')"
                />
            </div>

            <div class="about-preview-copy">
                <div class="about-preview-body">
                    <p>{{ coachBio.homeIntro }}</p>
                    <p>{{ coachBio.homeCredibility }}</p>
                </div>

                <RouterLink to="/about" class="btn btn-secondary">
                    {{ $t('about.moreAboutMe') }}
                </RouterLink>
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
    .about-preview-section {
        background: var(--clr-surface-plain);
        border-block-start: 1px solid color-mix(in srgb, var(--clr-primary) 16%, transparent);
        box-shadow: inset 0 16px 32px rgb(8 127 163 / 4%);
    }

    .about-preview-layout {
        display: grid;
        grid-template-columns: minmax(14rem, 0.74fr) minmax(0, 1.26fr);
        align-items: start;
        gap: clamp(2rem, 5vw, 4rem);
        padding-block-start: clamp(2.1rem, 4vw, 3rem);
        padding-block-end: var(--section-padding);
    }

    .about-preview-intro {
        grid-column: 1 / -1;
        display: grid;
        gap: 0.9rem;
        max-inline-size: 48rem;
    }

    .about-preview-intro h2 {
        font-size: clamp(2.2rem, 4.5vw, 4rem);
        max-inline-size: 100%;
    }

    .about-preview-title {
        color: var(--clr-primary-dark);
        font-size: clamp(1rem, 2vw, 1.15rem);
        font-weight: 800;
        line-height: 1.4;
    }

    .about-preview-image-wrap {
        justify-self: start;
        overflow: hidden;
        max-inline-size: 24rem;
        border: 1px solid color-mix(in srgb, var(--clr-primary) 16%, transparent);
        border-radius: var(--radius-md);
        background: var(--clr-surface);
        box-shadow: var(--shadow-soft);
    }

    .about-preview-image-wrap img {
        inline-size: 100%;
        aspect-ratio: 4 / 4.55;
        object-fit: cover;
        object-position: center 16%;
    }

    .about-preview-copy {
        display: grid;
        gap: 1.15rem;
        max-inline-size: 42rem;
    }

    .about-preview-body {
        display: grid;
        gap: 0.9rem;
    }

    .about-preview-body p {
        color: var(--clr-text);
        line-height: 1.75;
    }

    .about-preview-keywords {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, max-content));
        gap: 0.85rem 1.5rem;
        padding-block-start: 0.35rem;
    }

    .about-preview-keywords li {
        display: inline-flex;
        align-items: center;
        gap: 0.65rem;
        color: var(--clr-heading);
        font-size: 0.9rem;
        font-weight: 800;
        line-height: 1.2;
    }

    .about-preview-keywords li::before {
        content: '';
        inline-size: 1.15rem;
        block-size: 2px;
        border-radius: 999px;
        background: var(--clr-primary);
        flex: 0 0 auto;
    }

    .about-preview-copy .btn {
        justify-self: start;
        margin-block-start: 0.5rem;
    }

    @media (max-width: 860px) {
        .about-preview-layout {
            grid-template-columns: 1fr;
        }

        .about-preview-image-wrap {
            max-inline-size: min(100%, 22rem);
        }

        .about-preview-keywords {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 560px) {
        .about-preview-layout {
            gap: 1.5rem;
        }

        .about-preview-keywords {
            grid-template-columns: 1fr;
        }
    }
</style>
