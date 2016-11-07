( function () {
  'use strict'
  angular.module("NarrowItDownApp", [])
  .service("MenuSearchService", MenuSearchService)
  .controller("NarrowItDownController", NarrowItDownController);

  MenuSearchService.$inject=['$http'];
  // Function constructor for the shared service
  function MenuSearchService($http) {
    var menuSearchService = this;

    menuSearchService.getMatchedMenuItems = function(searchTerm){
        var response = $http({
          method: "GET",
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
        });
        return response;
    };
  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {
    var narrowItDownCtrl = this;
    narrowItDownCtrl.foundItems = [];
    narrowItDownCtrl.displayError = false;

    narrowItDownCtrl.removeItem = function(indexOfItemToRemove){
      if (narrowItDownCtrl.foundItems.length>=indexOfItemToRemove) {
        narrowItDownCtrl.foundItems.splice(indexOfItemToRemove,1);
      }
    };

    narrowItDownCtrl.getMatchedMenuItems = function(searchTerm){
        console.log("Getting matched menu items");
        narrowItDownCtrl.foundItems = [];
        narrowItDownCtrl.displayError = true;
        // Call the menu search service to get the list of items

        var promise = MenuSearchService.getMatchedMenuItems();
        promise.then(function(response){
          // Loop through the items and if an item contains the search string, add it to the 'found' array
          var jsonData = response.data;
          if (jsonData!=null){
            angular.forEach(jsonData.menu_items, function(menuItem){
              // Each object looks Something like this
              // {"id":877,"short_name":"A1","name":"Won Ton Soup","description":"chicken-stuffed won tons","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart"}
              if (menuItem.description!=null && menuItem.description.indexOf(searchTerm)>=0){
                narrowItDownCtrl.foundItems.push(menuItem);
                narrowItDownCtrl.displayError = false;
              }
            });
          }
        })
        .catch(function (error){
          // Display error message if required
          console.log("Something went wrong");
        });
    };
  };
})();
