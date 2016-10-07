define(function(require) {
   require('angular')
   .module('app.reserva.services', [])
   .service('ReservaService', require('app/modules/reserva/services/ReservaService'));
});