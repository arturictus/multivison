angular.module('app').controller('mvCourseListCtrl', [ '$scope', 'mvCourse', function($scope, mvCourse){
  $scope.courses = mvCourse.query();
}]);
