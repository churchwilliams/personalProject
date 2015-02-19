var app = angular.module('Contacts');

app.controller('ContactsCtrl', function($scope, contacts) {
	$scope.contacts = contacts;
});