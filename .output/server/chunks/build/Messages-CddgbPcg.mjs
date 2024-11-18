import { _ as _sfc_main$1 } from './icon-jIl0hTBH.mjs';
import { _ as __nuxt_component_1 } from './AppModal-DMrvHfPr.mjs';
import { _ as _export_sfc, u as useI18n, a as _imports_0, b as useRuntimeConfig, c as useNuxtApp } from './server.mjs';
import { ref, unref, isRef, withCtx, createVNode, toDisplayString, withDirectives, vModelText, useSSRContext, watchEffect } from 'vue';
import { u as useFetch } from './fetch-C1NEePYn.mjs';
import { u as useSidebar } from './useState-C2nWW8Qs.mjs';
import { s as script } from './index-Drj_YP9h.mjs';
import { ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
import './index-CSqrJwZf.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';

const _sfc_main = {
  __name: "Messages",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { $awn } = useNuxtApp();
    const visible = ref(false);
    const visible2 = ref(false);
    let editPhone = ref();
    let editEmail = ref();
    let editWebsite = ref();
    ref();
    ref();
    ref();
    let deleteRegion = ref();
    let deleteModal = ref(false);
    const updateDeleteModal = (value) => {
      deleteModal.value = value;
    };
    let loading = ref(false);
    let Messages2 = ref();
    const getInfo = async () => {
      loading.value = true;
      if (locale.value === "ar") {
        await useFetch(
          `${api.GetAllMessages}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "ar"
            }
          },
          "$z49ujkITa3"
        );
        watchEffect(() => {
        });
      } else {
        await useFetch(
          `${api.GetAllMessages}`,
          {
            credentials: "include",
            baseURL: apiBase,
            headers: {
              "accept-language": "en"
            }
          },
          "$ixD4ykMqW5"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getInfo();
    let message = ref();
    const DeleteCat = async () => {
      await useFetch(
        `${api.DeleteMessagesInfo}/${deleteRegion.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$0aE4IS0G6f"
      );
      getInfo();
      deleteModal.value = false;
      locale.value === "en" ? $awn.success("Information Deleted Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    let editedCat = ref();
    const editCat = async () => {
      await useFetch(
        `${api.EditMessagesInfo}/${editedCat.value.id}`,
        {
          credentials: "include",
          body: {
            phone: editPhone.value,
            email: editEmail.value,
            website: editWebsite.value
          },
          baseURL: apiBase,
          method: "PUT"
        },
        "$pSlCgICYt0"
      );
      getInfo();
      visible2.value = false;
      editPhone.value = "";
      editEmail.value = "";
      editWebsite.value = "";
      locale.value === "en" ? $awn.success("Category Edited Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u0626\u0629 \u0628\u0646\u062C\u0627\u062D", {
        durations: { global: 5e3 }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_font_awesome = _sfc_main$1;
      const _component_Dialog = script;
      const _component_ElementsAppModal = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-1a924b0b><div class="title-container" data-v-1a924b0b><div class="head-title" data-v-1a924b0b><h4 class="header4" data-v-1a924b0b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0626\u0644" : "Messages")}</h4></div><div class="options" data-v-1a924b0b><div class="reload btn btn-success" data-v-1a924b0b>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644" : "Reload")}</div></div></div><div class="table-responsive" data-v-1a924b0b>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-1a924b0b><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1a924b0b></div>`);
      } else {
        _push(`<div class="cat-tabel" data-v-1a924b0b><table data-v-1a924b0b><thead data-v-1a924b0b><tr data-v-1a924b0b><th data-v-1a924b0b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645" : "Name")}</th><th data-v-1a924b0b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "Phone")}</th><th data-v-1a924b0b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email")}</th><th data-v-1a924b0b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u0633\u0627\u0644\u0629" : "Message")}</th><th data-v-1a924b0b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062A\u0627\u0631\u064A\u062E" : "Date")}</th></tr></thead><tbody data-v-1a924b0b><!--[-->`);
        ssrRenderList((_a = unref(Messages2)) == null ? void 0 : _a.data, (cat) => {
          _push(`<tr class="rows" data-v-1a924b0b><td data-v-1a924b0b><div data-v-1a924b0b><span data-v-1a924b0b>${ssrInterpolate(cat.name)}</span></div></td><td data-v-1a924b0b><div data-v-1a924b0b><span data-v-1a924b0b>${ssrInterpolate(cat.phone)}</span></div></td><td data-v-1a924b0b><div data-v-1a924b0b><span data-v-1a924b0b>${ssrInterpolate(cat.email)}</span></div></td><td data-v-1a924b0b><div data-v-1a924b0b><span data-v-1a924b0b>${ssrInterpolate(cat.message.length > 20 ? cat.message.slice(0, 20) + "..." : cat.message)}</span></div></td><td data-v-1a924b0b><div data-v-1a924b0b><span data-v-1a924b0b>${ssrInterpolate(cat.created_at.slice(0, 10))}</span></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: unref(visible),
        "onUpdate:visible": ($event) => isRef(visible) ? visible.value = $event : null,
        modal: "",
        style: { width: "25rem" }
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-1a924b0b${_scopeId}><p class="fw-bold mb-5" data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629" : "Message Information")}</p><div class="content" style="${ssrRenderStyle({ "direction": "initial" })}" data-v-1a924b0b${_scopeId}>${ssrInterpolate(unref(message))}</div><div class="mt-5 d-flex w-100 justify-content-end" data-v-1a924b0b${_scopeId}><button class="btn btn-secondary" data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("p", { class: "fw-bold mb-5" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629" : "Message Information"), 1),
                createVNode("div", {
                  class: "content",
                  style: { "direction": "initial" }
                }, toDisplayString(unref(message)), 1),
                createVNode("div", { class: "mt-5 d-flex w-100 justify-content-end" }, [
                  createVNode("button", {
                    class: "btn btn-secondary",
                    onClick: closeCallback
                  }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"])
                ])
              ], 8, ["dir"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: unref(visible2),
        "onUpdate:visible": ($event) => isRef(visible2) ? visible2.value = $event : null,
        modal: "",
        style: { width: "25rem" }
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-1a924b0b${_scopeId}><span data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A " : "Edit Information")}</span><div class="content" data-v-1a924b0b${_scopeId}><div data-v-1a924b0b${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-1a924b0b${_scopeId}><input${ssrRenderAttr("value", unref(editPhone))} id="editPhone" type="text" autocomplete="off"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone")} required data-v-1a924b0b${_scopeId}><label for="editPhone" data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-1a924b0b${_scopeId}><input${ssrRenderAttr("value", unref(editEmail))} id="editEmail" type="text" autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email"
            )} required data-v-1a924b0b${_scopeId}><label for="editEmail" data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-1a924b0b${_scopeId}><input${ssrRenderAttr("value", unref(editWebsite))} id="editWebsite" type="text" autocomplete="off"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Website")} required title="Enter only letters and spaces" data-v-1a924b0b${_scopeId}><label for="editWebsite" data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Website")}</label></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-1a924b0b${_scopeId}><button class="btn btn-secondary" data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$t("Edit"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("span", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A " : "Edit Information"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editPhone) ? editPhone.value = $event : editPhone = $event,
                        id: "editPhone",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editPhone)]
                      ]),
                      createVNode("label", { for: "editPhone" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0647\u0627\u062A\u0641" : "phone"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editEmail) ? editEmail.value = $event : editEmail = $event,
                        id: "editEmail",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editEmail)]
                      ]),
                      createVNode("label", { for: "editEmail" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" : "Email"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editWebsite) ? editWebsite.value = $event : editWebsite = $event,
                        id: "editWebsite",
                        type: "text",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Website",
                        required: "",
                        title: "Enter only letters and spaces"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editWebsite)]
                      ]),
                      createVNode("label", { for: "editWebsite" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0648\u0642\u0639" : "Website"), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-5 d-flex w-100 justify-content-end" }, [
                  createVNode("button", {
                    class: "btn btn-secondary",
                    onClick: closeCallback
                  }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
                  createVNode("button", {
                    class: "btn btn-success mx-2",
                    onClick: ($event) => editCat(),
                    autofocus: ""
                  }, toDisplayString(_ctx.$t("Edit")), 9, ["onClick"])
                ])
              ], 8, ["dir"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElementsAppModal, {
        isOpen: unref(deleteModal),
        onUpdateIsOpen: updateDeleteModal
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete")} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u061F" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641" : "Are You Sure You Want To Delete") + " " + toDisplayString(_ctx.$i18n.locale === "ar" ? "\u061F" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-1a924b0b${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Messages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Messages = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a924b0b"]]);

export { Messages as default };
//# sourceMappingURL=Messages-CddgbPcg.mjs.map
