define([], function() {

  ReservaListController.$inject = ['$scope', 'ReservaService', 'gumgaController'];

  function ReservaListController($scope, ReservaService, gumgaController) {

    gumgaController.createRestMethods($scope, ReservaService, 'reserva');

    ReservaService.resetDefaultState();
    $scope.reserva.execute('get');

    $scope.tableConfig = {
      columns: 'sala, dataInicio, dataFim, colaborador',
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
      }]
    };

  };
  return ReservaListController;
});
