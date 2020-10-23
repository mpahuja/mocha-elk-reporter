const passedTests = [
  {
    status: 'passed',
    title: '[uuid:template-test-00001] Passed Test data from reporter',
    fullTitle: 'Unit Test - [uuid:template-test-00001] Passed Test data from reporter',
    duration: 8673,
    err: {},
    platform: 'chromeEmulator',
    browser: 'chrome',
    server: 'jenkins',
    prevAttempts: [
      {
        status: 'Failed',
        title: '[uuid:template-test-00001] Failed Test data from reporter',
        fullTitle: 'Unit Test - [uuid:template-test-00001] Failed Test data from reporter',
        duration: 8673,
        err: {
          stack: 'Sample Failed stack',
          message: 'Sample failed message'
        },
        platform: 'chromeEmulator',
        browser: 'chrome',
        server: 'jenkins'
      },
      {
        status: 'Failed',
        title: '[uuid:template-test-00001] Failed Test data from reporter',
        fullTitle: 'Unit Test - [uuid:template-test-00001] Failed Test data from reporter',
        duration: 8673,
        err: {
          stack: 'Sample Failed stack',
          message: 'Sample failed message'
        },
        platform: 'chromeEmulator',
        browser: 'chrome',
        server: 'jenkins'
      }
    ]
  }
];

const failedTests = [
  {
    status: 'Failed',
    title: '[uuid:template-test-00002] Failed Test data from reporter',
    fullTitle: 'Unit Test - [uuid:template-test-00002] Failed Test data from reporter',
    duration: 8673,
    err: {
      stack: 'Sample Failed stack',
      message: 'Sample failed message'
    },
    platform: 'chromeEmulator',
    browser: 'chrome',
    server: 'jenkins',
    prevAttempts: [
      {
        status: 'Failed',
        title: '[uuid:template-test-00002] Failed Test data from reporter',
        fullTitle: 'Unit Test - [uuid:template-test-00002] Failed Test data from reporter',
        duration: 8673,
        err: {
          stack: 'Sample Failed stack',
          message: 'Sample failed message'
        },
        platform: 'chromeEmulator',
        browser: 'chrome',
        server: 'jenkins'
      },
      {
        status: 'Failed',
        title: '[uuid:template-test-00002] Failed Test data from reporter',
        fullTitle: 'Unit Test - [uuid:template-test-00002] Failed Test data from reporter',
        duration: 8673,
        err: {
          stack: 'Sample Failed stack',
          message: 'Sample failed message'
        },
        platform: 'chromeEmulator',
        browser: 'chrome',
        server: 'jenkins'
      }
    ]
  }
];

module.exports = {
  passedTests,
  failedTests
};