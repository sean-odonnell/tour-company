var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var controller = require('./controllers');

var app = express();
var port = process.env.port || 1337;

app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));
app.use(cookieParser('allyourcookiesarebelongtous'));
app.use(session({
  secret: 'havefunwithlegacy!',
  resave: false,
  saveUninitialized: true
}));

var checkUser = function(req, res, next) {
  if (!req.session) {
    res.send('Not logged in');
  } else {
    next();
  }
};

var logOut = function(req, res) {
    req.session.destroy(function() {
    res.send();
  });
};

app.get('/tours', controller.tours.getAll);

app.get('/tours/:id', controller.tours.getOne);

app.post('/login', controller.users.getUserForLogin);

app.get('/users/:username', controller.users.getUserForPage);

app.post('/tours', checkUser, controller.tours.post);


app.get('/logout', logOut);

app.post('/signup', controller.users.post);



app.listen(port);

console.log('Listening on port ' + port + '...');





