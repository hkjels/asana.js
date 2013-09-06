
/**
 * Test dependencies.
 */

var Asana = require('../')
  , connect = require('connect')
  , app = connect();


describe('Asana middle-ware', function() {
  it ('should be possible to mount', function(done) {
    var asana = new Asana('api-key');
    app.use(asana)
    done();
  });
});

