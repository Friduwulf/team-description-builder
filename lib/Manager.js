//Imports the employee class
const Employee = require("./Employee");

//Creates the Manager subclass to the employee class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //Pulls the name, id, and email properties from the employee constructor
        super (name, id, email);
        //Creates the manager office property
        this.managerOfficeNumber = officeNumber;
    }
    //Returns the manager office number
    getOfficeNumber() {
        return this.managerOfficeNumber;
    }
    //Overrides the role property to be manager
    getRole() {
        return "Manager";
    }
};

//Exports the manager class
module.exports = Manager;