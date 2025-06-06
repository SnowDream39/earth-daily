<template>
    <header class="h-[65px] w-[90%] flex justify-between items-center border-b-3 border-book border-solid">
      <RouterLink to="/" class="title text-4 font-bold uppercase">
        <span class="link">Earth Daily</span>
      </RouterLink>
      <div class="right flex gap-2 *:max-w-25 *:text-center"> 
        <RouterLink to="/why" class="menu text-4 uppercase flex hover:text-amber-600">
          <span class="link">Why Earth Daily?</span>
        </RouterLink>
        <RouterLink to="/more" class="menu text-4 uppercase flex hover:text-amber-600">
          <span class="link">Learn More</span>
        </RouterLink>
        <div class="btn_primary">Login</div>
      </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>

span.link {
  //color: #80b3ff; // 链接颜色，蓝色系
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    //color: #aaddff;
  }
}


</style>