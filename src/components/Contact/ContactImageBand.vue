<template>
    <section class="contact-image-band" :aria-label="$t('contact.supportLabel')">
        <img :src="supportImage" :alt="$t('contact.coachingSupportAlt')" />
    </section>
</template>

<script>
    import supportImage from '../../assets/images/coach-supporting-swimmer.jpg'

    export default {
        data() {
            return {
                supportImage,
            }
        },
    }
</script>

<style scoped>
    .contact-image-band {
        overflow: hidden;
        max-height: 28rem;
    }

    .contact-image-band img {
        width: 100%;
        height: min(52vw, 28rem);
        object-fit: cover;
        object-position: center;
    }
</style>
