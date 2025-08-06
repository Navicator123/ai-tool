self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("navicator-ai-cache").then(cache => {
      return cache.addAll(["ai_tool.html", "manifest.json"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
