var Model = require('ampersand-model');


module.exports = Model.extend({
    props: {
        id: 'number',
        givenName: 'string',
        familyName: 'string'
    }
});
