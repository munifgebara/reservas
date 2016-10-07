define([], function() {


 	RecursoFormController.$inject = ['RecursoService', '$state', 'entity', '$scope', 'gumgaController'];

 	function RecursoFormController(RecursoService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, RecursoService, 'recurso');

		$scope.valueTipoRecurso = [{value:'AR_CONDICIONADO', label:'Ar Condicionado'}, {value:'PROJETOR', label:'Projetor'}, {value:'NOTEBOOK', label:'Notebook'}]


    
    	$scope.recurso.data = entity.data || {};
		$scope.continue = {};
	
		$scope.recurso.on('putSuccess',function(data){
			$state.go('recurso.list');
		});
 	}
	
	return RecursoFormController;   
});