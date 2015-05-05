angular.module('app').controller('mvMainCtrl', ['$scope', 'mvCourse', 'mvCachedCourses', function($scope, mvCachedCourses){
  $scope.courses =  mvCachedCourses.query();
}]);
