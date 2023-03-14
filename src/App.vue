<script setup>
import IconLogin from './components/icons/IconLogin.vue'
import IconHome from './components/icons/IconHome.vue'
import IconSparkles from './components/icons/IconSparkles.vue'
</script>

<template>
  <div class="container">
    <div class="grid">
      <aside class="sidebar sidebar--left">
        <!-- Logo -->
        <div class="logo">
          Tw<strong>IT</strong>ter
        </div>

        <!-- Navigation -->
        <nav class="nav">
          <a href="#" class="router-link-active">
            <IconHome/>
            Stream
          </a>
          <a href="#">
            <IconLogin/>
            Login
          </a>
        </nav>
      </aside>
      <main class="content">

        <!-- Login Info -->
        <section class="login-info">
          <div class="login-info__icon">
            <IconSparkles/>
          </div>
          <div class="login-info__content">
            <h2 class="login-info__heading">
              Du bist nicht angemeldet
            </h2>
            <div class="login-info__action">
              <a href="#" class="btn btn--transparent">
                Zum Login &nbsp; &rarr;
              </a>
            </div>
          </div>
        </section>

        <!-- Composer -->
        <form class="composer">
          <label class="composer__prompt">Was geht?</label>
          <textarea maxlength="160" class="composer__textarea" placeholder="Verfasse einen Tweet..."/>
          <div class="composer__actions">
            <div class="composer__stats stats">
              <span class="stats__counter">0</span>
              <span class="stats__max">/ 160</span>
            </div>
            <button disabled class="btn btn--primary">
              Tweet veröffentlichen
            </button>
          </div>
        </form>

        <!-- Stream -->
        <section class="stream">
          <!-- Tweet -->
          <div class="tweet" v-for="tweet in [1, 2, 3, 4, 5, 6, 7, 8, 9 ]">
            <div class="tweet__avatar">
              <img :src="`https://i.pravatar.cc/100?u=${tweet}`" alt=""/>
            </div>
            <div class="tweet__content">
              <div class="tweet__header">
                <span class="tweet__author">Max Mustermann</span>
                <span class="tweet__timestamp">vor 1 Minute</span>
              </div>
              <div class="tweet__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam
                tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc. Sed euismod, nunc ut
                aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc.
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside class="sidebar sidebar--right">
        <!-- Top User Widget -->
        <section class="widget">
          <h2 class="widget__heading">
            Top User
          </h2>

          <ul class="content-list">
            <li class="content-list__item" v-for="user in [1, 2, 3, 4, 5]">
              <a href="#">
                <span class="content-list__meta">
                  94 Tweets
                </span>
                <span class="content-list__text">
                  Max Mustermann
                </span>
              </a>
            </li>
          </ul>
        </section>

        <!-- Neue User Widget -->
        <section class="widget">
          <h2 class="widget__heading">
            Neue User
          </h2>

          <ul class="content-list">
            <li class="content-list__item" v-for="user in [1, 2, 3, 4, 5]">
              <a href="#">
                <span class="content-list__meta">
                  30.12.2022 15:00
                </span>
                <span class="content-list__text">
                  Max Mustermann
                </span>
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  </div>
</template>

<style>

*, *::before, *::after {
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

.logo {
  font-size: 2.6rem;
  font-weight: 500;
  padding: 20px 0;

  background: linear-gradient(to bottom, #fb7185, #e11d48);
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo strong {
  font-weight: 800;
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

.tweet {
  display: flex;
  padding: 20px;
}

.tweet + .tweet {
  border-top: 1px solid #1e293b;
}

.tweet:last-child {
  border-bottom: 1px solid #1e293b;
}

.tweet__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.tweet__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tweet__content {
  flex: 1;
}

.tweet__header {
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
}

.tweet__author {
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 10px;
}

.tweet__timestamp {
  color: #64748b;
  font-size: .9rem;
}

.tweet__text {
  font-size: 1rem;
  line-height: 1.25;
}

.login-info {
  padding: 20px;
  color: #f1f5f9;
  background: #334155;
  position: sticky;
  top: 0;
  z-index: 10;
}

.login-info__icon svg {
  width: 50px;
}

.login-info__heading {
  margin: 0;
  line-height: 1;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 20px 0;
}

.login-info__content {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
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

.content-list__item + .content-list__item {
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

.form-group + .form-group {
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
