
/**
 * Test dependencies.
 */

var Asana = require('asana-client')
  , request = require('superagent');

describe('Asana client', function() {
  var ctx = {}, asana;

  before(function() {
    asana = new Asana(ctx, '/');
  });

  afterEach(function() {
    request.restore();
  });

  describe('addWorkspaces', function() {
    it ('should add workspaces to context', function(done) {
    });
  })
});

