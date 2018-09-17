
const isObject = require('lodash/isObject');
const isEmpty = require('lodash/isEmpty');

function _isValidContext(ctx) {
  /*
   * Context is valid if any of the following are true:
   * 1. Type is string and it is not empty
   * 2. Type is object and it has properties `value`
   */
  if (!ctx) return false;
  return ((typeof ctx === 'string') && !isEmpty(ctx))
    || (Object.hasOwnProperty.call(ctx, 'value'));
}

const addContext = function (...args) {

    // Check args to see if we should bother continuing
    if ((args.length !== 2) || !isObject(args[0])) {
      console.log("** ERROR ** addContext: invalid arguments. must be in this format: addContext(this, {value: { myKey: \"myValue\" }}); ");
      return;
    }
    const ctx = args[1];

    // Ensure that context meets the requirements
    if (!_isValidContext(ctx)) {
      console.log("** ERROR ** addContext: invalid context. must be in this format: addContext(this, {value: { myKey: \"myValue\" }}); ");
      return;
    }

    const test = args[0].currentTest || args[0].test;

    if (!test) {
      console.log("** ERROR ** no test object found"); 
      return;
    }

    test.context = ctx;
  }

module.exports = addContext;