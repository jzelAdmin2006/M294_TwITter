<script setup>
import { ref } from 'vue';
import { fetchTweet } from '../api/requests';
import Tweet from '../components/Tweet.vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const tweet = ref(null);

fetchTweet(Number(props.id)).then(result => {
    tweet.value = result;
    console.log('tweet', tweet.value);
});
</script>



<template>
    <Tweet :id="1" :user="{}" :text="'sick'" :createdAt="'Tue Mar 21 2023 16:27:33 GMT+0100 (Mitteleuropäische Normalzeit)'"
        :likes="1" :liked="false" />
</template>