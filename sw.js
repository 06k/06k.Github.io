const workboxVersion="5.1.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"baige"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"ea3fee85f74a7f550fbf268fd0ab35fa",url:"./404.html"},{revision:"79cf25e49f92efc518b8da14a70229f3",url:"./about/index.html"},{revision:"d9ba6dd9c7912bdda5a48c4d130e298e",url:"./categories/index.html"},{revision:"59055f41e3d3716a49e10aa49eb0bcf3",url:"./css/meme.min.08fa2312e2d0f92c24f02069c5fe675a0e3e73161240f654456a903cdafe0943.css"},{revision:"8d2a4fd8cbf836428792bdd7f92af172",url:"./fonts/glyph-correction.woff2"},{revision:"b54d8f6d75812d619db57ad064d5c074",url:"./index.html"},{revision:"035cfc8e37969d29692bff9859a38cff",url:"./js/meme.min.84fa340e2d192a3be8152b342da726958f7c57028a4742563b9970b809f7f33f.js"},{revision:"170f92a196ba98b3544ac4d54898a63b",url:"./life/guan-ai-qing/index.html"},{revision:"b0c172769990e184d910bf112340806a",url:"./life/index.html"},{revision:"306f770af288bdb862a383762b49c257",url:"./manifest.json"},{revision:"91d37c2935f34b9a0f72967044dd6281",url:"./tags/index.html"},{revision:"d8816fd080d2ca911a32463bdccfc3e6",url:"./tech/git-changjian-mingning/index.html"},{revision:"5c885843ab39625a50ec891677c0b300",url:"./tech/github-hugo-actions/index.html"},{revision:"2b681268def8e67d3fb46d7f6151a15c",url:"./tech/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:mp4|webm|ogg)$/,new workbox.strategies.CacheFirst({cacheName:"videos",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[200]}),new workbox.rangeRequests.RangeRequestsPlugin]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();