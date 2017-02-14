'use strict';

var postDataToElastic = require('../src/elastic-search');
var sampleData = require('./data/sample-results');

describe('Should be able to ', function() {

  it ('send test results data using helper to Elastic Search', function (done) {
    process.env.GRID_NODE = '10.10.10.10';
    process.env.shopperId = 12345;
    process.env.TEST_TAGS = 'unit-tests';
    process.env.LOCALE = 'en-US';
    postDataToElastic(sampleData.sampleResults, done);
  });

});