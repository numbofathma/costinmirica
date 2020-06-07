const CACHE_NAME = "costin-mirica-v1";
const urlsToCache = [
  "/",
  "/resume.pdf",
  "/static/img/costin-mirica.jpg",
  "/static/img/projecs/arrows.jpg",
  "/static/img/projecs/bubblewrap.jpg",
  "/static/img/projecs/giftrush.jpg",
  "/static/img/projecs/paws.jpg",
  "/static/img/projecs/twindots.jpg",
];

self.addEventListener("install", event => {
  const preLoaded = caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  event.waitUntil(preLoaded);
});

self.addEventListener("fetch", event => {
  const response = caches.match(event.request)
    .then(match => match || fetch(event.request));
  event.respondWith(response);
});