
/**
 * Module dependencies.
 */

var request = require('superagent');

/**
 * URI to the Asana API.
 */

var URI = 'https://app.asana.com/api/1.0';

/**
 * Expose `Asana`.
 */

module.exports = Asana;

/**
 * Asana.
 *
 * @param {String} key    Asana API-key
 * @return {Route}
 */

function Asana(key) {
  this.key = key;
  return this.route.bind(this);
}

/**
 * Proxy middle-ware.
 *
 * Proxies request from localhost to the Asana-API.
 */

Asana.prototype.route = function Route(req, res, next) {
  function render(resp) {
    res.setHeader('Content-Type', 'application/json');
    if (resp.ok) {
      res.statusCode = 200;
      return res.end(JSON.stringify(resp.body.data));
    } else {
      res.statusCode = resp.error.status;
      return res.end(JSON.stringify(resp.error));
    }
  }
  request
    [req.method.toLowerCase()](URI + req.url)
    .query(req.query || {})
    .send(req.body || {})
    .auth(this.key, '')
    .end(render);
};

