var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var ListPage = require('./pages/list');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'list': 'list'
    },

    home: function () {
        this.trigger('page', new HomePage());
    },

    list: function () {
        this.trigger('page', new ListPage());
    }
});
