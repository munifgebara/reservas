define([], function() {

    ColaboradorFormController.$inject = ['ColaboradorService', '$state', 'entity', '$scope', 'gumgaController'];

    function ColaboradorFormController(ColaboradorService, $state, entity, $scope, gumgaController) {

        gumgaController.createRestMethods($scope, ColaboradorService, 'colaborador');

        $scope.colaborador.data = entity.data || {};

        $scope.continue = {};

        $scope.colaborador.on('putSuccess',function(data){
            $state.go('colaborador.list');
        });
    }

    return ColaboradorFormController;   
});