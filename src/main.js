// import './firebase'
import Vue from 'vue';
import VueFire from 'vuefire';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
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
Vue.use(VueAxios, axios);
axios.get('https://vuejs-stock-trader-c806f.firebaseio.com/.json', {
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
}).then((response) => {
  console.log(response.data)
})



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