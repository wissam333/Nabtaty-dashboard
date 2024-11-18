import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as _export_sfc, u as useI18n, a as _imports_0, b as useRuntimeConfig } from './server.mjs';
import { ref, mergeProps, unref, useSSRContext, watchEffect } from 'vue';
import { u as useFetch } from './fetch-C1NEePYn.mjs';
import { u as useSidebar } from './useState-C2nWW8Qs.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
  __name: "Orders",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    let loading = ref(false);
    let Orders2 = ref([]);
    const getInfo = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(`${api.GetOrders}`, {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": "ar"
          }
        }, "$djJZ6cHzca");
        watchEffect(() => {
        });
      } else {
        await useFetch(`${api.GetOrders}`, {
          credentials: "include",
          baseURL: apiBase,
          headers: {
            "accept-language": "en"
          }
        }, "$YNy2Ggelwz");
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getInfo();
    ref();
    ref(false);
    let customers = ref([]);
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
          "$CDNKpADFb0"
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
          "$AxnbrkYd1D"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getCustomers();
    let Loactions = ref([]);
    const getLoactions = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetAllLocations}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$VNB5xR4Q55"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetAllLocations}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$4NVbqSpcVq"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getLoactions();
    const getCustomerName = (id) => {
      var _a, _b, _c;
      let res = (_a = customers.value) == null ? void 0 : _a.filter((e) => e.id == id);
      return ((_b = res[0]) == null ? void 0 : _b.firstName) + ((_c = res[0]) == null ? void 0 : _c.lastName);
    };
    const getLocationName = (id) => {
      var _a, _b;
      let res = (_a = Loactions.value) == null ? void 0 : _a.filter((e) => e.id == id);
      return (_b = res[0]) == null ? void 0 : _b.name;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["contain", ("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : ""]
      }, _attrs))} data-v-d5784fa3><div class="title-container" data-v-d5784fa3><div class="head-title" data-v-d5784fa3><h4 class="header4" data-v-d5784fa3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0644\u0628\u064A\u0627\u062A" : "Orders List")}</h4></div><div class="options" data-v-d5784fa3><div class="reload btn btn-success" data-v-d5784fa3>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div><div class="table-responsive" data-v-d5784fa3>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-d5784fa3><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-d5784fa3></div>`);
      } else {
        _push(`<div class="product-tabel" data-v-d5784fa3><table data-v-d5784fa3><thead data-v-d5784fa3><tr data-v-d5784fa3><th data-v-d5784fa3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-d5784fa3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0643\u0644\u064A" : "Total Price")}</th><th data-v-d5784fa3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0627\u0631\u064A\u062E" : "Date")}</th><th data-v-d5784fa3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0646\u0648\u0639 \u0627\u0644\u062F\u0641\u0639" : "Payment Type")}</th><th data-v-d5784fa3>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Location")}</th></tr></thead><tbody data-v-d5784fa3><!--[-->`);
        ssrRenderList(unref(Orders2), (product) => {
          var _a2;
          var _a;
          _push(`<tr class="rows" data-v-d5784fa3><td class="fw-bold" data-v-d5784fa3>${ssrInterpolate(getCustomerName(product.customer_id))}</td><td data-v-d5784fa3><p class="badge rounded-pill bg-primary me-1" data-v-d5784fa3> $${ssrInterpolate(product.total_price)}</p></td><td class="fw-bold" data-v-d5784fa3>${ssrInterpolate((_a = product.created_at) == null ? void 0 : _a.slice(0, 10))}</td><td class="fw-bold" data-v-d5784fa3>${ssrInterpolate(((_a2 = product.payment_id) != null ? _a2 : _ctx.$i18n.locale === "ar") ? "\u0644\u0627 \u064A\u0648\u062C\u062F" : "Not Found")}</td><td class="fw-bold" data-v-d5784fa3>${ssrInterpolate(getLocationName(product.location_id))}</td></tr>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d5784fa3"]]);

export { Orders as default };
//# sourceMappingURL=Orders-CgvKM4PT.mjs.map
