// Imports employee class
const Employee = require("../lib/Employee");

//Testing creation of employee objects by ensuring the correct property types
test('Employee object created', () => {
    const testEmployee = new Employee('Devin', 1291298, 'devinkearney@gmail.com');
    expect(testEmployee.employeeEmail).toEqual(expect.any(String));
    expect(testEmployee.employeeID).toEqual(expect.any(Number));
    expect(testEmployee.employeeName).toEqual(expect.any(String));
});


//Tests the getName method to ensure it retrieves a string
test('This should retrieve the employee name from the getName() method.', () => {
    const testEmployee = new Employee('Devin', 1291298, 'devinkearney@gmail.com');
    expect(testEmployee.getName()).toEqual(expect.stringContaining(testEmployee.employeeName.toString()));
});

//Tests the getID method to ensure it retrieves a number
test('This should retrieve the employee ID from the getID() method.', () => {
    const testEmployee = new Employee('Devin', 1291298, 'devinkearney@gmail.com');
    expect(testEmployee.getID()).toEqual(expect.any(Number));
});

//Tests the getEmail method to ensure it retrieves a string
test('This should retrieve the employee email from the getEmail() method.', () => {
    const testEmployee = new Employee('Devin', 1291298, 'devinkearney@gmail.com');
    expect(testEmployee.getEmail()).toEqual(expect.stringContaining(testEmployee.employeeEmail.toString()));
});

//Tests the getRole method to ensure it retrieves the string "Employee"
test('This should retrieve the role "Employee" from the getRole() method.', () => {
    const testEmployee = new Employee('Devin', 1291298, 'devinkearney@gmail.com');
    expect(testEmployee.getRole()).toEqual("Employee");
});