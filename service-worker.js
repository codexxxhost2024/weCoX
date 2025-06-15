const cacheName = 'pwa-app-cache-v1';
const assetsToCache = [
  'index.html',
  'manifest.json',
  'assets/images/logo.png',
  'css/global.css',
  'js/global.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(assetsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
