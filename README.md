# mocha-elk-reporter
A simple custom mocha reporter that sends Mocha Test results to Elastic search.

## Purpose

 - Sending test results to Elastic Search helps collect test results over a period of time/multime runs. 
 - With Kibana within the complete stack ofElastic Search, LogStash and Kibana, one can create different visualizations to better understand the trends for test results.
 - This helps not only to get visibility to the team but also helps better understand and improve the reliability, speed etc. of the tests.

To learn more about ELK (Elastic Search, LogStash, Kibana). Click Here.

## Usage

To use mocha-elk-reporter, add it as a 'devDependency' in your project

```shell
npm install --save-dev mocha-elk-reporter
```

Update the config to your instance of Elastic Search
If you want to use LogStash to manage your log events for your tests update the

config.logstash = 'your instance of logstash API host or ip'

If you want to use Elastic Search to manage your events for test results update the

config.elasticSearch = 'your instance of Elastic Search API or ip'

Update the config.indexName to your desired indexName

Mocha by default supports different kind of reporters like spec, json, etc.
You can use this reporter similar to any other reporter by passing in additional command line arguments when running the tests using mocha. i.e.

'--reporter mocha-elk-reporter'

After you execute a test with additional parameters, you should now see data coming into your instance of ELK.

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

