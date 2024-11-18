<template>
  <div class="nav-container">
    <nav>
      <div class="left-section">
        <div class="logo">
          <img src="/photos/g.png" alt="Logo" />
        </div>
        <div
          class="navbar-collapse-button"
          @click="useSidebar().value = !useSidebar().value"
        >
          <span :class="useSidebar().value ? 'open' : ''"></span>
          <span :class="useSidebar().value ? 'open' : ''"></span>
          <span :class="useSidebar().value ? 'open' : ''"></span>
        </div>
      </div>
      <div class="right-section">
        <!-- <div class="user">
          <div class="user-img">
            <img src="/photos/tabLogo.png" alt="Logo" />
          </div>
          <div class="user-name">
            <h5>{{ name }}</h5>
            <p>good morning</p>
          </div>
        </div> -->
      </div>
    </nav>
  </div>

  <div class="sidebar box" :class="useSidebar().value ? '' : 'open'">
    <ul class="main-links">
      <!-- <nuxt-link to="/Dashboard">
        <li
          :class="activeLink == 'Dashboard' ? 'active' : ''"
          @click="productDropDown = false"
        >
          <font-awesome :icon="['fas', 'chart-simple']" />
          <span>{{ $i18n.locale === "ar" ? "الاحصائيات" : "Statistics" }}</span>
        </li>
      </nuxt-link> -->

      <li
        @click="
          productDropDown = !productDropDown;
          activeLink = 'Products';
        "
        class="d-flex align-items-center justify-content-between"
        :class="activeLink == 'Products' ? 'active' : ''"
      >
        <div>
          <font-awesome :icon="['fas', 'seedling']" />
          <span>{{ $i18n.locale === "ar" ? "النباتات" : "Plants" }}</span>
        </div>
        <font-awesome
          class="caret"
          :icon="['fas', 'caret-down']"
          :class="productDropDown ? 'active' : ''"
        />
      </li>
      <!-- dropdown for products -->
      <ul class="second-links" :class="productDropDown ? 'showLink' : ''">
        <nuxt-link to="/AddProduct">
          <li :class="subActiveLink == 'AddProducts' ? 'sub-active' : ''">
            <font-awesome :icon="['fas', 'plus']" />
            <span>{{
              $i18n.locale === "ar" ? "إضافة نبات" : "Add Plant"
            }}</span>
          </li>
        </nuxt-link>

        <nuxt-link to="/ListProduct">
          <li :class="subActiveLink == 'ListProducts' ? 'sub-active' : ''">
            <font-awesome :icon="['fas', 'list']" />
            <span>{{
              $i18n.locale === "ar" ? "قائمة النباتات" : "Plants List"
            }}</span>
          </li>
        </nuxt-link>
      </ul>

      <nuxt-link to="/Customers">
        <li
          :class="activeLink == 'Customers' ? 'active' : ''"
          @click="productDropDown = false"
        >
          <font-awesome :icon="['fas', 'users']" />
          <span>{{ $i18n.locale === "ar" ? "الزبائن" : "Customers" }}</span>
        </li>
      </nuxt-link>

      <nuxt-link to="/Orders">
        <li
          :class="activeLink == 'Orders' ? 'active' : ''"
          @click="productDropDown = false"
        >
          <font-awesome :icon="['fas', 'boxes-stacked']" />
          <span>{{ $i18n.locale === "ar" ? "الطلبيات" : "Orders" }}</span>
        </li>
      </nuxt-link>

      <nuxt-link to="/Website">
        <li
          :class="activeLink == 'Orders' ? 'active' : ''"
          @click="productDropDown = false"
        >
          <font-awesome :icon="['fas', 'boxes-stacked']" />
          <span>{{
            $i18n.locale === "ar" ? "إدارة الموقع" : "Website Management"
          }}</span>
        </li>
      </nuxt-link>
      <a>
        <li class="d-flex align-items-end">
          <font-awesome :icon="['fas', 'globe']" />
          <ElementsLanguageToggle color="#333"></ElementsLanguageToggle>
        </li>
      </a>
    </ul>
  </div>
</template>

<script setup>
const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
let activeLink = ref(useActiveLink().value);
let subActiveLink = ref(useSubActiveLink().value);
// variables
let productDropDown = ref(false);

let mobile = ref(false);
const checkWindowSize = () => {
  mobile.value = window.matchMedia("(max-width: 1250px)").matches;
};
if (process.client) {
  onBeforeMount(() => {
    checkWindowSize();
  });
  onMounted(() => {
    window.addEventListener("resize", checkWindowSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkWindowSize);
  });
}
</script>

<style lang="scss" scoped>
.router-link-active {
  li {
    color: #fff !important;
    background: linear-gradient(118deg, #047751, #0dab77) !important;
    svg {
      color: #fff !important;
    }
  }
}
.nav-container {
  position: fixed;
  z-index: 10000;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px 20px;
    width: 100vw;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
    .left-section {
      display: flex;
      align-items: center;

      .logo {
        cursor: pointer;
        img {
          height: 70px;

          @media (max-width: 600px) {
            height: 50px;
          }
        }
      }
      .navbar-collapse-button {
        margin-left: 20px;
        width: 34px;
        height: 34px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        cursor: pointer;
        @media (max-width: 600px) {
          width: 25px;
          height: 25px;
          margin-left: 8px;
        }

        span {
          display: block;
          background-color: #003d29;
          width: 100%;
          height: 4px;
          border-radius: 24px;
          transition: all 0.3s linear;
          &.open {
            &:nth-child(1) {
              transform: translateY(3px) rotate(-45deg);
              width: 16px;
              @media (max-width: 600px) {
                width: 10px;
                transform: translateY(4px) rotate(-45deg);
              }
            }
            &:nth-child(2) {
              transform: translateX(0px);
            }
            &:nth-child(3) {
              width: 16px;
              transform: translateY(-4px) rotate(45deg);
              @media (max-width: 600px) {
                transform: translateY(-4px) rotate(45deg);
                width: 10px;
              }
            }
          }
        }
      }
    }
    .user {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      .user-img {
        img {
          width: 50px;
          border-radius: 50%;
          @media (max-width: 600px) {
            width: 30px;
          }
        }
      }
      .user-name {
        text-align: center;
        padding-right: 16px;
        @media (max-width: 600px) {
          padding-right: 5px;
        }
        h5,
        p {
          margin: 5px;
          @media (max-width: 600px) {
            margin: 0px;
          }
        }
        p {
          font-size: 14px;
          font-style: italic;
          color: #6d6a77;
        }
        @media (max-width: 600px) {
          p {
            font-size: 12px;
          }
          h5 {
            font-size: 14px;
          }
        }
      }
    }
  }
}

// sidebar
.sidebar {
  background-color: #fff;
  width: 260px;
  position: fixed;
  top: 90px;
  bottom: 0;
  inset-inline-start: 0;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  transition: all 0.3s linear;
  z-index: 5;

  @media (max-width: 600px) {
    top: 55px;
  }
  &.open {
    transform: translateX(-260px);
  }
  .main-links,
  .second-links {
    list-style: none;
    margin: 0;
    padding: 10px;
    li {
      font-weight: bold;
      background-color: #fff;
      color: #333;
      font-size: 16px;
      margin: 5px 0;
      padding: 10px 4px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s linear;
      &.active {
        color: #fff;
        background: linear-gradient(118deg, #047751, #0dab77);
        svg {
          color: #fff;
        }
      }
      svg {
        margin-inline-end: 10px;
        margin-inline-start: 10px;
        font-size: 20px;
        height: 20px;
        transition: all 0.3s linear;
        color: $main;
        &.caret {
          transform: rotate(90deg);
          &.active {
            transform: rotate(0deg);
          }
        }
      }
    }
  }
  .second-links {
    transition: all 0.3s linear;
    height: 0;
    overflow: hidden;
    padding: 0px 10px;
    .router-link-active {
      svg {
        color: #fff !important;
      }
    }
    li {
      font-weight: bold;
      &.sub-active {
        color: #fff;
        background: linear-gradient(118deg, #035d3f, #158862);
      }
      svg {
        margin-inline-end: 10px;
        margin-inline-start: 10px;
        font-size: 20px;
        height: 20px;
        transition: all 0.3s linear;
        &.active {
          transform: rotate(90deg);
        }
      }
    }
    &.showLink {
      height: 110px;
      padding-top: 10px;
    }
  }
}
.bodyAR {
  .navbar-collapse-button {
    margin-left: 0px !important;
    margin-right: 20px !important;
    span {
      &.open {
        &:nth-child(1) {
          transform: translateY(3px) rotate(45deg) !important;
          @media (max-width: 600px) {
            transform: translateY(4px) rotate(45deg) !important;
          }
        }
        &:nth-child(3) {
          transform: translateY(-4px) rotate(-45deg) !important;
          @media (max-width: 600px) {
            transform: translateY(-4px) rotate(-45deg) !important;
          }
        }
      }
    }
  }

  .sidebar {
    &.open {
      transform: translateX(260px) !important;
    }
  }
}
</style>
