'use strict';

const assert = require('assert');
const rewire = require('rewire');
let {
  passedTests: passes, 
  failedTests: failures
} = require('./data/passed-failed-tests');
const elkReporter = rewire('./../index.js');

describe('should be able to', () => {
  it('add previous attempts from failed and passed tests to failures', () => {
    const addRetryFailures = elkReporter.__get__('addRetryFailures');
    addRetryFailures(failures, passes);
    assert(failures.length === 5, 'Previous failure attempts not added to failures');
    assert(passes.length === 1, 'Previous failure attempts get added to failures');
  });
});
