angular.module('app').controller('mvNavBarLoginCtrl',
  [ '$scope', '$http', 'mvIdentify', 'mvNotifier', 'mvAuth', '$location',
  function($scope, $http, mvIdentify, mvNotifier, mvAuth, $location){
    $scope.identity = mvIdentify;
    $scope.signin = function(username, password){
      mvAuth.authenticateUser(username, password).then(function(success){
        if (success){
          mvNotifier.notify('You have succesfully signed in!');
        } else {
          mvNotifier.error('username/password conbination incorrect');
        }
      });
    };

    $scope.signout = function(){
      mvAuth.logoutUser().then(function(success){
        $scope.username = '';
        $scope.password = '';
        mvNotifier.notify('successfully logged out.');
        $location.path('/');
      });
    };
}]);
