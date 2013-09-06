
COMPONENT=node_modules/.bin/component
MOCHA=node_modules/.bin/mocha --require should --check-leaks
JS_COV=jscoverage
REPORTER=spec


build: components lib/*.js
	$(COMPONENT) build --dev

components: component.json
	$(COMPONENT) install --dev

test: test-unit test-accept test-client

test-unit: spec/proxy.js
	@$(MOCHA) --reporter $(REPORTER) $^

test-accept: spec/acceptance/*.js
	@$(MOCHA) --reporter $(REPORTER) --bail $^

test-client: build
	open spec/index.html

test-coverage: coverage
	@ASANA_COV=1 $(MAKE) test REPORTER=html-cov > coverage.html

coverage:
	@$(JS_COV) lib lib-cov

clean:
	rm -rf lib-cov build components
	rm coverage.html


.PHONY: build components test test-unit test-accept test-coverage coverage clean

