var _ = require('lodash');

var chained = function(words) {
  return _.chain(words)
    .sortBy()
    .map(function(word){
      return _.toUpper(word) + "CHAINED";
    })
};

module.exports = chained
