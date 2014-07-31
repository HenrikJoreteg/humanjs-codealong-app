var Collection = require('ampersand-rest-collection');
var Person = require('./person');


module.exports = Collection.extend({
    url: '/api/people',
    model: Person
});
