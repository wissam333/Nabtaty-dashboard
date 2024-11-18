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

if (!code) {
  console.error("No authorization code found");
} else {
  const { data, error } = await useFetch(`/auth/callback?code=${code}`);
  if (error.value) {
    console.error("Authentication failed", error.value);
  } else {
    // Save token (if provided)
    const token = data.value?.token;
    if (token) {
      localStorage.setItem("authToken", token);
    }
    // Redirect to home or dashboard
    useAuth().value.isAuthenticated = true;
    router.push("/");
    const { data } = await useFetch(
      `https://server.nabtaty.com/api/findMyInfo`
    );
    localStorage.setItem("userInfo", data.value);
  }
}
</script>
