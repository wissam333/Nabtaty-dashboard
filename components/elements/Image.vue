<template>
  <!-- <div> -->
  <ElementsVPlaceLoad
    v-if="!loaded"
    :width="width"
    :height="height"
    :classes="loadClasses"
    :light="light"
  />
  <img
    v-if="loaded"
    :id="id"
    :class="classes"
    :src="src"
    :alt="alt"
    @error="activeVPlaceLoad"
    :sytle="style"
  />

  <Skeleton v-if="!loaded" class="skeleton-loader"></Skeleton>
  <!-- <img v-if="loaded" :id="id" :class="classes" :width="width" :height="height" :src="src" :alt="alt" @error="activeVPlaceLoad" :sytle="style"/> -->
  <!-- </div> -->
</template>

<script setup>
const {
  src,
  width,
  height,
  id,
  classes,
  style,
  loadClasses,
  light,
  alt = "Image",
} = defineProps([
  "src",
  "id",
  "classes",
  "style",
  "width",
  "height",
  "loadClasses",
  "light",
  "alt",
]);
const loaded = ref(false);

const activeVPlaceLoad = (e) => {
  console.log("error loading image");
  loaded.value = false;
};

onMounted(() => {
  useCheckIfImageRendered(src, (exists) => {
    if (exists) loaded.value = true;
    else loaded.value = false;
  });
});
</script>
<style lang="scss" scoped>
.skeleton-loader {
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
}
.product {
  border-radius: 40px;
  &:hover {
    .product-img {
      .image-rendered {
        transform: scale(1.1);
      }
    }
  }
}
.image-rendered {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  object-fit: contain;
}
</style>
