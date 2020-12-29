import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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
        path: 'desktop',
        name: 'desktop',
        component: () => import('@/views/desktop/layout'),

        redirect: '/desktop/index',
        children: [
          {
            path: '/desktop/index',

            component: () => import('@/views/desktop/page/index')
          },
          {
            path: '/desktop/detail',
            component: () => import('@/views/desktop/page/detail')
          },
          {
            path: '/desktop/map',
            component: () => import('@/views/desktop/page/map')
          },
          {
            path: '/desktop/carTab',
            component: () => import('@/views/desktop/page/carTab')
          }
        ]
      },

      {
        path: '/patient',
        component: () => import('@/views/patient')
      },
      {
        path: '/patient/addForm',
        component: () => import('@/views/patient/addForm')
      },
      {
        path: '/patient/record',
        component: () => import('@/views/patient/record')
      },
      {
        path: '/message',
        component: () => import('@/views/message')
      },
      {
        path: '/consultation',
        component: () => import('@/views/consultation')
      },
      {
        path: '/consultation/detail',
        component: () => import('@/views/consultation/detail')
      },
      {
        path: '/pre-test',
        component: () => import('@/views/pre-test/index')
      },
      {
        path: '/pre-test/add',
        component: () => import('@/views/pre-test/add')
      },
      {
        path: '/pre-test/edit',
        component: () => import('@/views/pre-test/add')
      },
      {
        path: '/pre-test/report',
        component: () => import('@/views/pre-test/report')
      }
    ]
  },
  {
    path: '/demo',
    component: () => import('@/views/demo')
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
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
