angular.module('service.rest', [])
  .service('RestService', function($resource) {
    var service = {};

    service.experience = $resource('/api/v1/experience/:_id', {_id: '@_id'}, {
        'update': { method:'PUT' }
    });
    return service;
  });
