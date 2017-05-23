import controller from '../controllers';
import path from 'path';

var checkUser = function(req, res, next) {
  if (!req.session) {
    res.send('Not logged in');

  } else {
    next();
  }
};

var logOut = function(req, res) {
  console.log('inside logOut');
  req.session.destroy(function() {
    res.end();
  });
};

export default function routes(app, express) {
  app.get('/api/tours', controller.tours.getAll);
  app.get('/api/tours/:id', controller.tours.getOne);
  app.post('/api/tours', checkUser, controller.tours.post);
  
  app.get('/api/users/:username', controller.users.getUserForPage);
  app.get('/api/user/session', (req, res, next) => {
    res.end(req.session.user);
  });

  app.get('/auth/logout', logOut);
  app.post('/auth/login', controller.users.getUserForLogin);
  app.post('/auth/signup', controller.users.post);
  
  app.use('*', (req, res, next) => {
    console.log(req.session, req.session.user);
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
}
