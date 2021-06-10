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

const failedTestWithMissingProps = [
  {
    status: 'Failed',
    title: '[uuid:template-test-00003] Failed Test data from reporter',
    fullTitle: function() {
      return this.titlePath().join(' ');
    },
    titlePath: function() {
      return this.parent.titlePath().concat([this.title]);
    },
    duration: 8673,
    parent : {
      title: 'Describe block title',
      titlePath: function() {
        var result = [];
        if (this.parent) {
          result = result.concat(this.parent.titlePath());
        }
        if (!this.root) {
          result.push(this.title);
        }
        return result;
      }
    },
    err: {
      stack: 'Sample Failed stack',
      message: 'Sample failed message'
    },
    platform: 'chromeEmulator',
    browser: 'chrome',
    server: 'jenkins',
    context: {
      title: '[uuid:template-test-00003] Failed Test data from reporter',
      value: {
        shopper: 'test shopper id'
      }
    },
    prevAttempts: [
      {
        status: 'Failed',
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

const passedTestsWithMissingProps = [
  {
    status: 'passed',
    title: '[uuid:template-test-00001] Passed Test data from reporter',
    fullTitle: 'Unit Test - [uuid:template-test-00001] Passed Test data from reporter',
    duration: 8673,
    err: {},
    platform: 'chromeEmulator',
    browser: 'chrome',
    server: 'jenkins',
    fullTitle: function() {
      return this.titlePath().join(' ');
    },
    titlePath: function() {
      return this.parent.titlePath().concat([this.title]);
    },
    parent : {
      title: 'Describe block title',
      titlePath: function() {
        var result = [];
        if (this.parent) {
          result = result.concat(this.parent.titlePath());
        }
        if (!this.root) {
          result.push(this.title);
        }
        return result;
      }
    },
    prevAttempts: [
      {
        status: 'Failed',
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
  failedTests,
  failedTestWithMissingProps,
  passedTestsWithMissingProps
};