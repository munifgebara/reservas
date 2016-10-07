define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/reserva/services/module');
  require('app/modules/reserva/controllers/module');

  return require('angular')
    .module('app.reserva', [
      'ui.router',
      'app.reserva.controllers',
      'app.reserva.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('reserva.list', {
          url: '/list',
          templateUrl: 'app/modules/reserva/views/list.html',
          controller: 'ReservaListController'
        })
        .state('reserva.insert', {
          url: '/insert',
          templateUrl: 'app/modules/reserva/views/form.html',
          controller: 'ReservaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/reserva/new');
            }]
          }
        })
        .state('reserva.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/reserva/views/form.html',
          controller: 'ReservaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/reserva/' + $stateParams.id);
            }]
          }
        });
    })
});