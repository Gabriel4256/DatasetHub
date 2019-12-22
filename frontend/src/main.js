import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {ObserveVisibility} from 'vue-observe-visibility';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false
Vue.directive('observe-visibility', ObserveVisibility);
 
Vue.use(VueScrollTo)
 
// You can also pass in the default options
// Vue.use(VueScrollTo, {
//      container: "body",
//      duration: 500,
//      easing: "ease",
//      offset: 0,
//      force: true,
//      cancelable: true,
//      onStart: false,
//      onDone: false,
//      onCancel: false,
//      x: false,
//      y: true
//  })
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

