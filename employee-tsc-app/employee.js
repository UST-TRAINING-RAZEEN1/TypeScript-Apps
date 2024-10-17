var employees = [];
function addEmployee(employee) {
    if (employees.some(function (emp) { return emp.eid === employee.eid; })) {
        console.log("Employee with eid ".concat(employee.eid, " already exists."));
    }
    else {
        employees.push(employee);
        console.log("Employee ".concat(employee.name, " added successfully."));
    }
}
var employee1 = {
    eid: 1,
    name: "Razeen Mahroof",
    age: 23,
    email: "r@ust.com",
    isPresent: true,
    skills: ["JavaScript", "TypeScript", "React", "mysql"],
    salary: 400000,
    department: 'SD1'
};
var employee2 = {
    eid: 2,
    name: "Basith V P",
    age: 25,
    email: "b@ust.com",
    isPresent: true,
    skills: ["python", "nodejs", "java"],
    salary: 1200000,
    department: "SD1"
};
addEmployee(employee1);
addEmployee(employee2);
console.log(employees);
