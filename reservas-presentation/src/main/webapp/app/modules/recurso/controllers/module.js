define(function (require) {
    var angular = require('angular');
    require('app/modules/recurso/services/module');
    require('angular-ui-router');

    return angular
            .module('app.recurso.controllers', ['app.recurso.services','ui.router'])
            .controller('RecursoFormController', require('app/modules/recurso/controllers/RecursoFormController'))
            .controller('RecursoListController', require('app/modules/recurso/controllers/RecursoListController'));
});