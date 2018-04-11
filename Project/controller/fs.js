/**
 * Created by Administrator on 2018/4/11.
 */
myApp
    .controller("fsCtrl", function ($scope) {

    })
    .controller("homeCtrl", function ($scope) {

    })
    .controller('loginCtrl', function ($scope, $state) {
        $scope.userInfo = {
            email: "",
            password: "",
            autoLogin: true
        };
        $scope.emailShow = false;
        $scope.passwordShow = false;
        $scope.isShow = function(){
          if($scope.userInfo.email ===""){
              $scope.emailShow = true;
          }else{
              $scope.emailShow = false;
          }
            if($scope.userInfo.password ===""){
                $scope.passwordShow = true;
            }else{
                $scope.passwordShow = false;
            }
        };
        $scope.loginDNF = function () {
            if($scope.userInfo.email ==="" && $scope.userInfo.password ===""){
                $scope.emailShow = true;
                $scope.passwordShow = true;
                return false;
            }else{
                $scope.emailShow = false;
                $scope.passwordShow = false;
            }
            if($scope.userInfo.email ===""){
                $scope.emailShow = true;
                return false;
            }else{
                $scope.emailShow = false;
            }
            if($scope.userInfo.password ===""){
                $scope.passwordShow = true;
                return false;
            }else{
                $scope.passwordShow = false;
            }
            if ($scope.userInfo.email === "362735156@qq.com" && $scope.userInfo.password === "147852369") {
                $state.go("home")
            }else{
                alert("用户名或者密码错误")
            }
        }
    })
;