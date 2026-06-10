<template>
    <div class="contact-page">
        <section class="section section-tight contact-hero">
            <div class="container contact-layout">
                <ContactIntroBlock />
                <ContactFormCard />
            </div>
        </section>

        <ContactImageBand />
    </div>
</template>

<script>
    import ContactFormCard from '../components/Contact/ContactFormCard.vue'
    import ContactImageBand from '../components/Contact/ContactImageBand.vue'
    import ContactIntroBlock from '../components/Contact/ContactIntroBlock.vue'

    export default {
        components: {
            ContactIntroBlock,
            ContactFormCard,
            ContactImageBand,
        },
    }
</script>

<style scoped>
    .contact-page {
        background:
            radial-gradient(circle at top, rgb(8 127 163 / 7%), transparent 34%),
            var(--clr-bg);
    }

    .contact-layout {
        display: grid;
        align-items: start;
        gap: clamp(2rem, 5vw, 4rem);
        grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1fr);
    }

    @media (max-width: 860px) {
        .contact-layout {
            grid-template-columns: 1fr;
        }
    }
</style>
