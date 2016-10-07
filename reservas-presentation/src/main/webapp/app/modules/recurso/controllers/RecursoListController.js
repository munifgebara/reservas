define([], function() {

  RecursoListController.$inject = ['$scope', 'RecursoService', 'gumgaController'];

  function RecursoListController($scope, RecursoService, gumgaController) {

    gumgaController.createRestMethods($scope, RecursoService, 'recurso');

    RecursoService.resetDefaultState();
    $scope.recurso.execute('get');

    $scope.tableConfig = {
      columns: 'tipo ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'tipo',
        title: '<span gumga-translate-tag="recurso.tipo"> tipo </span>',
        content: '{{$value.tipo }}',
        sortField: 'tipo'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="recurso.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return RecursoListController;
});
