<template>
    <section class="contact-image-band" :aria-label="$t('contact.supportLabel')">
        <img
            :src="supportImage"
            :srcset="`${supportImageSmall} 800w, ${supportImage} 1600w`"
            :alt="$t('contact.coachingSupportAlt')"
            decoding="async"
            loading="lazy"
            sizes="100vw"
            width="1600"
            height="1067"
        />
    </section>
</template>

<script>
    import supportImage from '../../assets/images/coach-supporting-swimmer-1600.jpg'
    import supportImageSmall from '../../assets/images/coach-supporting-swimmer-800.jpg'

    export default {
        data() {
            return {
                supportImage,
                supportImageSmall,
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
