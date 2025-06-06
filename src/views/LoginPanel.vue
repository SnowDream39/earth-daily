<template>
  <!-- 遮罩层 + 弹窗容器 -->
  <div 
    class="login-modal" 
    v-if="isShow" 
    @click.self="handleClose"
  >
    <div class="login-panel">
      <!-- 关闭按钮 -->
      <div class="close-btn" @click="handleClose">×</div>

      <!-- 登录表单 -->
      <h2 class="title">EARTH DAILY</h2>
      <p class="subtitle">UNFOLDED NEWS</p>

      <form @submit.prevent="handleLogin" class="form">
        <div class="form-group">
          <label class="label">邮箱</label>
          <input
            type="email"
            v-model="form.email"
            class="input"
            placeholder="your@email.com"
            required
          />
          <p class="error" v-if="errors.email">{{ errors.email }}</p>
        </div>

        <div class="form-group">
          <label class="label">密码</label>
          <input
            type="password"
            v-model="form.password"
            class="input"
            placeholder="••••••••"
            required
          />
          <div class="password-actions">
            <a href="#" class="link" @click.prevent>忘记密码?</a>
            <p class="error" v-if="errors.password">{{ errors.password }}</p>
          </div>
        </div>

        <button 
          type="submit" 
          class="btn" 
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>登录</span>
        </button>

        <p class="register-link">
          还没有账户? 
          <a href="#" class="link" @click.prevent>立即注册</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

// 接收父组件控制显示的状态
const props = defineProps<{
  isShow: boolean;
}>();

// 通知父组件关闭弹窗
const emit = defineEmits<{
  (e: 'close'): void;
}>();

// 表单数据 + 错误 + 加载状态
const form = reactive({
  email: '',
  password: ''
});
const errors = reactive({
  email: '',
  password: ''
});
const isLoading = ref(false);

// 关闭弹窗
const handleClose = () => {
  emit('close');
};

// 表单验证
const validateForm = (): boolean => {
  let isValid = true;
  errors.email = '';
  errors.password = '';

  if (!form.email) {
    errors.email = '请输入邮箱地址';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = '请输入有效的邮箱地址';
    isValid = false;
  }

  if (!form.password) {
    errors.password = '请输入密码';
    isValid = false;
  } else if (form.password.length < 6) {
    errors.password = '密码长度至少需要 6 个字符';
    isValid = false;
  }

  return isValid;
};

// 模拟登录
const handleLogin = async () => {
  if (!validateForm()) return;

  isLoading.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('登录成功：', form);
    // 可扩展：登录成功后跳转、存 Token 等逻辑
  } catch (error) {
    console.error('登录失败：', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
/* 遮罩层 */
.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* 半透明遮罩 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

/* 登录面板 */
.login-panel {
  width: 400px;
  background-color: #f0e9d8; /* 米色背景，贴合整体风格 */
  border: 2px solid #333;
  padding: 30px;
  position: relative; /* 用于关闭按钮定位 */
}

/* 关闭按钮 */
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #333;
}

/* 标题样式 */
.title {
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin: 0 0 10px 0;
  text-align: center; 
}
.subtitle {
  font-size: 18px;
  color: #333;
  margin: 0 0 10px 0;
  text-align: center;
}

/* 表单样式（复用复古风格） */
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.label {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}
.input {
  padding: 10px;
  border: 2px solid #333;
  background-color: #f0e9d8;
  color: #333;
  font-size: 14px;
  border-radius: 4px;
}
.input:focus {
  outline: none;
  border-color: #666;
}
.password-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.error {
  color: #c0392b;
  font-size: 12px;
  margin: 0;
}
.link {
  color: #333;
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
}
.link:hover {
  color: #666;
}
.btn {
  padding: 12px;
  background-color: #b87868f5;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  align-items: center
}
.btn:hover {
  background-color: #a65f4d;
}
.btn:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.6s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.register-link {
  color: #333;
  font-size: 14px;
  text-align: center;
  margin: 0;
}
</style>