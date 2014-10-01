'use strict';

var _ = require('lodash');
var Movie = require('./movie.model');
require('mongoose-query-paginate');

exports.index = function(req, res) {
  var paginationOptions = {
    page: req.query.page,
    perPage: req.query.perPage
  };

  Movie.find()
    .select('name theatrical_release_date images')
    .sort('theatrical_release_date')
    .paginate(paginationOptions, function(err, data) {
      if (err) { return handleError(res, err); }
      return res.json(200, data);
    });
};

exports.show = function (req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    if (err) { return handleError(res, err); }
    if (!movie) { return res.send(404); }
    return res.json(movie);
  });
};

exports.filters = function(req, res) {
  Movie.getFilters(function(err, filters) {
    if (err) { return handleError(res, err); }
    return res.json(filters);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
