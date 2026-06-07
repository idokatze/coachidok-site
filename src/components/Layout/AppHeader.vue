<template>
    <header class="app-header">
        <div class="container header-container">
            <RouterLink to="/" class="logo" @click="closeNav">
                Coach Ido K
            </RouterLink>

            <button
                class="nav-toggle"
                type="button"
                :aria-expanded="isNavOpen"
                aria-controls="main-nav"
                aria-label="Toggle navigation"
                @click="toggleNav"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav
                id="main-nav"
                class="nav"
                :class="{ 'nav-open': isNavOpen }"
                aria-label="Main navigation"
            >
                <ul class="nav-list">
                    <li>
                        <RouterLink to="/" @click="closeNav">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" @click="closeNav">
                            About
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact" @click="closeNav">
                            Contact
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                isNavOpen: false,
            }
        },
        methods: {
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
        background: var(--clr-surface);
        border-bottom: 1px solid var(--clr-border);
    }

    .header-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 4rem;
        gap: 1.5rem;
    }

    .logo {
        color: var(--clr-heading);
        font-weight: 800;
        line-height: 1;
    }

    .nav-toggle {
        display: none;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        padding: 0;
        border: 1px solid var(--clr-border);
        border-radius: var(--radius-sm);
        background: var(--clr-surface);
        color: var(--clr-heading);
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
        gap: clamp(1rem, 4vw, 2rem);
    }

    .nav-list a {
        color: var(--clr-muted);
        font-weight: 600;
    }

    .nav-list a:hover,
    .nav-list a.router-link-active {
        color: var(--clr-heading);
    }

    .nav-list a.router-link-active {
        font-weight: 700;
    }

    @media (max-width: 700px) {
        .header-container {
            padding-block: 1rem;
        }

        .nav-toggle {
            position: relative;
            display: inline-flex;
        }

        .nav {
            position: absolute;
            top: calc(100% - 0.25rem);
            right: 0;
            left: 0;
            z-index: 10;
            display: none;
            padding: 0.5rem;
            border: 1px solid var(--clr-border);
            border-radius: var(--radius-md);
            background: var(--clr-surface);
            box-shadow: var(--shadow-soft);
        }

        .nav.nav-open {
            display: block;
        }

        .nav-list {
            align-items: stretch;
            flex-direction: column;
            gap: 0;
        }

        .nav-list a {
            display: block;
            padding: 0.85rem 0.9rem;
            border-radius: var(--radius-sm);
        }

        .nav-list a:hover,
        .nav-list a.router-link-active {
            background: var(--clr-surface-soft);
        }
    }
</style>
