angular.module('app').factory('mvCachedCourses', ['mvCourse', function(mvCourse){
  var courseList;
    return {
      query: function(){
        if(!courseList){
          courseList = mvCourse.query();
        } else {
          return courseList;
        }
      }
    };
}]);
