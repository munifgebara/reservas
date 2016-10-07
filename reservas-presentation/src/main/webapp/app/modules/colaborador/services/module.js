define(function(require) {
   require('angular')
   .module('app.colaborador.services', [])
   .service('ColaboradorService', require('app/modules/colaborador/services/ColaboradorService'));
});