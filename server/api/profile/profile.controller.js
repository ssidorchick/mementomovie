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

function handleError(res, err) {
  return res.send(500, err);
}
