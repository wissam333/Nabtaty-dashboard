<template>
  <form
    class="contain"
    :class="sidebar ? 'shrink' : ''"
    @submit.prevent="addProduct"
  >
    <div class="title-container">
      <div class="head-title">
        <h4 class="header4">
          {{ $i18n.locale === "ar" ? "إضافة نبات جديد" : "Add a new Plant" }}
        </h4>
        <p>
          {{
            $i18n.locale === "ar"
              ? "كل النباتات موجودين"
              : "All Plants are listed"
          }}
          <nuxt-link to="/ListProduct">
            {{ $i18n.locale === "ar" ? "هنا" : "here" }}</nuxt-link
          >
        </p>
      </div>
      <div class="mt-2">
        <input
          type="submit"
          :value="$i18n.locale === 'ar' ? 'نشر النبات' : ' Publish Plant'"
          class="btn btn-success text-white"
        />
      </div>
    </div>

    <main>
      <div class="form row gy-3">
        <div class="col-sm-12 col-lg-8">
          <div class="main-info box block-border">
            <h5>
              {{
                $i18n.locale === "ar"
                  ? "معلومات عن النبات "
                  : "Plant Information "
              }}
            </h5>
            <!-- Arabic main -->
            <div class="d-flex flex-column">
              <div class="d-flex flex-column-reverse mb-3">
                <input
                  v-model="titleAr"
                  id="titleAr"
                  type="text"
                  required
                  maxlength="30"
                  autocomplete="off"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'الاسم باللغة العربية'
                      : 'Name In Arabic'
                  "
                  pattern="[A-Za-z\s]+"
                  title="Enter only letters and spaces"
                />
                <label for="titleAr">{{
                  $i18n.locale === "ar"
                    ? "الاسم باللغة العربية"
                    : "Name In Arabic"
                }}</label>
              </div>

              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="descAr"
                  id="descAr"
                  rows="5"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'الوصف باللغة العربية'
                      : 'Description In Arabic'
                  "
                ></textarea>
                <label for="descAr">{{
                  $i18n.locale === "ar"
                    ? "الوصف باللغة العربية"
                    : "Description In Arabic"
                }}</label>
              </div>
            </div>

            <!-- English main -->
            <div class="d-flex flex-column mt-5">
              <div class="d-flex flex-column-reverse mb-3">
                <input
                  v-model="titleEn"
                  id="titleEn"
                  type="text"
                  required
                  maxlength="30"
                  autocomplete="off"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'الاسم باللغة الانجليزية'
                      : 'Name In English'
                  "
                  pattern="[A-Za-z\s]+"
                  title="Enter only letters and spaces"
                />
                <label for="titleEn">{{
                  $i18n.locale === "ar"
                    ? "الاسم باللغة الانجليزية"
                    : "Name In English"
                }}</label>
              </div>

              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="descEn"
                  id="descEn"
                  rows="5"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'الوصف باللغة الانجليزية'
                      : 'Description In English'
                  "
                ></textarea>
                <label for="descEn">{{
                  $i18n.locale === "ar"
                    ? "الوصف باللغة الانجليزية"
                    : "Description In English"
                }}</label>
              </div>
            </div>

            <!-- Water Ar -->
            <div class="d-flex flex-column mt-5">
              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="waterAr"
                  id="waterAr"
                  rows="2"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'الماء باللغة العربية'
                      : 'Water in Arabic'
                  "
                ></textarea>
                <label for="waterAr">
                  <font-awesome :icon="['fas', 'droplet']" />{{
                    $i18n.locale === "ar"
                      ? "الماء باللغة العربية"
                      : "Water in Arabic"
                  }}</label
                >
              </div>
            </div>

            <!-- Water En -->
            <div class="d-flex flex-column">
              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="waterEn"
                  id="waterEn"
                  rows="2"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'الماء باللغة الانجليزية'
                      : 'Water in English'
                  "
                ></textarea>
                <label for="waterEn">
                  <font-awesome :icon="['fas', 'droplet']" />{{
                    $i18n.locale === "ar"
                      ? "الماء باللغة الانجليزية"
                      : "Water in English"
                  }}</label
                >
              </div>
            </div>

            <!-- Temperatures Ar -->
            <div class="d-flex flex-column mt-10">
              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="temperaturesAr"
                  id="temperaturesAr"
                  rows="2"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'الحرارة باللغة العربية'
                      : 'Temperatures in Arabic'
                  "
                ></textarea>
                <label for="temperaturesAr">
                  <font-awesome :icon="['fas', 'temperature-high']" />
                  {{
                    $i18n.locale === "ar"
                      ? "الحرارة باللغة العربية"
                      : "Temperatures in Arabic"
                  }}</label
                >
              </div>
            </div>

            <!-- Temperatures En -->
            <div class="d-flex flex-column">
              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="temperaturesEn"
                  id="temperaturesEn"
                  rows="2"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'الحرارة باللغة الانجليزية'
                      : 'Temperatures in English'
                  "
                ></textarea>
                <label for="temperaturesEn"
                  ><font-awesome :icon="['fas', 'temperature-high']" />{{
                    $i18n.locale === "ar"
                      ? "الحرارة باللغة الانجليزية"
                      : "Temperatures in English"
                  }}</label
                >
              </div>
            </div>

            <!-- Part Sun Ar -->
            <div class="d-flex flex-column mt-10">
              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="partAr"
                  id="partAr"
                  rows="2"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'مشمس بشكل جزئي باللغة العربية'
                      : 'Part Sun in Arabic'
                  "
                ></textarea>
                <label for="partAr">
                  <font-awesome :icon="['fas', 'cloud-sun']" />
                  {{
                    $i18n.locale === "ar"
                      ? "مشمس بشكل جزئي باللغة العربية"
                      : "Part Sun in Arabic"
                  }}</label
                >
              </div>
            </div>

            <!-- Part Sun En -->
            <div class="d-flex flex-column">
              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="partEn"
                  id="partEn"
                  rows="2"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'مشمس بشكل جزئي باللغة الانجليزية'
                      : 'Part Sun in English'
                  "
                ></textarea>
                <label for="partEn">
                  <font-awesome :icon="['fas', 'cloud-sun']" />{{
                    $i18n.locale === "ar"
                      ? "مشمس بشكل جزئي باللغة الانجليزية"
                      : "Part Sun in English"
                  }}</label
                >
              </div>
            </div>

            <!-- Medium Ar -->
            <div class="d-flex flex-column mt-10">
              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="mediumAr"
                  id="mediumAr"
                  rows="2"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'متوسط باللغة العربية'
                      : 'Medium in Arabic'
                  "
                ></textarea>
                <label for="mediumAr">
                  <font-awesome :icon="['fas', 'snowflake']" />{{
                    $i18n.locale === "ar"
                      ? "متوسط باللغة العربية"
                      : "Medium in Arabic"
                  }}</label
                >
              </div>
            </div>

            <!-- Medium En -->
            <div class="d-flex flex-column">
              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="mediumEn"
                  id="mediumEn"
                  rows="2"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'متوسط باللغة الانجليزية'
                      : 'Medium in English'
                  "
                ></textarea>
                <label for="mediumEn">
                  <font-awesome :icon="['fas', 'snowflake']" />{{
                    $i18n.locale === "ar"
                      ? "متوسط باللغة الانجليزية"
                      : "Medium in English"
                  }}</label
                >
              </div>
            </div>

            <!-- Light Ar -->
            <div class="d-flex flex-column mt-10">
              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="lightAr"
                  id="lightAr"
                  rows="2"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'الضوء باللغة العربية'
                      : 'Light in Arabic'
                  "
                ></textarea>
                <label for="lightAr">
                  <font-awesome :icon="['fas', 'sun']" />{{
                    $i18n.locale === "ar"
                      ? "الضوء باللغة العربية"
                      : "Light in Arabic"
                  }}</label
                >
              </div>
            </div>

            <!-- Light En -->
            <div class="d-flex flex-column">
              <div class="d-flex flex-column-reverse mb-3">
                <textarea
                  v-model="lightEn"
                  id="lightEn"
                  rows="2"
                  required
                  minlength="30"
                  :placeholder="
                    $i18n.locale === 'ar'
                      ? 'الضوء باللغة الانجليزية'
                      : 'Light in English'
                  "
                ></textarea>
                <label for="lightEn">
                  <font-awesome :icon="['fas', 'sun']" />{{
                    $i18n.locale === "ar"
                      ? "الضوء باللغة الانجليزية"
                      : "Light in English"
                  }}</label
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-4">
          <div
            class="second-info box block-border d-flex flex-column justify-content-between"
          >
            <div>
              <h5>
                {{ $i18n.locale === "ar" ? "الصورة الرئيسية" : "Main Image" }}
              </h5>

              <div class="drop-area my-4" @drop="handleDrop" @dragover.prevent>
                <div class="upload-box" v-if="previewImage == null">
                  <label for="upload-icon" class="upload-icon">
                    <font-awesome :icon="['fas', 'upload']" />
                  </label>
                  <input
                    autocomplete="off"
                    class="form-control"
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    style="display: none"
                    @change="uploadImage"
                  />
                </div>
                <div v-else>
                  <i
                    @click="previewImage = null"
                    class="bi bi-x-circle-fill close-img"
                  ></i>
                </div>
                <img v-if="previewImage == null" :src="img" alt="" />
                <img v-else :src="previewImage" alt="" />
              </div>
            </div>

            <div>
              <h5>
                {{ $i18n.locale === "ar" ? "صور الالبوم" : "Album Images" }}
              </h5>

              <div class="drop-area my-4" @drop="handleDrop" @dragover.prevent>
                <div class="upload-box" v-if="previewImage == null">
                  <label for="upload-icon" class="upload-icon">
                    <font-awesome :icon="['fas', 'upload']" />
                  </label>
                  <input
                    autocomplete="off"
                    class="form-control"
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    style="display: none"
                    @change="uploadImage"
                  />
                </div>
                <div v-else>
                  <i
                    @click="previewImage = null"
                    class="bi bi-x-circle-fill close-img"
                  ></i>
                </div>
                <img v-if="previewImage == null" :src="img" alt="" />
                <img v-else :src="previewImage" alt="" />
              </div>
            </div>

            <div class="drop-area my-4" @drop="handleDrop" @dragover.prevent>
              <div class="upload-box" v-if="previewImage == null">
                <label for="upload-icon" class="upload-icon">
                  <font-awesome :icon="['fas', 'upload']" />
                </label>
                <input
                  autocomplete="off"
                  class="form-control"
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  style="display: none"
                  @change="uploadImage"
                />
              </div>
              <div v-else>
                <i
                  @click="previewImage = null"
                  class="bi bi-x-circle-fill close-img"
                ></i>
              </div>
              <img v-if="previewImage == null" :src="img" alt="" />
              <img v-else :src="previewImage" alt="" />
            </div>

            <div class="drop-area my-4" @drop="handleDrop" @dragover.prevent>
              <div class="upload-box" v-if="previewImage == null">
                <label for="upload-icon" class="upload-icon">
                  <font-awesome :icon="['fas', 'upload']" />
                </label>
                <input
                  autocomplete="off"
                  class="form-control"
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  style="display: none"
                  @change="uploadImage"
                />
              </div>
              <div v-else>
                <i
                  @click="previewImage = null"
                  class="bi bi-x-circle-fill close-img"
                ></i>
              </div>
              <img v-if="previewImage == null" :src="img" alt="" />
              <img v-else :src="previewImage" alt="" />
            </div>

            <div class="drop-area my-4" @drop="handleDrop" @dragover.prevent>
              <div class="upload-box" v-if="previewImage == null">
                <label for="upload-icon" class="upload-icon">
                  <font-awesome :icon="['fas', 'upload']" />
                </label>
                <input
                  autocomplete="off"
                  class="form-control"
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  style="display: none"
                  @change="uploadImage"
                />
              </div>
              <div v-else>
                <i
                  @click="previewImage = null"
                  class="bi bi-x-circle-fill close-img"
                ></i>
              </div>
              <img v-if="previewImage == null" :src="img" alt="" />
              <img v-else :src="previewImage" alt="" />
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-8">
          <div class="uplod-image box block-border">
            <h5>{{ $i18n.locale === "ar" ? "الخيارات" : "Options" }}</h5>

            
          </div>
        </div>

        <div class="col-sm-12 col-lg-4">
          <div class="category-price box block-border">
            <h5>Category & Price</h5>

            <div class="d-flex flex-column">
              <div class="d-flex flex-column-reverse mb-3">
                <input
                  v-model="price"
                  id="price"
                  type="number"
                  required
                  maxlength="6"
                  min="0"
                  placeholder="Price"
                />
                <label for="price">Price</label>
              </div>

              <p>Please Select Categories</p>
              <div id="categories">
                <div class="custom-select">
                  <select v-model="selectedCat">
                    <option value="" selected disabled>New Category</option>
                    <option v-for="cat in categories" :value="cat">
                      {{ cat }}
                    </option>
                  </select>
                  <div class="plus-icon" @click="addCat">
                    <font-awesome :icon="['fas', 'plus']" />
                  </div>
                </div>
                <div
                  class="category badge bg-success me-2 p-2"
                  v-for="activeCat in activeCategories"
                >
                  {{ activeCat }}
                  <i
                    class="bi bi-trash3 ms-2"
                    @click="deleteCat(activeCat)"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </form>
</template>
<script setup>
let sidebar = ref(useSidebar().value);
</script>
<style lang="scss" scoped>
.contain {
  overflow-x: hidden;
  transition: all 0.3s linear;
  width: 100%;
  min-height: calc(100vh - 77.6px);
  background-color: #f8f7fa;
  float: right;
  margin-top: 77.6px;
  padding: 16px;
  @media (max-width: 600px) {
    margin-top: 55px;
  }

  &.shrink {
    width: calc(100% - 260px); /* 100% + 260px(sidebar)*/
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0px;
    @media (max-width: 991px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .head-title {
      p {
        font-size: 15px;
        color: #6d6a77;
        a {
          color: #19ad7b;
          text-decoration: underline;
        }
      }
    }
  }
  .form {
    .main-info,
    .second-info {
      padding: 25px;
      block-size: 100%;
      background-color: #fff;
      h5 {
        margin: 16px 0px;
      }
    }
    .second-info {
      .circles {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
        .circle {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 33px;
          height: 33px;
          border: 2px solid transparent;
          margin: 2px;
          cursor: pointer;

          &.active {
            border: 2px solid #19ad7b;
          }

          span {
            display: flex;
            width: 25px;
            height: 25px;
            border: 1px solid #c5c5c5;
            justify-content: center;
            font-size: 13px;
            align-items: center;
          }
          &.colors {
            border-radius: 50%;
            span {
              border-radius: 50%;
            }
          }
          &.sizes {
            border-radius: 6px;
            span {
              border-radius: 6px;
            }
          }
        }
      }
    }
  }
  .uplod-image {
    background-color: #fff;
    padding: 25px;
    block-size: 100%;
    h5 {
      margin: 16px 0px;
    }
  }
  .category-price {
    background-color: #fff;
    padding: 25px;
    block-size: 100%;
    h5 {
      margin: 16px 0px;
    }
    .custom-select {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding: 10px 20px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f1f1f1;
        cursor: pointer;
        width: 100%;
        outline: none; // Remove default focus styling
        margin-right: 10px;
      }

      select::-ms-expand {
        display: none; // Hide arrow in IE
      }

      select:focus {
        border-color: #19ad7b;
        box-shadow: 0 0 5px rgba(25, 173, 123, 0.5);
      }
      .plus-icon {
        font-size: 20px;
        padding: 10px;
        width: 45px;
        height: 45px;
        background-color: #19ad7b;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
      }
      .delete-cat {
        font-size: 20px;
        padding: 10px;
        width: 45px;
        height: 45px;
        background-color: #d83845;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
label {
  svg {
    margin-inline-end: 5px;
  }
}
</style>
