<script setup lang="ts">
</script>

<template>
  <div class="wrapper h-full w-full m-0 p-0 overflow-y-auto flex flex-col items-center">
    <header class="h-[65px] w-[90%] flex justify-between items-center">
      <div class="title text-4 font-bold uppercase">Earth Daily</div>
      <div class="right">
        <div class="menu text-4 uppercase flex">Why Earth Daily?</div>
        <div class="menu text-4 uppercase flex">Learn More</div>
        <div class="btn_primary">Login</div>
      </div>
    </header>
    <main class="w-[90%] flex flex-col">
      <div class="banner">
        <div class="title-wrapper border-w-4">
          <div class="title text-7xl lg:text-9xl">EARTH DAILY</div>
          <div class="subtitle text-5xl lg:text-7xl">UNFOLDED NEWs</div>
        </div>
      </div>
      <div class="flex justify-between py-4 border-t-2 gap-x-4">

        <div class="left-box flex-1 h-80 border-t-2">
          <div class="h-60">说明文字……………………………………………………</div>
          <div class="btn_success w-30" id="btn-get-started">Get Started</div>
        </div>
        <div class="right-box border-2 rounded-xl ">
          <div class="globe"></div>
        </div>
      </div>
    </main>
    <footer>
      <div class="footer-content">
        <div class="footer-item">
          <© 2025 Your Company </div>
            <div class="footer-item social-links">
              <a href="#" aria-label="Facebook">Fb</a>
              <a href="#" aria-label="Twitter">Tw</a>
              <a href="#" aria-label="Instagram">Ig</a>
            </div>
            <div class="footer-item">
              <<a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
            </div>
        </div>
    </footer>
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

header {
  border-bottom: 3px solid $color-font-base;

  .title {
    color: $color-font-base;
  }

  .menu {
    color: $color-font-base;

    &:hover {
      color: $color-primary;
    }
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
  width: 100%;
  background-color: #222; // 深色背景
  color: #eee; // 浅色文字
  padding: 30px 20px; // 上下内边距
  text-align: center;
  font-size: 1rem;
  border-top: 2px solid #444; // 顶部分割线



  .footer-content {
    max-width: 1200px; // 最大宽度，居中显示
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .footer-item {
    flex: 1 1 200px; // 灵活伸缩，最小宽200px
    min-width: 180px;

    &.social-links {
      display: flex;
      justify-content: center;
      gap: 15px;

      a {
        font-size: 1.5rem;
      }
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

.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 40%;
}

.globe-container {
  perspective: 800px; // 观察距离增加3D感觉
  width: 200px;
  height: 200px;
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
