angularFormsApp.factory('DataService',
    ["$http",
    function ($http) {
        var getEmployees = function () {
            return $http.get("Employee/GetEmployees");
        };

        var getEmployee = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    fullName: "Gupta Nitin",
                    notes: "it is wokring",
                    email:"abc@abc.com.au",
                    department: "Engineering",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }

            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return $http.post("Employee/Create", newEmployee);
        };

        var updateEmployee = function (employee) {
            return true;
        };

        return {
            getEmployee: getEmployee,
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployees: getEmployees
        };

    }]);