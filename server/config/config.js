var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://panach:multivision@ds039351.mongolab.com:39351/multivision_tutorial',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};
