<template>
  <div style="overflow: hidden" :class="$i18n.locale === 'en' ? 'en' : ''">
    <div class="mainImg" :class="useSidebar().value ? 'shrink' : ''">
      <img src="/photos/nabt.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.mainImg {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  float: left;

  @media (max-width: 600px) {
    padding-top: 70px;
  }
  img {
    margin-top: 40px;
    height: 60vh;
    width: calc(100vw - 260px);
    object-fit: contain;
  }
}

.en {
  .mainImg {
    float: right !important;
  }
}
</style>
