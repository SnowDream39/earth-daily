<script setup lang="ts">
import { ref } from 'vue';
import LoginPanel from './views/LoginPanel.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// 定义一个响应式变量来控制登录面板的显示与隐藏
const showLoginPanel = ref(false);
// 点击 Login 按钮时显示登录面板
const handleLoginClick = () => {
  showLoginPanel.value = true;
};
</script>

<template>
  <div class="wrapper h-full w-full m-0 p-0 overflow-y-auto flex flex-col items-center *:text-book">
    <Header/>
    <main class="w-[90%] flex flex-col bg-brand">
      <RouterView/>
    </main>
    <Footer/>
    <!-- 使用 LoginPanel 组件，并传入显示状态 -->
    <LoginPanel :isShow="showLoginPanel" @close="showLoginPanel = false" />
  </div>
</template>

<style lang="scss" scoped>

.wrapper {
  background-color: $color-base;
  background-image: url("https://www.transparenttextures.com/patterns/paper-2.png");
  background-position: center;
}


</style>
