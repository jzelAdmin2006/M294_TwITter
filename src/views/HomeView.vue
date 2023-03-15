<script setup>
import LoginInfo from '../components/LoginInfo.vue'
import Composer from '../components/Composer.vue'
import Tweet from '../components/Tweet.vue'
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(async () => {
    console.log('HomeView mounted')
    setTimeout(() => {
        loading.value = false
    }, 3000)
})
</script>

<template>
    HOME
    <LoginInfo />
    <Composer />
    <!-- Stream -->
    <div class="loading" v-if="loading">
        Lade Tweets...
    </div>
    <section class="stream" v-else>
        <Tweet v-for="tweet in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :user="{ id: 1, name: 'John Doe' }"
            :text="'Lorem ipsum dolor med'" :created-at="'2023-01-01T12:00:00Z'" />
    </section>
</template>
