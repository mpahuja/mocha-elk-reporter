var sampleData = {};
sampleData.sampleResults = {
  "stats": {
    "suites": 1,
    "tests": 3,
    "passes": 1,
    "pending": 1,
    "failures": 1,
    "start": "2015-10-23T06:09:40.413Z",
    "end": "2015-10-23T06:09:56.049Z",
    "duration": 17356
  },
  "tests": [
    {
      "status": "Failed",
      "title": "[uuid:failed-test-00001] Failed Test data from reporter",
      "fullTitle": "Unit Test - [uuid:failed-test-00001] Failed Test data from reporter",
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
      "status": "pending",
      "title": "[uuid:pending-test-00001] Pending Test data from reporter",
      "fullTitle": "Unit Test - [uuid:pending-test-00001] Pending Test data from reporter",
      "duration": 0,
      "err": {},
      "platform": "chromeEmulator",
      "browser": "chrome",
      "server": "jenkins"
    },
    {
      "status": "passed",
      "title": "[uuid:passed-test-00001] Passed Test data from reporter",
      "fullTitle": "Unit Test - [uuid:passed-test-00001] Passed Test data from reporter",
      "duration": 8673,
      "err": {},
      "platform": "chromeEmulator",
      "browser": "chrome",
      "server": "jenkins"
    }
  ],
  "pending": [
     {
      "status": "pending",
      "title": "[uuid:pending-test-00001] Pending Test data from reporter",
      "fullTitle": "Unit Test - [uuid:pending-test-00001] Pending Test data from reporter",
      "duration": 8673,
      "err": {
        "stack": "Sample Failed stack",
        "message": "Sample failed message"
      },
      "platform": "chromeEmulator",
      "browser": "chrome",
      "server": "jenkins"
    }  ],
  "failures": [
    {
      "status": "Failed",
      "title": "[uuid:failed-test-00001] Failed Test data from reporter",
      "fullTitle": "Unit Test - [uuid:failed-test-00001] Failed Test data from reporter",
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
      "title": "[uuid:passsed-test-00001] Passed Test data from reporter",
      "fullTitle": "Unit Test - [uuid:passed-test-00001] Passed Test data from reporter",
      "duration": 8673,
      "err": {},
      "platform": "chromeEmulator",
      "browser": "chrome",
      "server": "jenkins"
    }
  ]
};
module.exports = sampleData;
