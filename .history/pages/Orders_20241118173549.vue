<template>
  <div class="contain" :class="useSidebar().value ? 'shrink' : ''">
    <div class="title-container">
      <div class="head-title">
        <h4 class="header4">
          {{ $i18n.locale === "ar" ? "قائمة الطلبيات" : "Orders List" }}
        </h4>
      </div>
      <div class="options">
        <!-- <div class="d-flex flex-column-reverse mx-2">
          <input
            v-model="searchText"
            id="price"
            type="text"
            required
            :placeholder="$i18n.locale === 'ar' ? 'ابحث' : 'Search'"
          />
        </div> -->
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
      <div v-else class="product-tabel">
        <table>
          <thead>
            <tr>
              <th>{{ $i18n.locale === "ar" ? "الاسم" : "Name" }}</th>
              <th>
                {{ $i18n.locale === "ar" ? "السعر الكلي" : "Total Price" }}
              </th>
              <th>{{ $i18n.locale === "ar" ? "التاريخ" : "Date" }}</th>
              <th>
                {{ $i18n.locale === "ar" ? "نوع الدفع" : "Payment Type" }}
              </th>
              <th>{{ $i18n.locale === "ar" ? "الموقع" : "Location" }}</th>
              <!-- <th>{{ $i18n.locale === "ar" ? "تعديل" : "Edit" }}</th> -->
            </tr>
          </thead>
          <tbody>
            <tr class="rows" v-for="product in Orders" :key="product.id">
              <td class="fw-bold">
                {{ getCustomerName(product.customer_id) }}
              </td>
              <td>
                <p class="badge rounded-pill bg-primary me-1">
                  ${{ product.total_price }}
                </p>
              </td>
              <td class="fw-bold">{{ product.created_at?.slice(0, 10) }}</td>

              <td class="fw-bold">
                {{
                  product.payment_id ?? $i18n.locale === "ar"
                    ? "لا يوجد"
                    : "Not Found"
                }}
              </td>
              <td class="fw-bold">
                {{ getLocationName(product.location_id) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const { locale } = useI18n();
const { $awn } = useNuxtApp();

let loading = ref(false);
let Orders = ref([]);
const getInfo = async () => {
  loading.value = true;
  if (locale.value === "ar") {
    const { data: productsData, pending } = await useFetch(`${api.GetOrders}`, {
      credentials: "include",
      baseURL: apiBase,
      headers: {
        "accept-language": "ar",
      },
    });
    watchEffect(() => {
      if (process.client) {
        if (productsData.value) {
          Orders.value = productsData.value;
        }
      }
    });
  } else {
    const { data: productsData, pending } = await useFetch(`${api.GetOrders}`, {
      credentials: "include",
      baseURL: apiBase,
      headers: {
        "accept-language": "en",
      },
    });
    watchEffect(() => {
      if (process.client) {
        if (productsData.value) {
          Orders.value = productsData.value;
        }
      }
    });
  }
  loading.value = false;
};
getInfo();

// delete modal
let deleteProduct = ref();
let deleteModal = ref(false);
const updateDeleteModal = (value) => {
  deleteModal.value = value;
};

// let searchText = ref("");
// const filteredArray = computed(() => {
//   return Orders.value?.filter((item) =>
//     item.plant_name.toLowerCase().includes(searchText.value.toLowerCase())
//   );
// });

let customers = ref([]);
const getCustomers = async () => {
  loading.value = true;
  if (locale.value === "ar") {
    const { data: customersData, pending } = await useFetch(
      `${api.GetAllCustomers}`,
      {
        credentials: "include",
        baseURL: apiBase,
        headers: {
          "accept-language": "ar",
        },
      }
    );
    watchEffect(() => {
      if (process.client) {
        if (customersData.value) {
          customers.value = customersData.value;
        }
      }
    });
  } else {
    const { data: customersData, pending } = await useFetch(
      `${api.GetAllCustomers}`,
      {
        credentials: "include",
        baseURL: apiBase,
        headers: {
          "accept-language": "en",
        },
      }
    );
    watchEffect(() => {
      if (process.client) {
        if (customersData.value) {
          customers.value = customersData.value;
        }
      }
    });
  }
  loading.value = false;
};
// init get product
getCustomers();

let Loactions = ref([]);
const getLoactions = async () => {
  loading.value = true;
  if (locale.value === "ar") {
    const { data: productsData, pending } = await useFetch(
      `${api.GetAllLocations}`,
      {
        credentials: "include",
        baseURL: apiBase,
        headers: {
          "accept-language": "ar",
        },
      }
    );
    watchEffect(() => {
      if (process.client) {
        if (productsData.value) {
          Loactions.value = productsData.value;
        }
      }
    });
  } else {
    const { data: productsData, pending } = await useFetch(
      `${api.GetAllLocations}`,
      {
        credentials: "include",
        baseURL: apiBase,
        headers: {
          "accept-language": "en",
        },
      }
    );
    watchEffect(() => {
      if (process.client) {
        if (productsData.value) {
          Loactions.value = productsData.value;
        }
      }
    });
  }
  loading.value = false;
};
//init
getLoactions();

const getCustomerName = (id) => {
  let res = customers.value?.filter((e) => e.id == id);
  return res[0]?.firstName + res[0]?.lastName;
};

const getLocationName = (id) => {
  let res = Loactions.value?.filter((e) => e.id == id);
  return res[0]?.name;
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
