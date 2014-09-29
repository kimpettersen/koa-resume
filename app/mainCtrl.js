angular.module('controller.main', [])
  .controller('MainCtrl', function($scope, RestService) {
    $scope.name = 'kim'
    $scope.serviceName = RestService.name;
  });

