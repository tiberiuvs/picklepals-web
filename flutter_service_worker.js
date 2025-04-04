'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ea224f4260d671d03ece65e88455593d",
"version.json": "491aba432df425ae2fd5e0932554ef08",
"index.html": "397fbcbb908b9f257cad0c670dca7a86",
"/": "397fbcbb908b9f257cad0c670dca7a86",
"main.dart.js": "28748ae3e6a4e73c15669a8f0cb9528b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "27107823f0b42729f9b8942077748408",
".git/config": "2583099dd8546bb3c40de0414068f9f1",
".git/objects/95/a0055fa376df82602ddd06837c0b59a2dccab7": "2d35aecd11fb111dfa9e0a4dc59122c0",
".git/objects/59/44c4bc5b7b6b05c9728904e5ea9af7fc4dcbf7": "416765a02c37b5dba065be3520bdcde2",
".git/objects/3e/e4d5b720e1517eefeb81d8fed2c0762a04865c": "3ca8c587f4c9282c0be856cf9b286423",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/6f/6ebbce6e16639f343cfbedde673b03f60a7926": "ef79ba0caeaedcc779719e39e8bf9425",
".git/objects/6f/59dfb7ebf6b18340f108d1640bc41be5f68218": "efcfcb6492c5d5add1c76d60fa42bfb4",
".git/objects/03/13c03f5e754ba60a8f3aac1d199bdbe9b49aeb": "26bfedfad46e1c077277bc432e543fd0",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/cbcaa41cbfa5f764aa3f09a5a8018b40463855": "b286aa6a446935a1f1c323a43f6d4004",
".git/objects/69/132bd3f401ff2382dcd2b8a643aac3e59875d6": "21525534f554c78f761a9e7bdc9605b7",
".git/objects/34/d8a103d5d1f3e2d8cb7942e69973b321de4771": "b24c7bbc18612f0073a8874001ce4800",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/a4/22e4d68e61799550512ae847942224959d9065": "520c5605f858a1e865f7d7b3ba81ef54",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/cf39aa23dc31f76cff9d7e4d33031d20323b1d": "6a5af65b5be5ce9f00ff73ffa257326a",
".git/objects/f3/cc99ea69a4bb6d2c887c1be956eae7c86a15f5": "52125d2e7a9e4c25377034356e4257a1",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/95a0992f8e1cdc30e7ee5c643f8107b7807edc": "69d56811611e0cbc634c3972fef8850e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/dbc2d2141ae93aa17d9f9ff07559065c49b1bd": "6a9e334b12cee93d5c917b5ec93c1580",
".git/objects/7c/02936f687932eff5f1adff5aedf38bcd0cdee7": "7cceae68d0a7826f4e8a5a8183d56030",
".git/objects/7c/ac36fc34b7f3377389ce2aaf3ddb8b37bedecc": "c1dac363d4f3db392f17a80203e99e9f",
".git/objects/16/1b4f9ed6dd81ce083cbf7651b36779822e3c28": "b0b25945fd6763c75a0125432cb1bcef",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/b455c194a60cef7e0af604967ffe1cd0d25636": "acc58464f2b5794babc557d2573de421",
".git/objects/2f/08608b1d988310c80ec2e8eb3409bb75946712": "efeb1d6aa3758a0ef6e2122391d9d2c6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/670eb3d60581d4a217f49f59c97c58a9e73626": "128163b9762f4ce672983aacfe676a72",
".git/objects/07/d1b645224b274fe9dfd42df2659b50268393b2": "b301182e9c84deedd473417ac7062527",
".git/objects/07/2689f5c74976ba41c83041ec36e80c38df75bd": "9d70b38d8114ec0916356b6651c7fcc2",
".git/objects/07/be617ea1f37b15c25ada9fb9141097c48eba2a": "fa130b3abf446db916190db1e8b40001",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/f2847dd0ce912927c2cda7adeea910ef822944": "b463757f73e00cb74d655bbb8cfe209c",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/01/130a964e5845891c52a71f80f990725ab1793c": "5eaa8eaf2fed27e4365518374653d20d",
".git/objects/39/a91219e083d45b7ca91b5cfcc2d898ed4e20e1": "0be6fe019c27e3bb26e7fc596165b30c",
".git/objects/63/3758833d2f8c82d33c0a46d91016d9df486361": "27ad31a018bd9c22425f098cc55eed81",
".git/objects/0f/928b4146c5686e1f476b959f83e5fecb4d029f": "d6f25cc74d5f246166cd702b88400024",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/e8967f80f052cca05b778d8309b562c34fd2db": "7e7d5b346bc0b524c83ba8077d49fcfb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e1/c54e5962a9f3f8d6df552c83b934436d4518f6": "e39e2bafa2807f8a6ade6d95ac2dbbcf",
".git/objects/e1/940c575dd146d53484c7ae77a1bbca77d9b587": "68323e7aafd3f045ee3dcbe4a22a4ead",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/ff/e197abb0be3f000517fcb3afba303ec9d985e1": "8570e1477c7e9979139b0e57864343fb",
".git/objects/f6/a5c456165be821d0e4c731e80cb6a4b76a26de": "4cd43c529060c563cacf56317db27e8d",
".git/objects/e0/33e0c5c912cb23b6ff8de3790279a1de96f163": "fc44ec86ab99bc237ebfc0ee3388aec6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/7902d249c0f85c881cba78081d2efaa3aad652": "13e57d3429e1567ee8bd5603052dc13f",
".git/objects/48/9820fd67450aa14c716eec85ad2bce60e8a8bd": "be874144502d8e4f41f4a2c492d5fb26",
".git/objects/8d/d4e6fb6549ecc90881b801837dc4830fca4240": "24a8806ebfd56c159d43f6cbc4a1c344",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/8b/072a476fa5b1fe2249a27596c3962add116ee3": "1589a35a4c77166f6013d5b8e209ec0b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41ab2e4d56a6b82a751004e0e814fc20",
".git/logs/refs/heads/main": "5e46e097849cebd174c2db853ad30f4a",
".git/logs/refs/remotes/origin/main": "33a714fe243efda9856b849f70e2e775",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b5447f4914693141b995e89589d7c23b",
".git/refs/remotes/origin/main": "0f8da106dc2a22ad99211004a2843393",
".git/index": "b8062fc3e6e9c2654438e0b27e7b82d7",
".git/COMMIT_EDITMSG": "0d3f24bf80c97fcc2ad07a66f9a21ae9",
"assets/AssetManifest.json": "93ab89333c3b33d87e9ae4b7431be383",
"assets/NOTICES": "74afaec2c40d35eb357f67896025b73f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0b622a6a2786b0f25099e9a39c704f3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fdd16680f5626bfb91192c3bb93f101b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "80189779f813908d363fbbd827e2ebd7",
"assets/fonts/MaterialIcons-Regular.otf": "49e96395504ece69fa9afc54cd18965e",
"assets/assets/profile_placeholder.jpg": "77f857fcbfcfa4c2e52507fdc3a75d0f",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
