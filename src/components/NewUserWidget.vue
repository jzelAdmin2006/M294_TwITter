<script setup>
import { format } from 'date-fns';
import { onMounted, ref } from 'vue';
import { fetchNewUsers } from '../api/requests';
import Widget from './Widget.vue';

const newUsers = ref([]);
const loading = ref(true)

onMounted(async () => {
    loading.value = true
    try {
        const stream = await fetchNewUsers()

        newUsers.value = stream
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
});
</script>

<template>
    <!-- Neue User Widget -->
    <Widget title="Neue User">
        <ul class="content-list">
            <div class="loading" v-if="loading">
                Lade neue User...
            </div>
            <li class="content-list__item" v-for="user in newUsers" v-else>
                <a href="#">
                    <span class="content-list__meta">
                        {{ format(new Date(user.created_at), 'dd.MM.yyyy') }}
                    </span>
                    <span class="content-list__text">
                        {{ user.name }}
                    </span>
                </a>
            </li>
        </ul>
    </Widget>
</template>