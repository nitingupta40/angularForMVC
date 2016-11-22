angularFormsApp.controller('HomeController',
    ["$scope", "$location", "DataService",
    function ($scope, $location, DataService) {

        DataService.getEmployees().then(
            function (results) {
            var data = results.data;
        });

        $scope.showCreateEmployeeForm = function () {
            //$modal.open({
            //    templateUrl: 'app/EmployeeForm/employeeFormTemplate.html',
            //    controller: "employeeFormController"
            //});
            $location.path('/newEmployeeForm');

        };

        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id);
        };
    }]);

