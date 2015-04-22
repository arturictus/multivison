var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: { type: String, required: '{PATH} is required!' },
  lastName: { type: String, required: '{PATH} is required!' },
  userName: { type: String,
              required: '{PATH} is required!',
              unique: true
             },
  salt: { type: String, required: '{PATH} is required!' },
  hashed_password: { type: String, required: '{PATH} is required!' },
  roles: [String]
  // email: String,
});
userSchema.methods = {
  authenticate: function(password){
    return encrypt.hashPwd(this.salt, password) == this.hashed_password;
  },
  fullName: function(){
    return this.firstName+ ' ' + this.lastName;
  }
};

var User = mongoose.model('User', userSchema);

function createDefaultUsers(){
  User.find({}).exec(function(err, collection){
    if(collection.length === 0){
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'joe');
      User.create({firstName: 'John', lastName: 'Doe', userName: 'john', hashed_password: hash, salt: salt, roles: ['admin']}),
      User.create({firstName: 'John', lastName: 'Hendricks', userName: 'jdricks', hashed_password: hash, salt: salt, roles: []}),
      User.create({firstName: 'Art', lastName: 'Pañach', userName: 'Arti', hashed_password: hash, salt: salt})
    }
  });
}

exports.createDefaultUsers = createDefaultUsers;
