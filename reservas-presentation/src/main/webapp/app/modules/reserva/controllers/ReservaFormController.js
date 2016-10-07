define([], function() {


 	ReservaFormController.$inject = ['ReservaService', '$state', 'entity', '$scope', 'gumgaController', 'ColaboradorService', 'SalaService', 'RecursoService'];

 	function ReservaFormController(ReservaService, $state, entity, $scope, gumgaController, ColaboradorService, SalaService, RecursoService) {

    	gumgaController.createRestMethods($scope, ReservaService, 'reserva');


	    gumgaController.createRestMethods($scope, ColaboradorService, 'colaborador');
	    $scope.colaborador.methods.search('nome','');    
	    gumgaController.createRestMethods($scope, SalaService, 'sala');
	    $scope.sala.methods.search('descricao','');    
	    gumgaController.createRestMethods($scope, RecursoService, 'recurso');
	    $scope.recurso.methods.search('tipo','');    

	    $scope.recursoOptions=[];
    
    	$scope.reserva.data = entity.data || {};
		$scope.reserva.data.dataInicio = ($scope.reserva.data.dataInicio == undefined || $scope.reserva.data.dataInicio == "") ? new Date() : new Date($scope.reserva.data.dataInicio);
        $scope.opendataInicio = function() {
        	$scope.openedDataInicio = !$scope.openedDataInicio;
        };

		$scope.reserva.data.dataFim = ($scope.reserva.data.dataFim == undefined || $scope.reserva.data.dataFim == "") ? new Date() : new Date($scope.reserva.data.dataFim);
        $scope.opendataFim = function() {
        	$scope.openedDataFim = !$scope.openedDataFim;
        };

		$scope.continue = {};
	
		$scope.reserva.on('putSuccess',function(data){
			$state.go('reserva.list');
		});
 	}
	
	return ReservaFormController;   
});