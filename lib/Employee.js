//Creates the employee class
class Employee {
    //Creates the employee constructor
    constructor(name, id, email){
        this.employeeName = name;
        this.employeeID = id;
        this.employeeEmail = email;
    }
    //Returns the employee parameter
    getName() {
        return this.employeeName;
    }
    //Returns the ID parameter
    getID() {
        return this.employeeID;
    }
    //Returns the Email parameter
    getEmail() {
        return this.employeeEmail;
    }
    //Sets the role to employee
    getRole() {
        return "Employee";
    }
};
//Exports the employee class
module.exports = Employee;