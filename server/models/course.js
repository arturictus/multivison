var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: { type:String, required: '{PATH} is reuired!'},
  featured: { type: Boolean, required: '{PATH} is reuired!'},
  published: { type: Date, required: '{PATH} is reuired!'},
  tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

exports.createDefaultCourses = function (){
  Course.find({}).exec(function(err, collection){
    if(collection.length == 0) {
      Course.create({title: 'title1', featured: false, published: new Date('12/11/2015')});
      Course.create({title: 'title2', featured: false, published: new Date('01/03/2014')});
      Course.create({title: 'title3', featured: false, published: new Date('21/01/2013')});
      Course.create({title: 'title4', featured: false, published: new Date('23/10/2016')});
      Course.create({title: 'title5', featured: false, published: new Date('18/09/2015')});
    }
  });
};
