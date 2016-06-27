'use strict';

// var root_app = angular.module('root_app',['ui.router']);

root_app.controller('homeCtrl', ['$scope', function ($scope) {


}]);

root_app.controller('loginCtrl', ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {

    $scope.login = function () {
        GLOBAL.test();
        var postObject = new Object();
        postObject.username = $("#login-username").val();
        postObject.password = $("#login-password").val();

        $http({
            url: 'http://localhost:3000/api/login/',
            dataType: 'json',
            method: 'POST',
            data: postObject,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .success(function (response) {
                // console.log("In success");
                $scope.response = response;
                // console.log($scope.response);

                if (response.success) {
                    $rootScope.user = {};
                    $rootScope.user.authenticated = true;
                    $location.path('/genre');
                    $http({
                        url: 'http://localhost:3000/api/dash',
                        method: "GET",
                        headers: {
                            "Authorization": response.token
                        }
                    })
                        .success(function (res) {
                            console.log(res);
                        })
                }
                else {
                    $location.path('/verify');
                }

            })

            .error(function (error) {
                console.log("In error");
                $scope.error = error;
                console.log($scope.error);

            });


    };


}]);

root_app.controller('forget_passwordCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.forget_password = function () {
        var postObject = new Object();
        postObject.username = $("#email").val();
        $http({
            url: 'http://localhost:3000/api/resetpassword/',
            dataType: 'json',
            method: 'POST',
            data: postObject,
            headers: {
                "Content-Type": "application/json"
            }
        }).success(function (response) {
            // console.log("In reset");
            $scope.response = response;
            console.log($scope.response);

        }).error(function (error) {
            console.log("In error");
            $scope.error = error;
            console.log($scope.error);

        });
    };
}]);

root_app.controller('signupCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.signup = function () {
        var postObject = new Object();
        postObject.email = $("#email").val();
        postObject.username = $("#username").val();
        postObject.name = $("#firstname").val() + $("#lastname").val();
        postObject.password = $("#login_password").val();
        postObject.mobile = $("#mobile").val();
        postObject.country = $("#country").val();
        console.log(postObject.password);
        $http({
            // url:'http://localhost:3000/api/register/',
            dataType: 'json',
            method: 'POST',
            data: postObject,
            headers: {
                "Content-Type": "application/json"
            }
        }).success(function (response) {
            // console.log("In register");
            $scope.response = response;
            console.log($scope.response);

            // $http({
            //     url:'http://localhost:3000/api/dash',
            //     method:"GET",
            //     headers:{
            //         "Authorization":response.token
            //     }
            // }).success(function (res) {
            //         console.log(res);
            //     })

        }).error(function (error) {
            console.log("In error");
            $scope.error = error;
            console.log($scope.error);

        });


    };

    $scope.usercheck = function () {
        var getObject = new Object();
        getObject.username = $("#username").val();
        $http({
            url: 'http://localhost:3000/api/usercheck/',
            dataType: 'json',
            method: 'POST',
            data: getObject,
            headers: {
                "Content-Type": "application/json"
            }
        }).success(function (response) {
            // console.log("In reset");
            $scope.response = response;
            console.log($scope.response);

        }).error(function (error) {
            console.log("In error");
            $scope.error = error;
            console.log($scope.error);
        });
    };

    $scope.passcheck = function () {
        var getObject = new Object();
        getObject.password = $("#login_password").val();
        getObject.passwordcheck = $("#login_password_match").val();

        if (getObject.password == getObject.passwordcheck) {
            console.log("Matched");
        }
    }


}]);

root_app.controller('genreCtrl', ['$scope', function ($scope) {

}]);

root_app.controller('aboutCtrl', ['$scope', function ($scope) {

}]);

root_app.controller('upload_test', ['$scope', '$http', function ($scope, $http) {

    $scope.uploadFile = function () {
        var file = $scope.myFile;
        var uploadUrl = "http://localhost:3000/api/upload";
        var fd = new FormData();
        fd.append('file', file);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function () {
                console.log("success!!");
            })
            .error(function () {
                console.log("error!!");
            });
    };

}]);
