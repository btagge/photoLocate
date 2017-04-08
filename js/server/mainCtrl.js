var locations = require('./locations.js');

module.exports = {
    getLocations: function(req, res, next) {
        res.status(200).json(locations);
    },
    postLocation: function(req, res, next) {
        locations.push(req.body);
        res.status(200).json(locations);
    }
};
