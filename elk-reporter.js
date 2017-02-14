module.exports = {
  applicationName: "websitebuilder.vnext.ui_tests",
  elasticSearchHost: "pcdata.int.godaddy.com:9200",
  elasticSearchIndex: "vnext.ui_tests",
  extraParams: {
    gridNode: process.env.GRID_NODE,
    shopper: process.env.shopperId,
    allTags: process.env.TEST_TAGS,
    locale: process.env.LOCALE || 'en-US'
  }
};
