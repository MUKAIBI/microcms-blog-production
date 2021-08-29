importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

workbox.precaching.precacheAndRoute([
  "/images/banner_logo.svg",
  "/images/icon_author.svg",
  "/images/icon_clock.svg",
  "/images/icon_facebook.svg",
  "/images/icon_feed.svg",
  "/images/icon_hatena.svg",
  "/images/icon_menu.svg",
  "/images/icon_quote.svg",
  "/images/icon_search.svg",
  "/images/icon_twitter.svg",
  "/images/icon_link.svg",
  "/images/logo.svg"
], {
  "cacheId": "microcms-blog-prod",
  "directoryIndex": "/"
})

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('https://images.microcms-assets.io/.*'), new workbox.strategies.StaleWhileRevalidate ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/_nuxt/'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkFirst ({}), 'GET')
