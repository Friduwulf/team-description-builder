const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeTeam = [];

// const generateHTML = require("./src/generateHTML");

//Function to a run inquirer and select a new employee to build
const newEmployee = () => {
    return inquirer.prompt([
        {
            type:"list",
            name:"employeeList",
            message:"Which employee would you like to add?",
            choices:[
                "Engineer",
                "Intern",
            ],
        }
    ])
    .then((response) => {
        console.log(response.employeeList);
        if(response.employeeList === "Manager") {
            newManager();
        } else if(response.employeeList === "Engineer") {
            newEngineer();
        } else if(response.employeeList === "Intern") {
            newIntern();
        }
    })
};
//Function to build a new manager at the start of the application
const newManager = () => {
    console.log("-------------Welcome to team building bot 9000!-------------")
    console.log("Lets begin building your team. Lets start with your manager!")
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the manager's name?",
        },
        {
            type:"input",
            name:"ID",
            message:"What is the manager's employee ID?",
        },
        {
            type:"input",
            name:"email",
            message:"What is the email address used by the manager?",
        },
        {
            type:"input",
            name:"officeNumber",
            message:"What is the number of the employees office?",
        },
        {
            type:"confirm",
            name:"moreEmployees",
            message:"Are there any more employees?",
        },
    ])
    .then((response) => {
        response.role = 'Manager';
        employeeTeam.push(response);
        if(response.moreEmployees === true) {
            console.log(response);
            newEmployee();
        } else {
            console.log(employeeTeam);
            console.log(response);
            return response;
        }
    })
};
//function to build a new Intern
const newIntern = () => {
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the intern's name?",
        },
        {
            type:"input",
            name:"ID",
            message:"What is the intern's employee ID?",
        },
        {
            type:"input",
            name:"email",
            message:"What is the email address used by the intern?",
        },
        {
            type:"input",
            name:"school",
            message:"What school does the intern attend?",
        },
        {
            type:"confirm",
            name:"moreEmployees",
            message:"Are there any more employees?",
        },
    ])
    .then((response) => {
        response.role = 'Intern';
        employeeTeam.push(response);
        if(response.moreEmployees === true) {
            console.log(response);
            newEmployee();
        } else {
            console.log(response);
            console.log(employeeTeam);
            return response;
        }
    }) 
};
//Function to build a new Engineer
const newEngineer = () => {
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the engineer's name?",
        },
        {
            type:"input",
            name:"ID",
            message:"What is the engineer's employee ID?",
        },
        {
            type:"input",
            name:"email",
            message:"What is the email address used by the engineer?",
        },
        {
            type:"input",
            name:"github",
            message:"What is the engineer's github username?",
        },
        {
            type:"confirm",
            name:"moreEmployees",
            message:"Are there any more employees?",
        },
    ])
    .then((response) => {
        response.role = 'Engineer';
        employeeTeam.push(response);
        if(response.moreEmployees === true) {
            console.log(response);
            newEmployee();
        } else {
            console.log(employeeTeam);
            console.log(response);
            return response;
        }
    }) 
};
//Initiate the application
newManager();