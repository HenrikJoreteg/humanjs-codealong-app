var domready = require('domready');
var MainView = require('./views/main');
var Router = require('./router');
var MeModel = require('./models/me');


window.app = {
    init: function () {
        var self = this;
        window.me = new MeModel();
        domready(function () {
            self.router = new Router();
            self.view = new MainView({
                el: document.body
            });
            self.router.history.start({pushState: true});
        });
    }
};

window.app.init();
