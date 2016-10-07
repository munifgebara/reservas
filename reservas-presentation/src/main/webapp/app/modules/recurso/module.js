define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/recurso/services/module');
  require('app/modules/recurso/controllers/module');

  return require('angular')
    .module('app.recurso', [
      'ui.router',
      'app.recurso.controllers',
      'app.recurso.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('recurso.list', {
          url: '/list',
          templateUrl: 'app/modules/recurso/views/list.html',
          controller: 'RecursoListController'
        })
        .state('recurso.insert', {
          url: '/insert',
          templateUrl: 'app/modules/recurso/views/form.html',
          controller: 'RecursoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/recurso/new');
            }]
          }
        })
        .state('recurso.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/recurso/views/form.html',
          controller: 'RecursoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/recurso/' + $stateParams.id);
            }]
          }
        });
    })
});