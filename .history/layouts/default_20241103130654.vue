<template>
  <div>
    <ClientOnly>
      <div :class="locale == 'ar' ? 'bodyAR' : 'bodyEN'">
        <SharedNavbar />
        <transition name="scale" mode="out-in"> <slot /> </transition>
      </div>
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
<script setup>
const { locale } = useI18n();
useLang().value = locale;

// get the country
const arabicCountries = [
  "SA",
  "AE",
  "EG",
  "LY",
  "JO",
  "LB",
  "DZ",
  "MA",
  "SY",
  "SD",
  "IQ",
  "YE",
  "OM",
  "KW",
  "QA",
  "BH",
  "PS",
  "MR",
  "SO",
  "TN",
  "DJ",
];
const { data, error } = await useFetch("https://ipapi.co/json/");

let changed = ref(false);
watchEffect(() => {
  if (process.client) {
    if (data.value) {
      if (!changed.value)
        if (!error.value && data.value?.country_code) {
          locale.value = arabicCountries.includes(data.value.country_code)
            ? "ar"
            : "en";
        }
      changed.value = true;
    }
  }
});
</script>
