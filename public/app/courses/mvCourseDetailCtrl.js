angular.module('app').controller('mvCourseDetailCtrl', ['$scope', 'mvCachedCourses', '$routeParams',
  function($scope, mvCachedCourses, $routeParams){
    $scope.course = mvCachedCourses.get({id: $routeParams.id});
  }
]);
