var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');

export default function middleware(app, express) {
  app.use(partials());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../public'));
  app.use(cookieParser('allyourcookiesarebelongtous'));
  app.use(session({
    secret: 'havefunwithlegacy!',
    resave: false,
    saveUninitialized: true
  }));
}
