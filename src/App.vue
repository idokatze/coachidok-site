<!-- <script setup>
import HelloWorld from './pages/HelloWorld.vue'
</script>

<template>
  <HelloWorld />
</template> -->

<!-- <script setup>
import HelloWorld from './pages/HelloWorld.vue'
</script>

<template>
  <HelloWorld />
</template> -->

<!-- <template>
    <AppHeader />
    <UserMsg />
    <main>
        <RouterView />
    </main>
    <AppFooter />
</template>

<script>
    import AppHeader from '@/components/AppHeader.vue'
    import AppFooter from '@/components/AppFooter.vue'
    import UserMsg from '@/components/UserMsg.vue'

    export default {
        components: {
            AppHeader,
            AppFooter,
            UserMsg,
        },
    }
</script>

<style scoped></style> -->

<template>
    <div class="app">
        <AppHeader />

        <main class="main-content">
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
