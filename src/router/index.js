import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/leaks',
    name: 'leaks',
    component: () => import('@/views/leaks/Leaks.vue'),
    meta: {
      title: 'Vazamentos'
    }
  },
  {
    path: '/companyForm',
    name: 'companyForm',
    component: () => import('@/views/companyForm/CompanyForm.vue'),
    meta: {
      title: 'Exerça seu direito',
      goBack: true,
      hideTabsNavigator: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
