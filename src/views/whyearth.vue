<script setup lang="ts">
</script>

<template>

       <div class="banner">
        <div class="title-wrapper border-w-4">
          <div class="title text-7xl lg:text-9xl">WHY EARTH DAILY</div>
        </div>
      </div>
      <div class="content">
        <div class="text-content">
          <p><strong>Why Earth Daily?</strong></p>
          <p>
            在信息爆炸的时代，新闻的传播速度前所未有，但传统新闻平台往往忽略了地理空间这一关键维度。
            Earth Daily 突破这一局限，创新性地将新闻事件与地理空间紧密结合，为您提供前所未有的新闻体验。
          </p>
          <p><strong>地理空间视角，深度理解世界</strong></p>
          <p>
            我们深知，每一则新闻都扎根于特定的地理位置，而这一位置往往蕴含着事件背后的关键线索和深层影响。
            Earth Daily 利用先进的地理信息系统（GIS）和三维地球展示技术（Cesium），将全球新闻精准定位在地图上。
            您无需在海量文字中迷失方向，只需轻轻点击地图，即可直观了解新闻发生的地点及其周边环境。
          </p>
          <p><strong>智能筛选，精准定位您的关注点</strong></p>
          <p>
            面对纷繁复杂的新闻海洋，Earth Daily 提供强大的智能筛选功能。
            您可根据时间、新闻类型等多维度条件，迅速锁定感兴趣的新闻内容。
            无论是突发的国际事件，还是您所在地区的本地新闻，都能一键获取，让信息获取更加高效精准。
          </p>
          <p><strong>AI 驱动，洞察新闻核心</strong></p>
          <p>
            Earth Daily 融入前沿人工智能技术，对新闻内容进行深度智能分析。
            我们的 AI 模型能够快速提炼新闻要点，生成简洁明了的摘要；
            智能推荐与您兴趣相符的新闻，拓展您的视野；
            并进行情感分析，帮助您把握新闻舆论倾向。
            在有限的时间内，让您迅速掌握新闻的核心信息。
          </p>
          <p><strong>个性化体验，打造专属于您的新闻世界</strong></p>
          <p>
            我们尊重每一位用户的独特偏好。
            在 Earth Daily，您可以轻松注册、登录，根据个人兴趣收藏新闻类别，
            定制专属的新闻订阅列表。
            此外，我们的事件追踪功能将为您记录并推送感兴趣的新闻后续动态，
            让您不错过任何重要更新。
          </p>
          <p>
            Earth Daily 不仅仅是一个新闻平台，它是一个探索世界的窗口，
            一个让您洞察全球脉动的工具。
            选择 Earth Daily，选择一种更直观、更高效、更个性化的新闻阅读方式。
            让我们带您跨越地理界限，领略世界的每一处动态。
            立即加入我们，开启您的 Earth Daily 之旅！
          </p>
        </div>
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

  .lines {
    border-top: 2px solid $color-border;
    position: relative;

    &::after {
      content: "";
      background-color: $color-border;
    }
  }
}

.content {
  padding: 20px 0;
  border-top: 2px solid #d1d5db;
}

.text-content {
  line-height: 1.8;
  font-size: 16px;
  max-width: 960px;
  margin: auto;
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

</style>
