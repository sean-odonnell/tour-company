var models = require('./models');

module.exports = {
  tours: {
    getAll: function(req, res) {
      models.tours.getAll(function(err, results) {
        if (err) {
          console.error(err);
        }
        res.send(results);
      });
    },
    getOne: function(req, res) {
      var TourId = req.params.id;
      models.tours.getOne(TourId, function(err, result) {
        if (err) {
          console.error(err);
        }
        res.json(result);
      });
    },
    post: function(req, res) {
      console.log('post req body', req.body);
      models.tours.post(req.body, function(err, results) {
        if (err) {
          console.error('err in post', err);
          res.status(501).end();
        }
        res.status(201).end();
      });
    }
  },
  users: {
    getUserForPage: function(req, res) {
      // return user object to load their personal dashboard page, with data added to database such as tours they've taken, booked, etc;
      var username = req.params.username;
      models.users.get(req.params.username, function(err, result) {
        if (err) {
          console.error(err);
          res.end();
        }
        else if (result[0]) {
          delete result[0].password;
          res.json(result);
        }  
      });
    },
    getUserForLogin: function(req, res) {
      models.users.check(req.body, function(err, result) {
        if (err) {
          console.error(err);
        }
        if (result === '404') {
          res.sendStatus(404);
        } else {
          req.session.regenerate(function() {
            req.session.user = req.body.username;
            res.send(result);
          });
        }
      });
    },
    post: function(req, res) {
      models.users.get(req.body.username, function(err, result) {
        if (result.length === 0) {
          models.users.post(req.body, function(err, result) {
            if (err) {
              console.error(err)
              res.sendStatus(501);
            } else {
              req.session.regenerate(function() {
                req.session.user = req.body.username;
                res.sendStatus(201);
              });
            }
          });
        } else {
          res.status(302).end('User already exists');
        }
      });
    }
  },
  reviews: {}
}
