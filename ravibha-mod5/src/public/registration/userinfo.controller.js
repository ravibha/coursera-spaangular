(function(){
  "use strict";

  angular.module('public')
  .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['CommonDataService', 'ApiPath'];
  function UserInfoController(CommonDataService, ApiPath) {
    var $ctrl = this;
    $ctrl.showSignupButton = false;
    $ctrl.basePath = ApiPath;    
    $ctrl.userInfo = CommonDataService.userInfo;

    if (!$ctrl.userInfo) {
      // User info has not been saved yet. So show the signup button
      $ctrl.showSignupButton = true;
    }
    else {

      console.log($ctrl.userInfo);
    }



  }
})();
