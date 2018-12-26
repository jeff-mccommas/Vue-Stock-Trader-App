import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import {
  MdButton,
  MdContent,
  MdTabs,
  MdLayout,
  MdMenu
} from '../node_modules/vue-material/dist/components'
import '../node_modules/vue-material/dist/vue-material.min.css'
// import '../node_modules/vue-material/dist/theme/default.css'
// import '../node_modules/vue-material/dist/theme/engine.scss'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdMenu)
Vue.use(MdLayout)


Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(App)
})