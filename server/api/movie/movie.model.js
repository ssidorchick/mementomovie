'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Promise = require('es6-promise').Promise,
    _ = require('lodash');

var MovieSchema = new Schema({
  name: String,
  pitch: String,
  description: String,
  theatrical_release_date: String,
  images: {
    w380: String,
    w600: String,
    w920: String
  },
  actors: Array,
  directors: Array,
  followingCount: { type: Number, default: 0 }
});

MovieSchema.statics.getFilters = function(cb) {
  var years = this.aggregate()
    .project({ year: { $substr: ['$theatrical_release_date', 0, 4] } })
    .group({ _id: '$year' })
    .match({ _id: { $ne: '9999' } })
    .sort('_id')
    .exec();

  var directors = this.aggregate()
    .unwind('directors')
    .group({ _id: '$directors', count: { $sum: 1 } })
    .sort('-count')
    .limit(12)
    .exec();

  var actors = this.aggregate()
    .unwind('actors')
    .group({ _id: '$actors', count: { $sum: 1 } })
    .sort('-count')
    .limit(12)
    // TODO: Investigate why _ids are not added to array.
    // Works in mongo shell. Possible bug in Mongoose.
    //.group({ _id: null, actors: { $push: '$_id' } })
    .exec();

  var p = Promise.all([years, directors, actors])
    .then(function(values) {
      return {
        year: _.pluck(values[0], '_id'),
        director: _.pluck(values[1], '_id'),
        actor: _.pluck(values[2], '_id')
      };
    });

  p.then(function(result) {
    cb(null, result);
  }, function(err) {
    cb(err);
  });
};

module.exports = mongoose.model('Movie', MovieSchema);
