<template>
    <main class="home-page">
        <HeroSection />
        <ClientsSection />
        <CTASection />
    </main>
</template>

<script>
    import HeroSection from '../components/Home/HeroSection.vue'
    import ClientsSection from '../components/Home/ClientsSection.vue'
    import CTASection from '../components/Home/CTASection.vue'

    export default {
        components: {
            HeroSection,
            ClientsSection,
            CTASection,
        },
    }
</script>

<style scoped></style>
