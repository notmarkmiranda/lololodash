var _ = require("lodash");

var sort = function(articles) {
    return _.sortBy(articles, function(article) {
        return -article["quantity"];
    });
};

module.exports = sort;