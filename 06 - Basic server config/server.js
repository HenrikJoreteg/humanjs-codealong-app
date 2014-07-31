var hapi = require('hapi');
var server = hapi.createServer(8080, 'localhost');
var moonboots = require('moonboots_hapi');
var config = require('getconfig');


server.pack.register({
    plugin: moonboots,
    options: {
        appPath: '/{p*}',
        moonboots: {
            main: __dirname + '/client/app.js',
            developmentMode: config.isDev,
            stylesheets: [
                __dirname + '/public/bootstrap.css'
            ]
        }
    }
}, function () {
    server.start();
    console.log('app is running at 8080');
});
