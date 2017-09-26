'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var details=new Schema({
  name:String,
  age:Number,
  gender:String,
  group:String
});

var ThingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  room:Number,
  category:String,
  rate:Number,
  taxes:Object,
  extrabed:Number,
  status:{'end':Date,'start':Date},
  customer:[details]
});

module.exports = mongoose.model('Thing', ThingSchema);
