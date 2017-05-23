var db = require('../db');
var bcrypt = require('bcrypt');

module.exports = {
  tours: {
    getAll: function(callback) {
      // fetch all tours for main page (most recent 6)
      var queryStr = 'SELECT * FROM Tours';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    getOne: function(id, callback) {
      var queryStr = 'SELECT * FROM Tours WHERE id=' + id;
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      // create a tour for a userid for a given username
      console.log('params in tour module post', params);
      var queryStr = 'INSERT INTO Tours SET ?'
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    check: function(params, callback) {
      console.log('inside models/users/get', params);
      var username = params.username;
      var password = params.password;

      var queryStr = 'SELECT password FROM Users WHERE username="' + username +'"';
      db.query(queryStr, function(err, data) {
        console.log('this is err and data', err, data);
        if (data.length > 0) {
          console.log('this is err and data', err, data);
          console.log('inside query', data[0].password);
          if (err) {
            console.error(err);
          } else if (data[0].password.length === 0) {
            callback(err, '404');
          } else {
            bcrypt.compare(password, data[0].password, function(err, match) {
              console.log('inside bcrypt', match);
              callback(err, match);
            });
          }
        } else {
          callback('this user doesnt exist', '404'); 
        }
      });
    },
    post: function(params, callback) {
      var username = params.username;
      var password = params.password;
      console.log('models/post', password);
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          console.log('hash', hash);
          var queryStr = 'INSERT INTO Users SET ?';
          console.log('qs', queryStr);
          db.query(queryStr, {username: username, password: hash}, function(err, result) {
            console.log('models/post/query', hash, result);
            callback(err, result);
          });
        });
      });
    },
    get: function(username, callback) {
      var queryStr = 'SELECT * FROM Users WHERE username="' + username + '"';
      db.query(queryStr, function(err, user) {
        console.log('user', user);
        callback(err, user);
      });
    }
  },
  reviews: {}
}
