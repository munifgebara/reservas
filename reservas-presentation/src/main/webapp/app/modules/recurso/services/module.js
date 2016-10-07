define(function(require) {
   require('angular')
   .module('app.recurso.services', [])
   .service('RecursoService', require('app/modules/recurso/services/RecursoService'));
});