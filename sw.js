/* ClubOS ED · service worker mínimo: solo hace la app instalable. No guarda caché (siempre red). */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
