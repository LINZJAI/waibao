import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import patientLayout from '@/layout/patient.vue'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/data-1',
        component: () => import('@/views/data/data-1')
      },
      {
        path: '/data-2',
        component: () => import('@/views/data/data-2')
      },
      {
        path: '/data-3',
        component: () => import('@/views/data/data-3')
      },
      {
        path: '/data-4',
        component: () => import('@/views/data/data-4')
      },
      {
        path: '/data-5',
        component: () => import('@/views/data/data-5')
      },
      {
        path: '/data-6',
        component: () => import('@/views/data/data-6')
      },
      {
        path: '/data-7',
        component: () => import('@/views/data/data-7')
      },
      {
        path: '/data-8',
        component: () => import('@/views/data/data-8')
      },
      {
        path: '/data-9',
        component: () => import('@/views/data/data-9')
      },
      {
        path: '/data-10',
        component: () => import('@/views/data/data-10')
      },
      {
        path: '/data-11',
        component: () => import('@/views/data/data-11')
      },
      {
        path: '/data-12',
        component: () => import('@/views/data/data-12')
      },
      {
        path: '/data-13',
        component: () => import('@/views/data/data-13')
      },
      {
        path: '/data-14',
        component: () => import('@/views/data/data-14')
      }
    ]
  },
  {
    path: '/patient',
    redirect: '/patient/detail',
    component: patientLayout,
    children: [
      // {
      //   path: '/patient/detail',
      //   component: () => import('@/views/patient/detail')
      // },
      // {
      //   path: '/patient/document',
      //   component: () => import('@/views/patient/document')
      // },
      // {
      //   path: '/patient/check',
      //   component: () => import('@/views/patient/check')
      // },
      // {
      //   path: '/patient/follow',
      //   component: () => import('@/views/patient/follow')
      // },
      // {
      //   path: '/patient/warn',
      //   component: () => import('@/views/patient/warn')
      // },
    ]
  },

  {
    path: '/demo',
    component: () => import('@/views/demo')
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
