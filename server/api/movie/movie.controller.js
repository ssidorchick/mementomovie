'use strict';

var _ = require('lodash');
var Movie = require('./movie.model');

exports.index = function(req, res) {
  Movie.find()
    .select('name theatrical_release_date images')
    .sort('theatrical_release_date')
    .exec(function (err, movies) {
      if (err) { return handleError(res, err); }
      return res.json(200, movies);
    });
};

function handleError(res, err) {
  return res.send(500, err);
}
