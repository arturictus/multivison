angular.module('app').controller('mvProfileCtrl',[ '$scope', 'mvAuth', 'mvIdentity', 'mvNotifier',
  function($scope, mvAuth, mvIdentity, mvNotifier){
    $scope.email = mvIdentity.currentUser.userName;
    $scope.fname = mvIdentity.currentUser.firstName;
    $scope.lname = mvIdentity.currentUser.lastName;
    $scope.update = function(){
      var userData = {
        userName: $scope.email,
        lastName: $scope.lname,
        firstName: $scope.fname
      };
      if ($scope.password && $scope.password.length > 0){
        userData.password = $scope.password;
      }
      mvAuth.updateCurrentUser(userData).then(function(){
        mvNotifier.notify('Profile updated successfully!');
        $location.path('/');
      }, function(reason){
        mvNotifier.error(reason);
      });
    };
  }
]);
