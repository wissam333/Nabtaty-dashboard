<template>
  <div class="title">
    <h1 class="d-flex align-items-center justify-content-center">
      <img width="70" src="/photos/nabtaty8.png" alt="" />
      <span class="underline">
        {{ $i18n.locale === "ar" ? "تسجيل الدخول" : "Sign In" }}
      </span>
    </h1>
  </div>
  <div class="container">
    <div class="card">
      <h2>
        {{
          $i18n.locale === "ar"
            ? "سجل الدخول الآن عن طريق حسابك على غوغل"
            : "Sign In Now By Your Google Account"
        }}
      </h2>
      <ClientOnly>
        <GoogleSignInButton
          @success="onGoogleSignInSuccess"
          @error="onGoogleSignInError"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
const isAuth = useAuth().value;
const onGoogleSignInSuccess = (response) => {
  const credential = response.credential;

  if (credential) {
    // JWT is split into three parts: header, payload, and signature
    const base64Url = credential.split(".")[1]; // Get the payload (second part)

    // Decode the base64 payload
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    // Parse the JSON payload to get user info
    const userInfo = JSON.parse(jsonPayload);

    console.log("User Info:", userInfo);

    // Example: Display user details
    localStorage.setItem("userName", userInfo.name);
    localStorage.setItem("userEmail", userInfo.email);
    isAuth.isAuthenticated = true;

    navigateTo("/order");
  }
};

const onGoogleSignInError = (error) => {
  console.error("Google Sign-In Error:", error);
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  padding: 40px 0px;
  span {
    -webkit-background-clip: text;
    font-weight: bold;
    background-color: #8cc63e;
    background-image: linear-gradient(to right, #191d23, #8cc63e);
    background-repeat: repeat;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
.container {
  display: flex;
  justify-content: center;

  .card {
    padding: 40px 30px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 5px 0px #33333325;
    border-radius: 16px;
    h2 {
      margin-bottom: 30px;
      color: $main;
      font-weight: bold;
    }
  }
}
</style>
