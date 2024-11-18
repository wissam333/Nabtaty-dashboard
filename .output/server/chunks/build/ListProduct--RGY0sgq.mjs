import { _ as __nuxt_component_0 } from './nuxt-link-Ngxiwv0S.mjs';
import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_1 } from './AppModal-DMrvHfPr.mjs';
import { _ as _export_sfc, u as useI18n, a as _imports_0, b as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { ref, withAsyncContext, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, useSSRContext, watchEffect } from 'vue';
import { u as useFetch } from './fetch-C1NEePYn.mjs';
import { u as useSidebar } from './useState-C2nWW8Qs.mjs';
import { ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_1 } from './virtual_public-wcPsXsLi.mjs';
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

const _sfc_main = {
  __name: "ListProduct",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { $awn } = useNuxtApp();
    let loading = ref(false);
    let products = ref();
    const getProduct = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetAllPlants}`,
          {
            credentials: "include",
            baseURL: apiBase,
            credentials: "include",
            headers: {
              "accept-language": "ar"
            }
          },
          "$TYaYxYRzsT"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetAllPlants}`,
          {
            credentials: "include",
            baseURL: apiBase,
            credentials: "include",
            headers: {
              "accept-language": "en"
            }
          },
          "$F5OzDqfcDy"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getProduct();
    let cats = ref();
    const getCats = async () => {
      if (locale.value === "ar") {
        await useFetch(
          `${api.findAllCategories}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$N2rYevAIA5"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.findAllCategories}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$xsMcjwWS7K"
        );
        watchEffect(() => {
        });
      }
    };
    getCats();
    [__temp, __restore] = withAsyncContext(() => useFetch(api.GetSubCat, {
      baseURL: apiBase,
      credentials: "include",
      method: "GET"
    }, "$Y5FfbwJrop")), __temp = await __temp, __restore();
    const subcat = (id) => {
      var _a, _b;
      let subcatName = (_a = cats.value) == null ? void 0 : _a.filter((sub) => sub.id === id);
      if (subcatName) {
        return (_b = subcatName[0]) == null ? void 0 : _b.category_name;
      }
    };
    let deleteProduct = ref();
    let deleteModal = ref(false);
    const updateDeleteModal = (value) => {
      deleteModal.value = value;
    };
    let searchText = ref("");
    const filteredArray = computed(() => {
      var _a;
      return (_a = products.value) == null ? void 0 : _a.filter(
        (item) => item.plant_name.toLowerCase().includes(searchText.value.toLowerCase())
      );
    });
    const deletePlant = async () => {
      await useFetch(
        `${api.DeletePlant}/${deleteProduct.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$mnzJkBOw0U"
      );
      getProduct();
      deleteModal.value = false;
      locale.value === "en" ? $awn.success("Plant Deleted Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0646\u0628\u0627\u062A \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_font_awesome = _sfc_main$1;
      const _component_ElementsAppModal = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-25b65a8e><div class="title-container" data-v-25b65a8e><div class="head-title" data-v-25b65a8e><h4 class="header4" data-v-25b65a8e>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u0628\u0627\u062A\u0627\u062A" : "Plant List")}</h4><p data-v-25b65a8e>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0646\u0628\u0627\u062A \u062C\u062F\u064A\u062F \u0645\u0646" : "Add new Plant from")} `);
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
      _push(`</p></div><div class="options" data-v-25b65a8e><div class="d-flex flex-column-reverse mx-2" data-v-25b65a8e><input${ssrRenderAttr("value", unref(searchText))} id="price" type="text" required${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0628\u062D\u062B" : "Search")} data-v-25b65a8e></div><div class="reload btn btn-success" data-v-25b65a8e>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div><div class="table-responsive" data-v-25b65a8e>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-25b65a8e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-25b65a8e></div>`);
      } else {
        _push(`<div class="product-tabel" data-v-25b65a8e><table data-v-25b65a8e><thead data-v-25b65a8e><tr data-v-25b65a8e><th data-v-25b65a8e>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-25b65a8e>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0633\u0639\u0631" : "Price")}</th><th data-v-25b65a8e>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0641\u0626\u0627\u062A" : "Categories")}</th><th data-v-25b65a8e>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062C\u062F\u064A\u062F" : "New")}</th><th data-v-25b65a8e>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0642\u062A\u0631\u062D" : "Recommended")}</th><th data-v-25b65a8e>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644" : "Edit")}</th></tr></thead><tbody data-v-25b65a8e><!--[-->`);
        ssrRenderList(unref(filteredArray), (product) => {
          var _a;
          _push(`<tr class="rows" data-v-25b65a8e><td class="d-flex align-items-center" data-v-25b65a8e><div class="product-img" data-v-25b65a8e>`);
          if ((_a = product == null ? void 0 : product.photos) == null ? void 0 : _a.photoPath) {
            _push(`<img${ssrRenderAttr("src", unref(apiBase) + "/" + product.photos.photoPath)} alt="" data-v-25b65a8e>`);
          } else {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-25b65a8e>`);
          }
          _push(`</div><div class="product-info d-flex flex-column align-items-start" data-v-25b65a8e><h5 data-v-25b65a8e>${ssrInterpolate(product.plant_name)}</h5></div></td><td class="fw-bold" data-v-25b65a8e>$${ssrInterpolate(product.price)}</td><td data-v-25b65a8e><p class="badge rounded-pill bg-primary me-1" data-v-25b65a8e>${ssrInterpolate(subcat(product.category_id))}</p></td><td data-v-25b65a8e>`);
          if (product.newest) {
            _push(`<p class="badge rounded-pill bg-success me-1" data-v-25b65a8e>`);
            _push(ssrRenderComponent(_component_font_awesome, {
              class: "check",
              icon: ["fas", "check"]
            }, null, _parent));
            _push(`</p>`);
          } else {
            _push(`<p class="badge rounded-pill bg-danger me-1" data-v-25b65a8e>`);
            _push(ssrRenderComponent(_component_font_awesome, {
              class: "check",
              icon: ["fas", "xmark"]
            }, null, _parent));
            _push(`</p>`);
          }
          _push(`</td><td data-v-25b65a8e>`);
          if (product.recommended) {
            _push(`<p class="badge rounded-pill bg-success me-1" data-v-25b65a8e>`);
            _push(ssrRenderComponent(_component_font_awesome, {
              class: "check",
              icon: ["fas", "check"]
            }, null, _parent));
            _push(`</p>`);
          } else {
            _push(`<p class="badge rounded-pill bg-danger me-1" data-v-25b65a8e>`);
            _push(ssrRenderComponent(_component_font_awesome, {
              class: "check",
              icon: ["fas", "xmark"]
            }, null, _parent));
            _push(`</p>`);
          }
          _push(`</td><td data-v-25b65a8e><span class="delete" data-v-25b65a8e>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/EditProduct/${product.id}`,
            class: "edit-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="edit" data-v-25b65a8e${_scopeId}>`);
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
      _push(ssrRenderComponent(_component_ElementsAppModal, {
        isOpen: unref(deleteModal),
        onUpdateIsOpen: updateDeleteModal
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 data-v-25b65a8e${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-25b65a8e${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete")} &quot;${ssrInterpolate(unref(deleteProduct).plant_name)}&quot;${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u061F" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete") + ' "' + toDisplayString(unref(deleteProduct).plant_name) + '"' + toDisplayString(_ctx.$i18n.locale === "ar" ? "\u061F" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-25b65a8e${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-25b65a8e${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
          } else {
            return [
              createVNode("button", {
                class: "btn btn-secondary",
                onClick: ($event) => isRef(deleteModal) ? deleteModal.value = false : deleteModal = false
              }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
              createVNode("button", {
                class: "btn btn-danger",
                onClick: ($event) => deletePlant()
              }, toDisplayString(_ctx.$t("Delete")), 9, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ListProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ListProduct = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25b65a8e"]]);

export { ListProduct as default };
//# sourceMappingURL=ListProduct--RGY0sgq.mjs.map
