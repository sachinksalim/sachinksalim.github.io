//document.getElementById("debug").innerHTML = dtl.length;

function setValues(myArr) {
  LEN = myArr.length;
  for (var i = 0; i < LEN; i++) {
      if(i > 1) {
        break;
      }
      ID = myArr[i].id;      
      myArr[i].name = dtl[ID].name;
      myArr[i].mobile = dtl[ID].mobile;
      myArr[i].dob = dtl[ID].dob;
      myArr[i].status1 = dtl[ID].status1;
      myArr[i].status2 = dtl[ID].status2;
      myArr[i].style = "parent_card";
      myArr[i].link = dtl[ID].link;
    }
  for (var i = 2; i < LEN; i++) {
    ID = myArr[i].id;
    myArr[i].name = dtl[ID].name;
    myArr[i].mobile = dtl[ID].mobile;
    myArr[i].dob = dtl[ID].dob;
    myArr[i].style = "child_card"+(LEN-2);
    myArr[i].link = ID.toString();
  }
}

var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/0', {
        templateUrl: 'content.html',
        controller: 'ctrl_0',
    }).when('/1', {
        templateUrl: 'content.html',
        controller: 'ctrl_1',
    }).when('/5', {
        templateUrl: 'content.html',
        controller: 'ctrl_0',
    }).when('/11', {
        templateUrl: 'content.html',
        controller: 'ctrl_11',
    }).otherwise({
        redirectTo: '/0'
    })
}]);