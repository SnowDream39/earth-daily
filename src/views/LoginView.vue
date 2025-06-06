<template>
  <div>
    <div>登录系统</div>
    <label for="name">用户名</label>
    <input type="text" id="name" v-model="name" placeholder="请输入用户名"/>
    <label for="password">密码</label>
    <input type="password" id="password" v-model="password" placeholder="请输入密码"/>
    <button @click="login">登录</button>
    <button @click="logout">登出</button>
    <div>{{ result }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as fief from '@fief/fief';

let login = () => {}
let logout = () => {}

function initialize() {
  const fiefClient = new fief.Fief({
    baseURL: 'http://8.209.210.116:8000',
    clientId: 'xa1yst7azpbCWb4z2tjDhu6L_HpIwMcVyNDJSgP3o7g',
  });
  const fiefAuth = new fief.browser.FiefAuth(fiefClient);
  login = () => {
    fiefAuth.redirectToLogin('http://localhost:5173/callback');
  };
  logout = () => {
    fiefAuth.logout('http://127.0.0.1:5173');
  };
}





const name = ref('')
const password = ref('')
const result = ref('')

onMounted(() => {
  initialize()
})

</script>