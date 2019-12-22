import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MenuAndBar from '../components/MenuAndBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home, 
      menuAndBar: MenuAndBar
    }
  },
  {
    path: '/account',
    name: 'account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/Account.vue'),
      menuAndBar: MenuAndBar
    }
  },
  {
    path: '/labeling',
    name: 'labelingPopup',
    component: () => import('../views/LabelingPopup.vue')
  }
]

const router = new VueRouter({
  routes
})





export default router
