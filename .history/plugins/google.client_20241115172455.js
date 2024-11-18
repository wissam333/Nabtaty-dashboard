export default defineNuxtPlugin(() => {
  const baseURL = "https://server.nabtaty.com/";

  return {
    provide: {
      api: {
        get: (url) => $fetch(url, { baseURL }),
        post: (url, body) => $fetch(url, { baseURL, method: "POST", body }),
      },
    },
  };
});
