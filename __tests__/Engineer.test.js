//Imports the Engineer class
const Engineer = require("../lib/Engineer");

//Tests the creation of the engineer object
test('Engineer object created', () => {
    const testEngineer = new Engineer('Myriam', 13901238, 'myriam.whalen@gmail.com', 'mWhal121');
    expect(testEngineer.employeeGithub).toEqual(expect.any(String));
});

//Tests the getGithub() method to ensure that a string is received
test('This should retrieve the employee gitHub from the getGithub() method.', () => {
    const testEngineer = new Engineer('Myriam', 13901238, 'myriam.whalen@gmail.com', 'mWhal121');
    expect(testEngineer.getGithub()).toEqual(expect.stringContaining(testEngineer.employeeGithub.toString()));
});

//Tests the getRole() method to ensure that the role "Engineer" is received
test('This should retrieve the role "Engineer" from the getRole() method.', () => {
    const testEngineer = new Engineer('Myriam', 13901238, 'myriam.whalen@gmail.com', 'mWhal121');
    expect(testEngineer.getRole()).toEqual("Engineer");
});