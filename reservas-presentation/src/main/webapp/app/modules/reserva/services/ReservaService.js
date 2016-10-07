define(['app/apiLocations'], function(APILocation) {

	ReservaService.$inject = ['GumgaRest'];

	function ReservaService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/reserva');

        Service.getMinhas = function() {
            return Service.extend('get', '/minhas', {})
        }

    	return Service;
    }

  	return ReservaService;
});