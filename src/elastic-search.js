var elasticsearch = require('elasticsearch');
var config = require('../config/config');
var async = require('async');

module.exports = function sendTestResults(testResultsLog, done) {
  var passedTestData = testResultsLog.passes;
  var passedTestDataSize = Object.keys(passedTestData).length;
  var resultsArray = [];
  var allTagsRegex = /\[(.*?)\]/g;
  for (var arrayLength = 0; arrayLength < passedTestDataSize; arrayLength++ ) {
    resultsArray.push({
      "et": new Date().toISOString(),
      "content":
      Object.assign({ status: "passed",
        title: passedTestData[arrayLength].title,
        fullTitle: passedTestData[arrayLength].fullTitle,
        duration: passedTestData[arrayLength].duration / 1000,
        err: passedTestData[arrayLength].err,
        allTags: passedTestData[arrayLength].title.match(allTagsRegex)
        //allTags: passedTestData[arrayLength].title.replace(/\:\s\w*|(\s\w*)|\@/g, '').split(',')
      }, config.additionalParams)
    });
  }
  var failedTestData = testResultsLog.failures;
  var failedTestDataSize = Object.keys(failedTestData).length;
  for (var arrayLength = 0; arrayLength < failedTestDataSize; arrayLength++ ) {
    resultsArray.push({
      "et": new Date().toISOString(),
      "content":
        Object.assign({ status: "failed",
          title: failedTestData[arrayLength].title,
          fullTitle: failedTestData[arrayLength].fullTitle,
          duration: failedTestData[arrayLength].duration / 1000,
          err: failedTestData[arrayLength].err,
          allTags: failedTestData[arrayLength].title.match(allTagsRegex)
          //allTags: failedTestData[arrayLength].title.replace(/\:\s\w*|(\s\w*)|\@/g, '').split(',')
      }, config.additionalParams)
    });
  }

  var esClient = elasticsearch.Client({
    host: config.elasticSearchHost,
    log: 'trace',
    requestTimeout: 1000
  });

  async.each(resultsArray, function (data, callback) {
    esClient.create({
      index: config.esIndex,
      type: 'testLogs',
      body: data
    }, function (err, response) {
      done(err)
    });
  })
};