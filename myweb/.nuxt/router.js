import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c8ef5fd = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _f1b381e0 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _74643a31 = () => interopDefault(import('../pages/custom.vue' /* webpackChunkName: "pages/custom" */))
const _ed54720c = () => interopDefault(import('../pages/factory.vue' /* webpackChunkName: "pages/factory" */))
const _55ee73d9 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _cbca6218 = () => interopDefault(import('../pages/powerbank/index.vue' /* webpackChunkName: "pages/powerbank/index" */))
const _5033e3e7 = () => interopDefault(import('../pages/professional.vue' /* webpackChunkName: "pages/professional" */))
const _df614c12 = () => interopDefault(import('../pages/usb/index.vue' /* webpackChunkName: "pages/usb/index" */))
const _cf900348 = () => interopDefault(import('../pages/powerbank/_id.vue' /* webpackChunkName: "pages/powerbank/_id" */))
const _7d096e1f = () => interopDefault(import('../pages/usb/_id.vue' /* webpackChunkName: "pages/usb/_id" */))
const _e7725e7c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6c8ef5fd,
    name: "about"
  }, {
    path: "/contact",
    component: _f1b381e0,
    name: "contact"
  }, {
    path: "/custom",
    component: _74643a31,
    name: "custom"
  }, {
    path: "/factory",
    component: _ed54720c,
    name: "factory"
  }, {
    path: "/login",
    component: _55ee73d9,
    name: "login"
  }, {
    path: "/powerbank",
    component: _cbca6218,
    name: "powerbank"
  }, {
    path: "/professional",
    component: _5033e3e7,
    name: "professional"
  }, {
    path: "/usb",
    component: _df614c12,
    name: "usb"
  }, {
    path: "/powerbank/:id",
    component: _cf900348,
    name: "powerbank-id"
  }, {
    path: "/usb/:id",
    component: _7d096e1f,
    name: "usb-id"
  }, {
    path: "/",
    component: _e7725e7c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
