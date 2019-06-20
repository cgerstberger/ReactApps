console.log("My service worker runs!");

self.addEventListener('install', function(event){
    console.log('SW installed');
    event.waitUntil(caches.open('static')
    .then(function(cache){
        // cache.add('/');
        // cache.add('/index.html');
        // cache.add('/src/js/app.js');
        cache.addAll([
            '/',
            '/favicon.ico',
            '/index.html',
            '/manifest.json',
            // '/service-worker-custom.js',
            '/src/common/card.js',
            '/src/db/dbFunctions.js',
            '/src/finance/expense.js',
            '/src/finance/finance_today.js',
            '/src/finance/finance.js',
            '/src/finance/history.js',
            '/src/finance/statistics.js',
            '/src/todolist/list.js',
            '/src/todolist/new_item.js',
            '/src/todolist/todolist.js',
            '/src/weight/daily_weight.js',
            '/src/weight/weight_history.js',
            '/src/weight/weight_statistics.js',
            '/src/weight/weight.js',
            '/src/App.css',
            '/src/App.js',
            '/src/index.css',
            '/src/index.js',
            '/src/logo.svg',
            '/src/serviceWorker.js',
            'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
            'https://fonts.googleapis.com/icon?family=Material+Icons',
            '/static/js/bundle.js',
            '/static/js/0.chunk.js',
            '/static/js/1.chunk.js',
            '/static/js/main.chunk.js',
            '/main.53cf17dc1eeb623160ed.hot-update.js',
            '/sockjs-node/info',
            '/mooikfkahbdckldjjndioackbalphokd/assets/prompt.js',
            '/service-worker-custom.js',
            '/src/images/pwa.jpg',
            '/src/images/icons/app-icon-96x96.png',
            '/src/images/icons/app-icon-144x144.png',
            '/src/images/icons/app-icon-256x256.png',
            '/src/images/icons/app-icon-512x512.png'
            // '/src/js/app.js',
            // '/src/css/app.css',
            // '/src/images/pwa.jpg',
            // 'https://fonts.googleapis.com/css?family=Raleway:400,700'
        ]);
    }));
});

self.addEventListener('activate', function(){
    console.log('SW activated');
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(res){
                if(res){
                    return res;
                } else {
                    fetch(event.request);
                }
            })
    );
});