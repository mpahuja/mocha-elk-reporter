'use strict';

var postDataToElastic = require('../src/elastic-search');
var sampleData = require('./data/sample-results');

describe('Should be able to ', function() {
  it ('send test results data using helper to Elastic Search', function () {
    postDataToElastic(sampleData.sampleResults);
  });
});