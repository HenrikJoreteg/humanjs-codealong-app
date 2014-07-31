var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var UserListPage = require('./pages/user-list');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'users': 'users'
    },

    home: function () {
        this.trigger('page', new HomePage());
    },

    users: function () {
        this.trigger('page', new UserListPage({
            collection: app.persons
        }));
    }
});
