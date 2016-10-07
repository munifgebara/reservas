define([], function() {

  SalaListController.$inject = ['$scope', 'SalaService', 'gumgaController'];

  function SalaListController($scope, SalaService, gumgaController) {

    gumgaController.createRestMethods($scope, SalaService, 'sala');

    SalaService.resetDefaultState();
    $scope.sala.execute('get');

    $scope.tableConfig = {
      columns: 'descricao ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'descricao',
        title: '<span gumga-translate-tag="sala.descricao"> descricao </span>',
        content: '{{$value.descricao }}',
        sortField: 'descricao'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="sala.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return SalaListController;
});
