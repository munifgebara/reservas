define([], function() {

  RecursoListController.$inject = ['$scope', 'RecursoService', 'gumgaController'];

  function RecursoListController($scope, RecursoService, gumgaController) {

    gumgaController.createRestMethods($scope, RecursoService, 'recurso');

    RecursoService.resetDefaultState();

    $scope.page = 0
    $scope.recurso.methods.get($scope.page)
        .on('deleteSuccess', function(response){
            $scope.recurso.methods.get($scope.page)
        });

    $scope.tableConfig = {
      columns: 'codigo, descricao, button',
      checkbox: true,
      columnsConfig: [{
        name: 'descricao',
        title: '<span gumga-translate-tag="recurso.descricao"> descricao </span>',
        content: '{{$value.descricao }}',
        sortField: 'descricao'
      },{
        name: 'codigo',
        title: '<span gumga-translate-tag="recurso.codigo"> codigo </span>',
        content: '{{$value.codigo }}',
        sortField: 'codigo'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="recurso.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return RecursoListController;
});
