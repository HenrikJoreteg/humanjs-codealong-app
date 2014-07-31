var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.user,
    bindings: {
        'model.fullName': {
            type: 'text',
            role: 'user-name'
        }
    }
});
