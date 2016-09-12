'use strict';

var async = require('async');
var supertest = require('supertest');
var config = require('../config/config');
var logstashApi = supertest(config.logstashHost);

module.exports = function postTestData(initialRequest,done) {
  var passedTestData = initialRequest.passes;
  var failedTestData = initialRequest.failures;
  var allTagsRegex = /\[(uuid:.*?)\]/g;
  var passedTestDataSize = Object.keys(passedTestData).length;
  var resultsArray = [];
  for (var arrayLength = 0; arrayLength < passedTestDataSize; arrayLength++ ) {
    resultsArray.push({
      "application_name": config.logstashIndex,
      "timestamp": new Date().getTime(),
      "content":
        Object.assign({ status: "passed",
          title: passedTestData[arrayLength].title,
          fullTitle: passedTestData[arrayLength].fullTitle,
          duration: passedTestData[arrayLength].duration / 1000,
          err: passedTestData[arrayLength].err,
          allTags: passedTestData[arrayLength].title.match(allTagsRegex)
        }, config.additionalParams)
      });
    }
  var failedTestDataSize = Object.keys(failedTestData).length;
  for (var arrayLength = 0; arrayLength < failedTestDataSize; arrayLength++ ) {
    resultsArray.push({
      "application_name": config.logstashIndex,
      "timestamp": new Date().getTime(),
      "content":
        Object.assign({ status: "failed",
           title: failedTestData[arrayLength].title,
           fullTitle: failedTestData[arrayLength].fullTitle,
           duration: failedTestData[arrayLength].duration / 1000,
           err: failedTestData[arrayLength].err,
           allTags: failedTestData[arrayLength].title.match(allTagsRegex)
         }, config.additionalParams)
      });
  }
  async.map(resultsArray, function (data, cb) {
    logstashApi.post('/')
      .set('Content-Type','application/json')
      .send(data)
      .end(cb);
  }, function (err, results) {
    done(err);
  })
};