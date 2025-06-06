<template>
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
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">


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