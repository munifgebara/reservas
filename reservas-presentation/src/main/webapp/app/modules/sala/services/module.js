define(function(require) {
   require('angular')
   .module('app.sala.services', [])
   .service('SalaService', require('app/modules/sala/services/SalaService'));
});