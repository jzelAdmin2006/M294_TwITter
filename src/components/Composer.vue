<script setup>
import { computed } from 'vue';
import { createTweet } from '../api/requests';

const props = defineProps({
    tweetText: {
        type: String,
        required: true
    }
})

const tweetTextLength = computed(() => props.tweetText.length)

const emit = defineEmits(['posted', 'update:tweetText'])

async function submit() {
    await createTweet(props.tweetText)
    emit('update:tweetText', '')
    emit('posted')
}
</script>
<template>
    <form @submit.prevent class="composer">
        <label class="composer__prompt">Was geht?</label>
        <textarea maxlength="160" class="composer__textarea" placeholder="Verfasse einen Tweet..." :value="tweetText"
            @input="$emit('update:tweetText', $event.target.value)" />
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