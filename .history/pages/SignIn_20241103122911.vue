<template>
  <section class="sign gradient-form">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <div class="d-flex mb-4 justify-content-center">
                      <img
                        src="/photos/g.png"
                        alt=""
                        class="logo"
                        loading="lazy"
                      />
                      <div class="d-flex flex-column">
                        <!-- <img style="width: 50px; height: 50px" src="../assets/bdgOne.png" alt="" />
                          <img style="width: 50px; height: 50px" src="../assets/bdgTwo.png" alt="" /> -->
                      </div>
                    </div>

                    <h4 class="title mt-1 mb-5 pb-1">
                      We are The Shopcart Team 🛒
                    </h4>
                  </div>

                  <form @submit.prevent="loginTrigger()">
                    <div class="d-flex flex-column-reverse mb-3">
                      <input
                        v-model="username"
                        id="username"
                        type="text"
                        required
                        maxlength="30"
                        placeholder="Joun Doe"
                      />
                      <label for="username">Username</label>
                    </div>

                    <div class="d-flex flex-column-reverse mb-3">
                      <input
                        v-model="password"
                        id="password"
                        type="password"
                        required
                        maxlength="30"
                        placeholder="Type your password"
                        minlength="6"
                      />
                      <label for="username">Password</label>
                    </div>

                    <!-- Submit button -->
                    <div class="text-center pt-1 mb-1 pb-1">
                      <div class="login">
                        <input type="submit" class="basic" value="Log In" />
                      </div>
                    </div>
                  </form>
                  <div>
                    <p class="text-center">
                      Don't have account?
                      <router-link to="/SignUp"> Register as User</router-link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="text-box col-lg-6 d-flex align-items-center gradient-custom-2"
              >
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <img src="/photos/tabLogo.png" alt="" loading="lazy" />
                  <h4 class="mb-4">We are more than just a company</h4>

                  <p class="small mb-0">
                    Join us in the world of online shopping and discover a whole
                    new way to shop. Welcome to Shopcart, where shopping meets
                    convenience! Happy shopping!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const username = ref("");
const password = ref("");
</script>

<style lang="scss" scoped>
.sign {
  background-color: #eee;
  min-height: 100vh;
  display: flex;
  align-items: center;
  .title {
    color: #003d29;
  }
  .logo {
    width: 350px;
    height: 150px;
    object-fit: contain;
    @media (max-width: 425px) {
      width: 225px;
      height: 90px;
    }
  }
  .login {
    input {
      width: 100%;
      padding: 5px;
      border-radius: 3px;
      border: none;
      background-color: #003d29;
      color: #fff;
    }
  }
  .text-box {
    position: relative;
    display: block;
    background-color: #003d29;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
    @media (max-width: 991px) {
      display: none !important;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      opacity: 0.3;
      mix-blend-mode: multiply;
    }
    h4,
    p {
      position: relative;
      z-index: 4;
    }
  }
}
</style>
