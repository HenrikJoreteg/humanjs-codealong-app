var Router = require('ampersand-router');
var HomePage = require('./pages/home');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'list': 'list'
    },

    home: function () {
        this.trigger('page', new HomePage());
    },

    list: function () {
        console.log('this is the list');
    }
});
