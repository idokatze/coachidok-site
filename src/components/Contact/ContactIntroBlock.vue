<template>
    <div class="contact-intro">
        <p class="eyebrow">{{ $t('contact.eyebrow') }}</p>

        <h1>{{ $t('contact.title') }}</h1>

        <p class="lead">{{ $t('contact.lead') }}</p>

        <div class="contact-actions" :aria-label="$t('contact.contactMethods')">
            <ContactIconLink
                v-for="method in contactMethods"
                :key="method.labelKey"
                :method="method"
            />
        </div>
    </div>
</template>

<script>
    import ContactIconLink from '../Common/ContactIconLink.vue'
    import { contactPageMethods } from '../../content/contactMethods'

    export default {
        components: {
            ContactIconLink,
        },
        data() {
            return {
                contactMethods: contactPageMethods,
            }
        },
    }
</script>

<style scoped>
    .contact-intro {
        display: grid;
        gap: 1.25rem;
        padding-block-start: 0.4rem;
    }

    .contact-intro h1 {
        max-width: 17ch;
        font-size: clamp(2.25rem, 4vw, 3.5rem);
    }

    .contact-intro .lead {
        max-width: 40rem;
    }

    .contact-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-block-start: 1rem;
    }

    @media (max-width: 860px) {
        .contact-intro h1 {
            max-width: 16ch;
        }
    }
</style>
