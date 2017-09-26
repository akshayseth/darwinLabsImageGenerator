/*
 /!**
  * Populate DB with sample data on server start
  * to disable, edit config/environment/index.js, and set `seedDB: false`
  *!/

 'use strict';

 var Thing = require('../api/thing/thing.model');
 var User = require('../api/user/user.model');

 Thing.find({}).remove(function() {
   Thing.create({
     room:111,
     category:'Deluxe',
     rate:{peak:1000,summer:700,winter:800},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:200,
     status:{start:null,end:null}
   }, {
     room:112,
     category:'Deluxe',
     rate:{peak:2000,summer:1800,winter:1900},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:250,
     status:{start:null,end:null}
   }, {
      room:113,
     category:'Deluxe',
     rate:{peak:2500,summer:2200,winter:2000},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:250,
     status:{start:null,end:null}
   },  {
     room:114,
     category:'Deluxe',
     rate:{peak:2600,summer:2200,winter:2300},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:250,
     status:{start:null,end:null}
   },  {
      room:115,
     category:'SuperDeluxe',
     rate:{peak:3000,summer:2500,winter:2700},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:500,
     status:{start:null,end:null}
   },  {
     room:116,
     category:'SuperDeluxe',
     rate:{peak:3000,summer:2500,winter:1000},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:600,
     status:{start:null,end:null}
   },  {
     room:117,
     category:'SuperDeluxe',
     rate:{peak:2900,summer:3000,winter:2000},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:450,
     status:{start:null,end:null}
   },  {
     room:118,
     category:'SuperDeluxe',
     rate:{peak:25000,summer:2600,winter:2000},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:450,
     status:{start:null,end:null}
   },{
      room:119,
     category:'FamilySuite',
     rate:{peak:3500,summer:3200,winter:3000},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:450,
     status:{start:null,end:null}
   },  {
     room:120,
     category:'FamilySuite',
     rate:{peak:3200,summer:3000,winter:2800},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:500,
     status:{start:null,end:null}
   },  {
     room:121,
     category:'FamilySuite',
     rate:{peak:3300,summer:3100,winter:2900},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:500,
     status:{start:null,end:null}
   },  {
     room:122,
     category:'FamilySuite',
     rate:{peak:3200,summer:3300,winter:3000},
     taxes:{peak:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},summer:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}},winter:{serviceTax:{value:5.6,castax:{leisureTax:{value:7.8}}},leisureTax:{value:7.8}}},
     extraBed:450,
     status:{start:null,end:null}
   });
 });

 User.find({}).remove(function() {
   User.create({
     provider: 'local',
     name: 'Test User',
     email: 'test@test.com',
     password: 'test'
   }, {
     provider: 'local',
     role: 'admin',
     name: 'Admin',
     email: 'admin@admin.com',
     password: 'admin'
   }, function() {
       console.log('finished populating users');
     }
   );
 });
*/
