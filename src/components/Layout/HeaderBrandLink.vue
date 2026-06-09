<template>
    <RouterLink to="/" class="logo" @click="$emit('navigate')">
        <span class="logo-mark" aria-hidden="true">
            <img :src="logoMark" alt="" />
        </span>
        <span class="logo-text">
            <span class="logo-name">{{ brand.name }}</span>
            <span class="logo-subtitle">{{ brand.subtitle }}</span>
        </span>
    </RouterLink>
</template>

<script>
    import logoMark from '../../assets/images/baby-goat.svg'
    import { brand } from '../../content/brand'

    export default {
        emits: ['navigate'],
        data() {
            return {
                brand,
                logoMark,
            }
        },
    }
</script>

<style scoped>
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

    @media (max-width: 420px) {
        .logo-subtitle {
            display: none;
        }
    }
</style>
