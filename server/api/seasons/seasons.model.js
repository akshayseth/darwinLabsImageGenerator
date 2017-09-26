'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SeasonsSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  hike:Number,
  start:Date,
  end:Date
});

module.exports = mongoose.model('Seasons', SeasonsSchema);
