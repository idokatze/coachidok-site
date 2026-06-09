<template>
    <header class="app-header">
        <div class="container header-container">
            <HeaderBrandLink @navigate="closeNav" />

            <div class="header-actions">
                <HeaderLocaleSwitch
                    :is-hebrew="isLocale('he')"
                    @toggle="toggleLocale"
                />

                <button
                    class="nav-toggle"
                    type="button"
                    :aria-expanded="isNavOpen"
                    aria-controls="main-nav"
                    :aria-label="$t('header.openMenu')"
                    @click="toggleNav"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <HeaderNavPanel :is-open="isNavOpen" @close="closeNav" />
        </div>
    </header>
</template>

<script>
    import HeaderBrandLink from './HeaderBrandLink.vue'
    import HeaderLocaleSwitch from './HeaderLocaleSwitch.vue'
    import HeaderNavPanel from './HeaderNavPanel.vue'
    import { isLocale, setLocale } from '../../i18n'

    export default {
        components: {
            HeaderBrandLink,
            HeaderLocaleSwitch,
            HeaderNavPanel,
        },
        data() {
            return {
                isNavOpen: false,
            }
        },
        mounted() {
            window.addEventListener('keydown', this.handleEscape)
        },
        beforeUnmount() {
            window.removeEventListener('keydown', this.handleEscape)
        },
        methods: {
            toggleLocale() {
                setLocale(this.isLocale('he') ? 'en' : 'he')
            },
            handleEscape(event) {
                if (event.key === 'Escape' && this.isNavOpen) {
                    this.closeNav()
                }
            },
            isLocale,
            toggleNav() {
                this.isNavOpen = !this.isNavOpen
            },
            closeNav() {
                this.isNavOpen = false
            },
        },
    }
</script>

<style scoped>
    .app-header {
        position: sticky;
        top: 0;
        z-index: 20;
        background: color-mix(in srgb, var(--clr-heading) 94%, black);
        border-bottom: 1px solid color-mix(in srgb, var(--clr-primary) 20%, transparent);
    }

    @supports not (background: color-mix(in srgb, white, black)) {
        .app-header {
            background: var(--clr-heading);
        }
    }

    .app-header::after {
        content: '';
        position: absolute;
        inset-inline: 0;
        inset-block-end: -1px;
        height: 1px;
        background: linear-gradient(
            var(--hero-overlay-angle),
            transparent,
            color-mix(in srgb, var(--clr-primary) 36%, transparent),
            transparent
        );
        pointer-events: none;
    }

    @supports not (background: color-mix(in srgb, white, black)) {
        .app-header::after {
            background: var(--clr-border);
        }
    }

    .header-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 4.75rem;
        gap: 1.5rem;
        direction: ltr;
    }

    .header-actions {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .nav-toggle {
        display: none;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        padding: 0;
        border: 1px solid color-mix(in srgb, var(--clr-surface) 14%, transparent);
        border-radius: var(--radius-sm);
        background: color-mix(in srgb, black 24%, var(--clr-heading));
        color: var(--clr-surface);
        cursor: pointer;
    }

    .nav-toggle span {
        position: absolute;
        width: 1.25rem;
        height: 2px;
        border-radius: 999px;
        background: currentColor;
        transform-origin: center;
        transition:
            opacity 160ms ease,
            transform 160ms ease;
    }

    .nav-toggle span:nth-child(1) {
        transform: translateY(-0.4rem);
    }

    .nav-toggle span:nth-child(3) {
        transform: translateY(0.4rem);
    }

    .nav-toggle[aria-expanded='true'] span:nth-child(1) {
        transform: rotate(45deg);
    }

    .nav-toggle[aria-expanded='true'] span:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle[aria-expanded='true'] span:nth-child(3) {
        transform: rotate(-45deg);
    }

    @media (max-width: 700px) {
        .header-container {
            padding-block: 1rem;
        }

        .nav-toggle {
            position: relative;
            display: inline-flex;
        }
    }
</style>
