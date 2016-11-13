(function (){
  'use strict'

    angular.module("MenuApp")
    .component('categories', {
      templateUrl: 'categorytemplate.html',
      bindings: {
        inputCategories: '<',
        //prop2: '@',
        //onAction: '&'
      }
    });

})();
