import { _ as __nuxt_component_0, a as _sfc_main$1 } from "./icon-DPyvNtFG.js";
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { u as useSidebar } from "./useState-CDjTBdWL.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, g as _imports_0 } from "../server.mjs";
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
const _sfc_main = {
  __name: "ListProduct",
  __ssrInlineRender: true,
  setup(__props) {
    let products = ref([
      {
        desc: "lorem apsum lorem apsum",
        id: 1,
        name: "Wireless Earbuds Pro",
        price: 79.99,
        category: "Electronics"
      },
      {
        desc: "lorem apsum lorem apsum",
        id: 2,
        name: "Smart Fitness Tracker",
        price: 49.99,
        category: "Health & Fitness"
      },
      {
        desc: "lorem apsum lorem apsum",
        id: 3,
        name: "4K Action Camera",
        price: 119.99,
        category: "Photography"
      },
      {
        desc: "lorem apsum lorem apsum",
        id: 4,
        name: "Organic Cotton T-Shirt",
        price: 19.99,
        category: "Apparel"
      },
      {
        desc: "lorem apsum lorem apsum",
        id: 5,
        name: "Gaming Mouse",
        price: 34.99,
        category: "Computer Accessories"
      },
      {
        desc: "lorem apsum lorem apsum",
        id: 6,
        name: "Portable Blender",
        price: 29.99,
        category: "Kitchen Appliances"
      },
      {
        desc: "lorem apsum lorem apsum",
        id: 7,
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Audio Equipment"
      },
      {
        desc: "lorem apsum lorem apsum",
        id: 8,
        name: "Stainless Steel Water Bottle",
        price: 14.99,
        category: "Home Goods"
      },
      {
        desc: "lorem apsum lorem apsum",
        id: 9,
        name: "Yoga Mat",
        price: 24.99,
        category: "Sports & Outdoors"
      },
      {
        desc: "lorem apsum lorem apsum",
        id: 10,
        name: "Noise Cancelling Headphones",
        price: 149.99,
        category: "Electronics"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_font_awesome = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["contain", ("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : ""]
      }, _attrs))} data-v-e2a524a1><div class="title-container" data-v-e2a524a1><div class="head-title" data-v-e2a524a1><h4 class="header4" data-v-e2a524a1>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "قائمة النباتات" : "Plant List")}</h4><p data-v-e2a524a1>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "إضافة نبات جديد من" : "Add new Plant from")} `);
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
      _push(`</p></div><div class="options" data-v-e2a524a1><div class="reload btn btn-success" data-v-e2a524a1>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "إعادة تحميل" : "Reload")}</div></div></div><div class="table-responsive" data-v-e2a524a1>`);
      if (_ctx.productLoading) {
        _push(`<div class="loading" data-v-e2a524a1><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-e2a524a1></div>`);
      } else {
        _push(`<div class="product-tabel" data-v-e2a524a1><table data-v-e2a524a1><thead data-v-e2a524a1><tr data-v-e2a524a1><th data-v-e2a524a1>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الاسم" : "Name")}</th><th data-v-e2a524a1>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "السعر" : "Price")}</th><th data-v-e2a524a1>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الفئات" : "Categories")}</th><th data-v-e2a524a1>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "جديد" : "New")}</th><th data-v-e2a524a1>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "مقترح" : "Recommended")}</th><th data-v-e2a524a1>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "تعديل" : "Edit")}</th></tr></thead><tbody data-v-e2a524a1><!--[-->`);
        ssrRenderList(unref(products), (product) => {
          _push(`<tr class="rows" data-v-e2a524a1><td class="d-flex align-items-center" data-v-e2a524a1><div class="product-info d-flex flex-column align-items-start" data-v-e2a524a1><h5 data-v-e2a524a1>${ssrInterpolate(product.name)}</h5></div></td><td class="fw-bold" data-v-e2a524a1>$${ssrInterpolate(product.price)}</td><td data-v-e2a524a1><p class="badge rounded-pill bg-primary me-1" data-v-e2a524a1>${ssrInterpolate(product.category)}</p></td><td data-v-e2a524a1><p class="badge rounded-pill bg-success me-1" data-v-e2a524a1>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            class: "check",
            icon: ["fas", "check"]
          }, null, _parent));
          _push(`</p></td><td data-v-e2a524a1><p class="badge rounded-pill bg-danger me-1" data-v-e2a524a1>`);
          _push(ssrRenderComponent(_component_font_awesome, {
            class: "check",
            icon: ["fas", "xmark"]
          }, null, _parent));
          _push(`</p></td><td data-v-e2a524a1><span class="delete" data-v-e2a524a1>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span>`);
          _push(ssrRenderComponent(_component_nuxt_link, { class: "edit-link" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="edit" data-v-e2a524a1${_scopeId}>`);
                _push2(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "pen-to-square"] }, null, _parent2, _scopeId));
                _push2(`</span>`);
              } else {
                return [
                  createVNode("span", { class: "edit" }, [
                    createVNode(_component_font_awesome, { icon: ["fas", "pen-to-square"] })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ListProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListProduct = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e2a524a1"]]);
export {
  ListProduct as default
};
//# sourceMappingURL=ListProduct-CTxjIFnP.js.map
