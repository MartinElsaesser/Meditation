# Differences between a local PWA and a PWA on Github

## sw.js
### URLs to cache
Local format: /file
```javascript
var urlsToCache = [
	"/",
	"/index.html"
];
```
Format for github: /{repository}/file
```javascript
var urlsToCache = [
	"/Meditation/",
	"/Meditation/index.html",
];
```

## Manifest.json
Local start url: /
```json
{
	"start_url": "/"
}
```
Start url for github: /{repository}/
```json
{
	"start_url": "/Meditation/"
}
```

## index.html
### head
Add:
```html
<link rel="canonical" href="https://martinelsaesser.github.io/Meditation/">
```
Makes URL more flexible and less error prone

## sw-register.js
### Register service worker
Local url to service worker: /sw.js
```javascript
navigator.serviceWorker.register('/sw.js');
```
Url to service worker on Github: /{repository}/sw.js
```javascript
navigator.serviceWorker.register('/Meditation/sw.js');
```