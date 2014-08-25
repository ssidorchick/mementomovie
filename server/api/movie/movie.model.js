'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name: String,
  theatrical_release_date: Date,
  square_image: {
    w380: String
  }
});

module.exports = mongoose.model('Movie', MovieSchema);
