/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router) {
    Vue.component('nova-twitter-timeline', __webpack_require__(2));

    Vue.filter('formatDate', function (value) {
        if (value) {
            return moment(String(value)).format('hh:mm A');
        }
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9bc2c0a", Component.options)
  } else {
    hotAPI.reload("data-v-b9bc2c0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['card'],

    data: function data() {
        return {
            tweets: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        Nova.request().get('/nova-vendor/nova-twitter-timeline/timeline').then(function (response) {
            _this.tweets = response.data;
        });
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("card", { staticClass: "h-auto" }, [
    _c(
      "div",
      { staticClass: "px-3 py-4" },
      [
        _c("div", { attrs: { align: "center" } }, [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                fill: "#00A3EA",
                height: "32",
                viewBox: "0 0 24 24"
              }
            },
            [
              _c("path", { attrs: { opacity: "0", d: "M0 0h32v32H0z" } }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "h1",
          {
            staticClass: "text-center text-sm text-80 uppercase mb-3",
            staticStyle: { "margin-top": "-4px" }
          },
          [_vm._v("Twitter Mentions Timeline")]
        ),
        _vm._v(" "),
        _vm._l(_vm.tweets, function(tweet) {
          return _c(
            "div",
            { staticClass: "max-w-sm rounded overflow-hidden" },
            [
              _c(
                "div",
                {
                  staticClass: "px-6 py-1",
                  staticStyle: { "border-bottom": "solid 1px #ccc" }
                },
                [
                  _c(
                    "a",
                    {
                      staticStyle: {
                        "font-size": "16px",
                        "text-decoration": "none",
                        color: "black"
                      },
                      attrs: {
                        target: "_blank",
                        href: "https://twitter.com/" + tweet.user.screen_name
                      }
                    },
                    [
                      _c("img", {
                        staticStyle: {
                          "margin-bottom": "-50px",
                          "border-radius": "50%"
                        },
                        attrs: {
                          src: tweet.user.profile_image_url_https,
                          width: "48"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticStyle: { "margin-left": "55px !important" } },
                    [
                      _c("div", [
                        _c(
                          "a",
                          {
                            staticStyle: {
                              "font-size": "16px",
                              "text-decoration": "none",
                              color: "black"
                            },
                            attrs: {
                              target: "_blank",
                              href:
                                "https://twitter.com/" + tweet.user.screen_name
                            }
                          },
                          [_vm._v(_vm._s(tweet.user.name))]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticStyle: {
                              color: "#7C8B97",
                              "font-size": "14px"
                            },
                            attrs: {
                              target: "_blank",
                              href:
                                "https://twitter.com/" + tweet.user.screen_name
                            }
                          },
                          [_vm._v("@" + _vm._s(tweet.user.screen_name) + " ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              "font-size": "12px",
                              "text-align": "right",
                              "margin-top": "-15px"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm._f("formatDate")(tweet.created_at))
                            )
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: {
                        "font-size": "16px",
                        "text-decoration": "none",
                        color: "black"
                      },
                      attrs: {
                        target: "_blank",
                        href:
                          "https://twitter.com/" +
                          tweet.user.screen_name +
                          "/status/" +
                          tweet.id_str
                      }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticStyle: {
                            "font-size": "14px",
                            color: "black",
                            "padding-left": "55px",
                            "margin-top": "10px",
                            "padding-bottom": "15px"
                          }
                        },
                        [
                          _vm._v(
                            "\n                           " +
                              _vm._s(tweet.text) +
                              "\n                       "
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b9bc2c0a", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);