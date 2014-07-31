var Router = require('ampersand-router');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'list': 'list'
    },

    home: function () {
        console.log('hey im home');
    },

    list: function () {
        console.log('this is the list');
    }
});
