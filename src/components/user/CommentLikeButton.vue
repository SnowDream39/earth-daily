<template>
  <div class="flex flex-row flex-nowrap">
    <div class="text-lg rounded-2 hover:bg-gray/50" :class="dynamicClass" @click="click"></div>
    <span class="baseline-1" >{{ showCount }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { postLike, deleteLike } from '../../utils/api/comment'

const props = defineProps<{
  id: number,
  count: number
}>()

const active = defineModel<boolean>()
const dynamicClass = computed(() => {
  return active.value
   ? 'i-material-symbols-thumb-up'
  : 'i-material-symbols-thumb-up-outline'
})
const showCount = ref<number>(props.count)

const click = () => {
  if (active.value) {
    deleteLike(props.id);
    showCount.value -= 1;
  } else {
    postLike(props.id);
    showCount.value += 1;
  }
  active.value = !active.value;
}

</script>

