// force the test environment to 'test'
process.env.NODE_ENV = 'test';
// get the application server module
var server = require('../app');
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3001;
const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);

describe('User visits signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/modelintensity', done);
  });

});

