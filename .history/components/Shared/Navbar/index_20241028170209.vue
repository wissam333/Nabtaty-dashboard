<template>
  <div>
    <!-- mobile bottom bar -->
    <SharedNavbarBottomBar v-if="mobile"></SharedNavbarBottomBar>

    <div class="top" :class="$i18n.locale === 'en' ? 'en' : ''">
      <header :class="locale === 'ar' ? 'ar-flex' : ''">
        <div class="wrapper" v-if="!mobile">
          <!-- logo for pc -->
          <div>
            <nuxt-link to="/" class="logo" style="border: none !important">
              <img src="/photos/g.png" alt="" />
            </nuxt-link>
          </div>

          <!-- search bar -->
          <form class="form">
            <button>
              <font-awesome :icon="['fas', 'magnifying-glass']" />
            </button>
            <input
              class="input"
              :placeholder="
                $i18n.locale === 'ar' ? 'ابحث بالمنتجات' : 'Search in Products'
              "
              required=""
              type="text"
            />
            <button class="reset" type="reset">
              {{ $i18n.locale === "ar" ? "ابحث" : "Search" }}
            </button>
          </form>

          <!-- buttons -->
          <div class="buttons" :class="locale === 'ar' ? 'ar' : ''" style="">
            <!-- user -->
            <!-- <nuxt-link
              v-if="!isAuth.isAuthenticated"
              to="/auth/Login"
              class="login mx-2 pointer"
            >
              <font-awesome :icon="['far', 'user']" />
            </nuxt-link>
            <div
              v-else
              class="pointer login text-center dropdown mx-2"
              aria-current="page"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              <font-awesome :icon="['far', 'user']" />
            </div>
            <ul v-if="isAuth.isAuthenticated" class="dropdown-menu">
              <NuxtLink to="/Account" class="" style="border-bottom: none">
                <li class="dropdown-item text-white">
                  {{
                    useUserInfo().value?.fullNameAr ??
                    useUserInfo().value?.fullNameEn ??
                    useUserInfo().value?.nameAr ??
                    useUserInfo().value?.nameEn ??
                    $t("My Account")
                  }}
                </li>
              </NuxtLink>
              <li class="dropdown-item" @click.stop="logout">
                <NuxtLink to="/" class="text-white" style="border-bottom: none">
                  {{
                    $i18n.locale === "ar" ? "تسجيل الخروج" : "Log Out"
                  }}</NuxtLink
                >
              </li>
            </ul> -->
            <!-- cart -->
            <nuxt-link
              to="/Cart"
              class="cart mx-2 pointer"
              style="position: relative"
            >
              <small class="cartbox" v-if="cart.totalQty > 0">{{
                cart.totalQty
              }}</small>
              <font-awesome :icon="['fas', 'cart-shopping']" />
            </nuxt-link>
            <!-- search -->
            <!-- <div
              class="search mx-2 pointer"
              @click.stop="toggle"
              v-tooltip.bottom="$i18n.locale === 'ar' ? 'البحث' : 'Search'"
            >
              <font-awesome :icon="['fas', 'magnifying-glass']" />
            </div>

            <Popover ref="op" class="search-content">
              <div class="flex flex-col gap-4 w-[25rem]">
                <form class="container" @submit.prevent="search()">
                  <input
                    :class="$i18n.locale === 'ar' ? 'ar' : ''"
                    v-model="searchText"
                    type="text"
                    name="text"
                    class="input"
                    :placeholder="
                      $i18n.locale === 'ar'
                        ? 'ابحث بجميع المنتجات'
                        : 'Search in all products'
                    "
                    required
                  />
                  <button class="search__btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                        fill="#efeff1"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </Popover> -->

            <!-- Fav -->
            <nuxt-link
              to="/Fav"
              class="cart mx-2 pointer"
              style="position: relative"
            >
              <font-awesome
                v-if="!ProductForFavorite?.isFavorite"
                @click="AddToFavorite()"
                :icon="['fas', 'heart']"
                class="pointer"
              ></font-awesome>
            </nuxt-link>
          </div>
        </div>

        <!-- logo for mobile -->
        <div v-if="mobile">
          <nuxt-link to="/" class="logo" style="border: none !important">
            <img src="/photos/g.png" alt="" />
          </nuxt-link>
        </div>

        <!-- mobile navbar & sidebar -->
        <SharedNavbarMobileNav v-if="mobile"></SharedNavbarMobileNav>

        <!-- pc navbar -->
        <SharedNavbarPcNav v-if="!mobile"></SharedNavbarPcNav>
      </header>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

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

const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};

const isAuth = useAuth().value;
const cart = useCart();
</script>

<style lang="scss" scoped>
.router-link-active.router-link-exact-active {
  transition: all 0.3s ease-in-out;
  // border-bottom: 2px solid #fff;
}

.top {
  position: sticky;
  width: 100%;
  z-index: 100;
  height: 148px;
  // border-bottom: 2px solid $second;
  @media (max-width: 991px) {
    height: 80px;
    // border-bottom: 2px solid transparent;
  }
  header {
    display: flex;
    align-items: flex-start;
    width: 100vw;
    height: 148px;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.279);
    // border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    // border: 1px solid rgba(255, 255, 255, 0.3);
    background-position: center;
    position: relative;
    position: fixed;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 1250px) {
      flex-direction: row;
      padding: 0px 20px;
      align-items: center;
      justify-content: space-between;
    }
    @media (max-width: 991px) {
      height: 80px;
      padding: 10px;
    }

    // &::after {
    //   content: "";
    //   position: absolute;
    //   bottom: -15px;
    //   left: 0;
    //   right: 0;
    //   width: 100%;
    //   height: 15px;
    //   background: linear-gradient(90deg, #9e6b30, #bf9847);
    // }

    .logo {
      display: flex;
      align-items: center;
      width: 200px;
      height: 99px;
      margin: 2px;
      cursor: pointer;
      @media (max-width: 1250px) {
        width: 200px;
      }

      @media (max-width: 991px) {
        width: 130px;
        margin: 0px;
      }

      img {
        width: 100%;
      }
    }
  }
}

.buttons {
  display: flex;
  align-items: center;
  text-wrap: nowrap;
  // position: absolute;
  // top: 0;
  // left: auto;
  // right: 0;
  // padding: 35px;
  svg {
    color: #003d2e;
    width: 25px;
    height: 25px;
    font-size: 25px;
  }
  // &.ar {
  //   left: 0;
  //   right: auto;
  // }
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
}
/* From Uiverse.io by satyamchaudharydev */
/* From uiverse.io by @satyamchaudharydev */
/* removing default style of button */

// .form button {
//   border: none;
//   background: none;
//   color: #8b8ba7;
// }
/* styling of whole input container */
.form {
  --timing: 0.3s;
  --width-of-input: 40%;
  --height-of-input: auto;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #00916d;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg, #fff);
  box-shadow: 0px 0px 11px 0px rgba(170, 170, 170, 0.262745098) !important;
}
/* styling of Input */
.input {
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 15px 0px;
  border: none;
  box-shadow: none !important;
  color: #333;
}
/* styling of animated border */
.form:before {
  content: "";
  position: absolute;
  background: var(--border-color);
  transform: scaleX(0);
  transform-origin: center;
  width: 100%;
  height: var(--border-height);
  left: 0;
  bottom: 0;
  border-radius: 1px;
  transition: transform var(--timing) ease;
}
/* Hover on Input */
.form:focus-within {
  border-radius: var(--after-border-radius);
}

input:focus {
  outline: none;
}
/* here is code of animated border */
.form:focus-within:before {
  transform: scale(1);
}
/* styling of close button */
/* == you can click the close button to remove text == */
.reset {
  background-color: #be56c67e;
  width: auto;
  height: 55px;
  padding: 15px;
  color: #fff;
}
/* close button shown when typing */
input:not(:placeholder-shown) ~ .reset {
  opacity: 1;
  visibility: visible;
}
/* sizing svg icons */
.form svg {
  font-size: 20px;
  padding: 15px;
  color: #be56c67e;
}
.cartbox {
  position: absolute;
  top: -6px;
  right: 7px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(45deg, #e7a3ec, #fbc2ff, #e7a3ec);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  @media (max-width: 1250px) {
    width: 20px;
    height: 20px;
    top: 5px;
    font-size: 14px;
    right: 17px;
  }
}
</style>
