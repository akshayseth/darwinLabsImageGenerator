'use strict';

var _ = require('lodash');
var Seasons = require('./seasons.model');

// Get list of seasonss
exports.index = function(req, res) {
  Seasons.find(function (err, seasonss) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(seasonss);
  });
};

// Get a single seasons
exports.show = function(req, res) {
  Seasons.findById(req.params.id, function (err, seasons) {
    if(err) { return handleError(res, err); }
    if(!seasons) { return res.status(404).send('Not Found'); }
    return res.json(seasons);
  });
};

// Creates a new seasons in the DB.
exports.create = function(req, res) {
  console.log("req.body is");
  console.log(req.body);
  Seasons.create(req.body, function(err, seasons) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(seasons);
  });
};

// Updates an existing seasons in the DB.
exports.update = function(req, res) {
  Seasons.findByIdAndUpdate(req.params.id,{$set:{'name':req.body.values.name,'start':req.body.values.start,'end':req.body.values.end,'hike':req.body.values.hike}}, {new: true}, function (err, seasons) {
    if (err) { return  res.send(500, err);
      console.log("err"+err);}
    if(!seasons) { return res.send(404); }
    return res.json(200,seasons);
  });
};

// Deletes a seasons from the DB.
exports.destroy = function(req, res) {
  Seasons.findById(req.params.id, function (err, seasons) {
    if(err) { return handleError(res, err); }
    if(!seasons) { return res.status(404).send('Not Found'); }
    seasons.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
