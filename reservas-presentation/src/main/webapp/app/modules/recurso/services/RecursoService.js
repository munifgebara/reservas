define(['app/apiLocations'], function(APILocation) {

	RecursoService.$inject = ['GumgaRest'];

	function RecursoService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/recurso');

    	return Service;
    }

  	return RecursoService;
});