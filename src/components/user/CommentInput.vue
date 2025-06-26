<template>
  <form @submit.prevent="submitComment" class="space-y-2 mb-4">
    <textarea
      v-model="content"
      placeholder="写下你的评论..."
      rows="3"
      class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      required
    ></textarea>

    <div class="flex justify-between items-center">
      <button
        type="submit"
        class="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition disabled:opacity-50 text-sm"
        :disabled="loading"
      >
        {{ loading ? '提交中...' : (props.parent_id ? '回复' : '发表评论') }}
      </button>
      <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { post } from '@/utils/api/comment'
import { useStatusStore } from '@/store/status'
import emitter from '@/utils/emitter'

const statusStore = useStatusStore()

const props = defineProps<{
  parent_id?: number
}>()

const content = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

async function submitComment() {
  if (!content.value.trim()) return
  loading.value = true
  error.value = null

  try {
    await post({
      content: content.value,
      article_id: statusStore.articleId,
      parent_id: props.parent_id ?? undefined,
    })

    content.value = ''
    emitter.emit('reload-comments')
  } catch {
    error.value = '提交失败，请稍后再试'
  } finally {
    loading.value = false
  }
}
</script>
