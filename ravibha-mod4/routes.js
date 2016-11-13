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
      templateUrl: 'categories.template.html',
      controller: 'CategoriesController as categoryCtrl',
      resolve: {
        categories:['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{categoryname}',
      templateUrl: 'items.template.html',
      controller: 'ItemsController as itemsCtrl',
      resolve: {
        items:['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
            return MenuDataService.getItemsForCategory($stateParams.categoryname);
        }]
      }
    })
  };
})();
