// server.js

// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(methodOverride());

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");



var LEVELS = [
  {
    appTitle: 'Coding Languages',
    words: [
      {name:"java", percent:55},
      {name:"angularjs", percent:30},
      {name:"python", percent:10}
    ]
  },{
    appTitle: 'Vegetables',
    words: [
      {name:"potato", percent:25},
      {name:"carrot", percent:25},
      {name:"cabbage", percent:25},
      {name:"leek", percent:25}
    ]
  },{
    appTitle: 'Car make',
    words: [
      {name:"vw", percent:35},
      {name:"ford", percent:19},
      {name:"ferrafi", percent:23}
    ]
  }
]

app.get('/api/game/level/:levelNumber', function(req,res,next) {

  var level = LEVELS[parseInt(req.params.levelNumber)]
  if (level) return res.json(level)

  res.status(404).send()
})

/*app.get("/api/game/level/:levelNumber", function(res, req) {
  //console.log(req.params.levelNumber)
})*/
