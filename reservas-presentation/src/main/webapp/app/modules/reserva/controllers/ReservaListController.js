define([], function() {

  ReservaListController.$inject = ['$scope', 'ReservaService', 'gumgaController'];

  function ReservaListController($scope, ReservaService, gumgaController) {

    gumgaController.createRestMethods($scope, ReservaService, 'reserva');

    ReservaService.resetDefaultState();
    $scope.reserva.execute('get');

    $scope.tableConfig = {
      columns: 'dataInicio ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'dataInicio',
        title: '<span gumga-translate-tag="reserva.dataInicio"> dataInicio </span>',
        content: '{{$value.dataInicio }}',
        sortField: 'dataInicio'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="reserva.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ReservaListController;
});
