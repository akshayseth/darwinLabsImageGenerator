'use strict';

var _ = require('lodash');
var GetImage = require('./getImage.model');
var Search = require('../search/search.model');
var fs = require('fs');
var path = require("path");
// Get list of getImages
exports.index = function(req, res) {
  console.log("index");
  console.log(req.query);
  console.log("create");
  console.log(req.body);
  var filename =req.query.urls;
  var filePath = "server/uploads/"+req.query.urls;
  var mimetype="image/jpeg";
  // var stat = fs.statSync(filePath);
  var fileToSend = fs.readFileSync(filePath);
  res.set('Content-Type', mimetype);
  //res.set('Content-Length', stat.size);
  res.set('Content-Disposition', filename);
  console.log(fileToSend)
  res.sendfile(path.resolve(filePath));
  /* GetImage.create(req.body, function(err, getImage) {
   if(err) { return handleError(res, err); }
   return res.status(201).json(getImage);
   });*/
 /* GetImage.find(function (err, getImages) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(getImages);
  });*/
};

// Get a single getImage
exports.show = function(req, res) {
  console.log("show");
  GetImage.findById(req.params.id, function (err, getImage) {
    if(err) { return handleError(res, err); }
    if(!getImage) { return res.status(404).send('Not Found'); }
    return res.json(getImage);
  });
};

// Creates a new getImage in the DB.
exports.create = function(req, res) {
  console.log("create");
  console.log(req.body);
  var filename =req.body.urls;
  var filePath = "server/uploads/"+req.body.urls;
  var mimetype="image/jpeg";
  // var stat = fs.statSync(filePath);
  var fileToSend = fs.readFileSync(filePath);
  res.set('Content-Type', mimetype);
  //res.set('Content-Length', stat.size);
  res.set('Content-Disposition', filename);
  console.log(fileToSend)
  res.sendfile(path.resolve(filePath));
 /* GetImage.create(req.body, function(err, getImage) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(getImage);
  });*/
};

// Updates an existing getImage in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  GetImage.findById(req.params.id, function (err, getImage) {
    if (err) { return handleError(res, err); }
    if(!getImage) { return res.status(404).send('Not Found'); }
    var updated = _.merge(getImage, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(getImage);
    });
  });
};

// Deletes a getImage from the DB.
exports.destroy = function(req, res) {
  GetImage.findById(req.params.id, function (err, getImage) {
    if(err) { return handleError(res, err); }
    if(!getImage) { return res.status(404).send('Not Found'); }
    getImage.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
