(function(){
  "use strict";

  angular.module('public')
  .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['CommonDataService'];
  function UserInfoController(CommonDataService) {
    var $ctrl = this;
    $ctrl.userInfo = {};
    $ctrl.userInfo = CommonDataService.userInfo;
    console.log($ctrl.userInfo);


  }
})();
