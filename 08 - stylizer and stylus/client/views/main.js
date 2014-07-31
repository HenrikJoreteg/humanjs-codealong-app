var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');


module.exports = View.extend({
    template: '<body><h1>Our Awesome App</h1><main role="page-container"></main></body>',
    autoRender: true,
    initialize: function () {
        this.listenTo(app.router, 'page', this.handleNewPage);
    },
    render: function () {
        this.renderWithTemplate();
        this.pages = new ViewSwitcher(this.getByRole('page-container'));
    },
    handleNewPage: function (page) {
        this.pages.set(page);
    }
});
