var Model = require('ampersand-model');


module.exports = Model.extend({
    props: {
        id: 'number',
        givenName: 'string',
        familyName: 'string'
    },
    derived: {
        fullName: {
            deps: ['givenName', 'familyName'],
            fn: function () {
                return this.givenName + ' ' + this.familyName;
            }
        }
    }
});
