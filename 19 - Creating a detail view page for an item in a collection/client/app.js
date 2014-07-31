var domready = require('domready');
var MainView = require('./views/main');
var Router = require('./router');
var MeModel = require('./models/me');
var Persons = require('./models/persons');


window.app = {
    init: function () {
        var self = this;
        window.me = new MeModel();

        // data collections
        this.persons = new Persons();

        domready(function () {
            self.router = new Router();
            self.view = new MainView({
                el: document.body,
                model: me
            });
            self.router.history.start({pushState: true});
        });
    }
};

window.app.init();
