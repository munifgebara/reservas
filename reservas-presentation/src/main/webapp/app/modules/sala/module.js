define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/sala/services/module');
  require('app/modules/sala/controllers/module');

  return require('angular')
    .module('app.sala', [
      'ui.router',
      'app.sala.controllers',
      'app.sala.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('sala.list', {
          url: '/list',
          templateUrl: 'app/modules/sala/views/list.html',
          controller: 'SalaListController'
        })
        .state('sala.insert', {
          url: '/insert',
          templateUrl: 'app/modules/sala/views/form.html',
          controller: 'SalaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/sala/new');
            }]
          }
        })
        .state('sala.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/sala/views/form.html',
          controller: 'SalaFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/sala/' + $stateParams.id);
            }]
          }
        });
    })
});