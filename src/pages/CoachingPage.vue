<template>
    <div class="coaching-page">
        <CoachingHeroSection />
        <CoachingPillarsSection />
        <CoachingProcessSection />
        <CoachingCtaSection />
    </div>
</template>

<script>
    import CoachingCtaSection from '../components/Coaching/CoachingCtaSection.vue'
    import CoachingHeroSection from '../components/Coaching/CoachingHeroSection.vue'
    import CoachingPillarsSection from '../components/Coaching/CoachingPillarsSection.vue'
    import CoachingProcessSection from '../components/Coaching/CoachingProcessSection.vue'

    export default {
        components: {
            CoachingHeroSection,
            CoachingPillarsSection,
            CoachingProcessSection,
            CoachingCtaSection,
        },
    }
</script>

<style scoped>
    .coaching-page {
        background: var(--clr-bg);
    }
</style>
