import { _ as __nuxt_component_0, a as _sfc_main$1 } from './icon-DPyvNtFG.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, useSSRContext, openBlock, createElementBlock, resolveComponent, createElementVNode, renderSlot, normalizeClass, createBlock, createCommentVNode } from 'vue';
import { u as useSidebar } from './useState-CDjTBdWL.mjs';
import { equals, contains, isEmpty, toFlatCase, isFunction, isNotEmpty, getKeyValue, isString, isArray, resolve } from '@primeuix/utils/object';
import { Theme, ThemeService } from '@primeuix/styled';
import { findSingle } from '@primeuix/utils/dom';
import { B as BaseStyle, _ as _export_sfc } from './server.mjs';
import { uuid } from '@primeuix/utils/uuid';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import '@fortawesome/fontawesome-svg-core';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';

var Base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName: function setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName: function deleteLoadedStyleName(name) {
    this._loadedStyleNames["delete"](name);
  },
  clearLoadedStyleNames: function clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
function UniqueComponentId() {
  var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return uuid(prefix);
}
var BaseComponentStyle = BaseStyle.extend({
  name: "common"
});
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _toArray(r) {
  return _arrayWithHoles(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableRest();
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
    return Array.from(r);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r))
    return r;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script$5 = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      "default": void 0
    },
    ptOptions: {
      type: Object,
      "default": void 0
    },
    unstyled: {
      type: Boolean,
      "default": void 0
    },
    dt: {
      type: Object,
      "default": void 0
    }
  },
  inject: {
    $parentInstance: {
      "default": void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: true,
      handler: function handler(newValue) {
        if (!newValue) {
          this._loadCoreStyles();
          this._themeChangeListener(this._loadCoreStyles);
        }
      }
    },
    dt: {
      immediate: true,
      handler: function handler2(newValue) {
        var _this = this;
        if (newValue) {
          this._loadScopedThemeStyles(newValue);
          this._themeChangeListener(function() {
            return _this._loadScopedThemeStyles(newValue);
          });
        } else {
          this._unloadScopedThemeStyles();
        }
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  beforeCreate: function beforeCreate() {
    var _this$pt, _this$pt2, _this$pt3, _ref, _ref$onBeforeCreate, _this$$primevueConfig, _this$$primevue, _this$$primevue2, _this$$primevue3, _ref2, _ref2$onBeforeCreate;
    var _usept = (_this$pt = this.pt) === null || _this$pt === void 0 ? void 0 : _this$pt["_usept"];
    var originalValue = _usept ? (_this$pt2 = this.pt) === null || _this$pt2 === void 0 || (_this$pt2 = _this$pt2.originalValue) === null || _this$pt2 === void 0 ? void 0 : _this$pt2[this.$.type.name] : void 0;
    var value = _usept ? (_this$pt3 = this.pt) === null || _this$pt3 === void 0 || (_this$pt3 = _this$pt3.value) === null || _this$pt3 === void 0 ? void 0 : _this$pt3[this.$.type.name] : this.pt;
    (_ref = value || originalValue) === null || _ref === void 0 || (_ref = _ref.hooks) === null || _ref === void 0 || (_ref$onBeforeCreate = _ref["onBeforeCreate"]) === null || _ref$onBeforeCreate === void 0 || _ref$onBeforeCreate.call(_ref);
    var _useptInConfig = (_this$$primevueConfig = this.$primevueConfig) === null || _this$$primevueConfig === void 0 || (_this$$primevueConfig = _this$$primevueConfig.pt) === null || _this$$primevueConfig === void 0 ? void 0 : _this$$primevueConfig["_usept"];
    var originalValueInConfig = _useptInConfig ? (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.pt) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.originalValue : void 0;
    var valueInConfig = _useptInConfig ? (_this$$primevue2 = this.$primevue) === null || _this$$primevue2 === void 0 || (_this$$primevue2 = _this$$primevue2.config) === null || _this$$primevue2 === void 0 || (_this$$primevue2 = _this$$primevue2.pt) === null || _this$$primevue2 === void 0 ? void 0 : _this$$primevue2.value : (_this$$primevue3 = this.$primevue) === null || _this$$primevue3 === void 0 || (_this$$primevue3 = _this$$primevue3.config) === null || _this$$primevue3 === void 0 ? void 0 : _this$$primevue3.pt;
    (_ref2 = valueInConfig || originalValueInConfig) === null || _ref2 === void 0 || (_ref2 = _ref2[this.$.type.name]) === null || _ref2 === void 0 || (_ref2 = _ref2.hooks) === null || _ref2 === void 0 || (_ref2$onBeforeCreate = _ref2["onBeforeCreate"]) === null || _ref2$onBeforeCreate === void 0 || _ref2$onBeforeCreate.call(_ref2);
  },
  created: function created() {
    this._hook("onCreated");
  },
  beforeMount: function beforeMount() {
    this._loadStyles();
    this._hook("onBeforeMount");
  },
  mounted: function mounted() {
    this.rootEl = findSingle(this.$el, '[data-pc-name="'.concat(toFlatCase(this.$.type.name), '"]'));
    if (this.rootEl) {
      this.rootEl.setAttribute(this.$attrSelector, "");
      this.rootEl.$pc = _objectSpread$1({
        name: this.$.type.name
      }, this.$params);
    }
    this._hook("onMounted");
  },
  beforeUpdate: function beforeUpdate() {
    this._hook("onBeforeUpdate");
  },
  updated: function updated() {
    this._hook("onUpdated");
  },
  beforeUnmount: function beforeUnmount() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function unmounted() {
    this._unloadScopedThemeStyles();
    this._hook("onUnmounted");
  },
  methods: {
    _hook: function _hook(hookName) {
      if (!this.$options.hostName) {
        var selfHook = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(hookName));
        var defaultHook = this._useDefaultPT(this._getOptionValue, "hooks.".concat(hookName));
        selfHook === null || selfHook === void 0 || selfHook();
        defaultHook === null || defaultHook === void 0 || defaultHook();
      }
    },
    _mergeProps: function _mergeProps(fn) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return isFunction(fn) ? fn.apply(void 0, args) : mergeProps.apply(void 0, args);
    },
    _loadStyles: function _loadStyles() {
      var _this2 = this;
      var _load = function _load2() {
        if (!Base.isStyleNameLoaded("base")) {
          BaseStyle.loadCSS(_this2.$styleOptions);
          _this2._loadGlobalStyles();
          Base.setLoadedStyleName("base");
        }
        _this2._loadThemeStyles();
      };
      _load();
      this._themeChangeListener(_load);
    },
    _loadCoreStyles: function _loadCoreStyles() {
      var _this$$style, _this$$style2;
      if (!Base.isStyleNameLoaded((_this$$style = this.$style) === null || _this$$style === void 0 ? void 0 : _this$$style.name) && (_this$$style2 = this.$style) !== null && _this$$style2 !== void 0 && _this$$style2.name) {
        BaseComponentStyle.loadCSS(this.$styleOptions);
        this.$options.style && this.$style.loadCSS(this.$styleOptions);
        Base.setLoadedStyleName(this.$style.name);
      }
    },
    _loadGlobalStyles: function _loadGlobalStyles() {
      var globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      isNotEmpty(globalCSS) && BaseStyle.load(globalCSS, _objectSpread$1({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function _loadThemeStyles() {
      var _this$$style4, _this$$style5;
      if (this.isUnstyled)
        return;
      if (!Theme.isStyleNameLoaded("common")) {
        var _this$$style3, _this$$style3$getComm;
        var _ref3 = ((_this$$style3 = this.$style) === null || _this$$style3 === void 0 || (_this$$style3$getComm = _this$$style3.getCommonTheme) === null || _this$$style3$getComm === void 0 ? void 0 : _this$$style3$getComm.call(_this$$style3)) || {}, primitive = _ref3.primitive, semantic = _ref3.semantic;
        BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread$1({
          name: "primitive-variables"
        }, this.$styleOptions));
        BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread$1({
          name: "semantic-variables"
        }, this.$styleOptions));
        BaseStyle.loadTheme(_objectSpread$1({
          name: "global-style"
        }, this.$styleOptions));
        Theme.setLoadedStyleName("common");
      }
      if (!Theme.isStyleNameLoaded((_this$$style4 = this.$style) === null || _this$$style4 === void 0 ? void 0 : _this$$style4.name) && (_this$$style5 = this.$style) !== null && _this$$style5 !== void 0 && _this$$style5.name) {
        var _this$$style6, _this$$style6$getComp, _this$$style7, _this$$style8;
        var _ref4 = ((_this$$style6 = this.$style) === null || _this$$style6 === void 0 || (_this$$style6$getComp = _this$$style6.getComponentTheme) === null || _this$$style6$getComp === void 0 ? void 0 : _this$$style6$getComp.call(_this$$style6)) || {}, css2 = _ref4.css;
        (_this$$style7 = this.$style) === null || _this$$style7 === void 0 || _this$$style7.load(css2, _objectSpread$1({
          name: "".concat(this.$style.name, "-variables")
        }, this.$styleOptions));
        (_this$$style8 = this.$style) === null || _this$$style8 === void 0 || _this$$style8.loadTheme(_objectSpread$1({
          name: "".concat(this.$style.name, "-style")
        }, this.$styleOptions));
        Theme.setLoadedStyleName(this.$style.name);
      }
      if (!Theme.isStyleNameLoaded("layer-order")) {
        var _this$$style9, _this$$style9$getLaye;
        var layerOrder = (_this$$style9 = this.$style) === null || _this$$style9 === void 0 || (_this$$style9$getLaye = _this$$style9.getLayerOrderThemeCSS) === null || _this$$style9$getLaye === void 0 ? void 0 : _this$$style9$getLaye.call(_this$$style9);
        BaseStyle.load(layerOrder, _objectSpread$1({
          name: "layer-order",
          first: true
        }, this.$styleOptions));
        Theme.setLoadedStyleName("layer-order");
      }
    },
    _loadScopedThemeStyles: function _loadScopedThemeStyles(preset) {
      var _this$$style10, _this$$style10$getPre, _this$$style11;
      var _ref5 = ((_this$$style10 = this.$style) === null || _this$$style10 === void 0 || (_this$$style10$getPre = _this$$style10.getPresetTheme) === null || _this$$style10$getPre === void 0 ? void 0 : _this$$style10$getPre.call(_this$$style10, preset, "[".concat(this.$attrSelector, "]"))) || {}, css2 = _ref5.css;
      var scopedStyle = (_this$$style11 = this.$style) === null || _this$$style11 === void 0 ? void 0 : _this$$style11.load(css2, _objectSpread$1({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = scopedStyle.el;
    },
    _unloadScopedThemeStyles: function _unloadScopedThemeStyles() {
      var _this$scopedStyleEl;
      (_this$scopedStyleEl = this.scopedStyleEl) === null || _this$scopedStyleEl === void 0 || (_this$scopedStyleEl = _this$scopedStyleEl.value) === null || _this$scopedStyleEl === void 0 || _this$scopedStyleEl.remove();
    },
    _themeChangeListener: function _themeChangeListener() {
      var callback = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      Base.clearLoadedStyleNames();
      ThemeService.on("theme:change", callback);
    },
    _getHostInstance: function _getHostInstance(instance) {
      return instance ? this.$options.hostName ? instance.$.type.name === this.$options.hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
    },
    _getPropValue: function _getPropValue(name) {
      var _this$_getHostInstanc;
      return this[name] || ((_this$_getHostInstanc = this._getHostInstance(this)) === null || _this$_getHostInstanc === void 0 ? void 0 : _this$_getHostInstanc[name]);
    },
    _getOptionValue: function _getOptionValue(options) {
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return getKeyValue(options, key, params);
    },
    _getPTValue: function _getPTValue() {
      var _this$$primevueConfig2;
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var searchInDefaultPT = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      var searchOut = /./g.test(key) && !!params[key.split(".")[0]];
      var _ref6 = this._getPropValue("ptOptions") || ((_this$$primevueConfig2 = this.$primevueConfig) === null || _this$$primevueConfig2 === void 0 ? void 0 : _this$$primevueConfig2.ptOptions) || {}, _ref6$mergeSections = _ref6.mergeSections, mergeSections = _ref6$mergeSections === void 0 ? true : _ref6$mergeSections, _ref6$mergeProps = _ref6.mergeProps, useMergeProps = _ref6$mergeProps === void 0 ? false : _ref6$mergeProps;
      var global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
      var self = searchOut ? void 0 : this._getPTSelf(obj, this._getPTClassValue, key, _objectSpread$1(_objectSpread$1({}, params), {}, {
        global: global || {}
      }));
      var datasets = this._getPTDatasets(key);
      return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : _objectSpread$1(_objectSpread$1(_objectSpread$1({}, global), self), datasets) : _objectSpread$1(_objectSpread$1({}, self), datasets);
    },
    _getPTSelf: function _getPTSelf() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      return mergeProps(
        this._usePT.apply(this, [this._getPT(obj, this.$name)].concat(args)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(args))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function _getPTDatasets() {
      var _this$pt4, _this$pt5;
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var datasetPrefix = "data-pc-";
      var isExtended = key === "root" && isNotEmpty((_this$pt4 = this.pt) === null || _this$pt4 === void 0 ? void 0 : _this$pt4["data-pc-section"]);
      return key !== "transition" && _objectSpread$1(_objectSpread$1({}, key === "root" && _objectSpread$1(_defineProperty$1({}, "".concat(datasetPrefix, "name"), toFlatCase(isExtended ? (_this$pt5 = this.pt) === null || _this$pt5 === void 0 ? void 0 : _this$pt5["data-pc-section"] : this.$.type.name)), isExtended && _defineProperty$1({}, "".concat(datasetPrefix, "extend"), toFlatCase(this.$.type.name)))), {}, _defineProperty$1({}, "".concat(datasetPrefix, "section"), toFlatCase(key)));
    },
    _getPTClassValue: function _getPTClassValue() {
      var value = this._getOptionValue.apply(this, arguments);
      return isString(value) || isArray(value) ? {
        "class": value
      } : value;
    },
    _getPT: function _getPT(pt) {
      var _this3 = this;
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var callback = arguments.length > 2 ? arguments[2] : void 0;
      var getValue = function getValue2(value) {
        var _ref8;
        var checkSameKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var computedValue = callback ? callback(value) : value;
        var _key = toFlatCase(key);
        var _cKey = toFlatCase(_this3.$name);
        return (_ref8 = checkSameKey ? _key !== _cKey ? computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key] : void 0 : computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key]) !== null && _ref8 !== void 0 ? _ref8 : computedValue;
      };
      return pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept") ? {
        _usept: pt["_usept"],
        originalValue: getValue(pt.originalValue),
        value: getValue(pt.value)
      } : getValue(pt, true);
    },
    _usePT: function _usePT(pt, callback, key, params) {
      var fn = function fn2(value2) {
        return callback(value2, key, params);
      };
      if (pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept")) {
        var _this$$primevueConfig3;
        var _ref9 = pt["_usept"] || ((_this$$primevueConfig3 = this.$primevueConfig) === null || _this$$primevueConfig3 === void 0 ? void 0 : _this$$primevueConfig3.ptOptions) || {}, _ref9$mergeSections = _ref9.mergeSections, mergeSections = _ref9$mergeSections === void 0 ? true : _ref9$mergeSections, _ref9$mergeProps = _ref9.mergeProps, useMergeProps = _ref9$mergeProps === void 0 ? false : _ref9$mergeProps;
        var originalValue = fn(pt.originalValue);
        var value = fn(pt.value);
        if (originalValue === void 0 && value === void 0)
          return void 0;
        else if (isString(value))
          return value;
        else if (isString(originalValue))
          return originalValue;
        return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : _objectSpread$1(_objectSpread$1({}, originalValue), value) : value;
      }
      return fn(pt);
    },
    _useGlobalPT: function _useGlobalPT(callback, key, params) {
      return this._usePT(this.globalPT, callback, key, params);
    },
    _useDefaultPT: function _useDefaultPT(callback, key, params) {
      return this._usePT(this.defaultPT, callback, key, params);
    },
    ptm: function ptm() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, key, _objectSpread$1(_objectSpread$1({}, this.$params), params));
    },
    ptmi: function ptmi() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return mergeProps(this.$_attrsWithoutPT, this.ptm(key, params));
    },
    ptmo: function ptmo() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(obj, key, _objectSpread$1({
        instance: this
      }, params), false);
    },
    cx: function cx() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return !this.isUnstyled ? this._getOptionValue(this.$style.classes, key, _objectSpread$1(_objectSpread$1({}, this.$params), params)) : void 0;
    },
    sx: function sx() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (when) {
        var self = this._getOptionValue(this.$style.inlineStyles, key, _objectSpread$1(_objectSpread$1({}, this.$params), params));
        var base = this._getOptionValue(BaseComponentStyle.inlineStyles, key, _objectSpread$1(_objectSpread$1({}, this.$params), params));
        return [base, self];
      }
      return void 0;
    }
  },
  computed: {
    globalPT: function globalPT() {
      var _this$$primevueConfig4, _this4 = this;
      return this._getPT((_this$$primevueConfig4 = this.$primevueConfig) === null || _this$$primevueConfig4 === void 0 ? void 0 : _this$$primevueConfig4.pt, void 0, function(value) {
        return resolve(value, {
          instance: _this4
        });
      });
    },
    defaultPT: function defaultPT() {
      var _this$$primevueConfig5, _this5 = this;
      return this._getPT((_this$$primevueConfig5 = this.$primevueConfig) === null || _this$$primevueConfig5 === void 0 ? void 0 : _this$$primevueConfig5.pt, void 0, function(value) {
        return _this5._getOptionValue(value, _this5.$name, _objectSpread$1({}, _this5.$params)) || resolve(value, _objectSpread$1({}, _this5.$params));
      });
    },
    isUnstyled: function isUnstyled() {
      var _this$$primevueConfig6;
      return this.unstyled !== void 0 ? this.unstyled : (_this$$primevueConfig6 = this.$primevueConfig) === null || _this$$primevueConfig6 === void 0 ? void 0 : _this$$primevueConfig6.unstyled;
    },
    $theme: function $theme() {
      var _this$$primevueConfig7;
      return (_this$$primevueConfig7 = this.$primevueConfig) === null || _this$$primevueConfig7 === void 0 ? void 0 : _this$$primevueConfig7.theme;
    },
    $style: function $style() {
      return _objectSpread$1(_objectSpread$1({
        classes: void 0,
        inlineStyles: void 0,
        load: function load() {
        },
        loadCSS: function loadCSS() {
        },
        loadTheme: function loadTheme() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function $styleOptions() {
      var _this$$primevueConfig8;
      return {
        nonce: (_this$$primevueConfig8 = this.$primevueConfig) === null || _this$$primevueConfig8 === void 0 || (_this$$primevueConfig8 = _this$$primevueConfig8.csp) === null || _this$$primevueConfig8 === void 0 ? void 0 : _this$$primevueConfig8.nonce
      };
    },
    $primevueConfig: function $primevueConfig() {
      var _this$$primevue4;
      return (_this$$primevue4 = this.$primevue) === null || _this$$primevue4 === void 0 ? void 0 : _this$$primevue4.config;
    },
    $name: function $name() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function $params() {
      var parentInstance = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: parentInstance,
          props: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$props,
          state: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$data,
          attrs: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$attrs
        }
      };
    },
    $_attrsPT: function $_attrsPT() {
      return Object.entries(this.$attrs || {}).filter(function(_ref10) {
        var _ref11 = _slicedToArray(_ref10, 1), key = _ref11[0];
        return key === null || key === void 0 ? void 0 : key.startsWith("pt:");
      }).reduce(function(result, _ref12) {
        var _ref13 = _slicedToArray(_ref12, 2), key = _ref13[0], value = _ref13[1];
        var _key$split = key.split(":"), _key$split2 = _toArray(_key$split), rest = _key$split2.slice(1);
        rest === null || rest === void 0 || rest.reduce(function(currentObj, nestedKey, index, array) {
          !currentObj[nestedKey] && (currentObj[nestedKey] = index === array.length - 1 ? value : {});
          return currentObj[nestedKey];
        }, result);
        return result;
      }, {});
    },
    $_attrsWithoutPT: function $_attrsWithoutPT() {
      return Object.entries(this.$attrs || {}).filter(function(_ref14) {
        var _ref15 = _slicedToArray(_ref14, 1), key = _ref15[0];
        return !(key !== null && key !== void 0 && key.startsWith("pt:"));
      }).reduce(function(acc, _ref16) {
        var _ref17 = _slicedToArray(_ref16, 2), key = _ref17[0], value = _ref17[1];
        acc[key] = value;
        return acc;
      }, {});
    },
    $attrSelector: function $attrSelector() {
      return UniqueComponentId("pc");
    }
  }
};
var css = "\n.p-icon {\n    display: inline-block;\n    vertical-align: baseline;\n}\n\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n\n@-webkit-keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n@keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n";
var BaseIconStyle = BaseStyle.extend({
  name: "baseicon",
  css
});
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script$4 = {
  name: "BaseIcon",
  "extends": script$5,
  props: {
    label: {
      type: String,
      "default": void 0
    },
    spin: {
      type: Boolean,
      "default": false
    }
  },
  style: BaseIconStyle,
  provide: function provide() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function pti() {
      var isLabelEmpty = isEmpty(this.label);
      return _objectSpread(_objectSpread({}, !this.isUnstyled && {
        "class": ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: !isLabelEmpty ? "img" : void 0,
        "aria-label": !isLabelEmpty ? this.label : void 0,
        "aria-hidden": isLabelEmpty
      });
    }
  }
};
var script$3 = {
  name: "CheckIcon",
  "extends": script$4
};
var _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$2 = [_hoisted_1$2];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$2, 16);
}
script$3.render = render$2;
var script$2 = {
  name: "MinusIcon",
  "extends": script$4
};
var _hoisted_1$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$1 = [_hoisted_1$1];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$1, 16);
}
script$2.render = render$1;
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-checkbox {\n    position: relative;\n    display: inline-flex;\n    user-select: none;\n    vertical-align: bottom;\n    width: ".concat(dt("checkbox.width"), ";\n    height: ").concat(dt("checkbox.height"), ";\n}\n\n.p-checkbox-input {\n    cursor: pointer;\n    appearance: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    z-index: 1;\n    outline: 0 none;\n    border: 1px solid transparent;\n    border-radius: ").concat(dt("checkbox.border.radius"), ";\n}\n\n.p-checkbox-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: ").concat(dt("checkbox.border.radius"), ";\n    border: 1px solid ").concat(dt("checkbox.border.color"), ";\n    background: ").concat(dt("checkbox.background"), ";\n    width: ").concat(dt("checkbox.width"), ";\n    height: ").concat(dt("checkbox.height"), ";\n    transition: background ").concat(dt("checkbox.transition.duration"), ", color ").concat(dt("checkbox.transition.duration"), ", border-color ").concat(dt("checkbox.transition.duration"), ", box-shadow ").concat(dt("checkbox.transition.duration"), ", outline-color ").concat(dt("checkbox.transition.duration"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("checkbox.shadow"), ";\n}\n\n.p-checkbox-icon {\n    transition-duration: ").concat(dt("checkbox.transition.duration"), ";\n    color: ").concat(dt("checkbox.icon.color"), ";\n    font-size: ").concat(dt("checkbox.icon.size"), ";\n    width: ").concat(dt("checkbox.icon.size"), ";\n    height: ").concat(dt("checkbox.icon.size"), ";\n}\n\n.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.hover.border.color"), ";\n}\n\n.p-checkbox-checked .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.checked.border.color"), ";\n    background: ").concat(dt("checkbox.checked.background"), ";\n}\n\n.p-checkbox-checked .p-checkbox-icon {\n    color: ").concat(dt("checkbox.icon.checked.color"), ";\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n    background: ").concat(dt("checkbox.checked.hover.background"), ";\n    border-color: ").concat(dt("checkbox.checked.hover.border.color"), ";\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {\n    color: ").concat(dt("checkbox.icon.checked.hover.color"), ";\n}\n\n.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.focus.border.color"), ";\n    box-shadow: ").concat(dt("checkbox.focus.ring.shadow"), ";\n    outline: ").concat(dt("checkbox.focus.ring.width"), " ").concat(dt("checkbox.focus.ring.style"), " ").concat(dt("checkbox.focus.ring.color"), ";\n    outline-offset: ").concat(dt("checkbox.focus.ring.offset"), ";\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.checked.focus.border.color"), ";\n}\n\n.p-checkbox.p-invalid > .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.invalid.border.color"), ";\n}\n\n.p-checkbox.p-variant-filled .p-checkbox-box {\n    background: ").concat(dt("checkbox.filled.background"), ";\n}\n\n.p-checkbox-checked.p-variant-filled .p-checkbox-box {\n    background: ").concat(dt("checkbox.checked.background"), ";\n}\n\n.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n    background: ").concat(dt("checkbox.checked.hover.background"), ";\n}\n\n.p-checkbox.p-disabled {\n    opacity: 1;\n}\n\n.p-checkbox.p-disabled .p-checkbox-box {\n    background: ").concat(dt("checkbox.disabled.background"), ";\n    border-color: ").concat(dt("checkbox.checked.disabled.border.color"), ";\n}\n\n.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {\n    color: ").concat(dt("checkbox.icon.disabled.color"), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-checkbox p-component", {
      "p-checkbox-checked": instance.checked,
      "p-disabled": props.disabled,
      "p-invalid": props.invalid,
      "p-variant-filled": props.variant ? props.variant === "filled" : instance.$primevue.config.inputStyle === "filled" || instance.$primevue.config.inputVariant === "filled"
    }];
  },
  box: "p-checkbox-box",
  input: "p-checkbox-input",
  icon: "p-checkbox-icon"
};
var CheckboxStyle = BaseStyle.extend({
  name: "checkbox",
  theme,
  classes
});
var script$1 = {
  name: "BaseCheckbox",
  "extends": script$5,
  props: {
    value: null,
    modelValue: null,
    binary: Boolean,
    name: {
      type: String,
      "default": null
    },
    indeterminate: {
      type: Boolean,
      "default": false
    },
    trueValue: {
      type: null,
      "default": true
    },
    falseValue: {
      type: null,
      "default": false
    },
    variant: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    required: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": null
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: CheckboxStyle,
  provide: function provide2() {
    return {
      $pcCheckbox: this,
      $parentInstance: this
    };
  }
};
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r))
    return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
var script = {
  name: "Checkbox",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "change", "focus", "blur", "update:indeterminate"],
  data: function data() {
    return {
      d_indeterminate: this.indeterminate
    };
  },
  watch: {
    indeterminate: function indeterminate(newValue) {
      this.d_indeterminate = newValue;
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          checked: this.checked,
          indeterminate: this.d_indeterminate,
          disabled: this.disabled
        }
      });
    },
    onChange: function onChange(event) {
      var _this = this;
      if (!this.disabled && !this.readonly) {
        var newModelValue;
        if (this.binary) {
          newModelValue = this.d_indeterminate ? this.trueValue : this.checked ? this.falseValue : this.trueValue;
        } else {
          if (this.checked || this.d_indeterminate)
            newModelValue = this.modelValue.filter(function(val) {
              return !equals(val, _this.value);
            });
          else
            newModelValue = this.modelValue ? [].concat(_toConsumableArray(this.modelValue), [this.value]) : [this.value];
        }
        if (this.d_indeterminate) {
          this.d_indeterminate = false;
          this.$emit("update:indeterminate", this.d_indeterminate);
        }
        this.$emit("update:modelValue", newModelValue);
        this.$emit("change", event);
      }
    },
    onFocus: function onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.$emit("blur", event);
    }
  },
  computed: {
    checked: function checked() {
      return this.d_indeterminate ? false : this.binary ? this.modelValue === this.trueValue : contains(this.value, this.modelValue);
    }
  },
  components: {
    CheckIcon: script$3,
    MinusIcon: script$2
  }
};
var _hoisted_1 = ["data-p-checked", "data-p-indeterminate", "data-p-disabled"];
var _hoisted_2 = ["id", "value", "name", "checked", "tabindex", "disabled", "readonly", "required", "aria-labelledby", "aria-label", "aria-invalid", "aria-checked"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CheckIcon = resolveComponent("CheckIcon");
  var _component_MinusIcon = resolveComponent("MinusIcon");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, $options.getPTOptions("root"), {
    "data-p-checked": $options.checked,
    "data-p-indeterminate": $data.d_indeterminate || void 0,
    "data-p-disabled": _ctx.disabled
  }), [createElementVNode("input", mergeProps({
    id: _ctx.inputId,
    type: "checkbox",
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: _ctx.value,
    name: _ctx.name,
    checked: $options.checked,
    tabindex: _ctx.tabindex,
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    required: _ctx.required,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-invalid": _ctx.invalid || void 0,
    "aria-checked": $data.d_indeterminate ? "mixed" : void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onChange: _cache[2] || (_cache[2] = function() {
      return $options.onChange && $options.onChange.apply($options, arguments);
    })
  }, $options.getPTOptions("input")), null, 16, _hoisted_2), createElementVNode("div", mergeProps({
    "class": _ctx.cx("box")
  }, $options.getPTOptions("box")), [renderSlot(_ctx.$slots, "icon", {
    checked: $options.checked,
    indeterminate: $data.d_indeterminate,
    "class": normalizeClass(_ctx.cx("icon"))
  }, function() {
    return [$options.checked ? (openBlock(), createBlock(_component_CheckIcon, mergeProps({
      key: 0,
      "class": _ctx.cx("icon")
    }, $options.getPTOptions("icon")), null, 16, ["class"])) : $data.d_indeterminate ? (openBlock(), createBlock(_component_MinusIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("icon")
    }, $options.getPTOptions("icon")), null, 16, ["class"])) : createCommentVNode("", true)];
  })], 16)], 16, _hoisted_1);
}
script.render = render;
const _sfc_main = {
  __name: "AddProduct",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    ref();
    ref();
    ref();
    ref();
    let descAr = ref();
    let descEn = ref();
    let titleAr = ref();
    let titleEn = ref();
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_font_awesome = _sfc_main$1;
      const _component_Checkbox = script;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: ["contain", ("useSidebar" in _ctx ? _ctx.useSidebar : unref(useSidebar))().value ? "shrink" : ""]
      }, _attrs))} data-v-39e6929f><div class="title-container" data-v-39e6929f><div class="head-title" data-v-39e6929f><h4 class="header4" data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0625\u0636\u0627\u0641\u0629 \u0646\u0628\u0627\u062A \u062C\u062F\u064A\u062F" : "Add a new Plant")}</h4><p data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0643\u0644 \u0627\u0644\u0646\u0628\u0627\u062A\u0627\u062A \u0645\u0648\u062C\u0648\u062F\u064A\u0646" : "All Plants are listed")} `);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/ListProduct" }, {
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
      _push(`</p></div><div class="mt-2" data-v-39e6929f><input type="submit"${ssrRenderAttr("value", _ctx.$i18n.locale === "ar" ? "\u0646\u0634\u0631 \u0627\u0644\u0646\u0628\u0627\u062A" : " Publish Plant")} class="btn btn-success text-white" data-v-39e6929f></div></div><main data-v-39e6929f><div class="form row gy-3" data-v-39e6929f><div class="col-sm-12 col-lg-8" data-v-39e6929f><div class="main-info box block-border" data-v-39e6929f><h5 data-v-39e6929f> \u{1F331} ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0646 \u0627\u0644\u0646\u0628\u0627\u062A " : "Plant Information ")}</h5><div class="d-flex flex-column" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><input${ssrRenderAttr("value", unref(titleAr))} id="titleAr" type="text" required maxlength="30" autocomplete="off"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic"
      )} pattern="[A-Za-z\\s]+" title="Enter only letters and spaces" data-v-39e6929f><label for="titleAr" data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Name In Arabic")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="descAr" rows="5" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Description In Arabic"
      )} data-v-39e6929f>${ssrInterpolate(unref(descAr))}</textarea><label for="descAr" data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Description In Arabic")}</label></div></div><div class="d-flex flex-column mt-5" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><input${ssrRenderAttr("value", unref(titleEn))} id="titleEn" type="text" required maxlength="30" autocomplete="off"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English"
      )} pattern="[A-Za-z\\s]+" title="Enter only letters and spaces" data-v-39e6929f><label for="titleEn" data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Name In English")}</label></div><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="descEn" rows="5" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Description In English"
      )} data-v-39e6929f>${ssrInterpolate(unref(descEn))}</textarea><label for="descEn" data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Description In English")}</label></div></div><div class="d-flex flex-column mt-5" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="waterAr" rows="2" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0627\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Water in Arabic"
      )} data-v-39e6929f>${ssrInterpolate(unref(waterAr))}</textarea><label for="waterAr" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "droplet"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0627\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Water in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="waterEn" rows="2" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0627\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Water in English"
      )} data-v-39e6929f>${ssrInterpolate(unref(waterEn))}</textarea><label for="waterEn" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "droplet"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0645\u0627\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Water in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="temperaturesAr" rows="2" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Temperatures in Arabic"
      )} data-v-39e6929f>${ssrInterpolate(unref(temperaturesAr))}</textarea><label for="temperaturesAr" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "temperature-high"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Temperatures in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="temperaturesEn" rows="2" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Temperatures in English"
      )} data-v-39e6929f>${ssrInterpolate(unref(temperaturesEn))}</textarea><label for="temperaturesEn" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "temperature-high"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Temperatures in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="partAr" rows="2" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Part Sun in Arabic"
      )} data-v-39e6929f>${ssrInterpolate(unref(partAr))}</textarea><label for="partAr" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "cloud-sun"] }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Part Sun in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="partEn" rows="2" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Part Sun in English"
      )} data-v-39e6929f>${ssrInterpolate(unref(partEn))}</textarea><label for="partEn" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "cloud-sun"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0634\u0645\u0633 \u0628\u0634\u0643\u0644 \u062C\u0632\u0626\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Part Sun in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="mediumAr" rows="2" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0645\u062A\u0648\u0633\u0637 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Medium in Arabic"
      )} data-v-39e6929f>${ssrInterpolate(unref(mediumAr))}</textarea><label for="mediumAr" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "snowflake"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u062A\u0648\u0633\u0637 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Medium in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="mediumEn" rows="2" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0645\u062A\u0648\u0633\u0637 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Medium in English"
      )} data-v-39e6929f>${ssrInterpolate(unref(mediumEn))}</textarea><label for="mediumEn" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "snowflake"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u062A\u0648\u0633\u0637 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Medium in English")}</label></div></div><div class="d-flex flex-column mt-10" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="lightAr" rows="2" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0636\u0648\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Light in Arabic"
      )} data-v-39e6929f>${ssrInterpolate(unref(lightAr))}</textarea><label for="lightAr" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "sun"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0636\u0648\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "Light in Arabic")}</label></div></div><div class="d-flex flex-column" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><textarea id="lightEn" rows="2" required minlength="30"${ssrRenderAttr(
        "placeholder",
        _ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0636\u0648\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Light in English"
      )} data-v-39e6929f>${ssrInterpolate(unref(lightEn))}</textarea><label for="lightEn" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "sun"] }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0636\u0648\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629" : "Light in English")}</label></div></div></div></div><div class="col-sm-12 col-lg-4" data-v-39e6929f><div class="second-info box block-border d-flex flex-column justify-content-between" data-v-39e6929f><div data-v-39e6929f><h5 data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" : "Main Image")}</h5><div class="drop-area my-4" data-v-39e6929f>`);
      if (_ctx.previewImage == null) {
        _push(`<div class="upload-box" data-v-39e6929f><label for="upload-icon" class="upload-icon" data-v-39e6929f>`);
        _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "upload"] }, null, _parent));
        _push(`</label><input autocomplete="off" class="form-control" id="photo-upload" type="file" accept="image/*" style="${ssrRenderStyle({ "display": "none" })}" data-v-39e6929f></div>`);
      } else {
        _push(`<div data-v-39e6929f><i class="bi bi-x-circle-fill close-img" data-v-39e6929f></i></div>`);
      }
      if (_ctx.previewImage == null) {
        _push(`<img${ssrRenderAttr("src", _ctx.img)} alt="" data-v-39e6929f>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.previewImage)} alt="" data-v-39e6929f>`);
      }
      _push(`</div></div><div data-v-39e6929f><h5 data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0635\u0648\u0631 \u0627\u0644\u0627\u0644\u0628\u0648\u0645" : "Album Images")}</h5><div class="drop-area my-4" data-v-39e6929f>`);
      if (_ctx.previewImage == null) {
        _push(`<div class="upload-box" data-v-39e6929f><label for="upload-icon" class="upload-icon" data-v-39e6929f>`);
        _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "upload"] }, null, _parent));
        _push(`</label><input autocomplete="off" class="form-control" id="photo-upload" type="file" accept="image/*" style="${ssrRenderStyle({ "display": "none" })}" data-v-39e6929f></div>`);
      } else {
        _push(`<div data-v-39e6929f><i class="bi bi-x-circle-fill close-img" data-v-39e6929f></i></div>`);
      }
      if (_ctx.previewImage == null) {
        _push(`<img${ssrRenderAttr("src", _ctx.img)} alt="" data-v-39e6929f>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.previewImage)} alt="" data-v-39e6929f>`);
      }
      _push(`</div></div><div class="drop-area my-4" data-v-39e6929f>`);
      if (_ctx.previewImage == null) {
        _push(`<div class="upload-box" data-v-39e6929f><label for="upload-icon" class="upload-icon" data-v-39e6929f>`);
        _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "upload"] }, null, _parent));
        _push(`</label><input autocomplete="off" class="form-control" id="photo-upload" type="file" accept="image/*" style="${ssrRenderStyle({ "display": "none" })}" data-v-39e6929f></div>`);
      } else {
        _push(`<div data-v-39e6929f><i class="bi bi-x-circle-fill close-img" data-v-39e6929f></i></div>`);
      }
      if (_ctx.previewImage == null) {
        _push(`<img${ssrRenderAttr("src", _ctx.img)} alt="" data-v-39e6929f>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.previewImage)} alt="" data-v-39e6929f>`);
      }
      _push(`</div><div class="drop-area my-4" data-v-39e6929f>`);
      if (_ctx.previewImage == null) {
        _push(`<div class="upload-box" data-v-39e6929f><label for="upload-icon" class="upload-icon" data-v-39e6929f>`);
        _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "upload"] }, null, _parent));
        _push(`</label><input autocomplete="off" class="form-control" id="photo-upload" type="file" accept="image/*" style="${ssrRenderStyle({ "display": "none" })}" data-v-39e6929f></div>`);
      } else {
        _push(`<div data-v-39e6929f><i class="bi bi-x-circle-fill close-img" data-v-39e6929f></i></div>`);
      }
      if (_ctx.previewImage == null) {
        _push(`<img${ssrRenderAttr("src", _ctx.img)} alt="" data-v-39e6929f>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.previewImage)} alt="" data-v-39e6929f>`);
      }
      _push(`</div><div class="drop-area my-4" data-v-39e6929f>`);
      if (_ctx.previewImage == null) {
        _push(`<div class="upload-box" data-v-39e6929f><label for="upload-icon" class="upload-icon" data-v-39e6929f>`);
        _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "upload"] }, null, _parent));
        _push(`</label><input autocomplete="off" class="form-control" id="photo-upload" type="file" accept="image/*" style="${ssrRenderStyle({ "display": "none" })}" data-v-39e6929f></div>`);
      } else {
        _push(`<div data-v-39e6929f><i class="bi bi-x-circle-fill close-img" data-v-39e6929f></i></div>`);
      }
      if (_ctx.previewImage == null) {
        _push(`<img${ssrRenderAttr("src", _ctx.img)} alt="" data-v-39e6929f>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.previewImage)} alt="" data-v-39e6929f>`);
      }
      _push(`</div></div></div><div class="col-sm-12 col-lg-8" data-v-39e6929f><div class="uplod-image box block-border" data-v-39e6929f><h5 data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A" : "Options")}</h5><div class="row" data-v-39e6929f><div class="col-lg-3 checkbox" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_Checkbox, {
        modelValue: unref(newest),
        "onUpdate:modelValue": ($event) => isRef(newest) ? newest.value = $event : newest = $event,
        binary: ""
      }, null, _parent));
      _push(`<label for="ingredient1" class="mx-2 fw-bold" data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u062C\u062F\u064A\u062F" : "New")}</label></div><div class="col-lg-3 checkbox" data-v-39e6929f>`);
      _push(ssrRenderComponent(_component_Checkbox, {
        modelValue: unref(recommended),
        "onUpdate:modelValue": ($event) => isRef(recommended) ? recommended.value = $event : recommended = $event,
        binary: ""
      }, null, _parent));
      _push(`<label for="ingredient1" class="mx-2 fw-bold" data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0645\u0642\u062A\u0631\u062D" : "Recommended")}</label></div></div></div></div><div class="col-sm-12 col-lg-4" data-v-39e6929f><div class="category-price box block-border" data-v-39e6929f><h5 data-v-39e6929f>Category &amp; Price</h5><div class="d-flex flex-column" data-v-39e6929f><div class="d-flex flex-column-reverse mb-3" data-v-39e6929f><input${ssrRenderAttr("value", _ctx.price)} id="price" type="number" required maxlength="6" min="0" placeholder="Price" data-v-39e6929f><label for="price" data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0633\u0639\u0631" : "Price")}</label></div><p data-v-39e6929f>${ssrInterpolate(_ctx.$i18n.locale === "ar" ? "\u0627\u0644\u0631\u062C\u0627\u0621 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0641\u0626\u0627\u062A" : "Please Select Categories")}</p><div data-v-39e6929f></div></div></div></div></div></main></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/AddProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddProduct = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-39e6929f"]]);

export { AddProduct as default };
//# sourceMappingURL=AddProduct-CW_pKn32.mjs.map
