<script setup lang="ts">
</script>

<template>

      <div class="banner">
        <div class="title-wrapper border-w-4">
          <div class="title text-7xl lg:text-9xl">LEARN MORE</div>
        </div>
      </div>

      <section class="block">
        <div class="block-title">产品功能详解</div>
        <div class="horizontal-line"></div>
        <div class="block-grid">
          <div class="block-item">
            <div class="item-title">新闻与地理空间的联动展示</div>
            <p>Earth Daily 利用先进的地图技术，将新闻事件精准地定位在三维地球模型上...</p>
          </div>
          <div class="divider"></div>
          <div class="block-item">
            <div class="item-title">多维度新闻筛选与个性化推荐</div>
            <p>Earth Daily 提供强大的多维度新闻筛选功能，结合用户偏好推荐新闻内容...</p>
          </div>
          <div class="divider"></div>
          <div class="block-item">
            <div class="item-title">AI 新闻摘要与分析</div>
            <p>AI 技术可提炼新闻要点并生成简洁摘要，提供情感分析辅助判断...</p>
          </div>
        </div>
      </section>

      <section class="block">
        <div class="block-title">技术原理与优势</div>
        <div class="horizontal-line"></div>
        <div class="block-grid">
          <div class="block-item">
            <div class="item-title">三维地球展示技术（Cesium）</div>
            <p>Cesium 实现高性能地图交互，展示全球新闻地理分布...</p>
          </div>
          <div class="divider"></div>
          <div class="block-item">
            <div class="item-title">人工智能（AI）技术的应用</div>
            <p>AI 覆盖分类、摘要、推荐、情感分析等，提高新闻处理智能化水平...</p>
          </div>
          <div class="divider"></div>
          <div class="block-item">
            <div class="item-title">前后端技术架构</div>
            <p>采用 HTML5/Vite 前端，GeoServer/Python 后端，确保响应与稳定性...</p>
          </div>
        </div>
      </section>

</template>

<style lang="scss" scoped>
.wrapper {
  background-color: $color-base;
  background-image: url("https://www.transparenttextures.com/patterns/paper-2.png");
  background-position: center;
}

.block {
  margin: 60px auto;
  max-width: 1200px;
  text-align: center;
}

.block-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #1e3a8a;
}

.horizontal-line {
  height: 3px;
  background-color: #3b82f6;
  width: 120px;
  margin: 0 auto 30px;
  border-radius: 2px;
}

.block-grid {
  display: flex;
  justify-content: space-between;
  gap: 0;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
}

.block-item {
  flex: 1;
  min-width: 280px;
  padding: 24px;
  font-size: 15px;
  line-height: 1.7;
  text-align: left;
}

.item-title {
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  font-size: 17px;
  color: #1e40af;
}

.divider {
  width: 1px;
  background-color: #d1d5db;
}

.banner {
  width: 90%;
  margin: 0 auto;
  position: relative;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  flex: 1;

  .title-wrapper {
    width: fit-content;
    margin: 0 auto;
    vertical-align: bottom;
    display: inline-block;
  }

  .title {
    letter-spacing: 3px;
    margin: 0;
    text-align: left;
    padding-bottom: 5px;
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
</style>