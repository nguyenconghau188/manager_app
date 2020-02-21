(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/pages/Login.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils */ "./resources/assets/js/admin/shared/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: 'Login',
  data: function data() {
    return {
      email: '',
      emailError: '',
      emailState: true,
      password: '',
      passwordError: '',
      passwordState: true,
      isSubmited: false,
      componentKey: 0
    };
  },
  created: function created() {
    this.forceLogout();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    loginIssue: 'user/getLoginIssue',
    isLogin: 'user/getIsLogin'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['login', 'forceLogout']), {
    handleSubmit: function handleSubmit() {
      var _this = this;

      this.isSubmited = true;

      if (this.validateForm()) {
        this.isSubmited = false;
        var email = this.email,
            password = this.password;
        this.login({
          email: email,
          password: password
        }).then(function () {
          if (_this.isLogin) {
            _this.$router.push('/');
          } else {
            _this.password = '';

            _this.makeToast(_this.loginIssue, 'danger');

            _this.forceRerender();
          }
        });
      }
    },
    makeToast: function makeToast(message) {
      var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      console.log('toast');
      this.$bvToast.toast(message, {
        title: 'Login Fail',
        variant: variant,
        solid: true
      });
    },
    forceRerender: function forceRerender() {
      this.componentKey += 1;
    },
    validateForm: function validateForm() {
      var result = true;

      if (this.password === '') {
        result = false;
        this.passwordState = false;
        this.passwordError = 'Please enter password!';
      } else if (this.password.length < 6) {
        result = false;
        this.passwordState = false;
        this.passwordError = 'Password has least 6 charactors!';
      } else {
        this.passwordState = true;
        this.passwordError = '';
      }

      if (this.email === '') {
        result = false;
        this.emailState = false;
        this.emailError = 'Please enter email!';
      } else if (!Object(_shared_utils__WEBPACK_IMPORTED_MODULE_1__["validateEmail"])(this.email)) {
        result = false;
        this.emailState = false;
        this.emailError = 'Wrong format email!';
      } else {
        this.emailState = true;
        this.emailError = '';
      }

      return result;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/pages/Login.vue?vue&type=template&id=46474d9b&%3Akey=componentKey&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/pages/Login.vue?vue&type=template&id=46474d9b&%3Akey=componentKey& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "app flex-row align-items-center" }, [
    _c(
      "div",
      { staticClass: "container" },
      [
        _c(
          "b-row",
          { staticClass: "justify-content-center" },
          [
            _c(
              "b-col",
              { attrs: { md: "8" } },
              [
                _c(
                  "b-card-group",
                  [
                    _c(
                      "b-card",
                      { staticClass: "p-4", attrs: { "no-body": "" } },
                      [
                        _c(
                          "b-card-body",
                          [
                            _c(
                              "b-form",
                              {
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.handleSubmit($event)
                                  }
                                }
                              },
                              [
                                _c("h1", [_vm._v("Login")]),
                                _vm._v(" "),
                                _c("p", { staticClass: "text-muted" }, [
                                  _vm._v("Sign In to your account")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-input-group",
                                  { staticClass: "mb-3" },
                                  [
                                    _c(
                                      "b-input-group-prepend",
                                      [
                                        _c("b-input-group-text", [
                                          _c("i", { staticClass: "icon-user" })
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("b-form-input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Email",
                                        autocomplete: "username email",
                                        state: _vm.emailState,
                                        "aria-describedby":
                                          "input-email-feedback"
                                      },
                                      model: {
                                        value: _vm.email,
                                        callback: function($$v) {
                                          _vm.email = $$v
                                        },
                                        expression: "email"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-invalid-feedback",
                                      { attrs: { id: "input-email-feedback" } },
                                      [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(_vm.emailError) +
                                            "\n                  "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-input-group",
                                  { staticClass: "mb-4" },
                                  [
                                    _c(
                                      "b-input-group-prepend",
                                      [
                                        _c("b-input-group-text", [
                                          _c("i", { staticClass: "icon-lock" })
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("b-form-input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        placeholder: "Password",
                                        autocomplete: "current-password",
                                        state: _vm.passwordState,
                                        "aria-describedby":
                                          "input-password-feedback"
                                      },
                                      model: {
                                        value: _vm.password,
                                        callback: function($$v) {
                                          _vm.password = $$v
                                        },
                                        expression: "password"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-invalid-feedback",
                                      {
                                        attrs: { id: "input-password-feedback" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(_vm.passwordError) +
                                            "\n                  "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-row",
                                  [
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "6" } },
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "px-4",
                                            attrs: {
                                              type: "submit",
                                              variant: "primary"
                                            }
                                          },
                                          [_vm._v("Login")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      {
                                        staticClass: "text-right",
                                        attrs: { cols: "6" }
                                      },
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            staticClass: "px-0",
                                            attrs: { variant: "link" }
                                          },
                                          [_vm._v("Forgot password?")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      {
                        staticClass:
                          "text-white bg-primary py-5 d-md-down-none",
                        staticStyle: { width: "44%" },
                        attrs: { "no-body": "" }
                      },
                      [
                        _c("b-card-body", { staticClass: "text-center" }, [
                          _c(
                            "div",
                            [
                              _c("h2", [_vm._v("Sign up")]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "active mt-3",
                                  attrs: { variant: "primary" }
                                },
                                [_vm._v("Register Now!")]
                              )
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/admin/shared/utils.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/admin/shared/utils.js ***!
  \***************************************************/
/*! exports provided: random, validateEmail, shuffleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} // function validate email

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */

var shuffleArray = function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

/***/ }),

/***/ "./resources/assets/js/admin/views/pages/Login.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/admin/views/pages/Login.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_46474d9b_3Akey_componentKey___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=46474d9b&%3Akey=componentKey& */ "./resources/assets/js/admin/views/pages/Login.vue?vue&type=template&id=46474d9b&%3Akey=componentKey&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_46474d9b_3Akey_componentKey___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_46474d9b_3Akey_componentKey___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/pages/Login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/admin/views/pages/Login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/pages/Login.vue?vue&type=template&id=46474d9b&%3Akey=componentKey&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/pages/Login.vue?vue&type=template&id=46474d9b&%3Akey=componentKey& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46474d9b_3Akey_componentKey___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=46474d9b&%3Akey=componentKey& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/pages/Login.vue?vue&type=template&id=46474d9b&%3Akey=componentKey&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46474d9b_3Akey_componentKey___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46474d9b_3Akey_componentKey___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);