(function (){
  'use strict'

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.template.html'
    })
  };
})();
