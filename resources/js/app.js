// require('./bootstrap');
import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

// 讓瀏覽器的全域環境可以使用到 $
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import router from './routes';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import zhTWvalidate from 'vee-validate/dist/locale/zh_TW';
import VeeValidate from '../../public/helpers/vee-validate';

import Vuex from 'vuex';
import store from './vue/store/index';

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.component('Loading', Loading);

Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh-TW', zhTWvalidate);

axios.defaults.withCredentials = true;
Vue.config.productionTip = false;

window.Vue = require('vue');

const app = new Vue({
  el: '#app',
  router,
  store,
});

