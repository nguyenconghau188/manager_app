(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'progress-bars',
  data: function data() {
    return {
      counter: 45,
      max: 100,
      max2: 50,
      value: 33.333333333,
      value3: 75,
      bars: [{
        variant: 'success',
        value: 75
      }, {
        variant: 'info',
        value: 75
      }, {
        variant: 'warning',
        value: 75
      }, {
        variant: 'danger',
        value: 75
      }, {
        variant: 'primary',
        value: 75
      }, {
        variant: 'secondary',
        value: 75
      }, {
        variant: 'dark',
        value: 75
      }],
      timer: null,
      striped: true,
      animate: true,
      max3: 100,
      values: [15, 30, 20]
    };
  },
  methods: {
    clicked: function clicked() {
      this.counter = Math.random() * this.max;
      console.log('Change progress to ' + Math.round(this.counter * 100) / 100);
    },
    setClock: function setClock() {
      var _this = this;

      this.timer = setInterval(function () {
        _this.bars.forEach(function (bar) {
          bar.value = 25 + Math.random() * 75;
        });
      }, 2000);
    }
  },
  mounted: function mounted() {
    this.setClock();
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=template&id=565ee170&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=template&id=565ee170& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _c(
      "div",
      { staticClass: "animated fadeIn" },
      [
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Bootstrap Progress")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-header-actions" }, [
                _c(
                  "a",
                  {
                    staticClass: "card-header-action",
                    attrs: {
                      href:
                        "https://bootstrap-vue.js.org/docs/components/progress",
                      rel: "noreferrer noopener",
                      target: "_blank"
                    }
                  },
                  [_c("small", { staticClass: "text-muted" }, [_vm._v("docs")])]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("b-progress", {
                  attrs: {
                    value: _vm.counter,
                    max: _vm.max,
                    "show-progress": "",
                    animated: ""
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-progress",
                  {
                    staticClass: "mt-1",
                    attrs: { max: _vm.max, "show-value": "" }
                  },
                  [
                    _c("b-progress-bar", {
                      attrs: {
                        value: _vm.counter * (6 / 10),
                        variant: "success"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: {
                        value: _vm.counter * (2.5 / 10),
                        variant: "warning"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: {
                        value: _vm.counter * (1.5 / 10),
                        variant: "danger"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-btn",
                  { staticClass: "mt-4", on: { click: _vm.clicked } },
                  [_vm._v("Click me")]
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _vm._v(" "),
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("labels")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("No label")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: { value: _vm.value, max: _vm.max2 }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Value label")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: { value: _vm.value, max: _vm.max2, "show-value": "" }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Progress label")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: {
                    value: _vm.value,
                    max: _vm.max2,
                    "show-progress": ""
                  }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Value label with precision")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: {
                    value: _vm.value,
                    max: _vm.max2,
                    precision: 2,
                    "show-value": ""
                  }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Progress label with precision")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: {
                    value: _vm.value,
                    max: _vm.max2,
                    precision: 2,
                    "show-progress": ""
                  }
                })
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("width")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("Default width")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: { value: _vm.value3 }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Custom widths")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "w-75 mb-2",
                  attrs: { value: _vm.value3 }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "w-50 mb-2",
                  attrs: { value: _vm.value3 }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "w-25",
                  attrs: { value: _vm.value3 }
                })
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("height")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h6", [_vm._v("Default height")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: { value: _vm.value3, "show-progress": "" }
                }),
                _vm._v(" "),
                _c("h6", [_vm._v("Custom heights")]),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: {
                    height: "2rem",
                    value: _vm.value3,
                    "show-progress": ""
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: {
                    height: "20px",
                    value: _vm.value3,
                    "show-progress": ""
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  attrs: { height: "2px", value: _vm.value3 }
                })
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("variants")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              _vm._l(_vm.bars, function(bar, index) {
                return _c("div", { key: index, staticClass: "row mb-1" }, [
                  _c("div", { staticClass: "col-sm-2" }, [
                    _vm._v(_vm._s(bar.variant) + ":")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-10 pt-1" },
                    [
                      _c("b-progress", {
                        key: bar.variant,
                        attrs: { value: bar.value, variant: bar.variant }
                      })
                    ],
                    1
                  )
                ])
              }),
              0
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("striped")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: { value: 25, variant: "success", striped: _vm.striped }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: { value: 50, variant: "info", striped: _vm.striped }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: { value: 75, variant: "warning", striped: _vm.striped }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: { value: 100, variant: "danger", striped: _vm.striped }
                }),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { variant: "secondary" },
                    on: {
                      click: function($event) {
                        _vm.striped = !_vm.striped
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.striped ? "Remove" : "Add") +
                        " Striped\n        "
                    )
                  ]
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("animated")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: {
                    value: 25,
                    variant: "success",
                    striped: "",
                    animated: _vm.animate
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: {
                    value: 50,
                    variant: "info",
                    striped: "",
                    animated: _vm.animate
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-2",
                  attrs: {
                    value: 75,
                    variant: "warning",
                    striped: "",
                    animated: _vm.animate
                  }
                }),
                _vm._v(" "),
                _c("b-progress", {
                  staticClass: "mb-3",
                  attrs: {
                    value: 100,
                    variant: "danger",
                    animated: _vm.animate
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { variant: "secondary" },
                    on: {
                      click: function($event) {
                        _vm.animate = !_vm.animate
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.animate ? "Stop" : "Start") +
                        " Animation\n        "
                    )
                  ]
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-card",
          { attrs: { "header-tag": "header", "footer-tag": "footer" } },
          [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("i", { staticClass: "fa fa-align-justify" }),
              _c("strong", [_vm._v(" Progress ")]),
              _c("small", [_vm._v("multiple bars")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-progress",
                  { staticClass: "mb-3", attrs: { max: _vm.max3 } },
                  [
                    _c("b-progress-bar", {
                      attrs: { variant: "primary", value: _vm.values[0] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "success", value: _vm.values[1] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "info", value: _vm.values[2] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-progress",
                  {
                    staticClass: "mb-3",
                    attrs: { "show-progress": "", max: _vm.max3 }
                  },
                  [
                    _c("b-progress-bar", {
                      attrs: { variant: "primary", value: _vm.values[0] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "success", value: _vm.values[1] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "info", value: _vm.values[2] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-progress",
                  {
                    staticClass: "mb-3",
                    attrs: { "show-value": "", striped: "", max: _vm.max3 }
                  },
                  [
                    _c("b-progress-bar", {
                      attrs: { variant: "primary", value: _vm.values[0] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "success", value: _vm.values[1] }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: { variant: "info", value: _vm.values[2] }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-progress",
                  { staticClass: "mb-3", attrs: { max: _vm.max3 } },
                  [
                    _c("b-progress-bar", {
                      attrs: {
                        variant: "primary",
                        value: _vm.values[0],
                        "show-progress": ""
                      }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: {
                        variant: "success",
                        value: _vm.values[1],
                        animated: "",
                        "show-progress": ""
                      }
                    }),
                    _vm._v(" "),
                    _c("b-progress-bar", {
                      attrs: {
                        variant: "info",
                        value: _vm.values[2],
                        striped: "",
                        "show-progress": ""
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/admin/views/base/ProgressBars.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/admin/views/base/ProgressBars.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressBars_vue_vue_type_template_id_565ee170___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBars.vue?vue&type=template&id=565ee170& */ "./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=template&id=565ee170&");
/* harmony import */ var _ProgressBars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBars.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProgressBars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProgressBars_vue_vue_type_template_id_565ee170___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProgressBars_vue_vue_type_template_id_565ee170___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/base/ProgressBars.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBars.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBars_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=template&id=565ee170&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=template&id=565ee170& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBars_vue_vue_type_template_id_565ee170___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBars.vue?vue&type=template&id=565ee170& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/base/ProgressBars.vue?vue&type=template&id=565ee170&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBars_vue_vue_type_template_id_565ee170___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBars_vue_vue_type_template_id_565ee170___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);