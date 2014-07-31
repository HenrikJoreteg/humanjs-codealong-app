var API = require('hapi-dummy-api');


module.exports = new API({
    data: [
        {
            id: 0,
            givenName: 'Mary',
            familyName: 'Swanson'
        },
        {
            id: 1,
            givenName: 'Robert',
            familyName: 'Smith'
        }
    ],
    // the root RESTful resource URL
    rootUrl: '/api/people',
    // hapi plugin name, defaults to 'api'
    name: 'fake-people-api',
    // delay: 1000,
    // hapi plugin version, defaults to '0.0.0',
    version: '0.0.1'
});
