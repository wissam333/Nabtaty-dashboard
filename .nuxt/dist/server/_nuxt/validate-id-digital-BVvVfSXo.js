import { t as defineNuxtRouteMiddleware, m as navigateTo } from "../server.mjs";
import "vue";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "destr";
import "@primeuix/styled";
import "@primeuix/utils/object";
import "@primeuix/utils/dom";
import "@primeuix/utils/eventbus";
import "@primeuix/utils";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "vue/server-renderer";
const validateIdDigital = defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id !== void 0 && !/^\d+$/.test(to.params.id)) {
    return navigateTo("/404", { redirectCode: 301 });
  }
  if (to.params.productId !== void 0 && !/^\d+$/.test(to.params.productId)) {
    return navigateTo("/404", { redirectCode: 301 });
  }
});
export {
  validateIdDigital as default
};
//# sourceMappingURL=validate-id-digital-BVvVfSXo.js.map
