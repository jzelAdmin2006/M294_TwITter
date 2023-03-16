<script setup>
import LoginInfo from '../components/LoginInfo.vue'
import Composer from '../components/Composer.vue'
import Tweet from '../components/Tweet.vue'
import { onMounted, ref } from 'vue'
import { fetchStream } from '../api/requests'
import { checkAuth } from '../api/requests'
import { useAuth } from '../api/auth'

const loading = ref(true)
const tweets = ref([])
const { isLoggedIn } = useAuth()

onMounted(async () => {
    const response = await checkAuth()

    console.log('checkAuth Resultat', response)
})

onMounted(async () => {
    loadStream()
})

async function loadStream() {
    loading.value = true
    try {
        const stream = await fetchStream()
        console.log('Stream', stream)
        tweets.value = stream
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <LoginInfo v-if="!isLoggedIn" />
    <Composer v-if="isLoggedIn" @posted="loadStream" />
    <!-- Stream -->
    <div class="loading" v-if="loading">
        Lade Tweets...
    </div>
    <section class="stream" v-else>
        <Tweet v-for="tweet in tweets" :id="tweet.id" :user="tweet.user" :text="tweet.text" :createdAt="tweet.created_at"
            :likes="tweet.likes" />
    </section>
</template>
