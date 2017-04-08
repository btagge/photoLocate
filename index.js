var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var middleware = require('./middleware.js');
var mainCtrl = require('./js/server/mainCtrl.js');

app.use(middleware.addHeaders);
app.use(bodyParser.json());
app.use(express.static(__dirname))

app.get('/api/locations', mainCtrl.getLocations);
app.post('/api/locations', mainCtrl.postLocation);

var port = 8800;
app.listen(port, function() {
    console.log('All hands on ' + port);
});
