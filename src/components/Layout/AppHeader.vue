<template>
    <header class="app-header">
        <div class="container header-container">
            <RouterLink to="/" class="logo" @click="closeNav">
                <span class="logo-mark" aria-hidden="true">
                    <img :src="logoMark" alt="" />
                </span>
                <span class="logo-text">
                    <span class="logo-name">{{ brand.name }}</span>
                    <span class="logo-subtitle">{{ brand.subtitle }}</span>
                </span>
            </RouterLink>

            <div class="header-actions">
                <button
                    class="lang-switch"
                    :class="{ 'lang-switch-he': isLocale('he') }"
                    type="button"
                    role="switch"
                    :aria-checked="isLocale('he')"
                    :aria-label="$t('common.localeToggle')"
                    @click="toggleLocale"
                >
                    <span class="lang-switch-thumb"></span>
                    <span
                        class="lang-switch-button"
                        :class="{ 'lang-switch-button-active': isLocale('en') }"
                    >
                        {{ $t('header.locale.en') }}
                    </span>
                    <span
                        class="lang-switch-button"
                        :class="{ 'lang-switch-button-active': isLocale('he') }"
                    >
                        {{ $t('header.locale.he') }}
                    </span>
                </button>

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

            <button
                class="nav-backdrop"
                type="button"
                :class="{ 'nav-backdrop-open': isNavOpen }"
                :aria-label="$t('header.closeMenu')"
                @click="closeNav"
            ></button>

            <nav
                id="main-nav"
                class="nav"
                :class="{ 'nav-open': isNavOpen }"
                :aria-label="$t('header.primaryNav')"
            >
                <div class="nav-panel-header">
                    <p>{{ $t('header.menu') }}</p>

                    <button
                        class="nav-close"
                        type="button"
                        :aria-label="$t('header.closeMenu')"
                        @click="closeNav"
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div class="nav-groups">
                    <ul class="nav-list">
                        <li>
                            <RouterLink to="/" @click="closeNav">
                                <span>{{ $t('header.nav.home') }}</span>
                                <span class="nav-arrow" aria-hidden="true"></span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about" @click="closeNav">
                                <span>{{ $t('header.nav.about') }}</span>
                                <span class="nav-arrow" aria-hidden="true"></span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/coaching" @click="closeNav">
                                <span>{{ $t('header.nav.coaching') }}</span>
                                <span class="nav-arrow" aria-hidden="true"></span>
                            </RouterLink>
                        </li>
                    </ul>

                    <div class="nav-contact-group">
                        <RouterLink
                            to="/contact"
                            class="nav-action"
                            @click="closeNav"
                        >
                            <span>{{ $t('header.nav.contact') }}</span>
                            <span class="nav-arrow" aria-hidden="true"></span>
                        </RouterLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    import logoMark from '../../assets/images/baby-goat.svg'
    import { brand } from '../../content/brand'
    import { isLocale, setLocale } from '../../i18n'

    export default {
        data() {
            return {
                brand,
                isNavOpen: false,
                logoMark,
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

    .logo {
        display: inline-flex;
        align-items: center;
        gap: 0.7rem;
        color: var(--clr-surface);
        line-height: 1;
    }

    .logo-mark {
        display: inline-grid;
        place-items: center;
        inline-size: 2.45rem;
        block-size: 2.45rem;
        border: 1px solid color-mix(in srgb, var(--clr-surface) 18%, transparent);
        border-radius: var(--radius-sm);
        background: color-mix(in srgb, black 28%, var(--clr-heading));
        overflow: hidden;
        padding: 0.28rem;
        box-shadow: inset 0 0 0 1px rgb(255 255 255 / 5%);
    }

    .logo-mark img {
        inline-size: 100%;
        block-size: 100%;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }

    .logo-text {
        display: grid;
        gap: 0.2rem;
    }

    .logo-name {
        color: var(--clr-surface);
        font-size: 1rem;
        font-weight: 900;
    }

    .logo-subtitle {
        color: color-mix(in srgb, var(--clr-primary-soft) 74%, white);
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0;
        text-transform: uppercase;
    }

    .header-actions {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .lang-switch {
        position: relative;
        display: inline-grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-items: center;
        inline-size: 5.75rem;
        flex: 0 0 auto;
        padding: 0.2rem;
        border: 1px solid color-mix(in srgb, var(--clr-surface) 12%, transparent);
        border-radius: var(--radius-sm);
        background: rgb(255 255 255 / 4%);
        color: inherit;
        cursor: pointer;
        direction: ltr;
        isolation: isolate;
        overflow: hidden;
    }

    .lang-switch-button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
        min-inline-size: 2.6rem;
        block-size: 2.3rem;
        padding: 0.45rem 0.7rem;
        border-radius: calc(var(--radius-sm) - 1px);
        color: rgb(255 255 255 / 72%);
        font-size: 0.8rem;
        font-weight: 800;
        line-height: 1;
        text-align: center;
    }

    .lang-switch-thumb {
        position: absolute;
        inset-block: 0.2rem;
        inset-inline-start: 0.2rem;
        inline-size: calc(50% - 0.2rem);
        border-radius: calc(var(--radius-sm) - 1px);
        background: rgb(255 255 255 / 12%);
        transition: transform 180ms ease;
    }

    .lang-switch.lang-switch-he .lang-switch-thumb {
        transform: translateX(100%);
    }

    .lang-switch-button-active {
        color: var(--clr-surface);
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

    .nav-list {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.35rem;
        border: 1px solid color-mix(in srgb, var(--clr-surface) 10%, transparent);
        border-radius: var(--radius-md);
        background: rgb(255 255 255 / 4%);
        box-shadow: none;
    }

    .nav-groups {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        direction: ltr;
    }

    .nav-contact-group {
        display: flex;
        align-items: center;
        direction: ltr;
    }

    .nav-list a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.45rem;
        min-inline-size: 6.25rem;
        padding: 0.75rem 0.85rem;
        border-radius: var(--radius-sm);
        color: rgb(255 255 255 / 78%);
        font-size: 0.92rem;
        font-weight: 800;
        line-height: 1;
    }

    .nav-list a:hover,
    .nav-list a.router-link-active {
        background: rgb(255 255 255 / 8%);
        color: var(--clr-surface);
    }

    .nav-list a.router-link-active {
        font-weight: 700;
    }

    .nav-action {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.45rem;
        min-inline-size: 8rem;
        padding: 0.75rem 0.85rem;
        border-radius: var(--radius-sm);
        background: var(--clr-action);
        color: var(--clr-action-text);
        font-size: 0.92rem;
        font-weight: 800;
        line-height: 1;
    }

    .nav-action:hover,
    .nav-action.router-link-active {
        background: var(--clr-action-hover);
        color: var(--clr-action-text);
    }

    .nav-arrow {
        display: none;
    }

    .nav-backdrop,
    .nav-panel-header {
        display: none;
    }

    @media (max-width: 700px) {
        .header-container {
            padding-block: 1rem;
        }

        .lang-switch {
            margin-inline-start: auto;
        }

        .nav-toggle {
            position: relative;
            display: inline-flex;
        }

        .nav-backdrop {
            position: fixed;
            inset: 0;
            z-index: 20;
            display: block;
            border: 0;
            background: var(--clr-backdrop);
            cursor: pointer;
            opacity: 0;
            pointer-events: none;
            transition:
                opacity 180ms ease,
                visibility 180ms ease;
            visibility: hidden;
        }

        .nav-backdrop.nav-backdrop-open {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
        }

        .nav {
            position: fixed;
            inset-block: 0;
            inset-inline-end: 0;
            z-index: 30;
            display: grid;
            grid-template-rows: auto 1fr;
            inline-size: min(28rem, 100vw);
            padding: 0;
            background: var(--clr-heading);
            box-shadow: var(--shadow-soft);
            clip-path: var(--drawer-closed-clip);
            opacity: 0;
            pointer-events: none;
            transition:
                clip-path 220ms ease,
                opacity 180ms ease,
                visibility 220ms ease;
            visibility: hidden;
            direction: ltr;
        }

        .nav.nav-open {
            clip-path: inset(0);
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
        }

        .nav-groups {
            display: grid;
            grid-template-rows: 1fr auto;
            min-block-size: 100%;
            padding: 1.15rem 1.5rem 2rem;
            border-start-start-radius: 1.6rem;
            background: var(--clr-surface);
        }

        .nav-panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            min-height: 7.25rem;
            padding: 1.25rem 1.5rem 1rem;
            color: var(--clr-surface);
            direction: ltr;
        }

        .nav-panel-header p {
            color: currentColor;
            font-size: 1.2rem;
            font-weight: 900;
        }

        .nav-close {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 3.5rem;
            height: 3.5rem;
            padding: 0;
            border: 0;
            border-radius: 999px;
            background: var(--clr-surface);
            color: var(--clr-primary);
            cursor: pointer;
        }

        .nav-close span {
            position: absolute;
            width: 1.2rem;
            height: 2px;
            border-radius: 999px;
            background: currentColor;
        }

        .nav-close span:nth-child(1) {
            transform: rotate(45deg);
        }

        .nav-close span:nth-child(2) {
            transform: rotate(-45deg);
        }

        .nav-list {
            align-items: stretch;
            flex-direction: column;
            gap: 0;
            min-block-size: 0;
            padding: 0;
            border: 0;
            background: transparent;
            box-shadow: none;
        }

        .nav-list li + li {
            border-block-start: 1px solid var(--clr-border);
        }

        .nav-list a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
            min-height: auto;
            padding: 1.35rem 0.6rem;
            border-radius: 0;
            color: var(--clr-heading);
            font-size: clamp(1.7rem, 7vw, 2.25rem);
            font-weight: 900;
        }

        .nav-list a:hover,
        .nav-list a.router-link-active {
            background: transparent;
            color: var(--clr-primary);
        }

        .nav-contact-group {
            border-block-start: 1px solid var(--clr-border);
            padding-block-start: 1rem;
        }

        .nav-action,
        .nav-action:hover,
        .nav-action.router-link-active {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
            min-height: auto;
            padding: 1.35rem 0.6rem;
            border-radius: 0;
            margin-block-start: 0;
            background: transparent;
            color: var(--clr-heading);
            font-size: clamp(1.7rem, 7vw, 2.25rem);
            font-weight: 900;
            text-align: start;
        }

        .nav-action:hover,
        .nav-action.router-link-active {
            color: var(--clr-primary);
        }

        .nav-arrow {
            display: inline-block;
            inline-size: 0.7rem;
            block-size: 0.7rem;
            border-block-start: 3px solid currentColor;
            border-inline-end: 3px solid currentColor;
            transform: rotate(45deg);
        }

    }

    @media (max-width: 420px) {
        .logo-subtitle {
            display: none;
        }

        .lang-switch-button {
            min-inline-size: 2.35rem;
            padding-inline: 0.55rem;
        }
    }
</style>
