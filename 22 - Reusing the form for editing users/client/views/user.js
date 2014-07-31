var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.user,
    bindings: {
        'model.fullName': {
            type: 'text',
            role: 'user-name'
        },
        'model.viewUrl': {
            type: 'attribute',
            name: 'href',
            role: 'action-view-user'
        },
        'model.editUrl': {
            type: 'attribute',
            name: 'href',
            role: 'action-edit-user'
        }
    },
    events: {
        'click [role=action-delete-user]': 'handleDeleteClick'
    },
    handleDeleteClick: function () {
        this.model.destroy();
    }
});
