'use strict';

var _ = require('lodash');
var Roomsdb = require('./roomsdb.model');

// Get list of roomsdbs
exports.index = function(req, res) {
  Roomsdb.find(function (err, roomsdbs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(roomsdbs);
  });
};

// Get a single roomsdb
exports.show = function(req, res) {
  Roomsdb.findById(req.params.id, function (err, roomsdb) {
    if(err) { return handleError(res, err); }
    if(!roomsdb) { return res.status(404).send('Not Found'); }
    return res.json(roomsdb);
  });
};

// Creates a new roomsdb in the DB.
exports.create = function(req, res) {
  console.log("value which is coming is");
  console.log(req.body);
  Roomsdb.create(req.body, function(err, roomsdb) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(roomsdb);
  });
};

// Updates an existing roomsdb in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Roomsdb.findById(req.params.id, function (err, roomsdb) {
    if (err) { return handleError(res, err); }
    if(!roomsdb) { return res.status(404).send('Not Found'); }
    var updated = _.merge(roomsdb, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(roomsdb);
    });
  });
};

// Deletes a roomsdb from the DB.
exports.destroy = function(req, res) {
  Roomsdb.findById(req.params.id, function (err, roomsdb) {
    if(err) { return handleError(res, err); }
    if(!roomsdb) { return res.status(404).send('Not Found'); }
    roomsdb.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
