(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/player/player"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\hunian-new\\pages\\player\\player.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/hunian-new/pages/player/player.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n\n\nvar self;\nvar musicplayer = uni.createInnerAudioContext();\nmusicplayer.autoplay = false;var _default =\n{\n  data: function data() {\n    self = this;\n    return {\n      status: 0,\n      music1: [\n      \"https://xiaoyibang.top/uploads/uploads/morning.mp3\",\n      \"https://xiaoyibang.top/uploads/uploads/focus.mp3\",\n      \"https://xiaoyibang.top/uploads/uploads/lunch.mp3\",\n      \"https://xiaoyibang.top/uploads/uploads/night.mp3\"],\n\n\n      muscicminute: [\n      \"05\",\n      \"07\",\n      \"07\",\n      \"08\"],\n\n\n\n      musicsecond: [\n      \"28\",\n      \"35\",\n      \"25\",\n      \"34\"],\n\n\n\n      musicname: [\n      \"晨起\",\n      \"专注\",\n      \"午休\",\n      \"晚眠\"],\n\n\n      musicduration: [\n      328,\n      455,\n      445,\n      514],\n\n      name: '',\n      minute: '',\n      second: '',\n      duration: 0 };\n\n  },\n  computed: _objectSpread({},\n  (0, _vuex.mapState)([\"index\", \"course\", \"music\", \"meditatetime\"])),\n\n\n  onShow: function onShow() {\n    // \t\t\tmusicplayer.src = this.music1[this.index];\n    // \t\t\t\n    // \t\t\tthis.minute=this.muscicminute[this.index];\n    // \t\t\tthis.second=this.musicsecond[this.index];\n    // \t\t\tthis.name=this.musicname[this.index];\n    // \t\t\tthis.duration=this.musicduration[this.index];\n    musicplayer.src = this.music.url;\n\n    this.minute = this.music.minute;\n    this.second = this.music.second;\n    this.name = this.music.name;\n    this.duration = this.music.time;\n  },\n  methods: _objectSpread({\n    back: function back() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    changestatus: function changestatus(provider) {\n      this.status = provider;\n      if (this.status == 1) {\n        musicplayer.play();\n\n        console.log('usetime:' + this.usetime);\n        var interval = setInterval(function () {\n\n          var time = self.duration - musicplayer.currentTime;\n          if (self.duration <= musicplayer.currentTime) {\n            self.status = 0;\n          }\n          if (self.status != 1) {\n            clearInterval(interval);\n          }\n\n          var minute1 = Math.floor(time / 60);\n\n          var second1 = Math.floor(time - minute1 * 60);\n          if (minute1 < 10) {\n            self.minute = '0' + String(minute1);\n          } else\n          {\n            self.minute = String(minute1);\n          }\n          if (minute1 <= 1) {\n            self.addcourse();\n          }\n          if (second1 < 10) {\n            self.second = '0' + String(second1);\n          } else\n          {\n            self.second = String(second1);\n          }\n\n          // \t\t\t\t\t\tself.minute='03';\n          // \t\t\t\t\t\tself.second=Math.floor(currenttime-self.minute*60);\n\n        }, 1000);\n      } else if (this.status == 2) {\n        musicplayer.pause();\n      } else if (this.status == 0) {\n        self.addmeditatetime(Math.floor(musicplayer.currentTime));\n        musicplayer.stop();\n\n      }\n    } },\n  (0, _vuex.mapMutations)([\"addcourse\", \"addmeditatetime\"])) };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js */ \"./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js\")[\"default\"]))\n\n//# sourceURL=uni-app:///pages/player/player.vue?vue&type=script&lang=js&?cdd7");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\hunian-new\\pages\\player\\player.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!F:/hunian-new/pages/player/player.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=F:/hunian-new/pages/player/player.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\hunian-new\\pages\\player\\player.vue?vue&type=template&id=7e9b28da&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/hunian-new/pages/player/player.vue?vue&type=template&id=7e9b28da& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"view\", { staticClass: \"container\" }, [\n    _c(\"image\", { attrs: { src: \"../../static/expect.jpg\" } }),\n    _vm.status != 1\n      ? _c(\n          \"view\",\n          {\n            staticClass: \"title\",\n            attrs: { eventid: \"b7572e56-0\" },\n            on: {\n              tap: function($event) {\n                _vm.back()\n              }\n            }\n          },\n          [\n            _c(\"image\", {\n              staticStyle: {\n                width: \"50%\",\n                height: \"50%\",\n                position: \"absolute\"\n              },\n              attrs: { src: \"/static/back.png\" }\n            })\n          ]\n        )\n      : _vm._e(),\n    _c(\"view\", { staticClass: \"lopp\" }),\n    _c(\"view\", { class: { daily_right: _vm.status == 1 } }, [\n      _c(\"view\", { staticClass: \"shake1\" }),\n      _c(\"view\", { staticClass: \"shake2\" }),\n      _c(\"view\", { staticClass: \" shake3\" })\n    ]),\n    _c(\"view\", { staticClass: \"medium\" }, [\n      _c(\"view\", [_vm._v(_vm._s(_vm.name))]),\n      _c(\"view\", { staticStyle: { \"margin-top\": \"20rpx\" } }, [\n        _vm._v(_vm._s(_vm.minute) + \":\" + _vm._s(_vm.second))\n      ])\n    ]),\n    _vm.status == 0\n      ? _c(\n          \"view\",\n          {\n            staticClass: \"cicle\",\n            attrs: { eventid: \"b7572e56-1\" },\n            on: {\n              tap: function($event) {\n                _vm.changestatus(1)\n              }\n            }\n          },\n          [\n            _c(\"view\", { staticClass: \"triangle\" }),\n            _c(\"view\", { staticClass: \"word\" }, [_vm._v(\"开始专注\")])\n          ]\n        )\n      : _vm._e(),\n    _vm.status == 1\n      ? _c(\n          \"view\",\n          {\n            staticClass: \"cicle1\",\n            attrs: { eventid: \"b7572e56-2\" },\n            on: {\n              tap: function($event) {\n                _vm.changestatus(2)\n              }\n            }\n          },\n          [_c(\"view\", { staticClass: \"word1\" }, [_vm._v(\"暂停\")])]\n        )\n      : _vm._e(),\n    _vm.status == 2\n      ? _c(\n          \"view\",\n          {\n            staticClass: \"cicle2\",\n            attrs: { eventid: \"b7572e56-3\" },\n            on: {\n              tap: function($event) {\n                _vm.changestatus(1)\n              }\n            }\n          },\n          [_c(\"view\", { staticClass: \"word2\" }, [_vm._v(\"继续\")])]\n        )\n      : _vm._e(),\n    _vm.status == 2\n      ? _c(\n          \"view\",\n          {\n            staticClass: \"cicle3\",\n            attrs: { eventid: \"b7572e56-4\" },\n            on: {\n              tap: function($event) {\n                _vm.changestatus(0)\n              }\n            }\n          },\n          [_c(\"view\", { staticClass: \"word3\" }, [_vm._v(\"放弃\")])]\n        )\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=F:/hunian-new/pages/player/player.vue?vue&type=template&id=7e9b28da&");

/***/ }),

/***/ "F:\\hunian-new\\main.js?{\"page\":\"pages%2Fplayer%2Fplayer\"}":
/*!****************************************************************!*\
  !*** F:/hunian-new/main.js?{"page":"pages%2Fplayer%2Fplayer"} ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"F:\\\\hunian-new\\\\pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _player = _interopRequireDefault(__webpack_require__(/*! ./pages/player/player.vue */ \"F:\\\\hunian-new\\\\pages\\\\player\\\\player.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_player.default));\n\n//# sourceURL=F:/hunian-new/main.js?%7B%22page%22:%22pages%252Fplayer%252Fplayer%22%7D");

/***/ }),

/***/ "F:\\hunian-new\\pages\\player\\player.vue":
/*!*********************************************!*\
  !*** F:/hunian-new/pages/player/player.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_vue_vue_type_template_id_7e9b28da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.vue?vue&type=template&id=7e9b28da& */ \"F:\\\\hunian-new\\\\pages\\\\player\\\\player.vue?vue&type=template&id=7e9b28da&\");\n/* harmony import */ var _player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.vue?vue&type=script&lang=js& */ \"F:\\\\hunian-new\\\\pages\\\\player\\\\player.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.vue?vue&type=style&index=0&lang=css& */ \"F:\\\\hunian-new\\\\pages\\\\player\\\\player.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _player_vue_vue_type_template_id_7e9b28da___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _player_vue_vue_type_template_id_7e9b28da___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"F:/hunian-new/pages/player/player.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=F:/hunian-new/pages/player/player.vue");

/***/ }),

/***/ "F:\\hunian-new\\pages\\player\\player.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** F:/hunian-new/pages/player/player.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./player.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\\\hunian-new\\\\pages\\\\player\\\\player.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///pages/player/player.vue?vue&type=script&lang=js&?5b2b");

/***/ }),

/***/ "F:\\hunian-new\\pages\\player\\player.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** F:/hunian-new/pages/player/player.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./player.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\\\hunian-new\\\\pages\\\\player\\\\player.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=F:/hunian-new/pages/player/player.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "F:\\hunian-new\\pages\\player\\player.vue?vue&type=template&id=7e9b28da&":
/*!****************************************************************************!*\
  !*** F:/hunian-new/pages/player/player.vue?vue&type=template&id=7e9b28da& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_template_id_7e9b28da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./player.vue?vue&type=template&id=7e9b28da& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\\\hunian-new\\\\pages\\\\player\\\\player.vue?vue&type=template&id=7e9b28da&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_template_id_7e9b28da___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_G_Hbuild_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_player_vue_vue_type_template_id_7e9b28da___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=F:/hunian-new/pages/player/player.vue?vue&type=template&id=7e9b28da&");

/***/ })

},[["F:\\hunian-new\\main.js?{\"page\":\"pages%2Fplayer%2Fplayer\"}","common/runtime","common/vendor"]]]);