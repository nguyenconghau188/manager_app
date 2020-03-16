(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/users/User.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/users/User.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: 'User',
  props: {
    caption: {
      type: String,
      default: 'User id'
    }
  },
  data: function data() {
    return {
      fields: [{
        key: 'key'
      }, {
        key: 'value'
      }],
      user: {},
      show: true
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    users: 'user/getUsers',
    getUser: 'user/getUser',
    loadingIssue: 'user/getLoadingIssue'
  })),
  mounted: function mounted() {
    var _this = this;

    var id = this.$route.params.id;

    if (this.users.length !== 0) {
      this.user = this.users.find(function (user) {
        return user.uuid === id;
      });
    } else {
      this.getUserById(id).then(function (result) {
        console.log(_this.loadingIssue);

        if (_this.loadingIssue === '') {
          _this.user = _this.getUser;
        } else {
          console.log(_this);

          _this.makeToast(_this.loadingIssue, 'danger');

          _this.$router.push({
            path: '/users'
          });
        }
      });
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['getUserById']), {
    goBack: function goBack() {
      this.$router.go(-1); // this.$router.replace({path: '/users'})
    },
    onSubmit: function onSubmit() {},
    onReset: function onReset() {},
    makeToast: function makeToast(message) {
      var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      console.log('toast');
      this.$swal('Hello Vue world!!!'); // this.$bvToast.toast(message, {
      //   title: 'Login Fail',
      //   variant: variant,
      //   solid: true
      // });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/users/User.vue?vue&type=template&id=d83e0876&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/users/User.vue?vue&type=template&id=d83e0876& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12", lg: "6" } },
        [
          _c(
            "b-card",
            { attrs: { "no-header": "" } },
            [
              _c("template", { slot: "header" }, [
                _vm._v(
                  "\n          User uuid:  #" +
                    _vm._s(_vm.$route.params.id) +
                    "\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _vm.show
                    ? _c(
                        "b-form",
                        { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                id: "input-group-email",
                                label: "Email address:",
                                "label-for": "input-email"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "input-email",
                                  type: "email",
                                  required: "",
                                  placeholder: "Email"
                                },
                                model: {
                                  value: _vm.user.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "email", $$v)
                                  },
                                  expression: "user.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                id: "input-group-name",
                                label: "Name:",
                                "label-for": "input-name"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "input-name",
                                  required: "",
                                  placeholder: "Enter name"
                                },
                                model: {
                                  value: _vm.user.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "name", $$v)
                                  },
                                  expression: "user.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                id: "input-group-phone",
                                label: "Phone number:",
                                "label-for": "input-phone"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "input-phone",
                                  required: "",
                                  placeholder: "Phone number"
                                },
                                model: {
                                  value: _vm.user.phone_number,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "phone_number", $$v)
                                  },
                                  expression: "user.phone_number"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-group"),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { type: "submit", variant: "primary" } },
                            [_vm._v("Submit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { type: "reset", variant: "danger" } },
                            [_vm._v("Reset")]
                          ),
                          _vm._v(" "),
                          _c("b-button", { on: { click: _vm.goBack } }, [
                            _vm._v("Back")
                          ])
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/admin/views/users/User.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/admin/views/users/User.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_d83e0876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=d83e0876& */ "./resources/assets/js/admin/views/users/User.vue?vue&type=template&id=d83e0876&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/users/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_d83e0876___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_d83e0876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/users/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/users/User.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/admin/views/users/User.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/users/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/users/User.vue?vue&type=template&id=d83e0876&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/users/User.vue?vue&type=template&id=d83e0876& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_d83e0876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=d83e0876& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/users/User.vue?vue&type=template&id=d83e0876&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_d83e0876___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_d83e0876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);