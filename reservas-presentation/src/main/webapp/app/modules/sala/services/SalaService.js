define(['app/apiLocations'], function(APILocation) {

	SalaService.$inject = ['GumgaRest'];

	function SalaService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/sala');

    	return Service;
    }

  	return SalaService;
});