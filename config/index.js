var config = {};
config.configFileName = "./elk-reporter.js";

/**
 * requiredParams against the version you have selected
 */
config.requiredParams = ["applicationName", "elasticSearchHost", "elasticSearchIndex"];

/**
 * You can override any of these params from your config file
 * Also, if you want you can add new params as well in your config
 * The additional params sent are a combination of extraParams (overridden or not) and extra params from your config file
 */

config.extraParams = {
  platform: process.env.TEST_PLATFORM || 'desktop',
  browser: process.env.TEST_BROWSER || 'chrome',
  server: process.env.TEST_SERVER,
  branch: process.env.BUILD_BRANCH,
  buildURL: process.env.BUILD_URL,
  buildVersion: process.env.BUILD_VERSION,
  workflow: process.env.WORKFLOW,
  workflowStep: process.env.WORKFLOW_STEP,
  environment: process.env.TEST_ENV || 'test',
  elasticsearchUsername: process.env.ELASTICSEARCH_USERNAME,
  elasticsearchPassword: process.env.ELASTICSEARCH_PASSWORD
};

module.exports = config;