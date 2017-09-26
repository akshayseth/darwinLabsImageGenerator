'use strict';

var _ = require('lodash');
var Tempdb = require('./tempdb.model');

// Get list of tempdbs
exports.index = function(req, res) {
  Tempdb.find(function (err, tempdbs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(tempdbs);
  });
};

// Get a single tempdb
exports.show = function(req, res) {
  Tempdb.findById(req.params.id, function (err, tempdb) {
    if(err) { return handleError(res, err); }
    if(!tempdb) { return res.status(404).send('Not Found'); }
    return res.json(tempdb);
  });
};

// Creates a new tempdb in the DB.
exports.create = function(req, res) {
  Tempdb.create(req.body, function(err, tempdb) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(tempdb);
  });
};

// Updates an existing tempdb in the DB.
exports.update = function(req, res) {
  Tempdb.findByIdAndUpdate(req.params.id,{$set:{'name':req.body.values.name,'rate':req.body.values.rate,'extraBed':req.body.values.extraBed}}, {new: true}, function (err, tempdb) {
    if (err) { return  res.send(500, err);
      console.log("err"+err);}
    if(!tempdb) { return res.send(404); }
    return res.json(200,tempdb);
  });
};

// Deletes a tempdb from the DB.
exports.destroy = function(req, res) {
  console.log("coming in delete atleast");
  Tempdb.findById(req.params.id, function (err, tempdb) {
    if(err) { return handleError(res, err); }
    if(!tempdb) { return res.status(404).send('Not Found'); }
    tempdb.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
