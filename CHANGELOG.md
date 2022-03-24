# Changelog

## 3.0.0

- (breaking) `mocha` dependency has been bumped to `9.x`.
- (breaking) `elasticsearch` has been replaced with `@elastic/elasticsearch`. One behavioral change is that the new client no-longer logs any output, so if you are expecting to see information about storing things in Elasticsearch this will no longer happen. The other difference is that you must now provide elastic node as a URL. For example, if you were using a value like `elk.example.com:9200` before, you must now use something like `http://elk.example.com:9200`.
- (maybe breaking) `mochawesome` has been upgraded from 5.x to 7.x, so the output may be different after this upgrade.
- (fix) Vulnerabilities have been removed.
