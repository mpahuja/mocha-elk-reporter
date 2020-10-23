'use strict';

const assert = require('assert');
const rewire = require('rewire');
let {passedTests, failedTests} = require('./data/passed-failed-tests');
const elkReporter = rewire('./../index.js');

describe('ELK Reporter Tests: ', () => {
  describe('AddRetryFailures: ', () => {
    let passes, failures;
    const addRetryFailures = elkReporter.__get__('addRetryFailures');

    beforeEach(() => {
      passes = [...passedTests];
      failures = [...failedTests];
    });

    it('should add all previous attempts to failures from failed and passed tests', () => {
      addRetryFailures(failures, passes);
      assert(failures.length === 5, 'Previous attempts not added to failures');
      assert(passes.length === 1, 'Previous attempts added to passes');
    });
  
    it('should not add previous attempts to failures if test passed in a single attempt', () => {
      failures = [];
      passes[0].prevAttempts = [];
      addRetryFailures(failures, passes);
      assert(failures.length === 0, 'Previous attempts added to failures');
      assert(passes.length === 1, 'Previous attempts added to passes');
    });

    it('should only add previous attempts from failures to failures if all tests failed', () => {
      passes = [];
      addRetryFailures(failures, passes);
      assert(failures.length === 3, 'Previous attempts added to failures');
      assert(passes.length === 0, 'Previous attempts added to passes');
    });
  })
});
