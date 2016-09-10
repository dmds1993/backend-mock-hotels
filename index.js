var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var logger      = require('morgan');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('port', (process.env.PORT || 5050));

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Request...');
  next();
});

//Routes 
var main = require('./routes/main');
app.use('/dev', main);

var packages = require('./routes/packages');
app.use('/dev/packages', packages);

// Set Error 
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function() {
  console.log('Mock Pacotes CVC is running on port', app.get('port'));
});