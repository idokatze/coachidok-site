<template>
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
</template>

<script>
    import { tm } from '../../i18n'

    export default {
        computed: {
            steps() {
                return tm('coaching.steps')
            },
        },
    }
</script>

<style scoped>
    .section-heading {
        display: grid;
        gap: 0.9rem;
    }

    .section-heading h2 {
        font-size: clamp(2.3rem, 5vw, 4.5rem);
        max-inline-size: 12ch;
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
        border: 1px solid var(--clr-border);
        border-radius: var(--radius-md);
        background: var(--clr-surface-plain);
        box-shadow: var(--shadow-nav);
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

    .coaching-step h3 {
        font-size: 1.15rem;
    }

    .coaching-step p {
        color: var(--clr-muted);
    }

    .coaching-process-section {
        background: var(--clr-surface-deep);
    }

    @media (max-width: 900px) {
        .section-heading h2 {
            max-inline-size: 100%;
        }
    }

    @media (max-width: 700px) {
        .coaching-step {
            grid-template-columns: 1fr;
        }
    }
</style>
