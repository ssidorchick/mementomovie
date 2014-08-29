'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Movie = require('../movie/movie.model');

var ProfileSchema = new Schema({
  userId: Schema.Types.ObjectId,
  movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
});

ProfileSchema.statics.findByUser = function(user, cb) {
  return this.findOne({ userId: user.id }, cb);
};

ProfileSchema.statics.pinMovie = function(profile, movieId, cb) {
  Movie.findById(movieId, function(err, movie) {
    if (err) return cb(err);

    profile.movies.push(movie);
    profile.save(function(err) {
      return cb(err);
    });
  });
};

module.exports = mongoose.model('Profile', ProfileSchema);
