import { t as defineNuxtRouteMiddleware, m as navigateTo } from './server.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/object';
import '@primeuix/utils/dom';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import 'vue/server-renderer';

const validateIdDigital = defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id !== void 0 && !/^\d+$/.test(to.params.id)) {
    return navigateTo("/404", { redirectCode: 301 });
  }
  if (to.params.productId !== void 0 && !/^\d+$/.test(to.params.productId)) {
    return navigateTo("/404", { redirectCode: 301 });
  }
});

export { validateIdDigital as default };
//# sourceMappingURL=validate-id-digital-BVvVfSXo.mjs.map
