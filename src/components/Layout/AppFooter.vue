<template>
    <footer class="app-footer">
        <div class="container footer-container">
            <div class="footer-brand">
                <img :src="logoMark" alt="" class="footer-logo" />
                <div class="footer-brand-copy">
                    <p class="footer-title">{{ brand.name }}</p>
                    <p class="footer-company">
                        &copy; {{ currentYear }} {{ brand.company }}
                    </p>
                </div>
            </div>

            <div class="footer-meta">
                <p class="footer-text">{{ brand.tagline }}</p>

                <div
                    class="footer-contact-links"
                    :aria-label="$t('contact.contactMethods')"
                >
                    <ContactIconLink
                        v-for="method in contactMethods"
                        :key="method.labelKey"
                        :method="method"
                        variant="footer"
                    />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import ContactIconLink from '../Common/ContactIconLink.vue'
    import logoMark from '../../assets/images/baby-goat.svg'
    import { brand } from '../../content/brand'
    import { contactMethods } from '../../content/contactMethods'

    export default {
        components: {
            ContactIconLink,
        },
        data() {
            return {
                brand,
                contactMethods,
                currentYear: new Date().getFullYear(),
                logoMark,
            }
        },
    }
</script>

<style scoped>
    .app-footer {
        background: var(--clr-footer-bg);
        border-block-start: 1px solid rgb(255 255 255 / 8%);
    }

    .footer-container {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: center;
        gap: 1.5rem 3rem;
        padding-block: 1.35rem 1.5rem;
        direction: ltr;
    }

    .footer-brand {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        min-inline-size: 0;
    }

    .footer-logo {
        inline-size: 2.75rem;
        block-size: 2.75rem;
        object-fit: contain;
        filter: brightness(0) invert(1);
        opacity: 0.92;
        flex: 0 0 auto;
    }

    .footer-brand-copy {
        display: grid;
        gap: 0.22rem;
    }

    .footer-title {
        color: var(--clr-footer-heading);
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.2;
    }

    .footer-company {
        color: var(--clr-footer-text);
        font-size: 0.84rem;
        line-height: 1.4;
    }

    .footer-text {
        color: var(--clr-footer-text);
        font-size: 0.86rem;
        font-weight: 700;
        letter-spacing: 0;
        line-height: 1.3;
        text-align: end;
    }

    .footer-meta {
        display: grid;
        justify-items: end;
        gap: 0.9rem;
        padding-inline-start: 1.5rem;
        border-inline-start: 1px solid rgb(255 255 255 / 10%);
    }

    .footer-contact-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 0.65rem;
    }

    @media (max-width: 640px) {
        .footer-container {
            grid-template-columns: 1fr;
            gap: 1.15rem;
            padding-block: 1.2rem 1.35rem;
        }

        .footer-meta {
            justify-items: start;
            gap: 0.75rem;
            padding-inline-start: 0;
            padding-block-start: 1rem;
            border-inline-start: 0;
            border-block-start: 1px solid rgb(255 255 255 / 10%);
        }

        .footer-contact-links {
            justify-content: flex-start;
        }

        .footer-text {
            text-align: start;
        }
    }
</style>
