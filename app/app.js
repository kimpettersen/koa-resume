angular
  .module('resumeApp', ['ngRoute', 'ngResource', 'service.rest', 'controller.main'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller:'MainCtrl',
        templateUrl:'main.html'
      })
      .otherwise({
        redirectTo:'/'
      });
  });
