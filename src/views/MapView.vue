<template>
  <div class="hidden w-full h-full"> 
    <CesiumFrame class="w-full h-full"/>
  </div>
  <Sidebar/>
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