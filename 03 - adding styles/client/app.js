var MainView = require('./main-view');
var domready = require('domready');


window.app = {
    init: function () {
        var self = this;
        domready(function () {
            self.view = new MainView({
                el: document.body
            });
        });
    }
};

window.app.init();
