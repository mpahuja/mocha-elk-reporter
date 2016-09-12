var sampleData = {};
sampleData.sampleResults = {
  "stats": {
    "suites": 1,
    "tests": 2,
    "passes": 1,
    "pending": 0,
    "failures": 1,
    "start": "2015-10-23T06:09:40.413Z",
    "end": "2015-10-23T06:09:56.049Z",
    "duration": 17356
  },
  "tests": [
    {
      "status": "Failed",
      "title": "@tut, @failed-test: Failed Test data from reporter",
      "fullTitle": "Unit Test - @tut: Failed Test data from reporter",
      "duration": 8673,
      "err": {
        "stack": "Sample Failed stack",
        "message": "Sample failed message"
      },
      "platform": "chromeEmulator",
      "browser": "chrome",
      "server": "jenkins"
    },
    {
      "status": "passed",
      "title": "@regression, @passed-test: Passed Test data from reporter",
      "fullTitle": "Unit Test - @regression: Passed Test data from reporter",
      "duration": 8673,
      "err": {},
      "platform": "chromeEmulator",
      "browser": "chrome",
      "server": "jenkins"
    }
  ],
  "pending": [],
  "failures": [
    {
      "status": "Failed",
      "title": "@tut, @failed-test: Failed Test data from reporter",
      "fullTitle": "Unit Test - @tut: Failed Test data from reporter",
      "duration": 8673,
      "err": {
        "stack": "Sample Failed stack",
        "message": "Sample failed message"
      },
      "platform": "chromeEmulator",
      "browser": "chrome",
      "server": "jenkins"
    }
  ],
  "passes": [
    {
      "status": "passed",
      "title": "@regression, @passed-test: Passed Test data from reporter",
      "fullTitle": "Unit Test - @regression: Passed Test data from reporter",
      "duration": 8673,
      "err": {},
      "platform": "chromeEmulator",
      "browser": "chrome",
      "server": "jenkins"
    }
  ]
};
module.exports = sampleData;