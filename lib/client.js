
/**
 * Module dependencies.
 */

var request = require('superagent')
  , each = require('each');

/**
 * Expose `AsanaClient`.
 */

module.exports = AsanaClient;

/**
 * AsanaClient.
 */

function AsanaClient(uri) {
  this.uri = uri.replace(/\/$/, '');
}

/**
 * Return the response from Asana.
 *
 * @param {String} key
 * @param {Response} res
 * @param {Function} cb
 */

AsanaClient.prototype.render = function(key, res, cb) {
  if (res.ok) {
    return cb(res.body.data);
  }
  return cb(res.error);
};

/**
 * List workspaces.
 *
 * @param {Function} cb
 */

AsanaClient.prototype.listWorkspaces = function(cb) {
  var self = this;
  function render(res) {
    self.render('workspaces', res, cb);
  }
  request
    .get(this.uri + '/workspaces')
    .end(render);
};

/**
 * List tags for a workspace.
 *
 * @param {Integer} id    Id of a workspace
 * @param {Function} cb
 */

AsanaClient.prototype.listTags = function(id, cb) {
  var self = this;
  function render(res) {
    self.render('tags', res, cb);
  }
  request
    .get(this.url + '/workspaces/' + id + '/tags')
    .end(render);
};

/**
 * List tasks with the specified tag.
 *
 * @param {Integer} id    Id of a tag
 * @param {Function} cb
 */

AsanaClient.prototype.listTasksWithTag = function(id, cb) {
  var self = this;
  function render(res) {
    self.render('tasks', res, cb);
  }
  request
    .get(this.url + '/tags/' + id + '/tasks')
    .end(render);
}

