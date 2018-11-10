import Vue from 'nativescript-vue'

import Home from './components/Home'
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
Vue.registerElement('CardView', () => require('nativescript-cardview').CardView)

new Vue({
  render: h => h('frame', [h(Home)])
}).$start()
