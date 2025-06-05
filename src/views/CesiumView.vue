<template>
  <div class="hidden w-full h-full"> 
    <CesiumFrame class="w-full h-full"/>
  </div>
  <Sidebar/>
  <aside class="absolute left-0 top-0 h-full w-10 bg-yellow-200">

  </aside>
  <Live2dWidget :model-url="modelUrl" class="absolute right-0 bottom-0"/>
</template>

<script lang="ts" setup>
import Sidebar from '@/components/Sidebar.vue'
import CesiumFrame from '@/components/CesiumFrame.vue'

const HiyoriUrl = '/hiyori_free_zh/runtime/hiyori_free_t08.model3.json'
const modelUrl = '/mao_pro_zh/runtime/mao_pro.model3.json'
</script>

<style lang="scss" scoped>

</style>