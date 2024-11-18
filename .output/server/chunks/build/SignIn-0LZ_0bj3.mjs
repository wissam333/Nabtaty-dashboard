import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { r as publicAssetsURL, _ as _export_sfc } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/photos/g.png");
const _imports_1 = publicAssetsURL("/photos/tabLogo.png");
const _sfc_main = {
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["sign gradient-form", _ctx.$i18n.locale === "ar" ? "bodyAR" : ""]
      }, _attrs))} data-v-933fa409><div class="container" data-v-933fa409><div class="row d-flex justify-content-center align-items-center h-100" data-v-933fa409><div class="col-xl-10" data-v-933fa409><div class="card rounded-3 text-black" data-v-933fa409><div class="row g-0" data-v-933fa409><div class="col-lg-6" data-v-933fa409><div class="card-body p-md-5 mx-md-4" data-v-933fa409><div class="text-center" data-v-933fa409><div class="d-flex mb-4 justify-content-center" data-v-933fa409><img${ssrRenderAttr("src", _imports_0)} alt="" class="logo" loading="lazy" data-v-933fa409><div class="d-flex flex-column" data-v-933fa409></div></div><h4 class="title mt-1 mb-5 pb-1" data-v-933fa409>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0646\u062D\u0646 \u0641\u0631\u064A\u0642 \u0646\u0628\u062A\u062A\u064A \u{1F331}" : "We are The Nabtaty Team \u{1F331}")}</h4></div><div data-v-933fa409><div class="text-center pt-1 mb-1 pb-1" data-v-933fa409><div class="login" data-v-933fa409><input type="submit" class="basic"${ssrRenderAttr(
        "value",
        _ctx.$i18n.locale === "ar" ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0639\u0646 \u0637\u0631\u064A\u0642 \u063A\u0648\u063A\u0644" : "Log In With Google"
      )} data-v-933fa409></div></div></div></div></div><div class="text-box col-lg-6 d-flex align-items-center gradient-custom-2" data-v-933fa409><div class="text-white box px-3 py-4 p-md-5 mx-md-4" data-v-933fa409><img${ssrRenderAttr("src", _imports_1)} alt="" loading="lazy" data-v-933fa409><h4 class="mb-4" data-v-933fa409>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0646\u062D\u0646 \u0623\u0643\u062B\u0631 \u0645\u0646 \u0645\u062C\u0631\u062F \u0645\u062A\u062C\u0631!" : "We\u2019re more than just a store!")}</h4><p class="small mb-0" data-v-933fa409>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0646\u0636\u0645 \u0625\u0644\u064A\u0646\u0627 \u0641\u064A \u0627\u0644\u0639\u0627\u0644\u0645 \u0627\u0644\u0633\u0627\u062D\u0631 \u0644\u0644\u062A\u0633\u0648\u0642 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0648\u0627\u0643\u062A\u0634\u0641 \u0637\u0631\u064A\u0642\u0629 \u062C\u062F\u064A\u062F\u0629 \u0644\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u062E\u0636\u0631\u0648\u0627\u062A \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u062F\u064A\u0643. \u0645\u0631\u062D\u0628\u064B\u0627 \u0628\u0643\u0645 \u0641\u064A \u0646\u0628\u062A\u064A\u060C \u062D\u064A\u062B \u062A\u062C\u062A\u0645\u0639 \u0627\u0644\u0631\u0627\u062D\u0629 \u0645\u0639 \u0645\u062A\u0639\u0629 \u0631\u0639\u0627\u064A\u0629 \u0627\u0644\u0637\u0628\u064A\u0639\u0629! \u0632\u0631\u0627\u0639\u0629 \u0633\u0639\u064A\u062F\u0629!" : "Join us in the enchanting world of online plant shopping and uncover a fresh approach to finding your favorite greens. Welcome to Nabtty, where convenience meets the joy of nurturing nature! Happy planting!")}</p></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SignIn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SignIn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-933fa409"]]);

export { SignIn as default };
//# sourceMappingURL=SignIn-0LZ_0bj3.mjs.map
