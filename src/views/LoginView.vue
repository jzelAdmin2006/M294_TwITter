<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const password = ref('')

const emailOrPasswordNotProvided = computed(() => {
  return email.value.length === 0 || password.value.length === 0
})
</script>

<template>
  <div class="login">
    <section class="login-wrapper">
      <form action="#" class="login-form" autocomplete="off" novalidate>
        <div class="form-group">
          <label class="form-label" for="email">E-Mail</label>
          <input class="form-input" type="email" id="email" v-model="email" />
          <div class="form-error">
            Ungültige E-Mail
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Passwort</label>
          <input class="form-input" type="password" id="password" v-model="password" />
          <div class="form-error">
            Falsches Passwort
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn--primary btn--block" :disabled="emailOrPasswordNotProvided">
            Login
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

