<template>
    <button
        v-if="isCopyAction"
        class="contact-icon-link"
        :class="[
            `contact-icon-link-${method.icon}`,
            `contact-icon-link-${variant}`,
        ]"
        type="button"
        :aria-label="baseLabel"
        :title="baseLabel"
        @click="handleCopy"
    >
        <ContactMethodIcon :icon="method.icon" />

        <span class="contact-icon-tooltip" :class="{ 'contact-icon-tooltip-active': Boolean(feedbackKey) }" aria-hidden="true">
            {{ tooltipLabel }}
        </span>
    </button>

    <a
        v-else
        class="contact-icon-link"
        :class="[
            `contact-icon-link-${method.icon}`,
            `contact-icon-link-${variant}`,
        ]"
        :href="method.href"
        :aria-label="baseLabel"
        :title="baseLabel"
        :target="method.isExternal ? '_blank' : null"
        :rel="method.isExternal ? 'noopener noreferrer' : null"
    >
        <ContactMethodIcon :icon="method.icon" />

        <span class="contact-icon-tooltip" :class="{ 'contact-icon-tooltip-active': Boolean(feedbackKey) }" aria-hidden="true">
            {{ tooltipLabel }}
        </span>
    </a>
</template>

<script>
    import ContactMethodIcon from './ContactMethodIcon.vue'
    import { t } from '../../i18n'

    export default {
        components: {
            ContactMethodIcon,
        },
        props: {
            method: {
                type: Object,
                required: true,
            },
            variant: {
                type: String,
                default: 'brand',
            },
        },
        data() {
            return {
                feedbackKey: '',
                feedbackTimer: null,
            }
        },
        computed: {
            isCopyAction() {
                return this.method.action === 'copy'
            },
            baseLabel() {
                return t(this.method.labelKey)
            },
            tooltipLabel() {
                return this.feedbackKey ? t(this.feedbackKey) : this.baseLabel
            },
        },
        beforeUnmount() {
            if (this.feedbackTimer) {
                window.clearTimeout(this.feedbackTimer)
            }
        },
        methods: {
            async handleCopy() {
                try {
                    await navigator.clipboard.writeText(this.method.copyValue)
                    this.setFeedback(this.method.copySuccessKey)
                } catch {
                    this.setFeedback('contact.copyError')
                }
            },
            setFeedback(key) {
                this.feedbackKey = key

                if (this.feedbackTimer) {
                    window.clearTimeout(this.feedbackTimer)
                }

                this.feedbackTimer = window.setTimeout(() => {
                    this.feedbackKey = ''
                    this.feedbackTimer = null
                }, 2200)
            },
        },
    }
</script>

<style scoped>
    .contact-icon-link {
        --contact-brand-color: var(--clr-primary);
        --contact-icon-surface: var(--contact-brand-color);
        --contact-icon-color: var(--clr-brand-on-color);
        --contact-tooltip-surface: var(--clr-heading);
        --contact-tooltip-color: var(--clr-surface);

        position: relative;
        display: inline-grid;
        place-items: center;
        inline-size: 3rem;
        block-size: 3rem;
        padding: 0;
        border: 1px solid transparent;
        border-radius: var(--radius-sm);
        background: var(--contact-icon-surface);
        color: var(--contact-icon-color);
        box-shadow: var(--shadow-nav);
        cursor: pointer;
        transition:
            transform 160ms ease,
            filter 160ms ease,
            background-color 160ms ease,
            border-color 160ms ease;
    }

    .contact-icon-link:hover {
        filter: brightness(0.98);
        transform: translateY(-1px);
    }

    .contact-icon-link:focus-visible .contact-icon-tooltip,
    .contact-icon-link:hover .contact-icon-tooltip,
    .contact-icon-tooltip-active {
        opacity: 1;
        transform: translate(-50%, 0);
    }

    .contact-icon-link-whatsapp {
        --contact-brand-color: var(--clr-brand-whatsapp);
    }

    .contact-icon-link-email {
        --contact-brand-color: var(--clr-brand-email);
    }

    .contact-icon-link-phone {
        --contact-brand-color: var(--clr-heading);
    }

    .contact-icon-link-trainingpeaks {
        --contact-brand-color: var(--clr-brand-trainingpeaks);
    }

    .contact-icon-link-linkedin {
        --contact-brand-color: var(--clr-brand-linkedin);
    }

    .contact-icon-link-footer {
        --contact-icon-surface: rgb(255 255 255 / 6%);
        --contact-icon-color: var(--clr-surface);

        border-color: rgb(255 255 255 / 10%);
        box-shadow: none;
    }

    .contact-icon-link-footer:hover {
        --contact-icon-surface: var(--contact-brand-color);
        --contact-icon-color: var(--clr-brand-on-color);

        background: var(--contact-icon-surface);
        filter: none;
    }

    .contact-icon-link-linkedin :deep(.contact-icon-monogram) {
        font-size: 1.02rem;
    }

    .contact-icon-tooltip {
        position: absolute;
        left: 50%;
        top: calc(100% + 0.55rem);
        z-index: 1;
        padding: 0.45rem 0.6rem;
        border-radius: var(--radius-sm);
        background: var(--contact-tooltip-surface);
        color: var(--contact-tooltip-color);
        font-size: 0.78rem;
        font-weight: 700;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        inline-size: max-content;
        max-inline-size: 10rem;
        opacity: 0;
        pointer-events: none;
        transform: translate(-50%, -0.2rem);
        transition:
            opacity 160ms ease,
            transform 160ms ease;
    }
</style>
