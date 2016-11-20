(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://immense-depths-46191.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
