(function (){
  'use strict'

    angular.module("MenuApp")
    .component('items', {
      templateUrl: 'itemTemplate.html',
      bindings: {
        inputItems: '<',
        //prop2: '@',
        //onAction: '&'
      }
    });

})();
