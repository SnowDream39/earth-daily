<template>
  <div class="login-container">
    <transition name="fade">
      <LoginCard v-if="isLoginMode" @switch="isLoginMode = false" />
      <RegisterCard v-else @switch="isLoginMode = true" />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginCard from '../components/user/LoginCard.vue';
import RegisterCard from '../components/user/RegisterCard.vue';

const isLoginMode = ref(true)
</script>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
