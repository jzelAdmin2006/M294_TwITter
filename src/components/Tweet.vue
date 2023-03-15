<script setup>
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
        type: String,
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
                <span class="tweet__timestamp">erstellt um {{ createdAt }}</span>
            </div>
            <div class="tweet__text">
                {{ text }}
            </div>
        </div>
    </div>
</template>