
define([], function() {

  ReservaListMinhasController.$inject = ['$scope', 'ReservaService', 'gumgaController'];

  function ReservaListMinhasController($scope, ReservaService, gumgaController) {

    gumgaController.createRestMethods($scope, ReservaService, 'reserva');

    ReservaService.resetDefaultState();

     
    ReservaService.getMinhas()
            .then(function(response) {
                $scope.reserva.data = response.data.values
            })
    
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
  return ReservaListMinhasController;
});
