'use strict';

// var root_app = angular.module('root_app',['ui.router']);

root_app.controller('homeCtrl',['$scope',function($scope){



}]);




root_app.controller('loginCtrl',['$scope','$http', function ($scope,$http) {

    $scope.login = function () {
        // alert("login");
        var postObject = new Object();
        postObject.username = $("#login-username").val();
        postObject.password = $("#login-password").val();

        $http({
            url:'http://localhost:3000/api/login/',
            dataType:'json',
            method:'POST',
            data:postObject,
            headers: {
                "Content-Type": "application/json"
            }
        }).success(function(response){
            console.log("In success");
            $scope.response = response;
            console.log($scope.response);

            $http({
                url:'http://localhost:3000/api/dash',
                method:"GET",
                headers:{
                    "Authorization":response.token
                }
            })

                .success(function (res) {
                    console.log(res);
                })

        }).error(function(error){
            console.log("In error");
            $scope.error = error;
            console.log($scope.error);

        });


    };


}]);



root_app.controller('aboutCtrl',['$scope', function ($scope) {



}]);

// angular.module('mean.articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Global', 'Articles', 'MeanUser', 'Circles',
//   function($scope, $stateParams, $location, Global, Articles, MeanUser, Circles) {
//     $scope.global = Global;

//     $scope.hasAuthorization = function(article) {
//       if (!article || !article.user) return false;
//       return MeanUser.isAdmin || article.user._id === MeanUser.user._id;
//     };

//     $scope.availableCircles = [];

//     Circles.mine(function(acl) {
//         $scope.availableCircles = acl.allowed;
//         $scope.allDescendants = acl.descendants;
//     });

//     $scope.showDescendants = function(permission) {
//         var temp = $('.ui-select-container .btn-primary').text().split(' ');
//         temp.shift(); //remove close icon
//         var selected = temp.join(' ');
//         $scope.descendants = $scope.allDescendants[selected];
//     };

//     $scope.selectPermission = function() {
//         $scope.descendants = [];
//     };

//     $scope.create = function(isValid) {
//       if (isValid) {
//         // $scope.article.permissions.push('test test');
//         var article = new Articles($scope.article);

//         article.$save(function(response) {
//           $location.path('articles/' + response._id);
//         });

//         $scope.article = {};

//       } else {
//         $scope.submitted = true;
//       }
//     };

//     $scope.remove = function(article) {
//       if (article) {
//         article.$remove(function(response) {
//           for (var i in $scope.articles) {
//             if ($scope.articles[i] === article) {
//               $scope.articles.splice(i, 1);
//             }
//           }
//           $location.path('articles');
//         });
//       } else {
//         $scope.article.$remove(function(response) {
//           $location.path('articles');
//         });
//       }
//     };

//     $scope.update = function(isValid) {
//       if (isValid) {
//         var article = $scope.article;
//         if (!article.updated) {
//           article.updated = [];
//         }
//         article.updated.push(new Date().getTime());

//         article.$update(function() {
//           $location.path('articles/' + article._id);
//         });
//       } else {
//         $scope.submitted = true;
//       }
//     };

//     $scope.find = function() {
//       Articles.query(function(articles) {
//         $scope.articles = articles;
//       });
//     };

//     $scope.findOne = function() {
//       Articles.get({
//         articleId: $stateParams.articleId
//       }, function(article) {
//         $scope.article = article;
//       });
//     };
//   }
// ]);
