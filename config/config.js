/**
 * Created by siteflu on 27/6/16.
 */
'use strict';


<<<<<<< HEAD
var root_app = angular.module('root_app', ['ui.router', 'angularFileUpload', 'ngStorage']);
=======
var root_app = angular.module('root_app', ['ui.router', 'angularFileUpload' , 'pdf']);
>>>>>>> anurag


// ========================== directives start ===============================
root_app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
// ========================== directives end ===============================


// ANGULAR CONFIGURATION START
// =========================================================================

root_app.config(['$httpProvider', function ($httpProvider) {

    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if ($localStorage.token) {
                    config.headers.Authorization = $localStorage.token;
                }
                return config;
            },
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    }]);
}]);


root_app.run(['$http','$rootScope','User', 'Book', function ($http, $rootScope, User, Book) {
    // console.log("cool");

    

    // console.log($rootScope.userAuthenticated);
    // console.log(Auth.loggedInUser());
    
    var global = new Globals();
    global.navFix();
    global.stateUpdate($rootScope, User);
    
    // Book.all(function (res) {
    //     console.log(res);
    // }, function () {
    //     console.log("error in fetching books");
    // })
    
}]);

// ANGULAR CONFIGURATION END
// *************************************************************************


// GLOBAL HELPERS START
// =========================================================================

// var get_token = function () {
//     return window.localStorage.getItem("k");
// };
//
// var set_token = function (token) {
//     if(typeof (Storage !== undefined)){
//         window.localStorage.setItem("k", token);
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//
// function Globals () {
//
//     return {
//         set_token: function (token) {
//             set_token(token);
//         },
//
//         get_token: function () {
//            return get_token();
//         }
//     }
// };


// GLOBAL HELPERS END
// *************************************************************************
