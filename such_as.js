var _ = require('lodash');

var suchAs = function(towns) {

  var results = { warm: [], hot: [] };

  function warmCheck(temp) {
    return temp > 19;
  }

  _.forEach(towns, function(temps, name) {
    if (_.every(temps, warmCheck)) {
      results.hot.push(name);
    } else if (_.some(temps, warmCheck)) {
      results.warm.push(name);
    }
  });
  return results;
}

module.exports = suchAs
