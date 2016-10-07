define(['app/apiLocations'], function(APILocation) {

	ColaboradorService.$inject = ['GumgaRest'];

	function ColaboradorService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/colaborador');

    	return Service;
    }

  	return ColaboradorService;
});