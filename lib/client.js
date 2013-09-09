
/**
 * Module dependencies.
 */

var request = require('superagent')
  , each = require('each');

/**
 * Expose `AsanaClient`.
 */

module.exports = function(uri) {
  return new AsanaClient(uri);
};

/**
 * AsanaClient.
 */

function AsanaClient(uri) {
  this.uri = uri.replace(/\/$/, '');
}

AsanaClient.prototype.render = function(res) {
  var cb = this.cb;
  if (res.ok) return cb(false, res.body);
  return cb(res.error);
}

/**
 * List workspaces.
 *
 * @param {Function} cb
 */

AsanaClient.prototype.listWorkspaces = function(cb) {
  this.cb = cb;
  request.get(this.uri + '/workspaces')
    .end(this.render.bind(this));
};

/**
 * List tags for a workspace.
 *
 * @param {Integer} id    Id of a workspace
 * @param {Function} cb
 */

AsanaClient.prototype.listTags = function(id, cb) {
  this.cb = cb;
  request.get(this.uri + '/workspaces/' + id + '/tags')
    .end(this.render.bind(this));
};

/**
 * List tasks with the specified tag.
 *
 * @param {Integer} id    Id of a tag
 * @param {Function} cb
 */

AsanaClient.prototype.listTasksWithTag = function(id, cb) {
  this.cb = cb;
  request.get(this.uri + '/tags/' + id + '/tasks')
    .end(this.render.bind(this));
}

