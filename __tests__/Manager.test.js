//Imports the Manager class
const Manager = require('../lib/Manager');

//Tests the creation of the manager object
test('Manager object created', () => {
    const testManager = new Manager('Tom', 1213143, 'thomas.kearney@gmail.com', 33);
    expect(testManager.managerOfficeNumber).toEqual(expect.any(Number));
});

//Tests the getOfficeNumber() method to ensure that a number is received
test('This should retrieve the manager office number from the getOfficeNumber() method.', () => {
    const testManager = new Manager('Tom', 1213143, 'thomas.kearney@gmail.com', 33);
    expect(testManager.getOfficeNumber()).toEqual(expect.any(Number));
});

//Tests the getRole() method to ensure that the role "Manager" is received
test('This should retrieve the role "Manager" from the getRole() method.', () => {
    const testManager = new Manager('Tom', 1213143, 'thomas.kearney@gmail.com', 33);
    expect(testManager.getRole()).toEqual("Manager");
});