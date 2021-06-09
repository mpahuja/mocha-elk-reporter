'use strict';

const assert = require('assert');
const rewire = require('rewire');
const {
  passedTests, 
  failedTests,
  failedTestWithMissingProps,
  passedTestsWithMissingProps
} = require('./data/passed-failed-tests');
const elkReporter = rewire('./../index.js');

describe('ELK Reporter Tests: ', () => {
  describe('AddRetryFailures: ', () => {
    const addRetryFailures = elkReporter.__get__('addRetryFailures');
    let passes, failures;

    beforeEach(() => {
      passes = [...passedTests];
      failures = [...failedTests];
    });

    it('should add all previous attempts from failed and passed tests', () => {
      addRetryFailures(failures, passes);
      assert(failures.length === 5);
      assert(passes.length === 1);
    });

    it('should only add previous attempts from passed tests', () => {
      failures = [];
      addRetryFailures(failures, passes);
      assert(failures.length === 2);
      assert(passes.length === 1);
    });

    it('should only add previous attempts from failed tests', () => {
      passes = [];
      addRetryFailures(failures, passes);
      assert(failures.length === 3);
      assert(passes.length === 0);
    });

    it('should not add previous attempts if test passed in single attempt', () => {
      failures = [];
      passes[0].prevAttempts = [];
      addRetryFailures(failures, passes);
      assert(failures.length === 0);
      assert(passes.length === 1);
    });

    it('should add missing properties', () => {
      passes = [...passedTestsWithMissingProps];
      failures = [...failedTestWithMissingProps];
      addRetryFailures(failures, passes);
      assert(failures.length === 5);
      assert(passes.length === 1);
      assert(failures[0].context !== undefined);
      assert(failures[1].duration !== undefined);
      assert(failures[2].fullTitle !== undefined);
      assert(failures[3].parent !== undefined);
      assert(failures[4].title !== undefined);
    })
  })
});
