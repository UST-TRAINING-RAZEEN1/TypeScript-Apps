class Employee {
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

class Department {
    name: string;
    employees: Employee[];

    constructor(name: string) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    findEmployees(): Employee[] {
        return this.employees;
    }

    calculateTotalSalary(): number {
        return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }
}

// Example usage
const engineering = new Department("Engineering");
engineering.addEmployee(new Employee(1, "Alice", 70000));
engineering.addEmployee(new Employee(2, "Charlie", 80000));

const marketing = new Department("Marketing");
marketing.addEmployee(new Employee(3, "Bob", 50000));

console.log("Engineering Employees:", engineering.findEmployees());
console.log("Total Salary in Engineering:", engineering.calculateTotalSalary());

console.log("Marketing Employees:", marketing.findEmployees());
console.log("Total Salary in Marketing:", marketing.calculateTotalSalary());
