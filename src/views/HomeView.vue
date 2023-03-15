<script setup>
import LoginInfo from '../components/LoginInfo.vue'
import Composer from '../components/Composer.vue'
import Tweet from '../components/Tweet.vue'
import { onMounted, ref } from 'vue'
import { fetchStream } from '../api/requests'

const loading = ref(true)
const tweets = ref([])

onMounted(async () => {
    loading.value = true
    try {
        const stream = await fetchStream()

        tweets.value = stream
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
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
        <Tweet v-for="tweet in tweets" :user="tweet.user" :text="tweet.text" :created-at="tweet.createdAt" />
    </section>
</template>
