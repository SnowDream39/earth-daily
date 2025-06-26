<template>
  <div class="text-lg rounded-2 hover:bg-gray/50" :class="dynamicClass" @click="click"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  id: number
}>()

const active = defineModel()
const dynamicClass = computed(() => {
  return 'i-material-symbols-reply'
})

const click = () => {
  if (active.value) {
  } else {
  }
  active.value = !active.value;
}
props
</script>

