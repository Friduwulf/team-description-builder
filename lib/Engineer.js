//Imports the employee class
const Employee = require("./Employee");

//Creates the engineer subclass to the employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //Pulls the name, id, and email properties from the employee constructor
        super (name, id, email);
        //Creates the employeeGithub property
        this.employeeGithub = github;
    }
//Returns the employee's github string
    getGithub() {
        return this.employeeGithub;
    }
//Overrides the role property to be engineer
    getRole() {
        return "Engineer";
    }
};

//Exports the engineer class
module.exports = Engineer;