<template>
  <div>
    <ClientOnly>
      <div :class="locale == 'ar' ? 'bodyAR' : 'bodyEN'">
        <SharedNavbar />
        <slot />
      </div>
    </ClientOnly>
  </div>
</template>
<script setup>
const { locale } = useI18n();
useLang().value = locale;

// // get the country
// const arabicCountries = [
//   "SA",
//   "AE",
//   "EG",
//   "LY",
//   "JO",
//   "LB",
//   "DZ",
//   "MA",
//   "SY",
//   "SD",
//   "IQ",
//   "YE",
//   "OM",
//   "KW",
//   "QA",
//   "BH",
//   "PS",
//   "MR",
//   "SO",
//   "TN",
//   "DJ",
// ];
// const { data, error } = await useFetch("https://ipapi.co/json/");

// let changed = ref(false);
// watchEffect(() => {
//   if (process.client) {
//     if (data.value) {
//       if (!changed.value)
//         if (!error.value && data.value?.country_code) {
//           locale.value = arabicCountries.includes(data.value.country_code)
//             ? "ar"
//             : "en";
//         }
//       changed.value = true;
//     }
//   }
// });

// watchEffect(() => {
//   if (locale.value) {
//     if (locale.value === "ar") {
//       useCookie("lang").value = "ar";
//       useCookie("i18n_redirected").value = "ar";
//     } else {
//       useCookie("lang").value = "en";
//       useCookie("i18n_redirected").value = "en";
//     }
//   }
// });
</script>
