
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

function AsanaClient(ctx, uri) {
  this.ctx = ctx;
  this.uri = uri.replace(/\/$/, '');
  this.ctx.state = ctx.state || {};
}

/**
 * Add to context.
 *
 * Add response from Asana to a specified key in Context.
 *
 * @param {String} key
 * @param {Response} res
 * @param {Function} next
 */

AsanaClient.prototype.addToContext = function(key, res, next) {
  var ctx = this.ctx;
  if (res.ok) {
    ctx.state[key] = res.body.data;
    ctx.save();
    return next();
  }
  return next(res.error);
};

/**
 * Add workspaces to context.
 *
 * @param {Function} next
 */

AsanaClient.prototype.addWorkspaces = function(next) {
  var self = this;
  function addToContext(res) {
    self.addToContext('workspaces', res, next);
  }
  request
    .get(this.uri + '/workspaces')
    .end(addToContext);
};

/**
 * Add tags for a workspace to context.
 *
 * @param {Integer} id    Id of a workspace
 * @param {Function} next
 */

AsanaClient.prototype.addTags = function(id, next) {
  var self = this;
  function addToContext(res) {
    self.addToContext('tags', res, next);
  }
  request
    .get(this.url + '/workspaces/' + id + '/tags')
    .end(addToContext);
};

/**
 * Add tasks with the specified tag to context.
 *
 * @param {Integer} id    Id of a tag
 * @param {Function} next
 */

AsanaClient.prototype.addTasksWithTag = function(id, next) {
  var self = this;
  function addToContext(res) {
    self.addToContext('tasks', res, next);
  }
  request
    .get(this.url + '/tags/' + id + '/tasks')
    .end(addToContext);
}

