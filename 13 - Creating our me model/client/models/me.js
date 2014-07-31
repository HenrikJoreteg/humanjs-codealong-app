var Model = require('ampersand-model');


module.exports = Model.extend({
    url: '/api/me',
    initialize: function () {
        this.fetch();
    },
    props: {
        id: 'string',
        givenName: 'string',
        familyName: 'string',
        email: 'string'
    }
});
