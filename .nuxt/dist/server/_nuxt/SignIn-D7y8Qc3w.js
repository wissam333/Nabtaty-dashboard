import { ref, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { i as publicAssetsURL, _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
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
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
const _imports_0 = publicAssetsURL("/photos/g.png");
const _imports_1 = publicAssetsURL("/photos/tabLogo.png");
const _sfc_main = {
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["sign gradient-form", _ctx.$i18n.locale === "ar" ? "bodyAR" : ""]
      }, _attrs))} data-v-0d5bc6fd><div class="container" data-v-0d5bc6fd><div class="row d-flex justify-content-center align-items-center h-100" data-v-0d5bc6fd><div class="col-xl-10" data-v-0d5bc6fd><div class="card rounded-3 text-black" data-v-0d5bc6fd><div class="row g-0" data-v-0d5bc6fd><div class="col-lg-6" data-v-0d5bc6fd><div class="card-body p-md-5 mx-md-4" data-v-0d5bc6fd><div class="text-center" data-v-0d5bc6fd><div class="d-flex mb-4 justify-content-center" data-v-0d5bc6fd><img${ssrRenderAttr("src", _imports_0)} alt="" class="logo" loading="lazy" data-v-0d5bc6fd><div class="d-flex flex-column" data-v-0d5bc6fd></div></div><h4 class="title mt-1 mb-5 pb-1" data-v-0d5bc6fd>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "نحن فريق نبتتي 🌱" : "We are The Nabtaty Team 🌱")}</h4></div><form data-v-0d5bc6fd><div class="d-flex flex-column-reverse mb-3" data-v-0d5bc6fd><input${ssrRenderAttr("value", unref(username))} id="username" type="text" required maxlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "اكتب اسم المستخدم الخاص بك" : "Type your username"
      )} data-v-0d5bc6fd><label for="username" data-v-0d5bc6fd>${ssrInterpolate(_ctx.$i18n.locale == "ar" ? "اسم المستخدم" : "Username")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-0d5bc6fd><input${ssrRenderAttr("value", unref(password))} id="password" type="password" required maxlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "اكتب كلمة المرور الخاصة بك" : "Type your password"
      )} minlength="6" data-v-0d5bc6fd><label for="username" data-v-0d5bc6fd>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "كلمة السر" : "Password")}</label></div><div class="text-center pt-1 mb-1 pb-1" data-v-0d5bc6fd><div class="login" data-v-0d5bc6fd><input type="submit" class="basic"${ssrRenderAttr(
        "value",
        _ctx.$i18n.locale === "ar" ? "تسجيل الدخول" : "Log In"
      )} data-v-0d5bc6fd></div></div></form></div></div><div class="text-box col-lg-6 d-flex align-items-center gradient-custom-2" data-v-0d5bc6fd><div class="text-white box px-3 py-4 p-md-5 mx-md-4" data-v-0d5bc6fd><img${ssrRenderAttr("src", _imports_1)} alt="" loading="lazy" data-v-0d5bc6fd><h4 class="mb-4" data-v-0d5bc6fd>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "نحن أكثر من مجرد متجر!" : "We’re more than just a store!")}</h4><p class="small mb-0" data-v-0d5bc6fd>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "انضم إلينا في العالم الساحر للتسوق عبر الإنترنت واكتشف طريقة جديدة للعثور على الخضروات المفضلة لديك. مرحبًا بكم في نبتي، حيث تجتمع الراحة مع متعة رعاية الطبيعة! زراعة سعيدة!" : "Join us in the enchanting world of online plant shopping and uncover a fresh approach to finding your favorite greens. Welcome to Nabtty, where convenience meets the joy of nurturing nature! Happy planting!")}</p></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SignIn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SignIn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d5bc6fd"]]);
export {
  SignIn as default
};
//# sourceMappingURL=SignIn-D7y8Qc3w.js.map
