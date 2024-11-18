<template>
  <div class="contain" :class="useSidebar().value ? 'shrink' : ''">
    <div class="title-container">
      <div class="head-title">
        <h4 class="header4">
          {{ $i18n.locale === "ar" ? "قائمة المناطق" : "Regions List" }}
        </h4>
      </div>
      <div class="options">
        <div class="reload btn btn-success mx-2" @click="visible = true">
          <font-awesome :icon="['fas', 'plus']" />
          {{ $i18n.locale === "ar" ? "إضافة" : "Add" }}
        </div>

        <div class="reload btn btn-success">
          <font-awesome :icon="['fas', 'rotate-right']" />
          {{ $i18n.locale === "ar" ? "إعادة تحميل" : "Reload" }}
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <div class="product-tabel">
        <table>
          <thead>
            <tr>
              <th>{{ $i18n.locale === "ar" ? "الاسم" : "Name" }}</th>
              <th>{{ $i18n.locale === "ar" ? "السعر" : "Price" }}</th>
              <th>{{ $i18n.locale === "ar" ? "تعديل" : "Edit" }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="rows" v-for="product in Loactions" :key="product.id">
              <td class="d-flex align-items-center">
                <h5 class="fw-bold">{{ product.name }}</h5>
              </td>
              <td class="fw-bold">${{ product.price }}</td>
              <td>
                <span
                  class="delete"
                  @click="
                    deleteModal = true;
                    deleteProduct = product;
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
  <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
    <template #container="{ closeCallback }">
      <div class="dialog" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
        <h5>
          {{ $i18n.locale === "ar" ? "إضافة منطقة جديدة" : "Add New Region" }}
        </h5>
        <div class="content">
          <div>
            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="name"
                id="name"
                type="text"
                required
                maxlength="30"
                autocomplete="off"
                :placeholder="$i18n.locale === 'ar' ? 'الاسم' : 'Name'"
                pattern="[A-Za-z\s]+"
                title="Enter only letters and spaces"
              />
              <label for="titleAr">{{
                $i18n.locale === "ar" ? "الاسم" : "Name"
              }}</label>
            </div>

            <div class="d-flex flex-column-reverse mb-3">
              <input
                v-model="price"
                id="price"
                type="number"
                required
                maxlength="6"
                min="0"
                :placeholder="$i18n.locale === 'ar' ? 'السعر' : 'Price'"
              />
              <label for="price">{{
                $i18n.locale === "ar" ? "السعر" : "Price"
              }}</label>
            </div>
          </div>
        </div>
        <div class="mt-5 d-flex w-100 justify-content-end">
          <button class="btn btn-secondary" @click="closeCallback">
            {{ $t("Close") }}
          </button>
          <button class="btn btn-success mx-2" @click="closeCallback" autofocus>
            {{ $t("Add") }}
          </button>
        </div>
      </div>
    </template>
  </Dialog>
</template>
<script setup>
const visible = ref(false);
let name = ref();

let Loactions = ref([
  {
    id: 1,
    name: "amman",
    price: "3.25",
  },
  {
    id: 2,
    name: "amman",
    price: "3.25",
  },
  {
    id: 3,
    name: "amman",
    price: "3.25",
  },
  {
    id: 4,
    name: "amman",
    price: "3.25",
  },
]);
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
      color: #333;
      svg {
        font-size: 20px;
      }
    }
  }
}
</style>
