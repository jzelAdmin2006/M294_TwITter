<script setup>
import { loginUser } from '../api/requests'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const emailOrPasswordNotProvided = computed(() => {
  return email.value.length === 0 || password.value.length === 0
})

const errors = ref({
  email: '',
  password: '',
})

const router = useRouter()

async function login() {
  try {
    // Versuche, den Benutzer einzuloggen.
    await loginUser(email.value, password.value)
    // Alles okay! Umleiten zur HomeView
    await router.push('/')
  } catch (exception) {
    // Die Zugangsdaten waren falsch, logge die Exception.
    console.error('login error', exception)
    console.log('writing exception errors to variable', exception.errors)
    // Übernehme die Fehlermeldungen aus der Exception. 
    mergeErrors(exception.errors)
  }
}

function mergeErrors(errorObj) {
  for (const key in errorObj) {
    if (errors.value.hasOwnProperty(key)) {
      errors.value[key] = errorObj[key];
    }
  }
}
</script>

<template>
  <div class="login">
    <section class="login-wrapper">
      <form action="#" class="login-form" @submit.prevent="login" autocomplete="off" novalidate>
        <div class="form-group">
          <label class="form-label" for="email">E-Mail</label>
          <input class="form-input" type="email" id="email" v-model="email" />
          <div class="form-error" v-if="errors.email.length > 0">
            {{ errors.email }}
          </div>
        </div>
        <div class=" form-group">
          <label class="form-label" for="password">Passwort</label>
          <input class="form-input" type="password" id="password" v-model="password" />
          <div class="form-error" v-if="errors.password.length > 0">
            {{ errors.password }}
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

