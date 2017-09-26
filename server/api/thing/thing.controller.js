/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Thing = require('./thing.model');

// Get list of things
exports.index = function(req, res) {
  Thing.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(things);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.status(404).send('Not Found'); }
    return res.json(thing);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Thing.create(req.body, function(err, thing) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(thing);
  });
};
exports.myupdate = function(req, res) {
  Thing.findByIdAndUpdate(req.params.id,{$set:{customer:req.body.values.customer,'status.start':req.body.values.status.start,'status.end':req.body.values.status.end}}, {new: true}, function (err, Thing) {
    if (err) { return  res.send(500, err);
      console.log("err"+err);}
    if(!Thing) { return res.send(404); }
    return res.json(200,Thing);
  });
};
exports.myoldupdate = function(req, res) {
  console.log("coming in new update");

  Thing.findByIdAndUpdate(req.params.id,{$set:{customer:null,'status.start':null,'status.end':null}}, {new: true}, function (err, Thing) {
    if (err) { return  res.send(500, err);
      console.log("err"+err);}
    if(!Thing) { return res.send(404); }
    return res.json(200,Thing);
  });
};
// Updates an existing thing in the DB.
exports.update = function(req, res) {
  Thing.findByIdAndUpdate(req.params.id ,{$set:{'status.start':req.body.values.status.start,'status.end':req.body.values.status.end,customer:req.body.values.customer}}, {new: true}, function (err, Thing) {
    if (err) { return  res.send(500, err);
      console.log("err"+err);}
    if(!Thing) { return res.send(404); }
    return res.json(200,Thing);
  });
};
exports.checkout = function(req, res) {
  Thing.findByIdAndUpdate(req.params.id ,{$set:{'status.start':null,'status.end':null,customer:null}}, {new: true}, function (err, Thing) {
    if (err) { return  res.send(500, err);
      console.log("err"+err);}
    if(!Thing) { return res.send(404); }
    return res.json(200,Thing);
  });
};
// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Thing.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.status(404).send('Not Found'); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};
exports.getRequestShareByScope = function(req, res){
  var date = new Date(new Date()-30*24*60*60*1000);
  Logs.api.aggregate([
    {
      $match: {user_id: req.user._id, timestamp: {$gte: date}}
    },
    {
      $group: {_id: {scope: '$scope', statusCode: '$statusCode'}, count:{$sum: 1}}
    }
  ]).exec(function(err, result){
    if(err) { return handleError(res, err); }
    if(!result) { return res.send(404); }

    var stats = {};
    result.forEach(function(obj){
      if(stats[obj._id.scope]==undefined){
        stats[obj._id.scope]={};
        stats[obj._id.scope]['success']=0;
        stats[obj._id.scope]['fail']=0;
      }
      if(obj._id.statusCode>=200 && obj._id.statusCode<400)
        stats[obj._id.scope]['success'] += obj.count;
      else
        stats[obj._id.scope]['fail'] += obj.count;
    });

    var series = [], success_data=[],fail_data=[],categories=[];

    for(var scope in stats){
      categories.push(scope);
      success_data.push(stats[scope]['success']);
      fail_data.push(stats[scope]['fail']);
    }

    series = [{name: 'successfull', data: success_data}, {name: 'failed', data: fail_data}];

    return res.json({categories: categories, series: series});
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
