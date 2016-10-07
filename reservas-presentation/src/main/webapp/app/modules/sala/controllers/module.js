define(function (require) {
    var angular = require('angular');
    require('app/modules/sala/services/module');
    require('angular-ui-router');

    return angular
            .module('app.sala.controllers', ['app.sala.services','ui.router'])
            .controller('SalaFormController', require('app/modules/sala/controllers/SalaFormController'))
            .controller('SalaListController', require('app/modules/sala/controllers/SalaListController'));
});