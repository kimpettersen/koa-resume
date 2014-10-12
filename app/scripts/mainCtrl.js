'use strict';

angular.module('controller.main', [])
  .controller('MainCtrl', function($scope, RestService) {
    $scope.showErrorMessage = false;
    $scope.errorMessage = '';
    var s = skrollr.init({
        render: function(data) {
            console.log(data.curTop);
        }
    });
    $scope.populate = function() {
      RestService.experience
        .query()
        .$promise
        .then(function(experience) {

           $scope.experience = experience;
        }).catch($scope.errorHandler);

      console.log($scope.experience);
    };

    $scope.errorHandler = function(err) {
      $scope.showErrorMessage = true;
      $scope.errorMessage = err;
    };

    $scope.populate();

  });

