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
        align-items: center;
        justify-content: space-between;
        min-height: 4rem;
        gap: 1rem;
    }

    .footer-brand {
        color: var(--clr-heading);
        font-weight: 600;
    }

    .footer-text {
        color: var(--clr-muted);
    }

    @media (max-width: 640px) {
        .footer-container {
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            padding-block: 1rem;
        }
    }
</style>
