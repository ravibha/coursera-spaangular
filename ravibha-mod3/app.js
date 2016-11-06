( function () {
  'use strict'
  angular.module("NarrowItDownApp", [])
  .service("MenuSearchService", MenuSearchService)
  .controller("NarrowItDownController", NarrowItDownController);

  // Function constructor for the shared service
  function MenuSearchService() {
    var menuSearchService = this;
  };

  // ToBuyController has a dependency on the shopping list service
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {

  };

})();
