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
            <tr class="rows" v-for="product in products" :key="product.id">
              <td class="d-flex align-items-center">
                <!-- <div
                    class="product-img"
                    @click="
                      showImage = product?.image;
                      showModal = true;
                    "
                  >
                    <img v-if="product.img" :src="product.img" alt="" />
                    <img v-else src="../../assets/App icon.png" alt="" />
                  </div> -->
                <div class="product-info d-flex flex-column align-items-start">
                  <h5>{{ product.name }}</h5>
                </div>
              </td>
              <td class="fw-bold">${{ product.price }}</td>
              <td>
                <p class="badge rounded-pill bg-primary me-1">
                  {{ product.category }}
                </p>
              </td>
              <td>
                <p class="badge rounded-pill bg-success me-1">
                  <font-awesome class="check" :icon="['fas', 'check']" />
                </p>
              </td>
              <td>
                <p class="badge rounded-pill bg-danger me-1">
                  <font-awesome class="check" :icon="['fas', 'xmark']" />
                </p>
              </td>
              <td>
                <span
                  class="delete"
                  @click="confirmDelete(product.id, product.name)"
                >
                  <font-awesome :icon="['fas', 'trash']" />
                </span>
                <nuxt-link class="edit-link">
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
</template>
<script setup>
let products = ref([
  {
    desc: "lorem apsum lorem apsum",
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 79.99,
    category: "Electronics",
  },
  {
    desc: "lorem apsum lorem apsum",
    id: 2,
    name: "Smart Fitness Tracker",
    price: 49.99,
    category: "Health & Fitness",
  },
  {
    desc: "lorem apsum lorem apsum",
    id: 3,
    name: "4K Action Camera",
    price: 119.99,
    category: "Photography",
  },
  {
    desc: "lorem apsum lorem apsum",
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 19.99,
    category: "Apparel",
  },
  {
    desc: "lorem apsum lorem apsum",
    id: 5,
    name: "Gaming Mouse",
    price: 34.99,
    category: "Computer Accessories",
  },
  {
    desc: "lorem apsum lorem apsum",
    id: 6,
    name: "Portable Blender",
    price: 29.99,
    category: "Kitchen Appliances",
  },
  {
    desc: "lorem apsum lorem apsum",
    id: 7,
    name: "Bluetooth Speaker",
    price: 45.99,
    category: "Audio Equipment",
  },
  {
    desc: "lorem apsum lorem apsum",
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 14.99,
    category: "Home Goods",
  },
  {
    desc: "lorem apsum lorem apsum",
    id: 9,
    name: "Yoga Mat",
    price: 24.99,
    category: "Sports & Outdoors",
  },
  {
    desc: "lorem apsum lorem apsum",
    id: 10,
    name: "Noise Cancelling Headphones",
    price: 149.99,
    category: "Electronics",
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
      i {
        font-size: 20px;
        color: #333;
      }
    }
  }
}
</style>
