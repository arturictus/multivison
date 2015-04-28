angular.module('app').factory('mvCourse',[ '$resource', function($resource){
  var courseResource = $resource('/api/courses/:id', { _id: '@id' }, {
    update: { method: 'PUT', isArray: false }
  });
  return courseResource;
}]);
