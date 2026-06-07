<template>
    <footer class="app-footer">
        <div class="container footer-container">
            <p class="footer-brand">Coach Ido K</p>

            <p class="footer-text">Endurance & Triathlon Coaching</p>
        </div>
    </footer>
</template>

<style scoped>
    .app-footer {
        background: var(--clr-surface);
        border-top: 1px solid var(--clr-border);
    }

    .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 4rem;
        background-color: blue;
    }

    .footer-brand {
        color: var(--clr-heading);
        font-weight: 600;
    }

    .footer-text {
        color: var(--clr-muted);
    }
</style>
