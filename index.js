
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

var yelpcontroller = require('./controller/yelpcontroller');

app.use('/yelp', yelpcontroller)

app.listen(3000, function () {
    console.log('App is listening on 3000.')
})
