var View = require('ampersand-view');
var templates = require('../templates');
var UserView = require('../views/user');


module.exports = View.extend({
    template: templates.pages.users,
    initialize: function () {
        this.collection.fetch();
    },
    autoRender: true,
    render: function () {
        this.renderWithTemplate();
        this.renderCollection(this.collection, UserView, this.getByRole('user-list'));
    }
});
