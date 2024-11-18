<template>
  <div style="overflow: hidden">
    <div class="mainImg" :class="$i18n.locale === 'ar' ? 'ar' : ''">
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
  &.ar {
    float: right;
  }
  @media (max-width: 600px) {
    padding-top: 70px;
  }
  img {
    margin-top: 40px;
    height: 70vh;
    width: calc(100vw - 260px);
    object-fit: contain;
  }
}
</style>
