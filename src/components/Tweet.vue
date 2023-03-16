<script setup>
import { formatDistanceToNow } from 'date-fns'
import { de } from 'date-fns/locale'

defineProps({
    user: {
        type: Object,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
});
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
        </div>
    </div>
</template>