/* FUNDAWORK service worker — static cache of the page shell.
   TT/QW/DEPLOY/2026/011 Task 5.6: the offline toggle is backed by this real worker. */
const CACHE = 'fundawork-shell-v1';
const SHELL = ['./', './index.html'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // pass through CDN fonts/icons
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cached) => {
      if (cached) {
        // refresh in background when online
        fetch(e.request).then((res) => {
          if (res && res.ok) caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
        }).catch(() => {});
        return cached;
      }
      return fetch(e.request).catch(() => caches.match('./index.html'));
    })
  );
});
