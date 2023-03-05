const CACHE = "weather-cache-v-1";
const urlsToCache = ["index.html", "offline.html"];
const self = this;

//install service worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Opened chache");
            return cache.addAll(urlsToCache);
        })
    );
});

// Listen for the request

self.addEventListener('fetch', (event) => {

    event.respondWith(

        caches.match(event.request).then(() => {
            return fetch(event.request).catch(() => {
                return caches.match('offline.html')

            })
        })
    )
});


// Activate the service worker

self.addEventListener("activate", (event) => {
    const whiteList = [];
    whiteList.push(CACHE);

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!whiteList.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    );
});
