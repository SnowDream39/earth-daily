<template>

    <el-card class="register-card">
      <h2 style="text-align:center;">用户注册</h2>
      <el-form :model="form" :rules="rules" ref="registerForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirm">
          <el-input v-model="form.confirm" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onRegister">注册</el-button>
          <el-button @click="resetForm">重置</el-button>
          <el-button text @click="$emit('switch')">已有账号？返回登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>

</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { register } from '../../utils/api/user'

const form = reactive({
  username: '',
  email: '',
  password: '',
  confirm: '',
})

const registerForm = ref()

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: ['blur', 'change'] },
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  confirm: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== form.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
}

const onRegister = () => {
  registerForm.value.validate(async (valid) => {
    if (valid) {
      const response = await register(form)
      ElMessage.success('注册成功！🎉')
      console.log('注册信息：', form)
    } else {
      ElMessage.warning('请检查输入信息')
    }
  })
}

const resetForm = () => {
  registerForm.value.resetFields()
}
</script>

<style scoped>
h2 {
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}

.register-card {
  width: 450px;
  padding: 20px;
}
</style>
