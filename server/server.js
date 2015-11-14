"use strict";

var express = require('express');
var app = express();

app.use(express.static(__dirname + './../webapp'));

app.listen(3000);

//var http = require('http');
/*var fs = require('fs');
var qs = require('querystring');*/
 
/*var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};*/
 
var PORT = 8181;
 
//Create a server
//var server = http.createServer(options, handleRequest);
 
//Start server
/*server.listen(PORT, function(){
  console.log("Server listening on: https://localhost:" + PORT);
});*/

app.listen(PORT, function() {
   console.log("App listening on: https://localhost:" + PORT);
 });

/*app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});*/


 
 /* serves main page */


 /* serves all the static files */
 /*app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendFile( __dirname + req.params[0]); 
 });*/

app.get("/setDashboard", function(req, res) { 
  console.log('write code here to fetch data to create the dahboard');
  var data = [
    {
      id: 1,
      title: 'card 1',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/first.jpg',
      likes: 20
    },{
      id: 2,
      title: 'card 2',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/second.jpg',
      likes: 10
    },{
      id: 3,
      title: 'card 3',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/third.jpg',
      likes: 0
    },{
      id: 4,
      title: 'card 4',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/first.jpg',
      likes: 20
    },{
      id: 5,
      title: 'card 5',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/second.jpg',
      likes: 10
    },{
      id: 6,
      title: 'card 6',
      desc: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
      imgSrc : './img/third.jpg',
      likes: 0
    }
  ];
  res.send(200, data);
});
 
 
 