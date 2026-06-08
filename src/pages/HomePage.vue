<template>
    <main class="home-page">
        <HeroSection />
        <AboutPreviewSection />
    </main>
</template>

<script>
    import HeroSection from '../components/Home/HeroSection.vue'
    import AboutPreviewSection from '../components/Home/AboutPreviewSection.vue'

    export default {
        components: {
            HeroSection,
            AboutPreviewSection,
        },
    }
</script>

<style scoped></style>
