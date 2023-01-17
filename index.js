const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let cardsCompleted = '';
const employeeTeam = [];

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
            name:"id",
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
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        employeeTeam.push(manager);
        if(response.moreEmployees === true) {
            newEmployee();
        } else {
            console.log(employeeTeam);
            createTeamPage();
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
            name:"id",
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
        const intern = new Intern(response.name, response.id, response.email, response.school);
        employeeTeam.push(intern);
        if(response.moreEmployees === true) {
            newEmployee();
        } else {
            console.log(employeeTeam);
            createTeamPage();
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
            name:"id",
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
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        employeeTeam.push(engineer);
        if(response.moreEmployees === true) {
            newEmployee();
        } else {
            console.log(employeeTeam);
            createTeamPage();
            return response;
        }
    }) 
};

const createTeamPage = () => {
    fs.writeFile("./dist/myTeam.html", '', function(err) {
        if(err) throw err;
        console.log('New Team Created!');
    });
    createCards();
};

const createCards = () => {
    employeeTeam.forEach(function(employee) {
        const role = employee.getRole();
        if(role === 'Manager') {
           let newCard = `
            <div class="column is-one-third">
             <div class="card">
               <header class="card-header has-background-primary">
                   <p class="card-header-title has-text-white is-size-3 is-centered">
                       <span class="card-header-icon fa-solid fa-people-roof"></span>
                         Manager
                     </p>
               </header>
               <div class="card-content">
                   <ul>
                       <li class="box is-size-4 is-shadowless has-outline has-text-centered">
                           <strong>${employee.employeeName}</strong>
                       </li>
                       <li class="box is-shadowless has-text-centered">
                           <strong>Employee ID:</strong> ${employee.employeeID}
                       </li>
                       <li class="box is-shadowless has-text-centered">
                           <strong>Office Number:</strong> ${employee.managerOfficeNumber}
                       </li>
                   </ul>
               </div>
               <footer class="card-footer">
                 <a href="mailto:${employee.employeeEmail}" class="card-footer-item">Email</a>
               </footer>
             </div>
           </div>`;
            cardsCompleted += newCard;
        } 
        if(role === 'Intern') {
            let newCard = `
            <div class="column is-one-third">
                <div class="card">
                    <header class="card-header has-background-primary">
                        <p class="card-header-title has-text-white is-size-3 is-centered">
                            <span class="card-header-icon fa-solid fa-graduation-cap"></span>
                            Intern
                        </p>
                    </header>
                    <div class="card-content">
                        <ul>
                            <li class="box is-size-4 is-shadowless has-outline has-text-centered">
                                <strong>${employee.employeeName}</strong>
                            </li>
                            <li class="box is-shadowless has-text-centered">
                                <strong>Employee ID:</strong> ${employee.employeeID}
                            </li>
                            <li class="box is-shadowless has-text-centered">
                                <strong>School:</strong> ${employee.employeeSchool}
                            </li>
                        </ul>
                    </div>
                    <footer class="card-footer">
                    <a href="mailto:${employee.employeeEmail}" class="card-footer-item">Email</a>
                    </footer>
                </div>
            </div>`;
            cardsCompleted += newCard;
        } 
        if(role === 'Engineer') {
            let newCard = ` 
            <div class="column is-one-third">
                <div class="card">
                    <header class="card-header has-background-primary">
                        <p class="card-header-title has-text-white is-size-3 is-centered">
                            <span class="card-header-icon fa-solid fa-gear"></span>
                            Engineer
                        </p>
                    </header>
                    <div class="card-content">
                        <ul>
                            <li class="box is-size-4 is-shadowless has-outline has-text-centered">
                                <strong>${employee.employeeName}</strong>
                            </li>
                            <li class="box is-shadowless has-text-centered">
                                <strong>Employee ID:</strong> ${employee.employeeID}
                            </li>
                            <li class="box is-shadowless has-text-centered">
                                <strong>Github:</strong> <a href="http://github.com/${employee.employeeGithub}">${employee.employeeGithub}</a>
                            </li>
                        </ul>
                    </div>
                    <footer class="card-footer">
                    <a href="mailto:${employee.employeeEmail}" class="card-footer-item">Email</a>
                    </footer>
                </div>
            </div>`;
            cardsCompleted += newCard;
        };
        return cardsCompleted;
    });
        let html = 
        `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Your Team!</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <link rel="stylesheet" href="../src/style.css">
            <script src="https://kit.fontawesome.com/5695aaf63b.js" crossorigin="anonymous"></script>
        </head>
        <body>
            <section class="hero is-primary is-small is-danger">
            <div class="hero-body has-text-centered">
                <h1 class="title is-size-1">
                Your Team!
                </h1>
            </div>
            </section>
            <section class="columns is-multiline is-centered" id="columns">
            ${cardsCompleted}
            </section>
            </body>`;
        fs.appendFile('./dist/myTeam.html', html, function(err) {
            if(err) throw err;
            console.log('HTML Created');
        });
};

//Initiate the application
newManager();
