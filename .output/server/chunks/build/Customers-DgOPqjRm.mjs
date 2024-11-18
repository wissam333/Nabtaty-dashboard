import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_1 } from './AppModal-DMrvHfPr.mjs';
import { _ as _export_sfc, u as useI18n, a as _imports_0, b as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { ref, computed, unref, withCtx, createVNode, toDisplayString, isRef, useSSRContext, watchEffect } from 'vue';
import { u as useFetch } from './fetch-C1NEePYn.mjs';
import { u as useSidebar } from './useState-C2nWW8Qs.mjs';
import { ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "Customers",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { $awn } = useNuxtApp();
    let deleteCustomer = ref();
    let deleteModal = ref(false);
    const updateDeleteModal = (value) => {
      deleteModal.value = value;
    };
    let searchText = ref("");
    const filteredArray = computed(() => {
      var _a;
      return (_a = customers.value) == null ? void 0 : _a.filter(
        (item) => item.firstName.toLowerCase().includes(searchText.value.toLowerCase()) || item.lastName.toLowerCase().includes(searchText.value.toLowerCase())
      );
    });
    let loading = ref(false);
    let customers = ref();
    const getCustomers = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetAllCustomers}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$tjHpGxM93M"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetAllCustomers}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$YL9N9p7kHx"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getCustomers();
    const DeleteCat = async () => {
      await useFetch(
        `${api.DeleteCustomer}/${deleteCustomer.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$qmrdzWaFc3"
      );
      getCustomers();
      deleteModal.value = false;
      locale.value === "en" ? $awn.success("Customer Deleted Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0632\u0628\u0648\u0646 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$1;
      const _component_ElementsAppModal = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-c90a8e56><div class="title-container" data-v-c90a8e56><div class="head-title" data-v-c90a8e56><h4 class="header4" data-v-c90a8e56>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0632\u0628\u0627\u0626\u0646" : "Customers List")}</h4></div><div class="options" data-v-c90a8e56><div class="d-flex flex-column-reverse mx-2" data-v-c90a8e56><input${ssrRenderAttr("value", unref(searchText))} id="price" type="text" required${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0628\u062D\u062B" : "Search")} data-v-c90a8e56></div><div class="reload btn btn-success" data-v-c90a8e56>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div><div class="table-responsive" data-v-c90a8e56>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-c90a8e56><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c90a8e56></div>`);
      } else {
        _push(`<div class="product-tabel" data-v-c90a8e56><table data-v-c90a8e56><thead data-v-c90a8e56><tr data-v-c90a8e56><th data-v-c90a8e56>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-c90a8e56>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email")}</th><th data-v-c90a8e56>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u0634\u0627\u0621" : "Created At")}</th><th data-v-c90a8e56>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644" : "Edit")}</th></tr></thead><tbody data-v-c90a8e56><!--[-->`);
        ssrRenderList(unref(filteredArray), (product) => {
          var _a;
          _push(`<tr class="rows" style="${ssrRenderStyle(!product.is_admin ? null : { display: "none" })}" data-v-c90a8e56><td class="d-flex align-items-center" data-v-c90a8e56><div class="product-img" data-v-c90a8e56>`);
          if (!product.thumbnail) {
            _push(`<img${ssrRenderAttr("src", product.thumbnail)} alt="" data-v-c90a8e56>`);
          } else {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-c90a8e56>`);
          }
          _push(`</div><div class="product-info d-flex flex-column align-items-start" data-v-c90a8e56><h5 data-v-c90a8e56>${ssrInterpolate(product.firstName)}</h5><h5 data-v-c90a8e56>${ssrInterpolate(product.lastName)}</h5></div></td><td class="fw-bold" data-v-c90a8e56>$${ssrInterpolate(product.email)}</td><td data-v-c90a8e56><p class="badge rounded-pill bg-primary me-1" data-v-c90a8e56>${ssrInterpolate((_a = product.created_at) == null ? void 0 : _a.slice(0, 10))}</p></td><td data-v-c90a8e56><span class="delete" data-v-c90a8e56>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span></td></tr>`);
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
            _push2(`<h4 data-v-c90a8e56${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-c90a8e56${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete")} &quot;${ssrInterpolate(unref(deleteCustomer).firstName + " " + unref(deleteCustomer).lastName)}&quot;${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u061F" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete") + ' "' + toDisplayString(unref(deleteCustomer).firstName + " " + unref(deleteCustomer).lastName) + '"' + toDisplayString(_ctx.$i18n.locale === "ar" ? "\u061F" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-c90a8e56${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-c90a8e56${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
          } else {
            return [
              createVNode("button", {
                class: "btn btn-secondary",
                onClick: ($event) => isRef(deleteModal) ? deleteModal.value = false : deleteModal = false
              }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
              createVNode("button", {
                class: "btn btn-danger",
                onClick: ($event) => DeleteCat()
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Customers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Customers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c90a8e56"]]);

export { Customers as default };
//# sourceMappingURL=Customers-DgOPqjRm.mjs.map
