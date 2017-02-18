module.exports = {
  applicationName: "your application name",
  elasticSearchHost: "your elastic search host:9200",
  elasticSearchIndex: "your index name",
  extraParams: {
    // Any Additional params you want to set
    locale: process.env.LOCALE || 'en-US'
  }
};
