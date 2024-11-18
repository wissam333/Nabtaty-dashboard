import { _ as _sfc_main$1 } from "./icon-jIl0hTBH.js";
import { _ as __nuxt_component_1 } from "./AppModal-DMrvHfPr.js";
import { _ as _export_sfc, u as useI18n, a as _imports_0, b as useRuntimeConfig, c as useNuxtApp } from "../server.mjs";
import { ref, unref, isRef, withCtx, createVNode, toDisplayString, withDirectives, vModelText, useSSRContext, watchEffect } from "vue";
import { u as useFetch } from "./fetch-C1NEePYn.js";
import { u as useSidebar } from "./useState-C2nWW8Qs.js";
import { s as script } from "./index-Drj_YP9h.js";
import { ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
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
import "./index-CSqrJwZf.js";
import "@primeuix/utils/uuid";
import "@primeuix/utils/zindex";
const _sfc_main = {
  __name: "Locations",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const { $awn } = useNuxtApp();
    const visible = ref(false);
    const visible2 = ref(false);
    let nameAr = ref();
    let nameEn = ref();
    let price = ref();
    let editnameAr = ref();
    let editnameEn = ref();
    let editPrice = ref();
    let deleteRegion = ref();
    let deleteModal = ref(false);
    const updateDeleteModal = (value) => {
      deleteModal.value = value;
    };
    let loading = ref(false);
    let Loactions = ref();
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
          "$JtrzHH4k76"
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
          "$hYERLZfPwG"
        );
        watchEffect(() => {
        });
      }
      loading.value = false;
    };
    getLoactions();
    const DeleteLocation = async () => {
      await useFetch(
        `${api.DeleteLocation}/${deleteRegion.value.id}`,
        {
          credentials: "include",
          baseURL: apiBase,
          method: "DELETE"
        },
        "$RMHi7LpgYR"
      );
      getLoactions();
      deleteModal.value = false;
      locale.value === "en" ? $awn.success("Location Deleted Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("تم حذف المنطقة بنجاح", {
        durations: { global: 5e3 }
      });
    };
    const addLocation = async () => {
      visible.value = false;
      await useFetch(api.AddLocation, {
        baseURL: apiBase,
        method: "POST",
        credentials: "include",
        body: {
          location_name_AR: nameAr.value,
          location_name_EN: nameEn.value,
          price: price.value
        }
      }, "$TAqXBXj1r9");
      getLoactions();
      nameAr.value = "";
      nameEn.value = "";
      locale.value === "en" ? $awn.success("Location Added Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("تم إضافة المنطقة بنجاح", {
        durations: { global: 5e3 }
      });
    };
    let editedCat = ref();
    const editLocation = async () => {
      visible2.value = false;
      await useFetch(
        `${api.UpdateLocation}/${editedCat.value.id}`,
        {
          credentials: "include",
          body: {
            location_name_AR: editnameAr.value,
            location_name_EN: editnameEn.value,
            price: editPrice.value
          },
          baseURL: apiBase,
          method: "PUT"
        },
        "$D2xxC11fIw"
      );
      getLoactions();
      editnameAr.value = "";
      editnameEn.value = "";
      editPrice.value = 0;
      locale.value === "en" ? $awn.success("Location Edited Successfully", {
        durations: { global: 5e3 }
      }) : $awn.success("تم تعديل المنطقة بنجاح", {
        durations: { global: 5e3 }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$1;
      const _component_Dialog = script;
      const _component_ElementsAppModal = __nuxt_component_1;
      _push(`<!--[--><div class="${ssrRenderClass([("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : "", "contain"])}" data-v-db92e89b><div class="title-container" data-v-db92e89b><div class="head-title" data-v-db92e89b><h4 class="header4" data-v-db92e89b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "قائمة المناطق" : "Regions List")}</h4></div><div class="options" data-v-db92e89b><div class="reload btn btn-success mx-2" data-v-db92e89b>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "plus"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "إضافة" : "Add")}</div><div class="reload btn btn-success" data-v-db92e89b>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "rotate-right"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "إعادة تحميل" : "Reload")}</div></div></div><div class="table-responsive" data-v-db92e89b>`);
      if (unref(loading)) {
        _push(`<div class="loading" data-v-db92e89b><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-db92e89b></div>`);
      } else {
        _push(`<div class="product-tabel" data-v-db92e89b><table data-v-db92e89b><thead data-v-db92e89b><tr data-v-db92e89b><th data-v-db92e89b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الاسم" : "Name")}</th><th data-v-db92e89b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "السعر" : "Price")}</th><th data-v-db92e89b>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "تعديل" : "Edit")}</th></tr></thead><tbody data-v-db92e89b><!--[-->`);
        ssrRenderList(unref(Loactions), (product) => {
          _push(`<tr class="rows" data-v-db92e89b><td class="d-flex align-items-center" data-v-db92e89b><h5 class="fw-bold" data-v-db92e89b>${ssrInterpolate(product.name)}</h5></td><td class="fw-bold" data-v-db92e89b>$${ssrInterpolate(product.price)}</td><td data-v-db92e89b><span class="delete" data-v-db92e89b>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "trash"] }, null, _parent));
          _push(`</span><span class="edit-link" data-v-db92e89b><span class="edit" data-v-db92e89b>`);
          _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "pen-to-square"] }, null, _parent));
          _push(`</span></span></td></tr>`);
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
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-db92e89b${_scopeId}><h5 data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "إضافة منطقة جديدة" : "Add New Region")}</h5><div class="content" data-v-db92e89b${_scopeId}><div data-v-db92e89b${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-db92e89b${_scopeId}><input${ssrRenderAttr("value", unref(nameAr))} id="nameAr" type="text" required autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "الاسم بالعربي" : "Arabic Name"
            )} title="Enter only letters and spaces" data-v-db92e89b${_scopeId}><label for="nameAr" data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الاسم بالعربي" : "Arabic Name")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-db92e89b${_scopeId}><input${ssrRenderAttr("value", unref(nameEn))} id="nameEn" type="text" required autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "الاسم بالانجليزي" : "English Name"
            )} data-v-db92e89b${_scopeId}><label for="nameEn" data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الاسم بالانجليزي" : "English Name")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-db92e89b${_scopeId}><input${ssrRenderAttr("value", unref(price))} id="price" type="number" required maxlength="6" min="0"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "السعر" : "Price")} data-v-db92e89b${_scopeId}><label for="price" data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "السعر" : "Price")}</label></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-db92e89b${_scopeId}><button class="btn btn-secondary" data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$t("Add"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("h5", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "إضافة منطقة جديدة" : "Add New Region"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(nameAr) ? nameAr.value = $event : nameAr = $event,
                        id: "nameAr",
                        type: "text",
                        required: "",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "الاسم بالعربي" : "Arabic Name",
                        title: "Enter only letters and spaces"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(nameAr)]
                      ]),
                      createVNode("label", { for: "nameAr" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "الاسم بالعربي" : "Arabic Name"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(nameEn) ? nameEn.value = $event : nameEn = $event,
                        id: "nameEn",
                        type: "text",
                        required: "",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "الاسم بالانجليزي" : "English Name"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(nameEn)]
                      ]),
                      createVNode("label", { for: "nameEn" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "الاسم بالانجليزي" : "English Name"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : price = $event,
                        id: "price",
                        type: "number",
                        required: "",
                        maxlength: "6",
                        min: "0",
                        placeholder: _ctx.$i18n.locale === "ar" ? "السعر" : "Price"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(price)]
                      ]),
                      createVNode("label", { for: "price" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "السعر" : "Price"), 1)
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
                    onClick: addLocation,
                    autofocus: ""
                  }, toDisplayString(_ctx.$t("Add")), 1)
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
            _push2(`<div class="dialog"${ssrRenderAttr("dir", _ctx.$i18n.locale === "ar" ? "rtl" : "ltr")} data-v-db92e89b${_scopeId}><h5 data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "تعديل المنطقة" : "Edit Region")}</h5><div class="content" data-v-db92e89b${_scopeId}><div data-v-db92e89b${_scopeId}><div class="d-flex flex-column-reverse mb-3" data-v-db92e89b${_scopeId}><input${ssrRenderAttr("value", unref(editnameAr))} id="editnameAr" type="text" required autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "الاسم بالعربي" : "Arabic Name"
            )} title="Enter only letters and spaces" data-v-db92e89b${_scopeId}><label for="editnameAr" data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الاسم بالعربي" : "Arabic Name")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-db92e89b${_scopeId}><input${ssrRenderAttr("value", unref(editnameEn))} id="editnameEn" type="text" required autocomplete="off"${ssrRenderAttr(
              "placeholder",
              _ctx.$i18n.locale === "ar" ? "الاسم بالانجليزي" : "English Name"
            )} data-v-db92e89b${_scopeId}><label for="editnameEn" data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الاسم بالانجليزي" : "English Name")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-db92e89b${_scopeId}><input${ssrRenderAttr("value", unref(editPrice))} id="price" type="number" required maxlength="6" min="0"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "السعر" : "Price")} data-v-db92e89b${_scopeId}><label for="price" data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "السعر" : "Price")}</label></div></div></div><div class="mt-5 d-flex w-100 justify-content-end" data-v-db92e89b${_scopeId}><button class="btn btn-secondary" data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-success mx-2" autofocus data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$t("Edit"))}</button></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "dialog",
                dir: _ctx.$i18n.locale === "ar" ? "rtl" : "ltr"
              }, [
                createVNode("h5", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "تعديل المنطقة" : "Edit Region"), 1),
                createVNode("div", { class: "content" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editnameAr) ? editnameAr.value = $event : editnameAr = $event,
                        id: "editnameAr",
                        type: "text",
                        required: "",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "الاسم بالعربي" : "Arabic Name",
                        title: "Enter only letters and spaces"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editnameAr)]
                      ]),
                      createVNode("label", { for: "editnameAr" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "الاسم بالعربي" : "Arabic Name"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editnameEn) ? editnameEn.value = $event : editnameEn = $event,
                        id: "editnameEn",
                        type: "text",
                        required: "",
                        autocomplete: "off",
                        placeholder: _ctx.$i18n.locale === "ar" ? "الاسم بالانجليزي" : "English Name"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editnameEn)]
                      ]),
                      createVNode("label", { for: "editnameEn" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "الاسم بالانجليزي" : "English Name"), 1)
                    ]),
                    createVNode("div", { class: "d-flex flex-column-reverse mb-3" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(editPrice) ? editPrice.value = $event : editPrice = $event,
                        id: "price",
                        type: "number",
                        required: "",
                        maxlength: "6",
                        min: "0",
                        placeholder: _ctx.$i18n.locale === "ar" ? "السعر" : "Price"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(editPrice)]
                      ]),
                      createVNode("label", { for: "price" }, toDisplayString(_ctx.$i18n.locale === "ar" ? "السعر" : "Price"), 1)
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
                    onClick: editLocation,
                    autofocus: ""
                  }, toDisplayString(_ctx.$t("Edit")), 1)
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
            _push2(`<h4 data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "تأكيد الحذف" : "Confirm Delete")}</h4>`);
          } else {
            return [
              createVNode("h4", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "تأكيد الحذف" : "Confirm Delete"), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "هل أنت متأكد من أنك تريد حذف" : "Are You Sure You Want To Delete")} &quot;${ssrInterpolate(unref(deleteRegion).name)}&quot;${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "؟" : "?")}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(_ctx.$i18n.locale === "ar" ? "هل أنت متأكد من أنك تريد حذف" : "Are You Sure You Want To Delete") + ' "' + toDisplayString(unref(deleteRegion).name) + '"' + toDisplayString(_ctx.$i18n.locale === "ar" ? "؟" : "?"), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-secondary" data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$t("Close"))}</button><button class="btn btn-danger" data-v-db92e89b${_scopeId}>${ssrInterpolate(_ctx.$t("Delete"))}</button>`);
          } else {
            return [
              createVNode("button", {
                class: "btn btn-secondary",
                onClick: ($event) => isRef(deleteModal) ? deleteModal.value = false : deleteModal = false
              }, toDisplayString(_ctx.$t("Close")), 9, ["onClick"]),
              createVNode("button", {
                class: "btn btn-danger",
                onClick: ($event) => DeleteLocation()
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Locations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Locations = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db92e89b"]]);
export {
  Locations as default
};
//# sourceMappingURL=Locations-cQSF5544.js.map
