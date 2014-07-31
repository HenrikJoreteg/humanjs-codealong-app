var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var dom = require('ampersand-dom');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.body,
    autoRender: true,
    events: {
        'click a[href]': 'handleLinkClick'
    },
    bindings: {
        'model.fullName': {
            type: 'text',
            role: 'user-name'
        }
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
        this.updateActiveNav();
    },
    handleLinkClick: function (e) {
        var aTag = e.target;
        if (aTag.host === window.location.host) {
            app.router.history.navigate(aTag.pathname, {trigger: true});
            e.preventDefault();
        }
    },
    updateActiveNav: function () {
        var pathname = window.location.pathname;
        this.getAll('nav a').forEach(function (aTag) {
            var parent = aTag.parentNode;
            if (pathname.indexOf(aTag.pathname) === 0) {
                dom.addClass(parent, 'active');
            } else {
                dom.removeClass(parent, 'active');
            }
        });
    }
});
