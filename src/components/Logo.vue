<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function goToHome() {
    router.push('/')
}
</script>

<template>
    <div class="logo" @click="goToHome">
        Tw<strong>IT</strong>ter
    </div>
</template>


<style>
.logo {
    font-size: 2.6rem;
    font-weight: 500;
    padding: 20px 0;

    background: linear-gradient(to bottom, #fb7185, #e11d48);
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
}

.logo strong {
    font-weight: 800;
}
</style>