// node modules
const fs = require('fs');
const inquirer = require('inquirer');

const renderHtml = require('./src/generateMarkdown');
const { writeHtml } = require('./src/writehtml');

const employeeArray = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { number } = require('yargs');



// Create an array of questiosn for user input
const promptUser = () => {
    console.log('prompt')
    inquirer.prompt ([
        {
            type: 'input',
            name: 'manager',
            message: 'What is your managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your managers name!');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'managerId',
            message: 'What is managers id number',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a number.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: 'What is managers email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Enter valid email');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('Enter valid office number!');
                    return false;
                }
            }
        },
        
    ]) .then(data => {
        const manager = new Manager(data.manager, data.managerId, data.managerEmail, data.officeNumber);
        employeeArray.push(manager);
        addWorker();
    })
}

// function to add more emplooyee
function addWorker() {
    console.log('worker');
    inquirer.prompt([
        {
            type: 'list',
            name: 'chooseEmployee',
            message: 'What employee would you like to add?',
            choices: ['engineer', 'intern', 'quit'],
            

    }
    ]) .then(data => {
        if (data.chooseEmployee === 'intern') {
        addIntern()
    } else if(data.chooseEmployee === 'engineer') {
        addEngineer() 
    } else if(data.chooseEmployee === 'quit') {
        endQuestions()
    }
    })}


function addIntern() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'intern',
            message: 'What is your intern name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your intern name!');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'internId',
            message: 'What is intern id number',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a number.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'internEmail',
            message: 'What is intern email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Enter valid email');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: 'What school did you go to?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Enter valid office number!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewTeamMember',
            message:'Would you like to add another employee?',
            default: true
        }
]) .then(data => {
    const intern = new Intern(data.intern, data.internId, data.internEmail, data.school);
    employeeArray.push(intern);
    addWorker();
})
}

function addEngineer() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'engineer',
            message: 'What is your engineer name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your engineer name!');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'engineerId',
            message: 'What is engineer id number',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a number.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'engineerEmail',
            message: 'What is engineer email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Enter valid email');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'engineerGithub',
            message: 'What is engineers github?',
            validate: engineerInput => {
                if (engineerInput) {
                    return true;
                } else {
                    console.log('Enter valid github name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewTeamMember',
            message:'Would you like to add another employee?',
            default: true
        }
]) .then(data => {
    const engineer = new Engineer(data.engineer, data.engineerId, data.engineerEmail, data.engineerGithub);
    employeeArray.push(engineer);
    addWorker();
})
}

function endQuestions() {
    renderHtml(employeeArray)
}





promptUser();
// Function call to initialize app
