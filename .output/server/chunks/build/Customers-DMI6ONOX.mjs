import { _ as __nuxt_component_0, a as _sfc_main$1 } from './icon-DPyvNtFG.mjs';
import { u as useSidebar } from './useState-CDjTBdWL.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '@fortawesome/fontawesome-svg-core';
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
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_font_awesome = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["contain", ("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : ""]
  }, _attrs))} data-v-363a72fd><div class="title-container" data-v-363a72fd><div class="head-title" data-v-363a72fd><h4 class="header4" data-v-363a72fd>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u0628\u0627\u062A\u0627\u062A" : "Plant List")}</h4><p data-v-363a72fd>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0646\u0628\u0627\u062A \u062C\u062F\u064A\u062F \u0645\u0646" : "Add new Plant from")} `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/AddProduct" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0646\u0627" : "here")}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0646\u0627" : "here"), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div><div class="options" data-v-363a72fd><div class="reload btn btn-success" data-v-363a72fd>`);
  _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
  _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Customers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Customers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-363a72fd"]]);

export { Customers as default };
//# sourceMappingURL=Customers-DMI6ONOX.mjs.map
