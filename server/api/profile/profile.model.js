'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Movie = require('../movie/movie.model');

var ProfileSchema = new Schema({
  userId: Schema.Types.ObjectId,
  movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
});

ProfileSchema.statics.findByUser = function(user, cb) {
  return this.findOne({ userId: user.id });
};

ProfileSchema.statics.followMovie = function(profile, movieId, cb) {
  Movie.findByIdAndUpdate(movieId, { $inc: { followingCount: 1 } }, function(err, movie) {
    if (err) { return cb(err); }

    profile.movies.push(movie);
    profile.save(function(err) {
      cb(err);
    });
  });
};

ProfileSchema.statics.unfollowMovie = function(profile, movieId, cb) {
  Movie.findByIdAndUpdate(movieId, { $inc: { followingCount: -1 } }, function(err, movie) {
    if (err) { return cb(err); }
    if (!movie) { return; }

    profile.movies.remove(movie);
    profile.save(function(err) {
      cb(err);
    });
  });
};

module.exports = mongoose.model('Profile', ProfileSchema);
