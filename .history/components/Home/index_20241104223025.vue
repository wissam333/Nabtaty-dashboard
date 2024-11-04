<template>
  <div style="overflow: hidden">
    <div class="mainImg">
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
    height: 70vh;
    width: 70vw;
    object-fit: contain;
  }
}
</style>
