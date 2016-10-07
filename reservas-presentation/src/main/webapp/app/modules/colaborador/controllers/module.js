define(function (require) {
    var angular = require('angular');
    require('app/modules/colaborador/services/module');
    require('angular-ui-router');

    return angular
            .module('app.colaborador.controllers', ['app.colaborador.services','ui.router'])
            .controller('ColaboradorFormController', require('app/modules/colaborador/controllers/ColaboradorFormController'))
            .controller('ColaboradorListController', require('app/modules/colaborador/controllers/ColaboradorListController'));
});