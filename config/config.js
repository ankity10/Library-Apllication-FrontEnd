/**
 * Created by siteflu on 27/6/16.
 */
'use strict';


var root_app = angular.module('root_app', ['ui.router', 'angularFileUpload']);


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

root_app.run(function ($http) {
    // $http.defaults.header.common.Authorization =

})

// ANGULAR CONFIGURATION END
// *************************************************************************


// GLOBAL HELPERS START
// =========================================================================
    var GLOBAL = function () {

        return {

            test: function () {
                console.log("Test function")
            }
        }
    }


// GLOBAL HELPERS END
// *************************************************************************
