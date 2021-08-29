import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8626173c = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _1810ae0e = () => interopDefault(import('../pages/draft/index.vue' /* webpackChunkName: "pages/draft/index" */))
const _39baeb1e = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _59371a7c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _5c1248b7 = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _8626173c,
    name: "404"
  }, {
    path: "/draft",
    component: _1810ae0e,
    name: "draft"
  }, {
    path: "/search",
    component: _39baeb1e,
    name: "search"
  }, {
    path: "/",
    component: _59371a7c,
    name: "index"
  }, {
    path: "/:slug",
    component: _5c1248b7,
    name: "slug"
  }, {
    path: "/page/:id",
    component: _59371a7c,
    name: "pages"
  }, {
    path: "/category/:categoryId/page/:id",
    component: _59371a7c,
    name: "categories"
  }, {
    path: "*",
    component: _8626173c,
    name: "custom"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
