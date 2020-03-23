const cacheName = 'cache-v1';
let resourcesToPrecache = [
        'https://magedbgt.github.io/exorcisamus/main.js',
        'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
        'https://magedbgt.github.io/fontawesome/css/all.css',
        'https://magedbgt.github.io/fontawesome/webfonts/fa-solid-900.ttf',
        'https://magedbgt.github.io/fontawesome/webfonts/fa-solid-900.woff2',
        'https://magedbgt.github.io/fontawesome/webfonts/fa-solid-900.woff',
        'https://magedbgt.github.io/exorcisamus/img/Assinatura.png',
        'https://magedbgt.github.io/exorcisamus/img/PRA-MAGE.png',
        'https://magedbgt.github.io/exorcisamus/img/ab1.jpg',
        'https://magedbgt.github.io/exorcisamus/img/mage.jpg',
        'https://magedbgt.github.io/exorcisamus/img/mage2.jpg',
        'https://magedbgt.github.io/exorcisamus/img/photo.png',
        'https://magedbgt.github.io/exorcisamus/img/roses_by_mage.png',
        'https://magedbgt.github.io/exorcisamus/img/roses_by_Hanano.jpg',
        'https://magedbgt.github.io/exorcisamus/img/chocotan_by_Hana.jpg',
        'https://magedbgt.github.io/exorcisamus/img/poporing.gif',
        'https://magedbgt.github.io/exorcisamus/img/pacoca.jpg',
        'https://magedbgt.github.io/exorcisamus/img/alpaca.png'
      ];

self.addEventListener('install', event => {
  self.skipWaiting();
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!cacheName.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('new version is ready to handle fetches!');
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
