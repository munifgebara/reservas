define([], function() {

  ColaboradorListController.$inject = ['$scope', 'ColaboradorService', 'gumgaController'];

  function ColaboradorListController($scope, ColaboradorService, gumgaController) {

    gumgaController.createRestMethods($scope, ColaboradorService, 'colaborador');

    ColaboradorService.resetDefaultState();
    $scope.colaborador.execute('get');

    $scope.tableConfig = {
      columns: 'nome, email, button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="colaborador.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      },{
        name: 'email',
        title: '<span gumga-translate-tag="colaborador.email"> email </span>',
        content: '{{$value.email }}',
        sortField: 'email'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="colaborador.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ColaboradorListController;
});
