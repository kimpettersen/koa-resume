'use strict';

angular.module('controller.crud', [])
  .controller('CRUDCtrl', function($scope, $timeout, RestService) {
    $scope.resources = {};
    $scope.status = '';

    $scope.resources.experience = {
      data: RestService.experience.query(),
      name: 'Experience'
    };

    $scope.resources.education = {
      data: RestService.education.query(),
      name: 'Education'
    };

    $scope.resources.project = {
      data: RestService.project.query(),
      name: 'Project'
    };

    $scope.resources.about = {
      data: RestService.about.query(),
      name: 'About'
    };

    $scope.saveToken = function(token) {
      sessionStorage.setItem('token', token);
      $scope.token = '';
    };

    $scope.remove = function(name, data) {
      var resource = RestService[name.toLowerCase()].delete(data);
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
      var Resource = RestService[name],
          resource = new Resource(data);

      name = name.toLowerCase()
      resource.$save().then(function(data){
        $scope.resources[name].data.push(data);
        $scope.notify('Succesfully saved: ' + data._id);
        $scope[name + 'Resource'] = {};
      }).catch($scope.notify);

      $scope[name] = {};
    };

    $scope.edit = function(name, data) {
      $scope[name + 'Resource'] = data;
      console.log(name + 'EditMode');
      $scope[name + 'EditMode'] = true;
    };

    $scope.update = function(name, data) {
      var resource = RestService[name.toLowerCase()].update(data);

      resource.$promise.then(function() {
        $scope.notify('Succesfully updated: ' + data._id);
      }).catch($scope.notify);
    };

    $scope.clear = function(name) {
      $scope.resources[name].data = RestService[name].query();
      $scope[name + 'Resource'] = {};
      $scope[name + 'EditMode'] = false;
      $scope.notify('Canceled');
    };

    $scope.notify = function(message) {
      $timeout.cancel($scope.timer);
      $scope.notification = message;
      $scope.showNotifications = true;
    };

    $scope.hideNotification = function() {
      $scope.showNotifications = false;
    };

    $scope.$watch('notification', function() {
      $scope.timer = $timeout(function() {
        $scope.showNotifications = false;
      }, 3000);
    })
  });

