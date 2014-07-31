var View = require('ampersand-view');
var templates = require('../templates');
var UserView = require('../views/user');
var CollectionView = require('ampersand-collection-view');


module.exports = View.extend({
    template: templates.pages.users,
    initialize: function () {
        var self = this;
        app.persons.fetch();
        setTimeout(function () {
            self.collection = app.persons;
        }, 2000);
        //this.collection.fetch();
    },
    autoRender: true,
    subviews: {
        users: {
            waitFor: 'collection',
            role: 'user-list',
            prepareView: function (el) {
                return new CollectionView({
                    el: el,
                    collection: this.collection,
                    view: UserView
                });
            }
        }
    },
    /*
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, UserView, this.getByRole('user-list'));
    }
    */
});
