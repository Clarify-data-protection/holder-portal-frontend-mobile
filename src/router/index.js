import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'requests'
  },
  {
    path: '/requests',
    name: 'requests',
    component: () => import('@/views/requests/Requests.vue'),
    meta: {
      title: 'Solicitações'
    }
  },

  {
    path: '/requests/info',
    name: 'requestInfo',
    component: () => import('@/views/requestInfo/RequestInfo.vue'),
    meta: {
      title: 'Informações',
      goBack: true,
      hideTabsNavigator: true
    }
  },

  {
    path: '/registrations',
    name: 'registrations',
    component: () => import('@/views/registrations/Registrations.vue'),
    meta: {
      title: 'Exerça seu direto'
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
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/faq/Faq.vue'),
    meta: {
      title: 'FAQ',
      goBack: true,
      hideTabsNavigator: true
    }
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('@/views/about/About.vue'),
    meta: {
      title: 'Sobre nós',
      goBack: true,
      hideTabsNavigator: true
    }
  }
  // {
  //   path: '/lgpd',
  //   name: 'lgpd',
  //   component: () => import('@/views/lgpd/Lgpd.vue'),
  //   meta: {
  //     title: 'LGPD',
  //     goBack: true,
  //     hideTabsNavigator: true
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
