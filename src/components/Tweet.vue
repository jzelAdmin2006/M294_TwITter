<script setup>
import { formatDistanceToNow } from 'date-fns';
import { de } from 'date-fns/locale';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../api/auth';
import { likeTweet } from '../api/requests';

const { isLoggedIn } = useAuth()
const emit = defineEmits(['liked', 'retweet']);

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    user: {
        type: Object,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    liked: {
        type: Boolean,
        required: true,
    },
});

const router = useRouter()

function like() {
    if (isLoggedIn.value) {
        likeTweet(props.id);
        emit('liked');
    } else {
        router.push('/login')
    }
}

const isLiked = computed(() => props.liked);

function retweet() {
    if (isLoggedIn.value) {
        emit('retweet');
    } else {
        router.push('/login')
    }
}
</script>

<template>
    <div class="tweet">
        <div class="tweet__avatar">
            <img :src="`https://i.pravatar.cc/100?u=${user.id}`" alt="" />
        </div>
        <div class="tweet__content">
            <div class="tweet__header">
                <span class="tweet__author">{{ user.name }}</span>
                <span class="tweet__timestamp">{{ formatDistanceToNow(new Date(createdAt), { locale: de, addSuffix: true })
                }}</span>
            </div>
            <div class="tweet__text">
                {{ text }}
            </div>
            <div class="tweet__likes">
                <button class="heart" @click="like" :disabled="isLiked" v-bind:class="{ heart__liked: isLiked }">
                    ❤️
                </button>
                <div class="count">
                    {{ likes }}
                </div>
            </div>
            <button class="btn btn--primary retweet" @click="retweet">Retweet</button>
        </div>
    </div>
</template>

<style>
.tweet {
    display: flex;
    padding: 20px;
}

.tweet+.tweet {
    border-top: 1px solid #1e293b;
}

.tweet:last-child {
    border-bottom: 1px solid #1e293b;
}

.tweet__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
}

.tweet__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tweet__content {
    flex: 1;
}

.tweet__header {
    display: flex;
    align-items: baseline;
    margin-bottom: 10px;
}

.tweet__author {
    font-weight: bold;
    font-size: 1.1rem;
    margin-right: 10px;
}

.tweet__timestamp {
    color: #64748b;
    font-size: .9rem;
}

.tweet__text {
    font-size: 1rem;
    line-height: 1.25;
}

.tweet__likes {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.heart {
    font-size: 2rem;
    display: inline-block;
    border-radius: 50%;
    border: 2px solid black;
    text-align: center;
    cursor: pointer;
}

.heart__liked {
    cursor: default;
}

.count {
    margin-left: 10px;
}

.retweet {
    margin-top: 10px;
}
</style>