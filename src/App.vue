<script setup>
import Logo from './components/Logo.vue';
import Navigation from './components/Navigation.vue';
import NewUserWidget from './components/NewUserWidget.vue';
import TopUserWidget from './components/TopUserWidget.vue';
</script>

<template>
  <div class="container">
    <div class="grid">
      <aside class="sidebar sidebar--left">
        <Logo />

        <Navigation />
      </aside>
      <main class="content">
        <RouterView v-slot="{ Component }">
          <transition name="slide" mode="out-in">
            <div :key="$route.name">
              <component :is="Component" />
            </div>
          </transition>
        </RouterView>
      </main>

      <aside class="sidebar sidebar--right">
        <TopUserWidget />

        <NewUserWidget />
      </aside>
    </div>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.1s, transform 0.1s;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(+100%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  background: #0f172a;
  color: #f8fafc;
  margin: 0;
}

.container {
  width: 1100px;
  max-width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 220px auto 260px;
}

.content {
  min-height: 100vh;
  border-right: 1px solid #1e293b;
  border-left: 1px solid #1e293b;
}

.sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

.nav {
  display: flex;
  flex-direction: column;
}

.nav a {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 12px 0;
  color: #64748b;
}

.nav a.router-link-active,
.nav a:hover {
  color: inherit;
}

.nav a svg {
  width: 30px;
  margin-right: 30px;
}

.composer {
  position: relative;
  display: block;
}

.composer__prompt {
  color: #64748b;
  padding: 20px 20px 0;
  font-weight: bold;
  font-size: 1.1rem;
  display: block;
}

.composer__textarea {
  color: inherit;
  font-family: inherit;
  font-size: 1.4rem;
  background: transparent;
  padding: 5px 20px 0;
  width: 100%;
  height: 140px;
  margin-top: 5px;
  border: none;
  resize: none;
}

.composer__textarea:focus {
  outline: none;
}

.composer__textarea::placeholder {
  color: #475569;
}

.composer__actions {
  border-bottom: 1px solid #1e293b;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stats {
  display: flex;
  align-items: center;
}

.stats__counter {
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 5px;
}

.stats__max {
  font-size: 1.1rem;
  color: #64748b;
  padding-left: 2px;
}

.btn {
  line-height: 1;
  font-weight: bold;
  height: 40px;
  border-radius: 20px;
  border: none;
  appearance: none;
  padding: 4px 20px;
  background: #64748b;
  color: #e2e8f0;
  display: inline-flex;
  align-items: center;
  transition: background .2s ease-out;
  white-space: nowrap;
  justify-content: center;
  cursor: pointer;
}

.btn[disabled] {
  opacity: 0.5;
  pointer-events: none;
}

.btn--primary {
  background: #e11d48;
  color: #fff;
}

.btn--primary:hover {
  background: #f43f5e;
}

.btn--transparent {
  background: rgba(255, 255, 255, .2);
  color: #fff;
}

.btn--secondary:hover {
  background: rgba(255, 255, 255, .3);
}

.btn--block {
  width: 100%;
}

.widget {
  padding: 20px;
  margin: 20px 0 20px 20px;
  background-image: linear-gradient(to bottom right, rgba(30, 41, 59, .5), rgba(30, 41, 59, .4));
  border-radius: 10px;
  border: 1px solid #1e293b;
}

.widget__heading {
  font-weight: bold;
  margin: 0 0 15px;
  font-size: 1.1rem;
}

.content-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.content-list__item+.content-list__item {
  margin-top: 10px;
}

.content-list__meta {
  color: #64748b;
  font-size: .8rem;
  display: block;
  margin-bottom: 3px;
}

.content-list__text {
  font-size: .9rem;
  line-height: 1.25;
}

.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.login-wrapper {
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #1e293b;
  padding: 2rem;
}

.form-label {
  display: block;
  font-size: .95rem;
  margin-bottom: .6rem;
  color: #cbd5e1;
}

.form-input {
  width: 100%;
  background: #1e293b;
  color: #f8fafc;
  appearance: none;
  border: 1px solid #334155;
  height: 2.6rem;
  padding: .5rem 1rem;
  border-radius: .25rem;
}

.form-input::placeholder {
  color: #cbd5e1;
}

.form-input:focus {
  outline: none;
  border-color: #cbd5e1;
}

.form-group+.form-group {
  margin-top: 1.5rem;
}

.form-error {
  color: #e11d48;
  font-size: .8rem;
  margin-top: .5rem;
}

.loading {
  text-align: center;
  margin-top: 5rem;
}
</style>
