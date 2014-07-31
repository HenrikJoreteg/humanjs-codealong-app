var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');


module.exports = FormView.extend({
    fields: function () {
        return [
            new InputView({
                name: 'givenName',
                label: 'Given Name',
                placeholder: 'Jane',
                parent: this,
                required: true,
                tests: [
                    function (val) {
                        if (val.length < 4) return 'Must be > 3 characters';
                    }
                ]
            }),
            new InputView({
                name: 'familyName',
                label: 'Family Name',
                placeholder: 'Doe',
                parent: this,
                required: true,
                tests: [
                    function (val) {
                        if (val.length < 4) return 'Must be > 3 characters';
                    }
                ]
            })
        ];
    }
});

