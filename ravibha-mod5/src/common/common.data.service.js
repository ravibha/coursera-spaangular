(function () {
  "use strict";

  angular.module('common')
  .service('CommonDataService', CommonDataService);

  function CommonDataService() {
    var service = this;

    service.isUserSignedUp = false;
    service.userInfo = null;
  }
})();
