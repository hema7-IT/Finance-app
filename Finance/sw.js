const CACHE_NAME = "finance-app-v3"; 
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("finance-app").then(cache => {
      return cache.addAll([
        "index.html",
        "history.html",
        "dashboard.html"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
