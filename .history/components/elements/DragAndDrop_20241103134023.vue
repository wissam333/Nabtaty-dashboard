<template>
  <div class="drop-area" @drop="" @dragover.prevent>
    <div class="upload-box">
      <label for="fileInput" class="upload-icon">
        <font-awesome class="text-white" :icon="['fas', 'upload']" />
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style="display: none"
      />
      <h5 class="fw-bold">{{ "" }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drop-area {
  width: 100%;
  height: 300px;
  border: 2px dashed rgb(102 255 204 / 46%);
  border-radius: 6px;
  text-align: center;
  transition: all 0.2s linear;
  &:hover {
    box-shadow: 0px 2px 6px rgba(4, 119, 81, 0.3);
  }
  .upload-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .upload-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      margin-bottom: 5px;
      background-color: rgb(102 255 204 / 46%);
      border-radius: 6px;
      i {
        color: #19ad7b;
        font-size: 20px;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
