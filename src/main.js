import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import '../node_modules/vue-material/dist/theme/prebuilt/default.scss';
import './assets/css/icons.css';
import './assets/css/materialize.min.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
// Vue.http.options.root = 'https://vuejs-stock-trader.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')