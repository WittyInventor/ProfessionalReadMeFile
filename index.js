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
  },

  {
    type: 'input',
    message: 'What is your github username?',
    name: 'github',
  },

  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}
// NOTE: data = user input data
// NOTE: a function is a series of instructions that are re-usable.
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions) 
.then(data=>{
    console.log(data)
    var licenseBadge = ""
    if (data.license==="apache") {
         licenseBadge="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    // the if statement would be the 1st statement, the else if is the 2nd or 3rd or 4th,,can do as many as needed. 
    else if (data.license==="boost") {
        licenseBadge="[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
   }
// else means the last statement ONLY, everything else.
   else {
    licenseBadge="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
}
    

    

    fs.writeFile("ProfessionalReadmeFile.md", 
    `# Title: ${data.title} \n\n## Description:  ${data.description} \n\n## Installation: ${data.installation} \n\n## Usage: ${data.usage} \n\n## License: ${licenseBadge} \n\n## Contributors: ${data.contributors} \n\n## Testing: ${data.testing} \n\n## Questions: ${data.questions} [link](https://github.com/${data.github})`, 
    (err)=>{
        err ? console.log(err) :
        console.log(`Success!`)
    }) 
    
}) 

}

// Function call to initialize app
init();


// it asks the user questions 
    // use inquirer to make questions
// then it builds off of the users answers- like a survey/questionnaire.
    // using the fs tool to write the readme file.  
