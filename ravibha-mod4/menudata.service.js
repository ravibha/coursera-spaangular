(function(){
  'use strict'

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var menuDataService = this;
    var restApiUrl = "https://davids-restaurant.herokuapp.com/";

    menuDataService.getAllCategories = function(){
      var response = $http({
        method: "GET",
        url: restApiUrl + 'categories.json'
      });
      return response;
    };

    menuDataService.getItemsForCategory = function(categoryShortName){
      var response = $http({
        method: "GET",
        url: restApiUrl + 'menu_items.json?category=' + categoryShortName
      });
      return response;
    };
  }
})();
