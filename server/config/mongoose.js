var mongoose = require('mongoose');

module.exports = function(config){
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback(){
    console.log('multivision db opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String
    // email: String,
    // password: String
  });

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection){
    if(collection.length === 0){
      User.create({firstName: 'John', lastName: 'Doe', userName: 'john'}),
      User.create({firstName: 'John', lastName: 'Hendricks', userName: 'jdricks'}),
      User.create({firstName: 'Art', lastName: 'Pañach', userName: 'Arti'})
    }
  });
};
