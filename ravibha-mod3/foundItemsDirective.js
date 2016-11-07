(function(){
  'use strict'
  angular.module("NarrowItDownApp")
  .directive('foundItems', FoundItems);

  function FoundItemsDirectiveController(){
    var list = this;
  };

  function FoundItems(){
    var ddo = {
      templateUrl: 'foundItemsTemplate.html',
      restrict: 'AE',
      scope: {
        menuitems: '<',
        onRemove: '&',
        displayerror: '='
      }
    };
    return ddo;
  };
})();
