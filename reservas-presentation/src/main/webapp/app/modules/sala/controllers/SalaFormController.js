define([], function() {


 	SalaFormController.$inject = ['SalaService', '$state', 'entity', '$scope', 'gumgaController'];

 	function SalaFormController(SalaService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, SalaService, 'sala');



    
    	$scope.sala.data = entity.data || {};
		$scope.continue = {};
	
		$scope.sala.on('putSuccess',function(data){
			$state.go('sala.list');
		});
 	}
	
	return SalaFormController;   
});