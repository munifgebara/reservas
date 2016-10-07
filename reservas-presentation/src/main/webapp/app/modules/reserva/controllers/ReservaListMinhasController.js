
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
      columns: 'sala, dataInicio, dataFim, colaborador, button',
      checkbox: true,
      columnsConfig: [{
        name: 'sala',
        title: '<span gumga-translate-tag="reserva.sala"> Sala </span>',
        content: '{{ $value.sala.descricao }} ({{$value.sala.numero}})',
        sortField: 'sala'
      },{
        name: 'dataInicio',
        title: '<span gumga-translate-tag="reserva.dataInicio"> Inicio </span>',
        content: '{{ $value.dataInicio | date: "dd/MM/yyyy hh:mm:ss" }}',
        sortField: 'dataInicio'
      },{
        name: 'dataFim',
        title: '<span gumga-translate-tag="reserva.dataFim"> Fim</span>',
        content: '{{ $value.dataFim | date: "dd/MM/yyyy hh:mm:ss" }}',
        sortField: 'dataFim'
      },{
        name: 'colaborador',
        title: '<span gumga-translate-tag="reserva.colaborador"> Colaborador </span>',
        content: '{{ $value.colaborador.nome }}',
        sortField: 'colaborador'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="reserva.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };
  };
  return ReservaListMinhasController;
});
