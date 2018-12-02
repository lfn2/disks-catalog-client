// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import axios from 'axios';
import store from './store';

axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.use(Vuetify, {
  theme: {
    "primary": colors.cyan.darken1,
    "secondary": colors.pink.base,
    "accent": colors.yellow.base,
  }
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
