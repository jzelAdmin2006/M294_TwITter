<script setup>
import { onMounted, ref } from 'vue';
import { fetchTopUsers } from '../api/requests';
import Widget from './Widget.vue';

const topUsers = ref([]);
const loading = ref(true)

onMounted(async () => {
    loading.value = true
    try {
        const stream = await fetchTopUsers()

        topUsers.value = stream
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
});
</script>

<template>
    <!-- Top User Widget -->
    <Widget title="Top User">
        <ul class="content-list">
            <div class="loading" v-if="loading">
                Lade Top User...
            </div>
            <li class="content-list__item" v-for="user in topUsers" v-else>
                <a href="#">
                    <span class="content-list__meta">
                        {{ user.tweets_count }} Tweets
                    </span>
                    <span class="content-list__text">
                        {{ user.name }}
                    </span>
                </a>
            </li>
        </ul>
    </Widget>
</template>