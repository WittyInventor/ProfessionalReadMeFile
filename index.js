// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// const inquirer means require which is an import method- and the "inquirer" is specfifying what we are importing.

const fs = require("fs")



// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    message: 'How would you describe your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How would you use this program?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What licensing is this under?',
    choices: ['apache','boost', 'BSD'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'How would you use this program?',
    name: 'usage',
  },

  {
    type: 'input',
    message: 'Who are your contributors?',
    name: 'contributors',
  },
  {
    type: 'input',
    message: 'How would you use this program?',
    name: 'usage',
  },

  {
    type: 'input',
    message: 'How is the protocol for testing?',
    name: 'testing',
  },

  {
    type: 'input',
    message: 'How can they contact you for questions',
    name: 'questions',
  }




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions) 

}

// Function call to initialize app
init();


// it asks the user questions 
    // use inquirer to make questions
// then it builds off of the users answers- like a survey/questionnaire.
    // using the fs tool to write the readme file.  
