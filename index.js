var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
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

// Validate the Header
app.use(function (req, res, next) {
  if(!req.headers['gtw-sec-user-token']) {
    return res.status(400).send({ 
      code: 400, 
      message: 'Missing header: Gtw-Sec-User-Token' 
    });
  }

  if (!req.headers['gtw-transaction-id']) {
    return res.status(400).send({ 
      code: 400, 
      message: 'Missing header: Gtw-Transaction-Id' 
    });
  }

  console.log(req.headers['content-type']);

  // if (!req.headers['content-type'] || (req.headers['content-type'] !== 'application/json') ) {
  //   return res.status(400).send({ 
  //     code: 400, 
  //     message: 'Missing header: Content-Type = application/json' 
  //   });
  // }

  next();
});

//Routes 
var main = require('./routes/main');
app.use('/dev', main);

var login = require('./routes/login');
app.use('/dev/login', login);

var pesqinc = require('./routes/pesqinc');
app.use('/dev/pesqinc', pesqinc);

var packages = require('./routes/packages');
app.use('/dev/packages', packages);

var orders = require('./routes/orders');
app.use('/dev/orders', orders);

var hotels = require('./routes/hotels');
app.use('/dev/hotels', hotels);

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