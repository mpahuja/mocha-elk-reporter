module.exports = {
  applicationName: "your application name",
  elasticSearchHost: "http://elk:9200",
  elasticSearchIndex: "your-index-name",
  elasticSearchLogLevel: "trace",
  extraParams: {
    // Any Additional params you want to set
    locale: process.env.LOCALE || 'en-US'
  }
};
