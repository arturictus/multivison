
module.exports = function(app){
  // partials routes
  app.get('/partials/*', function(req, res){
    res.render('../../public/app/' + req.params[0]);
  });
  // wildcard route
  app.get('*', function(req, res){
    res.render('index');
  });

};
