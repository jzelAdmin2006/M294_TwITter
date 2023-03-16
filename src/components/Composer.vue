<script setup>
import { ref, computed } from 'vue'
import { createTweet } from './../api/requests'

const tweetText = ref('')

const tweetTextLength = computed(() => tweetText.value.length)

function submit() {
    createTweet(tweetText.value)
    tweetText.value = ''
}
</script>
<template>
    <form class="composer">
        <label class="composer__prompt">Was geht?</label>
        <textarea maxlength="160" class="composer__textarea" placeholder="Verfasse einen Tweet..." v-model="tweetText" />
        <div class="composer__actions">
            <div class="composer__stats stats">
                <span class="stats__counter">{{ tweetTextLength }}</span>
                <span class="stats__max">/ 160</span>
            </div>
            <button :disabled="tweetTextLength < 5" class="btn btn--primary" @click="submit">
                Tweet veröffentlichen
            </button>
        </div>
    </form>
</template>