<template>
    <a
        class="contact-icon-link"
        :class="[
            `contact-icon-link-${method.icon}`,
            `contact-icon-link-${variant}`,
        ]"
        :href="method.href"
        :aria-label="label"
        :title="label"
        :target="method.isExternal ? '_blank' : null"
        :rel="method.isExternal ? 'noopener noreferrer' : null"
    >
        <svg
            v-if="method.icon === 'whatsapp'"
            class="contact-icon-glyph"
            aria-hidden="true"
            viewBox="0 0 24 24"
        >
            <path
                d="M12.04 3.5a8.45 8.45 0 0 0-7.3 12.7l-.98 3.58 3.66-.96a8.45 8.45 0 1 0 4.62-15.32Zm0 1.5a6.95 6.95 0 1 1-3.53 12.94l-.25-.15-2.28.6.61-2.22-.16-.25A6.95 6.95 0 0 1 12.04 5Zm-2.4 3.58c-.16 0-.4.06-.61.29-.21.23-.8.78-.8 1.9s.82 2.2.94 2.36c.12.16 1.6 2.55 3.94 3.48 1.95.77 2.35.62 2.78.58.43-.04 1.38-.56 1.57-1.11.2-.55.2-1.02.14-1.12-.06-.1-.21-.16-.45-.28-.24-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.53.12-.16.24-.61.76-.75.92-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.75-.19-.46-.38-.4-.53-.41h-.45Z"
            />
        </svg>

        <svg
            v-else-if="method.icon === 'email'"
            class="contact-icon-glyph"
            aria-hidden="true"
            viewBox="0 0 24 24"
        >
            <path
                d="M4.75 6.5h14.5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75H4.75c-.97 0-1.75-.78-1.75-1.75v-7.5c0-.97.78-1.75 1.75-1.75Zm.1 1.5 7.15 5.03L19.15 8H4.85Zm14.65 1.4-7.07 4.98a.75.75 0 0 1-.86 0L4.5 9.4v6.35c0 .14.11.25.25.25h14.5c.14 0 .25-.11.25-.25V9.4Z"
            />
        </svg>

        <svg
            v-else-if="method.icon === 'trainingpeaks'"
            class="contact-icon-glyph contact-icon-glyph-trainingpeaks"
            aria-hidden="true"
            viewBox="0 0 21 20"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.95843 0H12.8313L6.00978 15.511H2.13692L8.95843 0ZM2.22005 4.49878H6.09291L3.87286 9.54523H0L2.22005 4.49878ZM11.7408 4.49878L4.9242 20H8.79706L15.6137 4.49878H11.7408ZM12.8509 12.802L17.0513 3.24694H20.9242L16.7237 12.802H12.8509Z"
            />
        </svg>

        <span v-else class="contact-icon-monogram" aria-hidden="true">in</span>

        <span class="contact-icon-tooltip" aria-hidden="true">
            {{ label }}
        </span>
    </a>
</template>

<script>
    import { t } from '../../i18n'

    export default {
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
        computed: {
            label() {
                return t(`contactMethods.${this.method.labelKey}`)
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
        border: 1px solid transparent;
        border-radius: var(--radius-sm);
        background: var(--contact-icon-surface);
        color: var(--contact-icon-color);
        box-shadow: var(--shadow-nav);
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
    .contact-icon-link:hover .contact-icon-tooltip {
        opacity: 1;
        transform: translate(-50%, 0);
    }

    .contact-icon-link-whatsapp {
        --contact-brand-color: var(--clr-brand-whatsapp);
    }

    .contact-icon-link-email {
        --contact-brand-color: var(--clr-brand-email);
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
        background: rgb(255 255 255 / 10%);
        filter: none;
    }

    .contact-icon-glyph {
        inline-size: 1.42rem;
        block-size: 1.42rem;
        fill: currentColor;
    }

    .contact-icon-monogram {
        font-size: 0.96rem;
        font-weight: 900;
        letter-spacing: 0;
        line-height: 1;
    }

    .contact-icon-glyph-trainingpeaks {
        inline-size: 1.5rem;
        block-size: 1.44rem;
    }

    .contact-icon-link-linkedin .contact-icon-monogram {
        font-size: 1.02rem;
    }

    .contact-icon-tooltip {
        position: absolute;
        inset-inline-start: 50%;
        inset-block-start: calc(100% + 0.55rem);
        z-index: 1;
        padding: 0.45rem 0.6rem;
        border-radius: var(--radius-sm);
        background: var(--contact-tooltip-surface);
        color: var(--contact-tooltip-color);
        font-size: 0.78rem;
        font-weight: 700;
        line-height: 1;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transform: translate(-50%, -0.2rem);
        transition:
            opacity 160ms ease,
            transform 160ms ease;
    }
</style>
