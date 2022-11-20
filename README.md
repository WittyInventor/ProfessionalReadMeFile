# ProfessionalReadMeFile

GIVEN a command-line application that accepts user input
<!-- node.js - using node to display information in the terminal from the file -->
<!-- this is what inquirer is for -->

WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project (added a title question) and sections entitled Description(done qs.), Table of Contents, Installation(done qs), usage(doneqs)), License(done), Contributing(doneqs), Tests(doneqs), and Questions(doneqs)

<!-- using an inquirer to display the questions - need an array of questions -->
<!-- const questions /  -->

WHEN I enter my project title
THEN this is displayed as the title of the README - DONE
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests - DONE
WHEN I choose a license for my application from a list of options DONE
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under DONE


WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile- DONE

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions DONE

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README DONE