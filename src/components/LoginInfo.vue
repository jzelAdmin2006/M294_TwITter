<script setup>
import IconSparkles from '../components/icons/IconSparkles.vue'
</script>

<template>
    <section class="login-info">
        <div class="login-info__icon">
            <IconSparkles />
        </div>
        <div class="login-info__content">
            <h2 class="login-info__heading">
                Du bist nicht angemeldet
            </h2>
            <div class="login-info__action">
                <RouterLink to="/login" class=" btn btn--transparent">
                    Zum Login &nbsp; &rarr;
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style>
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
</style>