
Asana API
=========

Proxy for the Asana API. While Asana does allow cross domain Ajax request, it's not ideal because it exposes your API key.

Installation
------------
```
sudo npm install hkjels/asana.js
npm install connect
npm install http
```

Example
-------
Run a proxy on your server
```
var Asana = require('asana')
  , connect = require('connect')
  , app = connect()
  , http = require('http')

var asana = new Asana("INSERT_API_KEY");
app.use(asana);
http.createServer(app).listen(7357);
```
Execute an ajax request on your client
```
var ajax = new XMLHttpRequest();
ajax.open("GET", "/users/me");
ajax.send();
```

Test
----

You'll need a patched version of [jscoverage](https://github.com/visionmedia/node-jscoverage)
to see coverage reports.

    $ echo '{"key": "Your API-key"}' > spec/config.json
    $ make test


License
-------

> The MIT License (MIT)
>
> Copyright (c) 2013 Henrik Kjelsberg
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

