'use strict';

angular.module('controller.crud', [])
  .controller('CRUDCtrl', function($scope, $timeout, RestService) {
    $scope.resources = {};
    $scope.status = '';
    $scope.resources.experience = {
      data: RestService.experience.query(),
      name: 'Experience'
    };

    $scope.remove = function(name, data) {
      var resource = RestService[name.toLowerCase()].delete(data);
      console.log(resource);
      resource.$promise.then(function() {
        $scope.notify('Succesfully removed: ' + data._id);
      }).catch($scope.notify);

      $scope.resources[name.toLowerCase()].data = $scope.resources[name.toLowerCase()].data.filter(function(resource){
        if(resource._id !== data._id) {
          return resource
        }
      });
    };

    $scope.save = function(name, data) {
      var Resource = RestService[name.toLowerCase()],
          resource = new Resource(data);

      resource.$save().then(function(data){
        $scope.resources[name.toLowerCase()].data.push(data);
        $scope.notify('Succesfully saved: ' + data._id);
      }).catch($scope.notify);

      $scope.newResource = {};
    };

    $scope.edit = function(data) {
      $scope.newResource = data;
      $scope.editMode = true;
    };

    $scope.update = function(name, data) {
      var resource = RestService[name.toLowerCase()].update(data);

        resource.$promise.then(function() {
          $scope.notify('Succesfully updated: ' + data._id);
        }).catch($scope.notify);
    };

    $scope.notify = function(message) {
      $timeout.cancel($scope.timer);
      $scope.notification = message;
      $scope.showNotifications = true;
    };

    $scope.$watch('notification', function() {
      $scope.timer = $timeout(function() {
        $scope.showNotifications = false;
      }, 2000);
    })
  });

