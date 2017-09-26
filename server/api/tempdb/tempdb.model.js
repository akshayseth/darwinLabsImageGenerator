'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TempdbSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  extraBed:Number,
  rate:Number,
  taxes:Array
});

module.exports = mongoose.model('Tempdb', TempdbSchema);
