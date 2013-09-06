
/**
 * Test dependencies.
 */

var Asana = require('../../')
  , config = require('../config')
  , request = require('supertest')
  , connect = require('connect')
  , http = require('http')
  , app = connect();


describe('Asana API', function() {
  var asana;

  before(function() {
    asana = new Asana(config.key);
    app.use(asana);
    http.createServer(app).listen(7357);
  });

  describe('GET /users/me', function() {
    it ('should respond with JSON', function(done) {
      request(app)
        .get('/users/me')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});

