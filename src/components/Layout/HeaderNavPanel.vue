<template>
    <button
        class="nav-backdrop"
        type="button"
        :class="{ 'nav-backdrop-open': isOpen }"
        :aria-label="$t('header.closeMenu')"
        @click="$emit('close')"
    ></button>

    <nav
        id="main-nav"
        class="nav"
        :class="{ 'nav-open': isOpen }"
        :aria-label="$t('header.primaryNav')"
    >
        <div class="nav-panel-header">
            <p>{{ $t('header.menu') }}</p>

            <button
                class="nav-close"
                type="button"
                :aria-label="$t('header.closeMenu')"
                @click="$emit('close')"
            >
                <span></span>
                <span></span>
            </button>
        </div>

        <div class="nav-groups">
            <ul class="nav-list">
                <li v-for="item in navItems" :key="item.to">
                    <RouterLink :to="item.to" @click="$emit('close')">
                        <span>{{ $t(item.labelKey) }}</span>
                        <span class="nav-arrow" aria-hidden="true"></span>
                    </RouterLink>
                </li>
            </ul>

            <div class="nav-contact-group">
                <RouterLink
                    :to="contactNavItem.to"
                    class="nav-action"
                    @click="$emit('close')"
                >
                    <span>{{ $t(contactNavItem.labelKey) }}</span>
                    <span class="nav-arrow" aria-hidden="true"></span>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<script>
    import { contactNavItem, primaryNavItems } from '../../content/navigation'

    export default {
        props: {
            isOpen: {
                type: Boolean,
                default: false,
            },
        },
        emits: ['close'],
        data() {
            return {
                contactNavItem,
                navItems: primaryNavItems,
            }
        },
    }
</script>

<style scoped>
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
        .nav-backdrop {
            position: fixed;
            inset: 0;
            z-index: 20;
            display: block;
            border: 0;
            background: rgb(8 21 29 / 44%);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
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
            inset-block-start: 0;
            inset-block-end: 0;
            inset-inline-end: 0;
            z-index: 30;
            display: grid;
            grid-template-rows: auto 1fr;
            inline-size: clamp(18.5rem, 74vw, 22rem);
            max-inline-size: calc(100vw - 1.5rem);
            block-size: 100dvh;
            min-block-size: 100vh;
            padding: 0;
            background: var(--clr-heading);
            box-shadow: var(--shadow-soft);
            opacity: 0;
            pointer-events: none;
            transform: translateX(100%);
            overflow: hidden;
            transition:
                transform 260ms ease,
                opacity 180ms ease,
                visibility 260ms ease;
            visibility: hidden;
            direction: ltr;
        }

        .nav.nav-open {
            opacity: 1;
            pointer-events: auto;
            transform: translateX(0);
            visibility: visible;
        }

        .nav-groups {
            display: grid;
            grid-template-rows: 1fr auto;
            min-block-size: 100%;
            padding: 1rem 1.25rem 1.75rem;
            border-start-start-radius: 1.6rem;
            background: var(--clr-surface);
            overflow: auto;
        }

        .nav-panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            min-height: 7.25rem;
            padding: 1.1rem 1.25rem 0.9rem;
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
            padding: 1.15rem 0.45rem;
            border-radius: 0;
            color: var(--clr-heading);
            font-size: clamp(1.45rem, 6vw, 2rem);
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
            padding: 1.15rem 0.45rem;
            border-radius: 0;
            margin-block-start: 0;
            background: transparent;
            color: var(--clr-heading);
            font-size: clamp(1.45rem, 6vw, 2rem);
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
</style>
