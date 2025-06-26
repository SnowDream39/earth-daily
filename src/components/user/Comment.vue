<template>
  <div class="comment-block pl-4 mt-4">
    <!-- 评论头部 -->
    <div class="flex justify-between items-center mb-1">
      <span class="font-medium text-gray-800">{{ comment.username || '匿名' }}</span>
      <span class="text-xs text-gray-400">{{ formatTime(comment.created_at) }}</span>
    </div>

    <!-- 评论内容 -->
    <p class="whitespace-pre-line text-gray-700">{{ comment.content }}</p>

    <!-- 点赞、回复按钮 -->
    <div class="actions text-right text-xs text-gray-400 flex flex-row justify-between text-lg">
      <CommentReplyButton :id="comment.id" v-model="replyActive" />
      <div class="flex flex-row text-lg gap-1">
        <CommentLikeButton :id="comment.id" :count="comment.like_count" v-model="likeActive" />
      </div>
    </div>

    <!-- 回复输入框 -->
    <CommentInput v-if="replyActive" :parent_id="comment.id" />


    <!-- 嵌套显示回复 -->
    <div v-if="comment.replies && comment.replies.length > 0" class="replies border-l border-gray-200 ml-4 mt-2">
      <CommentList
        :comments="comment.replies"
        :isReply="true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import CommentLikeButton from './CommentLikeButton.vue'
import CommentReplyButton from './CommentReplyButton.vue'
import CommentInput from './CommentInput.vue'
import { formatTime } from '@/utils/date'
import CommentList from './CommentList.vue'
import emitter from '@/utils/emitter'

const props = defineProps<{ comment: any }>()
const replyActive = ref(false)
const likeActive = ref(props.comment.liked)

watch(() => replyActive.value, (value) => {
  console.log(value)
})

function closeReply() {
  replyActive.value = false
}

onMounted(() => {
  emitter.on('reload-comments', closeReply)
})

onUnmounted(() => {
  emitter.off('reload-comments', closeReply)
})
</script>
