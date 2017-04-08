photoLocate.service('locationsSrvc', function($http) {
    // this.locations = [{id: 'A1', name:'The Roof'}, {id: 'A2', name:'Temple Square'}, {id: 'A3', name:'Studio X'}]
    
    var locations;

    this.getLocations = function() {
        return $http({
            method: 'GET',
            url: '/api/locations'
        }).then(function(response) {
            locations = response;
            console.log(1111111, locations);
            return locations;
        });
    };
});