const CACHE_NAME = 'v1';
const RESSOURCES = ['/', '/index.html', '/style.css'];

// Installation : on met tout en cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(RESSOURCES))
  );
});

// Fetch : cache d'abord, réseau ensuite
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});