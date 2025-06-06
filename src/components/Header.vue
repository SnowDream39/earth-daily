<template>
    <header class="h-[65px] w-[90%] flex justify-between items-center border-b-3 border-book border-solid">
      <div class="title text-4 font-bold uppercase">Earth Daily</div>
      <div class="right flex gap-2 *:max-w-25 *:text-center">
        <RouterLink to="/why" class="menu text-4 uppercase flex hover:text-amber-600">Why Earth Daily?</RouterLink>
        <RouterLink to="/more" class="menu text-4 uppercase flex hover:text-amber-600">Learn More</RouterLink>
        <div class="btn_primary">Login</div>
      </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>

a {
  color: #80b3ff; // 链接颜色，蓝色系
  text-decoration: none;
  margin: 0 8px;

  &:hover {
    text-decoration: underline;
    color: #aaddff;
  }
}


</style>