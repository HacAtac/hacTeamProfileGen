// node modules
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./src/generateMarkdown');
const { writeHtml } = require('./src/writehtml');

const employeeArray = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { number } = require('yargs');


// Create an array of questiosn for user input
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'Manager',
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
            name: 'Id',
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
            name: 'email',
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
        {
            type: 'confirm',
            name: 'confirmNewTeamMember',
            message:'Would you like to add another employee?',
            default: true
        }
    ]) 
}

// create function to initialize app
function init() {
    promptUser()
        .then(questionsData => {
            return generateMarkdown(questionsData);
        })
        .then(writeMarkDown => {
            return writeHtml(writeMarkDown);
        })
}

// Function call to initialize app
init();