<template>
  <div>正在登录中，请稍候……</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as fief from '@fief/fief'

const fiefClient = new fief.Fief({
  baseURL: 'http://8.209.210.116:8000',
  clientId: 'xa1yst7azpbCWb4z2tjDhu6L_HpIwMcVyNDJSgP3o7g'
})

const fiefAuth = new fief.browser.FiefAuth(fiefClient)

onMounted(async () => {
  try {
    await fiefAuth.authCallback('http://localhost:5173/callback')
    window.location.href = '/'
  } catch (error) {
    console.error('认证失败:', error)
  }
})
</script>
