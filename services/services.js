'use strict';

root_app.factory('Auth', ['$http', '$localStorage', '$rootScope', function($http, $localStorage, $rootScope){

    var globals = new Globals();
    var baseUrl = "http://localhost:3000/api";

  
    function getUserFromToken() {
        var token = $localStorage.token;
        var user = undefined;
        if (typeof token !== 'undefined') {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            user = JSON.parse(window.atob(base64));
        }
        return user;
    }


    return {
        signup: function (data, success, error) {
            $http.post(baseUrl + '/register', data).success(success).error(error)
        },
        signin: function (data, success, error) {
            $http.post(baseUrl + '/login', data).success(success).error(error)
        },
        me: function (success, error) {
            $http.get(baseUrl + '/me').success(success).error(error)
        },
        logout: function (success) {
            // changeUser({});
            $rootScope.userAuthenticated = false;
            delete $localStorage.token;
            success();
        },
        isAuthed: function () {
            this.me(function (res) {
                return res.user;
            }, function () {
                return false;
            })
        },
        loggedInUser: function () {
            return getUserFromToken();
        }
    }
}]);

