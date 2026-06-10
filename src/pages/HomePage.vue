<template>
    <div class="home-page">
        <HeroSection />
        <HomeProofSection />
        <AboutPreviewSection />
        <HomeAudienceSection />
    </div>
</template>

<script>
    import HeroSection from '../components/Home/HeroSection.vue'
    import AboutPreviewSection from '../components/Home/AboutPreviewSection.vue'
    import HomeAudienceSection from '../components/Home/HomeAudienceSection.vue'
    import HomeProofSection from '../components/Home/HomeProofSection.vue'

    export default {
        components: {
            HeroSection,
            HomeProofSection,
            AboutPreviewSection,
            HomeAudienceSection,
        },
    }
</script>

<style scoped></style>
