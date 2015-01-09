angular.module('service.rest', [])
  .service('RestService', function($resource) {
    var service = {};

    service.experience = $resource('/api/v1/experience/:_id', {_id: '@_id'}, {
      save: {
        method:'POST',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      },
      update: {
        method:'PUT',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      },
      'delete': {
        method:'DELETE',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      }
    });
    service.education = $resource('/api/v1/education/:_id', {_id: '@_id'}, {
      save: {
        method:'POST',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      },
      update: {
        method:'PUT',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      },
      'delete': {
        method:'DELETE',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      }
    });
    service.project = $resource('/api/v1/project/:_id', {_id: '@_id'}, {
      save: {
        method:'POST',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      },
      update: {
        method:'PUT',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      },
      'delete': {
        method:'DELETE',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      }
    });
    service.about = $resource('/api/v1/about/:_id', {_id: '@_id'}, {
      save: {
        method:'POST',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      },
      update: {
        method:'PUT',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      },
      'delete': {
        method:'DELETE',
        headers: {
          Authorization: sessionStorage.getItem('token')
        }
      }
    });

    return service;
  });
