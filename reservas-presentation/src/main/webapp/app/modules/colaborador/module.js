define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/colaborador/services/module');
  require('app/modules/colaborador/controllers/module');

  return require('angular')
    .module('app.colaborador', [
      'ui.router',
      'app.colaborador.controllers',
      'app.colaborador.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('colaborador.list', {
          url: '/list',
          templateUrl: 'app/modules/colaborador/views/list.html',
          controller: 'ColaboradorListController'
        })
        .state('colaborador.insert', {
          url: '/insert',
          templateUrl: 'app/modules/colaborador/views/form.html',
          controller: 'ColaboradorFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/colaborador/new');
            }]
          }
        })
        .state('colaborador.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/colaborador/views/form.html',
          controller: 'ColaboradorFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/colaborador/' + $stateParams.id);
            }]
          }
        });
    })
});