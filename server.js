var express = require('express'),
  stylus = require('stylus'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// stylus compile
function compile(str, path) {
  return stylus(str).set('filename', path);
}

// views
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/multivision');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
  console.log('multivision db opened');
});

// var messageSchema = mongoose.schema();
var Message = mongoose.model('Message', { message: String });
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
  mongoMessage = messageDoc.message;
});

// partials routes
app.get('/partials/:partialPath', function(req, res){
  res.render('partials/' + req.params.partialPath);
});
// wildcard route
app.get('*', function(req, res){
  res.render('index', {
    mongoMessage: mongoMessage
  });
});

// server
var port = 3030;
app.listen(port);
console.log('listening on port' + port + '...');
