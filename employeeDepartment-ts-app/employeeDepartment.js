var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    return Employee;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.findEmployees = function () {
        return this.employees;
    };
    Department.prototype.calculateTotalSalary = function () {
        return this.employees.reduce(function (total, emp) { return total + emp.salary; }, 0);
    };
    return Department;
}());
// Example usage
var engineering = new Department("Engineering");
engineering.addEmployee(new Employee(1, "Alice", 70000));
engineering.addEmployee(new Employee(2, "Charlie", 80000));
var marketing = new Department("Marketing");
marketing.addEmployee(new Employee(3, "Bob", 50000));
console.log("Engineering Employees:", engineering.findEmployees());
console.log("Total Salary in Engineering:", engineering.calculateTotalSalary());
console.log("Marketing Employees:", marketing.findEmployees());
console.log("Total Salary in Marketing:", marketing.calculateTotalSalary());
