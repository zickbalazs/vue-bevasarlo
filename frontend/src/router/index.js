import Vue from 'vue'
import VueRouter from 'vue-router'
import MainSite from '../components/MainSite.vue'
import EditSite from '../components/EditSite.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainSite
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditSite
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
