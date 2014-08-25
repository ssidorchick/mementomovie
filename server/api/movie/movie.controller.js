'use strict';

var _ = require('lodash');
var Movie = require('./movie.model');

// Get list of movies
exports.index = function(req, res) {
  Movie.find(
      {},
      { '_id': 1, 'name': 1, 'theatrical_release_date': 1, 'square_image': 1 },
      { limit: 50 },
      function (err, movies) {
        if (err) { return handleError(res, err); }
        return res.json(200, movies);
  });
};

// Get a single movie
exports.show = function(req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    if (err) { return handleError(res, err); }
    if (!movie) { return res.send(404); }
    return res.json(movie);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
