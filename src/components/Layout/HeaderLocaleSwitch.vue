<template>
    <button
        class="lang-switch"
        type="button"
        role="switch"
        :aria-checked="isHebrew"
        :aria-label="$t('common.localeToggle')"
        @click="$emit('toggle')"
    >
        <span
            class="lang-switch-button"
            :class="{ 'lang-switch-button-active': !isHebrew }"
        >
            {{ $t('header.locale.en') }}
        </span>
        <span
            class="lang-switch-button"
            :class="{ 'lang-switch-button-active': isHebrew }"
        >
            {{ $t('header.locale.he') }}
        </span>
    </button>
</template>

<script>
    export default {
        props: {
            isHebrew: {
                type: Boolean,
                default: false,
            },
        },
        emits: ['toggle'],
    }
</script>

<style scoped>
    .lang-switch {
        display: inline-grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-items: center;
        inline-size: 5.75rem;
        flex: 0 0 auto;
        padding: 0.2rem;
        gap: 0.2rem;
        border: 1px solid color-mix(in srgb, var(--clr-surface) 12%, transparent);
        border-radius: var(--radius-sm);
        background: rgb(255 255 255 / 4%);
        color: inherit;
        cursor: pointer;
        direction: ltr;
    }

    .lang-switch-button {
        display: flex;
        align-items: center;
        justify-content: center;
        min-inline-size: 2.6rem;
        block-size: 2.3rem;
        padding: 0.45rem 0.7rem;
        border-radius: calc(var(--radius-sm) - 1px);
        color: rgb(255 255 255 / 72%);
        font-size: 0.8rem;
        font-weight: 800;
        line-height: 1;
        text-align: center;
        transition:
            background-color 180ms ease,
            color 180ms ease,
            box-shadow 180ms ease;
    }

    .lang-switch-button-active {
        color: var(--clr-surface);
        background: rgb(255 255 255 / 12%);
        box-shadow: inset 0 0 0 1px rgb(255 255 255 / 3%);
    }

    @media (max-width: 700px) {
        .lang-switch {
            margin-inline-start: auto;
        }
    }

    @media (max-width: 420px) {
        .lang-switch-button {
            min-inline-size: 2.35rem;
            padding-inline: 0.55rem;
        }
    }
</style>
