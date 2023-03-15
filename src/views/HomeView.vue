<script setup>
import LoginInfo from '../components/LoginInfo.vue'
import Composer from '../components/Composer.vue'
import Tweet from '../components/Tweet.vue'
</script>

<template>
    HOME
    <LoginInfo />
    <Composer />
    <!-- Stream -->
    <section class="stream">
        <Tweet v-for="tweet in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :user="{ id: 1, name: 'John Doe' }"
            :text="'Lorem ipsum dolor med'" :created-at="'2023-01-01T12:00:00Z'" />
    </section>
</template>
