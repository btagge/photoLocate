var photoLocate = angular.module('photoLocate', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('home', {
            templateUrl: 'js/angular/home/home.html',
            url: '/home',
            controller: 'homeCtrl'
        })
        .state('locationProf', {
            templateUrl: 'js/angular/locations/locations.html',
            url: '/locations/:locationId',
            controller: 'locationsCtrl'
        })
        .state('signUp', {

        })
        .state('profile', {

        })
        .state('upload', {

        })
    $urlRouterProvider
        .otherwise('/home');
});