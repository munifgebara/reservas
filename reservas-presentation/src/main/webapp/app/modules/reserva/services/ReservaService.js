define(['app/apiLocations'], function(APILocation) {

	ReservaService.$inject = ['GumgaRest'];

	function ReservaService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/reserva');

    	return Service;
    }

  	return ReservaService;
});