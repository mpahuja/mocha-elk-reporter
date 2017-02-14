var HighSeverityError = function(message) {
  this.message = message;
  this.severity = "high";
};
HighSeverityError.prototype = new Error();

module.exports = HighSeverityError;