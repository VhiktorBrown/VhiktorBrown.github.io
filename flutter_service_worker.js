'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bc54125d78982c529047154ba0571edc",
".git/config": "de90a44e0077688378c3490b29ac309c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bfad876895364b426b46b9d7f19ef6f5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6373e7706b6274d8e9e067b200e0feea",
".git/logs/refs/heads/master": "7bd4ffde12c41a50f425f2ca04931bf5",
".git/logs/refs/remotes/origin/master": "5660d37efddb859be046611838c55f4d",
".git/objects/00/a9e46c4a13e45b33c1db6dc0b43fb37583cecd": "492019cbf8498771c8249bfb4ebbdcba",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "93af8866e046dd27e34f47c20878a9b0",
".git/objects/08/2ee85228684a06a2cd2ae04ba1942095f86640": "c3acd4388b12be04b55111339eb3dafc",
".git/objects/08/fd45471b659599ed05f65e2ac74bbb44c06be7": "93d2d39aa75a3b713a6ae515bca5ae1d",
".git/objects/0a/71d552b672ae5d0abd7a9b28fd9b6162dfb320": "96c9b5bf270b8e0125dc08006d6ecc88",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "00f42c84080ce5c913903ae2fdc7b1d9",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "393bd20ca4479f63d811873c30d6025c",
".git/objects/10/ff6959ab76715f017e312dda3cfe7d4c72b3c8": "7cf5aa009df26f711a46c684f4d7a188",
".git/objects/13/4c13fd279beffa2e89dc0f7c28116b4974e08e": "4875cc45638fa113a0fbcc9d42747eb6",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "5b89f3cb7c594655e488320fc77990ee",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "523fe2b91800e86d9ac88ae5078912d7",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "ec204aa531516b764b0fec3f1cfa8534",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "8cd7e9ca99016151fd67939031fb3bfd",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "bf72be4604c984a5ff17ddb852dac423",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "e2a5d81b824d6091d76bb5ecb8bf8a01",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "8d2fd1b562fe6248092f0f7be87c777a",
".git/objects/38/5bb7bc190883588ea079c1c14b2681221a2943": "f52eb7b72f250f9e9866522c8cc6968c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "54f8ff0d387380c0b9c25486e6bb6bce",
".git/objects/48/217617005575345943d8460b76c03381fed224": "393cb9b470fe916ba4a5485e0cbad554",
".git/objects/4a/56d1ebce04a0ceb2aabbfd9f3fd556de037118": "6366d7a9c87886f24972d1406df1294b",
".git/objects/4c/581c2f44593cb8e631aaac47e7ee635a414657": "fa883dac8c339aded9f633089162539e",
".git/objects/4d/a00a39e628afb11afebee9e8b500c78308a920": "10465aac140a97942e574878f0bd588f",
".git/objects/4f/b34f12da6bb664f048531de98230f43f979aa6": "94f875617e1c907f98b83ad5f594fc83",
".git/objects/50/07f6b06dd3cba258471a823799bf605dc058e5": "cd3977e6e9799f9b1f94047711b22091",
".git/objects/50/5f9681e95e0d6e38119b8c6a749258838c2872": "a77afe9e2dadee32b1f0cdc7e81b9ef0",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "5cb210ebf2040198d349ddc9901286df",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "322d3378d5c61d470e3cddea51613ea6",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "40d9aab5decf7709f8f07b6007c148f7",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "5cdc58f38828d85faf60d344448cff42",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "9c7ac2161ab4d41eb72995f10abe8780",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "510e1327b3e01098af74560b38416c5d",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "5e80c82718faee206224e26e47316cd8",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "ad63d419463b744193f6a65344413530",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "d08abc64adcad35209ccf7f4a231ffba",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "246e3e2b7e888b83fa64eaff60e2ff86",
".git/objects/7d/fe21558148dd3dd9933e6d9aaa867d8312e760": "c4a4d6eed3b4d3c27d314af3b2e72c33",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "87a2ff7f600b6daec33558e039bc32c8",
".git/objects/80/62c6a5b26e847f513ed4847a2ff890b5304f0a": "342c80ff09365582832c250f2d4cb36c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/a775c32856a74c3e00f3daeb077533a5bd30c9": "d88c66fb5022ae602a3d1bafb71f9b14",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "63242b0c4e2a03e33006e63cecaf7cdc",
".git/objects/91/b2e06b7dd5d7b19ccc6a71591bb4f4dc491740": "29951d242f3cd3284b92d503562695da",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "0f19ae5f7d21b347fea6f70dc942a7c1",
".git/objects/98/ae853a18873839f1babd775f18c742efb44a96": "5ee10bc0abc55dba3d0c9aa2694b129e",
".git/objects/9c/6281cd4fe65dfb1facceb0abce67f44281c142": "73da3d07af5a4c0a93a6ac4c86e6937c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/a1/6d26338d777f2ca94778915ec027de9236dbbe": "a8079550f06f1d173814e67744fdf891",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "d916aa57365e51a09961834873e08f50",
".git/objects/a6/0c41fa541e01314207653f49961ed66aab5788": "79ca20db5321b6c161e8748bb90d9489",
".git/objects/b1/e5d26cd5aa56b629447affafb0b2860af71fc3": "7fbef1a78439ae49fee6510c28f65189",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "80ee9e3f04b243c298ededf694d91120",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/bb/7ce32a74ac9890715f3f29743ee04bef3be6ff": "7abd21a5bbaab3e0cf8a6e4be7bdce39",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "e6f06b42748018e79e683bf97d2beb87",
".git/objects/bd/2d8d5077c10da05ab0b48fc30389c65989e674": "0228b7d1d0ce7c78950c5cfc39ca0e6c",
".git/objects/c6/20ddaf96f50b4196d433f081b32d119f274f29": "553bfc089eb259efed738ff6f74ea17b",
".git/objects/ce/33dbabac3dc50e147d8c6fd750520da33ae7e4": "0835ad663a04872111b9f0b66ffaaeaa",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "37cff1f68cb5f0ab3e9ab2ce84cd3494",
".git/objects/d1/27290b6dea97255ef6d9e630cdff8f1cc6d1b3": "5c1c646bbc05cad1653c08f2aa79ec88",
".git/objects/d1/a4e8ad07827887b21bc969653e715b966adf98": "d95503ddbb87e5eaa56cf8810d96ce24",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "d5f7a768b78f47b77c5492ef10ea9538",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e4/a9578508891145a3bf8e67f1daa37b70225155": "569c0ff63bf8b1c442cb52ae28cca845",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "3c4126b3f3755a668f137ee0f09f5974",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/e9/c5715e6a869cb09419f190a3e24fb10fd843c8": "e5eda8410f4cad217867aec9547c18c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ef/ab0c4bc5ec30dd82ca39f9d35f20baf0b28fb8": "dda8aecc47ed912c367f487eafe54890",
".git/objects/ef/b1366a266455da6cf5cc03d2c95bd0f579fc0c": "413337798f28494a11ebb0efb26028a4",
".git/objects/f0/549db15bb5405789009ef962bcf8ad3bca59e3": "953c62f77f3a38d45a9bafd23b31b60e",
".git/objects/f5/94c57c51d3c18fad230acf3fbfa15d1ad12ec7": "a26abcb78060ee470e0bccadf835c1a1",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "273e5ca6396c51487ce55f7c6a2a9e63",
".git/refs/heads/master": "3f25c2eee577956204919181d9ae9571",
".git/refs/remotes/origin/master": "3f25c2eee577956204919181d9ae9571",
"assets/AssetManifest.bin": "e318b66a9ac70c642edf6756454d8b91",
"assets/AssetManifest.json": "f602d91f905a1e8f0b7eb614f83dcf93",
"assets/assets/icons/google_play.svg": "34d8509b8330568af579bbd7ed35a6f7",
"assets/assets/images/bg_image.jpg": "fc7cf62d72920e36198d1c804e85b4bb",
"assets/assets/images/victor_profile_image.png": "dcf3060ed889d3413b2f9f217d4c4da1",
"assets/FontManifest.json": "7935216daba25241762d9f29dd445489",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b1b19cc80dab3411c024b142c7d5f97a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/icons_flutter/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/icons_flutter/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/icons_flutter/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/icons_flutter/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/icons_flutter/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/icons_flutter/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/icons_flutter/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/icons_flutter/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/icons_flutter/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/icons_flutter/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/icons_flutter/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/icons_flutter/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/icons_flutter/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/icons_flutter/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/icons_flutter/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/icons_flutter/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/icons_flutter/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/icons_flutter/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/icons_flutter/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/icons_flutter/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/icons_flutter/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/icons_flutter/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/icons_flutter/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/icons_flutter/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/icons_flutter/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/icons_flutter/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/icons_flutter/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/icons_flutter/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/icons_flutter/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "53a5f327d2e3970d4e35dcd48b42a055",
"/": "53a5f327d2e3970d4e35dcd48b42a055",
"main.dart.js": "b0874afabc6a324f10028e4c7e7c4f01",
"manifest.json": "e86d5510456ab5954f14573489a7e08a",
"version.json": "f997c0b49eaa93fa530fa95a1ac09d3e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
