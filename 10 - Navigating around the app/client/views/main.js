var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.body,
    autoRender: true,
    events: {
        'click a[href]': 'handleLinkClick'
    },
    initialize: function () {
        this.listenTo(app.router, 'page', this.handleNewPage);
    },
    render: function () {
        this.renderWithTemplate();
        this.pages = new ViewSwitcher(this.getByRole('page-container'));
    },
    handleNewPage: function (page) {
        this.pages.set(page);
    },
    handleLinkClick: function (e) {
        var aTag = e.target;
        if (aTag.host === window.location.host) {
            // this is a local click
            app.router.history.navigate(aTag.pathname, {trigger: true});
            e.preventDefault();
        }
    }
});
