<script setup lang="ts">
import { ref } from 'vue';
import LoginPanel from './LoginPanel.vue';
// 定义一个响应式变量来控制登录面板的显示与隐藏
const showLoginPanel = ref(false);
// 点击 Login 按钮时显示登录面板
const handleLoginClick = () => {
  showLoginPanel.value = true;
};
</script>

<template>
  <div class="wrapper h-full w-full m-0 p-0 overflow-y-auto flex flex-col items-center *:text-book">
    <header class="h-[65px] w-[90%] flex justify-between items-center border-b-3 border-book border-solid">
      <div class="title text-4 font-bold uppercase">Earth Daily</div>
      <div class="right flex gap-2 *:max-w-25 *:text-center">
        <div class="menu text-4 uppercase flex hover:text-amber-600">Why Earth Daily?</div>
        <div class="menu text-4 uppercase flex hover:text-amber-600">Learn More</div>
        <div class="btn_primary">Login</div>
      </div>
    </header>
    <main class="w-[90%] flex flex-col bg-brand">
      <div class="banner">
        <div class="title-wrapper border-w-4">
          <div class="title text-7xl lg:text-9xl">EARTH DAILY</div>
          <div class="subtitle text-5xl lg:text-7xl">UNFOLDED NEWS</div>
        </div>
      </div>
      <div class="flex justify-between py-4 border-t-2 gap-x-4">

        <div class="left-box flex-1 h-80 border-t-2">
          <div class="h-60">
            <p to="/why">Earth Daily 是一个展示全世界事实发生的新闻的网站。</p>
            <p>Earth Daily 允许用户查看全球新闻，并分享自己的想法。</p>
          </div>
          <div class="btn_success w-30" id="btn-get-started">
            <a href="/map">Get Started</a>
          </div>
        </div>
        <div class="right-box border-2 rounded-xl ">
          <div class="globe-container">

            <div class="globe bg-blue-400"></div>
          </div>
        </div>
      </div>
    </main>
    <footer class="w-full bg-gray-800 text-gray-200 text-base px-5 py-7 text-center border-t-2 border-gray-600">
      <div class="footer-content max-w-6xl my-auto flex flex-wrap justify-center gap-5">
        <div class="footer-item text-gray-200">© SnowDream39 2025</div>
        <div class="footer-item social-links *:text-2xl">
          <a href="#" aria-label="Facebook">Fb</a>
          <a href="#" aria-label="Twitter">Tw</a>
          <a href="#" aria-label="Instagram">Ig</a>
        </div>
        <div class="footer-item">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
    <!-- 使用 LoginPanel 组件，并传入显示状态 -->
    <LoginPanel :isShow="showLoginPanel" @close="showLoginPanel = false" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: $color-base;
  background-image: url("https://www.transparenttextures.com/patterns/paper-2.png");
  background-position: center;
}

a {
  color: #80b3ff; // 链接颜色，蓝色系
  text-decoration: none;
  margin: 0 8px;

  &:hover {
    text-decoration: underline;
    color: #aaddff;
  }
}


.banner {
  width: 90%;
  margin: 0 auto; // 整体居中容器
  position: relative;
  min-height: 150px;
  //font-family: $subtitle-font;
  display: flex;
  flex-direction: column;
  flex: 1;

  .title-wrapper {
    width: fit-content; // 宽度包裹内容
    margin: 0 auto; // 让容器居中
    vertical-align: bottom; // 有时候帮字体往下靠
    display: inline-block;
  }

  .title {
    font-family: $font-family-header; //font-Cheading;
    //font-weight: bold;
    letter-spacing: 3px;
    margin: 0;
    text-align: left;
    padding-bottom: 5px;
  }

  .subtitle {
    font-family: font-secondary;
    font-size: 48px;
    font-weight: 300;
    letter-spacing: 1px;
    margin: 0;
    padding-top: 0;
    text-transform: capitalize;
    text-align: left;
  }


  .right-box {
    border: 2.5px solid $color-border;
    border-radius: 20px;
    perspective: 800px;
  }

  .lines {
    border-top: 2px solid $color-border;
    position: relative;

    &::after {
      content: "";
      background-color: $color-border;
    }
  }
}


footer {

  .footer-item {
    flex: 1 1 200px; // 灵活伸缩，最小宽200px
    min-width: 180px;

    &.social-links {
      display: flex;
      justify-content: center;
      gap: 15px;
    }
  }

  @media (max-width: 600px) {
    padding: 20px 10px;

    .footer-content {
      flex-direction: column;
      align-items: center;
    }

    .footer-item {
      flex: none;
      width: 100%;
      margin-bottom: 15px;
      text-align: center;
    }
  }
}

.globe-container {
  perspective: 800px; // 观察距离增加3D感觉
  width: 300px;
  height: 300px;
}

.globe {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url('/NASA2.jpg');
  background-size: cover;
  animation: spin 10s linear infinite;
  transform-style: preserve-3d; // 保留3D层
}

@keyframes spin {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
</style>
