var app = angular.module('drillsApp',['ui.router'])
//creates angular app and injects ui.router dependency

  .config(function($stateProvider, $urlRouterProvider){
//injects $stateProvider and $urlRouterProvider so we can change states
    $urlRouterProvider.otherwise('/review/instructions');
//main state or view
    $stateProvider
      .state('review', {
        url: '/review',
        templateUrl: 'routes/drillsMain.html',
        controller: 'mainCtrl'
      })

      .state('review.answer', {
        url: '/answer',
        templateUrl: 'routes/drillsAnswer.html'
      })

      .state('review.instructions', {
        url: '/instructions',
        templateUrl: 'routes/drillsInstructions.html'
      })
  });
