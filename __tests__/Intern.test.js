//Imports the Intern class
const Intern = require("../lib/Intern");

//Tests the creation of the intern object
test('Intern object created', () => {
    const testIntern = new Intern('Justin', 1232414, 'justinkearney@gmail.com', 'Acadia');
    expect(testIntern.employeeSchool).toEqual(expect.any(String));
});

//Tests the getSchool() method to ensure that a string is received
test('This should retrieve the employee school from the getSchool() method', () => {
    const testIntern = new Intern('Justin', 1232414, 'justinkearney@gmail.com', 'Acadia');
    expect(testIntern.employeeSchool).toEqual(expect.stringContaining(testIntern.employeeSchool.toString()));
});