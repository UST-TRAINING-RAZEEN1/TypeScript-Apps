
interface Employee {
    eid: number;               
    name: string;              
    age: number;               
    email: string;             
    isPresent: boolean;         
    skills: string[];   
    salary: number;
    department: string;
}


const employees: Employee[] = [];


function addEmployee(employee: Employee): void {
    if (employees.some(emp => emp.eid === employee.eid)) {
        console.log(`Employee with eid ${employee.eid} already exists.`);
    } else {
        employees.push(employee);
        console.log(`Employee ${employee.name} added successfully.`);
    }
}


const employee1: Employee = {
    eid: 1,
    name: "Razeen Mahroof",
    age: 23,
    email: "r@ust.com",
    isPresent: true,
    skills: ["JavaScript", "TypeScript", "React","mysql"],
    salary: 400000,
    department: 'SD1'
};

const employee2: Employee = {
    eid: 2,
    name: "Basith V P",
    age: 25,
    email: "b@ust.com",
    isPresent: true,
    skills: ["python","nodejs","java"],
    salary: 1200000,
    department: "SD1"
};


addEmployee(employee1);
addEmployee(employee2);



console.log(employees);
