'use strict';

var _ = require('lodash');
var Profile = require('./profile.model');

exports.showMovies = function(req, res) {
  Profile.findByUser(req.user)
    .populate('movies')
    .exec(function(err, profile) {
      if (err) { return handleError(res, err); }

      return res.json(profile.movies);
    });
};

exports.pinMovie = function(req, res) {
  var movieId = req.body.movieId;

  Profile.findByUser(req.user)
    .exec(function (err, profile) {
      if (err) { return next(err); }

      Profile.pinMovie(profile, movieId, function(err) {
        if (err) return next(err);

        res.send(200);
      });
    });
};

exports.unpinMovie = function(req, res) {
  var movieId = req.body.movieId;

  Profile.findByUser(req.user)
    .exec(function (err, profile) {
      if (err) return next(err);

      Profile.unpinMovie(profile, movieId, function(err) {
        if (err) return next(err);

        res.send(200);
      });
    });
};

function handleError(res, err) {
  return res.send(500, err);
}
