'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SearchSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  user_id:String,
  url_details:Array,
  search_key:String
});

module.exports = mongoose.model('Search', SearchSchema);
