angular.module('app').controller('mvNavBarLoginCtrl',[ '$scope', '$http', 'mvIdentify', 'mvNotifier',
  function($scope, $http, mvIdentify, mvNotifier){
  $scope.signin = function(username, password){
    $http.post('/login', {username: username, password: password }).then(function(response){
      if (response.data.success){
        mvIdentify.currentUser = response.data.user;
        mvNotifier.notify('You have succesfully signed in!');
        console.log('logged in!');
      } else {
        mvNotifier.notify('username/password conbination incorrect');
        console.log('failed to log in!');
      }
    });
    console.log(username);
    console.log(password);
  };
}]);
