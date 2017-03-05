var app = angular.module('app', ['ionic'])

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    // tour route
    // default home/main page route
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html'
    })
    .state('tour', {
      url: '/tour',
      templateUrl: 'views/tour/tour.html'
    });

    // defualt fallback url
    $urlRouterProvider.otherwise('/tour');
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});