var _ = require('lodash');

var reduces = function(orders) {
  var result = []
  total = 0;
  orders = _.groupBy(orders, 'article');
  _.forEach(orders, function (item, key) {
    key = parseInt(key);
    total = 0;
    if (item.length ===1) {
      total = item[0].quantity;
} else {
  total = _.reduce(item, function(sum, item) {
    return sum + item.quantity;
}, 0);
}
result.push({
	article: key,
	total_orders: total
});
});
result = _.sortBy(result, "total_orders").reverse();
return result;
};

module.exports = reduces
