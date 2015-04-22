var auth = require('./auth'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    users = require('../controllers/users');

module.exports = function(app){
  //  Users resource
  app.get('/api/users', auth.requiresApiLogin, users.getUsers);
  app.post('/api/users', users.createUser);
  // partials routes
  app.get('/partials/*', function(req, res){
    res.render('../../public/app/' + req.params[0]);
  });
  // login
  app.post('/login', auth.authenticate);
  app.post('/logout', function(req, res){
    req.logout();
    res.end();
  });

  // wildcard route
  // carefull to keep this wildcard at the end of the function.
  // if not it will execute before the specified resources
  app.get('*', function(req, res){
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
};
