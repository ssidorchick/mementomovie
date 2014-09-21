'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name: String,
  pitch: String,
  description: String,
  theatrical_release_date: Date,
  images: {
    w380: String,
    w600: String,
    w920: String
  },
  actors: Array,
  directors: Array,
  followingCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Movie', MovieSchema);
