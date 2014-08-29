'use strict';

var _ = require('lodash');
var Movie = require('./movie.model');
var Profile = require('../profile/profile.model');

exports.index = function(req, res) {
  Movie.find(
      {},
      { 'name': true, 'theatrical_release_date': true, 'square_image': true },
      function (err, movies) {
        if (err) { return handleError(res, err); }
        return res.json(200, movies);
  });
};

exports.pin = function(req, res) {
  var movieId = req.body.movieId;

  Profile.findByUser(req.user, function (err, profile) {
    if (err) return next(err);
    if (!profile) {
      profile = new Profile({ userId: req.user.id });
    }

    Profile.pinMovie(profile, movieId, function(err) {
      if (err) return next(err);

      res.send(200);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
