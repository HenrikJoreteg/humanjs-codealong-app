var hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var server = hapi.createServer(8080, 'localhost');


server.pack.register({
    plugin: moonboots,
    options: {
        appPath: '/{p*}',
        moonboots: {
            main: __dirname + '/client/app.js',
            developmentMode: true
        }
    }
}, function () {
    server.start();
});
