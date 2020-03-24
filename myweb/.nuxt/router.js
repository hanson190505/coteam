import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b81082b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _dc470484 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _54e08607 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2f9300bc = () => interopDefault(import('../pages/powerbank/index.vue' /* webpackChunkName: "pages/powerbank/index" */))
const _731eb5b6 = () => interopDefault(import('../pages/usb/index.vue' /* webpackChunkName: "pages/usb/index" */))
const _0d77faec = () => interopDefault(import('../pages/powerbank/_id.vue' /* webpackChunkName: "pages/powerbank/_id" */))
const _f080a666 = () => interopDefault(import('../pages/usb/_id.vue' /* webpackChunkName: "pages/usb/_id" */))
const _e98e3a20 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6b81082b,
    name: "about"
  }, {
    path: "/contact",
    component: _dc470484,
    name: "contact"
  }, {
    path: "/login",
    component: _54e08607,
    name: "login"
  }, {
    path: "/powerbank",
    component: _2f9300bc,
    name: "powerbank"
  }, {
    path: "/usb",
    component: _731eb5b6,
    name: "usb"
  }, {
    path: "/powerbank/:id",
    component: _0d77faec,
    name: "powerbank-id"
  }, {
    path: "/usb/:id",
    component: _f080a666,
    name: "usb-id"
  }, {
    path: "/",
    component: _e98e3a20,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
