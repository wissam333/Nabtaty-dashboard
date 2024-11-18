<template>
  <div class="contain" :class="useSidebar().value ? 'shrink' : ''">
    <div class="title-container">
      <div class="head-title">
        <h4 class="header4">
          {{ $i18n.locale === "ar" ? "قائمة النباتات" : "Plant List" }}
        </h4>
        <p>
          {{
            $i18n.locale === "ar" ? "إضافة نبات جديد من" : "Add new Plant from"
          }}
          <nuxt-link to="/AddProduct">{{
            $i18n.locale === "ar" ? "هنا" : "here"
          }}</nuxt-link>
        </p>
      </div>
      <div class="options">
        <div class="d-flex flex-column-reverse mx-2">
          <input
            v-model="searchText"
            id="price"
            type="text"
            required
            :placeholder="$i18n.locale === 'ar' ? 'ابحث' : 'Search'"
          />
        </div>
        <div class="reload btn btn-success">
          <font-awesome :icon="['fas', 'rotate-right']" />
          {{ $i18n.locale === "ar" ? "إعادة تحميل" : "Reload" }}
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <div class="loading" v-if="productLoading">
        <img src="/loading/loadingnew2.svg" alt="" />
      </div>
      <div v-else class="product-tabel">
        <table>
          <thead>
            <tr>
              <th>{{ $i18n.locale === "ar" ? "الاسم" : "Name" }}</th>
              <th>{{ $i18n.locale === "ar" ? "السعر" : "Price" }}</th>
              <th>{{ $i18n.locale === "ar" ? "الفئات" : "Categories" }}</th>
              <th>{{ $i18n.locale === "ar" ? "جديد" : "New" }}</th>
              <th>{{ $i18n.locale === "ar" ? "مقترح" : "Recommended" }}</th>
              <th>{{ $i18n.locale === "ar" ? "تعديل" : "Edit" }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="rows" v-for="product in filteredArray" :key="product.id">
              <td class="d-flex align-items-center">
                <div class="product-img">
                  <img v-if="!product.photos" :src="product.photos" alt="" />
                  <img
                    v-else
                    src="/photos/2619fafceaedd791a39fd2a196ec0641.png"
                    alt=""
                  />
                </div>
                <div class="product-info d-flex flex-column align-items-start">
                  <h5>{{ product.plant_name }}</h5>
                </div>
              </td>
              <td class="fw-bold">${{ product.price }}</td>
              <td>
                <p class="badge rounded-pill bg-primary me-1">
                  {{ subcat(product.subcategory_id) }}
                </p>
              </td>
              <td>
                <p
                  v-if="product.newest"
                  class="badge rounded-pill bg-success me-1"
                >
                  <font-awesome class="check" :icon="['fas', 'check']" />
                </p>
                <p v-else class="badge rounded-pill bg-danger me-1">
                  <font-awesome class="check" :icon="['fas', 'xmark']" />
                </p>
              </td>
              <td>
                <p
                  v-if="product.recommended"
                  class="badge rounded-pill bg-success me-1"
                >
                  <font-awesome class="check" :icon="['fas', 'check']" />
                </p>
                <p v-else class="badge rounded-pill bg-danger me-1">
                  <font-awesome class="check" :icon="['fas', 'xmark']" />
                </p>
              </td>
              <td>
                <span
                  class="delete"
                  @click="
                    deleteModal = true;
                    deletePlant(product.id);
                  "
                >
                  <font-awesome :icon="['fas', 'trash']" />
                </span>
                <nuxt-link :to="`/EditProduct/${product.id}`" class="edit-link">
                  <span class="edit">
                    <font-awesome :icon="['fas', 'pen-to-square']" />
                  </span>
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

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
        "{{ deleteProduct.plant_name }}"{{ $i18n.locale === "ar" ? "؟" : "?" }}
      </p>
    </template>
    <template #footer>
      <button class="btn btn-secondary" @click="deleteModal = false">
        {{ $t("Close") }}
      </button>
      <button class="btn btn-danger" @click="DeleteProductTrigger()">
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

let products = ref();
if (locale.value === "ar") {
  const { data: productsData, pending } = await useFetch(
    `${api.GetAllPlants}`,
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
        products.value = productsData.value;
      }
    }
  });
} else {
  const { data: productsData, pending } = await useFetch(`${api.Getproducts}`, {
    baseURL: apiBase,
    headers: {
      "accept-language": "en",
    },
  });
  watchEffect(() => {
    if (process.client) {
      if (productsData.value) {
        products.value = productsData.value;
      }
    }
  });
}

const { data: SubCat, error } = await useFetch(api.GetSubCat, {
  baseURL: apiBase,
  method: "GET",
});

const subcat = (id) => {
  let subcatName = SubCat.value.filter((sub) => sub.id === id);
  return subcatName[0];
};

// delete modal
let deleteProduct = ref();
let deleteModal = ref(false);
const updateDeleteModal = (value) => {
  deleteModal.value = value;
};

let searchText = ref("");
const filteredArray = computed(() => {
  return products.value?.filter((item) =>
    item.plant_name.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

const deletePlant = async (id) => {
  const { RemovePlant, error } = await useFetch(`${api.DeletePlant}/${id}`, {
    baseURL: apiBase,
    method: "DELETE",
  });

  // re get the product
  if (locale.value === "ar") {
    const { data: productsData, pending } = await useFetch(
      `${api.GetAllPlants}`,
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
          products.value = productsData.value;
        }
      }
    });
  } else {
    const { data: productsData, pending } = await useFetch(
      `${api.Getproducts}`,
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
          products.value = productsData.value;
        }
      }
    });
  }

  //message
  locale.value === "en"
    ? $awn.success("Plant Deleted Successfully", {
        durations: { global: 5000 },
      })
    : $awn.success("تم حذف النبات بنجاح", {
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
      display: flex;
      align-items: center;
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
    .product-img {
      img {
        width: 50px;
        height: 50px;
        margin-inline-end: 10px;
        object-fit: contain;
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
        margin: 0;
      }
      p {
        font-size: 14px;
      }
    }
    .badge {
      font-size: 16px;
      padding: 8px 12px;
      margin: 0;
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
</style>
