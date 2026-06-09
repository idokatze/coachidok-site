<template>
    <svg
        v-if="icon === 'whatsapp'"
        class="contact-icon-glyph"
        aria-hidden="true"
        viewBox="0 0 24 24"
    >
        <path
            d="M12.04 3.5a8.45 8.45 0 0 0-7.3 12.7l-.98 3.58 3.66-.96a8.45 8.45 0 1 0 4.62-15.32Zm0 1.5a6.95 6.95 0 1 1-3.53 12.94l-.25-.15-2.28.6.61-2.22-.16-.25A6.95 6.95 0 0 1 12.04 5Zm-2.4 3.58c-.16 0-.4.06-.61.29-.21.23-.8.78-.8 1.9s.82 2.2.94 2.36c.12.16 1.6 2.55 3.94 3.48 1.95.77 2.35.62 2.78.58.43-.04 1.38-.56 1.57-1.11.2-.55.2-1.02.14-1.12-.06-.1-.21-.16-.45-.28-.24-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.53.12-.16.24-.61.76-.75.92-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.75-.19-.46-.38-.4-.53-.41h-.45Z"
        />
    </svg>

    <svg
        v-else-if="icon === 'email'"
        class="contact-icon-glyph"
        aria-hidden="true"
        viewBox="0 0 24 24"
    >
        <path
            d="M4.75 6.5h14.5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75H4.75c-.97 0-1.75-.78-1.75-1.75v-7.5c0-.97.78-1.75 1.75-1.75Zm.1 1.5 7.15 5.03L19.15 8H4.85Zm14.65 1.4-7.07 4.98a.75.75 0 0 1-.86 0L4.5 9.4v6.35c0 .14.11.25.25.25h14.5c.14 0 .25-.11.25-.25V9.4Z"
        />
    </svg>

    <svg
        v-else-if="icon === 'phone'"
        class="contact-icon-glyph"
        aria-hidden="true"
        viewBox="0 0 24 24"
    >
        <path
            d="M6.62 4.77c.3-.27.71-.39 1.1-.31l2.05.41c.48.1.83.5.9.98l.24 1.74c.05.38-.07.76-.34 1.04l-1.26 1.26a14.2 14.2 0 0 0 4.8 4.8l1.26-1.26c.27-.27.66-.4 1.04-.34l1.74.24c.48.07.88.42.98.9l.41 2.05c.08.39-.04.8-.31 1.1l-1.38 1.53c-.31.34-.77.49-1.22.42-3.18-.55-6.08-2.08-8.41-4.4-2.33-2.34-3.85-5.24-4.4-8.42-.08-.45.08-.91.42-1.22l1.53-1.38Z"
        />
    </svg>

    <svg
        v-else-if="icon === 'trainingpeaks'"
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
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                required: true,
            },
        },
    }
</script>

<style scoped>
    .contact-icon-glyph {
        inline-size: 1.42rem;
        block-size: 1.42rem;
        fill: currentColor;
    }

    .contact-icon-glyph-trainingpeaks {
        inline-size: 1.5rem;
        block-size: 1.44rem;
    }

    .contact-icon-monogram {
        font-size: 0.96rem;
        font-weight: 900;
        letter-spacing: 0;
        line-height: 1;
    }
</style>
