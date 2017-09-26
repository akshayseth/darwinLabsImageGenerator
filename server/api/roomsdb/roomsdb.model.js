'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoomsdbSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  duration:Number,
  rate:Number,
  taxes:Array,
  room:Number,
  start:Date,
  end:Date
});

module.exports = mongoose.model('Roomsdb', RoomsdbSchema);
