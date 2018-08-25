var elasticsearch = require('elasticsearch');
var defaultConfig = require('../config');
var async = require('async');
var fetchParams = require('./config-utility').fetchParams;
var checkForRequiredParams = require('./config-utility').checkForRequiredParams;
var getExtraParams = require('./config-utility').getExtraParams;
var HighSeverityError = require('./high-severity-error');


module.exports = function sendTestResults(testResultsLog, done) {

  try {

    var repoConfig = fetchParams();
    var extraParams = getExtraParams(repoConfig);

    if(!checkForRequiredParams(repoConfig)) {
      throw new HighSeverityError("All Required Params not present in repoConfig file. The required params are: "
        + defaultConfig.requiredParams.join(", "));
    }

    var currentLogLevel = (repoConfig.elasticSearchLogLevel) ? repoConfig.elasticSearchLogLevel : 'error';

    var passedTestData = testResultsLog.passes;
    var passedTestDataSize = Object.keys(passedTestData).length;
    var resultsArray = [];
    var uuidRegex = /\[(uuid:.*?)\]/g;
    var timestamp = new Date().getTime();
    for (var arrayLength = 0; arrayLength < passedTestDataSize; arrayLength++ ) {
      resultsArray.push({
        "application_name": repoConfig.applicationName,
        "et": timestamp,
        "content":
        Object.assign({ status: "passed",
          title: passedTestData[arrayLength].title,
          appName: passedTestData[arrayLength].appName,             
          fullTitle: passedTestData[arrayLength].fullTitle,
          duration: passedTestData[arrayLength].duration / 1000,
          err: passedTestData[arrayLength].err,
          uuid: passedTestData[arrayLength].title.match(uuidRegex)
        }, extraParams)
      });
    }
    var failedTestData = testResultsLog.failures;
    var failedTestDataSize = Object.keys(failedTestData).length;
    for (var arrayLength = 0; arrayLength < failedTestDataSize; arrayLength++ ) {
      resultsArray.push({
        "application_name": repoConfig.applicationName,
        "et": timestamp,
        "content":
          Object.assign({ status: "failed",
            title: failedTestData[arrayLength].title,
            appName: failedTestData[arrayLength].appName,
            fullTitle: failedTestData[arrayLength].fullTitle,
            duration: failedTestData[arrayLength].duration / 1000,
            err: failedTestData[arrayLength].err,
            uuid: failedTestData[arrayLength].title.match(uuidRegex)
        }, extraParams)
      });
    }

    var esClient = elasticsearch.Client({
      host: repoConfig.elasticSearchHost,
      log: currentLogLevel,
      requestTimeout: 1000
    });

    async.each(resultsArray, function (data, callback) {
      esClient.index({
        index: repoConfig.elasticSearchIndex,
        type: 'testLogs',
        body: data
      }, function(err) {
        if(err) {
          callback(err);
        } else {
          callback();
        }
      });
    }, function (err) {
      if(err) {
        done(err);
      } else {
        done();
      }
    });
  } catch (e) {
    done(e);
  }
};
