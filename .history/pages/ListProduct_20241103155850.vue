<template>
  <div class="contain" :class="useSidebar().value ? 'shrink' : ''">
    <div class="title-container">
      <div class="head-title">
        <h4 class="header4">Products List</h4>
        <p>
          Add new Product from
          <nuxt-link to="/AddProduct">here</nuxt-link>
        </p>
      </div>
      <div class="options">
        <div
          class="reload btn btn-success"
          @click="getProductsTrigger(page, pageSize)"
        >
          <i class="bi bi-arrow-clockwise me-1"></i>Reload
        </div>
      </div>
    </div>

    <DataTable
      stripedRows
      resizableColumns
      removableSort
      columnResizeMode="expand"
      scrollHeight="calc(100vh - 217px)"
      ref="dt"
      :value="Warehouses"
      scrollable
      dataKey="id"
      :paginator="true"
      :rows="10"
      v-model:filters="filters"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Warehouses"
      :style="{ fontSize: '14px !important' }"
      filterDisplay="menu"
    >
      <!-- <template #header> </template> -->
      <Column
        :exportable="false"
        style="min-width: 2rem; max-width: 8rem"
        :header="$t('Warehouses.Details')"
      >
        <template #body="slotProps">
          <div style="font-size: 20px">sfsdf</div>
        </template>
      </Column>
      <!-- <Column field="id" header="ID" sortable style="min-width: 2rem;max-width: 8rem;"></Column> -->
      <Column
        field="name"
        :header="$t('Warehouses.Name')"
        sortable
        style="min-width: 2rem; max-width: 8rem"
      >
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @keydown.enter="filterCallback()"
            class="p-column-filter"
            :placeholder="
              locale == 'fr' ? 'Rechercher par nom' : 'Search by name'
            "
          />
        </template>
        <template #body="slotProps">
          <div class="media d-flex align-items-center">
            <img
              v-if="slotProps.data.image === null"
              src="../assets/logo2.png"
              alt=""
              style="
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 1px solid #ff8bd6;
              "
              class="me-2"
              loading="lazy"
            />
            <img
              v-else
              class="me-2"
              :src="slotProps.data.image"
              alt="404"
              style="
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 1px solid #ff8bd6;
              "
              loading="lazy"
            />
            <div class="media-body" style="width: 100%">
              <p
                class="name fw-bold mb-0"
                style="
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  display: block;
                "
              >
                {{ slotProps.data.name }}
              </p>
            </div>
          </div>
        </template>
      </Column>
      <Column
        field="location"
        :header="$t('Warehouses.Location')"
        sortable
        style="
          min-width: 2rem;
          max-width: 8rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        "
      >
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @keydown.enter="filterCallback()"
            class="p-column-filter"
            :placeholder="
              locale == 'fr'
                ? 'Rechercher par emplacement'
                : 'Search by location'
            "
          />
        </template>
      </Column>
      <Column
        field="area"
        :header="$t('Warehouses.Area')"
        sortable
        dataType="numeric"
        style="
          min-width: 2rem;
          max-width: 8rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        "
      >
        <template #filter="{ filterModel, filterCallback }">
          <InputNumber
            v-model="filterModel.value"
            type="number"
            @keydown.enter="filterCallback()"
            class="p-column-filter"
            :placeholder="
              locale == 'fr' ? 'Recherche par zone' : 'Search by area'
            "
            :min="0"
          />
        </template>
        <template #header="{ header }">
          <div style="position: relative">
            <span>{{ header }}</span>
            <sup style="position: absolute; top: -9px; left: 30px">2</sup>
          </div>
        </template>
      </Column>
      <Column
        field="min_limits"
        :header="$t('Warehouses.Min')"
        sortable
        dataType="numeric"
        style="
          min-width: 2rem;
          max-width: 8rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        "
      >
        <template #filter="{ filterModel, filterCallback }">
          <InputNumber
            v-model="filterModel.value"
            type="number"
            @keydown.enter="filterCallback()"
            class="p-column-filter"
            :placeholder="
              locale == 'fr'
                ? 'Recherche par limites minimales'
                : 'Search by min limits'
            "
            :min="0"
          />
        </template>
      </Column>
    </DataTable>

    <!-- delete modal -->
    <AppModal :isOpen="deleteModal" @updateIsOpen="updateDeleteModal">
      <template #header>
        <h4>Delete Confirmation</h4>
      </template>
      <template #content>
        <p>Are You Sure You Want To Delete "{{ deleteProductName }}"?</p>
      </template>
      <template #footer>
        <button class="btn btn-secondary" @click="deleteModal = false">
          close
        </button>
        <button class="btn btn-danger" @click="DeleteProductTrigger()">
          Delete
        </button>
      </template>
    </AppModal>

    <!-- show modal -->
    <AppModal :isOpen="showModal" @updateIsOpen="updateShowModal">
      <template #header></template>
      <template #content>
        <img :src="showImage" alt="" style="width: 100%" />
      </template>
      <template #footer>
        <button class="btn btn-secondary" @click="showModal = false">
          close
        </button>
      </template>
    </AppModal>
  </div>
</template>
<script setup></script>
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
    text-align: left;
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
