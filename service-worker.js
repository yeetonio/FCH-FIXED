self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('fch-cache').then(cache => {
      return cache.addAll(['/', '/index.html', '/FCH_icon.png', '/manifest.json']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
