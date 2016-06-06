

var http= require('http'); //fs = require('fs');
var WorldDomination = require('./module/WorldDomination');
var GoodbyeWorld = require('./module/GoodbyeWorld');

// fs.readFile('img.jpg', function(err, data) {
  // if (err) throw err;


http.createServer(function (req,res) {
  console.log("bionic bird created again");
  res.writeHead(200);//, {'Content-Type':'image/jpeg'});
  res.write('bionic bird chirps');
  res.write(WorldDomination());
  res.write(GoodbyeWorld());

  res.end();//data
}).listen(3000);
// var http= require('http'), fs = require('fs');
// // var WorldDomination = require('./module/WorldDomination');
// // var GoodbyeWorld = require('./module/GoodbyeWorld');
//
// fs.readFile('img.jpg', function(err, data) {
//   if (err) throw err;
//
//
// http.createServer(function (req,res) {
//   console.log("bionic bird created");
//   res.writeHead(200, {'Content-Type':'image/jpeg'});
//   // res.write('bionic bird chirps');
//   // res.write(WorldDomination());
//   // res.write(GoodbyeWorld());
//
//   res.end(data);//data
// }).listen(3000);
// });
// });
