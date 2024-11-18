<template>
  <div class="contain" :class="useSidebar().value ? 'shrink' : ''">
    <div class="title-container">
      <div class="head-title">
        <h4 class="header4">
          {{
            $i18n.locale === "ar" ? "معلومات التواصل" : "Contact Information"
          }}
        </h4>
      </div>
      <div class="options">
        <div class="reload btn btn-success mx-2" @click="visible = true">
          <font-awesome :icon="['fas', 'plus']" />
          {{ $i18n.locale === "ar" ? "إضافة" : "Add" }}
        </div>

        <div class="reload btn btn-success" @click="getInfo()">
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
              <th>{{ $i18n.locale === "ar" ? "الهاتف" : "Phone" }}</th>
              <th>
                {{ $i18n.locale === "ar" ? "البريد الإلكتروني" : "Email" }}
              </th>
              <th>{{ $i18n.locale === "ar" ? "الموقع" : "Website" }}</th>
              <th>{{ $i18n.locale === "ar" ? "تعديل" : "Edit" }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="rows" v-for="cat in Contact?.data" :key="cat.id">
              <td>
                <div>
                  <h5>{{ cat.phone }}</h5>
                </div>
              </td>
              <td>
                <div>
                  <h5>{{ cat.email }}</h5>
                </div>
              </td>
              <td>
                <div>
                  <h5>{{ cat.website }}</h5>
                </div>
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
                <span class="edit-link">
                  <span
                    class="edit"
                    @click="
                      visible2 = true;
                      editedCat = cat;
                      editfunc();
                    "
                  >
                    <font-awesome :icon="['fas', 'pen-to-square']" />
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
    <template #container="{ closeCallback }">
      <div class="dialog" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <h5>
          {{ $i18n.locale === "ar" ? "إضافة فئة جديدة" : "Add New Category" }}
        </h5>
        <div class="content">
          <div>
            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="titleAr"
                id="titleAr"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الاسم باللغة العربية'
                    : 'Name In Arabic'
                "
                title="Enter only letters and spaces"
                required
              />
              <label for="titleAr">{{
                $i18n.locale === "ar"
                  ? "الاسم باللغة العربية"
                  : "Name In Arabic"
              }}</label>
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="titleEn"
                id="titleEn"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الاسم باللغة الانجليزية'
                    : 'Name In English'
                "
                required
                title="Enter only letters and spaces"
              />
              <label for="titleEn">{{
                $i18n.locale === "ar"
                  ? "الاسم باللغة الانجليزية"
                  : "Name In English"
              }}</label>
            </div>

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
                />
                <img
                  v-if="src"
                  :src="src"
                  alt="Image"
                  class="shadow-md w-100 h-100 sm:w-64"
                />
                <button
                  class="btn btn-danger clear"
                  @click.prevent="
                    src = null;
                    srcFile = null;
                  "
                  v-if="src"
                >
                  <font-awesome class="xmark" :icon="['fas', 'xmark']" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 d-flex w-100 justify-content-end">
          <button class="btn btn-secondary" @click="closeCallback">
            {{ $t("Close") }}
          </button>
          <button class="btn btn-success mx-2" @click="addInfo()" autofocus>
            {{ $t("Add") }}
          </button>
        </div>
      </div>
    </template>
  </Dialog>

  <Dialog v-model:visible="visible2" modal :style="{ width: '25rem' }">
    <template #container="{ closeCallback }">
      <div class="dialog" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <h5>
          {{ $i18n.locale === "ar" ? "تعديل فئة" : "Edit Category" }}
        </h5>
        <div class="content">
          <div>
            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="edittitleAr"
                id="edittitleAr"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الاسم باللغة العربية'
                    : 'Name In Arabic'
                "
                title="Enter only letters and spaces"
                required
              />
              <label for="edittitleAr">{{
                $i18n.locale === "ar"
                  ? "الاسم باللغة العربية"
                  : "Name In Arabic"
              }}</label>
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="edittitleEn"
                id="edittitleEn"
                type="text"
                autocomplete="off"
                :placeholder="
                  $i18n.locale === 'ar'
                    ? 'الاسم باللغة الانجليزية'
                    : 'Name In English'
                "
                required
                title="Enter only letters and spaces"
              />
              <label for="edittitleEn">{{
                $i18n.locale === "ar"
                  ? "الاسم باللغة الانجليزية"
                  : "Name In English"
              }}</label>
            </div>

            <div class="drop-area my-4">
              <div class="upload-box">
                <FileUpload
                  mode="basic"
                  @select="editsrconFileSelect"
                  customUpload
                  :maxFileSize="1000000"
                  accept="image/*"
                  auto
                  class="form-control p-button-outlined"
                />
                <img
                  v-if="editsrc"
                  :src="editsrc"
                  alt="Image"
                  class="shadow-md w-100 h-100 sm:w-64"
                />
                <button
                  class="btn btn-danger clear"
                  @click.prevent="
                    editsrc = null;
                    editsrcFile = null;
                  "
                  v-if="editsrc"
                >
                  <font-awesome class="xmark" :icon="['fas', 'xmark']" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 d-flex w-100 justify-content-end">
          <button class="btn btn-secondary" @click="closeCallback">
            {{ $t("Close") }}
          </button>
          <button class="btn btn-success mx-2" @click="editCat()" autofocus>
            {{ $t("Edit") }}
          </button>
        </div>
      </div>
    </template>
  </Dialog>

  <!-- delete modal -->
  <ElementsAppModal :isOpen="deleteModal" @updateIsOpen="updateDeleteModal">
    <template #header>
      <h4>{{ $i18n.locale === "ar" ? "تأكيد الحذف" : "Confirm Delete" }}</h4>
    </template>
    <template #content>
      <p>
        {{
          $i18n.locale === "ar"
            ? "هل أنت متأكد من أنك تريد حذف"
            : "Are You Sure You Want To Delete"
        }}
        "{{ deleteRegion.category_name }}"{{
          $i18n.locale === "ar" ? "؟" : "?"
        }}
      </p>
    </template>
    <template #footer>
      <button class="btn btn-secondary" @click="deleteModal = false">
        {{ $t("Close") }}
      </button>
      <button class="btn btn-danger" @click="DeleteCat()">
        {{ $t("Delete") }}
      </button>
    </template>
  </ElementsAppModal>
</template>
<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const { locale } = useI18n();
const { $awn } = useNuxtApp();

const visible = ref(false);
const visible2 = ref(false);

// edit
let titleAr = ref();
let titleEn = ref();

let edittitleAr = ref();
let edittitleEn = ref();

// delete modal
let deleteRegion = ref();
let deleteModal = ref(false);
const updateDeleteModal = (value) => {
  deleteModal.value = value;
};

let loading = ref(false);
let Contact = ref();
const getInfo = async () => {
  loading.value = true;
  if (locale.value === "ar") {
    const { data: productsData, pending } = await useFetch(
      `${api.GetContactInfo}`,
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
          Contact.value = productsData.value;
        }
      }
    });
  } else {
    const { data: productsData, pending } = await useFetch(
      `${api.GetContactInfo}`,
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
          Contact.value = productsData.value;
        }
      }
    });
  }
  loading.value = false;
};
//init
getInfo();

const DeleteCat = async () => {
  const { RemovePlant, error } = await useFetch(
    `${api.DeleteContactInfo}/${deleteRegion.value.id}`,
    {
      baseURL: apiBase,
      method: "DELETE",
    }
  );

  // re get the product
  getInfo();

  deleteModal.value = false;
  //message
  locale.value === "en"
    ? $awn.success("Information Deleted Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تم حذف المعلومات بنجاح", {
        durations: { global: 5000 },
      });
};

const addInfo = async () => {
  const formData = new FormData();

  const { AddProduct, error } = await useFetch(api.AddContactInfo, {
    baseURL: apiBase,
    method: "POST",
    body: {
      phone: phone.value,
      email: email.value,
      website: website.value,
    },
  });

  visible.value = false;
  //message
  locale.value === "en"
    ? $awn.success("Information Added Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تم إضافة المعلومات بنجاح", {
        durations: { global: 5000 },
      });
};

const editfunc = async () => {
  const { data: ar } = await useFetch(
    `${api.GEtContactInfoById}/${editedCat.value.id}`,
    {
      baseURL: apiBase,
      headers: {
        "accept-language": "ar",
      },
    }
  );
  edittitleEn.value = en.value.category_name;
  edittitleAr.value = ar.value.category_name;
};

let editedCat = ref();
const editCat = async () => {
  const { edit, error } = await useFetch(
    `${api.EditCat}/${editedCat.value.id}`,
    {
      body: {},
      baseURL: apiBase,
      method: "PUT",
    }
  );

  // re get the product
  getInfo();

  visible2.value = false;
  editsrc.value = null;
  editsrcFile.value = null;

  //message
  locale.value === "en"
    ? $awn.success("Category Edited Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تم تعديل الفئة بنجاح", {
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
  .cat-tabel {
    height: calc(100vh - 274px);
    overflow-y: scroll;
    @media (max-width: 991px) {
      height: calc(100vh - 320px);
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
    .cat-img {
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
    .cat-info {
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
      color: #333;
      svg {
        font-size: 20px;
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
</style>
