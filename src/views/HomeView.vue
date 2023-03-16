<script setup>
import { onMounted, ref } from 'vue'
import { useAuth } from '../api/auth'
import { checkAuth, fetchStream } from '../api/requests'
import Composer from '../components/Composer.vue'
import LoginInfo from '../components/LoginInfo.vue'
import Tweet from '../components/Tweet.vue'

const loading = ref(true)
const tweets = ref([])
const { isLoggedIn } = useAuth()
const currentUser = ref(null)

onMounted(async () => {
    const response = await checkAuth()
    currentUser.value = response.user
    console.log('checkAuth Resultat', response)
})

onMounted(async () => {
    loadStream()
})

async function loadStream() {
    console.log('loadStream')
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

function like(tweet) {
    tweet.likes++
    currentUser.value.liked_tweets.push(tweet.id)
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
            :likes="tweet.likes" :liked="isLoggedIn ? currentUser.liked_tweets.includes(tweet.id) : false"
            @liked="like(tweet)" />
    </section>
</template>
