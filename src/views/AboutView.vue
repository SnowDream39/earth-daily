<script setup lang="ts">
</script>

<template>
    <div class="banner">
        <div class="title-wrapper border-w-4">
            <div class="title text-7xl lg:text-9xl">ABOUT US</div>
        </div>
    </div>

    <section class="block">
        <div class="block-title">团队成员</div>
        <div class="horizontal-line"></div>
        <div class="about-list">
            <div class="about-card"><strong>庞金靖：</strong>xxxx</div>
            <div class="about-card"><strong>李书亦：</strong>xxxx</div>
            <div class="about-card"><strong>陈依涵：</strong>xxxx</div>
            <div class="about-card"><strong>张思齐：</strong>xxxx</div>
            <div class="about-card"><strong>王玙歆：</strong>xxxx</div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
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

.about-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.about-card {
    background-color: #ffffff;
    border: 1px solid #d1d5db;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    font-size: 16px;
    text-align: left;
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
}
</style>
