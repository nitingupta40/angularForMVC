var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

angularFormsApp.config(
    ["$routeProvider", "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $routeProvider
            .when("/home", {
                templateUrl: "app/Home.html",
                controller: "HomeController"
            })
            .when("/newEmployeeForm", {
                templateUrl: 'app/EmployeeForm/employeeFormTemplate.html',
                controller: "employeeFormController"
            })
            .when("/updateEmployeeForm/:id", {
                templateUrl: 'app/EmployeeForm/employeeFormTemplate.html',
                controller: "employeeFormController"
            })
            .otherwise({
                redirectTo: "/home"
            });
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);