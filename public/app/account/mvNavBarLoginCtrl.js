angular.module('app').controller('mvNavBarLoginCtrl',[ '$scope', '$http', 'mvIdentify', 'mvNotifier', 'mvAuth',
  function($scope, $http, mvIdentify, mvNotifier, mvAuth){
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
}]);
