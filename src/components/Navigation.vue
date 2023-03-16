<script setup>
import { useAuth } from '../api/auth';
import IconHome from './icons/IconHome.vue';
import IconLogin from './icons/IconLogin.vue';

// isLoggedIn Funktion importieren.
const { isLoggedIn, logout } = useAuth()
</script>

<template>
    <nav class="nav">
        <RouterLink to="/">
            <IconHome />
            Stream
        </RouterLink>
        <a href="#" class="logout-link" v-if="isLoggedIn" @click="logout">
            <IconLogin />
            Logout
        </a>
        <RouterLink to="/login" v-else>
            <IconLogin />
            Login
        </RouterLink>
    </nav>
</template>