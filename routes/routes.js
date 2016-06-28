'use strict';

//=================== Setting up route ======================================
root_app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        // $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

        $urlRouterProvider.otherwise('/');

        // states for my app
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    "main": {
                        templateUrl:  'views/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })

            .state('login', {
                url: '/login',
                views:{
                    'main': {
                        templateUrl: 'views/login.html',
                        controller: 'loginCtrl'
                    },
                }
            })

            .state('genre', {
                url: '/genre',
                views:{
                    'main': {
                        templateUrl: 'views/genre.html',
                        controller: 'genreCtrl',
                        resolve: {
                            user: ['User', function (User) {
                                return User.isAuthed();
                            }]
                        }

                    },
                }
            })

            .state('verify', {
                url: '/verify',
                templateUrl: 'views/verify.html',

            })

            .state('signup', {
                url: '/signup',
                views:{
                    'main': {
                        templateUrl: 'views/signup.html',
                        controller: 'loginCtrl'
                    },
                }
            })

            .state('about', {
                url: '/about',
                views: {
                    "main": {
                        templateUrl: 'views/about.html',
                        controller: 'aboutCtrl'
                    }
                }
            })

            .state('forget_password', {
                url: '/forget_password',
                templateUrl: 'views/forget_password.html',
                controller: 'forget_passwordCtrl'

            })

            .state('upload_test', {
                url: '/upload-test',
                templateUrl: 'views/upload_test.html',
                controller: 'upload_test'
            })
<<<<<<< HEAD

            .state('test', {
                url: '/test',
                templateUrl: 'views/test.html',
                controller: 'loginCtrl'
        });
=======
            .state('pdf',{
               url : '/pdf',
                templateUrl : 'views/pdf_view.html',
                controller : 'DocCtrl'
            });
>>>>>>> anurag

    }
]);

// =================== route ends ===========================================


