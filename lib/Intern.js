//Import Employee class
const Employee = require("../lib/Employee");

//Creates the Intern subclass of the Employee class
class Intern extends Employee {
    constructor (name, id, email, school) {
        //Pulls the name, id, and email properties from the employee constructor
        super(name, id, email);
        //Creates the employeeSchool property
        this.employeeSchool = school;
    }
    //Returns the employee's school string
    getSchool() {
        return this.employeeSchool;
    }
    //Overrides the role property to be Intern
    getRole() {
        return "Intern";
    }
};

//Exports the Intern class
module.exports = Intern;