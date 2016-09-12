var config = {};
config.logstashHost = 'http://wsbmonitor.int.godaddy.com/api/externalLog/insert';
config.logstashIndex = 'websitebuilder.node_ui_tests';

config.elasticSearchHost = 'pcdata.int.godaddy.com:9200';
config.esIndex = 'vnext.ui_tests';
config.additionalParams =
{
	platform: process.env.TEST_PLATFORM || 'desktop',
	browser: process.env.TEST_BROWSER || 'chrome',
	server: process.env.TEST_SERVER,
	branch: process.env.BUILD_BRANCH,
	buildURL: process.env.BUILD_URL,
	buildVersion: process.env.BUILD_VERSION,
	workflow: process.env.WORKFLOW,
	workflowStep: process.env.WORKFLOW_STEP,
	environment: process.env.TEST_ENV,
	gridNode: process.env.GRID_NODE,
	shopper: process.env.shopperId
};

module.exports = config;