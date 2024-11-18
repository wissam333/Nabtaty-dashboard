<template>
  <div class="contain" :class="useSidebar().value ? 'shrink' : ''">
    <div class="title-container">
      <div class="head-title">
        <h4 class="header4 mb-10">
          {{ $i18n.locale === "ar" ? "إدارة الموقع" : "Website Management" }}
        </h4>
        <div class="box block-border main-info">
          <h5 class="header4 mb-10">
            {{ $i18n.locale === "ar" ? "الصور الرئيسية" : "Home Photos" }}
          </h5>
          <div class="row second-info d-flex justify-content-between">
            <div class="col-lg-3">
              <div class="drop-area my-4">
                <div class="upload-box">
                  <FileUpload
                    mode="basic"
                    @select="onFileSelect"
                    customUpload
                    :maxFileSize="1000000"
                    accept="image/*"
                    auto
                    class="form-control p-button-outlined"
                    v-if="!src.photo"
                  />
                  <img
                    v-if="src.photo"
                    :src="src.photo"
                    alt="Image"
                    class="shadow-md w-100 h-100 sm:w-64"
                  />
                  <button
                    class="btn btn-danger clear"
                    @click.prevent="
                      removeImage(src.id);
                      src.photo = null;
                    "
                    v-if="src.photo"
                  >
                    <font-awesome class="xmark" :icon="['fas', 'xmark']" />
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="drop-area my-4 col-lg-3">
                <div class="upload-box">
                  <FileUpload
                    mode="basic"
                    @select="onFileSelect1"
                    customUpload
                    :maxFileSize="1000000"
                    accept="image/*"
                    auto
                    class="form-control p-button-outlined"
                    v-if="!src1.photo"
                  />
                  <img
                    v-if="src1.photo"
                    :src="src1.photo"
                    alt="Image"
                    class="shadow-md w-100 h-100 sm:w-64"
                  />
                  <button
                    class="btn btn-danger clear"
                    @click.prevent="
                      removeImage(src1.id);
                      src1.photo = null;
                    "
                    v-if="src1.photo"
                  >
                    <font-awesome class="xmark" :icon="['fas', 'xmark']" />
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="drop-area my-4 col-lg-3">
                <div class="upload-box">
                  <FileUpload
                    mode="basic"
                    @select="onFileSelect2"
                    customUpload
                    :maxFileSize="1000000"
                    accept="image/*"
                    auto
                    class="form-control p-button-outlined"
                    v-if="!src2.photo"
                  />
                  <img
                    v-if="src2.photo"
                    :src="src2.photo"
                    alt="Image"
                    class="shadow-md w-100 h-100 sm:w-64"
                  />
                  <button
                    class="btn btn-danger clear"
                    @click.prevent="
                      removeImage(src2.id);
                      src2.photo = null;
                    "
                    v-if="src2.photo"
                  >
                    <font-awesome class="xmark" :icon="['fas', 'xmark']" />
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="drop-area my-4 col-lg-3">
                <div class="upload-box">
                  <FileUpload
                    mode="basic"
                    @select="onFileSelect3"
                    customUpload
                    :maxFileSize="1000000"
                    accept="image/*"
                    auto
                    class="form-control p-button-outlined"
                    v-if="!src3.photo"
                  />
                  <img
                    v-if="src3.photo"
                    :src="src3.photo"
                    alt="Image"
                    class="shadow-md w-100 h-100 sm:w-64"
                  />
                  <button
                    class="btn btn-danger clear"
                    @click.prevent="
                      removeImage(src3.id);
                      src3.photo = null;
                    "
                    v-if="src3.photo"
                  >
                    <font-awesome class="xmark" :icon="['fas', 'xmark']" />
                  </button>
                </div>
              </div>
            </div>

            <!-- <div class="col-lg-3">
              <div class="drop-area my-4 col-lg-3">
                <div class="upload-box">
                  <FileUpload
                    mode="basic"
                    @select="onFileSelect4"
                    customUpload
                    :maxFileSize="1000000"
                    accept="image/*"
                    auto
                    class="form-control p-button-outlined"
                  />
                  <img
                    v-if="src4"
                    :src="src4"
                    alt="Image"
                    class="shadow-md w-100 h-100 sm:w-64"
                  />
                  <button
                    class="btn btn-danger clear"
                    @click.prevent="src4 = null"
                    v-if="src4"
                  >
                    <font-awesome class="xmark" :icon="['fas', 'xmark']" />
                  </button>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <div class="box block-border main-info mt-5">
          <div class="title-container d-flex justify-content-between">
            <div class="head-title">
              <h4 class="header4">
                {{ $i18n.locale === "ar" ? "المراجعات" : "Review" }}
              </h4>
            </div>
            <div class="options">
              <div class="reload btn btn-success mx-2" @click="visible = true">
                <font-awesome :icon="['fas', 'plus']" />
                {{ $i18n.locale === "ar" ? "إضافة" : "Add" }}
              </div>

              <div class="reload btn btn-success" @click="getreviews()">
                <font-awesome :icon="['fas', 'rotate-right']" />
                {{ $i18n.locale === "ar" ? "إعادة تحميل" : "Reload" }}
              </div>
            </div>
          </div>

          <div class="table-responsive">
            <div class="loading" v-if="loading">
              <img src="/loading/loadingnew2.svg" alt="" />
            </div>
            <div v-else class="cat-tabel">
              <table>
                <thead>
                  <tr>
                    <th>{{ $i18n.locale === "ar" ? "الاسم" : "Name" }}</th>
                    <th>{{ $i18n.locale === "ar" ? "الرسالة" : "Message" }}</th>
                    <th>{{ $i18n.locale === "ar" ? "التقييم" : "Rate" }}</th>
                    <th>{{ $i18n.locale === "ar" ? "تعديل" : "Edit" }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="rows" v-for="cat in reviews" :key="cat.id">
                    <td>
                      <h5>{{ cat.customer_name }}</h5>
                    </td>

                    <td>
                      <p>{{ cat.message }}</p>
                    </td>

                    <td>
                      <Rating v-model="cat.rate" readonly />
                    </td>

                    <td>
                      <span
                        class="delete"
                        @click="
                          deleteModal = true;
                          deleteRegion = cat;
                        "
                      >
                        <font-awesome :icon="['fas', 'trash']" />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
    <template #container="{ closeCallback }">
      <div class="dialog" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <h5>
          {{ $i18n.locale === "ar" ? "إضافة مراجعة جديدة" : "Add New Review" }}
        </h5>
        <div class="content">
          <div class="d-flex flex-column mt-5">
            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="customer_name_AR"
                id="customer_name_AR"
                type="text"
                required
                maxlength="30"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الاسم الزبون باللغة العربية'
                    : 'Customer Name In Arabic'
                "
                pattern="[A-Za-z\s]+"
                title="Enter only letters and spaces"
              />
              <label for="customer_name_AR">{{
                $i18n.locale === "ar"
                  ? "الاسم الزبون باللغة العربية"
                  : "Customer Name In Arabic"
              }}</label>
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="customer_name_EN"
                id="customer_name_EN"
                type="text"
                required
                maxlength="30"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الاسم الزبون باللغة الانجليزية'
                    : 'Customer Name In English'
                "
                pattern="[A-Za-z\s]+"
                title="Enter only letters and spaces"
              />
              <label for="customer_name_EN">{{
                $i18n.locale === "ar"
                  ? "الاسم الزبون باللغة الانجليزية"
                  : "Customer Name In English"
              }}</label>
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <textarea
                v-model="message_AR"
                id="message_AR"
                rows="5"
                required
                minlength="30"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الرسالة باللغة العربية'
                    : 'Message In Arabic'
                "
              ></textarea>
              <label for="message_AR">{{
                $i18n.locale === "ar"
                  ? "الرسالة باللغة العربية"
                  : "Message In Arabic"
              }}</label>
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <textarea
                v-model="message_EN"
                id="message_EN"
                rows="5"
                required
                minlength="30"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الرسالة باللغة الانجليزية'
                    : 'Message In English'
                "
              ></textarea>
              <label for="message_AR">{{
                $i18n.locale === "ar"
                  ? "الرسالة باللغة الانجليزية"
                  : "Message In English"
              }}</label>
            </div>

            <div class="d-flex mt-5 mb-3">
              <Rating v-model="rate" />
            </div>
          </div>
        </div>
        <div class="mt-5 d-flex w-100 justify-content-end">
          <button class="btn btn-secondary" @click="closeCallback">
            {{ $t("Close") }}
          </button>
          <button class="btn btn-success mx-2" @click="addCat()" autofocus>
            {{ $t("Add") }}
          </button>
        </div>
      </div>
    </template>
  </Dialog>
</template>
<script setup>
const {
  public: { apiBase, api },
} = useRuntimeConfig();
const { locale } = useI18n();
const { $awn } = useNuxtApp();

const src = ref({
  photo: null,
  id: 0,
});

const srcFile = ref(null);
const onFileSelect = async (event) => {
  const file = event.files[0];
  const formData = new FormData();
  formData.append("photoPath", file);
  const { AddHomePhoto, error } = await useFetch(api.CreatHomePhoto, {
    baseURL: apiBase,
    method: "POST",
    body: formData,
  });
  //message
  locale.value === "en"
    ? $awn.success("Photo Added Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تمت إضافة الصورة بنجاح", {
        durations: { global: 5000 },
      });

  srcFile.value = file;
  const reader = new FileReader();
  reader.onload = async (e) => {
    src.value.photo = e.target.result;
  };
  reader.readAsDataURL(file);
};

const src1File = ref(null);
const src1 = ref({
  photo: null,
  id: 0,
});
const onFileSelect1 = async (event) => {
  const file = event.files[0];
  const formData = new FormData();
  formData.append("photoPath", file);
  const { AddHomePhoto, error } = await useFetch(api.CreatHomePhoto, {
    baseURL: apiBase,
    method: "POST",
    body: formData,
  });
  //message
  locale.value === "en"
    ? $awn.success("Photo Added Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تمت إضافة الصورة بنجاح", {
        durations: { global: 5000 },
      });

  src1File.value = file;
  const reader = new FileReader();
  reader.onload = async (e) => {
    src1.value.photo = e.target.result;
  };
  reader.readAsDataURL(file);
};

const src2File = ref(null);
const src2 = ref({
  photo: null,
  id: 0,
});
const onFileSelect2 = async (event) => {
  const file = event.files[0];
  const formData = new FormData();
  formData.append("photoPath", file);
  const { AddHomePhoto, error } = await useFetch(api.CreatHomePhoto, {
    baseURL: apiBase,
    method: "POST",
    body: formData,
  });
  //message
  locale.value === "en"
    ? $awn.success("Photo Added Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تمت إضافة الصورة بنجاح", {
        durations: { global: 5000 },
      });

  src2File.value = file;
  const reader = new FileReader();
  reader.onload = async (e) => {
    src2.value.photo = e.target.result;
  };
  reader.readAsDataURL(file);
};

const src3File = ref(null);
const src3 = ref({
  photo: null,
  id: 0,
});
const onFileSelect3 = async (event) => {
  const file = event.files[0];
  const formData = new FormData();
  formData.append("photoPath", file);
  const { AddHomePhoto, error } = await useFetch(api.CreatHomePhoto, {
    baseURL: apiBase,
    method: "POST",
    body: formData,
  });
  //message
  locale.value === "en"
    ? $awn.success("Photo Added Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تمت إضافة الصورة بنجاح", {
        durations: { global: 5000 },
      });

  src3File.value = file;
  const reader = new FileReader();
  reader.onload = async (e) => {
    src3.value.photo = e.target.result;
  };
  reader.readAsDataURL(file);
};

// const src4 = ref(null);
// function onFileSelect4(event) {
//   const file = event.files[0];
//   const reader = new FileReader();
//   reader.onload = async (e) => {
//     src4.value = e.target.result;
//   };
//   reader.readAsDataURL(file);
// }

const { data: MainImg, pending } = await useFetch(`${api.GetHomePhotos}`, {
  baseURL: apiBase,
  method: "GET",
});

watchEffect(() => {
  if (process.client) {
    if (MainImg.value) {
      if (MainImg.value[0]) {
        src.value.photo = apiBase + "/" + MainImg.value[0].photo;
        src.value.id = MainImg.value[0].id;
      }
      if (MainImg.value[1]) {
        src1.value.photo = apiBase + "/" + MainImg.value[1].photo;
        src1.value.id = MainImg.value[1].id;
      }
      if (MainImg.value[2]) {
        src2.value.photo = apiBase + "/" + MainImg.value[2].photo;
        src2.value.id = +MainImg.value[2].id;
      }
      if (MainImg.value[3]) {
        src3.value.photo = apiBase + "/" + MainImg.value[3].photo;
        src3.value.id = MainImg.value[3].id;
      }
    }
  }
});

const removeImage = async (srcId) => {
  console.log(srcId);
  const { RemoveHomeImg, error } = await useFetch(
    `${api.RemoveHomeImg}/${srcId}`,
    {
      baseURL: apiBase,
      method: "DELETE",
    }
  );
  //message
  locale.value === "en"
    ? $awn.success("Image Deleted Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تم حذف الصورة بنجاح", {
        durations: { global: 5000 },
      });
};

// reviews
let visible = ref(false);

let customer_name_AR = ref();
let customer_name_EN = ref();
let message_AR = ref();
let message_EN = ref();
let rate = ref(5);

let loading = ref(false);
let reviews = ref();
const getreviews = async () => {
  loading.value = true;
  if (locale.value === "ar") {
    const { data: productsData, pending } = await useFetch(
      `${api.GetReviews}`,
      {
        baseURL: apiBase,
        headers: {
          "accept-language": "ar",
        },
      }
    );
    watchEffect(() => {
      if (process.client) {
        if (productsData.value) {
          reviews.value = productsData.value;
        }
      }
    });
  } else {
    const { data: productsData, pending } = await useFetch(
      `${api.GetReviews}`,
      {
        baseURL: apiBase,
        headers: {
          "accept-language": "en",
        },
      }
    );
    watchEffect(() => {
      if (process.client) {
        if (productsData.value) {
          reviews.value = productsData.value;
        }
      }
    });
  }
  loading.value = false;
};
// init
getreviews();

const addCat = async () => {
  const { AddProduct, error } = await useFetch(api.AddReview, {
    baseURL: apiBase,
    method: "POST",
    body: {
      customer_name_AR: customer_name_AR.value,
      customer_name_EN: customer_name_EN.value,
      message_AR: message_AR.value,
      message_EN: message_EN.value,
      rate: rate.value,
    },
  });

  visible.value = false;
  customer_name_AR.value = "";
  customer_name_EN.value = "";
  message_AR.value = "";
  message_EN.value = "";
  rate.value = 5;
  //message
  locale.value === "en"
    ? $awn.success("Category Added Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تم إضافة الفئة بنجاح", {
        durations: { global: 5000 },
      });
};
</script>
<style lang="scss" scoped>
.contain {
  position: relative;
  overflow-x: hidden;
  min-height: calc(100vh - 77.6px);
  transition: all 0.3s linear;
  width: 100%;
  background-color: #f8f7fa;
  float: right;
  margin-top: 77.6px;
  padding: 16px;
  @media (max-width: 600px) {
    margin-top: 55px;
    min-height: calc(100vh - 55px);
  }

  &.shrink {
    width: calc(100% - 260px); /* 100% + 260px(sidebar)*/
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .title-container {
    width: 100%;
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
    .options {
      .reload {
        background-color: #19ad7b;
        color: #fff;
        border: none;
      }
      @media (max-width: 991px) {
        margin-top: 10px;
      }
    }
  }
  .table-responsive {
    background-color: #fff;
    border-radius: 8px;
  }
  .product-tabel {
    height: calc(100vh - 274px);
    overflow-y: scroll;
    @media (max-width: 991px) {
      height: calc(100vh - 320px);
    }
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    padding: 8px 15px;
    white-space: nowrap;
  }
  table {
    width: 100%;
  }
  thead {
    background-color: #19ad7b;
    color: #fff;
  }
  td {
    color: #333;
    max-width: 300px;
    cursor: pointer;
  }
  .pagination {
    select {
      border: 1px solid #dbdbdb;
      border-radius: 8px;
      color: #333;
      padding: 10px;
      &:focus,
      :focus-visible {
        outline: none;
      }
    }
    .page-item {
      .page-link {
        cursor: pointer;
        border: none !important;
        span {
          color: #6b7280;
          padding: 0.5rem 1rem;
          @media (max-width: 768px) {
            padding: 0;
          }
        }
        &.page-num {
          color: #19ad7b;
        }
      }
    }
    .show-info {
      @media (max-width: 520px) {
        display: none !important;
      }
    }
  }

  .rows {
    color: #000;
    &:nth-child(even) {
      background-color: #eee;
    }
    &:nth-child(odd) {
      background-color: #fff;
    }
    .product-img {
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
    .product-info {
      h5,
      p {
        max-width: 200px;
        /* will make [...] at the end */
        text-overflow: ellipsis;
        /* paragraph to one line */
        white-space: nowrap;
        /* older browsers */
        overflow: hidden;
      }
      p {
        font-size: 14px;
      }
    }
    .badge {
      font-size: 13px;
      padding: 8px 12px;
    }
    .circle {
      display: block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 1px solid #cbc9c9;
    }
    .delete,
    .edit {
      padding: 6px;
      i {
        font-size: 20px;
        color: #333;
      }
    }
  }
}
.drop-area {
  position: relative;
  .p-fileupload {
    z-index: 2;
  }
  img {
    position: absolute;
    object-fit: cover;
    z-index: 1;
  }
}
.clear {
  z-index: 2;
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  margin: 10px;
}
.main-info,
.second-info {
  padding: 25px;
  block-size: 100%;
  background-color: #fff;
  h5 {
    margin: 16px 0px;
  }
}

.loading {
  img {
    width: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
