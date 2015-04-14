describe('mvIdentity', function(){
  beforeEach(module('app'));
  context('WHEN user is Logged AND Admin', function(){
    beforeEach(inject(function(mvIdentity, mvUser, $window){
      var user = new mvUser();
      user.roles = ['admin']
      $window.bootstrappedUserObject = user;
      mvIdentity.currentUser = user;
    }));
    describe('currentUser', function(){
      it('returns logged user', inject(function(mvIdentity, $window){
        expect(
          mvIdentity.currentUser
        ).to.equal($window.bootstrappedUserObject);
      }));
    });
    describe('isAuthenticated', function(){
      it('returns true', inject(function(mvIdentity){
        expect(
          mvIdentity.isAuthenticated
        ).to.truthy;
      }));
    });
    describe('isAuthorized', function(){
      it('returns true', inject(function(mvIdentity){
        expect(
          mvIdentity.isAuthorized('admin')
        ).to.truthy;
      }));
    });
  });
  context('WHEN user is NOT Logged', function(){
    beforeEach(inject(function(mvIdentity, mvUser, $window){
      var user = new mvUser();
      user.roles = ['admin']
      $window.bootstrappedUserObject = user;
      mvIdentity.currentUser = undefined;
    }));
    describe('currentUser', function(){
      it('returns logged user', inject(function(mvIdentity, $window){
        expect(
          mvIdentity.currentUser
        ).to.equal(undefined);
      }));
    });
    describe('isAuthenticated', function(){
      it('returns true', inject(function(mvIdentity){
        expect(
          mvIdentity.isAuthenticated
        ).to.falsey;
      }));
    });
    describe('isAuthorized', function(){
      it('returns true', inject(function(mvIdentity){
        expect(
          mvIdentity.isAuthorized('admin')
        ).to.falsey;
      }));
    });
  });

});
