<template>
    <div class="app">
        <a class="skip-link" href="#main-content">
            {{ $t('app.skipToContent') }}
        </a>

        <AppHeader />

        <main id="main-content" class="main-content" tabindex="-1">
            <RouterView />
        </main>

        <AppFooter />
    </div>
</template>

<script>
    import AppHeader from './components/Layout/AppHeader.vue'
    import AppFooter from './components/Layout/AppFooter.vue'

    export default {
        components: {
            AppHeader,
            AppFooter,
        },
    }
</script>

<style scoped>
    .app {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .main-content {
        flex: 1;
    }
</style>
