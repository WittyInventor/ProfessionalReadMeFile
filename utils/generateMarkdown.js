// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// renderLicenseSection basically means getting the license
function renderLicenseSection(license) {
  var licenseBadge = ""
    if (license==="apache") {
         licenseBadge="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    // the if statement would be the 1st statement, the else if is the 2nd or 3rd or 4th,,can do as many as needed. 
    else if (license==="boost") {
        licenseBadge="[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
   }
// else means the last statement ONLY, everything else.
   else {
    licenseBadge="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
}

  return licenseBadge;
}

// TODO: Create a function to generate markdown for README
// the formatting of the content happens inside the string. The generateMarkdown(data) means that its generating the readme file data and then returning the data that the user inputs.  
 //  table of contents testing brackets and hashtags leads to the link of my github website for the user to test it.
//  [Description] - This is creating the link for the user and then the (#description) is making the link clickable for the user to connect them to that current sections such as testing, questions,etc. 
// function generateMarkdown means its generating the readMe file 

function generateMarkdown(data) {
  return `
  # Title: ${data.title} 
  ## Table of Contents 
  - [Description](#description) 
  - [Installation](#installation) 
  - [Usage](#usage) 
  - [License](#license) 
  - [Contributors](#contributors) 
  - [Testing](#testing) 
  - [Questions](#questions) 
  - [Email](#email) 

  ## Description:  
  ${data.description} 
    
  ## Installation: 
  ${data.installation} 
  
  ## Usage: 
  ${data.usage} 
  
  ## License: 
  ${renderLicenseSection(data.license)} 
  
  ## Contributors: 
  ${data.contributors} 
  
  ## Testing: 
  ${data.testing} 
  
  ## Questions: 
  ${data.questions} [link](https://github.com/${data.github} 
  
  ## Email: 
  ${data.email}
`;
}

module.exports = generateMarkdown;
// this code means to ONLY export this function ONLY