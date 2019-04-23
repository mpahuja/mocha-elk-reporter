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
    var elasticsearchUsername = extraParams.elasticsearchUsername
    var elasticsearchPassword = extraParams.elasticsearchPassword
    var elasticsearchCloudId = extraParams.elasticsearchCloudId
    delete extraParams.elasticsearchUsername
    delete extraParams.elasticsearchPassword
    delete extraParams.elasticsearchCloudId

    if (!checkForRequiredParams(repoConfig)) {
      throw new HighSeverityError("All Required Params not present in repoConfig file. The required params are: "
        + defaultConfig.requiredParams.join(", "));
    }

    var currentLogLevel = (repoConfig.elasticSearchLogLevel) ? repoConfig.elasticSearchLogLevel : 'error';
    var currentTimeout = (repoConfig.elasticSearchTimeout) ? repoConfig.elasticSearchTimeout : '10000';

    var passedTestData = testResultsLog.passes;
    var passedTestDataSize = Object.keys(passedTestData).length;
    var resultsArray = [];
    var uuidRegex = /\[(uuid:.*?)\]/g;
    var timestamp = new Date().toISOString();
    for (var arrayLength = 0; arrayLength < passedTestDataSize; arrayLength++) {

      let contextValues;
      if (passedTestData[arrayLength].context !== undefined) {
        if (passedTestData[arrayLength].context.value !== undefined) {
          contextValues = passedTestData[arrayLength].context.value;
        }
      }

      resultsArray.push({
        "application_name": repoConfig.applicationName,
        "et": timestamp,
        "content":
          Object.assign({
            status: "passed",
            title: passedTestData[arrayLength].title,
            fullTitle: passedTestData[arrayLength].fullTitle,
            duration: passedTestData[arrayLength].duration / 1000,
            err: passedTestData[arrayLength].err,
            uuid: passedTestData[arrayLength].title.match(uuidRegex)
          }, extraParams, contextValues)
      });
    }
    var failedTestData = testResultsLog.failures;
    var failedTestDataSize = Object.keys(failedTestData).length;
    for (var arrayLength = 0; arrayLength < failedTestDataSize; arrayLength++) {

      let contextValues;
      if (failedTestData[arrayLength].context !== undefined) {
        if (failedTestData[arrayLength].context.value !== undefined) {
          contextValues = failedTestData[arrayLength].context.value;
        }
      }

      resultsArray.push({
        "application_name": repoConfig.applicationName,
        "et": timestamp,
        "content":
          Object.assign({
            status: "failed",
            title: failedTestData[arrayLength].title,
            fullTitle: failedTestData[arrayLength].fullTitle,
            duration: failedTestData[arrayLength].duration / 1000,
            err: failedTestData[arrayLength].err,
            uuid: failedTestData[arrayLength].title.match(uuidRegex)
          }, extraParams, contextValues)
      });
    }

    var pendingTestData = testResultsLog.pending;
    var pendingTestDataSize = Object.keys(pendingTestData).length;
    for (var arrayLength = 0; arrayLength < pendingTestDataSize; arrayLength++) {

      let contextValues;
      if (pendingTestData[arrayLength].context !== undefined) {
        if (pendingTestData[arrayLength].context.value !== undefined) {
          contextValues = pendingTestData[arrayLength].context.value;
        }
      }

      resultsArray.push({
        "application_name": repoConfig.applicationName,
        "et": timestamp,
        "content":
          Object.assign({
            status: "pending",
            title: pendingTestData[arrayLength].title,
            fullTitle: pendingTestData[arrayLength].fullTitle,
            duration: pendingTestData[arrayLength].duration / 1000,
            err: pendingTestData[arrayLength].err,
            uuid: pendingTestData[arrayLength].title.match(uuidRegex)
          }, extraParams, contextValues)
      });
    }

    var hostname = repoConfig.elasticSearchHost
    if (!!elasticsearchUsername === true || !!elasticsearchPassword === true) {
      auth = `${elasticsearchUsername}:${elasticsearchPassword}@`
      // Override any username:password in the elasticSearchHost param
      hostname = `${auth}${hostname}`
    }

    if (elasticsearchCloudId) {
      var esClient = elasticsearch.Client({
        cloud: {
          id: elasticsearchCloudId,
          username: elasticsearchUsername,
          password: elasticsearchPassword
        }
      })
    } else {
      var esClient = elasticsearch.Client({
        host: hostname,
        log: currentLogLevel,
        requestTimeout: currentTimeout
      });
    }

    async.each(resultsArray, function (data, callback) {
      esClient.index({
        index: repoConfig.elasticSearchIndex,
        type: 'testLogs',
        body: data
      }, function (err) {
        if (err) {
          callback(err);
        } else {
          callback();
        }
      });
    }, function (err) {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
  } catch (e) {
    done(e);
  }
};
