const express = require('express');
const app = express();
const path = require('path');
const data = require('./public/data');


const mustacheExpress = require("mustache-express");

app.use(express.static('public'))

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.get( '/' , function(req, res) {


for (let i = 0; i < data.users.length; i++){
  if (data.users[i].company === null){
    (data.users[i].company = "Available for Hire");
    
  }
}

res.render('index', {"users": [

{ "avatar": data.users[0].avatar,
  "name": data.users[0].name,
  "company": data.users[0].company},
{ "avatar": data.users[1].avatar,
  "name": data.users[1].name,
  "company": data.users[1].company},
{ "avatar": data.users[2].avatar,
  "name": data.users[2].name,
  "company": data.users[2].company},
{ "avatar": data.users[3].avatar,
  "name": data.users[3].name,
  "company": data.users[3].company},
{ "avatar": data.users[4].avatar,
  "name": data.users[4].name,
  "company": data.users[4].company},
{ "avatar": data.users[5].avatar,
  "name": data.users[5].name,
  "company": data.users[5].company},
{ "avatar": data.users[6].avatar,
  "name": data.users[6].name,
  "company": data.users[6].company},
{ "avatar": data.users[7].avatar,
  "name": data.users[7].name,
  "company": data.users[7].company},
  ]})
});

app.listen(3002, function () {
  console.log('Successfully started express application!');
});