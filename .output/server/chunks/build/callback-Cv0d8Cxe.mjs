import { withAsyncContext, useSSRContext } from 'vue';
import { u as useI18n, i as useRouter$1, q as useRoute$1 } from './server.mjs';
import { a as useAuth } from './useState-C2nWW8Qs.mjs';
import { u as useFetch } from './fetch-C1NEePYn.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "callback",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useI18n();
    const router = useRouter$1();
    const route = useRoute$1();
    route.query;
    useAuth().value.isAuthenticated = true;
    router.push("/");
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://server.nabtaty.com/api/findMyInfo`, "$0bsnZx2m0W")), __temp = await __temp, __restore(), __temp);
    localStorage.setItem("userInfo", data.value);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.loading) {
        _push(`<div${ssrRenderAttrs(_attrs)}>Authenticating...</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (_ctx.error) {
          _push(`<p>Authentication failed. Please try again.</p>`);
        } else {
          _push(`<p>Authentication successful! Redirecting...</p>`);
        }
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/callback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=callback-Cv0d8Cxe.mjs.map
