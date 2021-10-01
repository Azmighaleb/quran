'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5d1bf7a518ea452be20c111590c28f26",
"assets/assets/fonts/almushaf.ttf": "8eb530920ecc3095380fb10f976a5689",
"assets/assets/fonts/arbsqd.ttf": "2631d2f25bbdc4af7dc4ff59f502026d",
"assets/assets/fonts/arbsqdtp.ttf": "93921dcc000aedc5067fc121ef85e8b5",
"assets/assets/fonts/arial.ttf": "2936a2056ef3395f1d77571d1b9faf33",
"assets/assets/fonts/me_quran_volt_newmet.ttf": "a79b204e9c3055c77f0d81921bd881c2",
"assets/assets/jsonsFile/surahs.json": "85a76f4f3cf2d6a927cfaf704fe2b206",
"assets/assets/surah/1.json": "7bee720d95deea50808553003f8679a7",
"assets/assets/surah/10.json": "e1be0180f6feba7f1f289c696a07ecbb",
"assets/assets/surah/100.json": "11a8135bd280d709d21a94c7c1e026a1",
"assets/assets/surah/101.json": "cf5407788ac15d623240c3dbd26b8895",
"assets/assets/surah/102.json": "2d766787c5bb013f73dc321c9f438d45",
"assets/assets/surah/103.json": "dfcdbe339ffbaf6b0434e438487d7171",
"assets/assets/surah/104.json": "13c997ccbf004e3528a1846fe21630fe",
"assets/assets/surah/105.json": "fa23915ae376ec04da7d86673907739a",
"assets/assets/surah/106.json": "869b79e2e91319a21c0c0ff66ed886fa",
"assets/assets/surah/107.json": "6a02667fa18fbd8e862074a1ca04435b",
"assets/assets/surah/108.json": "0ea69d769e1953b13cfbfc6f746ef8d8",
"assets/assets/surah/109.json": "bbe87d83cd096143415f7369b1d0c13f",
"assets/assets/surah/11.json": "4ed1a330029d319da89b8d89474870d1",
"assets/assets/surah/110.json": "a3b59462ace4127713fe3342114db08b",
"assets/assets/surah/111.json": "4555433200987ee92491487372e66e06",
"assets/assets/surah/112.json": "5848cae50ca65baf3f72217107ca07eb",
"assets/assets/surah/113.json": "241c3338ba77d66a0ab420e10d959aaa",
"assets/assets/surah/114.json": "dc62599916e0ce7040beb9b8d9fac7fa",
"assets/assets/surah/12.json": "3e45914749b433cdb458666d201f6e06",
"assets/assets/surah/13.json": "eb6f6d3df1e5b7d02c9c45ad7d0e166f",
"assets/assets/surah/14.json": "4ada6f1ec3c7ed3f736255aac4ba5464",
"assets/assets/surah/15.json": "cf1aa474a87bfe5ccc071ce959a9f9df",
"assets/assets/surah/16.json": "23aed76a90830ff083983fa08fe73948",
"assets/assets/surah/17.json": "d7b2b8b42522b1decbeea13947948f7d",
"assets/assets/surah/18.json": "7ddcff790c2891ee5b0d4c258a77b9d0",
"assets/assets/surah/19.json": "aa3a321bcb18c6b2a69b069c45abf95c",
"assets/assets/surah/2.json": "04ce48d245243922f1a9b0c939728fea",
"assets/assets/surah/20.json": "8d883fe6c19b51671e22fb059a423e54",
"assets/assets/surah/21.json": "f7dc25fdacb9f66c1557ec56ce5d1203",
"assets/assets/surah/22.json": "b68d21b9e21b8e082aac49e0e4778e49",
"assets/assets/surah/23.json": "df2ff525cf5e2290d3575ba0fe1b2ec5",
"assets/assets/surah/24.json": "dc485c9c8f7bd543df06039d616f1a15",
"assets/assets/surah/25.json": "33322b215c46714851a2aaf3f26af3f8",
"assets/assets/surah/26.json": "0f95967594abbf026aeda3a9aff60236",
"assets/assets/surah/27.json": "4f59b78dfe85e143b222bea6f28ae19b",
"assets/assets/surah/28.json": "99d1351ec9306ab24ba4d4aea4e5a0be",
"assets/assets/surah/29.json": "df35b8e533d54c57ffd4fb630bc88134",
"assets/assets/surah/3.json": "3295cd0e072811b286b0d23794a2659a",
"assets/assets/surah/30.json": "01e72d59660981a1513fcc3746285f13",
"assets/assets/surah/31.json": "d47b544936cfd7a65a7f245cdf1b4865",
"assets/assets/surah/32.json": "19c20b5f77d699a1d2b241ae934e3f67",
"assets/assets/surah/33.json": "cfea666403ff56e5d99d20d8bd425529",
"assets/assets/surah/34.json": "cab8341607d576815641e431b2e2db01",
"assets/assets/surah/35.json": "31d1d5d54112875ea44dea980ac94f4a",
"assets/assets/surah/36.json": "a56e550a548b6e169f26a035cd4efd8f",
"assets/assets/surah/37.json": "2056f1293b3380de156b516dceee7695",
"assets/assets/surah/38.json": "d50354d2f69786ca7a9f39fcb2d7bb62",
"assets/assets/surah/39.json": "e6eeb873328fee80e7ef90b98dc5f860",
"assets/assets/surah/4.json": "b1d1b3adcea9f3e1d3432ec5c165d12e",
"assets/assets/surah/40.json": "1cec49a4bbe1c390ff07796307d97cf2",
"assets/assets/surah/41.json": "901f01d1ba439b0400a28400d6859382",
"assets/assets/surah/42.json": "567905d6b3a1bf3a43ed1986d75f988d",
"assets/assets/surah/43.json": "28714fafa00b47203fa4d39be69a2206",
"assets/assets/surah/44.json": "024851d81c31272ae602e6375154ff22",
"assets/assets/surah/45.json": "1332abf73e184b7a003d2fdedb8d01d9",
"assets/assets/surah/46.json": "61266faad60972e6c01ae99bcfdedc15",
"assets/assets/surah/47.json": "1305a8e08a4df12aa7126bf91d987af3",
"assets/assets/surah/48.json": "8b917b2adae30996e3ee21654dd9a464",
"assets/assets/surah/49.json": "45590728777bdd59517ab685bf945fdc",
"assets/assets/surah/5.json": "1c15ac9675e075ccf2eb41c63938a13a",
"assets/assets/surah/50.json": "39da624868f6dd3ed1b89542eb9554be",
"assets/assets/surah/51.json": "5fba9eb65c50e531451b345b07a02a98",
"assets/assets/surah/52.json": "c9c572a66bc03e6b67edc6569e5d20ac",
"assets/assets/surah/53.json": "3b696b8ed6ed330402c20afd3cf6068d",
"assets/assets/surah/54.json": "d12c9e69a658ef761cd1bccf31b739cf",
"assets/assets/surah/55.json": "75c61ea5889304e12ad42c3ad9df2434",
"assets/assets/surah/56.json": "e5093ff7843274e1ad2db33e95bcdd46",
"assets/assets/surah/57.json": "f7e7f0a4c3949af457b8bc546eb8fb8b",
"assets/assets/surah/58.json": "523ecb5a43de3985c05ab82f42641f94",
"assets/assets/surah/59.json": "e0ce9f84d977b7b00661d2de194a0a08",
"assets/assets/surah/6.json": "f4b88bc717b4ade0706679050e2e6ea6",
"assets/assets/surah/60.json": "b46d0b861ed4acd18159be7e3cacd459",
"assets/assets/surah/61.json": "a60ea5f697945c48020d85a5bf649859",
"assets/assets/surah/62.json": "d6803b60a5fb204f0a302222bf5d1a65",
"assets/assets/surah/63.json": "215b1501aedb55cbb5d5e8cac2c97a08",
"assets/assets/surah/64.json": "f6521f12800d20b20ae29d0fe1b27bd6",
"assets/assets/surah/65.json": "3d3c9426808abf8dc1fdff90811d04cb",
"assets/assets/surah/66.json": "737817e774eb844eab73555e6c2ab9ba",
"assets/assets/surah/67.json": "fe6df66b8302a69a8c90be03fa3234e9",
"assets/assets/surah/68.json": "76f55eabfcaf9919c80572eb1bd604cf",
"assets/assets/surah/69.json": "a9e830aa4916e2565be2bdae6d14d97c",
"assets/assets/surah/7.json": "c4d2cc1e1769c916de1e1121689ff08b",
"assets/assets/surah/70.json": "fd46fcb008fcfb2c2c6e3483caf23085",
"assets/assets/surah/71.json": "aed887590aa2de77ab358a3c2a64578d",
"assets/assets/surah/72.json": "9e540905b2288e1465884d457aa7162a",
"assets/assets/surah/73.json": "534ae6faefbe9365fb6c34e8448ff268",
"assets/assets/surah/74.json": "57f85b5fff871672b6e4223154e3ed04",
"assets/assets/surah/75.json": "c42df44b3506898ad10423aa3cd40497",
"assets/assets/surah/76.json": "5532851fc1da530676785ad2d9e3376d",
"assets/assets/surah/77.json": "27c8b7f6a392c94bee0692d745819b23",
"assets/assets/surah/78.json": "068724529fe96f24027e06613b632408",
"assets/assets/surah/79.json": "2337a3d83935f7ab8beededd70a68660",
"assets/assets/surah/8.json": "510854a294121ee0438b254cf0250a0d",
"assets/assets/surah/80.json": "e1bc6743985b3649ee06e80ba726be0e",
"assets/assets/surah/81.json": "879c16cd3ba7712a6d8478177b95250b",
"assets/assets/surah/82.json": "051acafd3504b5090bf76db35674899d",
"assets/assets/surah/83.json": "23a71d681e298de61b62c174279cffb1",
"assets/assets/surah/84.json": "ca20636b1ba74368aa13936e0691bac0",
"assets/assets/surah/85.json": "8fb4ec44f6384041446cc81687685308",
"assets/assets/surah/86.json": "d90ce4b19750b6719f791f6350365836",
"assets/assets/surah/87.json": "74bb8e86bb715d53c866f0dea13e1f0f",
"assets/assets/surah/88.json": "457e23efee535c8459d27b866b9a7186",
"assets/assets/surah/89.json": "ec65a3e9c6dd666deb23ac3ff647a615",
"assets/assets/surah/9.json": "458b4b29f3e8344e0ce4a3c7be7b8d1b",
"assets/assets/surah/90.json": "0f5e75c0c244ada028c97bc5891fff91",
"assets/assets/surah/91.json": "85129fdf16f97791ea195f756e419036",
"assets/assets/surah/92.json": "a27f563bd00f0d10ffcdd6f3ac4363a0",
"assets/assets/surah/93.json": "523cd3d0fec94258c4bac1404a8e80c8",
"assets/assets/surah/94.json": "4c23ec3ca33c922c1bcc1e865bab62e1",
"assets/assets/surah/95.json": "6b7a2cb091608ca076fdb0d151e84857",
"assets/assets/surah/96.json": "c608da099e7f392c516d799528d3f596",
"assets/assets/surah/97.json": "f24fd04c928b1b593715ac0e98c6eb44",
"assets/assets/surah/98.json": "57f549bd282e475ead209db8bbb2c230",
"assets/assets/surah/99.json": "2aa70f5a78a05db3a61dc96c016ae240",
"assets/FontManifest.json": "297c477c49172079f48d00547ede2519",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "94282eb8377163b554bd7331df1cf820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "12fd4b5471a534147c877499630bb67c",
"/": "12fd4b5471a534147c877499630bb67c",
"main.dart.js": "835c5e8e2de05b9aa277aa18ceb88f4a",
"manifest.json": "ef705ec0f6e3eec36e92066e0aea6e82",
"version.json": "ea3b054eeddec9f8065844382219d381"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
