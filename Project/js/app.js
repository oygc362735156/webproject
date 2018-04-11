/**
 * Created by Administrator on 2018/4/11.
 */
var myApp = angular.module("myApp",["ui.router"]);

myApp.config(["$stateProvider", function ($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state("fs", { //导航用的名字，如<a ui-sref="login">login</a>里的login
            url: '/fs',    //访问路径
            templateUrl: 'template/baidubaike.html',
            controller:'fsCtrl'
        })
        .state("login", {
            url: '',
            templateUrl: 'template/login.html',
            controller: 'loginCtrl'
        })
        .state("home",{
            url:'/home',
            templateUrl:'template/home.html',
            controller:'homeCtrl'
        });

}]);