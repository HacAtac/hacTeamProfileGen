// node modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const { writeHtml } = require('./src/writehtml');

// Create an array of questiosn for user input
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: '',
            message: '',
            validate: blankInput => {
                if (blankInput) {
                    return true;
                } else {
                    console.log('Please enter something!');
                    return false;
                }
            }
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