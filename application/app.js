var express = require('express')
var cors = require('cors');
var bodyparser = require('body-parser');

var routerbackend = express.Router();
var routerfrontend = express.Router();
var appbackend = express(); 
var appfrontend = express(); 

//frontend config

appfrontend.use(express.static(__dirname + '/views/'));
appfrontend.set('view engine', 'pug');
appfrontend.use(cors());

routerfrontend.get('/', function(req, res) {
	res.render("index");
});

appfrontend.use('/', routerfrontend);

appfrontend.listen(8099, function(){
});

// backend config
appbackend.use(cors());
appbackend.use(bodyparser.urlencoded({ extended: false}));
appbackend.use(bodyparser.json());

var routes = require('./routes')(routerbackend);

appbackend.use('/', routes);

appbackend.listen(8082, function(){
  console.log("Node.js docker management server  running %d port", 8082);
});