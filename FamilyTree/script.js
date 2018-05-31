function ageCalculate(){
  var birthDate =document.getElementById('birth_date').value;
  
}

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
      myArr[i].link = dtl[ID].link1;
    }
  for (var i = 2; i < LEN; i++) {
    ID = myArr[i].id;
    myArr[i].name = dtl[ID].name;
    myArr[i].mobile = dtl[ID].mobile;
    myArr[i].dob = dtl[ID].dob;
    myArr[i].style = "child_card"+(LEN-2);
    myArr[i].link = dtl[ID].link2;
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
    }).when('/11', {
        templateUrl: 'content.html',
        controller: 'ctrl_11',
    }).otherwise({
        redirectTo: '/0'
    })
}]);

dtl = [
  {
    name: 'Mohd. Ali',
    mobile: '-',
    dob: '',
    style: 'parent_card',
    link: '0',
  },{
    name: 'K M Salim',
    mobile: '9846377865',
    status1: 'Administrative Assistant,',
    status2: 'Medical Dept.',
    dob: '',
    style: 'parent_card',
    link1: '0',
    link2: '1',
  },{
    name: 'K K Zahida',
    mobile: '9895732071',
    status1: 'Principal,',
    status2: 'Higher Secondary Dept.',
    dob: '',
    style:'parent_card',
    link: '',
  },{
    name: 'Sarin K Salim',
    mobile: '9895504760',
    status1: 'B.Tech,',
    status2: 'Computer Science',
    dob: '',
    style:'child_card2',   
    link: '3', 
  },{
    name: 'Sachin K Salim',
    mobile: '8281285234',
    status1: 'B.Tech,',
    status2: 'Computer Science',
    dob: '',
    style:'child_card2', 
    link: '4',
  },{
    name: 'K K Beerachi',
    mobile: '-',
    dob: '',
    style:'parent_card',
    link1: '11',
    link2: '0',
  },{
    name: 'Mohd. Nazar',
    mobile: '-',
    dob: '',
    style:'child_card6',   
    link: '', 
  },{
    name: 'Soudabi',
    mobile: '-',
    dob: '',
    style:'child_card6', 
    link: '',    
  },{
    name: 'Aishabi',
    mobile: '-',
    dob: '',
    style:'child_card6', 
    link: '',    
  },{
    name: 'Mohd. Iqbal',
    mobile: '-',
    dob: '',
    style:'child_card6', 
    link: '',    
  },{
    name: 'Mohd. Sageer',
    mobile: '-',
    dob: '',
    style:'child_card6', 
    link: '',    
  },{
    name: 'K B',
    mobile: '-',
    dob: '',
    style: 'parent_card',
    link: '0',
  },{
    name: 'Aishu',
    mobile: '-',
    dob: '',
    style:'parent_card',
    link: '',
  },{
    name: 'K K Kunjumoitheen',
    mobile: '-',
    dob: '',
    style:'child_card8', 
    link: '',    
  },{
    name: 'K K Kunjipokkar kutti',
    mobile: '-',
    dob: '',
    style:'child_card8', 
    link: '',    
  },{
    name: 'K K Fathima',
    mobile: '-',
    dob: '',
    style:'child_card8', 
    link: '',
  },{
    name: 'K K Kamaal',
    mobile: '-',
    dob: '',
    style:'child_card8', 
    link: '',    
  },{
    name: 'K K Aathu',
    mobile: '-',
    dob: '',
    style:'child_card8', 
    link: '',    
  },{
    name: 'K K Suharabi',
    mobile: '-',
    dob: '',
    style:'child_card8', 
    link: '',    
  },{
    name: 'K K Zaheed',
    mobile: '-',
    dob: '',
    style:'child_card8', 
    link: '',    
  },
];

document.getElementById("debug").innerHTML = dtl.length;

mainApp.controller('ctrl_0', function($scope) {
    $scope.address = [
      "Karukappadath kunjithaichalil",
      "P.O. Kara",
      "Thrissur, Kerala",
      "PIN: 680671"
    ]
    $scope.contacts = [{
        id: 0
    },{
        id: 5
    },{
        id: 6
    },{
        id: 7  
    },{
        id: 8   
    },{
        id: 9  
    },{
        id: 10 
    },{
        id: 1
    },];
    setValues($scope.contacts);
});

mainApp.controller('ctrl_1', function($scope) {
    $scope.address = [
      "'Shreyas', Karukappadath House",
      "Chathedath parambu, P.O. Kodungallur",
      "Thrissur, Kerala",
      "PIN: 680664"
    ]
    $scope.contacts = [{
        id: 1,
    },{
        id: 2,
        
    },{
        id: 3,
    },{
        id: 4,    
    },];
    setValues($scope.contacts);
});

mainApp.controller('ctrl_11', function($scope) {
    $scope.address = [
      "Karukappadath puthanveedu",
      "P.O. Eriyad",
      "Thrissur, Kerala",
      "PIN: ---"
    ]
    $scope.contacts = [{
        id: 11
    },{
        id: 12        
    },{
        id: 13  
    },{
        id: 14  
    },{
        id: 15  
    },{
        id: 5
    },{
        id: 16  
    },{
        id: 17   
    },{
        id: 18   
    },{
        id: 17  
    },];
    setValues($scope.contacts);
});