var CACHE_NAME = 'meditation-app';
var urlsToCache = [
	"/Meditation/",
	"/Meditation/index.html",
	"/Meditation/manifest.json",
	"/Meditation/CSS/styles.css",
	"/Meditation/CSS/components/border-circle.css",
	"/Meditation/CSS/components/button-controls.css",
	"/Meditation/CSS/components/marker-circles.css",
	"/Meditation/CSS/components/text-frame.css",
	"/Meditation/CSS/components/timer.css",
	"/Meditation/CSS/libraries/circle-sector.css",
	"/Meditation/CSS/libraries/font-awesome.css",
	"/Meditation/Fonts/fa-brands-400.eot",
	"/Meditation/Fonts/fa-brands-400.svg",
	"/Meditation/Fonts/fa-brands-400.ttf",
	"/Meditation/Fonts/fa-brands-400.woff",
	"/Meditation/Fonts/fa-brands-400.woff2",
	"/Meditation/Fonts/fa-regular-400.eot",
	"/Meditation/Fonts/fa-regular-400.svg",
	"/Meditation/Fonts/fa-regular-400.ttf",
	"/Meditation/Fonts/fa-regular-400.woff",
	"/Meditation/Fonts/fa-regular-400.woff2",
	"/Meditation/Fonts/fa-solid-900.eot",
	"/Meditation/Fonts/fa-solid-900.svg",
	"/Meditation/Fonts/fa-solid-900.ttf",
	"/Meditation/Fonts/fa-solid-900.woff",
	"/Meditation/Fonts/fa-solid-900.woff2",
	"/Meditation/JS/app.js",
	"/Meditation/JS/elements-observer.js",
	"/Meditation/JS/sw-register.js",
	"/Meditation/JS/timer.js",
	"/Meditation/Pictures/icons/icon-72x72.png",
	"/Meditation/Pictures/icons/icon-96x96.png",
	"/Meditation/Pictures/icons/icon-144x144.png",
	"/Meditation/Pictures/icons/icon-152x152.png",
	"/Meditation/Pictures/icons/icon-192x192.png",
	"/Meditation/Pictures/icons/icon-384x384.png",
	"/Meditation/Pictures/icons/icon-512x512.png",
	"/Meditation/Pictures/background.jpg"
];

self.addEventListener('install', function (event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function (cache) {
				console.log('Opened cache');
				return cache.addAll(urlsToCache);
			})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request)
			.then(function (response) {
				// Cache hit - return response
				if (response) {
					return response;
				}
				return fetch(event.request);
			})
	);
});