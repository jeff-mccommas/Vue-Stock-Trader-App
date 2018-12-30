import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import '../node_modules/vue-material/dist/theme/prebuilt/default.scss';
import './assets/css/icons.css';
import './assets/css/materialize.min.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter);
Vue.use(VueResource);


{
  // GET /someUrl
  Vue.http.get('vuejs-stock-trader-c806f.firebaseio.com').then(response => {

    // get body data
    this.someData = response.body;

  }, response => {
    // error callback
  });
}



Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});


new Vue({
  el: '#app',
  mode: 'history',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
