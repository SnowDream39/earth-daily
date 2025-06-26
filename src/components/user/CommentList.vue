<template>
  <div v-if="comments && comments.length === 0" class="text-gray-500">暂无评论</div>
  <ul class="space-y-4 mb-6">
    <li v-for="comment in comments" :key="comment.id" class="p-3 rounded bg-gray/10 dark:bg-gray/90!" :class="iClasses">
      <Comment :comment="comment" :isReply="isReply" />
    </li>
  </ul>
</template>


<script lang="ts" setup>
import Comment from './Comment.vue';
import { computed } from 'vue';

 const props =defineProps<{
  comments: any[],
  isReply: boolean
}>()


const iClasses = computed(() => {
  return {
    'border': ! props.isReply
  }
})

</script>
