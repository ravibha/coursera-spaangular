(function(){
  "use strict";

  angular.module('public')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['MenuService', 'CommonDataService'];
  function RegistrationController(MenuService, CommonDataService) {
    var $ctrl = this;
    $ctrl.warningMessage = "";
    $ctrl.registrationCompleted = false;

    $ctrl.submit = function () {
      $ctrl.warningMessage = "";

      $ctrl.userInfo = {};
      CommonDataService.userInfo = $ctrl.user;
      var shortnameOfFavDish = $ctrl.user.favdish;

      var promise = MenuService.getMenuItemDetailByShortname(shortnameOfFavDish);

      promise.then(function(data){
          var data = data;
          // Save the information about the dish somewhere in the service
          CommonDataService.isUserSignedUp = true;
          CommonDataService.userInfo.favoriteDish = data;
          $ctrl.registrationCompleted = true;
      }, function(error){
          $ctrl.warningMessage = "No such menu number exists";
      });
      // Also save the fav dish
      console.log(promise.data);
  };

  }
})();
