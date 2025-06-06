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
            <p>Earth Daily 利用先进的地图技术，将新闻事件精准地定位在三维地球模型上。用户可以自由地缩放和旋转地图，查看不同地区的新闻分布情况，以及新闻事件与周边地理环境的关系。例如，用户可以直观地看到某次自然灾害发生的具体位置、影响范围，以及周边的交通、人口分布等信息。这种直观的展示方式，让用户能够更全面地了解新闻事件的背景和影响。</p>
          </div>
          <div class="divider"></div>
          <div class="block-item">
            <div class="item-title">多维度新闻筛选与个性化推荐</div>
            <p>Earth Daily 提供了强大的多维度新闻筛选功能，用户可以根据时间范围、新闻类别、地理位置等条件，快速找到自己感兴趣的新闻。同时，基于用户浏览历史和兴趣偏好，AI 智能算法为用户进行个性化的新闻推荐。推荐算法会不断学习和优化，以确保用户每次打开 Earth Daily，都能看到符合自己口味的新闻内容，节省用户查找信息的时间。</p>
          </div>
          <div class="divider"></div>
          <div class="block-item">
            <div class="item-title">AI 新闻摘要与分析</div>
            <p>针对海量新闻数据，Earth Daily 的 AI 技术能够进行深度分析处理，提取关键信息，生成简洁而准确的新闻摘要。这帮助用户在短时间内快速了解新闻的主要内容，抓住重点。此外，AI 还具备情感分析功能，通过分析新闻中的语言情感倾向，为用户提供更好的参考，辅助用户形成自己的观点和判断。</p>
          </div>
        </div>
      </section>

      <section class="block">
        <div class="block-title">技术原理与优势</div>
        <div class="horizontal-line"></div>
        <div class="block-grid">
          <div class="block-item">
            <div class="item-title">三维地球展示技术（Cesium）</div>
            <p>Cesium 则是一种高性能的三维地球渲染引擎，它能够实现流畅的地图交互功能，让用户可以直观地查看新闻事件的地理分布。通过和 Cesium 技术的结合，Earth Daily 为用户提供了更流畅、更直观的新闻地理展示体验。</p>
          </div>
          <div class="divider"></div>
          <div class="block-item">
            <div class="item-title">人工智能（AI）技术的应用</div>
            <p>AI 技术在 Earth Daily 的多个方面得到了广泛应用，包括新闻分类、摘要、推荐以及情感分析等。例如，利用自然语言处理技术，AI 可以对新闻文本进行深入理解和分析，从而实现精准的新闻分类和摘要生成。这些 AI 技术的应用，使 Earth Daily 能够为用户提供更智能、更个性化的新闻服务。</p>
          </div>
          <div class="divider"></div>
          <div class="block-item">
            <div class="item-title">前后端技术架构</div>
            <p>在前后端技术架构方面，Earth Daily 采用了先进的技术组合。前端使用 HTML5、SCSS、Vite、JavaScript 等技术，实现了响应式的设计和流畅的用户体验。后端则采用 Python、GeoServer等技术框架，确保了平台的高性能和可扩展性。通过前后端技术的合理搭配，Earth Daily 能够高效地处理大量新闻数据，并为用户提供更加稳定和可靠的服务。</p>
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
  flex-flow: column wrap;
  justify-content: space-between;
  gap: 0;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .block-grid {
    flex-direction: row;
  }
}

.block-item {
  flex: 1;
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