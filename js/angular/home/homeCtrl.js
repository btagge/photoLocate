photoLocate

.controller('homeCtrl', function($scope, $state, $stateParams, locationsSrvc) {
    $scope.getLocations = function() {
        locationsSrvc.getLocations().then(function(response) {
            $scope.locations = response.data;
        }, function(error) {
            console.log(error);
        });
    };

    $scope.getLocations();

    
    $scope.locationClicked = function(id) {
        $state.go('locationProf', {locationId: id});    
    }
    
});

