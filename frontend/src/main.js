import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {ObserveVisibility} from 'vue-observe-visibility';

Vue.config.productionTip = false
Vue.directive('observe-visibility', ObserveVisibility);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

