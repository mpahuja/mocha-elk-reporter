module.exports = {
  applicationName: "your application name",
  // write to multiple instances of elasticSearch
  // elasticSearchHost: ["elk1:9200", "elk2:9200", "elk3:9200"],
  // write to load balancer on one elasticSearch server
  // elasticSearchHost: [["loadBalance1:9200, "loadBalance2:9200"]]
  // write to just one instance of elasticSearch and no load balancing
  elasticSearchHost: "elk:9200",
  elasticSearchIndex: "your-index-name",
  elasticSearchLogLevel: "trace",
  extraParams: {
    // Any Additional params you want to set
    locale: process.env.LOCALE || 'en-US'
  }
};
