angular.module('app').factory('mvIdentify', function(){
  return {
    currentUser: undefined,
    isAuthenticated: function(){
        return !!this.currentUser;
    }
  }
});
