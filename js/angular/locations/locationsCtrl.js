photoLocate.controller('locationsCtrl', function($scope, $state, $stateParams, locationsSrvc) {
    
    var locationResponse;

    var id = $stateParams.locationId;
    var location = locationsSrvc.locations.filter(value => value.id == id);
    $scope.locationName = location[0].name;

});


