var _ = require("lodash");

var forEach = function(cities) {
    return _.forEach(cities, function(city) {
        if(city["population"] > 1){
            return city["size"] = "big";
        } else if (city["population"] > 0.5){
            return city["size"] = "med";
        } else {
            return city["size"] = "small";
        }
    });
};

module.exports = forEach;
