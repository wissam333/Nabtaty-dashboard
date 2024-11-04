import { _ as __nuxt_component_0, a as _sfc_main$1 } from "./icon-DPyvNtFG.js";
import { u as useSidebar } from "./useState-CDjTBdWL.js";
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "@fortawesome/fontawesome-svg-core";
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
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_font_awesome = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["contain", ("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : ""]
  }, _attrs))} data-v-43c28059><div class="title-container" data-v-43c28059><div class="head-title" data-v-43c28059><h4 class="header4" data-v-43c28059>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "قائمة النباتات" : "Plant List")}</h4><p data-v-43c28059>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "إضافة نبات جديد من" : "Add new Plant from")} `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/AddProduct" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "هنا" : "here")}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$i18n.locale === "ar" ? "هنا" : "here"), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div><div class="options" data-v-43c28059><div class="reload btn btn-success" data-v-43c28059>`);
  _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
  _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "إعادة تحميل" : "Reload")}</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-43c28059"]]);
export {
  Orders as default
};
//# sourceMappingURL=Orders-wBLhpDKB.js.map
