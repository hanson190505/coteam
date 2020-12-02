import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';
import {ifAxisCrossZero} from "echarts/src/coord/axisHelper";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children: [{
        path: '/dash',
        name: 'dash',
        component: () => import('@/views/dashboard/'),
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('@/views/order/orderlist.vue'),
        // component: () => import('@/views/order'),
      },
      {
        path: '/orders/:pk/',
        name: 'ordersDetail',
        component: () => import('@/views/order/orderdetail.vue'),
      },
      {
        path: '/suborders',
        name: 'suborders',
        component: () => import('@/views/order/suborderdetail.vue'),
      },
      {
        path: '/customers',
        name: 'customers',
        component: () => import('@/views/customers/customerlist.vue'),
      },
      {
        path: '/customer_addr',
        name: 'customer_addr',
        component: () => import('@/views/customerAddr'),
      },
      {
        path: '/order_model',
        name: 'order_model',
        component: () => import('@/views/orderModel'),
      },
      {
        path: '/purchases',
        name: 'purchases',
        component: () => import('@/views/purchase/purchase.vue'),
      },
      {
        path: '/purchasedetails',
        name: 'purchasedetails',
        component: () => import('@/views/purchase/purchaseDetail.vue'),
      },
      {
        path: '/shiporders',
        name: 'shiporders',
        component: () => import('@/views/ship/ship.vue'),
      },
      {
        path: '/shipdetails',
        name: 'shipdetails',
        component: () => import('@/views/ship/shipdetail.vue'),
      },
      {
        path: '/staffs',
        name: 'staffs',
        component: () => import('@/views/user/index.vue'),
      },
      {
        path: '/get_logs',
        name: 'get_logs',
        component: () => import('@/views/backendLogs/index.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('@/views/products/index.vue'),
      },
      {
        path: '/upload',
        name: 'upload',
        component: () => import('@/views/imageManage'),
      },
      {
        path: '/home_index',
        name: 'home_index',
        component: () => import('@/views/webapi'),
      },
      {
        path: '/packs',
        name: 'packs',
        component:() => import('@/views/packs'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/cms/',
  routes
})

router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数,代表放行
  if (to.path === '/login') {
    return next()
  }

  let tokenStr = store.getters.token
  let localToken = window.localStorage.getItem('token')
  if (!tokenStr && !localToken) {
    return next('/login')
  }
  return next()
})

export default router