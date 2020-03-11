require('../bootstrap');
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios';

// todo
// cssVars()
/* eslint-disable no-new */
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer '+token;
}
