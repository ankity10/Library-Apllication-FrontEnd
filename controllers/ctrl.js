'use strict';

// var root_app = angular.module('root_app',['ui.router']);

root_app.controller('homeCtrl', ['$scope', function ($scope) {


}]);

root_app.controller('loginCtrl', ['$scope', '$http', '$location', '$rootScope', '$localStorage', 'User', function ($scope, $http, $location, $rootScope, $localStorage, User) {

    var globals = new Globals();
    
    $scope.test = function () {

        User.me(function (res) {
            alert("Test In success ");

        }, function () {
            alert("Test In error ");
        })
    };
    
    $scope.login = function () {

        var formData = {
            username: $("#login-username").val(),
            password: $("#login-password").val()
        };

        User.signin(formData, function (res) {
            if (res.success == false) {
                alert(res.message)
            } else {
                $localStorage.token = res.token;
                globals.stateUpdate($rootScope, User);
                $location.path('/genre');
                alert("IN login");
            }

        }, function () {
            $rootScope.error = "Failed to signin";
        })
    };

    $scope.signup = function () {

        var formData = {};
        formData.email = $("#email").val();
        formData.username = $("#username").val();
        formData.name = $("#firstname").val() + $("#lastname").val();
        formData.password = $("#login_password").val();
        formData.mobile = $("#mobile").val();
        formData.country = $("#country").val();

        User.signup(formData, function (res) {
            if (res.success == false) {
                alert(res.message);
            } else {
                $localStorage.token = res.token;
                $rootScope.userUserenticated = true;
                $location.path('/genre');

            }
        }, function () {
            $rootScope.error = "Failed to signup";
        });
    };

    $scope.me = function () {
        User.me(function (res) {
            console.log(res);
            $scope.myDetails = res.user;
        }, function () {
            $rootScope.error = "Failed to fetch details";
        })
    };

    $scope.logout = function () {
        User.logout(function () {
            globals.stateUpdate($rootScope, User);
            $location.path('/');
        }, function () {
            alert("Failed to logout!");
        })
    };

    $scope.token = $localStorage.token;


    // var postObject = new Object();
    // postObject.username = $("#login-username").val();
    // postObject.password = $("#login-password").val();
    //
    // $http({
    //     url: 'http://localhost:3000/api/login/',
    //     dataType: 'json',
    //     method: 'POST',
    //     data: postObject,
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    //     .success(function (response) {
    //         // console.log("In success");
    //         $scope.response = response;
    //         // console.log($scope.response);
    //
    //         if (response.success) {
    //             $rootScope.user = {};
    //             $rootScope.user.authenticated = true;
    //             $location.path('/genre');
    //             $http({
    //                 url: 'http://localhost:3000/api/dash',
    //                 method: "GET",
    //                 headers: {
    //                     "Authorization": response.token
    //                 }
    //             })
    //                 .success(function (res) {
    //                     console.log(res);
    //                 })
    //         }
    //         else {
    //             $location.path('/verify');
    //         }
    //
    //     })
    //
    //     .error(function (error) {
    //         console.log("In error");
    //         $scope.error = error;
    //         console.log($scope.error);
    //
    //     });
    //

    // };

}]);

root_app.controller('navCtrl', ['$scope', '$location', 'User', function ($scope, $location, User) {

    $scope.logout = function () {
        User.logout(function () {
            $location.path('/');
        })
    }

    
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
