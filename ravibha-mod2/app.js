( function () {
  'use strict'
  angular.module("ShoppingListCheckOff", [])
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService)
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController);

  // Function constructor for the shared service
  function ShoppingListCheckOffService() {
    var shoppingListService = this;

    var toBuyList = [
      {name: "Milk", quantity: 1},
      {name: "Apples", quantity: 6},
      {name: "Cookies", quantity: 10},
      {name: "Eggs", quantity: 12},
      {name: "Bell Peppers", quantity: 6}
    ];

    var alreadyBoughtList = [];

    // Get method to get the items in the buy list
    shoppingListService.getBuyList = function() {
      return toBuyList;
    };

    // Get method to get the items in the already bought list
    shoppingListService.getBoughtList = function() {
      return alreadyBoughtList;
    };

    // This function removes item from the toBuyList and adds it to the alreadyBoughtList
    shoppingListService.buyItem = function(index, item){
        // Remove item from toBuyList
        toBuyList.splice(index,1);

        // Add item to bought list
        alreadyBoughtList.push(item);
    };
  };

  // ToBuyController has a dependency on the shopping list service
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
      var buyController = this;

      buyController.getBuyList = function(){
        return ShoppingListCheckOffService.getBuyList();
      };

      buyController.buyItem = function(index, item){
        ShoppingListCheckOffService.buyItem(index, item);
      };
  };

  // AlreadyBoughtController has a dependency on the shopping list service
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
      var boughtController = this;

      boughtController.getBoughtItemsList = function() {
        return ShoppingListCheckOffService.getBoughtList();
      };
  };

})();
