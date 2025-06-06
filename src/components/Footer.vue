<template>
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
        <a href="/about">About Us</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
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

a {
  color: #80b3ff; // 链接颜色，蓝色系
  margin: 0 8px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #aaddff;
  }
}


</style>