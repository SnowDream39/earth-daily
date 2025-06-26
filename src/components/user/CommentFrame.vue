<template>
  <div class="mx-[600px] w-[90%] p-4 bg-paper rounded shadow">
    <h2 class="text-xl font-semibold mb-4">评论区</h2>

    <!-- 新评论输入 -->
    <CommentInput/>

    <!-- 评论列表 -->
    <CommentList :comments="comments" :isReply="false" />


  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import CommentList from './CommentList.vue'
import CommentInput from './CommentInput.vue'
import { getByArticleId } from '@/utils/api/comment'
import { useStatusStore } from '@/store/status'
import emitter from '@/utils/emitter'

const statusStore = useStatusStore()

const comments = ref<any[]>([])

const loadComments = async () => {
  const data = await getByArticleId(statusStore.articleId)
  comments.value = data
}


watch(() => statusStore.articleId, loadComments)

onMounted(() => {
  emitter.on('reload-comments', loadComments)
})

onUnmounted(() => {
  emitter.off('reload-comments', loadComments)
})



</script>

<style scoped>
/* 你也可以用全局Tailwind，这里无额外样式 */
</style>
