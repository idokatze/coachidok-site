<template>
    <div class="about-page">
        <AboutHeroSection />
        <AboutStorySection />
        <AboutCtaSection />
    </div>
</template>

<script>
    import AboutCtaSection from '../components/About/AboutCtaSection.vue'
    import AboutHeroSection from '../components/About/AboutHeroSection.vue'
    import AboutStorySection from '../components/About/AboutStorySection.vue'

    export default {
        components: {
            AboutHeroSection,
            AboutStorySection,
            AboutCtaSection,
        },
    }
</script>

<style scoped>
    .about-page {
        background: var(--clr-bg);
    }
</style>
