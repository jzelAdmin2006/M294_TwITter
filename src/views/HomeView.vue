<script setup>
import { onMounted, ref } from 'vue'
import { useAuth } from '../api/auth'
import { checkAuth, fetchStream } from '../api/requests'
import Composer from '../components/Composer.vue'
import LoginInfo from '../components/LoginInfo.vue'
import Tweet from '../components/Tweet.vue'

document.title = 'TwITter - Dein IT-Portal im Internet'

const loading = ref(true)
const tweets = ref([])
const { isLoggedIn } = useAuth()
const currentUser = ref(null)

onMounted(async () => {
    if (isLoggedIn.value) {
        const response = await checkAuth()
        currentUser.value = response.user
        console.log('checkAuth Resultat', response)
    } else {
        console.log('Nicht eingeloggt')
    }
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

const composerText = ref('')

function retweet(text) {
    console.log('retweet', text)
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    composerText.value = text
}
</script>

<template>
    <LoginInfo v-if="!isLoggedIn" />
    <Composer v-if="isLoggedIn" @posted="loadStream" :tweetText="composerText"
        @update:tweetText="newText => composerText = newText" />
    <!-- Stream -->
    <div class="loading" v-if="loading">
        Lade Tweets...
    </div>
    <section class="stream" v-else>
        <Tweet v-for="tweet, index in tweets" :key="tweet.id" :id="tweet.id" :user="tweet.user" :text="tweet.text"
            :createdAt="tweet.created_at" :likes="tweet.likes"
            :liked="isLoggedIn ? currentUser.liked_tweets.includes(tweet.id) : false" @liked="like(tweet)"
            @retweet="retweet(tweet.text)" :style="{ animationDelay: index * 0.1 + 's' }" />
    </section>
</template>

<style>
.tweet {
    opacity: 0;
    transform: translateY(100%);
    animation: einfliegen 0.5s forwards;
}

@keyframes einfliegen {
    from {
        opacity: 0;
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
