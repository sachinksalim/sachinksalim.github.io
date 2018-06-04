var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/0', {
		templateUrl: 'content.html',
		controller: 'ctrl_0',
	})
	.when('/5', {
		templateUrl: 'content.html',
		controller: 'ctrl_0',
	})
	.when('/1', {
		templateUrl: 'content.html',
		controller: 'ctrl_1',
	})
	.when('/2', {
		templateUrl: 'content.html',
		controller: 'ctrl_1',
	})
	.when('/11', {
		templateUrl: 'content.html',
		controller: 'ctrl_11',
	})
	.when('/12', {
		templateUrl: 'content.html',
		controller: 'ctrl_11',
	})
	.when('/6', {
		templateUrl: 'content.html',
		controller: 'ctrl_6',
	})
	.when('/20', {
		templateUrl: 'content.html',
		controller: 'ctrl_6',
	})
	.when('/23', {
		templateUrl: 'content.html',
		controller: 'ctrl_23',
	})
	.when('/7', {
		templateUrl: 'content.html',
		controller: 'ctrl_23',
	})
	.when('/27', {
		templateUrl: 'content.html',
		controller: 'ctrl_27',
	})
	.when('/8', {
		templateUrl: 'content.html',
		controller: 'ctrl_27',
	})
	.when('/9', {
		templateUrl: 'content.html',
		controller: 'ctrl_9',
	})
	.when('/30', {
		templateUrl: 'content.html',
		controller: 'ctrl_9',
	})
	.when('/10', {
		templateUrl: 'content.html',
		controller: 'ctrl_10',
	})
	.when('/33', {
		templateUrl: 'content.html',
		controller: 'ctrl_10',
	})
	.when('/36', {
		templateUrl: 'content.html',
		controller: 'ctrl_36',
	})
	.when('/24', {
		templateUrl: 'content.html',
		controller: 'ctrl_36',
	})
	.when('/25', {
		templateUrl: 'content.html',
		controller: 'ctrl_25',
	})
	.when('/40', {
		templateUrl: 'content.html',
		controller: 'ctrl_25',
	})
	.when('/26', {
		templateUrl: 'content.html',
		controller: 'ctrl_26',
	})
	.when('/44', {
		templateUrl: 'content.html',
		controller: 'ctrl_26',
	})
	.when('/28', {
		templateUrl: 'content.html',
		controller: 'ctrl_28',
	})
	.when('/46', {
		templateUrl: 'content.html',
		controller: 'ctrl_28',
	})
	.when('/29', {
		templateUrl: 'content.html',
		controller: 'ctrl_29',
	})
	.when('/48', {
		templateUrl: 'content.html',
		controller: 'ctrl_29',
	})
	.when('/3', {
		templateUrl: 'content.html',
		controller: 'ctrl_3',
	})
	.when('/4', {
		templateUrl: 'content.html',
		controller: 'ctrl_4',
	})
	.when('/13', {
		templateUrl: 'content.html',
		controller: 'ctrl_13',
	})
	.when('/14', {
		templateUrl: 'content.html',
		controller: 'ctrl_14',
	})
	.when('/15', {
		templateUrl: 'content.html',
		controller: 'ctrl_15',
	})
	.when('/21', {
		templateUrl: 'content.html',
		controller: 'ctrl_21',
	})
	.when('/22', {
		templateUrl: 'content.html',
		controller: 'ctrl_22',
	})
	.when('/31', {
		templateUrl: 'content.html',
		controller: 'ctrl_31',
	})
	.when('/32', {
		templateUrl: 'content.html',
		controller: 'ctrl_32',
	})
	.when('/34', {
		templateUrl: 'content.html',
		controller: 'ctrl_34',
	})
	.when('/35', {
		templateUrl: 'content.html',
		controller: 'ctrl_35',
	})
	.when('/37', {
		templateUrl: 'content.html',
		controller: 'ctrl_37',
	})
	.when('/38', {
		templateUrl: 'content.html',
		controller: 'ctrl_38',
	})
	.when('/39', {
		templateUrl: 'content.html',
		controller: 'ctrl_39',
	})
	.when('/41', {
		templateUrl: 'content.html',
		controller: 'ctrl_41',
	})
	.when('/42', {
		templateUrl: 'content.html',
		controller: 'ctrl_42',
	})
	.when('/43', {
		templateUrl: 'content.html',
		controller: 'ctrl_43',
	})
	.when('/45', {
		templateUrl: 'content.html',
		controller: 'ctrl_45',
	})
	.when('/47', {
		templateUrl: 'content.html',
		controller: 'ctrl_47',
	})
	.when('/49', {
		templateUrl: 'content.html',
		controller: 'ctrl_49',
	})
	.when('/50', {
		templateUrl: 'content.html',
		controller: 'ctrl_50',
	})
	.otherwise({
		redirectTo: '/0'
	})
}]);

mainApp.controller('ctrl_0', function($scope) {
	$scope.address = [
		'Karukappadath kunjithaichalil',
		'P.O. Kara',
		'Thrissur, Kerala',
		'PIN: 680671',
	]
	$scope.contacts = [
		{id:	0},
		{id:	5},
		{id:	6},
		{id:	7},
		{id:	8},
		{id:	9},
		{id:	10},
		{id:	1},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_1', function($scope) {
	$scope.address = [
		'"Shreyas", Karukappadath House',
		'Chathedath parambu, P.O. Kodungallur',
		'Thrissur, Kerala',
		'PIN: 680664',
	]
	$scope.contacts = [
		{id:	1},
		{id:	2},
		{id:	3},
		{id:	4},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_11', function($scope) {
	$scope.address = [
		'Karukappadath puthanveedu',
		'P.O. Eriyad',
		'Thrissur, Kerala',
		'PIN: ---',
	]
	$scope.contacts = [
		{id:	11},
		{id:	12},
		{id:	13},
		{id:	14},
		{id:	15},
		{id:	5},
		{id:	16},
		{id:	17},
		{id:	18},
		{id:	19},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_6', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	6},
		{id:	20},
		{id:	21},
		{id:	22},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_23', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	23},
		{id:	7},
		{id:	24},
		{id:	25},
		{id:	26},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_27', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	27},
		{id:	8},
		{id:	28},
		{id:	29},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_9', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	9},
		{id:	30},
		{id:	31},
		{id:	32},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_10', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	10},
		{id:	33},
		{id:	34},
		{id:	35},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_36', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	36},
		{id:	24},
		{id:	37},
		{id:	38},
		{id:	39},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_25', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	25},
		{id:	40},
		{id:	41},
		{id:	42},
		{id:	43},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_26', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	26},
		{id:	44},
		{id:	45},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_28', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	28},
		{id:	46},
		{id:	47},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_29', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	29},
		{id:	48},
		{id:	49},
		{id:	50},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_3', function($scope) {
	$scope.address = [
		'"Shreyas", Karukappadath House',
		'Chathedath parambu, P.O. Kodungallur',
		'Thrissur, Kerala',
		'PIN: 680664',
	]
	$scope.contacts = [
		{id:	3},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_4', function($scope) {
	$scope.address = [
		'"Shreyas", Karukappadath House',
		'Chathedath parambu, P.O. Kodungallur',
		'Thrissur, Kerala',
		'PIN: 680664',
	]
	$scope.contacts = [
		{id:	4},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_13', function($scope) {
	$scope.address = [
		'Karukappadath puthanveedu',
		'P.O. Eriyad',
		'Thrissur, Kerala',
		'PIN: ---',
	]
	$scope.contacts = [
		{id:	13},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_14', function($scope) {
	$scope.address = [
		'Karukappadath puthanveedu',
		'P.O. Eriyad',
		'Thrissur, Kerala',
		'PIN: ---',
	]
	$scope.contacts = [
		{id:	14},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_15', function($scope) {
	$scope.address = [
		'Karukappadath puthanveedu',
		'P.O. Eriyad',
		'Thrissur, Kerala',
		'PIN: ---',
	]
	$scope.contacts = [
		{id:	15},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_21', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	21},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_22', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	22},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_31', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	31},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_32', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	32},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_34', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	34},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_35', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	35},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_37', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	37},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_38', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	38},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_39', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	39},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_41', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	41},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_42', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	42},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_43', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	43},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_45', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	45},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_47', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	47},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_49', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	49},
	];
	setValues($scope.contacts);
});

mainApp.controller('ctrl_50', function($scope) {
	$scope.address = [
		'',
		'',
		'',
		'',
	]
	$scope.contacts = [
		{id:	50},
	];
	setValues($scope.contacts);
});

