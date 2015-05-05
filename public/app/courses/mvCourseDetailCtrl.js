angular.module('app').controller('mvCourseDetailCtrl', ['$scope', 'mvCourse', '$routeParams',
  function($scope, mvCourse, $routeParams){
    $scope.course = mvCourse.get({id: $routeParams.id});
  }
]);
