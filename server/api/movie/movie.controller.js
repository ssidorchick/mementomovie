'use strict';

var _ = require('lodash');
var Movie = require('./movie.model');
require('mongoose-query-paginate');

exports.index = function(req, res) {
  var query = req.query;
  var paginationOptions = {
    page: query.page,
    perPage: query.perPage
  };

  var findOptions = {};
  if (query.year) {
    var reYear = query.year;
    // NOTE: Check for the latest release year and add paramter to query TBA movies.
    if (query.year === '2019') {
      reYear += '|' + 9999;
    }
    findOptions.theatrical_release_date = new RegExp(reYear);
  }
  if (query.director) {
    findOptions.directors = query.director;
  }
  if (query.actor) {
    findOptions.actors = query.actor;
  }

  Movie.find(findOptions)
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
