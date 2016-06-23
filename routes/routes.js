'use strict';


var root_app = angular.module('root_app',['ui.router','angularFileUpload']);



// ========================== directives start ===============================
root_app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
// ========================== directives end ===============================




//=================== Setting up route ======================================
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

        .state('genre',{
            url:'/genre',
            templateUrl:'views/genre.html',
            controller:'genreCtrl'
        })

        .state('verify',{
            url:'/verify',
            templateUrl:'views/verify.html'
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

      })
        .state('upload_test',{
            url:'/upload-test',
            templateUrl:'views/upload_test.html',
            controller:'upload_test'
        });

  }
]);

// =================== route ends ===========================================


