'use strict';


var root_app = angular.module('root_app',['ui.router']);

//Setting up route
root_app.config(['$stateProvider','$urlRouterProvider','$httpProvider',
  function($stateProvider,$urlRouterProvider,$httpProvider) {




      $httpProvider.defaults.useXDomain = true;
      // $httpProvider.defaults.withCredentials = true;
      delete $httpProvider.defaults.headers.common["X-Requested-With"];
      $httpProvider.defaults.headers.common["Accept"] = "application/json";
      $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

      $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'views/home.html',
            controller:'homeCtrl'

        })

        .state('login',{
            url:'/login',
            templateUrl:'views/login.html',
            controller:'loginCtrl'

        })

        .state('signup',{
            url:'/signup',
            templateUrl:'views/signup.html',
            controller:'signupCtrl'
        })

        .state('about',{
            url:'/about',
            templateUrl:'views/about.html',
            controller:'aboutCtrl'
        })

       

      .state('forget_password',{
          url:'/forget_password',
          templateUrl:'views/forget_password.html',
          controller:'forget_passwordCtrl'

      });



      // .state('all articles', {
      //   url: '/articles',
      //   templateUrl: '/articles/views/list.html',
      //   requiredCircles : {
      //     circles: ['authenticated'],
      //     denyState: 'auth.login'
      //   }
      // })
      // .state('create article', {
      //   url: '/articles/create',
      //   templateUrl: '/articles/views/create.html',
      //   requiredCircles : {
      //     circles: ['can create content']
      //   }
      // })
      // .state('edit article', {
      //   url: '/articles/:articleId/edit',
      //   templateUrl: '/articles/views/edit.html',
      //   requiredCircles : {
      //     circles: ['can edit content']
      //   }
      // })
      // .state('article by id', {
      //   url: '/articles/:articleId',
      //   templateUrl: '/articles/views/view.html',
      //   requiredCircles : {
      //     circles: ['authenticated'],
      //     denyState: 'auth.login'
      //   }
      // });
  }
]);


