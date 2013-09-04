
MOCHA=node_modules/.bin/mocha --require should --check-leaks
JS_COV=jscoverage
REPORTER=spec


test: test-unit test-accept

test-unit: spec/unit.js
	@$(MOCHA) --reporter $(REPORTER) $^

test-accept: spec/accept.js
	@$(MOCHA) --reporter $(REPORTER) --bail $^

test-coverage: coverage
	@ASANA_COV=1 $(MAKE) test REPORTER=html-cov > coverage.html

coverage:
	@$(JS_COV) lib lib-cov

clean:
	rm -rf lib-cov
	rm coverage.html


.PHONY: test test-unit test-accept test-coverage coverage clean

