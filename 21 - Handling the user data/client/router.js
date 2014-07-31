var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var UserListPage = require('./pages/user-list');
var UserViewPage = require('./pages/user-view');
var UserCreatePage = require('./pages/user-create');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'users': 'users',
        'users/create': 'userCreate',
        'users/:id': 'userView'
    },

    home: function () {
        this.trigger('page', new HomePage());
    },

    users: function () {
        this.trigger('page', new UserListPage({
            collection: app.persons
        }));
    },

    userView: function (id) {
        this.trigger('page', new UserViewPage({
            id: Number(id),
            collection: app.persons
        }));
    },

    userCreate: function () {
        this.trigger('page', new UserCreatePage());
    }
});
