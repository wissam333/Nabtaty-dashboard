<template>
  <div v-if="loading">Authenticating...</div>
  <div v-else>
    <p v-if="error">Authentication failed. Please try again.</p>
    <p v-else>Authentication successful! Redirecting...</p>
  </div>
</template>

<script setup>
const {
  public: { api, apiBase },
} = useRuntimeConfig();
const { locale } = useI18n();
const { $awn } = useNuxtApp();

const router = useRouter();
const route = useRoute();
const { code } = route.query;

// Redirect to home or dashboard
useAuth().value.isAuthenticated = true;
router.push("/");
const { data } = await useFetch(`https://server.nabtaty.com/api/findMyInfo`);
localStorage.setItem("userInfo", data.value);
</script>
