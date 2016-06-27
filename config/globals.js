/**
 * Created by siteflu on 28/6/16.
 */

var handleNavClick = function () {
    $("div#navbar ul.nav.navbar-nav li a").click(function (event) {
        // alert("in list");
        $(".navbar-toggle").click();
    })
}

var stateUpdate = function ($rootScope, Auth) {
    if(Auth.loggedInUser() !== undefined){

        $rootScope.userAuthenticated = true;

    } else {

        $rootScope.userAuthenticated = false;
    }
}
function Globals() {

    return {
        navFix: function () {
            handleNavClick();
        },
        stateUpdate: function ($rootScope, Auth) {
            stateUpdate($rootScope, Auth);
        }
    }
}