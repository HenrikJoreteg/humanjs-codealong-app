var View = require('ampersand-view');
var templates = require('../templates');
var UserForm = require('../forms/user');


module.exports = View.extend({
    template: templates.pages.userEdit,
    initialize: function (spec) {
        var self = this;
        this.collection.getOrFetch(spec.id, function (err, model) {
            if (err) throw err;
            self.model = model;
        });
    },
    subviews: {
        form: {
            role: 'user-form',
            waitFor: 'model',
            prepareView: function (el) {
                return new UserForm({
                    el: el,
                    model: this.model,
                    submitCallback: function (data) {
                        this.model.save(data, {
                            success: function () {
                                app.navigate('/users');
                            }
                        });
                    }
                });
            }
        }
    }
});
