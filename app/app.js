angular
  .module('resumeApp', ['ngRoute', 'service.rest', 'controller.main'])
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
