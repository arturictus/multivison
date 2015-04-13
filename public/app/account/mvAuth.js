angular.module('app').factory('mvAuth', [ '$http', 'mvIdentify', '$q', 'mvUser', function($http, mvIdentify, $q, mvUser){
  return {
    authenticateUser: function(username, password){
      var dfd = $q.defer();
      $http.post('/login', {username: username, password: password }).then(function(response){
        if (response.data.success){
          var user = new mvUser();
          angular.extend(user, response.data.user);
          mvIdentify.currentUser = user;
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },

    logoutUser: function(){
      var dfd = $q.defer();
      $http.post('/logout', {logout: true}).then(function(){
        mvIdentify.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    }
  };
}]);
