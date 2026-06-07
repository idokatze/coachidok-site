<template>
    <header class="app-header">
        <div class="container header-container">
            <RouterLink to="/" class="logo"> Coach Ido K </RouterLink>

            <nav class="nav" aria-label="Main navigation">
                <ul class="nav-list">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    .app-header {
        background: var(--clr-surface);
        border-bottom: 1px solid var(--clr-border);
    }

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 4rem;
        background-color: red;
    }

    .nav-list {
        display: flex;
        gap: 2rem;
        a {
            color: var(--clr-muted);
        }

        a.router-link-active {
            color: var(--clr-heading);
            font-weight: 600;
        }
    }
</style>