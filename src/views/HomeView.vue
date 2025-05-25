<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <div class="title">Earth Daily</div>
      <div class="right">
        <div class="menu">Why Earth Daily?</div>
        <div class="menu">Learn More</div>
        <div class="btn_primary">Login</div>
      </div>
    </div>
    <div class="banner">
      <div class="title-wrapper">
        <div class="title">EARTH DAILY</div>
        <div class="subtitle">UNFOLDED NEWs</div>
      </div>
      <div class="lines"></div>
      <div class="btn_success" id="btn-get-started">Get Started</div>
      <div class="right-box">
        <div class="globe"></div>
      </div>
    </div>
    <footer class="footer">
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
  //background-color: #ffffff9b;
  background-color: $color-base;
  //background-color: #f3e7cc;
  background-image: url("https://www.transparenttextures.com/patterns/paper-2.png");
  //background-image: url("https://www.transparenttextures.com/patterns/paper-2.png");
  min-height: 150vh;
  min-width: max-content;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  background-position: center;
}

.header {
  height: 65px;
  width: 90%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 3px solid $color-font-base;
  top: 0;
  left: 5%;
  right: 5%;

  .title {
    font-size: 18px;
    font-weight: bold;
    color: $color-font-base;
    text-transform: uppercase;
  }

  .menu {
    font-size: 18px;
    color: $color-font-base;
    text-transform: uppercase;
    display: flex;

    &:hover {
      color: $color-primary;
    }
  }
}

.footer {
  width: 100%;
  background-color: #222; // 深色背景
  color: #eee; // 浅色文字
  padding: 30px 20px; // 上下内边距
  text-align: center;
  font-size: 1rem;
  border-top: 2px solid #444; // 顶部分割线

  a {
    color: #80b3ff; // 链接颜色，蓝色系
    text-decoration: none;
    margin: 0 8px;

    &:hover {
      text-decoration: underline;
      color: #aaddff;
    }
  }

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
    font-size: 128px;
    letter-spacing: 3px;
    margin: 0;
    height: 155px;
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

  #btn-get-started {
    position: absolute;
    top: 590px;
    left: 60px;
  }

  .right-box {
    position: absolute;
    top: 260px;
    right: 0px;
    width: 380px;
    height: 400px;
    border: 2.5px solid $color-border;
    border-radius: 20px;
    perspective: 800px;
  }

  .lines {
    border-top: 2px solid $color-border;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 30px;
      left: 0;
      height: 2px;
      width: 70%;
      background-color: $color-border;
    }
  }
}

.globe-container {
  perspective: 800px; // 观察距离增加3D感觉
  width: 200px;
  height: 200px;
}

.globe {
  width: 100%;
  height: 100%;
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
