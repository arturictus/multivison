angular.module('app').controller('mvCourseDetailCtrl', ['$scope', 'mvCourse', '$routeParams',
  function($scope, mvCourse, $routeParams){
    return mvCourse.get({_id: $routeParams.id});
  }
]);
