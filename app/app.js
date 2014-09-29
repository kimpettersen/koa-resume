angular
  .module('resumeApp', ['ngRoute', 'ngResource', 'service.rest', 'controller.crud','controller.main'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller:'MainCtrl',
        templateUrl:'templates/main.html'
      })
      .when('/crud', {
        controller:'CRUDCtrl',
        templateUrl:'templates/crud.html'
      })
      .otherwise({
        redirectTo:'/'
      });
  });
