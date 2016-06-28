'use strict';

root_app.factory('settings', function () {
    var self = this;
    self.apiUrl = 'http://localhost:3000/api';
    return self;
});

root_app.factory('User', ['$http', '$localStorage', '$rootScope','settings', function($http, $localStorage, $rootScope, settings){

    var globals = new Globals();
    var baseUrl = settings.apiUrl;
    var path = '/user';

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
            $http.post(baseUrl + path + '/auth/signup', data).success(success).error(error)
        },
        signin: function (data, success, error) {
            $http.post(baseUrl + path + '/auth/login', data).success(success).error(error)
        },
        me: function (success, error) {
            $http.get(baseUrl + path + '/me').success(success).error(error)
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
        },
        update: function (user, success, error) {
            $http.post(baseUrl + path + '/me', user).success(success).error(error);
        },
        resetPassword: function () {
            
        }
    }
}]);

root_app.factory('Book', ['$http', '$rootScope','settings', function($http, $rootScope, settings) {
   
    var baseUrl = settings.apiUrl;
    var self = this;
    var path = '/books';
    
    self.all = function (success, error) {
        return $http.get(baseUrl + path).success(success).error(error);
    }
    
    self.create = function (book) {
        return $http.post(baseUrl + path, book);
    }
    
    self.fetch = function (bookId, success, error) {
        return $http.get(baseUrl + path + '/' + bookId).success(success).error(error);
    }
    self.update = function (bookId, success, error) {
        return $http.post(baseUrl + path, bookId).success(success).error(error);
    }
    
    self.delete = function (bookId, success, error) {
        return $http.post(baseUrl + path, bookId).success(success).error(error);
    }
    
    return self;
}]);
