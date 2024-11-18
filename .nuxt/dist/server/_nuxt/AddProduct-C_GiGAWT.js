import { _ as __nuxt_component_0 } from "./nuxt-link-Ngxiwv0S.js";
import { _ as _sfc_main$1 } from "./icon-jIl0hTBH.js";
import { _ as _export_sfc, u as useI18n, b as useRuntimeConfig } from "../server.mjs";
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, createVNode, openBlock, createBlock, useSSRContext, watchEffect } from "vue";
import { u as useFetch } from "./fetch-C1NEePYn.js";
import { u as useSidebar } from "./useState-C2nWW8Qs.js";
import { s as script$1, a as script$2 } from "./index-keOXzVG2.js";
import { s as script } from "./index-Cq7zPice.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
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
import "@primeuix/utils/zindex";
import "./index-CSqrJwZf.js";
import "@primeuix/utils/uuid";
const _sfc_main = {
  __name: "AddProduct",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { api, apiBase }
    } = useRuntimeConfig();
    const { locale } = useI18n();
    const src = ref(null);
    const srcFile = ref(null);
    function onFileSelect(event) {
      const file = event.files[0];
      srcFile.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    const src1File = ref(null);
    const src1 = ref(null);
    function onFileSelect1(event) {
      const file = event.files[0];
      src1File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src1.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    const src2File = ref(null);
    const src2 = ref(null);
    function onFileSelect2(event) {
      const file = event.files[0];
      src2File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src2.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    const src3File = ref(null);
    const src3 = ref(null);
    function onFileSelect3(event) {
      const file = event.files[0];
      src3File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src3.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    const src4File = ref(null);
    const src4 = ref(null);
    function onFileSelect4(event) {
      const file = event.files[0];
      src4File.value = file;
      const reader = new FileReader();
      reader.onload = async (e) => {
        src4.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    let descAr = ref();
    let descEn = ref();
    let titleAr = ref();
    let titleEn = ref();
    let price = ref();
    let waterAr = ref();
    let waterEn = ref();
    let lightAr = ref();
    let lightEn = ref();
    let temperaturesAr = ref();
    let temperaturesEn = ref();
    let mediumAr = ref();
    let mediumEn = ref();
    let partAr = ref();
    let partEn = ref();
    let newest = ref(false);
    let recommended = ref(false);
    let selectedCat = ref();
    ref();
    ref();
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
          "$Rx4N9r7j99"
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
          "$Vkt9xysVnl"
        );
        watchEffect(() => {
        });
      }
    };
    getCats();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_font_awesome = _sfc_main$1;
      const _component_FileUpload = script;
      const _component_Checkbox = script$1;
      const _component_Select = script$2;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: ["contain", ("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : ""]
      }, _attrs))} data-v-51286ff0><div class="title-container" data-v-51286ff0><div class="head-title" data-v-51286ff0><h4 class="header4" data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "إضافة نبات جديد" : "Add a new Plant")}</h4><p data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "كل النباتات موجودين" : "All Plants are listed")} `);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/ListProduct" }, {
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
      _push(`</p></div></div><main data-v-51286ff0><div class="form row gy-3" data-v-51286ff0><div class="col-sm-12 col-lg-8" data-v-51286ff0><div class="main-info box block-border" data-v-51286ff0><h5 data-v-51286ff0> 🌱 ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "معلومات عن النبات " : "Plant Information ")}</h5><div class="d-flex flex-column" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><input${ssrRenderAttr("value", unref(titleAr))} id="titleAr" type="text" autocomplete="off"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "الاسم باللغة العربية" : "Name In Arabic"
      )} title="Enter only letters and spaces" required data-v-51286ff0><label for="titleAr" data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الاسم باللغة العربية" : "Name In Arabic")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="descAr" rows="5"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "الوصف باللغة العربية" : "Description In Arabic"
      )} data-v-51286ff0>${ssrInterpolate(unref(descAr))}</textarea><label for="descAr" data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الوصف باللغة العربية" : "Description In Arabic")}</label></div></div><div class="d-flex flex-column mt-5" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><input${ssrRenderAttr("value", unref(titleEn))} id="titleEn" type="text" autocomplete="off"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "الاسم باللغة الانجليزية" : "Name In English"
      )} required title="Enter only letters and spaces" data-v-51286ff0><label for="titleEn" data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الاسم باللغة الانجليزية" : "Name In English")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="descEn" rows="5"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "الوصف باللغة الانجليزية" : "Description In English"
      )} data-v-51286ff0>${ssrInterpolate(unref(descEn))}</textarea><label for="descEn" data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الوصف باللغة الانجليزية" : "Description In English")}</label></div></div><div class="d-flex flex-column mt-5" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="waterAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "الماء باللغة العربية" : "Water in Arabic"
      )} data-v-51286ff0>${ssrInterpolate(unref(waterAr))}</textarea><label for="waterAr" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "droplet"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الماء باللغة العربية" : "Water in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="waterEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "الماء باللغة الانجليزية" : "Water in English"
      )} data-v-51286ff0>${ssrInterpolate(unref(waterEn))}</textarea><label for="waterEn" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "droplet"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الماء باللغة الانجليزية" : "Water in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="temperaturesAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "الحرارة باللغة العربية" : "Temperatures in Arabic"
      )} data-v-51286ff0>${ssrInterpolate(unref(temperaturesAr))}</textarea><label for="temperaturesAr" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "temperature-high"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الحرارة باللغة العربية" : "Temperatures in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="temperaturesEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "الحرارة باللغة الانجليزية" : "Temperatures in English"
      )} data-v-51286ff0>${ssrInterpolate(unref(temperaturesEn))}</textarea><label for="temperaturesEn" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "temperature-high"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الحرارة باللغة الانجليزية" : "Temperatures in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="partAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "مشمس بشكل جزئي باللغة العربية" : "Part Sun in Arabic"
      )} data-v-51286ff0>${ssrInterpolate(unref(partAr))}</textarea><label for="partAr" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "cloud-sun"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "مشمس بشكل جزئي باللغة العربية" : "Part Sun in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="partEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "مشمس بشكل جزئي باللغة الانجليزية" : "Part Sun in English"
      )} data-v-51286ff0>${ssrInterpolate(unref(partEn))}</textarea><label for="partEn" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "cloud-sun"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "مشمس بشكل جزئي باللغة الانجليزية" : "Part Sun in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="mediumAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "متوسط باللغة العربية" : "Medium in Arabic"
      )} data-v-51286ff0>${ssrInterpolate(unref(mediumAr))}</textarea><label for="mediumAr" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "snowflake"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "متوسط باللغة العربية" : "Medium in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="mediumEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "متوسط باللغة الانجليزية" : "Medium in English"
      )} data-v-51286ff0>${ssrInterpolate(unref(mediumEn))}</textarea><label for="mediumEn" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "snowflake"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "متوسط باللغة الانجليزية" : "Medium in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="lightAr" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "الضوء باللغة العربية" : "Light in Arabic"
      )} data-v-51286ff0>${ssrInterpolate(unref(lightAr))}</textarea><label for="lightAr" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "sun"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الضوء باللغة العربية" : "Light in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><textarea id="lightEn" rows="2"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "الضوء باللغة الانجليزية" : "Light in English"
      )} data-v-51286ff0>${ssrInterpolate(unref(lightEn))}</textarea><label for="lightEn" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "sun"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الضوء باللغة الانجليزية" : "Light in English")}</label></div></div></div></div><div class="col-sm-12 col-lg-4" data-v-51286ff0><div class="second-info box block-border d-flex flex-column justify-content-between" data-v-51286ff0><div data-v-51286ff0><h5 data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الصورة الرئيسية" : "Main Image")}</h5><div class="drop-area my-4" data-v-51286ff0><div class="upload-box" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_FileUpload, {
        mode: "basic",
        onSelect: onFileSelect,
        customUpload: "",
        maxFileSize: 1e6,
        accept: "image/*",
        auto: "",
        class: "form-control p-button-outlined"
      }, null, _parent));
      if (unref(src)) {
        _push(`<img${ssrRenderAttr("src", unref(src))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-51286ff0>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src)) {
        _push(`<button class="btn btn-danger clear" data-v-51286ff0>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div data-v-51286ff0><h5 data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "صور الالبوم" : "Album Images")}</h5><div class="drop-area my-4" data-v-51286ff0><div class="upload-box" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_FileUpload, {
        mode: "basic",
        onSelect: onFileSelect1,
        customUpload: "",
        maxFileSize: 1e6,
        accept: "image/*",
        auto: "",
        class: "form-control p-button-outlined"
      }, null, _parent));
      if (unref(src1)) {
        _push(`<img${ssrRenderAttr("src", unref(src1))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-51286ff0>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src1)) {
        _push(`<button class="btn btn-danger clear" data-v-51286ff0>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="drop-area my-4" data-v-51286ff0><div class="upload-box" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_FileUpload, {
        mode: "basic",
        onSelect: onFileSelect2,
        customUpload: "",
        maxFileSize: 1e6,
        accept: "image/*",
        auto: "",
        class: "form-control p-button-outlined"
      }, null, _parent));
      if (unref(src2)) {
        _push(`<img${ssrRenderAttr("src", unref(src2))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-51286ff0>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src2)) {
        _push(`<button class="btn btn-danger clear" data-v-51286ff0>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="drop-area my-4" data-v-51286ff0><div class="upload-box" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_FileUpload, {
        mode: "basic",
        onSelect: onFileSelect3,
        customUpload: "",
        maxFileSize: 1e6,
        accept: "image/*",
        auto: "",
        class: "form-control p-button-outlined"
      }, null, _parent));
      if (unref(src3)) {
        _push(`<img${ssrRenderAttr("src", unref(src3))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-51286ff0>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src3)) {
        _push(`<button class="btn btn-danger clear" data-v-51286ff0>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="drop-area my-4" data-v-51286ff0><div class="upload-box" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_FileUpload, {
        mode: "basic",
        onSelect: onFileSelect4,
        customUpload: "",
        maxFileSize: 1e6,
        accept: "image/*",
        auto: "",
        class: "form-control p-button-outlined"
      }, null, _parent));
      if (unref(src4)) {
        _push(`<img${ssrRenderAttr("src", unref(src4))} alt="Image" class="shadow-md w-100 h-100 sm:w-64" data-v-51286ff0>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(src4)) {
        _push(`<button class="btn btn-danger clear" data-v-51286ff0>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          class: "xmark",
          icon: ["fas", "xmark"]
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="col-sm-12 col-lg-8" data-v-51286ff0><div class="uplod-image box block-border" data-v-51286ff0><h5 data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الخيارات" : "Options")}</h5><div class="row" data-v-51286ff0><div class="col-lg-3 checkbox" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_Checkbox, {
        modelValue: unref(newest),
        "onUpdate:modelValue": ($event) => isRef(newest) ? newest.value = $event : newest = $event,
        binary: ""
      }, null, _parent));
      _push(`<label for="ingredient1" class="mx-2 fw-bold" data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "جديد" : "New")}</label></div><div class="col-lg-3 checkbox" data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_Checkbox, {
        modelValue: unref(recommended),
        "onUpdate:modelValue": ($event) => isRef(recommended) ? recommended.value = $event : recommended = $event,
        binary: ""
      }, null, _parent));
      _push(`<label for="ingredient1" class="mx-2 fw-bold" data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "مقترح" : "Recommended")}</label></div></div></div></div><div class="col-sm-12 col-lg-4" data-v-51286ff0><div class="category-price box block-border" data-v-51286ff0><h5 data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "السعر" : "Price")}</h5><div class="d-flex flex-column" data-v-51286ff0><div class="d-flex flex-column-reverse mb-3" data-v-51286ff0><input${ssrRenderAttr("value", unref(price))} id="price" type="number" required maxlength="6" min="0"${ssrRenderAttr("placeholder", _ctx.$i18n.locale === "ar" ? "السعر" : "Price")} data-v-51286ff0><label for="price" data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "السعر" : "Price")}</label></div><h5 data-v-51286ff0>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "الرجاء تحديد الفئات" : "Please Select Categories")}</h5><div data-v-51286ff0>`);
      _push(ssrRenderComponent(_component_Select, {
        modelValue: unref(selectedCat),
        "onUpdate:modelValue": ($event) => isRef(selectedCat) ? selectedCat.value = $event : selectedCat = $event,
        options: unref(cats),
        placeholder: _ctx.$i18n.locale === "ar" ? "اختار فئة" : "Select A Category",
        class: "w-full md:w-56 select"
      }, {
        option: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "selectAr" : "", "d-flex align-items-center"])}" data-v-51286ff0${_scopeId}><div data-v-51286ff0${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? slotProps.option.category_name : slotProps.option.category_name)}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["d-flex align-items-center", _ctx.$i18n.locale === "ar" ? "selectAr" : ""]
              }, [
                createVNode("div", null, toDisplayString(_ctx.$i18n.locale === "ar" ? slotProps.option.category_name : slotProps.option.category_name), 1)
              ], 2)
            ];
          }
        }),
        value: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (slotProps.value) {
              _push2(`<div class="flex items-center" data-v-51286ff0${_scopeId}><div class="${ssrRenderClass([_ctx.$i18n.locale === "ar" ? "selectAr" : "", "d-flex align-items-center"])}" data-v-51286ff0${_scopeId}><div data-v-51286ff0${_scopeId}>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? slotProps.value.category_name : slotProps.value.category_name)}</div></div></div>`);
            } else {
              _push2(`<span data-v-51286ff0${_scopeId}>${ssrInterpolate(slotProps.placeholder)}</span>`);
            }
          } else {
            return [
              slotProps.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex items-center"
              }, [
                createVNode("div", {
                  class: ["d-flex align-items-center", _ctx.$i18n.locale === "ar" ? "selectAr" : ""]
                }, [
                  createVNode("div", null, toDisplayString(_ctx.$i18n.locale === "ar" ? slotProps.value.category_name : slotProps.value.category_name), 1)
                ], 2)
              ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-10 d-flex justify-content-end" data-v-51286ff0><input type="submit"${ssrRenderAttr(
        "value",
        _ctx.$i18n.locale === "ar" ? "نشر النبات" : " Publish Plant"
      )} class="btn btn-success text-white" data-v-51286ff0></div></div></div></div></div></div></main></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/AddProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddProduct = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-51286ff0"]]);
export {
  AddProduct as default
};
//# sourceMappingURL=AddProduct-C_GiGAWT.js.map
