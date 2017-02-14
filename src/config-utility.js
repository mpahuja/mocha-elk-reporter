var path = require('path');
var fs = require('fs');
var config = require('../config');
var HighSeverityError = require('./high-severity-error');

var fetchParams = function() {
  console.log("Will try to load configuration from " + config.configFileName);
  var cwd = process.cwd();
  var fullPath = path.resolve(cwd, config.configFileName);

  // Check if config file exists file exists and can be accessed.
  try {
    fs.accessSync(fullPath);
  } catch(e) {
    throw new HighSeverityError(e.message);
  }
  return require(fullPath);
};

var checkForRequiredParams = function(repoConfig) {

  for(var i = 0; i < config.requiredParams.length ; i++) {
    var param = config.requiredParams[i];
    if(!(param in repoConfig)) {
      return false;
    }
  }
  return true;
};

var getExtraParams = function(repoConfig) {
  var allParams = {};
  // Priority is given to extraParams from the calling repo
  for (var repoParam in repoConfig.extraParams) { allParams[repoParam] = repoConfig.extraParams[repoParam]; }
  for (var defaultParam in config.extraParams) {
    if(!(defaultParam in allParams)){
      allParams[defaultParam] = config.extraParams[defaultParam];
    }
  }
  return allParams;
};


module.exports.fetchParams = fetchParams;
module.exports.checkForRequiredParams = checkForRequiredParams;
module.exports.getExtraParams = getExtraParams;