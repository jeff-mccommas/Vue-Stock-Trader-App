// import './firebase'
import Vue from 'vue';
import VueFire from 'vuefire';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import '../node_modules/vue-material/dist/theme/prebuilt/default.scss';

import App from './App.vue';
import router from './routes';
import store from './store/store';
import './assets/css/icons.css';
import './assets/css/materialize.min.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter);
Vue.use(VueFire);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

new Vue({
  el: '#app',
  mode: 'history',
  router,
  store,
  render: h => h(App)
});
