// load Node.js assertion module
var assert = require('assert');
process.env.NODE_ENV = 'test';
var app = require('../app');
// use zombie.js as headless browser
var Browser = require('zombie');

describe('contact page', function() {
  before(function() {
    this.server = app.listen(3001);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  // load the contact page
  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should show contact a form');
  it('should refuse empty submissions');
  // ...
});

describe('contact page', function() {
  // ...

  it('should show contact a form', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h1'), 'Wildfire Predictor');
  });

  // ...

});
