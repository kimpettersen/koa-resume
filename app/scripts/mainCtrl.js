'use strict';

angular.module('controller.main', [])
  .controller('MainCtrl', function($scope, $window, RestService) {
    $scope.showErrorMessage = false;
    $scope.errorMessage = '';

    $scope.populate = function() {
      RestService.experience
        .query()
        .$promise
        .then(function(experience) {
          $scope.experience = experience;
        }).catch($scope.errorHandler);
    };

    $scope.errorHandler = function(err) {
      $scope.showErrorMessage = true;
      $scope.errorMessage = err;
    };

    $scope.setCss = function() {
      $scope.slideHeight = $window.innerHeight;
      $scope.firstSlideMargin = Math.floor($window.innerHeight * .15);
    };


    angular.element($window).bind('resize', function() {
      $scope.setCss();
      return $scope.$apply();
    });

    $scope.populate();
    $scope.setCss();

  });

