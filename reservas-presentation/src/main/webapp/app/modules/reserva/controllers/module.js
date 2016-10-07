define(function (require) {
    var angular = require('angular');
    require('app/modules/reserva/services/module');
    require('angular-ui-router');

    return angular
            .module('app.reserva.controllers', ['app.reserva.services','ui.router'])
            .controller('ReservaFormController', require('app/modules/reserva/controllers/ReservaFormController'))
            .controller('ReservaListController', require('app/modules/reserva/controllers/ReservaListController'))
            .controller('ReservaListMinhasController', require('app/modules/reserva/controllers/ReservaListMinhasController'));

});