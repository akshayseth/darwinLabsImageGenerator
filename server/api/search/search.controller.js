'use strict';

var _ = require('lodash');
var Search = require('./search.model');
const Scraper = require ('images-scraper');
var google = new Scraper.Google();
var url = require("url");
var path = require("path");
var https = require('https');
var http = require('http');
var fs = require('fs');
var async=require('async');
var Jimp = require("jimp");
var replaceExt = require('replace-ext');
var util=require('util');
// Get list of searchs
var urls=[];
exports.index = function(req, res) {
  //console.log("this is the api");
  //console.log(req.query.user_details);
  google.list({
    keyword: req.query.search_key+'.jpg',
    num: 15,
    detail: true,
    nightmare: {
        show: false
    }
})
.then(function (result) {
    ////////console.log('first 15 results from google', result);
    var download = function(url, dest, cb) {
      var ext=path.extname(dest);
      if(ext!='.jpg'){
       dest=replaceExt(dest, '.jpg');
      }
      if(dest.indexOf('.jpg')==-1 && dest.indexOf('.png')==-1 ){
        dest=dest+'.jpg';
      }
      //console.log(path.extname(dest));
      var file = fs.createWriteStream(dest);
      //////console.log(url)
      if(url.indexOf('https')!=-1){
        ////console.log("https")
        var request = https.get(url, function(response) {
        response.pipe(file);
        file.on('finish', function() {
          Jimp.read(dest).then(function (lennaa) {
            lennaa.resize(256, 256)            // resize
              .quality(90)                 // set JPEG quality
              .greyscale()                 // set greyscale
              .write(dest); // save
          }).catch(function (err) {
            //console.error(err);
          });
          file.close(cb);  // close() is async, call cb after close completes.
        });
      }).on('error', function(err) { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        if (cb) cb(err.message);
      });
      }
      else{
        ////console.log("http")
        var request = http.get(url, function(response) {
        response.pipe(file);
        file.on('finish', function() {
          Jimp.read(dest).then(function (lenna) {
            lenna.resize(256, 256)            // resize
              .quality(60)                 // set JPEG quality
              .greyscale()                 // set greyscale
              .write(dest); // save
          }).catch(function (err) {
           //console.error(err);
          });
          file.close(cb);  // close() is async, call cb after close completes.
        });
      }).on('error', function(err) { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        if (cb) cb(err.message);
      });
      }
    };
    var urls=[];
  var county=0;
    for(var i=0;i<result.length;i++){
      var name=new Date().getTime()+county+'.jpg';
      county=county+10;
        urls.push({"url":result[i].url,"name":name});
    }
   //console.log(urls);
    async.eachSeries(urls,function(one_url,callback){
       download(one_url.url,"server/uploads/"+one_url.name,function(stat){
        ////////console.log("saved");
         callback();
   });
    },function(data){
      var obj={
        "user_id":req.query.user_details,
        "url_details":urls,
        "search_key":req.query.search_key
      }
      Search.create(obj, function(err, search) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(urls);
      });
    });
     ////////console.log("exiting now...")
}).catch(function(err) {
    ////console.log('err', err);
});

// you can also watch on events
google.on('result', function (item) {
  ////////console.log("ending..........");
    ////////console.log('out', item);
});
 /* Search.find(function (err, searchs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(searchs);
  });*/
};

// Get a single search
exports.mycustomsearch = function(req, res) {
  //console.log("hit arrived v5");
  //console.log(req.query.id);
  Search.find({"user_id":req.query.id}, function (err, searchs) {
    if(err) { //console.log(err);
      return handleError(res, err); }
    if(!searchs) { return res.status(404).send('Not Found'); }
    return res.json(searchs);
  });
};

// Creates a new search in the DB.
exports.create = function(req, res) {
  Search.create(req.body, function(err, search) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(search);
  });
};

// Updates an existing search in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Search.findById(req.params.id, function (err, search) {
    if (err) { return handleError(res, err); }
    if(!search) { return res.status(404).send('Not Found'); }
    var updated = _.merge(search, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(search);
    });
  });
};

// Deletes a search from the DB.
exports.destroy = function(req, res) {
  Search.findById(req.params.id, function (err, search) {
    if(err) { return handleError(res, err); }
    if(!search) { return res.status(404).send('Not Found'); }
    search.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
