# mocha-elk-reporter
A simple custom mocha reporter that sends Mocha Test results to Elastic search.

## Purpose

 - Sending test results to Elastic Search helps collect test results over a period of time/multiple runs.
 - With Kibana you can create different visualizations to better understand the trends for test results.
 - This helps get better visibility, helps better measure reliability, understand cause of failures, measure speed etc. of the tests.


To learn more about ELK (Elastic Search, LogStash, Kibana). Click Here [https://www.elastic.co/products/kibana]

## Usage

To use mocha-elk-reporter, add it as a 'devDependency' in your project

```shell
npm install --save-dev mocha-elk-reporter
```

Add a elk-reporter.js file to your project for your Elastic search instance

```
module.exports = {
  applicationName: "application name to be sent in the content of the tests",
  elasticSearchHost: "host name with port for your elastic search instance e.g. my-elasticsearch.com:9200, 10.10.1.100:9200",
  elasticSearchIndex: "indexName"
}
```

Mocha by default supports different kind of reporters like spec, json, etc.
You can use this reporter similar to any other reporter by passing in additional command line arguments when running the tests using mocha. i.e.

'--reporter mocha-elk-reporter'

After you execute a test with additional parameters, you should now see data coming into your instance of ELK.

If there are issues with your configuration you should see appropriate logs associated with that

## Advance Usage

Until this issue is resolved and PR merged in.
If you want to use multiple reporters for your reporting needs e.g. spec, json, mocha-allure-reporter in conjunction with this reporter, you can do so with the help 'mocha multi' module.

To add that as a devDependency to your project

```shell
npm install --save-dev mocha-multi
```

Now you can run multiple reporters while running mocha tests uding this command

```shell
'multi="spec=- mocha-elk-reporter=-" mocha --reporter mocha-multi'
```

